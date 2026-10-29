type HeroCopyProps = {
  onGetInTouch: () => void;
  onViewWork: () => void;
};

const styles = {
  section: "max-w-2xl",
  pill: "animate-rise inline-flex items-center gap-3 rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm backdrop-blur motion-reduce:animate-none sm:text-base",
  heading:
    "animate-rise mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 [animation-delay:120ms] motion-reduce:animate-none sm:text-5xl lg:text-4xl xl:text-5xl",
  headingAccent: "hero-underline text-brand",
  actions:
    "animate-rise mt-8 flex flex-wrap items-center gap-4 [animation-delay:260ms] motion-reduce:animate-none",
  primaryButton: "btn-progress inline-flex items-center justify-center gap-2 whitespace-nowrap",
  secondaryButton:
    "inline-flex h-[45px] items-center gap-2 rounded-full border-2 border-zinc-200 bg-white/70 px-6 text-[15px] font-medium text-zinc-800 backdrop-blur transition-colors duration-300 hover:border-brand hover:text-brand",
};

const fonts = {
  eyebrow: { fontFamily: "var(--font-noto-sans-hebrew), sans-serif" },
  heading: { fontFamily: "var(--font-space-grotesk), sans-serif" },
};

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function HeroCopy({ onGetInTouch, onViewWork }: HeroCopyProps) {
  return (
    <section aria-labelledby="home-heading" className={styles.section}>
      <p className={styles.pill} style={fonts.eyebrow}>
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
        </span>
        Full Stack Developer
        <span aria-hidden="true" className="h-4 w-px bg-zinc-300" />
        Cebu City
      </p>

      <h1 id="home-heading" className={styles.heading} style={fonts.heading}>
        Combining Technology, Creativity, and Continuous learning to turn ideas into{" "}
        <span className={styles.headingAccent}>practical solutions.</span>
      </h1>

      <div className={styles.actions}>
        <button type="button" onClick={onGetInTouch} className={styles.primaryButton}>
          Get in Touch
          <ArrowRightIcon />
        </button>
        <button type="button" onClick={onViewWork} className={styles.secondaryButton}>
          View my work
        </button>
      </div>
    </section>
  );
}