"use client";

import { useEffect, useState } from "react";
import Logo from "../logo/logo";
import PageNav from "../page_nav/page_nav";
import TogglButton from "../toggle_button/toggle_button";

// Dark shadow for depth + accent glow (--brand-glow is blue in light mode, yellow in dark mode)
const SCROLLED_SHADOW =
  "shadow-[0_14px_34px_-12px_rgba(11,11,11,0.35),0_8px_22px_-8px_color-mix(in_srgb,var(--brand-glow)_32%,transparent)]";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
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
        {/* The glass lives on its own layer so nothing that contains the toggle has a
            blur/transform (its full-screen effect stays intact). Once the page is
            scrolled it gets a two-part shadow: a dark drop shadow for depth, plus a
            soft glow in the theme's accent colour so it stays visible in dark mode too. */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 rounded-full border border-theme-border bg-white/80 backdrop-blur-xl transition-shadow duration-300 ${
            scrolled ? SCROLLED_SHADOW : ""
          }`}
        />

        {/* Logo badge */}
        <div className="grid size-12 shrink-0 place-items-center sm:size-14">
          <div className="[&_img]:size-9 sm:[&_img]:size-11">
            <Logo />
          </div>
        </div>

        <PageNav />

        <span aria-hidden="true" className="hidden h-8 w-px bg-theme-border sm:block" />
        <div className="pr-2 sm:pr-3">
          <TogglButton />
        </div>
      </div>
    </header>
  );
}