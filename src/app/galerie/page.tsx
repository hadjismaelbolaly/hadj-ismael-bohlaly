import type { Metadata } from "next";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VideoCard from "@/components/VideoCard";
import { InstagramIcon, YoutubeIcon } from "@/components/BrandIcons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Photos, vidéos et réalisations de Hadj Ismael Bohlaly — retrouvez également ses publications sur Instagram et YouTube.",
};

const placeholders = [
  "Consultation",
  "Cérémonie",
  "Atelier",
  "Événement",
  "Rencontre",
  "Portrait",
];

const videos = [
  { src: "/videos/galerie-1.mp4", poster: "/videos/poster-galerie-1.jpg", label: "Astuces & conseils" },
  { src: "/videos/galerie-2.mp4", poster: "/videos/poster-galerie-2.jpg", label: "Vie quotidienne" },
  { src: "/videos/galerie-3.mp4", poster: "/videos/poster-galerie-3.jpg", label: "Aperçu de l'accompagnement" },
];

export default function GaleriePage() {
  return (
    <div>
      <PageHero
        eyebrow="Galerie"
        title="Photos, vidéos et réalisations"
        intro="Un aperçu visuel de l'accompagnement proposé. La galerie s'enrichit progressivement de nouvelles photos et vidéos."
      />

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <h2 className="font-display text-xl sm:text-2xl mb-8">Vidéos</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <Reveal key={v.src} delay={i * 80}>
              <VideoCard src={v.src} poster={v.poster} label={v.label} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <h2 className="font-display text-xl sm:text-2xl mb-8">Photos</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Reveal className="sm:col-span-2 lg:col-span-2 sm:row-span-2">
            <div className="relative h-full min-h-64 rounded-3xl overflow-hidden bg-surface">
              <Image
                src="/images/portrait-ceremonial.jpg"
                alt="Hadj Ismael Bohlaly lors d'une cérémonie traditionnelle"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 90vw"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative h-full min-h-64 rounded-3xl overflow-hidden bg-surface">
              <Image
                src="/images/portrait-assis.jpg"
                alt="Portrait de Hadj Ismael Bohlaly"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw, 90vw"
              />
            </div>
          </Reveal>
          {placeholders.map((label, i) => (
            <Reveal key={label} delay={100 + i * 60}>
              <div className="h-full min-h-64 rounded-3xl border border-dashed border-border bg-surface flex flex-col items-center justify-center gap-2 text-muted">
                <ImagePlus size={22} />
                <span className="text-xs">{label} — à venir</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <Reveal>
            <h2 className="font-display text-2xl">
              Plus de contenu sur les réseaux
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Retrouvez davantage de vidéos et de publications sur Instagram
              et YouTube.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-navy hover:text-navy transition-colors"
              >
                <YoutubeIcon size={16} />
                Chaîne YouTube
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-navy hover:text-navy transition-colors"
              >
                <InstagramIcon size={16} />
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
