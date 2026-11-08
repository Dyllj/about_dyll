"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type View = "about" | "work" | "contact";

const navigationItems: { label: string; view: View }[] = [
  { label: "About", view: "about" },
  { label: "Work", view: "work" },
  { label: "Contact", view: "contact" },
];

const routeByView: Record<View, string> = {
  about: "/about",
  work: "/work",
  contact: "/contact",
};

export default function PageNav() {
  const pathname = usePathname();
  const routeView = navigationItems.find(({ view }) => routeByView[view] === pathname)?.view;
  const [legacyHashView, setLegacyHashView] = useState<View>("about");
  const activeView = routeView ?? legacyHashView;
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Partial<Record<View, HTMLAnchorElement | null>>>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const syncLegacyHash = () => {
      const hash = window.location.hash.slice(1);
      const matchedView = navigationItems.find(({ view }) => view === hash)?.view;
      setLegacyHashView(matchedView ?? "about");
    };

    syncLegacyHash();
    window.addEventListener("hashchange", syncLegacyHash);
    return () => window.removeEventListener("hashchange", syncLegacyHash);
  }, []);

  // slide the blue pill under whichever tab is active; re-measure whenever the
  // nav changes size (font loading, breakpoints) so it never drifts
  useLayoutEffect(() => {
    const measure = () => {
      const el = itemRefs.current[activeView];
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, [activeView]);

  return (
    <nav
      aria-label="Page navigation"
      className="inline-flex rounded-full border border-theme-border bg-surface-muted p-1.5 max-[380px]:p-1"
    >
      <ul ref={listRef} className="relative flex items-center gap-1 max-[380px]:gap-0 sm:gap-3">
        {indicator && (
          <span
            aria-hidden="true"
            className="absolute inset-y-0 rounded-full bg-brand shadow-lg shadow-brand/40 transition-[left,width] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none"
            style={{ left: indicator.left, width: indicator.width }}
          />
        )}
        {navigationItems.map(({ label, view }) => {
          const isActive = activeView === view;

          return (
            <li key={label}>
              <Link
                href={routeByView[view]}
                aria-current={isActive ? "page" : undefined}
                ref={(el) => {
                  itemRefs.current[view] = el;
                }}
                className={`relative z-10 inline-flex rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand max-[380px]:px-2 max-[380px]:text-xs sm:px-10 sm:py-2.5 sm:text-[15px] ${
                  isActive
                    ? `text-white ${indicator ? "" : "bg-brand"}`
                    : "text-foreground hover:bg-white/70"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}