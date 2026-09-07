/**
 * Volets d'un tableau d'affichage mécanique : une tuile sombre par caractère,
 * un filet horizontal au milieu. La classe `animate-fl-flap` rejoue la bascule
 * quand la tuile est remontée (clé React changée).
 */
export function Flap({
  children,
  className = "",
  animate = false,
}: {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}) {
  return (
    <span
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-[4px] border border-paper/12 bg-[#141414] after:absolute after:inset-x-0 after:top-1/2 after:h-px after:bg-black/85 ${
        animate ? "animate-fl-flap" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}

/** Un mot par groupe de volets, pour que la ligne casse entre les mots. */
export function FlapText({
  text,
  className = "",
  tileClassName = "",
}: {
  text: string;
  className?: string;
  tileClassName?: string;
}) {
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex gap-[3px]" aria-hidden>
          {Array.from(word).map((character, index) => (
            <Flap key={index} className={tileClassName}>
              {character}
            </Flap>
          ))}
        </span>
      ))}
    </span>
  );
}
