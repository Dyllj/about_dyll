import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  /** Optional element aligned to the right, e.g. a counter. */
  aside?: ReactNode;
};

/** Eyebrow label + large heading with a brand-coloured last word. */
export default function SectionHeading({ id, eyebrow, title, accent, aside }: SectionHeadingProps) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          <span aria-hidden="true" className="h-px w-8 bg-brand" />
          {eyebrow}
        </p>
        <h2 id={id} className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          {title} <span className="text-brand">{accent}</span>
        </h2>
      </div>
      {aside}
    </header>
  );
}