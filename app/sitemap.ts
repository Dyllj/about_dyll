import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/work", "/contact"].map((path) => ({
    url: new URL(path, SITE_URL).href,
  }));
}
