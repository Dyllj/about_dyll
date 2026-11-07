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

export default function Home() {
  const [activeView, setActiveView] = useState<CanvasView>("about");
  const [isCanvasMode, setIsCanvasMode] = useState(false);

  useEffect(() => {
    const syncViewFromHash = () => {
      const isCanvas = hasValidCanvasHash();
      setIsCanvasMode(isCanvas);
      if (isCanvas) {
        setActiveView(getCanvasViewFromHash());
      }
    };

    // Switching pages only changes the hash, so the browser keeps the old scroll
    // position. Jump to the top of the new page instantly (not smoothly).
    const handleHashChange = () => {
      syncViewFromHash();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    // Stop the browser from restoring an old scroll position on back/forward,
    // which would fight with the scroll-to-top above.
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    syncViewFromHash();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  const ViewComponent = canvasViewComponents[activeView];

  if (!isCanvasMode) {
    return <LandingView />;
  }

  return (
    <div className="min-h-screen bg-background font-(family-name:--font-space-grotesk) text-foreground">
      <Header />
      <ViewComponent />
      <Footer />
    </div>
  );
}