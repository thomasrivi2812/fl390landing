import Image from "next/image";

import { formatPrice } from "@/lib/format";
import { pieceMeta, type Piece } from "@/lib/pieces";
import { SHOP_LINKS } from "@/lib/site";

const SIZES = "(min-width: 900px) 33vw, (min-width: 460px) 50vw, 100vw";

export function PieceCard({
  piece,
  priority = false,
}: {
  piece: Piece;
  priority?: boolean;
}) {
  return (
    <article className="group flex flex-col">
      <a
        href={SHOP_LINKS.shop}
        aria-label={`${piece.name} — voir dans la boutique`}
        className="relative block aspect-3/4 overflow-hidden rounded-[12px] bg-stone"
      >
        {piece.secondImage && (
          <Image
            src={piece.secondImage}
            alt=""
            fill
            priority={priority}
            sizes={SIZES}
            className="object-cover"
          />
        )}
        <Image
          src={piece.image}
          alt={piece.alt}
          fill
          priority={priority}
          sizes={SIZES}
          style={piece.position ? { objectPosition: piece.position } : undefined}
          className={`object-cover transition-opacity duration-500 ease-out ${
            piece.secondImage ? "group-hover:opacity-0" : ""
          }`}
        />

        <span className="glass-control pointer-events-none absolute top-[12px] left-[12px] rounded-[7px] px-[11px] py-[7px] text-[12px] tracking-[0.06em] text-ink uppercase">
          {piece.tag}
        </span>
      </a>

      <div className="flex items-baseline justify-between gap-[12px] px-[4px] pt-[13px]">
        <a
          href={SHOP_LINKS.shop}
          className="text-[14px] transition-opacity duration-300 hover:opacity-60"
        >
          {piece.name}
        </a>
        <span className="text-[14px] whitespace-nowrap">
          {piece.price !== undefined ? (
            formatPrice(piece.price)
          ) : (
            <span className="font-label text-[10px] font-bold tracking-[0.2em] text-black/42 uppercase">
              Drop 01
            </span>
          )}
        </span>
      </div>

      <p className="font-label m-0 px-[4px] pt-[8px] text-[9px] font-semibold tracking-[0.26em] text-black/42 uppercase">
        {pieceMeta(piece)}
      </p>
    </article>
  );
}
