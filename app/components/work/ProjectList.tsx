import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import ProjectListItem from "./ProjectListItem";
import type { Project } from "./content";

type ProjectListProps = {
  projects: Project[];
  /** Zero-based page number. */
  page: number;
  pageCount: number;
  /** Changes whenever the filter or page changes, to replay the entrance animation. */
  resetKey: string;
  onPage: (delta: 1 | -1) => void;
  onSelect: (id: string) => void;
  onOpen: (id: string) => void;
};

const pagerButton =
  "grid size-8 place-items-center rounded-full border border-theme-border bg-white text-zinc-700 transition duration-300 hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

/** "More projects" column with simple pagination. */
export default function ProjectList({
  projects,
  page,
  pageCount,
  resetKey,
  onPage,
  onSelect,
  onOpen,
}: ProjectListProps) {
  return (
    <aside aria-label="More projects">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          More projects
        </h2>

        <div className="flex items-center gap-2 text-sm tabular-nums text-zinc-500">
          <span aria-live="polite" className="mr-1">
            {page + 1} / {pageCount}
          </span>
          <button
            type="button"
            onClick={() => onPage(-1)}
            disabled={page === 0}
            aria-label="Previous page of projects"
            className={pagerButton}
          >
            <ChevronLeftIcon width={16} height={16} />
          </button>
          <button
            type="button"
            onClick={() => onPage(1)}
            disabled={page >= pageCount - 1}
            aria-label="Next page of projects"
            className={pagerButton}
          >
            <ChevronRightIcon width={16} height={16} />
          </button>
        </div>
      </div>

      {projects.length > 0 ? (
        <ul key={resetKey} className="mt-4 grid list-none gap-4 p-0">
          {projects.map((project, index) => (
            <ProjectListItem
              key={project.id}
              project={project}
              index={index}
              onSelect={() => onSelect(project.id)}
              onOpen={() => onOpen(project.id)}
            />
          ))}
        </ul>
      ) : (
        <p className="mt-4 rounded-3xl border border-dashed border-zinc-300 p-6 text-sm text-zinc-500">
          No other projects in this category yet.
        </p>
      )}
    </aside>
  );
}