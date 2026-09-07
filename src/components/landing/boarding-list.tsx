import { NewsletterForm } from "@/components/layout/newsletter-form";

/** Sous le hero : une adresse email pour être averti au décollage. */
export function BoardingList() {
  return (
    <section
      id="embarquement"
      className="px-[22px] py-[clamp(56px,9vw,120px)]"
    >
      <div className="mx-auto flex max-w-[860px] flex-col items-center gap-[24px] text-center">
        <span className="font-label text-[9px] font-bold tracking-[0.32em] text-burgundy uppercase">
          Liste d&apos;embarquement
        </span>
        <h2 className="font-display m-0 text-[clamp(1.6rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em]">
          Soyez prévenu au décollage.
        </h2>
        <p className="m-0 max-w-[46ch] text-[15px]/[1.75] text-black/60">
          Laissez votre adresse, vous recevrez un seul message à
          l&apos;ouverture du Drop 01. Rien d&apos;autre.
        </p>
        <div className="flex w-full justify-center pt-[8px]">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
