import Link from "next/link";
import { Phone } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./BrandIcons";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Découvrir",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/services", label: "Services" },
      { href: "/produits", label: "Produits" },
      { href: "/galerie", label: "Galerie" },
      { href: "/blog", label: "Blog & conseils" },
    ],
  },
  {
    title: "Assistance",
    links: [
      { href: "/temoignages", label: "Témoignages" },
      { href: "/faq", label: "Questions fréquentes" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Informations légales",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/confidentialite", label: "Politique de confidentialité" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg">{site.name}</p>
          <p className="mt-3 text-sm text-muted max-w-xs">
            Accompagnement spirituel personnalisé, dans le respect et la
            confidentialité.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:border-navy hover:text-navy transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:border-navy hover:text-navy transition-colors"
            >
              <YoutubeIcon size={16} />
            </a>
            <a
              href={`tel:${site.phone}`}
              aria-label="Téléphone"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:border-navy hover:text-navy transition-colors"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs uppercase tracking-wider text-muted mb-4">
              {col.title}
            </p>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/80 hover:text-navy transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <p>{site.phoneDisplay} · Consultations confidentielles</p>
        </div>
      </div>
    </footer>
  );
}
