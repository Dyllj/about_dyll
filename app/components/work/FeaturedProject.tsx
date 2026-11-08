import type { MouseEvent } from "react";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TrophyIcon,
} from "./Icons";
import ProjectCover from "./ProjectCover";
import TechChips from "./TechChips";
import { stackItems, stackSample, type Project } from "./content";

type FeaturedProjectProps = {
  project: Project;
  /** Zero-based position of the project in the current filter. */
  index: number;
  total: number;
  onStep: (delta: 1 | -1) => void;
  onOpen: () => void;
};

const styles = {
  panel:
    "group relative overflow-hidden rounded-4xl border border-theme-border bg-surface-muted p-4 sm:p-5",
  spotlight:
    "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(520px_circle_at_var(--mx,50%)_var(--my,0%),var(--brand-spotlight),transparent_60%)]",
  media:
    "relative aspect-video overflow-hidden rounded-3xl border border-white bg-white shadow-sm",
  counter:
    "rounded-full bg-zinc-900 px-3 py-1 text-[13px] font-semibold tabular-nums text-white shadow-lg shadow-black/20",
  featuredChip:
    "rounded-full bg-brand px-3 py-1 text-[13px] font-semibold text-white shadow-lg shadow-brand/30",
  awardChip:
    "inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-[13px] font-semibold text-amber-900 shadow-lg shadow-black/10",
  arrow:
    "grid size-10 place-items-center rounded-full bg-white/85 text-zinc-800 shadow-lg shadow-black/15 backdrop-blur transition duration-300 hover:scale-110 hover:bg-white hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  title: "mt-2 text-3xl font-bold leading-tight tracking-tight text-zinc-900 outline-none sm:text-4xl",
  description: "mt-3 max-w-xl text-base leading-relaxed text-zinc-600",
  primary:
    "group/cta inline-flex h-12 items-center gap-2 rounded-full bg-brand px-7 text-[15px] font-semibold text-white shadow-lg shadow-brand/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
  secondary:
    "group/more inline-flex h-12 items-center gap-2 rounded-full px-4 text-[15px] font-semibold text-zinc-800 transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
};

/** The large card for the selected project. */
export default function FeaturedProject({ project, index, total, onStep, onOpen }: FeaturedProjectProps) {
  // Feeds --mx / --my to the cursor spotlight
  const trackCursor = (event: MouseEvent<HTMLElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - top}px`);
  };

  return (
    <article
      aria-labelledby="featured-title"
      onMouseMove={trackCursor}
      className={styles.panel}
    >
      <span aria-hidden="true" className={styles.spotlight} />

      {/* New key = the card re-mounts and plays its entrance animation */}
      <div key={project.id} className="relative animate-swap-in motion-reduce:animate-none">
        <div className={styles.media}>
          <ProjectCover project={project} sizes="(min-width: 1024px) 400px, 60vw" priority />

          <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
            <span className={styles.counter} aria-label={`Project ${index + 1} of ${total}`}>
              {index + 1} / {total}
            </span>
            {project.featured && <span className={styles.featuredChip}>Featured</span>}
            {project.award && (
              <span className={styles.awardChip}>
                <TrophyIcon width={14} height={14} />
                {project.award}
              </span>
            )}
          </div>

          {total > 1 && (
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button type="button" onClick={() => onStep(-1)} aria-label="Previous project" className={styles.arrow}>
                <ChevronLeftIcon />
              </button>
              <button type="button" onClick={() => onStep(1)} aria-label="Next project" className={styles.arrow}>
                <ChevronRightIcon />
              </button>
            </div>
          )}
        </div>

        <div className="px-1 pb-1 pt-6 sm:px-2">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">
            {[project.type, ...project.categories].filter(Boolean).join("  ·  ")}
          </p>

          <h2 id="featured-title" tabIndex={-1} className={styles.title}>
            {project.title}
          </h2>
          <p className={styles.description}>{project.summary}</p>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Built with</p>
            <TechChips
              items={stackSample(project, 8)}
              total={stackItems(project).length}
              label="Tech stack"
              className="mt-2.5"
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.primary}>
                Live site
                <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
              </a>
            ) : (
              <button type="button" onClick={onOpen} className={styles.primary}>
                View details
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
              </button>
            )}

            {project.liveUrl && (
              <button type="button" onClick={onOpen} className={styles.secondary}>
                See full details
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/more:translate-x-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}