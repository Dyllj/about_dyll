import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiSupabase,
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
  PHP: { Icon: SiPhp, color: "#777BB4", category: "Backend" },
  Python: { Icon: SiPython, color: "#3776AB", category: "Language" },
  MySQL: { Icon: SiMysql, color: "#4479A1", category: "Database" },
  Supabase: { Icon: SiSupabase, color: "#3FCF8E", category: "Backend as a service" },
};

/** Used when a technology has no entry above, so a new item never breaks the grid. */
export const FALLBACK_META: Omit<TechMeta, "Icon"> = {
  color: "#0047FF",
  category: "Tool",
};