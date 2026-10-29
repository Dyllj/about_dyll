import { TECH_STACK } from "../landing/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const styles = {
  grid: "mt-10 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-4 lg:grid-cols-7",
  tile: "group h-full rounded-3xl border border-zinc-200 bg-white p-5 text-center transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-xl hover:shadow-brand/10",
  badge:
    "mx-auto grid size-16 place-items-center rounded-2xl bg-brand/10 text-xl font-bold text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white",
  name: "mt-3 text-sm font-medium text-zinc-700",
};

/** Technology tiles that light up on hover. */
export default function TechGrid({ className = "" }: { className?: string }) {
  return (
    <section aria-labelledby="tech-heading" className={className}>
      <Reveal>
        <SectionHeading id="tech-heading" eyebrow="Toolbox" title="My" accent="technologies" />
      </Reveal>

      <ul className={styles.grid}>
        {TECH_STACK.map(({ short, name }, index) => (
          <li key={name}>
            <Reveal delay={index * 70} className="h-full">
              <div className={styles.tile}>
                <div className={styles.badge}>{short}</div>
                <p className={styles.name}>{name}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}