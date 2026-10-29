import type { StaticImageData } from "next/image";

// Static imports let Next.js read each file's size at build time (no layout
// shift), generate a tiny blur placeholder, and serve fingerprinted URLs that
// browsers can cache for a long time.
import profilePhoto from "@/public/about_dyll_assets/e.jpg";
import cumLaudeImg from "@/public/about_dyll_assets/Cum Laude.png";
import bestPaperImg from "@/public/about_dyll_assets/Best Paper.png";
import raiseImg from "@/public/about_dyll_assets/RAISE seminar.jpg";
import researcherImg from "@/public/about_dyll_assets/Researcher of the Year.jpg";

export const PROFILE = {
  name: "Wendyll Jay Tautoan",
  role: "Full Stack Developer",
  location: "Cebu City",
  status: "Available",
  photo: profilePhoto,
  photoAlt: "Wendyll Jay Tautoan",
};

export type AchievementImage = {
  src: StaticImageData;
  /** Describes what is in the picture (not just the award name). */
  alt: string;
  /** CSS object-position, to keep the important part inside the crop. */
  position?: string;
};

export type Achievement = {
  category: string;
  title: string;
  description: string;
  image: AchievementImage;
};

export const ACHIEVEMENT_CARDS: Achievement[] = [
  {
    category: "Education",
    title: "Cum Laude Graduate (2025–2026)",
    description:
      "Graduated cum laude with a Bachelor of Science in Information Technology, earning Latin honors for consistent academic excellence.",
    image: {
      src: cumLaudeImg,
      alt: "Latin Honors banner for Wendyll Jay H. Tautoan, Bachelor of Science in Information Technology, Cum Laude",
      position: "10% 50%",
    },
  },
  {
    category: "Research",
    title: "Best Paper Award",
    description:
      "Won Best Paper at the 6th International Research Congress, hosted by St. Michael's College, Inc. in Iligan City, for AlerTech, a mobile incident reporting app built as a capstone project. I served as Project Coordinator.",
    image: {
      src: bestPaperImg,
      alt: "Receiving the Best Paper certificate at the 6th International Research Congress",
      position: "50% 20%",
    },
  },
  {
    category: "Competition",
    title: "Seminar R.A.I.S.E. — 1st Place",
    description: "Took first place in the Seminar R.A.I.S.E. competition.",
    image: {
      src: raiseImg,
      alt: "Three students at the Seminar R.A.I.S.E. event, one speaking into a microphone",
    },
  },
  {
    category: "Research",
    title: "Researcher of the Year",
    description:
      "Named Researcher of the Year in recognition of outstanding research work.",
    image: {
      src: researcherImg,
      alt: "Congratulations graphic for Wendyll Tautoan, Best Paper at the 6th International Research Congress",
      position: "50% 20%",
    },
  },
];

// The achievements number is derived so it never goes out of date.
// Replace the two 0s with your real numbers.
export const STATS = [
  { value: 0, label: "Projects" },
  { value: 0, label: "Years of experience" },
  { value: ACHIEVEMENT_CARDS.length, label: "Achievements" },
];