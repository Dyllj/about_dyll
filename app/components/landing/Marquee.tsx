import type { ReactNode } from "react";

type MarqueeProps = {
  /** Text read by screen readers instead of the (hidden) scrolling copy. */
  label: string;
  items: ReactNode[];
};

/**
 * The list is repeated 6 times and the track slides by half of its width (3 copies).
 * Because the copies are identical the loop is seamless, and the track stays wide
 * enough to fill very wide screens without leaving a gap on the right.
 */
const COPIES = 6;

const styles = {
  strip: "relative z-10 border-y border-zinc-200/80 bg-white/70 backdrop-blur",
  viewport:
    "overflow-hidden py-6 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
  track:
    "flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused] motion-reduce:animate-none",
};

/** Full-width strip with an endless, pausable horizontal scroll. */
export default function Marquee({ label, items }: MarqueeProps) {
  const loop = Array.from({ length: COPIES }, () => items).flat();

  return (
    <div className={styles.strip}>
      <p className="sr-only">{label}</p>

      <div aria-hidden="true" className={styles.viewport}>
        <ul className={styles.track}>
          {loop.map((item, index) => (
            <li key={index} className="flex items-center">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}