import type { Metadata } from "next";

export const SITE_URL = "https://about-dyll.vercel.app";
export const SITE_NAME = "Wendyll Jay Tautoan Portfolio";
export const SOCIAL_IMAGE = "/about_dyll_assets/e.jpg";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, SITE_URL);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_PH",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [{ url: SOCIAL_IMAGE, alt: "Portrait of Wendyll Jay Tautoan" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: SOCIAL_IMAGE, alt: "Portrait of Wendyll Jay Tautoan" }],
    },
  };
}
