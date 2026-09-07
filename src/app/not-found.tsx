import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-start justify-center gap-[22px] px-[22px] py-[60px]">
      <span className="font-label text-[9px] font-bold tracking-[0.3em] text-burgundy uppercase">
        FL390 / 404
      </span>
      <h1 className="font-display m-0 text-[clamp(1.8rem,6vw,4rem)] leading-[0.98] tracking-[-0.02em]">
        Hors plan de vol.
      </h1>
      <p className="m-0 max-w-[44ch] text-[16px]/[1.75] text-black/60">
        Cette page n&apos;existe pas. Retour à la porte d&apos;embarquement.
      </p>
      <Link
        href="/"
        className="font-label rounded-[999px] bg-black/90 px-[26px] py-[15px] text-[11px] font-bold tracking-[0.26em] text-paper uppercase transition-colors duration-300 hover:bg-burgundy"
      >
        Accueil
      </Link>
    </div>
  );
}
