import Link from "next/link";
import Image from "next/image";
import PlaceholderTile from "./PlaceholderTile";

export default function ProductCard({
  slug,
  name,
  category,
  description,
  image,
}: {
  slug: string;
  name: string;
  category: string;
  description: string;
  image?: string;
}) {
  return (
    <Link
      href={`/produits/${slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:border-navy transition-colors"
    >
      {image ? (
        <div className="relative aspect-[4/3] bg-surface">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        </div>
      ) : (
        <PlaceholderTile category={category} className="aspect-[4/3]" />
      )}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] uppercase tracking-[0.12em] text-navy">
          {category}
        </span>
        <h3 className="mt-2 font-display text-base leading-snug">{name}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>
        <span className="mt-4 text-sm font-medium text-foreground group-hover:text-navy transition-colors">
          Voir la fiche →
        </span>
      </div>
    </Link>
  );
}
