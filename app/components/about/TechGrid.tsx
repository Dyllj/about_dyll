import { TECH_STACK } from "../landing/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TechTile from "./TechTile";

const styles = {
  grid: "mt-10 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-4 lg:grid-cols-7",
};

/** Technology tiles with brand icons, ambient motion and cursor-aware hover effects. */
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
              <TechTile name={name} short={short} index={index} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}