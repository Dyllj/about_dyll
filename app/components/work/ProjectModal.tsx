import { useEffect, useRef, type MouseEvent } from "react";
import { ArrowRightIcon, ArrowUpRightIcon, ChevronLeftIcon, CloseIcon, TrophyIcon } from "./Icons";
import ProjectCover from "./ProjectCover";
import TagList from "./TagList";
import type { Project } from "./content";

type ProjectModalProps = {
  /** The project to show, or null while the dialog is closed. */
  project: Project | null;
  /** Zero-based position of the project in the current filter. */
  index: number;
  total: number;
  /** Titles of the neighbouring projects, for the footer buttons. */
  previousTitle: string;
  nextTitle: string;
  onClose: () => void;
  onStep: (delta: 1 | -1) => void;
};

const styles = {
  dialog:
    "m-auto max-h-[90dvh] w-[min(92vw,56rem)] overflow-y-auto rounded-4xl border border-[#e1e4ea] bg-white p-0 text-zinc-900 shadow-2xl shadow-black/30 backdrop:bg-zinc-950/55 backdrop:backdrop-blur-sm open:animate-dialog-in motion-reduce:animate-none",
  close:
    "absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/85 text-zinc-800 shadow-lg shadow-black/15 backdrop-blur transition duration-300 hover:scale-110 hover:bg-white hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  primary:
    "group/cta inline-flex h-12 items-center gap-2 rounded-full bg-brand px-7 text-[15px] font-semibold text-white shadow-lg shadow-brand/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
  secondary:
    "inline-flex h-12 items-center gap-2 rounded-full border-2 border-zinc-200 px-6 text-[15px] font-semibold text-zinc-800 transition-colors duration-300 hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
  step: "group/step flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-zinc-200 p-4 text-left transition duration-300 hover:border-brand/40 hover:bg-[#eef0f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
};

/** Full details for one project, in a native <dialog> (focus trap and Esc come for free). */
export default function ProjectModal({
  project,
  index,
  total,
  previousTitle,
  nextTitle,
  onClose,
  onStep,
}: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = project !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // Stop the page behind the dialog from scrolling
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // A click that lands on the dialog element itself (not its content) hit the backdrop
  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={closeOnBackdrop}
      className={styles.dialog}
    >
      {project && (
        <div key={project.id} className="animate-swap-in motion-reduce:animate-none">
          <div className="relative aspect-video overflow-hidden bg-zinc-100 sm:aspect-2/1">
            <ProjectCover project={project} sizes="(min-width: 896px) 896px, 92vw" />

            <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-zinc-900 px-3 py-1 text-[13px] font-semibold tabular-nums text-white shadow-lg shadow-black/20">
                {index + 1} / {total}
              </span>
              {project.award && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-[13px] font-semibold text-amber-900 shadow-lg shadow-black/10">
                  <TrophyIcon width={14} height={14} />
                  {project.award}
                </span>
              )}
            </div>

            <button type="button" onClick={onClose} aria-label="Close project details" className={styles.close}>
              <CloseIcon />
            </button>
          </div>

          <div className="p-6 sm:p-9">
            <TagList tags={project.tags} label="Project tags" />

            <h2
              id="project-modal-title"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            >
              {project.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">{project.description}</p>

            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.primary}>
                    Live site
                    <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
                    Source code
                  </a>
                )}
              </div>
            )}

            {total > 1 && (
              <nav aria-label="Other projects" className="mt-9 flex gap-3 border-t border-zinc-200 pt-6">
                <button type="button" onClick={() => onStep(-1)} className={styles.step}>
                  <ChevronLeftIcon className="shrink-0 text-zinc-400 transition-transform duration-300 group-hover/step:-translate-x-1 group-hover/step:text-brand" />
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">Previous</span>
                    <span className="block truncate text-[15px] font-semibold">{previousTitle}</span>
                  </span>
                </button>
                <button type="button" onClick={() => onStep(1)} className={`${styles.step} justify-end text-right`}>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">Next</span>
                    <span className="block truncate text-[15px] font-semibold">{nextTitle}</span>
                  </span>
                  <ArrowRightIcon className="shrink-0 text-zinc-400 transition-transform duration-300 group-hover/step:translate-x-1 group-hover/step:text-brand" />
                </button>
              </nav>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}