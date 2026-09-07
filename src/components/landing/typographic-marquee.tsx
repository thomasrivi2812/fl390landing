import { Marquee } from "@/components/ui/marquee";

export function TypographicMarquee({
  text = "NOT FOR EVERYONE",
  className = "border-b border-black/12 bg-paper text-ink",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={`py-[14px] ${className}`}>
      <Marquee
        durationMs={26000}
        gapPx={34}
        className="font-display text-[clamp(1.4rem,4.4vw,3.4rem)] leading-none"
      >
        <span className="inline-flex items-center gap-[34px]">
          <span>{text}</span>
          <span className="text-burgundy">/</span>
          <span>{text}</span>
          <span className="text-burgundy">/</span>
        </span>
      </Marquee>
    </div>
  );
}
