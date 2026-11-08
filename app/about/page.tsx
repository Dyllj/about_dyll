import type { Metadata } from "next";
import AboutView from "../components/views/AboutView";
import InteriorPageLayout from "../components/views/InteriorPageLayout";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Meet Wendyll Jay Tautoan, a Cebu City full-stack developer focused on practical web, mobile, and IoT solutions.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <InteriorPageLayout>
      <AboutView />
    </InteriorPageLayout>
  );
}
