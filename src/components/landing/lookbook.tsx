import Image from "next/image";

import { Reveal } from "@/components/landing/reveal";
import { CaptionPill } from "@/components/ui/caption-pill";
import { SHOP_LINKS } from "@/lib/site";

const FRAMES = [
  {
    src: "/img/lookbook-cleared-wall.jpg",
    alt: "T-shirt Cleared For Takeoff navy, contre un mur de béton",
    caption: "02 — Cleared, navy",
    position: "70% 40%",
  },
  {
    src: "/img/lookbook-discipline-studio.jpg",
    alt: "T-shirt Discipline noir, studio",
    caption: "03 — Discipline",
    position: "50% 40%",
  },
  {
    src: "/img/lookbook-cdg-lhr-studio.jpg",
    alt: "T-shirt CDG — LHR, face et dos",
    caption: "04 — CDG · LHR",
    position: "50% 40%",
  },
  {
    src: "/img/tote-remove-before-flight.jpg",
    alt: "Tote bag Remove Before Flight bordeaux",
    caption: "05 — Remove before flight",
    position: "50% 45%",
  },
] as const;

const FRAME =
  "group relative overflow-hidden rounded-[12px] bg-stone";
const IMAGE =
  "object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]";

export function Lookbook() {
  return (
    <section
      id="lookbook"
      className="scroll-mt-[var(--header-height)] pb-[34px]"
    >
      <div className="flex flex-wrap items-end justify-between gap-[20px] px-[22px] pt-[clamp(34px,5vw,64px)] pb-[18px]">
        <h2 className="font-display m-0 text-[clamp(1.6rem,4.4vw,3.4rem)] leading-[0.95] tracking-[-0.02em]">
          Lookbook
        </h2>
        <span className="font-label text-[10px] font-bold tracking-[0.24em] text-black/42 uppercase">
          Drop 01 · Tarmac · 2026
        </span>
      </div>

      <div className="flex flex-col gap-[14px] px-[22px]">
        <Reveal>
          <figure className={`${FRAME} m-0 aspect-4/3 min-[560px]:aspect-16/9`}>
            <Image
              src="/img/lookbook-both.jpg"
              alt="Deux t-shirts du drop portés côte à côte, tarmac et jet privé"
              fill
              sizes="100vw"
              style={{ objectPosition: "50% 35%" }}
              className={IMAGE}
            />
            <CaptionPill className="bottom-[16px] left-[16px]">
              01 — Discipline · Cleared
            </CaptionPill>
          </figure>
        </Reveal>

        <div className="grid grid-cols-1 gap-[14px] min-[560px]:grid-cols-2">
          {FRAMES.map((frame, index) => (
            <Reveal key={frame.src} delayMs={(index % 2) * 90}>
              <figure className={`${FRAME} m-0 aspect-4/3 min-[560px]:aspect-16/11`}>
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  sizes="(min-width: 560px) 50vw, 100vw"
                  style={{ objectPosition: frame.position }}
                  className={IMAGE}
                />
                <CaptionPill className="bottom-[16px] left-[16px]">
                  {frame.caption}
                </CaptionPill>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="flex justify-center px-[22px] pt-[clamp(30px,5vw,56px)]">
        <a
          href={SHOP_LINKS.shop}
          className="font-label rounded-[999px] border border-paper/16 bg-black/86 px-[36px] py-[19px] text-[11px] font-bold tracking-[0.28em] text-paper uppercase backdrop-blur-[16px] transition-colors duration-300 hover:bg-burgundy"
        >
          Acheter les pièces
        </a>
      </div>
    </section>
  );
}
