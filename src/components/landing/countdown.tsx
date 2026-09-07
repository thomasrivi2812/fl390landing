"use client";

import { useEffect, useState } from "react";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function split(remainingMs: number): Parts {
  const total = Math.max(0, Math.floor(remainingMs / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

const CELLS: { key: keyof Parts; label: string }[] = [
  { key: "days", label: "Jours" },
  { key: "hours", label: "Heures" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Secondes" },
];

/**
 * Compte à rebours jusqu'à `target` (timestamp ms). Rendu neutre côté serveur
 * (tirets), puis mis à jour chaque seconde une fois monté — l'heure du
 * visiteur ne peut pas diverger du HTML pré-rendu.
 */
export function Countdown({ target }: { target: number }) {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(split(target - Date.now()));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label="Temps restant avant l'embarquement"
      className="grid grid-cols-4 gap-[10px] min-[560px]:gap-[14px]"
    >
      {CELLS.map((cell) => (
        <div
          key={cell.key}
          className="glass-pill flex flex-col items-center gap-[8px] rounded-[12px] px-[6px] py-[16px] min-[560px]:py-[22px]"
        >
          <span className="font-display text-[clamp(1.6rem,6vw,3.6rem)] leading-none tabular-nums">
            {parts ? String(parts[cell.key]).padStart(2, "0") : "––"}
          </span>
          <span className="font-label text-[9px] font-bold tracking-[0.3em] text-paper/60 uppercase">
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  );
}
