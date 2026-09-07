import { BoardClock } from "@/components/landing/board-clock";
import { Countdown } from "@/components/landing/countdown";
import { Flap, FlapText } from "@/components/landing/flap";
import { BOARD_ROWS, formatLaunchDate, launchDate } from "@/lib/site";

/* Bandeau, en-têtes et lignes de vols n'apparaissent qu'à partir de 640 px :
   sur téléphone, le tableau se résume au titre et au compte à rebours. */
const WIDE = "hidden min-[640px]:grid";
const ROW =
  "grid-cols-[58px_minmax(64px,0.6fr)_1.6fr_48px_minmax(132px,0.9fr)] items-center gap-x-[12px] px-[clamp(14px,2.4vw,28px)]";
const HEAD =
  "font-label text-[9px] font-bold tracking-[0.3em] text-paper/40 uppercase";
const CELL = "font-label text-[13px] font-semibold tracking-[0.12em] uppercase";

export function DeparturesBoard() {
  return (
    <div className="w-full max-w-[1120px] overflow-hidden rounded-[14px] border border-paper/16 bg-[#0a0a0a] text-paper shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
      {/* Bandeau */}
      <div className="hidden flex-wrap items-center justify-between gap-[10px] border-b border-paper/16 px-[clamp(14px,2.4vw,28px)] py-[14px] min-[640px]:flex">
        <span className="font-label text-[10px] font-bold tracking-[0.34em] uppercase">
          Départs <span className="text-paper/40">— Departures</span>
        </span>
        <span className="font-label flex items-center gap-[14px] text-[10px] font-bold tracking-[0.24em] text-paper/60 uppercase">
          <span>CDG · Paris</span>
          <span className="text-burgundy">✳</span>
          <BoardClock />
        </span>
      </div>

      {/* En-têtes de colonnes */}
      <div className={`${WIDE} ${ROW} border-b border-paper/16 py-[10px]`}>
        <span className={HEAD}>Heure</span>
        <span className={HEAD}>Vol</span>
        <span className={HEAD}>Destination</span>
        <span className={HEAD}>Porte</span>
        <span className={HEAD}>Statut</span>
      </div>

      {/* Lignes */}
      <ul className="m-0 hidden list-none p-0 min-[640px]:block">
        {BOARD_ROWS.map((row) => (
          <li
            key={row.flight}
            className={`grid ${ROW} border-b border-paper/10 py-[12px] ${
              row.featured ? "text-paper" : "text-paper/38"
            }`}
          >
            <span className={`${CELL} tabular-nums`}>
              {row.time}
            </span>
            <span className={CELL}>{row.flight}</span>
            <span className={CELL}>{row.destination}</span>
            <span className={CELL}>{row.gate}</span>
            <span className={`${CELL} whitespace-nowrap`}>
              {row.featured ? (
                <Flap className="border-burgundy bg-burgundy px-[9px] py-[5px] text-[10px] tracking-[0.2em] whitespace-nowrap after:bg-black/40">
                  {row.status}
                </Flap>
              ) : (
                row.status
              )}
            </span>
          </li>
        ))}
      </ul>

      {/* Titre en volets */}
      <div className="flex flex-col gap-[18px] px-[clamp(14px,2.4vw,28px)] pt-[clamp(26px,4vw,44px)] max-[639px]:pt-[26px]">
        <p className="font-label m-0 text-[9px] font-bold tracking-[0.32em] text-paper/50 uppercase">
          Vol FL 390 <span className="text-burgundy">✳</span> Porte 01{" "}
          <span className="text-burgundy">✳</span> Embarquement le{" "}
          {formatLaunchDate()}
        </p>
        <h1 className="m-0">
          <FlapText
            text="BOARDING SOON"
            className="gap-x-[clamp(12px,2vw,24px)] gap-y-[6px]"
            tileClassName="font-display h-[1.45em] w-[1.06em] text-[clamp(1.75rem,8.4vw,4.2rem)] leading-none tracking-normal"
          />
        </h1>
      </div>

      {/* Compte à rebours */}
      <div className="flex flex-col gap-[16px] px-[clamp(14px,2.4vw,28px)] pt-[clamp(22px,3vw,34px)] pb-[clamp(22px,3.5vw,40px)]">
        <span className={HEAD}>Embarquement dans</span>
        <Countdown target={launchDate.getTime()} />
      </div>

      {/* Pied du tableau */}
      <div className="font-label flex flex-wrap items-center justify-between gap-[10px] border-t border-paper/16 px-[clamp(14px,2.4vw,28px)] py-[12px] text-[9px] font-bold tracking-[0.26em] text-paper/40 uppercase">
        <span>Drop 01 — Séries courtes — Fabriqué en France</span>
        <span>See you at FL390</span>
      </div>
    </div>
  );
}
