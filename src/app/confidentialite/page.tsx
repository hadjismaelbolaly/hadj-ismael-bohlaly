import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et de protection des données du site de Hadj Ismael Bohlaly.",
};

export default function ConfidentialitePage() {
  return (
    <div>
      <PageHero
        eyebrow="Informations légales"
        title="Politique de confidentialité"
      />
      <section className="mx-auto max-w-2xl px-6 pb-24 space-y-8 text-muted leading-relaxed">
        <div>
          <h2 className="font-display text-lg text-foreground mb-2">
            Confidentialité des consultations
          </h2>
          <p>
            Le contenu des échanges lors des consultations avec{" "}
            {site.name} reste strictement confidentiel et n&apos;est
            communiqué à aucun tiers.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-foreground mb-2">
            Données collectées
          </h2>
          <p>
            Les informations transmises via le formulaire de contact (nom,
            coordonnées, message) sont utilisées uniquement pour vous
            répondre et ne sont ni vendues ni partagées avec des tiers.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-foreground mb-2">
            Cookies
          </h2>
          <p>
            Ce site utilise uniquement des réglages techniques nécessaires à
            son fonctionnement (par exemple, la mémorisation du mode clair ou
            sombre choisi), sans suivi publicitaire.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-foreground mb-2">
            Vos droits
          </h2>
          <p>
            Vous pouvez à tout moment demander l&apos;accès, la modification
            ou la suppression de vos données personnelles en écrivant à{" "}
            {site.email}.
          </p>
        </div>
      </section>
    </div>
  );
}
