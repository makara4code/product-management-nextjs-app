"use client";

import { useEffect, useState, type ReactNode } from "react";

type MSWProviderProps = {
  children: ReactNode;
};

export function MSWProvider({ children }: MSWProviderProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      // Only initialize MSW in development when enabled
      if (
        process.env.NODE_ENV === "development" &&
        process.env.NEXT_PUBLIC_MSW_ENABLED === "true"
      ) {
        const { initMocks } = await import("@/mocks");
        await initMocks();
      }
      setIsReady(true);
    };

    init();
  }, []);

  // In production or when MSW is disabled, render children immediately
  if (
    process.env.NODE_ENV !== "development" ||
    process.env.NEXT_PUBLIC_MSW_ENABLED !== "true"
  ) {
    return <>{children}</>;
  }

  // In development with MSW enabled, wait for initialization
  if (!isReady) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
}
