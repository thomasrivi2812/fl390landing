import { Reveal } from "@/components/landing/reveal";
import { MANIFESTO_QUOTE } from "@/lib/site";

export function QuotePanel({ quote = MANIFESTO_QUOTE }: { quote?: string }) {
  return (
    <section className="mx-[22px] my-[34px] rounded-[18px] bg-olive px-[clamp(24px,5vw,88px)] py-[clamp(64px,10vw,150px)] text-center text-paper">
      <Reveal>
        <p className="font-display mx-auto my-0 max-w-[20ch] text-[clamp(1.5rem,4.4vw,3.4rem)] leading-[1.16]">
          {quote}
        </p>
      </Reveal>
    </section>
  );
}
