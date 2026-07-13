import raw from "./products.json";

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  usage: string;
  image?: string;
};

export const products = raw as Product[];

export const productCategories = Array.from(
  new Set(products.map((p) => p.category))
);

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
