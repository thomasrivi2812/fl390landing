# FL390 — Boarding soon, version Shopify

Même landing que ce dépôt, adaptée en **section de thème Shopify** autonome :
un seul fichier Liquid (HTML, CSS, JS et schéma), réglable dans le
personnalisateur. Testée avec Theme Check et sur le thème Horizon.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `sections/fl390-boarding.liquid` | La section : fond animé, tableau des départs, « BOARDING SOON », compte à rebours, formulaire email |
| `templates/page.boarding.json` | Gabarit de page prêt à l'emploi, qui ne contient que cette section |

## Installation dans l'éditeur de code

1. Dans **Boutique en ligne → Thèmes → Modifier le code**, ouvrir le dossier
   `sections`, cliquer sur **Ajouter un nouveau fichier**, le nommer
   `fl390-boarding.liquid`, coller le contenu du fichier et enregistrer.
2. Dans `templates`, **Ajouter un nouveau fichier** → type `page`, nom
   `boarding`, format JSON. Remplacer le contenu par `page.boarding.json`
   et enregistrer.
3. Dans **Boutique en ligne → Pages**, créer une page « Boarding soon » et lui
   assigner le gabarit `page.boarding`.
4. Pour en faire la page d'accueil : **Personnaliser** → page d'accueil →
   supprimer les sections existantes → **Ajouter une section** →
   « FL390 — Boarding soon ». Le gabarit de l'étape 2 devient alors inutile.

Le formulaire crée un client Shopify avec le tag `newsletter` et l'accord
marketing : les adresses se retrouvent dans **Clients**, prêtes pour Shopify
Email ou l'outil de votre choix.

## Réglages (personnalisateur)

- **Date d'embarquement** — ISO 8601 avec fuseau, par exemple
  `2026-10-07T00:00:00+02:00` (`+02:00` en été, `+01:00` en hiver à Paris),
  et la date telle qu'affichée dans le surtitre.
- **Titre en volets** — une tuile par lettre, la ligne casse entre les mots.
- **Lignes du tableau** — un bloc « Vol » par ligne (heure, vol, destination,
  porte, statut) ; la ligne FL 390 et son statut bordeaux sont dans les
  réglages de la section.
- **Affichage** — hauteur minimale du hero, fond animé, logotype FL390
  au-dessus du tableau (à activer si l'en-tête du thème est masqué).
- **Liste d'embarquement** — tous les textes, ou masquer le bloc.

Sous 640 px, le tableau ne garde que le titre, le compte à rebours et son pied,
comme sur la version Next.js. `prefers-reduced-motion` coupe les animations.

## Polices

Krona One, Work Sans et Titillium Web sont chargées depuis Google Fonts
(Theme Check le signale comme un simple avertissement). Pour tout servir depuis
Shopify, déposer les fichiers `.woff2` dans `assets` et remplacer le `<link>`
en tête de section par des règles `@font-face`.

## Page « mot de passe »

Si la boutique reste fermée par mot de passe, la section peut aussi remplacer
le contenu de `layout/password.liquid` : y rendre la section avec
`{% section 'fl390-boarding' %}` et retirer le formulaire de mot de passe du
thème si l'on ne souhaite pas l'afficher.
