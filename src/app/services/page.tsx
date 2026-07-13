import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesExplorer from "@/components/ServicesExplorer";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les 50 services d'accompagnement spirituel et personnel proposés par Hadj Ismael Bohlaly : vie personnelle, famille, vie professionnelle et modalités de consultation.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Un accompagnement pour chaque situation"
        intro="Cinquante formes d'accompagnement, réparties en quatre grands domaines. Chaque service dispose d'une fiche détaillée."
      />
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ServicesExplorer services={services} />
      </section>
    </div>
  );
}
