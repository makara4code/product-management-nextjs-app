// Query hooks
export * from "./queries";

// State management hooks
export {
  usePagination,
  type UsePaginationOptions,
  type UsePaginationReturn,
} from "./use-pagination";
export {
  useSorting,
  type UseSortingOptions,
  type UseSortingReturn,
} from "./use-sorting";
export {
  useFilters,
  type UseFiltersOptions,
  type UseFiltersReturn,
} from "./use-filters";
export {
  useSelection,
  type UseSelectionOptions,
  type UseSelectionReturn,
} from "./use-selection";

// Composed hooks
export {
  useProductsList,
  type UseProductsListOptions,
  type UseProductsListReturn,
} from "./use-products-list";

// Utility hooks
export { useDebounce } from "./use-debounce";
export { useLocalStorage } from "./use-local-storage";
export { useIsMobile, useIsTablet } from "./use-mobile";

// Legacy exports for backwards compatibility (to be removed)
export {
  useProducts,
  useCategories,
  type ProductFilter,
  type SortField,
  type SortOrder,
  type AdvancedFilters,
} from "./use-products";
