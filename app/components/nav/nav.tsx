import type { ReactNode } from "react";

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href: "/#about",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.25" />
        <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
      </>
    ),
  },
  {
    label: "Work",
    href: "/#work",
    icon: (
      <>
        <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
        <path d="M9 7.5V5h6v2.5M3.5 12h17M10 12v2h4v-2" />
      </>
    ),
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </>
    ),
  },
];

// Used when no className is passed: pinned to the right edge, vertically centered.
const DEFAULT_POSITION = "fixed right-12 top-1/2 z-40 -translate-y-1/2 sm:right-14";

const styles = {
  // Vertical line connecting the icon circles
  rail: "absolute right-7 top-7 bottom-7 w-0.5 bg-blue-200",
  list: "list-none flex flex-col gap-12",
  link: "group relative flex items-center justify-end rounded-full text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600",
  // Text label that slides in from the left on hover / keyboard focus
  label:
    "pointer-events-none absolute right-full mr-4 top-1/2 -translate-y-1/2 -translate-x-8 whitespace-nowrap text-base font-medium opacity-0 " +
    "group-hover:translate-x-0 group-hover:opacity-100 group-hover:transition-[opacity,transform] group-hover:duration-500 group-hover:ease-out " +
    "group-focus-visible:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:transition-[opacity,transform] group-focus-visible:duration-500 group-focus-visible:ease-out " +
    "motion-reduce:transition-none",
  iconCircle:
    "flex size-14 items-center justify-center rounded-full border-2 border-blue-200 bg-white transition-[transform,color,background-color,border-color] duration-300 ease-in-out " +
    "group-hover:scale-110 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white " +
    "group-focus-visible:scale-110 motion-reduce:transition-none",
  icon: "size-6",
};

type NavProps = {
  /** Overrides the default fixed positioning, e.g. to place the nav inside a layout. */
  className?: string;
};

export default function Nav({ className = DEFAULT_POSITION }: NavProps) {
  return (
    <nav aria-label="Main navigation" className={className}>
      <div className="relative">
        <span aria-hidden="true" className={styles.rail} />

        <ol className={styles.list}>
          {NAV_ITEMS.map(({ label, href, icon }) => (
            <li key={label} className="relative">
              <a href={href} className={styles.link}>
                <span className={styles.label}>{label}</span>

                <span className={styles.iconCircle}>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.icon}
                  >
                    {icon}
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}