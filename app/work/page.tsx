import type { Metadata } from "next";
import InteriorPageLayout from "../components/views/InteriorPageLayout";
import WorkView from "../components/views/WorkView";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore Wendyll Jay Tautoan's web, mobile, and IoT projects, including a flood-monitoring system and the award-winning AlerTech platform.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <InteriorPageLayout>
      <WorkView />
    </InteriorPageLayout>
  );
}
