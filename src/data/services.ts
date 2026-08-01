import raw from "./services.json";

export type Service = {
  id: number;
  slug: string;
  title: string;
  category: "famille" | "professionnel" | "modalites" | "personnel";
  categoryLabel: string;
  short: string;
  long: string;
};

export const services = raw as Service[];

export const serviceCategories = [
  { key: "personnel", label: "Cheminement personnel" },
  { key: "famille", label: "Famille & couple" },
  { key: "professionnel", label: "Vie professionnelle" },
  { key: "modalites", label: "Modalités de consultation" },
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
