import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import PlaceholderTile from "@/components/PlaceholderTile";
import { products, getProductBySlug } from "@/data/products";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-20">
        <Link
          href="/produits"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-navy transition-colors"
        >
          <ArrowLeft size={14} />
          Tous les produits
        </Link>

        <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            {product.image ? (
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-surface">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  priority
                />
              </div>
            ) : (
              <PlaceholderTile
                category={product.category}
                className="aspect-square rounded-3xl"
              />
            )}
          </Reveal>

          <Reveal delay={80}>
            <span className="text-xs uppercase tracking-[0.15em] text-navy">
              {product.category}
            </span>
            <h1 className="mt-4 font-display text-3xl leading-tight">
              {product.name}
            </h1>
            <p className="mt-5 text-muted leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 rounded-2xl border border-border p-5">
              <p className="text-xs uppercase tracking-wider text-muted">
                Mode d&apos;utilisation
              </p>
              <p className="mt-2 text-sm leading-relaxed">{product.usage}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={waLink(
                  `Bonjour, je souhaite commander : ${product.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-navy text-background px-7 py-3.5 text-sm font-medium hover:bg-navy-light transition-colors"
              >
                Commander sur WhatsApp
              </a>
              <span className="text-sm text-muted">Prix sur demande</span>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-surface border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-xl mb-8">
              Autres articles — {product.category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard
                  key={p.slug}
                  slug={p.slug}
                  name={p.name}
                  category={p.category}
                  description={p.description}
                  image={p.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
