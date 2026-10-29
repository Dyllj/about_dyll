import type { ReactNode } from "react";
import { ACHIEVEMENTS, type AchievementIcon } from "./content";
import Marquee from "./Marquee";

const styles = {
  item: "flex items-center gap-12",
  content: "flex items-center gap-3",
  chip: "grid size-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand",
  title: "block text-sm font-semibold text-zinc-900",
  meta: "block text-xs uppercase tracking-wider text-zinc-500",
  divider: "size-1.5 rotate-45 rounded-[2px] bg-brand/30",
};

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const ICONS: Record<AchievementIcon, ReactNode> = {
  graduation: (
    <Glyph>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </Glyph>
  ),
  paper: (
    <Glyph>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h8M8 9h2" />
    </Glyph>
  ),
  trophy: (
    <Glyph>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </Glyph>
  ),
  medal: (
    <Glyph>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
    </Glyph>
  ),
};

/** Scrolling strip of achievements, each followed by a small diamond divider. */
export default function AchievementsMarquee() {
  const items = ACHIEVEMENTS.map(({ icon, category, title, detail }) => (
    <div key={title} className={styles.item}>
      <div className={styles.content}>
        <span className={styles.chip}>{ICONS[icon]}</span>
        <span className="leading-tight">
          <span className={styles.title}>{title}</span>
          <span className={styles.meta}>{[category, detail].filter(Boolean).join(" · ")}</span>
        </span>
      </div>
      <span aria-hidden="true" className={styles.divider} />
    </div>
  ));

  const label = ACHIEVEMENTS.map((a) => (a.detail ? `${a.title} (${a.detail})` : a.title)).join(", ");

  return <Marquee label={`Achievements: ${label}`} items={items} />;
}