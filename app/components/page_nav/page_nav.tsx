"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function PageNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Page navigation"
      className="rounded-full border border-zinc-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm sm:px-4"
    >
      <ul className="flex items-center gap-2 text-xs font-medium text-zinc-700 sm:gap-5 sm:text-sm lg:gap-8">
        {navigationItems.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
          <li key={label}>
            <Link
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex rounded-full px-3 py-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:px-5 ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : "hover:bg-blue-50 hover:text-blue-700"
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
