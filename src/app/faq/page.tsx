import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Réponses aux questions les plus fréquentes sur les consultations, la confidentialité et les commandes chez Hadj Ismael Bohlaly.",
};

export default function FaqPage() {
  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        title="Questions fréquentes"
        intro="Retrouvez ici les réponses aux questions les plus courantes. Pour toute autre demande, contactez directement Hadj Ismael Bohlaly."
      />
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <Accordion items={faqItems} />
      </section>
    </div>
  );
}
