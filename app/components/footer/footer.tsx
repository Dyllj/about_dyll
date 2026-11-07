"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Dyllj", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebook },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 bg-surface-muted pb-7 pt-10">
      <div className="mx-auto w-full max-w-290 px-5 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <nav aria-label="Footer navigation">
            <ul className="flex gap-9 text-[15px] font-medium text-foreground">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group flex size-10 items-center justify-center rounded-full bg-brand text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-brand/30"
                >
                  <Icon className="size-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-theme-border-muted" />
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Wendyll Jay Tautoan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}