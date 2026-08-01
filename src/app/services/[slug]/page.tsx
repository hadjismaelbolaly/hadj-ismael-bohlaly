import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { services, getServiceBySlug } from "@/data/services";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-14 sm:pt-20">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-navy transition-colors"
        >
          <ArrowLeft size={14} />
          Tous les services
        </Link>

        <Reveal>
          <span className="mt-8 inline-block text-xs uppercase tracking-[0.15em] text-navy">
            {service.categoryLabel}
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl leading-tight">
            {service.title}
          </h1>
          <p className="mt-6 text-muted leading-relaxed text-lg">
            {service.long}
          </p>

          <a
            href={waLink(
              `Bonjour, je souhaite prendre rendez-vous pour : ${service.title}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-navy text-background px-7 py-3.5 text-sm font-medium hover:bg-navy-light transition-colors"
          >
            Prendre rendez-vous pour ce service
          </a>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="bg-surface border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-xl mb-8">
              Autres services dans « {service.categoryLabel} »
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((s) => (
                <ServiceCard
                  key={s.slug}
                  slug={s.slug}
                  title={s.title}
                  short={s.short}
                  categoryLabel={s.categoryLabel}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
