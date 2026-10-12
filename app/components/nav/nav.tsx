const navigationItems = [
  {
    label: "About",
    href: "#about",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.25" />
        <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
      </>
    ),
  },
  {
    label: "Work",
    href: "#work",
    icon: (
      <>
        <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
        <path d="M9 7.5V5h6v2.5M3.5 12h17M10 12v2h4v-2" />
      </>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </>
    ),
  },
];

export default function Nav() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed right-10 top-1/2 z-40 -translate-y-1/2"
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute right-7 top-7 bottom-7 w-0.5 bg-blue-200"
        />
        <ol className="list-none flex flex-col gap-7">
          {navigationItems.map(({ label, href, icon }) => (
            <li key={label} className="relative">
              <a
                href={href}
                className="group relative flex items-center justify-end rounded-full text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                <span className="pointer-events-none absolute right-full mr-4 top-1/2 -translate-y-1/2 -translate-x-8 whitespace-nowrap text-base font-medium opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:transition-[opacity,transform] group-hover:duration-500 group-hover:ease-out group-focus-visible:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:transition-[opacity,transform] group-focus-visible:duration-500 group-focus-visible:ease-out motion-reduce:transition-none">
                  {label}
                </span>
                <span className="flex size-14 items-center justify-center rounded-full border-2 border-blue-200 bg-white transition-[transform,color,background-color,border-color] duration-300 ease-in-out group-hover:scale-110 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white group-focus-visible:scale-110 motion-reduce:transition-none">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-6"
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