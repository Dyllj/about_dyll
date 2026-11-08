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

/** One row of the tech stack panel, e.g. "Frontend" with its technologies. */
export type StackGroup = {
  label: string;
  /**
   * Technology names. A name that also appears in TECH_META (components/about/techMeta.ts)
   * gets its logo and brand colour; any other name is shown as a plain chip.
   */
  items: string[];
};

export type Project = {
  id: string;
  title: string;
  /** Short label above the title, e.g. "Capstone Project". */
  type?: string;
  /** Used by the filter tabs. The first one also picks the animated cover artwork. */
  categories: Category[];
  /** Your part in the project, shown in the details dialog. */
  role?: string;
  /** One or two sentences, shown on the cards. */
  summary: string;
  /** The full story, shown in the details dialog. */
  description: string;
  /** Concrete things that were built or achieved, shown as a checklist in the dialog. */
  highlights?: string[];
  /** Every technology used, grouped. This is what the "Tech stack" panel and chips show. */
  stack: StackGroup[];
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

/** Every technology of a project in one flat list, in stack order. */
export const stackItems = (project: Project): string[] =>
  project.stack.flatMap((group) => group.items);

/**
 * A short, balanced sample of the stack for the cards: it takes the first technology of
 * every group, then the second of every group, and so on. A project with a web app and
 * a mobile app therefore shows both, instead of ten web technologies in a row.
 */
export const stackSample = (project: Project, max: number): string[] => {
  const sample: string[] = [];
  const longest = Math.max(...project.stack.map((group) => group.items.length));

  for (let round = 0; round < longest && sample.length < max; round++) {
    for (const group of project.stack) {
      if (group.items[round] && sample.length < max) sample.push(group.items[round]);
    }
  }
  return sample;
};

// Descriptions and tech stacks below were written from the projects' public GitHub
// repositories (dependencies and source code) and the details you shared. Items marked
// TODO could not be confirmed from code that is public, so fill them in yourself.
export const PROJECTS: Project[] = [
  {
    id: "flood-monitoring",
    title: "IoT-based Flood Monitoring System",
    type: "Capstone Project",
    categories: ["IoT", "Web"],
    featured: true,
    summary:
      "An end-to-end flood early-warning platform: LoRa water-level sensors, a Firebase cloud backend, automatic SMS alerts and a real-time React dashboard.",
    description:
      "A complete flood early-warning system for local disaster-response teams. Ultrasonic sensor nodes measure the water level and relay it over long-range LoRa radio to a Wi-Fi gateway, which streams every reading to Firebase in real time. Cloud Functions compare each reading with that device's alert level and automatically text registered contacts through the Semaphore SMS API, with daily limits and a cooldown to prevent alert spam. Responders watch every device from a React dashboard with live status, charts, historical logs and downloadable reports.",
    highlights: [
      "Long-range sensor network: ESP8266 nodes with ultrasonic sensors send readings over 433 MHz LoRa to an ESP32 gateway that writes to Firebase Realtime Database.",
      "Automatic SMS alerts when a device reaches its alert level, capped at 3 per day with a 5-hour cooldown, plus manual alerts and editable message templates.",
      "Device health monitoring: a scheduled cloud function checks every 2 minutes that each sensor is still reporting.",
      "Admin dashboard with live status, charts, historical data, contact management and PDF/Excel report generation, protected by Firebase Authentication.",
    ],
    stack: [
      { label: "Hardware & IoT", items: ["ESP8266", "ESP32", "LoRa", "Ultrasonic sensor", "Arduino C++"] },
      { label: "Frontend", items: ["React", "Vite", "Recharts", "styled-components", "jsPDF", "SheetJS"] },
      { label: "Backend & Cloud", items: ["Cloud Functions", "Node.js", "Semaphore SMS API"] },
      { label: "Database & Auth", items: ["Firebase Realtime Database", "Cloud Firestore", "Firebase Auth"] },
    ],
    images: [
      {
        src: capstoneIot,
        alt: "Flood Monitoring System dashboard showing three water level sensors and their current readings",
      },
    ],
  },
  {
    id: "alertech",
    title: "AlerTech",
    type: "Capstone Project",
    categories: ["Mobile", "Web"],
    role: "Project Coordinator",
    award: "Best Paper Award",
    summary:
      "An AI-assisted incident reporting platform: a mobile app for submitting reports with photo evidence, Gemini verification and an admin web dashboard.",
    description:
      "A mobile incident-reporting platform built as a BSIT capstone, where I served as Project Coordinator. Users submit reports with photo evidence; each image is stored in Cloudflare R2 and queued through Upstash QStash for automatic verification by Google Gemini, so the AI checks run in the background. An admin web dashboard lets administrators manage reports, barangay captains and users, and email notifications are sent through Resend. The research behind it won the Best Paper Award at the 6th International Research Congress (St. Michael's College, Inc., Iligan City).",
    highlights: [
      "Asynchronous image pipeline: base64 upload, Cloudflare R2 storage through the S3-compatible SDK, then a QStash-queued Gemini AI verification.",
      "Admin web dashboard for reviewing reports and managing barangay captains and users.",
      "Transactional email notifications through the Resend API.",
      "Led the capstone team as Project Coordinator; the paper won Best Paper Award at the 6th International Research Congress.",
    ],
    // TODO: add the mobile framework and the backend runtime/database (not public, so not listed).
    stack: [
      { label: "AI", items: ["Gemini AI"] },
      { label: "Backend & Cloud", items: ["Cloudflare R2", "Upstash QStash", "Resend", "Axios"] },
    ],
    images: [
      { src: alertechMobile, alt: "AlerTech mobile app sign-in screen" },
      {
        src: alertechWeb,
        alt: "AlerTech admin dashboard with links to reports, barangay captains and users",
      },
    ],
  },
  {
    id: "njsb-intern-dtr",
    title: "NJSB Intern DTR",
    type: "Full-Stack Project",
    categories: ["Web", "Mobile"],
    summary:
      "A full-stack attendance system for interns: QR-code check-ins on a React Native app, an admin web dashboard with analytics, and generated daily time records.",
    description:
      "A full-stack Daily Time Record (DTR) system that digitises intern attendance. Interns log attendance by scanning QR codes in a React Native mobile app, and can review their hours and export their DTR. Administrators manage interns, schedules and holidays, and track attendance through a React and TypeScript web dashboard with daily, weekly and summary analytics. Both apps share one Supabase (PostgreSQL) backend, with admin onboarding by invitation.",
    highlights: [
      "QR-code attendance: QR codes are generated on the web dashboard and scanned with the mobile app's camera.",
      "Web dashboard with daily and weekly attendance, an overview, summary cards and a recent-activity feed.",
      "Intern, admin, schedule and holiday management, plus printable DTR reports from both web and mobile.",
      "One shared Supabase backend modelling attendance, interns, QR codes, reports and holidays in PostgreSQL.",
    ],
    stack: [
      {
        label: "Web",
        items: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "React Router", "Motion"],
      },
      { label: "Mobile", items: ["React Native", "Expo", "Expo Router", "NativeWind", "Zustand", "Expo Camera"] },
      { label: "Backend & Data", items: ["Supabase", "PostgreSQL"] },
      { label: "Deployment", items: ["Vercel"] },
    ],
    images: [
      {
        src: njsbDtr,
        alt: "NJSB Daily Time Report dashboard with attendance statistics",
      },
    ],
  },
  {
    id: "water-level-monitoring",
    title: "IoT-based Water Level Monitoring System",
    type: "Team Project",
    categories: ["IoT", "Web"],
    summary:
      "A team-built IoT prototype that measures water levels with sensors and streams the readings to a web dashboard for remote monitoring.",
    description:
      "A hands-on IoT prototype built with a team. Sensors measure the water level and send the readings to a web dashboard, so conditions can be monitored remotely. It covers the whole chain from hardware sensing and data transmission to visualisation on the web.",
    // TODO: list the microcontroller, sensors, database and dashboard stack you used, and add 3-4 highlights.
    stack: [
      { label: "Hardware & IoT", items: ["IoT"] },
      { label: "Frontend", items: ["Web dashboard"] },
    ],
    images: [
      {
        src: waterLevelMonitor,
        alt: "Team standing behind the water level monitoring prototype",
        position: "center 30%",
      },
    ],
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    type: "Personal Project",
    categories: ["Web"],
    summary:
      "A responsive, animated portfolio built with React, Vite and Tailwind CSS, with GSAP and Motion animations and a working contact form.",
    description:
      "My personal portfolio, built from scratch with React 19, Vite and Tailwind CSS. It presents my profile, skills and technologies across dedicated pages, with scroll-triggered reveals and interactive animations powered by GSAP and Motion, and a contact form that delivers messages straight to my inbox through EmailJS. It is deployed on Vercel.",
    highlights: [
      "Hand-built animated interface using GSAP and Motion rather than a template.",
      "Contact form wired to EmailJS, so visitors can reach me without leaving the page.",
      "Pages for Home, About, Skills and Technologies, designed to be responsive on every screen size.",
    ],
    stack: [
      {
        label: "Frontend",
        items: ["React", "Vite", "Tailwind CSS", "GSAP", "Motion", "styled-components", "React Router"],
      },
      { label: "Services & Deployment", items: ["EmailJS", "Vercel"] },
    ],
    images: [
      {
        src: portfolio1,
        alt: "Portfolio website home page introducing Wendyll Jay Tautoan",
      },
      { src: portfolio2, alt: "Portfolio website About Me page with key facts" },
      { src: portfolio3, alt: "Portfolio website Skills and Technologies page" },
    ],
  },
  {
    id: "mobile-app-portfolio",
    title: "Mobile App Portfolio",
    type: "Personal Project",
    categories: ["Mobile"],
    summary:
      "A cross-platform portfolio app built with Expo and React Native, with Home, About, Skills and Contact tabs and file-based navigation.",
    description:
      "A portfolio that lives on your phone: my profile, background, skills and contact details in a tabbed mobile interface. It uses Expo Router's file-based, typed routing with TypeScript and React Native, and runs on iOS, Android and the web from a single codebase with the React Native New Architecture enabled.",
    highlights: [
      "Four-tab navigation (Home, About, Skills, Contact) using Expo Router's typed routes.",
      "Native touches such as haptic feedback on the tab bar, with themed light and dark components.",
      "One codebase targeting iOS, Android and the web.",
    ],
    stack: [
      {
        label: "Mobile",
        items: ["React Native", "Expo", "Expo Router", "TypeScript", "React Navigation", "Reanimated"],
      },
    ],
    images: [
      {
        src: projectApp,
        alt: "Welcome screen of the mobile portfolio app, showing a profile photo and a short introduction",
      },
    ],
  },
];