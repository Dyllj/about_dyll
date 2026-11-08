import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Hebrew, Space_Grotesk } from "next/font/google";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE } from "./seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const notoSansHebrew = Noto_Sans_Hebrew({
  variable: "--font-noto-sans-hebrew",
  subsets: ["hebrew"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wendyll Jay Tautoan | Full-Stack Developer in Cebu City",
    template: "%s | Wendyll Jay Tautoan",
  },
  description:
    "Explore the portfolio of Wendyll Jay Tautoan, a Cebu City full-stack developer building web, mobile, and IoT applications.",
  applicationName: SITE_NAME,
  authors: [{ name: "Wendyll Jay Tautoan", url: SITE_URL }],
  creator: "Wendyll Jay Tautoan",
  publisher: "Wendyll Jay Tautoan",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: SITE_NAME,
    title: "Wendyll Jay Tautoan | Full-Stack Developer in Cebu City",
    description:
      "Explore the portfolio of Wendyll Jay Tautoan, a Cebu City full-stack developer building web, mobile, and IoT applications.",
    url: SITE_URL,
    images: [{ url: SOCIAL_IMAGE, alt: "Portrait of Wendyll Jay Tautoan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wendyll Jay Tautoan | Full-Stack Developer in Cebu City",
    description:
      "Explore the portfolio of Wendyll Jay Tautoan, a Cebu City full-stack developer building web, mobile, and IoT applications.",
    images: [{ url: SOCIAL_IMAGE, alt: "Portrait of Wendyll Jay Tautoan" }],
  },
  icons: {
    icon: "/about_dyll_assets/W.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Wendyll Jay Tautoan",
      url: SITE_URL,
      image: new URL(SOCIAL_IMAGE, SITE_URL).href,
      jobTitle: "Full-Stack Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cebu City",
        addressCountry: "PH",
      },
      sameAs: ["https://github.com/Dyllj"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ];

  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${notoSansHebrew.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
