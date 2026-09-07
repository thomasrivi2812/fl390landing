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

/**
 * Lignes du tableau des départs. Les codes sont ceux imprimés au dos des
 * t-shirts du drop ; la dernière ligne est la nôtre.
 */
export type BoardRow = {
  time: string;
  flight: string;
  destination: string;
  gate: string;
  status: string;
  /** Ligne FL390 : mise en avant, statut en volet bordeaux. */
  featured?: boolean;
};

export const BOARD_ROWS: BoardRow[] = [
  { time: "06:40", flight: "AF 1780", destination: "LHR — LONDON", gate: "K32", status: "DÉCOLLÉ" },
  { time: "07:15", flight: "AF 006", destination: "JFK — NEW YORK", gate: "M24", status: "DÉCOLLÉ" },
  { time: "08:05", flight: "EK 072", destination: "DXB — DUBAI", gate: "L41", status: "DÉCOLLÉ" },
  { time: "09:30", flight: "JL 416", destination: "HND — TOKYO", gate: "K07", status: "DERNIER APPEL" },
  { time: "10:20", flight: "SQ 335", destination: "SIN — SINGAPORE", gate: "M18", status: "À L'HEURE" },
  { time: "——:——", flight: "FL 390", destination: "DROP 01 — 39 000 FT", gate: "01", status: "BOARDING SOON", featured: true },
];

/** Codes OACI du fond animé — ceux des t-shirts Departures et CDG — LHR. */
export const ICAO_CODES = [
  "CDG", "LHR", "JFK", "LAX", "DXB", "HND", "NRT", "SIN", "FRA", "AMS",
  "HKG", "PEK", "SYD", "GVA", "ORD", "BOS", "MIA", "YUL", "MAD", "BCN",
] as const;
