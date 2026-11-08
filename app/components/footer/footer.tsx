"use client";

import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuArrowUp, LuArrowUpRight, LuMail, LuMapPin } from "react-icons/lu";
import { CONTACT } from "../contact/content";
import Logo from "../logo/logo";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Dyllj", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com", icon: FaFacebook },
];

const styles = {
  // Solid colour (no transparency) and its own layer above the page backdrop
  footer: "relative isolate z-10 mt-24 overflow-hidden border-t border-theme-border bg-surface-muted",
  container: "relative mx-auto w-full max-w-290 px-5 pb-8 pt-14 sm:px-8 xl:px-0",
  heading: "text-xs font-semibold uppercase tracking-[0.16em] text-foreground",
  navLink:
    "group inline-flex items-center gap-0 text-[15px] text-muted-foreground transition-all duration-300 hover:gap-2 hover:text-foreground",
  social:
    "group flex size-10 items-center justify-center rounded-full border border-theme-border bg-surface text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/30",
};

export default function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      {/* Accent line along the top edge, plus a soft glow painted over the solid colour */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-28 size-80 rounded-full bg-brand/10 blur-3xl"
      />

      <div className={styles.container}>
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="[&_img]:size-12">
                <Logo />
              </div>
              <div>
                <p className="text-lg font-semibold leading-tight text-foreground">
                  Wendyll Jay Tautoan
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building intuitive, practical and engaging digital experiences across web, IoT and
              AI-assisted development.
            </p>

            <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-theme-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              {CONTACT.status} for new projects
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <h2 className={styles.heading}>Navigate</h2>
            <ul className="mt-5 space-y-3.5">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={styles.navLink}>
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-brand transition-all duration-300 group-hover:w-4"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get in touch */}
          <div>
            <h2 className={styles.heading}>Get in touch</h2>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-theme-border bg-surface text-brand">
                    <LuMail className="size-4" />
                  </span>
                  <span className="break-all">{CONTACT.email}</span>
                  <LuArrowUpRight className="size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-muted-foreground">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-theme-border bg-surface text-brand">
                  <LuMapPin className="size-4" />
                </span>
                {CONTACT.location}
              </li>
            </ul>

            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.social}
                  >
                    <Icon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-theme-border-muted" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Wendyll Jay Tautoan. All rights reserved.</p>
          <p className="text-center">Designed &amp; built by Dyll · Next.js, React &amp; Tailwind CSS</p>
          <button
            type="button"
            onClick={backToTop}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-theme-border bg-surface px-4 py-2 text-xs font-medium text-foreground transition-all duration-300 hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Back to top
            <LuArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}