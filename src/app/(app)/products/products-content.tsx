"use client";

import { useState, useMemo } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePaginatedQuery } from "@/hooks/use-paginated-query";
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
  usePrefetchNextPage,
  usePrefetchProduct,
} from "./_hooks";
import type { ProductFilter, SortField } from "./_types";

const FILTER_OPTIONS = ["all", "published", "low-stock", "draft"] as const;
const SORT_FIELD_OPTIONS = [
  "title",
  "sku",
  "category",
  "stock",
  "price",
  "createdAt",
] as const;

export function ProductsContent() {
  // ===========================================
  // Pagination & URL State (via reusable hook)
  // ===========================================
  const {
    filter,
    page,
    search,
    sortBy,
    order,
    limit,
    searchInput,
    setSearchInput,
    setPage,
    skip,
    handlePageChange,
    handleLimitChange,
    handleSortChange,
    handleFilterChange,
  } = usePaginatedQuery<{ sortField: SortField; filter: ProductFilter }>({
    filterOptions: FILTER_OPTIONS,
    defaultFilter: "all",
    sortFieldOptions: SORT_FIELD_OPTIONS,
    defaultSortField: null,
    defaultOrder: "asc",
    defaultLimit: 10,
    searchDebounceMs: 300,
  });

  // ===========================================
  // Local UI State
  // ===========================================
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

  // Query params for products
  const queryParams = {
    limit,
    skip,
    search: search || undefined,
    sortBy,
    order,
    category: serverCategory,
  };

  const { data, isLoading } = useProductsQuery(queryParams);

  const { data: apiCategories = [] } = useCategoriesQuery();
  const deleteMutation = useDeleteProductMutation();

  // Client-side filtering
  const {
    filteredProducts,
    hasClientSideFilters,
    hasActiveCategoryOrPriceFilters,
  } = useProductFilters({
    products: data?.products ?? [],
    filter,
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

  // Prefetch next page for faster pagination navigation
  usePrefetchNextPage(queryParams, totalPages);

  // Prefetch product detail on hover (with 150ms threshold)
  const createPrefetchHandlers = usePrefetchProduct();

  // Reset to page 1 when client-side filters are applied
  if (hasClientSideFilters && page > 1) {
    setPage(1);
  }

  // ===========================================
  // Event Handlers
  // ===========================================
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
              <ProductsTabs value={filter} onChange={handleFilterChange} />
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
            className={cn(
              "flex-1 min-h-0 flex flex-col",
              (!isHydrated || effectiveViewMode !== "table") && "hidden",
            )}
          >
            <ProductsTable
              products={filteredProducts}
              loading={isLoading}
              selectedProducts={selectedProducts}
              toggleProductSelection={toggleProductSelection}
              toggleAllProducts={toggleAllProducts}
              confirmDelete={confirmDelete}
              createPrefetchHandlers={createPrefetchHandlers}
              sortField={sortBy}
              sortOrder={order}
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
            className={cn(
              "flex-1 min-h-0 flex flex-col",
              (!isHydrated || effectiveViewMode !== "card") && "hidden",
            )}
          >
            <VirtualizedCardGrid
              products={filteredProducts}
              loading={isLoading}
              selectedProducts={selectedProducts}
              toggleProductSelection={toggleProductSelection}
              confirmDelete={confirmDelete}
              createPrefetchHandlers={createPrefetchHandlers}
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
