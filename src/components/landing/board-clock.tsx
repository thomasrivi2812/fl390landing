"use client";

import { useEffect, useState } from "react";

const FORMAT = new Intl.DateTimeFormat("fr-FR", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Europe/Paris",
});

/** Heure locale de Paris, comme sur un vrai tableau d'affichage. */
export function BoardClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(FORMAT.format(new Date()));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="font-label tabular-nums" suppressHydrationWarning>
      {time ?? "––:––:––"}
    </span>
  );
}
