export type {
  Product,
  ProductsResponse,
  Category,
  SortField,
  SortOrder,
  ProductFilter,
} from "@/types/product";

export interface AdvancedFilters {
  categories: string[];
  priceMin: number | null;
  priceMax: number | null;
  dateFrom: Date | null;
  dateTo: Date | null;
}

export const defaultAdvancedFilters: AdvancedFilters = {
  categories: [],
  priceMin: null,
  priceMax: null,
  dateFrom: null,
  dateTo: null,
};

export type ViewMode = "table" | "card";
