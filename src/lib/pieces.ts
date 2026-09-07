/**
 * Pièces présentées sur la landing.
 *
 * Les visuels viennent des prises de vue de la marque (`public/img`, ré-export
 * JPEG des PNG sources). Le prix n'est renseigné que lorsqu'il est connu :
 * les t-shirts du Drop 01 sont à 85 €, le sweat et le tote bag restent à
 * confirmer — la carte affiche alors « Drop 01 » à la place du prix.
 */

export type Piece = {
  slug: string;
  name: string;
  kind: string;
  color: string;
  price?: number;
  tag: string;
  /** Visuel porté, affiché par défaut. */
  image: string;
  /** Visuel révélé au survol — à plat, impression dos. Facultatif. */
  secondImage?: string;
  /** Recadrage du visuel principal dans le cadre 3/4. */
  position?: string;
  alt: string;
};

export const PIECES: Piece[] = [
  {
    slug: "discipline-tee",
    name: "Discipline",
    kind: "T-shirt",
    color: "Noir",
    price: 85,
    tag: "New in",
    image: "/img/discipline-worn.jpg",
    secondImage: "/img/discipline-back.jpg",
    alt: "T-shirt Discipline noir porté, impression dos « Discipline can take you places passion never will »",
  },
  {
    slug: "cleared-navy",
    name: "Cleared For Takeoff",
    kind: "T-shirt",
    color: "Navy",
    price: 85,
    tag: "New in",
    image: "/img/cleared-navy-worn.jpg",
    secondImage: "/img/cleared-navy-back.jpg",
    alt: "T-shirt Cleared For Takeoff bleu marine porté, impression dos blanche",
  },
  {
    slug: "you-me-departure",
    name: "You. Me. Departure.",
    kind: "T-shirt",
    color: "Blanc",
    price: 85,
    tag: "New in",
    image: "/img/youme-worn.jpg",
    secondImage: "/img/youme-back.jpg",
    alt: "T-shirt blanc porté, impression dos bordeaux « You. Me. Departure. No return. »",
  },
  {
    slug: "cdg-lhr",
    name: "CDG — LHR",
    kind: "T-shirt",
    color: "Navy",
    price: 85,
    tag: "New in",
    image: "/img/cdg-lhr-worn.jpg",
    secondImage: "/img/cdg-lhr-back.jpg",
    alt: "T-shirt CDG — LHR bleu marine porté, treize codes OACI imprimés au dos",
  },
  {
    slug: "discipline-hoodie",
    name: "Discipline",
    kind: "Sweat à capuche",
    color: "Noir",
    tag: "New in",
    image: "/img/hoodie-discipline.jpg",
    alt: "Sweat à capuche Discipline noir porté sur le tarmac devant un jet",
  },
  {
    slug: "tote-remove-before-flight",
    name: "Remove Before Flight",
    kind: "Tote bag",
    color: "Bordeaux",
    tag: "New in",
    image: "/img/tote-remove-before-flight.jpg",
    position: "50% 40%",
    alt: "Tote bag bordeaux Remove Before Flight porté à l'épaule",
  },
];

export function pieceMeta(piece: Piece): string {
  return `${piece.kind} · ${piece.color}`;
}
