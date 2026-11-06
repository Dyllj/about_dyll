import type { StaticImageData } from "next/image";

// Static imports let Next.js read each file's size at build time (no layout shift),
// generate a tiny blur placeholder, and serve small, fingerprinted, cacheable copies.
import capstoneIot from "@/public/about_dyll_assets/ProjectImages/CapstoneIOT.png";
import njsbDtr from "@/public/about_dyll_assets/ProjectImages/NJSBdtr.png";
import projectApp from "@/public/about_dyll_assets/ProjectImages/projectApp.png";
import waterLevelMonitor from "@/public/about_dyll_assets/ProjectImages/WaterLevelMonitor.jpg";
import alertechMobile from "@/public/about_dyll_assets/ProjectImages/alertechMobile.png";
import alertechWeb from "@/public/about_dyll_assets/ProjectImages/alertechWeb.png";
import portfolio1 from "@/public/about_dyll_assets/ProjectImages/Portfolio1.png";
import portfolio2 from "@/public/about_dyll_assets/ProjectImages/Portfolio2.png";
import portfolio3 from "@/public/about_dyll_assets/ProjectImages/Portfolio3.png";

export const FILTERS = ["All", "Web", "Mobile", "IoT"] as const;

export type Filter = (typeof FILTERS)[number];
export type Category = Exclude<Filter, "All">;

/** The device the screenshot is shown in, on top of the animated cover artwork. */
export type ImageFrame = "browser" | "phone" | "photo";

export type ProjectImage = {
  src: StaticImageData;
  /** Describes what is in the picture, for screen readers. */
  alt: string;
  /**
   * "browser" = a window with a title bar, "phone" = a phone bezel, "photo" = a tilted
   * photo print. Left out, it is picked from the shape of the picture: landscape ->
   * browser, tall and narrow -> phone, other portrait pictures -> photo.
   */
  frame?: ImageFrame;
  /** CSS object-position for the crop inside phone and photo frames. Defaults to the top. */
  position?: string;
};

export type Project = {
  id: string;
  title: string;
  /** Used by the filter tabs. The first one also picks the animated cover artwork. */
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
   * Screenshots, shown in a device frame on top of the animated cover artwork. The
   * first one is used on every card; with two or more, the details dialog also shows
   * a thumbnail strip.
   *
   * To add one: put the file in public/about_dyll_assets/ProjectImages/, import it at
   * the top of this file, and add { src: yourImport, alt: "..." } to the project.
   */
  images?: ProjectImage[];
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
    images: [
      {
        src: capstoneIot,
        alt: "Flood Monitoring System dashboard showing three water level sensors and their current readings",
      },
    ],
  },
  {
    id: "njsb-intern-dtr",
    title: "NJSB Intern DTR",
    categories: ["Mobile"],
    tags: ["React Native", "Supabase"],
    description:
      "A mobile app for recording interns' daily time records, built with React Native and Supabase.",
    images: [
      {
        src: njsbDtr,
        alt: "NJSB Daily Time Report dashboard with attendance statistics",
      },
    ],
  },
  {
    id: "mobile-app-portfolio",
    title: "Mobile App Portfolio",
    categories: ["Mobile"],
    tags: ["Mobile", "Expo"],
    description: "A mobile portfolio app built with Expo.",
    images: [
      {
        src: projectApp,
        alt: "Welcome screen of the mobile portfolio app, showing a profile photo and a short introduction",
      },
    ],
  },
  {
    id: "water-level-monitoring",
    title: "IoT-based Water Level Monitoring System",
    categories: ["IoT", "Web"],
    tags: ["IoT", "Web"],
    description:
      "IoT sensors measure water levels and send the readings to a web dashboard for monitoring.",
    images: [
      {
        src: waterLevelMonitor,
        alt: "Team standing behind the water level monitoring prototype",
        position: "center 30%",
      },
    ],
  },
  {
    id: "alertech",
    title: "AlerTech",
    categories: ["Mobile"],
    tags: ["Mobile", "Capstone"],
    description:
      "A mobile incident reporting app built as a capstone project, where I served as Project Coordinator.",
    award: "Best Paper Award",
    images: [
      { src: alertechMobile, alt: "AlerTech mobile app sign-in screen" },
      {
        src: alertechWeb,
        alt: "AlerTech admin dashboard with links to reports, barangay captains and users",
      },
    ],
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    categories: ["Web"],
    tags: ["Web", "React"],
    description: "My personal portfolio website, built with React.",
    images: [
      {
        src: portfolio1,
        alt: "Portfolio website home page introducing Wendyll Jay Tautoan",
      },
      { src: portfolio2, alt: "Portfolio website About Me page with key facts" },
      { src: portfolio3, alt: "Portfolio website Skills and Technologies page" },
    ],
  },
];