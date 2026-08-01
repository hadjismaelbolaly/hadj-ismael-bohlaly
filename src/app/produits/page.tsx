import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductsExplorer from "@/components/ProductsExplorer";
import { products, productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Produits",
  description:
    "Huiles, encens, savons, bougies, parfums et accessoires artisanaux : découvrez la boutique de Hadj Ismael Bohlaly, dont la gamme signature Lune Soleil.",
};

export default function ProduitsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Boutique"
        title="Des articles artisanaux, choisis avec soin"
        intro="Huiles, encens, savons, bougies et accessoires — dont la gamme signature Lune Soleil. Chaque commande se finalise directement sur WhatsApp."
      />
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ProductsExplorer products={products} categories={productCategories} />
      </section>
    </div>
  );
}
