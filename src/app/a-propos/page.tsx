import Image from "next/image";
import type { Metadata } from "next";
import { ShieldCheck, BookOpen, Compass, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ThreadDivider from "@/components/ThreadDivider";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Biographie, parcours, valeurs et engagement de confidentialité de Hadj Ismael Bohlaly, praticien en accompagnement spirituel.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Confidentialité",
    text: "Chaque échange reste strictement privé. Ce qui est confié en consultation n'en sort jamais.",
  },
  {
    icon: Compass,
    title: "Respect",
    text: "Aucun jugement sur les convictions, la situation ou les choix de la personne accompagnée.",
  },
  {
    icon: Sparkles,
    title: "Personnalisation",
    text: "Pas de méthode unique : chaque accompagnement est construit autour des besoins exprimés.",
  },
  {
    icon: BookOpen,
    title: "Sérieux",
    text: "Une pratique exercée avec rigueur, dans un cadre professionnel et structuré.",
  },
];

export default function AProposPage() {
  return (
    <div>
      <PageHero
        eyebrow="À propos"
        title="Hadj Ismael Bohlaly"
        intro="Praticien en accompagnement spirituel, reconnu pour son écoute, sa discrétion et son approche personnalisée."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface lg:sticky lg:top-28">
            <Image
              src="/images/portrait-assis.jpg"
              alt="Portrait de Hadj Ismael Bohlaly"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 35vw, 90vw"
            />
          </div>
        </Reveal>

        <div className="space-y-14">
          <Reveal>
            <h2 className="font-display text-2xl">Biographie</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Hadj Ismael Bohlaly accompagne, depuis de nombreuses années, des
              personnes confrontées à des difficultés personnelles,
              familiales, professionnelles ou sentimentales. Son approche
              repose sur l'écoute, le respect et une attention constante
              portée à la situation de chacun.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Chaque consultation vise un même objectif : apporter des
              conseils, une orientation et un soutien adaptés aux besoins
              exprimés par la personne, dans un cadre confidentiel et
              respectueux de ses convictions.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl">Parcours</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Au fil des années, il a développé une expertise qui lui permet
              d'accueillir des personnes de différents horizons, en leur
              offrant un cadre d'écoute et un accompagnement individualisé.
              Cette expérience, construite consultation après consultation,
              nourrit aujourd'hui une pratique rigoureuse et éprouvée.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl">Méthode de travail</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Chaque accompagnement commence par un temps d'écoute, sans
              précipitation, pour bien comprendre la situation et ce qui est
              recherché. Vient ensuite un suivi construit sur mesure —
              ponctuel ou régulier — en présentiel, par téléphone ou en
              visioconférence selon vos préférences.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <ThreadDivider label="Valeurs" />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border p-6">
                <v.icon size={20} className="text-navy" />
                <h3 className="mt-4 font-display text-base">{v.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy text-background">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl">
              Un engagement de confidentialité, sans exception
            </h2>
            <p className="mt-5 opacity-80 leading-relaxed">
              Les échanges se déroulent dans la plus stricte confidentialité,
              avec une attention particulière portée au respect de la personne
              et de ses convictions. Cet engagement s'applique à chaque
              consultation, quel qu'en soit le sujet.
            </p>
            <a
              href={waLink("Bonjour, je souhaite en savoir plus sur l'accompagnement proposé.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-background text-navy px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Échanger en confidentialité
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
