"use client";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "GitHub", short: "GH", href: "https://github.com/Dyllj" },
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "Instagram", short: "IG", href: "#" },
  { label: "Facebook", short: "f", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#eef0f3] pb-7 pt-10">
      <div className="mx-auto w-full max-w-290 px-5 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <nav aria-label="Footer navigation">
            <ul className="flex gap-9 text-[15px] font-medium text-[#0b0b0b]">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-3">
            {socials.map(({ label, short, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full bg-[#0047ff] text-xs font-bold text-white"
                >
                  {short}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-[#cfd4dc]" />
        <p className="text-center text-sm text-[#5b6270]">
          © {new Date().getFullYear()} Wendyll Jay Tautoan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}