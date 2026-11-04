"use client";

import Reveal from "../about/Reveal";
import Backdrop from "../landing/Backdrop";
import FeaturedProject from "../work/FeaturedProject";
import ProjectList from "../work/ProjectList";
import ProjectModal from "../work/ProjectModal";
import WorkHeader from "../work/WorkHeader";
import { useWorkBrowser } from "../work/useWorkBrowser";

const styles = {
  page: "relative isolate overflow-hidden",
  // The same dot grid and soft blobs as the landing page, limited to the top
  backdrop: "absolute inset-x-0 top-0 -z-10 h-176",
  main: "relative mx-auto w-full max-w-[1160px] px-5 pb-8 pt-10 sm:px-8 sm:pt-14 xl:px-0",
  // Featured card on the left, "More projects" on the right
  grid: "mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]",
};

export default function WorkView() {
  const work = useWorkBrowser();
  const { filtered, active, openProject } = work;

  // The clicked list item disappears when it becomes the featured project,
  // so move keyboard focus to the new featured title instead of losing it.
  const select = (id: string) => {
    work.select(id);
    requestAnimationFrame(() =>
      document.getElementById("featured-title")?.focus({ preventScroll: true }),
    );
  };

  const openIndex = openProject ? filtered.findIndex((p) => p.id === openProject.id) : -1;
  const titleAt = (offset: number) =>
    openIndex < 0 ? "" : filtered[(openIndex + offset + filtered.length) % filtered.length].title;

  return (
    <div className={styles.page}>
      <div className={styles.backdrop}>
        <Backdrop />
      </div>

      {/* id is referenced by the Work tab in PageNav (aria-controls) */}
      <main className={styles.main} id="work-view">
        <Reveal>
          <WorkHeader
            count={filtered.length}
            filter={work.filter}
            onFilterChange={work.changeFilter}
          />
        </Reveal>

        {active && (
          <div className={styles.grid}>
            <Reveal delay={100}>
              <FeaturedProject
                project={active}
                index={work.activeIndex}
                total={filtered.length}
                onStep={work.stepActive}
                onOpen={() => work.open(active.id)}
              />
            </Reveal>

            <Reveal delay={200}>
              <ProjectList
                projects={work.visible}
                page={work.currentPage}
                pageCount={work.pageCount}
                resetKey={`${work.filter}-${work.currentPage}`}
                onPage={work.changePage}
                onSelect={select}
                onOpen={work.open}
              />
            </Reveal>
          </div>
        )}
      </main>

      <ProjectModal
        project={openProject}
        index={openIndex}
        total={filtered.length}
        previousTitle={titleAt(-1)}
        nextTitle={titleAt(1)}
        onClose={work.close}
        onStep={work.stepOpen}
      />
    </div>
  );
}