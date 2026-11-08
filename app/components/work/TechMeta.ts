import type { IconType } from "react-icons";
import {
  LuCamera,
  LuChartBar,
  LuFileSpreadsheet,
  LuFileText,
  LuLayers,
  LuMail,
  LuMessageSquare,
  LuQrCode,
  LuRadio,
  LuRuler,
  LuCpu,
} from "react-icons/lu";
import {
  SiArduino,
  SiAxios,
  SiClaude,
  SiCloudflare,
  SiEspressif,
  SiExpo,
  SiFirebase,
  SiFramer,
  SiGooglegemini,
  SiGreensock,
  SiPostgresql,
  SiReactrouter,
  SiResend,
  SiShadcnui,
  SiStyledcomponents,
  SiUpstash,
  SiVercel,
  SiVite,
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
  // ---- Extra technologies shown on the Work page (project tech stacks) ----
  "React Native": { Icon: SiReact, color: "#61DAFB", category: "Mobile" },
  Expo: { Icon: SiExpo, color: "var(--foreground)", category: "Mobile" },
  "Expo Router": { Icon: SiExpo, color: "var(--foreground)", category: "Mobile" },
  "Expo Camera": { Icon: LuCamera, color: "#6366F1", category: "Mobile" },
  "React Navigation": { Icon: SiReactrouter, color: "#6B52AE", category: "Mobile" },
  Reanimated: { Icon: SiReact, color: "#8232FF", category: "Mobile" },
  NativeWind: { Icon: LuLayers, color: "#06B6D4", category: "Mobile" },
  Zustand: { Icon: LuLayers, color: "#C98A46", category: "State" },
  Vite: { Icon: SiVite, color: "#646CFF", category: "Build tool" },
  "React Router": { Icon: SiReactrouter, color: "#CA4245", category: "Frontend" },
  "shadcn/ui": { Icon: SiShadcnui, color: "var(--foreground)", category: "UI components" },
  Recharts: { Icon: LuChartBar, color: "#22B5BF", category: "Charts" },
  "styled-components": { Icon: SiStyledcomponents, color: "#DB7093", category: "Styling" },
  GSAP: { Icon: SiGreensock, color: "#88CE02", category: "Animation" },
  Motion: { Icon: SiFramer, color: "#0055FF", category: "Animation" },
  EmailJS: { Icon: LuMail, color: "#F5740F", category: "Email" },
  jsPDF: { Icon: LuFileText, color: "#E5342D", category: "PDF reports" },
  SheetJS: { Icon: LuFileSpreadsheet, color: "#1D8348", category: "Excel export" },
  "QR codes": { Icon: LuQrCode, color: "var(--foreground)", category: "Attendance" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1", category: "Database" },
  "Firebase Realtime Database": { Icon: SiFirebase, color: "#FFA000", category: "Database" },
  "Cloud Firestore": { Icon: SiFirebase, color: "#FFA000", category: "Database" },
  "Firebase Auth": { Icon: SiFirebase, color: "#FFA000", category: "Authentication" },
  "Cloud Functions": { Icon: SiFirebase, color: "#FFA000", category: "Serverless" },
  "Semaphore SMS API": { Icon: LuMessageSquare, color: "#16A34A", category: "SMS alerts" },
  "Cloudflare R2": { Icon: SiCloudflare, color: "#F38020", category: "Object storage" },
  "Upstash QStash": { Icon: SiUpstash, color: "#00C98D", category: "Message queue" },
  Resend: { Icon: SiResend, color: "var(--foreground)", category: "Email" },
  Axios: { Icon: SiAxios, color: "#5A29E4", category: "HTTP client" },
  "Gemini AI": { Icon: SiGooglegemini, color: "#8E75B2", category: "AI" },
  Vercel: { Icon: SiVercel, color: "var(--foreground)", category: "Hosting" },
  ESP8266: { Icon: SiEspressif, color: "#E7352C", category: "Microcontroller" },
  ESP32: { Icon: SiEspressif, color: "#E7352C", category: "Microcontroller" },
  LoRa: { Icon: LuRadio, color: "#00B3A4", category: "Long-range radio" },
  "Ultrasonic sensor": { Icon: LuRuler, color: "#00B3A4", category: "Sensor" },
  "Arduino C++": { Icon: SiArduino, color: "#00878F", category: "Firmware" },
};

/** Used when a technology has no entry above, so a new item never breaks the grid. */
export const FALLBACK_META: Omit<TechMeta, "Icon"> = {
  color: "#0047FF",
  category: "Tool",
};