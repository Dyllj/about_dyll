import type { Metadata } from "next";
import ContactView from "../components/views/ContactView";
import InteriorPageLayout from "../components/views/InteriorPageLayout";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Wendyll Jay Tautoan in Cebu City about full-stack development, web and mobile projects, IoT, or collaboration opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <InteriorPageLayout>
      <ContactView />
    </InteriorPageLayout>
  );
}
