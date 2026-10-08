import Image from "next/image";
import TogglButton from "./toggle_button/toggl_button";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center bg-white">
      <section className="relative flex mt-5 items-center justify-between gap-4">
        <div className="absolute right-7 top-4">
          <TogglButton />
        </div>
        <div className="flex h-60 w-60 ml-15 items-center justify-center rounded-full bg-white">
          <Image
            src="/about_dyll_assets/LOGO.svg"
            alt="About Dyll logo"
            width={200}
            height={200}
            className="h-40 w-40"
          />
        </div>
      </section>
      <section className="mt-6 ml-30 flex flex-col gap-4">
        <div className=" w-200">
          <h6
            className="text-lg font-semibold text-zinc-400"
            style={{ fontFamily: "var(--font-noto-sans-hebrew), sans-serif" }}
          >
            Full Stack Developer | Cebu City
          </h6>
          <h1
            className="text-4xl font-bold text-zinc-900"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Combining Technology, Creativity, and Continous learning to turn ideas into <span className="text-blue-700">practical solutions.</span>
          </h1>
        </div>
        
      </section>
    </main>
  );
}
