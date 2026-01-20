"use client";

/**
 * Hook for managing selection state
 */

import { useState, useCallback, useMemo } from "react";

export interface UseSelectionOptions<T> {
  items?: T[];
  getId?: (item: T) => number | string;
}

export interface UseSelectionReturn {
  selectedIds: (number | string)[];
  isSelected: (id: number | string) => boolean;
  isAllSelected: boolean;
  isPartiallySelected: boolean;
  toggle: (id: number | string) => void;
  toggleAll: (allIds: (number | string)[]) => void;
  select: (id: number | string) => void;
  deselect: (id: number | string) => void;
  selectMany: (ids: (number | string)[]) => void;
  deselectMany: (ids: (number | string)[]) => void;
  selectAll: (allIds: (number | string)[]) => void;
  clearSelection: () => void;
  getSelectionState: (allIds: (number | string)[]) => {
    isAllSelected: boolean;
    isPartiallySelected: boolean;
  };
}

export function useSelection<T = unknown>({
  items = [],
  getId = (item: T) => (item as { id: number }).id,
}: UseSelectionOptions<T> = {}): UseSelectionReturn {
  const [selectedIds, setSelectedIds] = useState<(number | string)[]>([]);

  const allIds = useMemo(() => items.map(getId), [items, getId]);

  const isSelected = useCallback(
    (id: number | string) => selectedIds.includes(id),
    [selectedIds],
  );

  const isAllSelected = useMemo(
    () => allIds.length > 0 && selectedIds.length === allIds.length,
    [allIds, selectedIds],
  );

  const isPartiallySelected = useMemo(
    () => selectedIds.length > 0 && selectedIds.length < allIds.length,
    [allIds, selectedIds],
  );

  const toggle = useCallback((id: number | string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  }, []);

  const toggleAll = useCallback((allItemIds: (number | string)[]) => {
    setSelectedIds((prev) =>
      prev.length === allItemIds.length ? [] : [...allItemIds],
    );
  }, []);

  const select = useCallback((id: number | string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const deselect = useCallback((id: number | string) => {
    setSelectedIds((prev) => prev.filter((i) => i !== id));
  }, []);

  const selectMany = useCallback((ids: (number | string)[]) => {
    setSelectedIds((prev) => {
      const newIds = ids.filter((id) => !prev.includes(id));
      return [...prev, ...newIds];
    });
  }, []);

  const deselectMany = useCallback((ids: (number | string)[]) => {
    setSelectedIds((prev) => prev.filter((id) => !ids.includes(id)));
  }, []);

  const selectAll = useCallback((allItemIds: (number | string)[]) => {
    setSelectedIds([...allItemIds]);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIds([]);
  }, []);

  const getSelectionState = useCallback(
    (allItemIds: (number | string)[]) => ({
      isAllSelected:
        allItemIds.length > 0 && selectedIds.length === allItemIds.length,
      isPartiallySelected:
        selectedIds.length > 0 && selectedIds.length < allItemIds.length,
    }),
    [selectedIds],
  );

  return {
    selectedIds,
    isSelected,
    isAllSelected,
    isPartiallySelected,
    toggle,
    toggleAll,
    select,
    deselect,
    selectMany,
    deselectMany,
    selectAll,
    clearSelection,
    getSelectionState,
  };
}
