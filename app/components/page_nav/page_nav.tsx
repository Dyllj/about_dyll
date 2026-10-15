"use client";

import { useEffect, useState, useCallback } from "react";

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
  const [activeView, setActiveView] = useState<View>(getViewFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const view = getViewFromHash();
      setActiveView(view);
      onNavigate?.(view);
    };

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
      className="inline-flex rounded-full border border-[#e1e4ea] bg-[#eef0f3] p-1.5 sm:p-2.5"
    >
      <ul className="flex items-center gap-1" role="tablist">
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
                onClick={() => navigate(view)}
                className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047ff] sm:px-7 sm:py-2.5 sm:text-[15px] ${
                  isActive
                    ? "bg-[#0047ff] text-white"
                    : "text-[#0b0b0b] hover:bg-white"
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