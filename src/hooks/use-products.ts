"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  useProductsQuery,
  useDeleteProductMutation,
  useCategoriesQuery,
} from "./queries/use-products-query";

export type ProductFilter = "all" | "published" | "low-stock" | "draft";
export type SortField =
  | "title"
  | "sku"
  | "category"
  | "stock"
  | "price"
  | "createdAt";
export type SortOrder = "asc" | "desc";

export interface AdvancedFilters {
  categories: string[];
  priceMin: number | null;
  priceMax: number | null;
  dateFrom: Date | null;
  dateTo: Date | null;
}

interface UseProductsOptions {
  initialLimit?: number;
  initialPage?: number;
  initialFilter?: ProductFilter;
  initialSearch?: string;
  initialSortField?: SortField | null;
  initialSortOrder?: SortOrder;
  initialAdvancedFilters?: AdvancedFilters;
}

const defaultAdvancedFilters: AdvancedFilters = {
  categories: [],
  priceMin: null,
  priceMax: null,
  dateFrom: null,
  dateTo: null,
};

export function useProducts(options: UseProductsOptions = {}) {
  const {
    initialLimit = 10,
    initialPage = 1,
    initialFilter = "all",
    initialSearch = "",
    initialSortField = null,
    initialSortOrder = "asc",
    initialAdvancedFilters = defaultAdvancedFilters,
  } = options;

  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [filter, setFilter] = useState<ProductFilter>(initialFilter);
  const [sortField, setSortField] = useState<SortField | null>(
    initialSortField,
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>(initialSortOrder);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilters>(
    initialAdvancedFilters,
  );

  // Calculate skip for server-side pagination
  const skip = (page - 1) * limit;

  // Get the category for server-side filtering (only supports single category)
  const serverCategory =
    advancedFilters.categories.length === 1
      ? advancedFilters.categories[0]
      : undefined;

  // Use TanStack Query for data fetching with server-side pagination, sorting, and category
  const {
    data,
    isFetching: loading,
    error: queryError,
    refetch,
  } = useProductsQuery({
    limit,
    skip,
    searchQuery: searchQuery || undefined,
    sortBy: sortField,
    order: sortOrder,
    category: serverCategory,
  });

  const deleteProductMutation = useDeleteProductMutation();

  const allProducts = data?.products ?? [];
  const serverTotal = data?.total ?? 0;
  const error =
    queryError instanceof Error
      ? queryError.message
      : queryError
        ? "Failed to fetch products"
        : null;

  // Update state when initial values change (from URL params)
  useEffect(() => {
    setPage(initialPage);
  }, [initialPage]);

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    setSortField(initialSortField);
  }, [initialSortField]);

  useEffect(() => {
    setSortOrder(initialSortOrder);
  }, [initialSortOrder]);

  useEffect(() => {
    setLimit(initialLimit);
  }, [initialLimit]);

  // Determine which filters need client-side processing
  // Note: Tab filter (published/low-stock/draft), multiple categories, price range, and date range
  // are not supported by DummyJSON API, so they remain client-side
  const hasClientSideFilters = useMemo(() => {
    return (
      filter !== "all" ||
      advancedFilters.categories.length > 1 || // Multiple categories need client-side
      advancedFilters.priceMin !== null ||
      advancedFilters.priceMax !== null ||
      advancedFilters.dateFrom !== null ||
      advancedFilters.dateTo !== null
    );
  }, [filter, advancedFilters]);

  // Apply client-side filters (only those not supported by server)
  const filteredProducts = useMemo(() => {
    let result = allProducts;

    // Apply tab filter (client-side only - not supported by DummyJSON)
    switch (filter) {
      case "published":
        result = result.filter((p) => p.stock > 0);
        break;
      case "low-stock":
        result = result.filter((p) => p.stock > 0 && p.stock <= 10);
        break;
      case "draft":
        result = result.filter((p) => p.stock === 0);
        break;
    }

    // Apply multiple category filter client-side (server only supports single category)
    if (advancedFilters.categories.length > 1) {
      result = result.filter(
        (p) => p.category && advancedFilters.categories.includes(p.category),
      );
    }

    // Apply price range filter (client-side only - not supported by DummyJSON)
    if (advancedFilters.priceMin !== null) {
      const minPrice = advancedFilters.priceMin;
      result = result.filter((p) => p.price >= minPrice);
    }
    if (advancedFilters.priceMax !== null) {
      const maxPrice = advancedFilters.priceMax;
      result = result.filter((p) => p.price <= maxPrice);
    }

    // Apply date range filter (client-side only - not supported by DummyJSON)
    if (advancedFilters.dateFrom !== null || advancedFilters.dateTo !== null) {
      result = result.filter((p) => {
        if (!p.meta?.createdAt) return false;
        const productDate = new Date(p.meta.createdAt);

        if (
          advancedFilters.dateFrom &&
          productDate < advancedFilters.dateFrom
        ) {
          return false;
        }
        if (advancedFilters.dateTo) {
          const endOfDay = new Date(advancedFilters.dateTo);
          endOfDay.setHours(23, 59, 59, 999);
          if (productDate > endOfDay) {
            return false;
          }
        }
        return true;
      });
    }

    return result;
  }, [allProducts, filter, advancedFilters]);

  // Products to display (sorting is now server-side)
  const paginatedProducts = filteredProducts;

  // Calculate total and pages based on whether client-side filters are active
  const total = hasClientSideFilters ? filteredProducts.length : serverTotal;
  const totalPages = hasClientSideFilters
    ? 1
    : Math.ceil(serverTotal / limit) || 1;

  // Reset to page 1 when client-side filters are applied
  useEffect(() => {
    if (hasClientSideFilters && page > 1 && !loading) {
      setPage(1);
    }
  }, [hasClientSideFilters, page, loading]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setPage(1);
  }, []);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const handleLimitChange = useCallback((newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  }, []);

  const handleFilterChange = useCallback((newFilter: ProductFilter) => {
    setFilter(newFilter);
    setPage(1);
  }, []);

  const handleSort = useCallback((field: SortField) => {
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
    setPage(1);
  }, []);

  const handleAdvancedFiltersChange = useCallback(
    (newFilters: Partial<AdvancedFilters>) => {
      setAdvancedFilters((prev) => ({ ...prev, ...newFilters }));
      setPage(1);
    },
    [],
  );

  const clearAdvancedFilters = useCallback(() => {
    setAdvancedFilters(defaultAdvancedFilters);
    setPage(1);
  }, []);

  // Clear only category and price filters (not date)
  const clearCategoryAndPriceFilters = useCallback(() => {
    setAdvancedFilters((prev) => ({
      ...prev,
      categories: [],
      priceMin: null,
      priceMax: null,
    }));
    setPage(1);
  }, []);

  const hasActiveAdvancedFilters = useMemo(() => {
    return (
      advancedFilters.categories.length > 0 ||
      advancedFilters.priceMin !== null ||
      advancedFilters.priceMax !== null ||
      advancedFilters.dateFrom !== null ||
      advancedFilters.dateTo !== null
    );
  }, [advancedFilters]);

  // Check for active category/price filters only (excluding date)
  const hasActiveCategoryOrPriceFilters = useMemo(() => {
    return (
      advancedFilters.categories.length > 0 ||
      advancedFilters.priceMin !== null ||
      advancedFilters.priceMax !== null
    );
  }, [advancedFilters]);

  const handleDelete = useCallback(
    async (id: number) => {
      try {
        await deleteProductMutation.mutateAsync(id);
      } catch {
        // Error is handled by mutation
      }
    },
    [deleteProductMutation],
  );

  const toggleProductSelection = useCallback((id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  }, []);

  const toggleAllProducts = useCallback(() => {
    const currentPageIds = paginatedProducts.map((p) => p.id);
    const allCurrentPageSelected = currentPageIds.every((id) =>
      selectedProducts.includes(id),
    );

    if (allCurrentPageSelected) {
      setSelectedProducts((prev) =>
        prev.filter((id) => !currentPageIds.includes(id)),
      );
    } else {
      setSelectedProducts((prev) => {
        const newSelection = new Set(prev);
        for (const id of currentPageIds) {
          newSelection.add(id);
        }
        return Array.from(newSelection);
      });
    }
  }, [paginatedProducts, selectedProducts]);

  const clearSelection = useCallback(() => {
    setSelectedProducts([]);
  }, []);

  return {
    products: paginatedProducts,
    allProducts,
    total,
    loading,
    error,
    page,
    limit,
    totalPages,
    searchQuery,
    filter,
    sortField,
    sortOrder,
    selectedProducts,
    advancedFilters,
    hasActiveAdvancedFilters,
    hasActiveCategoryOrPriceFilters,
    isDeleting: deleteProductMutation.isPending,
    handleSearch,
    handlePageChange,
    handleLimitChange,
    handleFilterChange,
    handleSort,
    handleAdvancedFiltersChange,
    clearAdvancedFilters,
    clearCategoryAndPriceFilters,
    handleDelete,
    toggleProductSelection,
    toggleAllProducts,
    clearSelection,
    refetch,
  };
}

export function useCategories() {
  const {
    data: categories = [],
    isLoading: loading,
    error: queryError,
  } = useCategoriesQuery();
  const error =
    queryError instanceof Error
      ? queryError.message
      : queryError
        ? "Failed to fetch categories"
        : null;

  return { categories, loading, error };
}
