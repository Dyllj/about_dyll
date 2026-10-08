import Image from "next/image";
import TogglButton from "./toggle_button/toggl_button";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center bg-white">
      <section className="relative mt-5 flex items-start justify-between gap-4">
        <div className="absolute right-7 top-4">
          <TogglButton />
        </div>
        <div className="ml-15 flex h-60 w-60 items-center justify-center rounded-full bg-white">
          <Image
            src="/about_dyll_assets/LOGO.svg"
            alt="About Dyll logo"
            width={200}
            height={200}
            className="h-40 w-40"
          />
        </div>
      </section>

      <section className="mt-6 flex items-center justify-between gap-10 pl-30 pr-18">
        <div className="w-140">
          <h6
            className="text-lg font-semibold text-zinc-400"
            style={{ fontFamily: "var(--font-noto-sans-hebrew), sans-serif" }}
          >
            Full Stack Developer | Cebu City
          </h6>
          <h1
            className="mt-5 text-4xl font-bold leading-[1.05] text-zinc-900"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Combining Technology, Creativity, and Continous learning to turn ideas into <span className="text-blue-700">practical solutions.</span>
          </h1>
        </div>

        <div className="relative flex h-130 w-130 items-center justify-center">
          <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_1px,transparent_1px)] bg-size-[16px_16px] opacity-70" />

          <div className="relative flex h-107.5 w-107.5 items-center justify-center rounded-full border-10 border-blue-600 bg-white shadow-[0_0_0_1px_rgba(37,99,235,0.02)]">
            <div className="absolute left-1/2 -top-11 flex h-23 w-23 -translate-x-1/2 items-center justify-center rounded-full border-10 border-blue-600 bg-[#d9d9d9] text-[#1c1c1c] shadow-[0_0_0_8px_rgba(255,255,255,0.8)]">
              <svg viewBox="0 0 64 64" className="h-10 w-10 fill-current" aria-label="Profile icon">
                <circle cx="32" cy="22" r="12" />
                <path d="M20 48c3-8 11-12 12-12s9 4 12 12v4H20v-4Z" />
              </svg>
            </div>

            <div className="absolute -bottom-4.5 left-1/2 flex h-23 w-23 -translate-x-1/2 items-center justify-center rounded-full border-10 border-blue-600 bg-[#d9d9d9] text-[#1c1c1c] shadow-[0_0_0_8px_rgba(255,255,255,0.8)]">
              <svg viewBox="0 0 64 64" className="h-10 w-10 fill-current" aria-label="Briefcase icon">
                <path d="M20 24V18c0-3 2-5 5-5h14c3 0 5 2 5 5v6h5c4 0 7 3 7 7v14c0 4-3 7-7 7H15c-4 0-7-3-7-7V31c0-4 3-7 7-7h5Zm6-6v6h12v-6H26Z" />
                <path d="M15 33h34v12H15z" opacity="0.22" />
              </svg>
            </div>

            <div className="absolute -right-7 top-32.5 flex h-23 w-23 items-center justify-center rounded-full border-10 border-blue-600 bg-[#d9d9d9] text-[#1c1c1c] shadow-[0_0_0_8px_rgba(255,255,255,0.8)]">
              <svg viewBox="0 0 64 64" className="h-10 w-10 fill-current" aria-label="Mail icon">
                <path d="M10 18h44v28H10z" opacity="0.14" />
                <path d="M12 20l20 16 20-16v24H12zm4-2h32l-16 13L16 18Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
