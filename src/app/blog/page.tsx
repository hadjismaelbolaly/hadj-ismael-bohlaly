import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog & conseils",
  description:
    "Articles et conseils sur la spiritualité, le développement personnel et l'accompagnement des périodes difficiles, par Hadj Ismael Bohlaly.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Conseils &amp; réflexions"
        intro="Des articles sur la spiritualité, le développement personnel et l'accompagnement des périodes de vie difficiles."
      />
      <section className="mx-auto max-w-4xl px-6 pb-24 space-y-6">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex gap-5 rounded-2xl border border-border p-7 hover:border-navy transition-colors"
            >
              {post.image && (
                <div className="relative hidden sm:block w-32 shrink-0 rounded-xl overflow-hidden bg-surface">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="text-navy uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span>·</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h2 className="mt-3 font-display text-xl sm:text-2xl leading-snug">
                  {post.title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium group-hover:text-navy transition-colors">
                  Lire l&apos;article
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
