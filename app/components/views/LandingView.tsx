"use client";

import Image from "next/image";
import type { MouseEvent, ReactNode } from "react";
import Nav from "../nav/nav";

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const TECH_STACK = [
  { short: "R", name: "React" },
  { short: "JS", name: "JavaScript" },
  { short: "TS", name: "TypeScript" },
  { short: "php", name: "PHP" },
  { short: "Py", name: "Python" },
  { short: "SQL", name: "MySQL" },
  { short: "Sb", name: "Supabase" },
];

/* -------------------------------------------------------------------------- */
/*  Styles (Tailwind classes grouped by the element they belong to)           */
/*  Brand blue lives in globals.css as `--color-brand` (text-brand, bg-brand) */
/* -------------------------------------------------------------------------- */

const styles = {
  page: "relative flex min-h-screen flex-col overflow-hidden bg-white",
  main: "relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20",

  // Text | nav | portrait on large screens. On mobile the portrait comes first.
  hero: "grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-14",
  copy: "max-w-2xl",

  pill: "animate-rise inline-flex items-center gap-3 rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm backdrop-blur motion-reduce:animate-none sm:text-base",
  heading:
    "animate-rise mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 [animation-delay:120ms] motion-reduce:animate-none sm:text-5xl lg:text-4xl xl:text-5xl",
  headingAccent: "hero-underline text-brand",
  actions:
    "animate-rise mt-8 flex flex-wrap items-center gap-4 [animation-delay:260ms] motion-reduce:animate-none",
  primaryButton:
    "btn-progress inline-flex items-center justify-center gap-2 whitespace-nowrap",
  secondaryButton:
    "inline-flex h-[45px] items-center gap-2 rounded-full border-2 border-zinc-200 bg-white/70 px-6 text-[15px] font-medium text-zinc-800 backdrop-blur transition-colors duration-300 hover:border-brand hover:text-brand",

  nav: "animate-rise relative z-40 shrink-0 justify-self-end [animation-delay:380ms] motion-reduce:animate-none lg:justify-self-auto",

  portraitWrap:
    "animate-rise relative order-first mx-auto size-72 [animation-delay:200ms] motion-reduce:animate-none sm:size-80 lg:order-last xl:size-96",
};

const fonts = {
  eyebrow: { fontFamily: "var(--font-noto-sans-hebrew), sans-serif" },
  heading: { fontFamily: "var(--font-space-grotesk), sans-serif" },
};

/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                     */
/* -------------------------------------------------------------------------- */

function Icon({ children, size = 20 }: { children: ReactNode; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const ArrowRightIcon = () => (
  <Icon size={18}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Icon>
);

const GraduationCapIcon = () => (
  <Icon>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c3 2 9 2 12 0v-5" />
  </Icon>
);

const AwardIcon = () => (
  <Icon>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
  </Icon>
);

/** Frosted-glass badge that gently bobs up and down. */
function FloatingBadge({
  icon,
  title,
  detail,
  className = "",
  delay = "0s",
}: {
  icon: ReactNode;
  title: string;
  detail: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div className={className}>
      <div
        style={{ animationDelay: delay }}
        className="animate-float flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-xl shadow-brand/10 backdrop-blur-md motion-reduce:animate-none"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-white">
          {icon}
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-zinc-900">{title}</span>
          <span className="block text-xs text-zinc-500">{detail}</span>
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sections                                                                  */
/* -------------------------------------------------------------------------- */

/** Decorative background: dot grid, soft colour blobs and a cursor spotlight. */
function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#c9d6ff_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_75%_65%_at_65%_40%,black,transparent)]" />
      <div className="absolute -right-40 -top-40 size-136 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute inset-0 hidden [background:radial-gradient(520px_circle_at_var(--mx,70%)_var(--my,30%),rgb(0_71_255/0.07),transparent_60%)] lg:block" />
    </div>
  );
}

function Portrait() {
  return (
    <div className={styles.portraitWrap}>
      {/* Glow behind the photo */}
      <span aria-hidden="true" className="absolute inset-6 rounded-full bg-brand/25 blur-3xl" />

      {/* Slow dashed ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-spin rounded-full border-2 border-dashed border-brand/25 [animation-duration:40s] motion-reduce:animate-none"
      />

      {/* Fast blue arc with an orbiting dot (echoes the ring in the header logo) */}
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand [animation-duration:8s] motion-reduce:animate-none"
      >
        <span className="absolute -top-1.75 left-1/2 size-3 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_20px_4px_rgb(0_71_255/0.55)]" />
      </span>

      {/* Photo */}
      <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-white bg-zinc-900 shadow-2xl shadow-brand/20">
        <Image
          src="/about_dyll_assets/e.jpg"
          alt="Portrait of Dyll"
          fill
          priority
          sizes="(min-width: 1280px) 384px, (min-width: 640px) 320px, 288px"
          className="object-cover object-[50%_12%]"
        />
      </div>

      <FloatingBadge
        icon={<AwardIcon />}
        title="Best Paper Award"
        detail="Research"
        className="absolute -right-4 top-10 xl:-right-10"
      />
      <FloatingBadge
        icon={<GraduationCapIcon />}
        title="Cum Laude Graduate"
        detail="2025–2026"
        delay="-3s"
        className="absolute inset-x-0 -bottom-5 flex justify-center"
      />
    </div>
  );
}

/** Endless strip of the tech stack. The list is doubled so the loop is seamless. */
function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative z-10 border-y border-zinc-200/80 bg-white/70 backdrop-blur">
      <p className="sr-only">
        Tech stack: {TECH_STACK.map((tech) => tech.name).join(", ")}
      </p>

      <div
        aria-hidden="true"
        className="overflow-hidden py-5 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <ul className="flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {items.map(({ short, name }, index) => (
            <li
              key={`${name}-${index}`}
              className="flex items-center gap-3 text-sm font-medium text-zinc-500"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-brand/10 text-xs font-bold text-brand">
                {short}
              </span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  View                                                                      */
/* -------------------------------------------------------------------------- */

export default function LandingView() {
  // page.tsx switches views on the `hashchange` event, so set the hash directly
  const goTo = (view: "work" | "contact") => () => {
    window.location.hash = view;
  };

  // Feeds --mx / --my to the cursor spotlight in <Backdrop />
  const trackCursor = (event: MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - top}px`);
  };

  return (
    <div onMouseMove={trackCursor} className={styles.page}>
      <Backdrop />

      <main className={styles.main}>
        <div className={styles.hero}>
          <section aria-labelledby="home-heading" className={styles.copy}>
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
              <button type="button" onClick={goTo("contact")} className={styles.primaryButton}>
                Get in Touch
                <ArrowRightIcon />
              </button>
              <button type="button" onClick={goTo("work")} className={styles.secondaryButton}>
                View my work
              </button>
            </div>
          </section>

          <Nav className={styles.nav} />
          <Portrait />
        </div>
      </main>

      <TechMarquee />
    </div>
  );
}