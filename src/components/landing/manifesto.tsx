import Image from "next/image";

import { Reveal } from "@/components/landing/reveal";
import { CaptionPill } from "@/components/ui/caption-pill";
import { CHECKLIST, SHOP_LINKS } from "@/lib/site";

/** Manifeste : une photographie, une déclaration, la checklist pré-vol. */
export function Manifesto() {
  return (
    <section
      id="manifeste"
      className="mx-[22px] mt-[34px] scroll-mt-[calc(var(--header-height)+34px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] overflow-hidden rounded-[12px] bg-ink text-paper"
    >
      <div className="relative aspect-4/5 overflow-hidden min-[860px]:aspect-auto min-[860px]:min-h-[720px]">
        <Image
          src="/img/manifesto-cleared-bw.jpg"
          alt="Le t-shirt Cleared For Takeoff en noir et blanc, sur le tarmac"
          fill
          sizes="(min-width: 860px) 50vw, 100vw"
          style={{ objectPosition: "50% 30%" }}
          className="object-cover"
        />
        <CaptionPill className="bottom-[16px] left-[16px]">
          Pré-vol — Tarmac
        </CaptionPill>
      </div>

      <div className="flex flex-col justify-center gap-[28px] px-[clamp(24px,4vw,64px)] py-[clamp(40px,6vw,84px)]">
        <Reveal className="flex flex-col gap-[22px]">
          <span className="font-label text-[9px] font-bold tracking-[0.32em] text-burgundy uppercase">
            Le manifeste
          </span>
          <p className="font-display m-0 max-w-[16ch] text-[clamp(1.5rem,3vw,2.6rem)] leading-[1.14]">
            Dessiné en croisière, à 39&nbsp;000 pieds.
          </p>
          <p className="m-0 max-w-[48ch] text-[15px]/[1.75] text-paper/66">
            FL390 est fondée par un pilote de ligne. La discipline du cockpit
            appliquée au vêtement&nbsp;: rien de décoratif, tout est vérifié.
            Chaque pièce passe la checklist avant d&apos;être autorisée au
            décollage.
          </p>
        </Reveal>

        <Reveal delayMs={120}>
          <dl className="m-0 border-t border-paper/30">
            {CHECKLIST.map((row, index) => (
              <div
                key={row.key}
                className="grid grid-cols-[minmax(96px,0.6fr)_1fr] items-baseline gap-[16px] border-b border-paper/16 py-[13px]"
              >
                <dt className="font-label flex items-baseline gap-[10px] text-[9px] font-bold tracking-[0.26em] text-paper/42 uppercase">
                  <span className="text-paper/28">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {row.key}
                </dt>
                <dd className="font-label m-0 text-[13px] font-semibold tracking-[0.04em]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delayMs={200}>
          <a
            href={SHOP_LINKS.lookbook}
            className="glass-pill-cta font-label inline-block rounded-[999px] px-[26px] py-[15px] text-[11px] font-bold tracking-[0.26em] uppercase transition-colors duration-300 hover:bg-paper/90 hover:text-ink"
          >
            Voir le lookbook
          </a>
        </Reveal>
      </div>
    </section>
  );
}
