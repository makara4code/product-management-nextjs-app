import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  // Fallback page when navigating to uncached pages while offline
  fallbacks: {
    document: "/offline",
  },
  workboxOptions: {
    // Force cleanup of outdated caches
    cleanupOutdatedCaches: true,
    // Skip waiting for service worker to activate
    skipWaiting: true,
    clientsClaim: true,
    // Precache important pages so they're always available offline
    additionalManifestEntries: [
      { url: "/dashboard", revision: Date.now().toString() },
      { url: "/products", revision: Date.now().toString() },
      { url: "/offline", revision: Date.now().toString() },
    ],
    runtimeCaching: [
      {
        // Cache page navigations - use cache when offline, network when online
        urlPattern: ({ request }) => request.mode === "navigate",
        handler: "NetworkFirst",
        options: {
          cacheName: "pages",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
          networkTimeoutSeconds: 3,
        },
      },
      {
        // Cache Next.js RSC payloads
        urlPattern: /\/_next\/.*$/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "next-assets",
          expiration: {
            maxEntries: 128,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts",
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
          },
        },
      },
      {
        urlPattern: /\.(?:js|css)$/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "static-resources",
        },
      },
      {
        urlPattern: /\.(?:png|gif|jpg|jpeg|svg|ico|webp)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          },
        },
      },
    ],
  },
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,

  // Allow PWA's webpack config alongside Turbopack
  turbopack: {},

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

export default withPWA(nextConfig);
