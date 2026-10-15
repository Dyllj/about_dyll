"use client";

import Nav from "../nav/nav";

export default function LandingView() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="ml-25 mt-10 w-full max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:pt-16">
        <section aria-labelledby="home-heading" className="max-w-4xl text-left">
          <p
            className="text-sm font-semibold text-zinc-400 sm:text-base"
            style={{ fontFamily: "var(--font-noto-sans-hebrew), sans-serif" }}
          >
            Full Stack Developer | Cebu City
          </p>
          <h1
            id="home-heading"
            className="mt-4 text-3xl font-bold leading-tight text-zinc-900 sm:mt-5 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Combining Technology, Creativity, and Continuous learning to turn ideas into{" "}
            <span className="text-blue-700">practical solutions.</span>
          </h1>
          <button className="btn-progress mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-white hover:bg-blue-800 border-2 border-blue-700 hover:border-blue-700 transition-all duration-300">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </section>
      </main>
    </div>
  );
}