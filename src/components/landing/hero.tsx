import { DeparturesBoard } from "@/components/landing/departures-board";
import { Wordmark } from "@/components/layout/wordmark";

/** Hero : fond noir, logotype, tableau des départs. */
export function Hero() {
  return (
    <section className="flex min-h-svh flex-col items-center bg-ink px-[14px] pt-[26px] pb-[clamp(30px,5vw,60px)] text-paper min-[560px]:px-[22px]">
      <div className="animate-fl-fade">
        <Wordmark
          markClassName="text-[22px]"
          cityClassName="text-[8px] tracking-[0.62em] indent-[0.62em]"
        />
      </div>

      <div className="animate-fl-rise flex w-full flex-1 items-center justify-center pt-[clamp(26px,4vw,48px)]">
        <DeparturesBoard />
      </div>
    </section>
  );
}
