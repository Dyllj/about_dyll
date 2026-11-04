/** Eyebrow, headline and intro text. */
export default function ContactHeader() {
  return (
    <header>
      <p className="inline-flex items-center gap-2.5 rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm backdrop-blur">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
        </span>
        Contact
      </p>

      <h1
        id="contact-heading"
        className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl xl:text-7xl"
      >
        Let&apos;s build something <span className="hero-underline text-brand">meaningful.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-[1.75] text-zinc-600">
        Whether you&apos;re looking for a product partner, a new teammate, or a developer to turn an
        idea into a working experience, I&apos;d love to hear from you.
      </p>
    </header>
  );
}