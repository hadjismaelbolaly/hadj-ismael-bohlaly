import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Ear, Compass, HeartHandshake, Star, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ThreadDivider from "@/components/ThreadDivider";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { site, waLink } from "@/lib/site";

const benefits = [
  {
    icon: Ear,
    title: "Une écoute sans jugement",
    text: "Chaque situation est accueillie avec attention, quel que soit le sujet qui vous amène.",
  },
  {
    icon: ShieldCheck,
    title: "Une confidentialité totale",
    text: "Ce qui est partagé en consultation reste strictement entre vous et Hadj Ismael Bohlaly.",
  },
  {
    icon: Compass,
    title: "Un accompagnement personnalisé",
    text: "Aucun parcours type : chaque suivi est construit autour de votre situation et de votre rythme.",
  },
  {
    icon: HeartHandshake,
    title: "Une relation de confiance",
    text: "Un cadre respectueux, pensé pour vous permettre de vous exprimer librement.",
  },
];

const featuredSlugs = [
  "guidance-spirituelle-personnalisee",
  "accompagnement-apres-une-separation",
  "orientation-de-carriere",
  "recherche-dapaisement-interieur",
  "mediation-familiale",
  "accompagnement-pour-retrouver-la-confiance-en-soi",
];
const featuredServices = services.filter((s) => featuredSlugs.includes(s.slug));

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.15em] text-navy">
            Accompagnement spirituel &amp; personnel
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight">
            Retrouver la clarté,
            <br />
            <span className="italic">en toute confidentialité.</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
            Hadj Ismael Bohlaly accompagne, avec écoute et discrétion, les
            personnes confrontées à des difficultés personnelles, familiales,
            professionnelles ou sentimentales.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={waLink("Bonjour, je souhaite prendre rendez-vous.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-navy text-background px-7 py-3.5 text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Nous contacter
            </a>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-navy transition-colors"
            >
              Découvrir son approche
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <Reveal className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface">
            <Image
              src="/images/portrait-ceremonial.jpg"
              alt="Hadj Ismael Bohlaly, praticien en accompagnement spirituel"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
          <svg
            className="hidden sm:block absolute -bottom-6 -left-6 w-24 h-24 text-navy"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="thread-line"
              d="M5 80 C 30 90, 40 40, 95 20"
              stroke="currentColor"
              strokeWidth="1.4"
              pathLength="1"
            />
          </svg>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <ThreadDivider />
      </div>

      {/* Présentation */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl leading-snug">
            Un accompagnement fondé sur le respect, la discrétion et l'écoute
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Reconnu pour son écoute et son approche personnalisée, Hadj Ismael
            Bohlaly propose un suivi adapté à chaque situation. Ses valeurs de
            respect et de confidentialité guident chaque consultation, avec un
            seul objectif : vous apporter des conseils, une orientation et un
            soutien véritablement adaptés à vos besoins.
          </p>
        </Reveal>
      </section>

      {/* Bénéfices */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-background border border-border p-6">
                  <b.icon size={20} className="text-navy" />
                  <h3 className="mt-4 font-display text-base leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {b.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-navy">
                Ce que propose l'accompagnement
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl">
                Un aperçu des services
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium hover:text-navy transition-colors shrink-0"
            >
              Voir les 50 services
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <ServiceCard
                slug={s.slug}
                title={s.title}
                short={s.short}
                categoryLabel={s.categoryLabel}
              />
            </Reveal>
          ))}
        </div>
        <Link
          href="/services"
          className="sm:hidden mt-8 inline-flex items-center gap-1.5 text-sm font-medium hover:text-navy transition-colors"
        >
          Voir les 50 services
          <ArrowRight size={14} />
        </Link>
      </section>

      {/* Pourquoi choisir */}
      <section className="bg-navy text-background">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.15em] opacity-70">
              Pourquoi choisir Hadj Ismael Bohlaly
            </span>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl leading-snug">
              Une expertise construite au fil des années, au service de
              personnes de tous horizons
            </h2>
            <p className="mt-6 opacity-80 leading-relaxed max-w-2xl mx-auto">
              Au fil du temps, il a développé une expertise qui lui permet
              d'accueillir chacun avec un cadre d'écoute véritablement
              individualisé — un service sérieux et professionnel, où la
              relation de confiance prime sur tout le reste.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Témoignages preview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl">
              Ce qu'en disent les personnes accompagnées
            </h2>
            <Link
              href="/temoignages"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium hover:text-navy transition-colors shrink-0"
            >
              Tous les témoignages
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.initials + i} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border p-6 flex flex-col">
                <div className="flex gap-0.5 text-navy" aria-hidden="true">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed flex-1">
                  « {t.quote} »
                </p>
                <p className="mt-4 text-xs text-muted">
                  {t.initials} — {t.context}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-surface border border-border px-8 py-14 text-center">
            <h2 className="font-display text-2xl sm:text-3xl">
              Prêt à échanger, en toute confidentialité ?
            </h2>
            <p className="mt-4 text-muted max-w-lg mx-auto">
              Un premier échange suffit pour comprendre votre situation et
              vous orienter vers l'accompagnement le plus adapté.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink("Bonjour, je souhaite prendre rendez-vous.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-navy text-background px-7 py-3.5 text-sm font-medium hover:bg-navy-light transition-colors"
              >
                Prendre rendez-vous
              </a>
              <a
                href={`tel:${site.phone}`}
                className="text-sm font-medium hover:text-navy transition-colors"
              >
                Ou appeler {site.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
