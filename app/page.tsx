import Image from "next/image";
import Link from "next/link";
import TogglButton from "./components/toggle_button/toggl_button";
import Nav from "./components/nav/nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <header className="relative flex min-h-24 items-center justify-between px-5 pt-4 sm:min-h-32 sm:px-8">
        <figure className="m-0 flex size-20 items-center justify-center rounded-full bg-white sm:size-28">
          <Image
            src="/about_dyll_assets/LOGO.svg"
            alt="About Dyll logo"
            width={200}
            height={200}
            className="size-16 sm:size-24"
            priority
          />
        </figure>
        <div className="absolute right-5 top-5 z-40 sm:right-8 sm:top-6">
          <TogglButton />
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:pt-16">
        <section aria-labelledby="home-heading" className="max-w-4xl">
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
          <Link href="/contact" className="btn-progress mt-6 inline-flex items-center justify-center gap-2">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </section>
      </main>
    </div>
  );
}
