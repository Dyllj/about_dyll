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
      className="h-full rounded-full border border-zinc-200 bg-white/90 px-15 py-3 shadow-sm backdrop-blur-sm"
    >
      <ul className="flex items-center gap-20 text-sm font-medium text-zinc-700">
        {navigationItems.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
