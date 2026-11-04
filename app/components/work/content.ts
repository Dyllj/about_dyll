import type { StaticImageData } from "next/image";

export const FILTERS = ["All", "Web", "Mobile", "IoT"] as const;

export type Filter = (typeof FILTERS)[number];
export type Category = Exclude<Filter, "All">;

export type Project = {
  id: string;
  title: string;
  /** Used by the filter tabs. The first one also picks the illustrated cover. */
  categories: Category[];
  /** Small pills shown on the cards. */
  tags: string[];
  description: string;
  featured?: boolean;
  /** Shown as a gold chip, e.g. "Best Paper Award". */
  award?: string;
  liveUrl?: string;
  repoUrl?: string;
  /**
   * Optional real screenshot. Without it, an animated illustrated cover is shown.
   * 1. Put the file in public/about_dyll_assets/projects/
   * 2. import shot from "@/public/about_dyll_assets/projects/your-file.png";
   * 3. add `image: shot` to the project below.
   */
  image?: StaticImageData;
};

// NOTE: the descriptions are short drafts written from each project's title and
// tags. Edit them, and add liveUrl / repoUrl / image when you have them.
export const PROJECTS: Project[] = [
  {
    id: "flood-monitoring",
    title: "IoT-based Flood Monitoring System",
    categories: ["IoT", "Web"],
    tags: ["IoT", "Web"],
    description:
      "A web dashboard fed by IoT sensors that tracks flood conditions in real time, so rising water can be spotted early.",
    featured: true,
  },
  {
    id: "njsb-intern-dtr",
    title: "NJSB Intern DTR",
    categories: ["Mobile"],
    tags: ["React Native", "Supabase"],
    description:
      "A mobile app for recording interns' daily time records, built with React Native and Supabase.",
  },
  {
    id: "mobile-app-portfolio",
    title: "Mobile App Portfolio",
    categories: ["Mobile"],
    tags: ["Mobile", "Expo"],
    description: "A mobile portfolio app built with Expo.",
  },
  {
    id: "water-level-monitoring",
    title: "IoT-based Water Level Monitoring System",
    categories: ["IoT", "Web"],
    tags: ["IoT", "Web"],
    description:
      "IoT sensors measure water levels and send the readings to a web dashboard for monitoring.",
  },
  {
    id: "alertech",
    title: "AlerTech",
    categories: ["Mobile"],
    tags: ["Mobile", "Capstone"],
    description:
      "A mobile incident reporting app built as a capstone project, where I served as Project Coordinator.",
    award: "Best Paper Award",
  },
];