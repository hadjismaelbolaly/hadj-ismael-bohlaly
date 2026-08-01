import type { Metadata } from "next";
import { Phone, Mail, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { InstagramIcon, YoutubeIcon } from "@/components/BrandIcons";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Hadj Ismael Bohlaly par téléphone, WhatsApp, e-mail ou via le formulaire — réponse rapide et confidentielle.",
};

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Écrire directement",
    href: waLink("Bonjour, je souhaite vous contacter."),
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre situation"
        intro="Écrivez directement sur WhatsApp pour une réponse rapide, ou utilisez le formulaire ci-dessous."
      />

      <section className="mx-auto max-w-5xl px-6 pb-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <div className="space-y-4">
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.label === "WhatsApp" ? "_blank" : undefined}
                rel={m.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-2xl border border-border p-5 hover:border-navy transition-colors"
              >
                <span className="w-11 h-11 flex items-center justify-center rounded-full bg-navy-tint text-navy shrink-0">
                  <m.icon size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted">
                    {m.label}
                  </span>
                  <span className="block font-medium">{m.value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-navy hover:text-navy transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-navy hover:text-navy transition-colors"
            >
              <YoutubeIcon size={16} />
            </a>
          </div>

          <p className="mt-8 text-sm text-muted leading-relaxed">
            Toutes les demandes sont traitées avec la plus stricte
            confidentialité. Les consultations se font en présentiel, par
            téléphone ou en visioconférence, selon votre préférence.
          </p>
        </Reveal>

        <Reveal delay={80}>
          {/*
            Ce formulaire est prêt pour Formspree (aucun back-end requis) :
            1. Créez un compte gratuit sur https://formspree.io
            2. Créez un formulaire et copiez son ID
            3. Remplacez YOUR_FORM_ID ci-dessous par cet ID
          */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="rounded-3xl border border-border p-7 sm:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact" className="text-sm font-medium">
                Téléphone ou e-mail
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-navy text-background py-3.5 text-sm font-medium hover:bg-navy-light transition-colors"
            >
              Envoyer le message
            </button>
            <p className="text-xs text-muted text-center">
              Vos informations restent confidentielles et ne sont utilisées
              que pour vous répondre.
            </p>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
