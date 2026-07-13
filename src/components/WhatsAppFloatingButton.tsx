import { site, waLink } from "@/lib/site";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={waLink("Bonjour, je souhaite prendre rendez-vous avec Hadj Ismael Bohlaly.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-navy text-background px-4 py-3 shadow-lg shadow-black/10 hover:bg-navy-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2 22l5.4-1.42a9.9 9.9 0 0 0 4.64 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.2.84.85-3.12-.2-.32a8.15 8.15 0 0 1-1.26-4.4c0-4.52 3.68-8.2 8.3-8.2a8.2 8.2 0 0 1 5.83 2.43 8.15 8.15 0 0 1 2.42 5.8c0 4.52-3.69 8.2-8.26 8.2Zm4.53-6.15c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.12-.56.12-.17.25-.65.8-.8.96-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.24a7.6 7.6 0 0 1-1.4-1.74c-.15-.25-.02-.38.11-.5.11-.11.25-.3.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
      <span className="hidden sm:inline text-sm font-medium">Discuter sur WhatsApp</span>
    </a>
  );
}
