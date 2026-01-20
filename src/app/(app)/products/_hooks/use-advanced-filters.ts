"use client";

import { useState, useCallback } from "react";
import type { AdvancedFilters } from "../_types";
import { defaultAdvancedFilters } from "../_types";

export function useAdvancedFilters(
  initial: AdvancedFilters = defaultAdvancedFilters,
) {
  const [filters, setFilters] = useState<AdvancedFilters>(initial);

  const updateFilters = useCallback((updates: Partial<AdvancedFilters>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  }, []);

  const clearAll = useCallback(() => {
    setFilters(defaultAdvancedFilters);
  }, []);

  const clearCategoryAndPrice = useCallback(() => {
    setFilters((prev) => ({
      ...prev,
      categories: [],
      priceMin: null,
      priceMax: null,
    }));
  }, []);

  const clearDateRange = useCallback(() => {
    setFilters((prev) => ({
      ...prev,
      dateFrom: null,
      dateTo: null,
    }));
  }, []);

  return {
    filters,
    updateFilters,
    clearAll,
    clearCategoryAndPrice,
    clearDateRange,
  };
}
