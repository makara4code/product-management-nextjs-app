import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
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
