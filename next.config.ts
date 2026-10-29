import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    // AVIF is the smallest format but the slowest to encode, so only use it in
    // production builds. `next dev` sticks to WebP to keep local reloads quick.
    formats: isProduction ? ["image/avif", "image/webp"] : ["image/webp"],

    // Imported images get fingerprinted URLs, so optimized copies are safe to
    // cache for 30 days instead of the default few hours.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;