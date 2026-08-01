import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/blog";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 pt-16 pb-24 sm:pt-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-navy transition-colors"
      >
        <ArrowLeft size={14} />
        Tous les articles
      </Link>

      <Reveal>
        <div className="mt-8 flex items-center gap-3 text-xs text-muted">
          <span className="text-navy uppercase tracking-wider">
            {post.category}
          </span>
          <span>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h1 className="mt-4 font-display text-3xl sm:text-4xl leading-tight">
          {post.title}
        </h1>

        {post.image && (
          <div className="relative mt-8 aspect-[16/9] rounded-2xl overflow-hidden bg-surface">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 700px, 100vw"
              priority
            />
          </div>
        )}

        <div className="mt-8 space-y-5 text-muted leading-relaxed text-lg">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-surface border border-border p-7 text-center">
          <p className="font-display text-lg">
            Vous vous reconnaissez dans cette situation ?
          </p>
          <a
            href={waLink(
              `Bonjour, j'ai lu votre article « ${post.title} » et je souhaite échanger.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full bg-navy text-background px-6 py-3 text-sm font-medium hover:bg-navy-light transition-colors"
          >
            Prendre rendez-vous
          </a>
        </div>
      </Reveal>
    </article>
  );
}
