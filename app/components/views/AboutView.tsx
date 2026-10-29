"use client";

import AboutCta from "../about/AboutCta";
import AboutHero from "../about/AboutHero";
import AchievementsGrid from "../about/AchievementsGrid";
import StatsBand from "../about/StatsBand";
import TechGrid from "../about/TechGrid";
import Backdrop from "../landing/Backdrop";

const styles = {
  page: "relative isolate overflow-hidden",
  // The same dot grid and soft blobs as the landing page, limited to the top
  backdrop: "absolute inset-x-0 top-0 -z-10 h-176",
  main: "relative mx-auto w-full max-w-[1160px] px-5 pb-8 pt-10 sm:px-8 sm:pt-14 xl:px-0",
};

export default function AboutView() {
  // page.tsx switches views on the `hashchange` event, so set the hash directly
  const goTo = (view: "work" | "contact") => () => {
    window.location.hash = view;
  };

  return (
    <div className={styles.page}>
      <div className={styles.backdrop}>
        <Backdrop />
      </div>

      {/* id is referenced by the About tab in PageNav (aria-controls) */}
      <main className={styles.main} id="about-view">
        <AboutHero onGetInTouch={goTo("contact")} onViewWork={goTo("work")} />
        <StatsBand className="mt-20" />
        <TechGrid className="mt-24" />
        <AchievementsGrid className="mt-24" />
        <AboutCta className="mt-24" onGetInTouch={goTo("contact")} />
      </main>
    </div>
  );
}