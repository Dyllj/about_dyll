import Image from "next/image";
import TogglButton from "./toggle_button/toggl_button";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center bg-zinc-100 p-6">
      <section className="relative flex items-center justify-between gap-4">
        <div className="absolute right-4 top-4">
          <TogglButton />
        </div>
        <Image
          src="/about_dyll_assets/LOGO.svg"
          alt="About Dyll logo"
          width={220}
          height={220}
          className="h-52 w-52 rounded-full object-cover"
        />
      </section>
      <section className="mt-6 flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold text-zinc-800">Getting Started</h2>
        <p className="text-zinc-600">
          To get started, edit the <code>app/page.tsx</code> file and save to reload.
        </p>
      </section>
    </main>
  );
}
