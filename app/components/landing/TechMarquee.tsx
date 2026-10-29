import { TECH_STACK } from "./content";

const styles = {
  strip: "relative z-10 border-y border-zinc-200/80 bg-white/70 backdrop-blur",
  viewport:
    "overflow-hidden py-5 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
  track:
    "flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused] motion-reduce:animate-none",
  item: "flex items-center gap-3 text-sm font-medium text-zinc-500",
  badge:
    "grid size-8 place-items-center rounded-lg bg-brand/10 text-xs font-bold text-brand",
};

/** Endless strip of the tech stack. The list is doubled so the loop is seamless. */
export default function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className={styles.strip}>
      <p className="sr-only">Tech stack: {TECH_STACK.map((tech) => tech.name).join(", ")}</p>

      <div aria-hidden="true" className={styles.viewport}>
        <ul className={styles.track}>
          {items.map(({ short, name }, index) => (
            <li key={`${name}-${index}`} className={styles.item}>
              <span className={styles.badge}>{short}</span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}