"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

type View = "about" | "work" | "contact";

const AboutView = dynamic(() => import("./components/views/AboutView"), { ssr: false });
const WorkView = dynamic(() => import("./components/views/WorkView"), { ssr: false });
const ContactView = dynamic(() => import("./components/views/ContactView"), { ssr: false });

const viewComponents: Record<View, React.ComponentType> = {
  about: AboutView,
  work: WorkView,
  contact: ContactView,
};

const getInitialView = (): View => {
  if (typeof window === "undefined") return "about";
  const hash = window.location.hash.slice(1);
  return (["about", "work", "contact"] as View[]).includes(hash as View)
    ? (hash as View)
    : "about";
};

export default function Home() {
  const [activeView, setActiveView] = useState<View>(getInitialView);
  const isClient = typeof window !== "undefined";

  useEffect(() => {
    const handleHashChange = () => {
      setActiveView(getInitialView());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const ViewComponent = viewComponents[activeView];

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white font-(family-name:--font-space-grotesk) text-[#0b0b0b]">
        <Header />
        <main className="mx-auto w-full max-w-[1160px] px-5 sm:px-8 xl:px-0">
          <div aria-hidden="true" className="h-96" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-(family-name:--font-space-grotesk) text-[#0b0b0b]">
      <Header />
      <ViewComponent />
      <Footer />
    </div>
  );
}