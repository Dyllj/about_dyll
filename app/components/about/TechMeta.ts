import type { IconType } from "react-icons";
import { LuCpu } from "react-icons/lu";
import {
  SiClaude,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type TechMeta = {
  Icon: IconType;
  /** Official brand colour, used for the glow, ring and spotlight. */
  color: string;
  /** Small label that slides in on hover. */
  category: string;
};

/** Visual metadata for each entry in TECH_STACK, keyed by its `name`. */
export const TECH_META: Record<string, TechMeta> = {
  React: { Icon: SiReact, color: "#61DAFB", category: "Frontend" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E", category: "Language" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6", category: "Language" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E", category: "Runtime" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4", category: "Styling" },
  PHP: { Icon: SiPhp, color: "#777BB4", category: "Backend" },
  Python: { Icon: SiPython, color: "#3776AB", category: "Language" },
  MySQL: { Icon: SiMysql, color: "#4479A1", category: "Database" },
  Firebase: { Icon: SiFirebase, color: "#FFA000", category: "Database" },
  Supabase: { Icon: SiSupabase, color: "#3FCF8E", category: "Backend as a service" },
  // No brand logo exists for IoT, so it uses a generic microchip icon.
  IoT: { Icon: LuCpu, color: "#00B3A4", category: "Hardware" },
  Git: { Icon: SiGit, color: "#F05032", category: "Version control" },
  // Near-black in the light theme would vanish in dark mode, so follow the theme text colour.
  GitHub: { Icon: SiGithub, color: "var(--foreground)", category: "Code hosting" },
  Claude: { Icon: SiClaude, color: "#D97757", category: "AI assistant" },
};

/** Used when a technology has no entry above, so a new item never breaks the grid. */
export const FALLBACK_META: Omit<TechMeta, "Icon"> = {
  color: "#0047FF",
  category: "Tool",
};