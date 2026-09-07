import { Reveal } from "@/components/landing/reveal";
import { NewsletterForm } from "@/components/layout/newsletter-form";

/** Liste d'embarquement : une annonce par drop, rien d'autre. */
export function BoardingList() {
  return (
    <section
      id="embarquement"
      className="scroll-mt-[var(--header-height)] border-t border-black/12 px-[22px] py-[clamp(56px,9vw,120px)]"
    >
      <Reveal className="mx-auto flex max-w-[860px] flex-col items-center gap-[24px] text-center">
        <span className="font-label text-[9px] font-bold tracking-[0.32em] text-burgundy uppercase">
          Liste d&apos;embarquement
        </span>
        <h2 className="font-display m-0 text-[clamp(1.6rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em]">
          Une annonce par drop.
          <br />
          Rien d&apos;autre.
        </h2>
        <p className="m-0 max-w-[46ch] text-[15px]/[1.75] text-black/60">
          Ouverture des ventes, réassorts, prochaines séries. Pas de
          promotions, pas de relances.
        </p>
        <div className="flex w-full justify-center pt-[8px]">
          <NewsletterForm />
        </div>
      </Reveal>
    </section>
  );
}
