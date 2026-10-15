"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

type CanvasView = "about" | "work" | "contact";

const AboutView = dynamic(() => import("./components/views/AboutView"), { ssr: false });
const WorkView = dynamic(() => import("./components/views/WorkView"), { ssr: false });
const ContactView = dynamic(() => import("./components/views/ContactView"), { ssr: false });
const LandingView = dynamic(() => import("./components/views/LandingView"), { ssr: false });

const canvasViewComponents: Record<CanvasView, React.ComponentType> = {
  about: AboutView,
  work: WorkView,
  contact: ContactView,
};

const getCanvasViewFromHash = (): CanvasView => {
  if (typeof window === "undefined") return "about";
  const hash = window.location.hash.slice(1);
  return (["about", "work", "contact"] as CanvasView[]).includes(hash as CanvasView)
    ? (hash as CanvasView)
    : "about";
};

const hasValidCanvasHash = (): boolean => {
  if (typeof window === "undefined") return false;
  const hash = window.location.hash.slice(1);
  return (["about", "work", "contact"] as CanvasView[]).includes(hash as CanvasView);
};

const isClient = typeof window !== "undefined";

export default function Home() {
  const [activeView, setActiveView] = useState<CanvasView>(() =>
    isClient ? getCanvasViewFromHash() : "about"
  );
  const [isCanvasMode, setIsCanvasMode] = useState(() =>
    isClient ? hasValidCanvasHash() : false
  );

  useEffect(() => {
    const handleHashChange = () => {
      const isCanvas = hasValidCanvasHash();
      setIsCanvasMode(isCanvas);
      if (isCanvas) {
        setActiveView(getCanvasViewFromHash());
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const ViewComponent = canvasViewComponents[activeView];

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white font-(family-name:--font-space-grotesk) text-[#0b0b0b]">
        <Header />
        <main className="mx-auto w-full max-w-290 px-5 sm:px-8 xl:px-0">
          <div aria-hidden="true" className="h-96" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!isCanvasMode) {
    return <LandingView />;
  }

  return (
    <div className="min-h-screen bg-white font-(family-name:--font-space-grotesk) text-[#0b0b0b]">
      <Header />
      <ViewComponent />
      <Footer />
    </div>
  );
}