import Image from "next/image";

import { SHOP_LINKS } from "@/lib/site";

/**
 * Hero plein cadre, sans spacer : il passe volontairement sous l'en-tête en
 * glass. Un seul visuel, une lente décélération, le titre porte le reste.
 */
export function Hero() {
  return (
    <section className="relative h-svh min-h-[600px] overflow-hidden bg-ink">
      {/* Paysage au-dessus de 760 px, portrait en dessous : un 16/9 recadré en
          portrait ne montrerait que l'impression du t-shirt, coupée. */}
      <Image
        src="/img/hero-discipline.jpg"
        alt="Le t-shirt Discipline porté sur le tarmac, devant un jet privé"
        fill
        priority
        sizes="(min-width: 760px) 100vw, 1px"
        style={{ objectPosition: "62% 30%" }}
        className="animate-fl-settle hidden object-cover min-[760px]:block"
      />
      <Image
        src="/img/hoodie-discipline.jpg"
        alt="Le sweat à capuche Discipline porté sur le tarmac, devant un jet privé"
        fill
        priority
        sizes="(min-width: 760px) 1px, 100vw"
        style={{ objectPosition: "50% 22%" }}
        className="animate-fl-settle object-cover min-[760px]:hidden"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.74)_0%,rgba(0,0,0,0.08)_52%,rgba(0,0,0,0.32)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-[26px] px-[22px] pb-[30px] text-paper min-[760px]:pb-[42px]">
        <p
          className="animate-fl-fade font-label m-0 flex flex-wrap items-center gap-x-[14px] gap-y-[6px] text-[9px] font-bold tracking-[0.32em] uppercase"
          style={{ animationDelay: "120ms" }}
        >
          <span>FL390 Paris</span>
          <span className="text-burgundy">✳</span>
          <span>Drop 01</span>
          <span className="text-burgundy">✳</span>
          <span>Fabriqué en France</span>
        </p>

        <h1 className="animate-fl-rise font-display m-0 text-[clamp(2.6rem,9.5vw,9rem)] leading-[0.84] tracking-[-0.02em]">
          Cleared For
          <br />
          Takeoff.
        </h1>

        <div
          className="animate-fl-rise flex flex-col gap-[24px] min-[760px]:flex-row min-[760px]:items-end min-[760px]:justify-between"
          style={{ animationDelay: "160ms" }}
        >
          <p className="m-0 max-w-[44ch] text-[15px]/[1.7] text-paper/78 min-[760px]:text-[16px]/[1.7]">
            Streetwear d&apos;inspiration aéronautique, dessiné par un pilote de
            ligne. Coton peigné 270&nbsp;g, séries courtes, fabrication
            française.
          </p>

          <div className="flex flex-wrap gap-[10px]">
            <a
              href={SHOP_LINKS.shop}
              className="font-label rounded-[999px] bg-paper px-[26px] py-[15px] text-[11px] font-bold tracking-[0.26em] whitespace-nowrap text-ink uppercase transition-colors duration-300 hover:bg-burgundy hover:text-paper"
            >
              Découvrir le drop
            </a>
            <a
              href="#embarquement"
              className="glass-pill-cta font-label rounded-[999px] px-[26px] py-[15px] text-[11px] font-bold tracking-[0.26em] whitespace-nowrap text-paper uppercase transition-colors duration-300 hover:bg-paper/90 hover:text-ink"
            >
              Rejoindre la liste
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
