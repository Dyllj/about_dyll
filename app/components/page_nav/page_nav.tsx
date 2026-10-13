import Link from "next/link";

const navigationItems = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function PageNav() {
  return (
    <nav
      aria-label="Page navigation"
      className="rounded-full border border-zinc-200 bg-white/90 px-15 py-2 shadow-sm backdrop-blur-sm sm:px-2 sm:py-2"
    >
      <ul className="flex items-center gap-0.5 text-xs font-medium text-zinc-700 sm:gap-1 sm:text-sm">
        {navigationItems.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="inline-flex rounded-full px-2.5 py-2 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:px-4"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
