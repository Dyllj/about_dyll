import Reveal from "./Reveal";

const styles = {
  card: "relative overflow-hidden rounded-4xl border border-brand/15 bg-linear-to-br from-white to-brand/5 px-6 py-14 text-center sm:px-14",
  ring: "pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full border-2 border-dashed border-brand/20",
  glow: "pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand/10 blur-3xl",
};

/** Closing call to action that points visitors to the contact page. */
export default function AboutCta({ onGetInTouch, className = "" }: { onGetInTouch: () => void; className?: string }) {
  return (
    <Reveal className={className}>
      <section aria-labelledby="about-cta-heading" className={styles.card}>
        <span aria-hidden="true" className={styles.ring} />
        <span aria-hidden="true" className={styles.glow} />

        <div className="relative">
          <h2
            id="about-cta-heading"
            className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Let&apos;s build something <span className="text-brand">useful</span> together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            Have an idea or an opportunity in mind? I&apos;d love to hear about it.
          </p>
          <button
            type="button"
            onClick={onGetInTouch}
            className="btn-progress mt-8 inline-flex items-center justify-center whitespace-nowrap"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </Reveal>
  );
}