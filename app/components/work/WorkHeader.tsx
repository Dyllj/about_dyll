import FilterTabs from "./FilterTabs";
import type { Filter } from "./content";

type WorkHeaderProps = {
  count: number;
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
};

/** Page title, live project count and the filter tabs. */
export default function WorkHeader({ count, filter, onFilterChange }: WorkHeaderProps) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-5">
      <div className="flex items-baseline gap-4">
        <h1
          id="work-heading"
          className="text-5xl font-bold leading-none tracking-tight text-zinc-900 sm:text-6xl"
        >
          Work<span className="text-brand">.</span>
        </h1>
        <p aria-live="polite" className="text-[15px] text-zinc-500">
          <span className="font-semibold tabular-nums text-zinc-800">{count}</span>{" "}
          {count === 1 ? "project" : "projects"}
        </p>
      </div>

      <FilterTabs value={filter} onChange={onFilterChange} />
    </header>
  );
}