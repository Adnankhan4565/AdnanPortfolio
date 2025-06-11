import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [new URL("https://placehold.co/**")],
  }
};

export default nextConfig;
