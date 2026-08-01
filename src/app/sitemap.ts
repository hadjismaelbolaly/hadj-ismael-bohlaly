import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "a-propos",
    "services",
    "produits",
    "galerie",
    "temoignages",
    "faq",
    "blog",
    "contact",
    "mentions-legales",
    "confidentialite",
  ].map((path) => ({
    url: `${site.url}/${path}`,
    lastModified: new Date(),
  }));

  const servicePages = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const productPages = products.map((p) => ({
    url: `${site.url}/produits/${p.slug}`,
    lastModified: new Date(),
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticPages, ...servicePages, ...productPages, ...blogPages];
}
