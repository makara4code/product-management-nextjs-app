"use client";

import { useState, useMemo, useEffect } from "react";
import { useQueryState, parseAsInteger, parseAsStringLiteral } from "nuqs";
import { X } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";
import { Button } from "@/components/ui/button";
import {
  ProductsSearch,
  ProductsActions,
  ProductsTabs,
  ViewModeToggle,
  ProductFilters,
  DateRangePicker,
  ProductsTable,
  VirtualizedCardGrid,
  DeleteProductDialog,
} from "@/components/products";
import {
  useProductsQuery,
  useCategoriesQuery,
  useDeleteProductMutation,
  useProductSelection,
  useProductFilters,
  useAdvancedFilters,
  useViewMode,
} from "./_hooks";
import type { ProductFilter, SortField, SortOrder } from "./_types";

const FILTER_OPTIONS = ["all", "published", "low-stock", "draft"] as const;
const SORT_FIELD_OPTIONS = [
  "title",
  "sku",
  "category",
  "stock",
  "price",
  "createdAt",
] as const;
const SORT_ORDER_OPTIONS = ["asc", "desc"] as const;

export function ProductsContent() {
  // ===========================================
  // URL State (Single Source of Truth)
  // ===========================================
  const [filter, setFilter] = useQueryState(
    "filter",
    parseAsStringLiteral(FILTER_OPTIONS).withDefault("all"),
  );

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [sortBy, setSortBy] = useQueryState(
    "sortBy",
    parseAsStringLiteral(SORT_FIELD_OPTIONS),
  );

  const [order, setOrder] = useQueryState(
    "order",
    parseAsStringLiteral(SORT_ORDER_OPTIONS).withDefault("asc"),
  );

  const [limit, setLimit] = useQueryState(
    "limit",
    parseAsInteger.withDefault(10),
  );

  // ===========================================
  // Local UI State
  // ===========================================
  const [searchInput, setSearchInput] = useState(search);
  const debouncedSearch = useDebounce(searchInput, 300);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  // ===========================================
  // Hooks
  // ===========================================
  const {
    filters: advancedFilters,
    updateFilters,
    clearCategoryAndPrice,
  } = useAdvancedFilters();
  const { viewMode, setViewMode, effectiveViewMode, isHydrated } =
    useViewMode();

  // Compute server category (single category for API)
  const serverCategory =
    advancedFilters.categories.length === 1
      ? advancedFilters.categories[0]
      : undefined;

  // TanStack Query - reads directly from URL state
  const { data, isFetching: loading } = useProductsQuery({
    limit,
    skip: (page - 1) * limit,
    search: search || undefined,
    sortBy: sortBy as SortField | null,
    order: order as SortOrder,
    category: serverCategory,
  });

  const { data: apiCategories = [] } = useCategoriesQuery();
  const deleteMutation = useDeleteProductMutation();

  // Client-side filtering
  const {
    filteredProducts,
    hasClientSideFilters,
    hasActiveCategoryOrPriceFilters,
  } = useProductFilters({
    products: data?.products ?? [],
    filter: filter as ProductFilter,
    advancedFilters,
  });

  // Selection state
  const {
    selectedIds: selectedProducts,
    toggleSelection: toggleProductSelection,
    toggleAll: toggleAllProducts,
    clearSelection,
  } = useProductSelection(filteredProducts);

  // Categories for filter dropdown
  const categories = useMemo(() => {
    return apiCategories.map((c) => c.slug).sort();
  }, [apiCategories]);

  // Pagination calculations
  const serverTotal = data?.total ?? 0;
  const total = hasClientSideFilters ? filteredProducts.length : serverTotal;
  const totalPages = hasClientSideFilters
    ? 1
    : Math.ceil(serverTotal / limit) || 1;

  // ===========================================
  // Effects
  // ===========================================

  // Sync debounced search to URL
  useEffect(() => {
    if (debouncedSearch !== search) {
      setSearch(debouncedSearch || null);
      setPage(1);
    }
  }, [debouncedSearch, search, setSearch, setPage]);

  // Reset to page 1 when client-side filters are applied
  useEffect(() => {
    if (hasClientSideFilters && page > 1) {
      setPage(1);
    }
  }, [hasClientSideFilters, page, setPage]);

  // ===========================================
  // Event Handlers
  // ===========================================
  const handleTabChange = (value: ProductFilter) => {
    setFilter(value);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const handleSortChange = (field: SortField) => {
    const newOrder = sortBy === field && order === "asc" ? "desc" : "asc";
    setSortBy(field);
    setOrder(newOrder);
    setPage(1);
  };

  const confirmDelete = (id: number) => {
    setProductToDelete(id);
    setDeleteDialogOpen(true);
  };

  const executeDelete = async () => {
    if (productToDelete) {
      await deleteMutation.mutateAsync(productToDelete);
      setDeleteDialogOpen(false);
      setProductToDelete(null);
    }
  };

  // ===========================================
  // Render
  // ===========================================
  return (
    <>
      <div className="flex flex-1 flex-col min-h-0">
        {/* Sticky Page Header */}
        <div className="sticky top-0 z-20 bg-background flex flex-col gap-3 p-3 md:px-4 md:py-3">
          {/* Search and Actions Bar */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <ProductsSearch value={searchInput} onChange={setSearchInput} />
            <ProductsActions />
          </div>

          {/* Tabs and Filters */}
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <ProductsTabs
                value={filter as ProductFilter}
                onChange={handleTabChange}
              />
              {selectedProducts.length > 0 && (
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-md">
                  <span className="text-sm font-medium">
                    {selectedProducts.length} selected
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 text-muted-foreground hover:text-foreground"
                    onClick={clearSelection}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <DateRangePicker
                dateFrom={advancedFilters.dateFrom}
                dateTo={advancedFilters.dateTo}
                onDateRangeChange={(dateFrom, dateTo) =>
                  updateFilters({ dateFrom, dateTo })
                }
              />
              <ProductFilters
                filters={advancedFilters}
                onFiltersChange={updateFilters}
                onClearFilters={clearCategoryAndPrice}
                hasActiveFilters={hasActiveCategoryOrPriceFilters}
                categories={categories}
              />
              <ViewModeToggle value={viewMode} onChange={setViewMode} />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-1 flex-col px-3 pb-3 md:px-4 md:pb-4 min-h-0 overflow-hidden">
          {/* Table View */}
          <div
            className={
              !isHydrated
                ? "hidden"
                : effectiveViewMode === "table"
                  ? "flex-1 min-h-0 flex flex-col"
                  : "hidden"
            }
          >
            <ProductsTable
              products={filteredProducts}
              loading={loading}
              selectedProducts={selectedProducts}
              toggleProductSelection={toggleProductSelection}
              toggleAllProducts={toggleAllProducts}
              confirmDelete={confirmDelete}
              sortField={sortBy as SortField | null}
              sortOrder={order as SortOrder}
              onSort={handleSortChange}
              page={page}
              limit={limit}
              total={total}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onLimitChange={handleLimitChange}
            />
          </div>

          {/* Card View */}
          <div
            className={
              !isHydrated
                ? "hidden"
                : effectiveViewMode === "card"
                  ? "flex-1 min-h-0 flex flex-col"
                  : "hidden"
            }
          >
            <VirtualizedCardGrid
              products={filteredProducts}
              loading={loading}
              selectedProducts={selectedProducts}
              toggleProductSelection={toggleProductSelection}
              confirmDelete={confirmDelete}
              page={page}
              limit={limit}
              total={total}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onLimitChange={handleLimitChange}
            />
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <DeleteProductDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={executeDelete}
        isDeleting={deleteMutation.isPending}
      />
    </>
  );
}
