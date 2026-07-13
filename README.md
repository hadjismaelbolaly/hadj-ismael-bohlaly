# Site — Hadj Ismael Bohlaly

Site vitrine premium construit avec Next.js (App Router), TypeScript et
Tailwind CSS. 100 % front-end, prêt à déployer sur Vercel.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:3000

## Déployer sur Vercel

1. Créez un compte sur https://vercel.com (gratuit)
2. Importez ce dossier comme nouveau projet (via GitHub ou l'upload direct)
3. Vercel détecte automatiquement Next.js — aucune configuration requise
4. Votre site est en ligne en quelques minutes

## À personnaliser avant mise en ligne

- **`src/lib/site.ts`** : téléphone, WhatsApp, Instagram, YouTube, e-mail,
  nom de domaine (`url`) — à mettre à jour avec votre vrai domaine.
- **`src/app/contact/page.tsx`** : le formulaire de contact utilise
  [Formspree](https://formspree.io) (gratuit, sans back-end). Créez un
  compte, un formulaire, et remplacez `YOUR_FORM_ID` par votre identifiant.
- **`src/data/testimonials.ts`** : contient des témoignages d'exemple à
  remplacer par de vrais avis clients (avec leur autorisation).
- **`src/data/services.json`** et **`src/data/products.json`** : les 50
  services et 60 produits ont des descriptions génériques générées à partir
  de vos listes. Affinez les textes au fil du temps si besoin, notamment
  pour les produits (ingrédients, volumes, prix).
- **Prix des produits** : aucun prix n'était fourni, les fiches affichent
  « Prix sur demande ». Ajoutez un champ `price` dans `products.json` si
  vous souhaitez afficher des prix fixes.
- **Photos** : seules 2 photos ont été fournies (page d'accueil et à
  propos). Les pages Produits et Galerie utilisent des visuels de
  substitution (icônes sur fond discret) en attendant vos vraies photos —
  ajoutez-les dans `public/images/` puis remplacez `PlaceholderTile` par
  `<Image />` dans les composants concernés.
- **`src/app/mentions-legales/page.tsx`** : complétez le statut juridique
  et l'hébergeur.

## Structure des pages

Accueil · À propos · Services (50 fiches) · Produits (60 fiches) ·
Galerie · Témoignages · Blog (3 articles d'exemple) · FAQ · Contact ·
Mentions légales · Politique de confidentialité.

## SEO

Titres, meta descriptions, Open Graph, `sitemap.xml` et `robots.txt` sont
générés automatiquement pour chaque page (voir `src/app/sitemap.ts`).
