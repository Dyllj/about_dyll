export const TECH_STACK = [
  { short: "R", name: "React" },
  { short: "JS", name: "JavaScript" },
  { short: "TS", name: "TypeScript" },
  { short: "N", name: "Node.js" },
  { short: "Tw", name: "Tailwind CSS" },
  { short: "php", name: "PHP" },
  { short: "Py", name: "Python" },
  { short: "SQL", name: "MySQL" },
  { short: "Fb", name: "Firebase" },
  { short: "Sb", name: "Supabase" },
  { short: "IoT", name: "IoT" },
  { short: "Git", name: "Git" },
  { short: "GH", name: "GitHub" },
  { short: "Cl", name: "Claude" },
];

export type AchievementIcon = "graduation" | "paper" | "trophy" | "medal";

// Same achievements as the About page
export const ACHIEVEMENTS: {
  icon: AchievementIcon;
  category: string;
  title: string;
  detail?: string;
}[] = [
  { icon: "graduation", category: "Education", title: "Cum Laude Graduate", detail: "2025–2026" },
  { icon: "paper", category: "Research", title: "Best Paper Award" },
  { icon: "trophy", category: "Competition", title: "Seminar R.A.I.S.E.", detail: "1st Place" },
  { icon: "medal", category: "Research", title: "Researcher of the Year" },
];