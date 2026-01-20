"use client";

import { useState, useCallback } from "react";
import type { Product } from "../_types";

export function useProductSelection(products: Product[]) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleSelection = useCallback((id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  }, []);

  const toggleAll = useCallback(() => {
    const currentPageIds = products.map((p) => p.id);
    const allSelected = currentPageIds.every((id) => selectedIds.includes(id));

    if (allSelected) {
      setSelectedIds((prev) =>
        prev.filter((id) => !currentPageIds.includes(id)),
      );
    } else {
      setSelectedIds((prev) => {
        const newSelection = new Set(prev);
        for (const id of currentPageIds) {
          newSelection.add(id);
        }
        return Array.from(newSelection);
      });
    }
  }, [products, selectedIds]);

  const clearSelection = useCallback(() => {
    setSelectedIds([]);
  }, []);

  const isSelected = useCallback(
    (id: number) => selectedIds.includes(id),
    [selectedIds],
  );

  const isAllSelected =
    products.length > 0 && products.every((p) => selectedIds.includes(p.id));

  return {
    selectedIds,
    toggleSelection,
    toggleAll,
    clearSelection,
    isSelected,
    isAllSelected,
  };
}
