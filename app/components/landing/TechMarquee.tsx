import { TECH_STACK } from "./content";
import Marquee from "./Marquee";

const styles = {
  item: "flex items-center gap-3 text-sm font-medium text-zinc-500",
  badge: "grid size-8 place-items-center rounded-lg bg-brand/10 text-xs font-bold text-brand",
};

/** Scrolling strip of the tech stack. */
export default function TechMarquee() {
  const items = TECH_STACK.map(({ short, name }) => (
    <div key={name} className={styles.item}>
      <span className={styles.badge}>{short}</span>
      {name}
    </div>
  ));

  return (
    <Marquee
      label={`Tech stack: ${TECH_STACK.map((tech) => tech.name).join(", ")}`}
      items={items}
    />
  );
}