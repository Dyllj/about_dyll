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
      "A proud finish to years of steady study: I earned my Bachelor of Science in Information Technology with Cum Laude honors.",
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
      "AlerTech, our mobile platform for real-time community issue reporting, earned Best Paper at the 6th International Research Congress at St. Michael's College, Inc., in Iligan City. I coordinated the capstone project behind it.",
    image: {
      src: bestPaperImg,
      alt: "Receiving the Best Paper certificate at the 6th International Research Congress",
      position: "50% 20%",
    },
  },
  {
    category: "Competition",
    title: "Seminar R.A.I.S.E. — 1st Place",
    description:
      "A first-place finish at Seminar R.A.I.S.E.—a proud moment of teamwork and recognition that I'll carry with me beyond the stage.",
    image: {
      src: raiseImg,
      alt: "Three students at the Seminar R.A.I.S.E. event, one speaking into a microphone",
    },
  },
  {
    category: "Research",
    title: "Researcher of the Year",
    description:
      "Named Researcher of the Year for my research work—an honor that reflects the curiosity and persistence behind every question worth exploring.",
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