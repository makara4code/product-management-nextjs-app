"use client";

/**
 * Hook for managing filter state
 */

import { useState, useCallback, useMemo } from "react";
import type { ProductFilter } from "@/types/product";
import {
  DEFAULT_ADVANCED_FILTERS,
  type AdvancedFilters,
} from "@/types/filters";

export interface UseFiltersOptions {
  initialFilter?: ProductFilter;
  initialAdvancedFilters?: AdvancedFilters;
}

export interface UseFiltersReturn {
  filter: ProductFilter;
  advancedFilters: AdvancedFilters;
  hasActiveAdvancedFilters: boolean;
  setFilter: (filter: ProductFilter) => void;
  setAdvancedFilters: (filters: Partial<AdvancedFilters>) => void;
  clearAdvancedFilters: () => void;
  resetAll: () => void;
}

export function useFilters({
  initialFilter = "all",
  initialAdvancedFilters = DEFAULT_ADVANCED_FILTERS,
}: UseFiltersOptions = {}): UseFiltersReturn {
  const [filter, setFilterState] = useState<ProductFilter>(initialFilter);
  const [advancedFilters, setAdvancedFiltersState] = useState<AdvancedFilters>(
    initialAdvancedFilters,
  );

  const hasActiveAdvancedFilters = useMemo(() => {
    return (
      advancedFilters.categories.length > 0 ||
      advancedFilters.priceMin !== null ||
      advancedFilters.priceMax !== null ||
      advancedFilters.dateFrom !== null ||
      advancedFilters.dateTo !== null
    );
  }, [advancedFilters]);

  const setFilter = useCallback((newFilter: ProductFilter) => {
    setFilterState(newFilter);
  }, []);

  const setAdvancedFilters = useCallback(
    (newFilters: Partial<AdvancedFilters>) => {
      setAdvancedFiltersState((prev) => ({ ...prev, ...newFilters }));
    },
    [],
  );

  const clearAdvancedFilters = useCallback(() => {
    setAdvancedFiltersState(DEFAULT_ADVANCED_FILTERS);
  }, []);

  const resetAll = useCallback(() => {
    setFilterState(initialFilter);
    setAdvancedFiltersState(initialAdvancedFilters);
  }, [initialFilter, initialAdvancedFilters]);

  return {
    filter,
    advancedFilters,
    hasActiveAdvancedFilters,
    setFilter,
    setAdvancedFilters,
    clearAdvancedFilters,
    resetAll,
  };
}
