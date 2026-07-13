export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "traverser-une-periode-de-doute",
    title: "Traverser une période de doute sans précipiter ses décisions",
    excerpt:
      "Le doute n'est pas un échec, c'est souvent le signe qu'une étape de réflexion est nécessaire avant d'avancer.",
    date: "2026-05-12",
    category: "Développement personnel",
    content: [
      "Il est fréquent de traverser des périodes où rien ne semble clair : une décision à prendre, une relation à réévaluer, un projet en suspens. Ce moment de flottement est souvent mal vécu, comme s'il fallait absolument trancher dans l'urgence.",
      "Prendre le temps d'un échange extérieur, avec une personne neutre et à l'écoute, permet souvent de reformuler la situation autrement. Ce n'est pas la précipitation qui apporte la clarté, mais la capacité à nommer ce qui pèse réellement.",
      "Un accompagnement personnalisé n'a pas pour but de décider à votre place, mais de vous donner l'espace nécessaire pour y voir plus clair, à votre rythme.",
    ],
  },
  {
    slug: "reconciliation-familiale-par-ou-commencer",
    title: "Réconciliation familiale : par où commencer ?",
    excerpt:
      "Renouer un lien familial abîmé demande souvent un tiers neutre pour ouvrir le dialogue.",
    date: "2026-04-03",
    category: "Famille",
    content: [
      "Les tensions familiales s'installent parfois sur de longues années, faites de non-dits et de blessures accumulées. Renouer le dialogue seul est souvent difficile, chacun restant sur ses positions.",
      "La médiation familiale propose un cadre différent : un espace où chacun peut s'exprimer sans être interrompu ni jugé, avec pour seul objectif de rétablir une communication apaisée.",
      "Ce travail prend du temps et ne se résume pas à une seule rencontre. Un accompagnement suivi permet d'avancer par étapes, au rythme de la famille concernée.",
    ],
  },
  {
    slug: "prendre-une-decision-professionnelle-importante",
    title: "Prendre une décision professionnelle importante en toute sérénité",
    excerpt:
      "Changer de voie, se lancer à son compte ou accepter une opportunité : quelques repères pour avancer avec plus de clarté.",
    date: "2026-02-20",
    category: "Vie professionnelle",
    content: [
      "Un choix de carrière engage souvent bien plus que la vie professionnelle : l'équilibre familial, la confiance en soi, le sens donné au quotidien.",
      "Avant de trancher, il est utile de prendre du recul sur ce qui motive réellement la décision : une opportunité saisie dans la précipitation ou un choix aligné avec ses valeurs profondes.",
      "Un accompagnement individuel permet d'explorer ces questions avec un regard extérieur, sans pression de temps, pour avancer avec plus de confiance.",
    ],
  },
];
