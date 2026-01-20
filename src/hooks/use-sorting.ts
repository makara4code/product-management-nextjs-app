"use client";

/**
 * Hook for managing sorting state
 */

import { useState, useCallback } from "react";
import type { SortField, SortOrder } from "@/types/product";

export interface UseSortingOptions {
  initialField?: SortField | null;
  initialOrder?: SortOrder;
}

export interface UseSortingReturn {
  sortField: SortField | null;
  sortOrder: SortOrder;
  toggleSort: (field: SortField) => void;
  setSort: (field: SortField | null, order?: SortOrder) => void;
  clearSort: () => void;
}

export function useSorting({
  initialField = null,
  initialOrder = "asc",
}: UseSortingOptions = {}): UseSortingReturn {
  const [sortField, setSortField] = useState<SortField | null>(initialField);
  const [sortOrder, setSortOrder] = useState<SortOrder>(initialOrder);

  const toggleSort = useCallback((field: SortField) => {
    setSortField((currentField) => {
      if (currentField === field) {
        setSortOrder((currentOrder) =>
          currentOrder === "asc" ? "desc" : "asc",
        );
        return field;
      }
      setSortOrder("asc");
      return field;
    });
  }, []);

  const setSort = useCallback(
    (field: SortField | null, order: SortOrder = "asc") => {
      setSortField(field);
      setSortOrder(order);
    },
    [],
  );

  const clearSort = useCallback(() => {
    setSortField(null);
    setSortOrder("asc");
  }, []);

  return {
    sortField,
    sortOrder,
    toggleSort,
    setSort,
    clearSort,
  };
}
