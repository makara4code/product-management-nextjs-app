"use client";

/**
 * Composable hook for managing products list state
 * Combines pagination, sorting, filtering, and selection
 */

import { useState, useEffect, useMemo, useCallback } from "react";
import { useProductsQuery, useDeleteProductMutation } from "./queries";
import { usePagination } from "./use-pagination";
import { useSorting } from "./use-sorting";
import { useFilters } from "./use-filters";
import { useSelection } from "./use-selection";
import {
  applyTabFilter,
  applyAdvancedFilters,
  sortProducts,
  getUniqueCategories,
} from "@/lib/utils/product-utils";
import type {
  ProductFilter,
  SortField,
  SortOrder,
  Product,
} from "@/types/product";
import type { AdvancedFilters } from "@/types/filters";

export interface UseProductsListOptions {
  initialPage?: number;
  initialLimit?: number;
  initialFilter?: ProductFilter;
  initialSearch?: string;
  initialSortField?: SortField | null;
  initialSortOrder?: SortOrder;
  initialAdvancedFilters?: AdvancedFilters;
}

export interface UseProductsListReturn {
  // Data
  products: Product[];
  allProducts: Product[];
  categories: string[];
  total: number;
  totalPages: number;

  // Loading state
  loading: boolean;
  error: string | null;

  // Pagination
  page: number;
  limit: number;
  handlePageChange: (page: number) => void;
  handleLimitChange: (limit: number) => void;

  // Search
  searchQuery: string;
  handleSearch: (query: string) => void;

  // Filtering
  filter: ProductFilter;
  advancedFilters: AdvancedFilters;
  hasActiveAdvancedFilters: boolean;
  handleFilterChange: (filter: ProductFilter) => void;
  handleAdvancedFiltersChange: (filters: Partial<AdvancedFilters>) => void;
  clearAdvancedFilters: () => void;

  // Sorting
  sortField: SortField | null;
  sortOrder: SortOrder;
  handleSort: (field: SortField) => void;

  // Selection
  selectedProducts: number[];
  toggleProductSelection: (id: number) => void;
  toggleAllProducts: () => void;

  // Actions
  handleDelete: (id: number) => Promise<void>;
  refetch: () => void;
}

export function useProductsList(
  options: UseProductsListOptions = {},
): UseProductsListReturn {
  const {
    initialPage = 1,
    initialLimit = 10,
    initialFilter = "all",
    initialSearch = "",
    initialSortField = null,
    initialSortOrder = "asc",
    initialAdvancedFilters,
  } = options;

  // Search state
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Pagination
  const pagination = usePagination({
    initialPage,
    initialLimit,
  });

  // Sorting
  const sorting = useSorting({
    initialField: initialSortField,
    initialOrder: initialSortOrder,
  });

  // Filtering
  const filtering = useFilters({
    initialFilter,
    initialAdvancedFilters,
  });

  // Selection
  const selection = useSelection<Product>();

  // Query
  const {
    data,
    isLoading: loading,
    error: queryError,
    refetch,
  } = useProductsQuery({
    limit: pagination.limit,
    skip: pagination.skip,
    searchQuery: searchQuery || undefined,
  });

  const deleteProductMutation = useDeleteProductMutation();

  // Derived state
  const allProducts = data?.products ?? [];
  const serverTotal = data?.total ?? 0;
  const error =
    queryError instanceof Error
      ? queryError.message
      : queryError
        ? "Failed to fetch products"
        : null;

  // Apply filters and sorting
  const filteredAndSortedProducts = useMemo(() => {
    let result = allProducts;
    result = applyTabFilter(result, filtering.filter);
    result = applyAdvancedFilters(result, filtering.advancedFilters);
    result = sortProducts(result, sorting.sortField, sorting.sortOrder);
    return result;
  }, [
    allProducts,
    filtering.filter,
    filtering.advancedFilters,
    sorting.sortField,
    sorting.sortOrder,
  ]);

  // Extract unique categories
  const categories = useMemo(
    () => getUniqueCategories(allProducts),
    [allProducts],
  );

  // Calculate total pages
  const totalPages = Math.ceil(serverTotal / pagination.limit);

  // Sync URL state changes to internal state
  useEffect(() => {
    pagination.setPage(initialPage);
  }, [initialPage, pagination.setPage]);

  useEffect(() => {
    pagination.setLimit(initialLimit);
  }, [initialLimit, pagination.setLimit]);

  useEffect(() => {
    filtering.setFilter(initialFilter);
  }, [initialFilter, filtering.setFilter]);

  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    sorting.setSort(initialSortField, initialSortOrder);
  }, [initialSortField, initialSortOrder, sorting.setSort]);

  // Handlers
  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      pagination.setPage(1);
    },
    [pagination],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      pagination.setPage(newPage);
    },
    [pagination],
  );

  const handleLimitChange = useCallback(
    (newLimit: number) => {
      pagination.setLimit(newLimit);
    },
    [pagination],
  );

  const handleFilterChange = useCallback(
    (newFilter: ProductFilter) => {
      filtering.setFilter(newFilter);
      pagination.setPage(1);
    },
    [filtering, pagination],
  );

  const handleAdvancedFiltersChange = useCallback(
    (newFilters: Partial<AdvancedFilters>) => {
      filtering.setAdvancedFilters(newFilters);
      pagination.setPage(1);
    },
    [filtering, pagination],
  );

  const clearAdvancedFilters = useCallback(() => {
    filtering.clearAdvancedFilters();
    pagination.setPage(1);
  }, [filtering, pagination]);

  const handleSort = useCallback(
    (field: SortField) => {
      sorting.toggleSort(field);
      pagination.setPage(1);
    },
    [sorting, pagination],
  );

  const handleDelete = useCallback(
    async (id: number) => {
      await deleteProductMutation.mutateAsync(id);
    },
    [deleteProductMutation],
  );

  const toggleProductSelection = useCallback(
    (id: number) => {
      selection.toggle(id);
    },
    [selection],
  );

  const toggleAllProducts = useCallback(() => {
    const allIds = filteredAndSortedProducts.map((p) => p.id);
    selection.toggleAll(allIds);
  }, [selection, filteredAndSortedProducts]);

  return {
    // Data
    products: filteredAndSortedProducts,
    allProducts,
    categories,
    total: serverTotal,
    totalPages,

    // Loading state
    loading,
    error,

    // Pagination
    page: pagination.page,
    limit: pagination.limit,
    handlePageChange,
    handleLimitChange,

    // Search
    searchQuery,
    handleSearch,

    // Filtering
    filter: filtering.filter,
    advancedFilters: filtering.advancedFilters,
    hasActiveAdvancedFilters: filtering.hasActiveAdvancedFilters,
    handleFilterChange,
    handleAdvancedFiltersChange,
    clearAdvancedFilters,

    // Sorting
    sortField: sorting.sortField,
    sortOrder: sorting.sortOrder,
    handleSort,

    // Selection
    selectedProducts: selection.selectedIds as number[],
    toggleProductSelection,
    toggleAllProducts,

    // Actions
    handleDelete,
    refetch,
  };
}
