export async function initMocks() {
  if (typeof window === "undefined") {
    // Server-side: we could set up server mocks here if needed
    return;
  }

  // Only run in development
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  // Check if MSW is enabled via environment variable
  if (process.env.NEXT_PUBLIC_MSW_ENABLED !== "true") {
    return;
  }

  const { worker } = await import("./browser");

  // Start the worker with specific options for Next.js
  await worker.start({
    onUnhandledRequest: "bypass", // Don't warn about unhandled requests (Next.js makes many)
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
  });

  console.log("[MSW] Mock Service Worker started");
}
