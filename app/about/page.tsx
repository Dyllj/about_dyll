import Logo from "../components/logo/logo";
import PageNav from "../components/page_nav/page_nav";
import TogglButton from "../components/toggle_button/toggl_button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="mx-auto flex w-full flex-col gap-5 px-5 pt-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pt-6 lg:px-10">
        <Logo className="sm:ml-40" />
        <div className="ml-auto flex flex-wrap items-center justify-end gap-3">
          <PageNav />
          <TogglButton />
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:pt-32">
        <section aria-labelledby="about-heading" className="max-w-3xl">
          <p
            className="text-base font-semibold text-zinc-400 sm:text-lg"
            style={{ fontFamily: "var(--font-noto-sans-hebrew), sans-serif" }}
          >
            Full Stack Developer | Cebu City
          </p>
          <h1
            id="about-heading"
            className="mt-4 text-3xl font-bold text-zinc-900 sm:mt-5 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            About Me
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg">
            Hello! I am a passionate Full Stack Developer based in Cebu City, Philippines.
            I combine technology, creativity, and continuous learning to turn ideas into practical solutions.
          </p>
        </section>
      </main>
    </div>
  );
}
