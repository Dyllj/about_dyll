  export default function AboutPage() {
  return (
    <main className="min-h-screen items-center justify-center bg-white">
      <section className="relative flex mt-5 items-center justify-between gap-4">
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
            className="mt-5 text-4xl font-bold text-zinc-900"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            About Me
          </h1>
          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            Hello! I am a passionate Full Stack Developer based in Cebu City, Philippines. 
            I combine technology, creativity, and continuous learning to turn ideas into practical solutions.
          </p>
        </div>
      </section>
    </main>
  );
}
