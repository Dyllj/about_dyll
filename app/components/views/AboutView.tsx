"use client";

import AboutCta from "../about/AboutCta";
import AboutHero from "../about/AboutHero";
import AchievementsGrid from "../about/AchievementsGrid";
import StatsBand from "../about/StatsBand";
import TechGrid from "../about/TechGrid";
import Backdrop from "../landing/Backdrop";

const styles = {
  page: "relative isolate overflow-hidden",
  // Full-screen backdrop: fixed to the viewport so it never ends partway down a long page
  backdrop: "fixed inset-0 -z-10",
  main: "relative mx-auto w-full max-w-[1160px] px-5 pb-8 pt-10 sm:px-8 sm:pt-14 xl:px-0",
};

export default function AboutView() {
  return (
    <div className={styles.page}>
      <div className={styles.backdrop}>
        <Backdrop />
      </div>

      {/* id is referenced by the About tab in PageNav (aria-controls) */}
      <main className={styles.main} id="about-view">
        <AboutHero />
        <StatsBand className="mt-20" />
        <TechGrid className="mt-24" />
        <AchievementsGrid className="mt-24" />
        <AboutCta className="mt-24" />
      </main>
    </div>
  );
}