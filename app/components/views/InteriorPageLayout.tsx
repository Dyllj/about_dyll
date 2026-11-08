import type { ReactNode } from "react";
import Footer from "../footer/footer";
import Header from "../header/Header";

export default function InteriorPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-(family-name:--font-space-grotesk) text-foreground">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
