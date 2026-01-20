"use client";

/**
 * Hook for managing pagination state
 */

import { useState, useCallback, useMemo } from "react";
import { PAGINATION_CONFIG } from "@/constants/config";

export interface UsePaginationOptions {
  initialPage?: number;
  initialLimit?: number;
  total?: number;
}

export interface UsePaginationReturn {
  page: number;
  limit: number;
  skip: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  reset: () => void;
}

export function usePagination({
  initialPage = PAGINATION_CONFIG.DEFAULT_PAGE,
  initialLimit = PAGINATION_CONFIG.DEFAULT_LIMIT,
  total = 0,
}: UsePaginationOptions = {}): UsePaginationReturn {
  const [page, setPageState] = useState(initialPage);
  const [limit, setLimitState] = useState(initialLimit);

  const totalPages = useMemo(
    () => Math.ceil(total / limit) || 1,
    [total, limit],
  );
  const skip = useMemo(() => (page - 1) * limit, [page, limit]);

  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  const setPage = useCallback(
    (newPage: number) => {
      setPageState(Math.max(1, Math.min(newPage, totalPages || 1)));
    },
    [totalPages],
  );

  const setLimit = useCallback((newLimit: number) => {
    setLimitState(newLimit);
    setPageState(1); // Reset to first page when changing limit
  }, []);

  const nextPage = useCallback(() => {
    if (hasNextPage) {
      setPageState((prev) => prev + 1);
    }
  }, [hasNextPage]);

  const previousPage = useCallback(() => {
    if (hasPreviousPage) {
      setPageState((prev) => prev - 1);
    }
  }, [hasPreviousPage]);

  const goToFirstPage = useCallback(() => {
    setPageState(1);
  }, []);

  const goToLastPage = useCallback(() => {
    setPageState(totalPages);
  }, [totalPages]);

  const reset = useCallback(() => {
    setPageState(initialPage);
    setLimitState(initialLimit);
  }, [initialPage, initialLimit]);

  return {
    page,
    limit,
    skip,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    setPage,
    setLimit,
    nextPage,
    previousPage,
    goToFirstPage,
    goToLastPage,
    reset,
  };
}
