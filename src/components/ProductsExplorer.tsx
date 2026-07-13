"use client";

import { useMemo, useState } from "react";
import { Search, Play } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

export default function ProductsExplorer({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [playVideo, setPlayVideo] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        p.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [products, query, category]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit…"
            className="w-full rounded-full border border-border bg-background pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setCategory("all")}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              category === "all"
                ? "bg-navy text-background border-navy"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            Tous
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                category === c
                  ? "bg-navy text-background border-navy"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {category === "Gamme Lune Soleil" && (
        <div className="mb-10 rounded-2xl overflow-hidden border border-border bg-surface">
          <div className="relative mx-auto max-w-sm aspect-[9/16] bg-black">
            {playVideo ? (
              <video
                src="/videos/gamme-lune-soleil.mp4"
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full object-contain"
              />
            ) : (
              <button
                onClick={() => setPlayVideo(true)}
                className="absolute inset-0 h-full w-full group"
                aria-label="Lire la présentation vidéo de la gamme Lune Soleil"
              >
                <img
                  src="/videos/poster-lune-soleil.jpg"
                  alt="Aperçu vidéo de la gamme Lune Soleil"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <span className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center">
                    <Play size={26} className="text-navy ml-1" fill="currentColor" />
                  </span>
                </span>
              </button>
            )}
          </div>
          <p className="text-center text-sm text-muted py-4 px-4">
            Présentation de la gamme signature Lune Soleil
          </p>
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-center text-muted py-16">
          Aucun produit ne correspond à votre recherche.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
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
      )}
    </div>
  );
}
