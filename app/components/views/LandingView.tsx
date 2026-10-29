"use client";

import Nav from "../nav/nav";

const styles = {
  page: "min-h-screen bg-white",
  main: "ml-25 mt-10 w-full max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:pt-16",
  // Hero text and nav side by side on large screens, stacked on small ones
  content: "mt-50 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-16",
  hero: "max-w-4xl text-left",
  eyebrow: "text-sm font-semibold text-zinc-400 sm:text-base",
  heading:
    "mt-4 text-3xl font-bold leading-tight text-zinc-900 sm:mt-5 sm:text-4xl lg:text-5xl",
  headingAccent: "text-blue-700",
  button:
    "btn-progress mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-700 bg-blue-700 px-6 py-3 text-white transition-all duration-300 hover:border-blue-700 hover:bg-blue-800 cursor-pointer whitespace-nowrap",
  nav: "relative z-40 shrink-0 self-end lg:self-center lg:translate-x-50",
};

const fonts = {
  eyebrow: { fontFamily: "var(--font-noto-sans-hebrew), sans-serif" },
  heading: { fontFamily: "var(--font-space-grotesk), sans-serif" },
};

function ArrowRightIcon() {
  return (
    <svg
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

export default function LandingView() {
  const goToContact = () => {
    window.location.hash = "contact";
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <section aria-labelledby="home-heading" className={styles.hero}>
            <p className={styles.eyebrow} style={fonts.eyebrow}>
              Full Stack Developer | Cebu City
            </p>

            <h1 id="home-heading" className={styles.heading} style={fonts.heading}>
              Combining Technology, Creativity, and Continuous learning to turn ideas into{" "}
              <span className={styles.headingAccent}>practical solutions.</span>
            </h1>

            <button type="button" onClick={goToContact} className={styles.button}>
              Get in Touch
              <ArrowRightIcon />
            </button>
          </section>

          <Nav className={styles.nav} />
        </div>
      </main>
    </div>
  );
}