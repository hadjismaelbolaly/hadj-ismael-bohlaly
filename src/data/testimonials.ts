export type Testimonial = {
  initials: string;
  context: string;
  quote: string;
  rating: number;
};

// ⚠️ Contenu d'exemple à remplacer par de vrais avis clients (avec leur autorisation)
export const testimonials: Testimonial[] = [
  {
    initials: "M. D.",
    context: "Accompagnement après une séparation",
    quote:
      "J'ai été reçue avec beaucoup d'écoute et de respect, sans jamais me sentir jugée. Les échanges m'ont aidée à voir ma situation plus clairement.",
    rating: 5,
  },
  {
    initials: "S. K.",
    context: "Orientation professionnelle",
    quote:
      "Un vrai moment d'échange, posé et confidentiel. J'ai pu prendre une décision importante avec plus de sérénité.",
    rating: 5,
  },
  {
    initials: "A. T.",
    context: "Médiation familiale",
    quote:
      "Le sérieux et la discrétion de l'accompagnement m'ont mise en confiance dès le premier échange.",
    rating: 5,
  },
  {
    initials: "R. B.",
    context: "Accompagnement dans une période de doute",
    quote:
      "Une écoute attentive et un vrai suivi dans le temps, sans précipitation. Je me suis sentie accompagnée à mon rythme.",
    rating: 5,
  },
];
