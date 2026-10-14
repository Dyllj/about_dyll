import Logo from "../components/logo/logo";
import PageNav from "../components/page_nav/page_nav";
import TogglButton from "../components/toggle_button/toggl_button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="mx-auto flex w-full flex-col gap-5 px-5 pt-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pt-6 lg:px-10">
        <Logo className="sm:ml-40" />
        <div className="ml-auto flex flex-wrap items-center justify-end gap-10">
          <PageNav />
          <TogglButton />
        </div>
      </header>
      <main className="w-full -mt-20 max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:pt-32">
        <section className="mx-auto max-w-4xl text-left">
          <div className="flex h-130 w-100 flex-col items-center justify-start rounded-2xl bg-zinc-300">
            <div className="mt-8 flex h-90 w-90 items-center justify-center rounded-md bg-zinc-100" />
            <div className="mt-6 -ml-30">
              <h2 className="text-2xl font-bold text-zinc-800">Wendyll Jay Tautoan</h2>
              <h4 className="text-lg text-zinc-600">Full Stack Developer</h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
