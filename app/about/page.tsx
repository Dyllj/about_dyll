import Image from "next/image";
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
        <section className="mx-auto max-w-4xl text-left flex gap-5">
          <div className="flex h-130 w-90 flex-col items-center justify-start rounded-4xl bg-zinc-300">
            <div className="relative mt-5 h-110 w-80 overflow-hidden rounded-2xl bg-zinc-100">
              <Image
                src="/about_dyll_assets/e.jpg"
                alt="Wendyll Jay Tautoan"
                fill
                sizes="360px"
                className="object-cover object-top"
              />
            </div>
            <div className="mb-5 mt-1 -ml-20">
              <h2 className="text-2xl font-bold text-zinc-800">Wendyll Jay Tautoan</h2>
              <h4 className="text-lg text-zinc-600">Full Stack Developer</h4>
            </div>
          </div>
          <div className="w-50 h-50">
            <h1 className="text-zinc-800 text-3xl font-extrabold">About <span className="text-blue-700">Me</span></h1>
          </div>
        </section>
      </main>
    </div>
  );
}
