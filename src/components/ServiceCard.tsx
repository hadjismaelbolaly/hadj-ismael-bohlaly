import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
  slug,
  title,
  short,
  categoryLabel,
}: {
  slug: string;
  title: string;
  short: string;
  categoryLabel: string;
}) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-border bg-background p-6 h-full hover:border-navy transition-colors"
    >
      <div>
        <span className="text-[11px] uppercase tracking-[0.12em] text-navy">
          {categoryLabel}
        </span>
        <h3 className="mt-3 font-display text-lg leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
          {short}
        </p>
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-navy transition-colors">
        En savoir plus
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}
