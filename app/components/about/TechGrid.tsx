import type { CSSProperties } from "react";
import { TECH_STACK } from "../landing/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TechTile from "./TechTile";

/**
 * The list is repeated COPIES times and the track slides left by exactly half its
 * width (2 copies). Because the copies are identical, the loop is seamless.
 */
const COPIES = 4;

/** Seconds of scrolling per technology, so speed stays constant as the list grows. */
const SECONDS_PER_TILE = 5.5;

const styles = {
  viewport: "tech-marquee-viewport tech-fade",
  track: "tech-marquee-track",
};

/** Endless, pausable marquee of technology tiles with faded left and right edges. */
export default function TechGrid({ className = "" }: { className?: string }) {
  const label = TECH_STACK.map((tech) => tech.name).join(", ");
  const trackStyle = {
    "--marquee-duration": `${TECH_STACK.length * SECONDS_PER_TILE}s`,
  } as CSSProperties;

  return (
    <section aria-labelledby="tech-heading" className={className}>
      <Reveal>
        <SectionHeading id="tech-heading" eyebrow="Toolbox" title="My" accent="technologies" />
      </Reveal>

      <Reveal delay={150}>
        <p className="sr-only">Technologies I work with: {label}</p>

        <div className={styles.viewport}>
          <ul className={styles.track} style={trackStyle}>
            {Array.from({ length: COPIES }, (_, copy) =>
              TECH_STACK.map(({ short, name }, index) => (
                <li
                  key={`${copy}-${name}`}
                  // Only the first copy is read by screen readers
                  aria-hidden={copy > 0 ? true : undefined}
                  // Without motion there is nothing to loop, so extra copies are hidden
                  className={`tech-marquee-item ${copy > 0 ? "motion-reduce:hidden" : ""}`}
                >
                  <TechTile name={name} short={short} index={index} />
                </li>
              )),
            )}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}