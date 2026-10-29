"use client";

import type { MouseEvent } from "react";
import Backdrop from "../landing/Backdrop";
import HeroCopy from "../landing/HeroCopy";
import Portrait from "../landing/Portrait";
import AchievementsMarquee from "../landing/AchievementsMarquee";

const styles = {
  page: "relative flex min-h-screen flex-col overflow-hidden bg-white",
  main: "relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20",
  // Text | portrait on large screens. On mobile the portrait comes first.
  hero: "grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14",
};

export default function LandingView() {
  // page.tsx switches views on the `hashchange` event, so set the hash directly
  const goTo = (view: "work" | "contact") => () => {
    window.location.hash = view;
  };

  // Feeds --mx / --my to the cursor spotlight in <Backdrop />
  const trackCursor = (event: MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - top}px`);
  };

  return (
    <div onMouseMove={trackCursor} className={styles.page}>
      <Backdrop />

      <main className={styles.main}>
        <div className={styles.hero}>
          <HeroCopy onGetInTouch={goTo("contact")} onViewWork={goTo("work")} />
          <Portrait />
        </div>
      </main>

      <AchievementsMarquee />
    </div>
  );
}