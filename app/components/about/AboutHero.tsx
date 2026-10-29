import ProfileCard from "./ProfileCard";
import Reveal from "./Reveal";
import { PROFILE } from "./content";

type AboutHeroProps = {
  onGetInTouch: () => void;
  onViewWork: () => void;
};

const styles = {
  section: "grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16",
  pill: "inline-flex items-center gap-2.5 rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm backdrop-blur",
  heading: "mt-6 text-6xl font-bold leading-none tracking-tight text-zinc-900 sm:text-7xl xl:text-8xl",
  lead: "mt-8 max-w-xl text-lg leading-[1.75] text-zinc-700",
  body: "mt-4 max-w-xl text-lg leading-[1.75] text-zinc-600",
  fact: "rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 backdrop-blur",
  factLabel: "text-xs font-medium uppercase tracking-wider text-zinc-500",
  factValue: "mt-1 flex items-center gap-2 text-[15px] font-semibold text-zinc-900",
  primaryButton: "btn-progress inline-flex items-center justify-center whitespace-nowrap",
  secondaryButton:
    "inline-flex h-[45px] items-center rounded-full border-2 border-zinc-200 bg-white/70 px-6 text-[15px] font-medium text-zinc-800 backdrop-blur transition-colors duration-300 hover:border-brand hover:text-brand",
};

const FACTS = [
  { label: "Role", value: PROFILE.role },
  { label: "Based in", value: PROFILE.location },
  { label: "Status", value: PROFILE.status, live: true },
];

/** Intro: headline, bio, quick facts and calls to action, next to the portrait. */
export default function AboutHero({ onGetInTouch, onViewWork }: AboutHeroProps) {
  return (
    <section aria-labelledby="about-heading" className={styles.section}>
      <div>
        <Reveal>
          <p className={styles.pill}>
            <span className="size-2 rounded-full bg-brand" />
            Get to know me
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 id="about-heading" className={styles.heading}>
            About <span className="hero-underline text-brand">me</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className={styles.lead}>
            I&apos;m a software developer focused on building intuitive, practical, and
            engaging digital experiences. My work spans web development, IoT, and real-world
            applications, using{" "}
            <span className="font-semibold text-brand">AI-assisted development</span> to turn
            ideas into working solutions.
          </p>
          <p className={styles.body}>
            I enjoy collaborating, solving problems creatively, and continuously learning in
            ways that are useful, maintainable, and meaningful.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <dl className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {FACTS.map(({ label, value, live }) => (
              <div key={label} className={styles.fact}>
                <dt className={styles.factLabel}>{label}</dt>
                <dd className={styles.factValue}>
                  {live && <span className="size-2 rounded-full bg-green-600" />}
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="button" onClick={onGetInTouch} className={styles.primaryButton}>
              Get in Touch
            </button>
            <button type="button" onClick={onViewWork} className={styles.secondaryButton}>
              View my work
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <ProfileCard />
      </Reveal>
    </section>
  );
}