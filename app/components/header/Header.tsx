"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Logo from "../logo/logo";
import PageNav from "../page_nav/page_nav";
import TogglButton from "../toggle_button/toggl_button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progressRef.current?.style.setProperty("--progress", progress.toFixed(3));
      setScrolled(window.scrollY > 24);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="sticky top-3 z-50 px-3 py-3 sm:top-4 sm:px-8">
      {/* One floating "island" that groups logo, nav and theme toggle */}
      <div className="relative isolate mx-auto flex w-fit max-w-full items-center gap-1.5 p-1.5 sm:gap-3">
        {/* Glass + progress live on their own layers so nothing that contains
            the toggle has a blur/transform (its full-screen effect stays intact) */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 rounded-full border border-[#e1e4ea] bg-white/80 backdrop-blur-xl transition-shadow duration-300 ${
            scrolled ? "shadow-[0_20px_40px_-20px_rgba(11,11,11,0.28)]" : ""
          }`}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-full"
        >
          <span
            ref={progressRef}
            style={{ "--progress": 0 } as CSSProperties}
            className="absolute inset-x-0 bottom-0 h-0.75 origin-left scale-x-(--progress) bg-brand"
          />
        </span>

        {/* Logo badge */}
        <div className="grid size-12 shrink-0 place-items-center sm:size-14">
          <div className="[&_img]:size-9 sm:[&_img]:size-11">
            <Logo />
          </div>
        </div>

        <PageNav />

        <span aria-hidden="true" className="hidden h-8 w-px bg-[#e1e4ea] sm:block" />
        <div className="pr-2 sm:pr-3">
          <TogglButton />
        </div>
      </div>
    </header>
  );
}