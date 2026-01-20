/**
 * Filter and pagination types
 */

export interface AdvancedFilters {
  categories: string[];
  priceMin: number | null;
  priceMax: number | null;
  dateFrom: Date | null;
  dateTo: Date | null;
}

export interface PaginationState {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface SortingState<T extends string = string> {
  field: T | null;
  order: "asc" | "desc";
}

export interface ProductsQueryParams {
  limit: number;
  skip: number;
  search?: string;
}

export const DEFAULT_ADVANCED_FILTERS: AdvancedFilters = {
  categories: [],
  priceMin: null,
  priceMax: null,
  dateFrom: null,
  dateTo: null,
};

export const DEFAULT_PAGINATION: Pick<PaginationState, "page" | "limit"> = {
  page: 1,
  limit: 10,
};
