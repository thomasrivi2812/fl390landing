import { ICAO_CODES } from "@/lib/site";

const COLUMNS = 6;

/**
 * Fond animé du hero : six colonnes de codes OACI qui dérivent lentement,
 * chacune à sa vitesse, une sur deux à contre-sens. Deux passes identiques par
 * colonne pour un défilement sans couture. Purement décoratif, très atténué,
 * fondu sur les bords par un masque radial ; immobile si l'utilisateur a
 * demandé moins de mouvement.
 */
export function CodeDrift() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 grid grid-cols-3 gap-x-[8px] overflow-hidden px-[8px] select-none min-[760px]:grid-cols-6 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_78%)]"
    >
      {Array.from({ length: COLUMNS }, (_, column) => {
        const codes = [
          ...ICAO_CODES.slice(column * 3),
          ...ICAO_CODES.slice(0, column * 3),
        ];
        const run = (
          <span className="flex flex-col items-center gap-[46px] py-[23px]">
            {codes.map((code) => (
              <span key={code}>{code}</span>
            ))}
          </span>
        );
        return (
          <div
            key={column}
            className={`font-label flex flex-col text-[11px] font-semibold tracking-[0.34em] text-paper/11 ${
              column >= 3 ? "hidden min-[760px]:flex" : ""
            }`}
            style={{
              animation: `fl-drift ${52 + column * 9}s linear infinite`,
              animationDirection: column % 2 ? "reverse" : "normal",
            }}
          >
            {run}
            {run}
          </div>
        );
      })}
    </div>
  );
}
