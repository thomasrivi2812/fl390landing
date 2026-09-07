/**
 * Constantes d'identité et de navigation de la landing.
 * Les tokens visuels vivent dans `src/app/globals.css`.
 */

export const SITE = {
  name: "FL390",
  city: "PARIS",
  fullName: "FL390 Paris",
  tagline: "See you at FL390.",
  title: "FL390 Paris — Drop 01 · Cleared for takeoff",
  description:
    "Streetwear d'inspiration aéronautique fondé par un pilote de ligne. Coton peigné 270 g, séries courtes, fabrication française. Drop 01 : cleared for takeoff.",
  locale: "FR / EUR",
  legal: "© 2026 FL390 Paris — Fabriqué en France",
} as const;

/** URL publique de la landing — métadonnées absolues, sitemap, robots. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

/** URL publique de la boutique (dépôt FL390). */
export const shopUrl =
  process.env.NEXT_PUBLIC_SHOP_URL?.replace(/\/$/, "") ??
  "https://fl390.paris";

export const SHOP_LINKS = {
  home: shopUrl,
  shop: `${shopUrl}/shop`,
  lookbook: `${shopUrl}/lookbook`,
  livraison: `${shopUrl}/livraison`,
  retours: `${shopUrl}/retours`,
  contact: `${shopUrl}/contact`,
} as const;

export const ANNOUNCEMENTS = [
  "Livraison offerte dès 120 €",
  "Fabriqué en France",
  "Drop 01 — séries courtes",
  "See you at FL390",
] as const;

/** Ancres de la page. */
export const NAV_LINKS = [
  { href: "#drop", label: "Le drop" },
  { href: "#manifeste", label: "Manifeste" },
  { href: "#lookbook", label: "Lookbook" },
] as const;

export const FOOTER_COLUMNS = [
  {
    heading: "Boutique",
    links: [
      { href: SHOP_LINKS.shop, label: "Shop all" },
      { href: SHOP_LINKS.lookbook, label: "Lookbook" },
    ],
  },
  {
    heading: "Aide",
    links: [
      { href: SHOP_LINKS.livraison, label: "Livraison" },
      { href: SHOP_LINKS.retours, label: "Retours" },
      { href: SHOP_LINKS.contact, label: "Contact" },
    ],
  },
] as const;

/** Bandeau « plan de vol » — vocabulaire strictement cockpit. */
export const FLIGHT_STRIP = [
  { key: "Vol", value: "FL390" },
  { key: "Origine", value: "CDG — PARIS" },
  { key: "Niveau", value: "39 000 FT" },
  { key: "Cap", value: "270°" },
  { key: "Statut", value: "CLEARED" },
] as const;

/** Checklist pré-vol du manifeste — les six lignes de la fiche produit. */
export const CHECKLIST = [
  { key: "Matière", value: "100 % coton peigné, 270 g/m²" },
  { key: "Coupe", value: "Oversize, épaules tombantes" },
  { key: "Impression", value: "Dos, sérigraphie mate" },
  { key: "Séries", value: "Courtes — pas de réassort automatique" },
  { key: "Fabrication", value: "France" },
  { key: "Statut", value: "Vérifié, puis autorisé" },
] as const;

export const MANIFESTO_QUOTE =
  "Discipline can take you places passion never will.";
