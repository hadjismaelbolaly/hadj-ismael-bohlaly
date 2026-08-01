import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";

export const runtime = "nodejs";

const GITHUB_OWNER = process.env.GITHUB_OWNER || "hadjismaelbolaly";
const GITHUB_REPO = process.env.GITHUB_REPO || "hadj-ismael-bohlaly";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
const API_BASE = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents`;

function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function githubHeaders() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN n'est pas configuré.");
  }
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
  };
}

async function getFile(path: string) {
  const res = await fetch(
    `${API_BASE}/${path}?ref=${GITHUB_BRANCH}`,
    { headers: githubHeaders(), cache: "no-store" }
  );
  if (!res.ok) return null;
  return res.json();
}

async function putFile(
  path: string,
  contentBase64: string,
  message: string,
  sha?: string
) {
  const res = await fetch(`${API_BASE}/${path}`, {
    method: "PUT",
    headers: {
      ...githubHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      content: contentBase64,
      branch: GITHUB_BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Échec de mise à jour GitHub (${path}): ${text}`);
  }
  return res.json();
}

export async function POST(req: NextRequest) {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const title = (formData.get("title") as string || "").trim();
    const category = (formData.get("category") as string || "").trim();
    const content = (formData.get("content") as string || "").trim();
    const imageFile = formData.get("image") as File | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Le titre et le texte sont obligatoires." },
        { status: 400 }
      );
    }

    const baseSlug = slugify(title) || "article";
    const slug = `${baseSlug}-${Date.now().toString().slice(-5)}`;

    let imagePath: string | undefined;
    if (imageFile && imageFile.size > 0) {
      const ext = (imageFile.name.split(".").pop() || "jpg").toLowerCase();
      const bytes = Buffer.from(await imageFile.arrayBuffer());
      const relPath = `public/images/blog/${slug}.${ext}`;
      await putFile(
        relPath,
        bytes.toString("base64"),
        `Ajout image article: ${title}`
      );
      imagePath = `/images/blog/${slug}.${ext}`;
    }

    const paragraphs = content
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);

    const excerptSource = paragraphs[0] || content;
    const excerpt =
      excerptSource.length > 160
        ? excerptSource.slice(0, 157).trim() + "…"
        : excerptSource;

    const dataPath = "src/data/blog.json";
    const currentFile = await getFile(dataPath);
    if (!currentFile) {
      throw new Error("Impossible de lire la liste actuelle des articles.");
    }
    const currentContent = Buffer.from(currentFile.content, "base64").toString(
      "utf-8"
    );
    const posts = JSON.parse(currentContent);

    const newPost = {
      slug,
      title,
      excerpt,
      date: new Date().toISOString().slice(0, 10),
      category,
      content: paragraphs,
      ...(imagePath ? { image: imagePath } : {}),
    };

    posts.unshift(newPost);

    const updatedContent = Buffer.from(
      JSON.stringify(posts, null, 2),
      "utf-8"
    ).toString("base64");

    await putFile(
      dataPath,
      updatedContent,
      `Nouvel article: ${title}`,
      currentFile.sha
    );

    return NextResponse.json({ ok: true, slug });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
