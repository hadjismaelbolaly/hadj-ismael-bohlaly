"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const categories = [
  "Développement personnel",
  "Famille",
  "Vie professionnelle",
  "Spiritualité",
  "Conseils",
  "Actualités",
];

export default function NewArticleForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Le titre et le texte sont obligatoires.");
      return;
    }
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const res = await fetch("/api/admin/publish", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Une erreur est survenue lors de la publication.");
        setLoading(false);
        return;
      }
      router.push("/admin?published=1");
      router.refresh();
    } catch {
      setError("Une erreur est survenue. Vérifie ta connexion et réessaie.");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/admin"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-navy transition-colors"
      >
        <ArrowLeft size={14} />
        Retour
      </Link>

      <h1 className="mt-6 font-display text-2xl">Nouvel article</h1>
      <p className="mt-2 text-sm text-muted">
        L&apos;article sera publié automatiquement sur le site en 1 à 2
        minutes après validation.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label className="text-sm font-medium">Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-navy"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Catégorie</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-navy"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Photo (facultatif)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] ?? null)}
            className="mt-2 w-full text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Texte de l&apos;article</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={12}
            placeholder="Écris ton article ici. Sépare les paragraphes par une ligne vide."
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed focus:outline-none focus:border-navy resize-y"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-navy text-background py-3.5 text-sm font-medium hover:bg-navy-light transition-colors disabled:opacity-60"
        >
          {loading ? "Publication en cours..." : "Publier l'article"}
        </button>
      </form>
    </div>
  );
}
