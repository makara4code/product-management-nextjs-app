import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,

  // Skip type checking during build (already done in CI separately)
  typescript: {
    ignoreBuildErrors: process.env.CI === "true",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**",
      },
    ],
    // Cache optimized images for 1 day (in seconds)
    // Browser will use cached version without validation requests
    minimumCacheTTL: 60 * 60 * 24, // 1 day
  },
};

export default nextConfig;
