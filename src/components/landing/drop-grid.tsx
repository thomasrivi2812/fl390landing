import { PieceCard } from "@/components/landing/piece-card";
import { Reveal } from "@/components/landing/reveal";
import { PIECES } from "@/lib/pieces";
import { SHOP_LINKS } from "@/lib/site";

export function DropGrid() {
  return (
    <section id="drop" className="scroll-mt-[var(--header-height)] pb-[34px]">
      <div className="flex flex-wrap items-end justify-between gap-[20px] px-[22px] pt-[clamp(34px,5vw,64px)] pb-[18px]">
        <div className="flex flex-col gap-[14px]">
          <span className="font-label text-[9px] font-bold tracking-[0.32em] text-burgundy uppercase">
            Drop 01
          </span>
          <h2 className="font-display m-0 text-[clamp(1.6rem,4.4vw,3.4rem)] leading-[0.95] tracking-[-0.02em]">
            Six pièces.
            <br />
            Séries courtes.
          </h2>
        </div>
        <a
          href={SHOP_LINKS.shop}
          className="border-b border-ink pb-[2px] text-[13px] tracking-[0.08em] whitespace-nowrap uppercase transition-opacity duration-300 hover:opacity-55"
        >
          Tout voir
        </a>
      </div>

      <div className="grid grid-cols-1 gap-[14px] px-[22px] min-[460px]:grid-cols-2 min-[900px]:grid-cols-3">
        {PIECES.map((piece, index) => (
          <Reveal key={piece.slug} delayMs={(index % 3) * 90}>
            <PieceCard piece={piece} priority={index < 3} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
