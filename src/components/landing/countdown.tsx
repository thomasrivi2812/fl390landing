"use client";

import { useEffect, useState } from "react";

import { Flap } from "@/components/landing/flap";

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

const TILE =
  "font-display h-[1.55em] w-[1.05em] text-[clamp(1.5rem,6.4vw,3.6rem)] leading-none text-paper tabular-nums";

/**
 * Compte à rebours en volets jusqu'à `target` (timestamp ms). Rendu neutre côté
 * serveur (tirets), puis mis à jour chaque seconde une fois monté : l'heure du
 * visiteur ne peut pas diverger du HTML pré-rendu. Une tuile ne rebascule que
 * lorsque son chiffre change (la clé React porte le chiffre).
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
      aria-label="Temps restant avant l'embarquement"
      className="flex flex-wrap items-start gap-x-[clamp(10px,2.4vw,26px)] gap-y-[16px]"
    >
      {CELLS.map((cell, cellIndex) => {
        const digits = parts
          ? String(parts[cell.key]).padStart(2, "0").split("")
          : ["–", "–"];
        return (
          <div key={cell.key} className="flex items-start gap-x-[clamp(10px,2.4vw,26px)]">
            <div className="flex flex-col items-center gap-[10px]">
              <span className="inline-flex gap-[3px]">
                {digits.map((digit, index) => (
                  <Flap
                    key={`${index}-${digit}`}
                    animate={parts !== null}
                    className={TILE}
                  >
                    {digit}
                  </Flap>
                ))}
              </span>
              <span className="font-label text-[9px] font-bold tracking-[0.3em] text-paper/50 uppercase">
                {cell.label}
              </span>
            </div>
            {cellIndex < CELLS.length - 1 && (
              <span
                aria-hidden
                className="font-display mt-[0.32em] text-[clamp(1.5rem,6.4vw,3.6rem)] leading-none text-paper/35"
              >
                :
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
