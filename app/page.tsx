import Image from "next/image";
import TogglButton from "./toggle_button/toggl_button";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center bg-white">
      <section className="relative flex mt-5 items-center justify-between gap-4">
        <div className="absolute right-7 top-4">
          <TogglButton />
        </div>
        <div className="flex h-60 w-60 ml-60 items-center justify-center rounded-full bg-white">
          <Image
            src="/about_dyll_assets/LOGO.svg"
            alt="About Dyll logo"
            width={200}
            height={200}
            className="h-40 w-40"
          />
        </div>
      </section>
      <section className="mt-6 ml-60 flex flex-col gap-4">
        <div className=" w-100 bg-amber-200">
          <h6 className="text-lg font-semibold text-zinc-400">Full Stack Developer | Cebu City</h6>
        <h1 className="text-5xl font-bold text-zinc-900">Hi, I’m Dyll.</h1>
        <p className="text-lg text-zinc-600">
          I’m a full stack developer with a passion for creating innovative and user-friendly web applications. I specialize in building scalable and efficient solutions that meet the needs of businesses and users alike.
        </p>
        </div>
        
      </section>
    </main>
  );
}
