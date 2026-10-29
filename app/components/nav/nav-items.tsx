import type { ReactNode } from "react";

export type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const NAV_ITEMS: NavItem[] = [
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