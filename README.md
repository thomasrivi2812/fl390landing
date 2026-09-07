# FL390 Paris — landing « Boarding soon »

Page d'attente du Drop 01 de FL390, marque de streetwear d'inspiration
aéronautique fondée par un pilote de ligne. Un hero en forme de tableau des
départs d'aéroport (volets mécaniques) avec « Boarding Soon » et le compte à
rebours à l'intérieur, sur un fond de codes OACI qui dérivent lentement ; un
champ email ; un pied de page. Sous 640 px, le tableau se résume au titre et
au compte à rebours.
Déployable sur [Vercel](https://vercel.com) sans configuration ; le système de
design est celui de la boutique ([dépôt `FL390`](https://github.com/thomasrivi2812/FL390)).

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19) |
| Langage | TypeScript |
| Styles | Tailwind CSS 4 (tokens dans `src/app/globals.css`) |
| Polices | `next/font` — Krona One, Work Sans, Titillium Web, auto-hébergées |
| Lint | ESLint (`eslint-config-next`) |
| Node | 22 (voir `.nvmrc`) |

## Démarrer

```bash
npm install
cp .env.example .env.local
npm run dev
```

La page est disponible sur http://localhost:3000.

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm start` | Sert le build de production |
| `npm run lint` | ESLint |

## Structure

```
src/
  app/
    layout.tsx              # polices, métadonnées, pied de page
    page.tsx                # hero + liste d'embarquement
    globals.css             # tokens, glass, keyframes
    api/newsletter/         # inscription (webhook)
    opengraph-image.jpg     # 1200 × 630, aussi twitter-image.jpg
    icon.svg, robots.ts, sitemap.ts, not-found.tsx
  components/
    landing/                # hero, fond animé, tableau des départs, volets,
                            # compte à rebours, horloge, liste d'embarquement
    layout/                 # pied de page, logotype, formulaire email
  lib/site.ts               # identité, date d'embarquement, lignes du tableau, codes
```

## Variables d'environnement

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (Open Graph, sitemap, robots) |
| `NEXT_PUBLIC_LAUNCH_DATE` | Date visée par le compte à rebours, ISO 8601 avec fuseau. Défaut : `2026-10-07T00:00:00+02:00` |
| `NEWSLETTER_WEBHOOK_URL` | Endpoint recevant `{ "email": "…" }` ; absent → 503 et message dans le formulaire |

Les lignes du tableau (`BOARD_ROWS` dans `src/lib/site.ts`) sont décoratives :
codes OACI imprimés au dos des t-shirts, la dernière ligne étant le vol FL 390.
L'horloge affiche l'heure de Paris. Le compte à rebours est rendu neutre côté
serveur puis mis à jour chaque seconde dans le navigateur, chaque volet ne
basculant que lorsque son chiffre change ; arrivé à zéro, il reste à `00`.
`prefers-reduced-motion: reduce` coupe toutes les animations.

## À faire avant la mise en ligne

| # | Point | État |
| --- | --- | --- |
| 1 | Date d'embarquement | Défaut au 7 octobre 2026 — régler `NEXT_PUBLIC_LAUNCH_DATE` |
| 2 | Newsletter | `NEWSLETTER_WEBHOOK_URL` à renseigner |
| 3 | Favicon | `src/app/icon.svg` est un placeholder typographique |
