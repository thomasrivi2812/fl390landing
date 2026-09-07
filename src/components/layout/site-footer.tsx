import { Wordmark } from "@/components/layout/wordmark";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="px-[12px] pt-[clamp(40px,6vw,78px)] pb-[14px]">
        <Wordmark
          gapClassName="gap-[2px]"
          markClassName="text-[clamp(2rem,11vw,9rem)] leading-[0.84] tracking-[-0.03em]"
          cityClassName="text-[clamp(8px,1.5vw,16px)] tracking-[0.72em] indent-[0.72em]"
        />
      </div>

      <div className="font-label flex flex-wrap justify-between gap-[12px] border-t border-paper/18 px-[22px] py-[16px] text-[10px] tracking-[0.18em] text-paper/40 uppercase">
        <span>{SITE.legal}</span>
        <span>{SITE.tagline}</span>
      </div>
    </footer>
  );
}
