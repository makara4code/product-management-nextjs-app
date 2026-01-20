"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import type { ViewMode } from "../_types";

export function useViewMode() {
  const [viewMode, setViewMode, isHydrated] = useLocalStorage<ViewMode>(
    "products-view-mode",
    "table",
  );
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Use card view on small screens, otherwise use user preference
  const effectiveViewMode = isSmallScreen ? "card" : viewMode;

  return {
    viewMode,
    setViewMode,
    effectiveViewMode,
    isHydrated,
    isSmallScreen,
  };
}
