"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ServiceCard from "./ServiceCard";
import type { Service } from "@/data/services";
import { serviceCategories } from "@/data/services";

export default function ServicesExplorer({ services }: { services: Service[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesCategory = category === "all" || s.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        s.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [services, query, category]);

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
            placeholder="Rechercher un service…"
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
          {serviceCategories.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                category === c.key
                  ? "bg-navy text-background border-navy"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted py-16">
          Aucun service ne correspond à votre recherche.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <ServiceCard
              key={s.slug}
              slug={s.slug}
              title={s.title}
              short={s.short}
              categoryLabel={s.categoryLabel}
            />
          ))}
        </div>
      )}
    </div>
  );
}
