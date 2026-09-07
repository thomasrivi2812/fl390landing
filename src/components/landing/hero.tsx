import Image from "next/image";

import { Countdown } from "@/components/landing/countdown";
import { Wordmark } from "@/components/layout/wordmark";
import { formatLaunchDate, launchDate } from "@/lib/site";

/** Hero plein écran : image de fond, « Boarding Soon », compte à rebours. */
export function Hero() {
  return (
    <section className="relative flex h-svh min-h-[640px] flex-col overflow-hidden bg-ink text-paper">
      {/* Paysage au-dessus de 760 px, portrait en dessous : un 16/9 recadré en
          portrait ne montrerait que l'impression du t-shirt, coupée. */}
      <Image
        src="/img/hero-discipline.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 760px) 100vw, 1px"
        style={{ objectPosition: "62% 30%" }}
        className="animate-fl-settle hidden object-cover min-[760px]:block"
      />
      <Image
        src="/img/hoodie-discipline.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 760px) 1px, 100vw"
        style={{ objectPosition: "50% 22%" }}
        className="animate-fl-settle object-cover min-[760px]:hidden"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.45)_100%)]" />

      <div className="animate-fl-fade relative flex justify-center pt-[26px]">
        <Wordmark
          markClassName="text-[22px]"
          cityClassName="text-[8px] tracking-[0.62em] indent-[0.62em]"
        />
      </div>

      <div className="relative mt-auto flex flex-col gap-[28px] px-[22px] pb-[34px] min-[760px]:pb-[48px]">
        <div className="animate-fl-rise flex flex-col gap-[18px]">
          <p className="font-label m-0 text-[9px] font-bold tracking-[0.32em] uppercase">
            FL390 Paris <span className="text-burgundy">✳</span> Drop 01{" "}
            <span className="text-burgundy">✳</span> Embarquement le{" "}
            {formatLaunchDate()}
          </p>
          <h1 className="font-display m-0 text-[clamp(2.6rem,10vw,9.5rem)] leading-[0.84] tracking-[-0.02em]">
            Boarding
            <br />
            Soon.
          </h1>
        </div>

        <div
          className="animate-fl-rise max-w-[640px]"
          style={{ animationDelay: "160ms" }}
        >
          <Countdown target={launchDate.getTime()} />
        </div>
      </div>
    </section>
  );
}
