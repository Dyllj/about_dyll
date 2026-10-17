"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type View = "about" | "work" | "contact";

const navigationItems: { label: string; view: View }[] = [
  { label: "About", view: "about" },
  { label: "Work", view: "work" },
  { label: "Contact", view: "contact" },
];

const getViewFromHash = (): View => {
  if (typeof window === "undefined") return "about";
  const hash = window.location.hash.slice(1);
  return (["about", "work", "contact"] as View[]).includes(hash as View)
    ? (hash as View)
    : "about";
};

export default function PageNav({ onNavigate }: { onNavigate?: (view: View) => void }) {
  const [activeView, setActiveView] = useState<View>("about");
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Partial<Record<View, HTMLButtonElement | null>>>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

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

  useEffect(() => {
    const handleHashChange = () => {
      const view = getViewFromHash();
      setActiveView(view);
      onNavigate?.(view);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [onNavigate]);

  const navigate = useCallback((view: View) => {
    if (typeof window !== "undefined" && window.location.hash !== `#${view}`) {
      window.location.hash = view;
    } else {
      onNavigate?.(view);
    }
  }, [onNavigate]);

  return (
    <nav
      aria-label="Page navigation"
      className="inline-flex rounded-full border border-[#e1e4ea] bg-[#eef0f3] p-1.5"
    >
      <ul ref={listRef} className="relative flex items-center gap-1 sm:gap-2" role="tablist">
        {indicator && (
          <span
            aria-hidden="true"
            className="absolute inset-y-0 rounded-full bg-[#0047ff] shadow-[0_8px_20px_-8px_rgba(0,71,255,0.7)] transition-[left,width] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none"
            style={{ left: indicator.left, width: indicator.width }}
          />
        )}
        {navigationItems.map(({ label, view }) => {
          const isActive = activeView === view;

          return (
            <li key={label} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${view}-view`}
                id={`${view}-tab`}
                ref={(el) => {
                  itemRefs.current[view] = el;
                }}
                onClick={() => navigate(view)}
                className={`relative z-10 inline-flex rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047ff] sm:px-7 sm:py-2.5 sm:text-[15px] ${
                  isActive
                    ? `text-white ${indicator ? "" : "bg-[#0047ff]"}`
                    : "text-[#0b0b0b] hover:bg-white/70"
                }`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
} 