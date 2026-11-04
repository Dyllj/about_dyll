import type { ReactNode } from "react";
import CopyButton from "./CopyButton";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { CHANNELS, type ChannelIcon } from "./content";

const ICONS: Record<ChannelIcon, ReactNode> = {
  mail: <MailIcon />,
  github: <GithubIcon />,
  linkedin: <LinkedinIcon />,
};

const styles = {
  card: "group flex items-center gap-3 rounded-3xl border border-[#e1e4ea] bg-[#eef0f3] p-3 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-xl hover:shadow-brand/10",
  link: "flex min-w-0 flex-1 items-center gap-4 rounded-2xl p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  tile: "grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-brand shadow-sm transition-colors duration-300 group-hover:bg-brand group-hover:text-white",
  title: "block text-xs font-medium uppercase tracking-[0.14em] text-zinc-500",
  value: "mt-0.5 block truncate text-base font-semibold text-zinc-900 sm:text-lg",
};

/** Ways to reach me. Cards without a link are left out (see content.ts). */
export default function ChannelCards() {
  return (
    <ul className="grid list-none gap-3 p-0">
      {CHANNELS.map(({ id, title, value, href, icon, copyable }) => {
        const external = href.startsWith("http");

        return (
          <li key={id} className={styles.card}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={styles.link}
            >
              <span className={styles.tile}>{ICONS[icon]}</span>
              <span className="min-w-0">
                <span className={styles.title}>{title}</span>
                <span className={styles.value}>{value}</span>
              </span>
              {!copyable && (
                <ArrowUpRightIcon className="ml-auto mr-2 shrink-0 text-zinc-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              )}
            </a>

            {copyable && <CopyButton value={value} label={`Copy ${title.toLowerCase()} address`} />}
          </li>
        );
      })}
    </ul>
  );
}