"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useQueryState, parseAsInteger, parseAsStringLiteral } from "nuqs";
import { useDebounce } from "@/hooks/use-debounce";

// ===========================================
// Base Generics
// ===========================================
export type PaginatedQueryGenerics = {
  sortField: string;
  filter: string;
};

// ===========================================
// Types
// ===========================================
export type UsePaginatedQueryOptions<
  T extends PaginatedQueryGenerics = PaginatedQueryGenerics,
> = {
  /** Available filter options for the query */
  filterOptions: readonly T["filter"][];
  /** Default filter value */
  defaultFilter: T["filter"];
  /** Available sort field options */
  sortFieldOptions: readonly T["sortField"][];
  /** Default sort field */
  defaultSortField?: T["sortField"] | null;
  /** Default sort order */
  defaultOrder?: "asc" | "desc";
  /** Default page size */
  defaultLimit?: number;
  /** Debounce delay for search input (ms) */
  searchDebounceMs?: number;
};

export type PaginatedQueryState<
  T extends PaginatedQueryGenerics = PaginatedQueryGenerics,
> = {
  // URL state values
  filter: T["filter"];
  page: number;
  search: string;
  sortBy: T["sortField"] | null;
  order: "asc" | "desc";
  limit: number;

  // Search input state (for controlled input)
  searchInput: string;

  // Setters
  setFilter: (value: T["filter"]) => void;
  setPage: (value: number) => void;
  setSearch: (value: string) => void;
  setSortBy: (value: T["sortField"] | null) => void;
  setOrder: (value: "asc" | "desc") => void;
  setLimit: (value: number) => void;
  setSearchInput: (value: string) => void;

  // Convenience handlers
  handlePageChange: (newPage: number) => void;
  handleLimitChange: (newLimit: number) => void;
  handleSortChange: (field: T["sortField"]) => void;
  handleFilterChange: (value: T["filter"]) => void;

  // Computed values for API calls
  skip: number;
};

const SORT_ORDER_OPTIONS = ["asc", "desc"] as const;

export function usePaginatedQuery<T extends PaginatedQueryGenerics>(
  options: UsePaginatedQueryOptions<T>,
): PaginatedQueryState<T> {
  const {
    filterOptions,
    defaultFilter,
    sortFieldOptions,
    defaultSortField = null,
    defaultOrder = "asc",
    defaultLimit = 10,
    searchDebounceMs = 300,
  } = options;

  // ===========================================
  // URL State (Single Source of Truth)
  // ===========================================
  const [filter, setFilterState] = useQueryState(
    "filter",
    parseAsStringLiteral(filterOptions).withDefault(defaultFilter),
  );

  const [page, setPageState] = useQueryState(
    "page",
    parseAsInteger.withDefault(1),
  );

  const [search, setSearchState] = useQueryState("search", {
    defaultValue: "",
  });

  const [sortBy, setSortByState] = useQueryState(
    "sortBy",
    parseAsStringLiteral(sortFieldOptions),
  );

  const [order, setOrderState] = useQueryState(
    "order",
    parseAsStringLiteral(SORT_ORDER_OPTIONS).withDefault(defaultOrder),
  );

  const [limit, setLimitState] = useQueryState(
    "limit",
    parseAsInteger.withDefault(defaultLimit),
  );

  // ===========================================
  // Local UI State
  // ===========================================
  const [searchInput, setSearchInput] = useState(search);
  const debouncedSearch = useDebounce(searchInput, searchDebounceMs);

  // Track if we need to apply the default sort field (only on mount if no URL value)
  const effectiveSortBy = sortBy ?? defaultSortField;

  // ===========================================
  // Effects
  // ===========================================

  // Sync debounced search to URL
  useEffect(() => {
    if (debouncedSearch !== search) {
      setSearchState(debouncedSearch || null);
      setPageState(1);
    }
  }, [debouncedSearch, search, setSearchState, setPageState]);

  // ===========================================
  // Memoized Setters with Type Safety
  // ===========================================
  const setFilter = useCallback(
    (value: T["filter"]) => {
      setFilterState(value);
    },
    [setFilterState],
  );

  const setPage = useCallback(
    (value: number) => {
      setPageState(value);
    },
    [setPageState],
  );

  const setSearch = useCallback(
    (value: string) => {
      setSearchState(value || null);
    },
    [setSearchState],
  );

  const setSortBy = useCallback(
    (value: T["sortField"] | null) => {
      setSortByState(value);
    },
    [setSortByState],
  );

  const setOrder = useCallback(
    (value: "asc" | "desc") => {
      setOrderState(value);
    },
    [setOrderState],
  );

  const setLimit = useCallback(
    (value: number) => {
      setLimitState(value);
    },
    [setLimitState],
  );

  // ===========================================
  // Convenience Handlers
  // ===========================================
  const handleFilterChange = useCallback(
    (value: T["filter"]) => {
      setFilter(value);
      setPage(1);
    },
    [setFilter, setPage],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      setPage(newPage);
    },
    [setPage],
  );

  const handleLimitChange = useCallback(
    (newLimit: number) => {
      setLimit(newLimit);
      setPage(1);
    },
    [setLimit, setPage],
  );

  const handleSortChange = useCallback(
    (field: T["sortField"]) => {
      const newOrder =
        effectiveSortBy === field && order === "asc" ? "desc" : "asc";
      setSortBy(field);
      setOrder(newOrder);
      setPage(1);
    },
    [effectiveSortBy, order, setSortBy, setOrder, setPage],
  );

  // ===========================================
  // Computed Values
  // ===========================================
  const skip = useMemo(() => (page - 1) * limit, [page, limit]);

  return {
    // URL state values
    filter,
    page,
    search,
    sortBy: effectiveSortBy,
    order,
    limit,

    // Search input state
    searchInput,

    // Setters
    setFilter,
    setPage,
    setSearch,
    setSortBy,
    setOrder,
    setLimit,
    setSearchInput,

    // Convenience handlers
    handlePageChange,
    handleLimitChange,
    handleSortChange,
    handleFilterChange,

    // Computed values
    skip,
  };
}

// ===========================================
// Pagination Helpers
// ===========================================
export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export function computePaginationMeta(
  page: number,
  limit: number,
  total: number,
): PaginationMeta {
  const totalPages = Math.ceil(total / limit) || 1;
  return {
    page,
    limit,
    total,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
}
