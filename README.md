# FL390 Paris — landing page

Landing page du Drop 01 de FL390, marque de streetwear d'inspiration
aéronautique fondée par un pilote de ligne. Page unique, pensée pour être
déployée sur [Vercel](https://vercel.com) sans configuration, à côté de la
boutique ([dépôt `FL390`](https://github.com/thomasrivi2812/FL390)) dont elle
reprend le système de design à l'identique.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19) |
| Langage | TypeScript |
| Styles | Tailwind CSS 4 (tokens dans `src/app/globals.css`) |
| Polices | `next/font` — Krona One, Work Sans, Titillium Web, auto-hébergées |
| Images | `next/image` sur les photographies de la marque (`public/img`) |
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

## Sections

Dans l'ordre de la page (`src/app/page.tsx`) :

1. **Hero** plein cadre sous l'en-tête en glass — « Cleared For Takeoff. »,
   deux appels à l'action (boutique, liste d'embarquement). Visuel paysage au
   dessus de 760 px, portrait en dessous.
2. **Marquee** typographique « NOT FOR EVERYONE ».
3. **Le drop** — six pièces (`src/lib/pieces.ts`), survol → visuel à plat,
   chaque carte renvoie vers la boutique.
4. **Plan de vol** — bandeau signature, vocabulaire cockpit.
5. **Manifeste** — photographie, déclaration, checklist pré-vol.
6. **Panneau olive** — « Discipline can take you places passion never will. »
7. **Lookbook** — cinq cadres, zoom au survol.
8. **Marquee** « SEE YOU AT FL390 ».
9. **Liste d'embarquement** — inscription newsletter (`POST /api/newsletter`).
10. **Pied de page** — liens boutique, logotype monumental, mentions.

Les ancres de navigation (`#drop`, `#manifeste`, `#lookbook`, `#embarquement`)
tiennent compte de la hauteur de l'en-tête via `scroll-padding-top`.

## Structure

```
src/
  app/
    layout.tsx              # polices, métadonnées, en-tête, pied de page
    page.tsx                # la landing
    globals.css             # tokens, recettes de glass, keyframes, reveal
    api/newsletter/         # inscription newsletter (webhook)
    opengraph-image.jpg     # 1200 × 630, aussi twitter-image.jpg
    icon.svg, robots.ts, sitemap.ts, not-found.tsx
  components/
    landing/                # hero, grille du drop, plan de vol, manifeste,
                            # lookbook, panneau, liste d'embarquement, reveal
    layout/                 # en-tête, ticker, pied de page, logotype, formulaire
    ui/                     # marquee, pastille de légende
  lib/
    site.ts                 # identité, URLs boutique, ancres, plan de vol
    pieces.ts               # les six pièces présentées
    format.ts
public/img/                 # photographies (JPEG ré-exportés des PNG sources)
```

## Variables d'environnement

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique de la landing (Open Graph, sitemap, robots) |
| `NEXT_PUBLIC_SHOP_URL` | URL de la boutique — tous les boutons et cartes pointent dessus |
| `NEWSLETTER_WEBHOOK_URL` | Endpoint recevant `{ "email": "…" }` ; absent → 503 et message dans le formulaire |

## Système de design

Identique à la boutique : `ink #000000`, `paper #FDFDFD`, `stone #EFEFEC`,
`burgundy #6D1111`, `navy #092242`, `navy-garment #1B2A4A`, `olive #27351B` ;
`font-display` (Krona One), `font-body` (Work Sans), `font-label` (Titillium
Web) ; trois recettes de glass avec repli opaque ; en-tête de 96 px.

**Mouvement** — entrée du hero (`fl-rise`, `fl-fade`, lente décélération du
visuel), apparition au défilement (`Reveal`, posée uniquement en JavaScript sur
les blocs hors écran : sans script tout est visible), marquees.
`prefers-reduced-motion: reduce` coupe tout.

## À faire avant la mise en ligne

| # | Point | État |
| --- | --- | --- |
| 1 | URL de la boutique | `NEXT_PUBLIC_SHOP_URL` — `https://fl390.paris` par défaut, à confirmer |
| 2 | Prix du sweat et du tote bag | Non renseignés dans `src/lib/pieces.ts`, la carte affiche « Drop 01 » |
| 3 | Liens des cartes | Vers `/shop` de la boutique ; à pointer vers chaque fiche quand les nouvelles pièces y seront |
| 4 | Newsletter | `NEWSLETTER_WEBHOOK_URL` à renseigner |
| 5 | Favicon | `src/app/icon.svg` est un placeholder typographique |
