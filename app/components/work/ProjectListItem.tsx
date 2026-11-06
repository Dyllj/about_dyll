import { ArrowRightIcon } from "./Icons";
import ProjectCover from "./ProjectCover";
import TagList from "./TagList";
import type { Project } from "./content";

type ProjectListItemProps = {
  project: Project;
  /** Position in the list, used to stagger the entrance animation. */
  index: number;
  onSelect: () => void;
  onOpen: () => void;
};

const styles = {
  card: "group flex gap-4 rounded-3xl border border-theme-border bg-surface-muted p-4 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-xl hover:shadow-brand/10",
  thumb:
    "relative size-20 shrink-0 self-start overflow-hidden rounded-2xl border border-white bg-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:size-24",
  thumbZoom: "absolute inset-0 transition-transform duration-500 group-hover:scale-110",
  title:
    "text-left text-lg font-semibold leading-snug tracking-tight text-zinc-900 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  details:
    "group/link mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
};

/** One row in the "More projects" column. */
export default function ProjectListItem({ project, index, onSelect, onOpen }: ProjectListItemProps) {
  return (
    <li
      style={{ animationDelay: `${index * 70}ms` }}
      className="animate-swap-in motion-reduce:animate-none"
    >
      <article className={styles.card}>
        <button
          type="button"
          onClick={onSelect}
          aria-label={`Show ${project.title} as the featured project`}
          className={styles.thumb}
        >
          <span className={styles.thumbZoom}>
            <ProjectCover project={project} sizes="80px" size="thumb" />
          </span>
        </button>

        <div className="min-w-0 flex-1">
          <h3>
            <button type="button" onClick={onSelect} className={styles.title}>
              {project.title}
            </button>
          </h3>

          <TagList tags={project.tags} label={`${project.title} tags`} className="mt-2" />
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-600">{project.description}</p>

          <button type="button" onClick={onOpen} className={styles.details}>
            See full details
            <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </button>
        </div>
      </article>
    </li>
  );
}