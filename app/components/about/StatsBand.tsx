import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { STATS } from "./content";

const styles = {
  band: "relative overflow-hidden rounded-4xl bg-brand px-6 py-10 text-white shadow-2xl shadow-brand/25 sm:px-12 sm:py-12",
  dots: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(255_255_255/0.18)_1px,transparent_1px)] bg-size-[24px_24px] mask-[linear-gradient(to_bottom_right,black,transparent_70%)]",
  glow: "pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/15 blur-3xl",
  list: "relative grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/20",
  item: "sm:px-8 sm:first:pl-0 sm:last:pr-0",
  value: "text-6xl font-bold leading-none tracking-tight sm:text-7xl",
  label: "mt-3 text-base text-white/80",
};

/** Bold blue band with the headline numbers. */
export default function StatsBand({ className = "" }: { className?: string }) {
  return (
    <Reveal className={className}>
      <section aria-label="Highlights" className={styles.band}>
        <span aria-hidden="true" className={styles.dots} />
        <span aria-hidden="true" className={styles.glow} />

        <ul className={styles.list}>
          {STATS.map(({ value, label }) => (
            <li key={label} className={styles.item}>
              <p className={styles.value}>
                <CountUp to={value} />
              </p>
              <p className={styles.label}>{label}</p>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}