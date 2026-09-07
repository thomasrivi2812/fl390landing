import { BoardingList } from "@/components/landing/boarding-list";
import { DropGrid } from "@/components/landing/drop-grid";
import { FlightStrip } from "@/components/landing/flight-strip";
import { Hero } from "@/components/landing/hero";
import { Lookbook } from "@/components/landing/lookbook";
import { Manifesto } from "@/components/landing/manifesto";
import { QuotePanel } from "@/components/landing/quote-panel";
import { TypographicMarquee } from "@/components/landing/typographic-marquee";

/**
 * Landing du Drop 01. Pas de spacer sous l'en-tête : le hero passe en plein
 * cadre sous le glass.
 */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <TypographicMarquee />
      <DropGrid />
      <FlightStrip className="mx-[22px]" />
      <Manifesto />
      <QuotePanel />
      <Lookbook />
      <TypographicMarquee
        text="SEE YOU AT FL390"
        className="border-y border-black/12 bg-paper text-ink"
      />
      <BoardingList />
    </>
  );
}
