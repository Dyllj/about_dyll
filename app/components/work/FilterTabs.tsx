import type { CSSProperties } from "react";
import { FILTERS, type Filter } from "./content";

type FilterTabsProps = {
  value: Filter;
  onChange: (filter: Filter) => void;
};

const styles = {
  track: "relative grid grid-cols-4 rounded-full border border-[#e1e4ea] bg-white p-1 shadow-sm",
  // Every column has the same width, so the blue pill only has to slide by --i columns
  thumb:
    "absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/4)] translate-x-[calc(var(--i)*100%)] rounded-full bg-brand shadow-md shadow-brand/30 transition-transform duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)] motion-reduce:transition-none",
  button:
    "relative z-10 min-w-16 rounded-full px-3 py-2 text-[15px] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:min-w-20 sm:px-4",
};

/** Segmented filter with a blue pill that slides to the selected tab. */
export default function FilterTabs({ value, onChange }: FilterTabsProps) {
  const index = FILTERS.indexOf(value);

  return (
    <div
      role="group"
      aria-label="Filter projects by type"
      className={styles.track}
      style={{ "--i": index } as CSSProperties}
    >
      <span aria-hidden="true" className={styles.thumb} />

      {FILTERS.map((filter) => {
        const selected = filter === value;
        return (
          <button
            key={filter}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(filter)}
            className={`${styles.button} ${selected ? "text-white" : "text-zinc-700 hover:text-brand"}`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}