/**
 * Query key factory for React Query
 * Follows the TanStack Query best practices for key management
 */

export interface ProductListParams {
  search?: string;
  limit: number;
  skip: number;
  sortBy?: string | null;
  order?: string;
  category?: string;
}

export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (params: ProductListParams) =>
    [...productKeys.lists(), params] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: number) => [...productKeys.details(), id] as const,
};

export const categoryKeys = {
  all: ["categories"] as const,
};
