import Logo from "../components/logo/logo";
import PageNav from "../components/page_nav/page_nav";
import TogglButton from "../components/toggle_button/toggl_button";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="absolute left-80 top-3 z-40">
        <Logo />
      </header>
      <div className="absolute right-20 top-6 z-40 flex items-center gap-15">
        <PageNav />
        <TogglButton />
      </div>
      <section className="mt-28 ml-30 flex flex-col gap-4 pt-16 pr-24">
        <div className="w-200">
          <h6
            className="text-lg font-semibold text-zinc-400"
            style={{ fontFamily: "var(--font-noto-sans-hebrew), sans-serif" }}
          >
            Full Stack Developer | Cebu City
          </h6>
          <h1
            className="mt-5 text-4xl font-bold text-zinc-900"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            About Me
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600">
            Hello! I am a passionate Full Stack Developer based in Cebu City, Philippines.
            I combine technology, creativity, and continuous learning to turn ideas into practical solutions.
          </p>
        </div>
      </section>
    </main>
  );
}
