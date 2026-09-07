# FL390 — version Shopify

Trois sections de thème à ajouter dans l'éditeur de code (dossier
`sections`), sans rien supprimer :

| Fichier | Rôle |
| --- | --- |
| `sections/fl390-header.liquid` | En-tête minimal : logotype FL390 centré |
| `sections/fl390-boarding.liquid` | Hero « Boarding soon » + liste d'embarquement |
| `sections/fl390-footer.liquid` | Pied de page : logotype monumental, mentions |

Facultatif : `templates/page.boarding.json` (dossier `templates`) pour
assigner le hero à une page dédiée.

## Mise en place dans le personnalisateur

1. **En-tête** — dans le groupe « Header » de gauche, masquer (icône œil) ou
   retirer l'en-tête et la barre d'annonce du thème, puis « Ajouter une
   section » → « FL390 — En-tête ».
2. **Page d'accueil** — retirer les sections affichées, puis « Ajouter une
   section » → « FL390 — Boarding soon ».
3. **Pied de page** — dans le groupe « Footer », masquer ou retirer le pied de
   page du thème, puis « Ajouter une section » → « FL390 — Pied de page ».
4. Enregistrer.

Les fichiers du thème ne sont pas modifiés : tout est réversible en
réaffichant les sections d'origine.

## Réglages utiles

- **Date d'embarquement** (section Boarding soon) : `2026-10-07T00:00:00+02:00`
  — indiquer le fuseau, `+02:00` en été et `+01:00` en hiver pour Paris — et
  la date affichée en toutes lettres.
- **Lignes du tableau** : un bloc « Vol » par ligne, la ligne FL 390 est dans
  les réglages de la section.
- **Emails** : le formulaire crée un client Shopify avec le tag `newsletter`
  et l'accord marketing (Clients → filtrer par tag).
- **Liens du pied de page** : blocs « Lien » (Instagram, contact…).
