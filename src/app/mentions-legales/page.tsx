import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de Hadj Ismael Bohlaly.",
};

export default function MentionsLegalesPage() {
  return (
    <div>
      <PageHero eyebrow="Informations légales" title="Mentions légales" />
      <section className="mx-auto max-w-2xl px-6 pb-24 space-y-8 text-muted leading-relaxed">
        <div>
          <h2 className="font-display text-lg text-foreground mb-2">Éditeur du site</h2>
          <p>
            {site.name}
            <br />
            Téléphone : {site.phoneDisplay}
            <br />
            E-mail : {site.email}
            <br />
            [Statut / forme juridique et numéro d&apos;immatabricule à
            compléter selon votre situation]
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-foreground mb-2">Hébergement</h2>
          <p>[Nom et adresse de l&apos;hébergeur à compléter, ex. Vercel Inc.]</p>
        </div>
        <div>
          <h2 className="font-display text-lg text-foreground mb-2">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images,
            logos) est la propriété de {site.name}, sauf mention contraire.
            Toute reproduction sans autorisation préalable est interdite.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-foreground mb-2">Responsabilité</h2>
          <p>
            Les informations proposées sur ce site le sont à titre indicatif.
            {" "}{site.name} ne saurait être tenu responsable d&apos;une
            interprétation ou d&apos;un usage inapproprié de ces informations.
          </p>
        </div>
      </section>
    </div>
  );
}
