/**
 * Constantes d'identité de la landing.
 * Les tokens visuels vivent dans `src/app/globals.css`.
 */

export const SITE = {
  name: "FL390",
  city: "PARIS",
  fullName: "FL390 Paris",
  tagline: "See you at FL390.",
  title: "FL390 Paris — Boarding soon",
  description:
    "Streetwear d'inspiration aéronautique fondé par un pilote de ligne. Coton peigné 270 g, séries courtes, fabrication française. Embarquement imminent.",
  legal: "© 2026 FL390 Paris — Fabriqué en France",
} as const;

/** URL publique de la landing — métadonnées absolues, sitemap, robots. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

/**
 * Date d'embarquement visée par le compte à rebours, ISO 8601 avec fuseau.
 * Par défaut : trente jours après la mise en place de la page, à minuit à
 * Paris. À surcharger avec `NEXT_PUBLIC_LAUNCH_DATE` sans toucher au code.
 */
export const launchDate = new Date(
  process.env.NEXT_PUBLIC_LAUNCH_DATE ?? "2026-10-07T00:00:00+02:00",
);

/** « 7 octobre 2026 », calculé côté serveur dans le fuseau de Paris. */
export function formatLaunchDate(): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  }).format(launchDate);
}
