type FormSuccessProps = {
  onReset: () => void;
};

/** Replaces the form after sending: pulsing rings and a check mark that draws itself. */
export default function FormSuccess({ onReset }: FormSuccessProps) {
  return (
    <div
      role="status"
      className="relative flex min-h-136 animate-swap-in flex-col items-center justify-center rounded-4xl border border-[#e1e4ea] bg-white p-8 text-center shadow-2xl shadow-brand/10 motion-reduce:animate-none sm:p-12"
    >
      <div className="relative grid size-28 place-items-center">
        {[0, 1.3].map((delay) => (
          <span
            key={delay}
            aria-hidden="true"
            style={{ animationDelay: `${delay}s` }}
            className="absolute inset-4 animate-pulse-ring rounded-full border-2 border-brand/40 motion-reduce:animate-none"
          />
        ))}
        <span className="grid size-20 animate-pop place-items-center rounded-full bg-brand text-white shadow-xl shadow-brand/40 motion-reduce:animate-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="40"
            height="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* pathLength=1 lets the "draw" animation work for any path length */}
            <path
              d="M20 6 9 17l-5-5"
              pathLength={1}
              className="animate-draw [stroke-dasharray:1] motion-reduce:animate-none"
            />
          </svg>
        </span>
      </div>

      <h2 className="mt-8 text-3xl font-bold tracking-tight text-zinc-900">Message sent!</h2>
      <p className="mt-3 max-w-sm text-base leading-relaxed text-zinc-600">Thanks for reaching out. I&apos;ll get back to you by email.</p>

      <button
        type="button"
        onClick={onReset}
        className="mt-8 inline-flex h-12 items-center rounded-full border-2 border-zinc-200 px-6 text-[15px] font-semibold text-zinc-800 transition-colors duration-300 hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      >
        Send another message
      </button>
    </div>
  );
}