import type { Metadata } from "next";
import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Avis et retours de personnes accompagnées par Hadj Ismael Bohlaly, dans le respect de leur anonymat.",
};

export default function TemoignagesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Témoignages"
        title="Ce qu'en disent les personnes accompagnées"
        intro="Par souci de confidentialité, les avis sont présentés avec les initiales des personnes concernées."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.initials + i} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border p-7">
                <div className="flex gap-0.5 text-navy" aria-hidden="true">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed">« {t.quote} »</p>
                <p className="mt-5 text-sm text-muted">
                  {t.initials} — {t.context}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <Reveal>
            <h2 className="font-display text-xl sm:text-2xl">
              Vous avez été accompagné(e) par Hadj Ismael Bohlaly ?
            </h2>
            <p className="mt-4 text-muted">
              Votre retour peut aider d'autres personnes à franchir le pas.
            </p>
            <a
              href={waLink("Bonjour, je souhaite laisser un témoignage.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-navy text-background px-7 py-3.5 text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Partager mon témoignage
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
