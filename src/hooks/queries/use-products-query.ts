"use client";

/**
 * React Query hooks for products
 */

import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { productsService } from "@/services/products.service";
import { productKeys, categoryKeys } from "./query-keys";

// Minimum delay for toast loading state visibility
const MIN_LOADING_DELAY = 500;
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper to add minimum delay to a promise
async function withMinDelay<T>(promise: Promise<T>): Promise<T> {
  const [result] = await Promise.all([promise, delay(MIN_LOADING_DELAY)]);
  return result;
}
import type {
  Product,
  ProductsResponse,
  Category,
  SortField,
  SortOrder,
} from "@/types/product";

export interface UseProductsQueryParams {
  limit?: number;
  skip?: number;
  searchQuery?: string;
  sortBy?: SortField | null;
  order?: SortOrder;
  category?: string;
}

/**
 * Query hook for fetching paginated products list with server-side sorting and filtering
 */
export function useProductsQuery({
  limit = 10,
  skip = 0,
  searchQuery,
  sortBy,
  order = "asc",
  category,
}: UseProductsQueryParams = {}) {
  return useQuery<ProductsResponse>({
    queryKey: productKeys.list({
      search: searchQuery,
      limit,
      skip,
      sortBy,
      order,
      category,
    }),
    queryFn: async ({ signal }) => {
      const params = { limit, skip, sortBy, order, category, signal };

      if (searchQuery) {
        return productsService.searchProducts({
          query: searchQuery,
          ...params,
        });
      }
      return productsService.getProducts(params);
    },
    placeholderData: keepPreviousData,
  });
}

/**
 * Query hook for fetching a single product by ID
 */
export function useProductQuery(id: number) {
  return useQuery<Product>({
    queryKey: productKeys.detail(id),
    queryFn: ({ signal }) => productsService.getProduct(id, signal),
    enabled: id > 0,
  });
}

/**
 * Query hook for fetching all categories
 */
export function useCategoriesQuery() {
  return useQuery<Category[]>({
    queryKey: categoryKeys.all,
    queryFn: ({ signal }) => productsService.getCategories(signal),
  });
}

/**
 * Mutation hook for deleting a product
 */
export function useDeleteProductMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => {
      const promise = withMinDelay(productsService.deleteProduct(id));
      toast.promise(promise, {
        loading: "Deleting product...",
        success: (deletedProduct) =>
          `"${deletedProduct.title}" has been deleted successfully.`,
        error: (err) =>
          err instanceof Error ? err.message : "Failed to delete product.",
      });
      return promise;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
}

/**
 * Mutation hook for creating a product
 */
export function useCreateProductMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Parameters<typeof productsService.createProduct>[0]) => {
      const promise = withMinDelay(productsService.createProduct(data));
      toast.promise(promise, {
        loading: "Creating product...",
        success: (createdProduct) =>
          `"${createdProduct.title}" has been created successfully.`,
        error: (err) =>
          err instanceof Error ? err.message : "Failed to create product.",
      });
      return promise;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
}

/**
 * Mutation hook for updating a product
 */
export function useUpdateProductMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: Parameters<typeof productsService.updateProduct>[1];
    }) => {
      const promise = withMinDelay(productsService.updateProduct(id, data));
      toast.promise(promise, {
        loading: "Updating product...",
        success: (updatedProduct) =>
          `"${updatedProduct.title}" has been updated successfully.`,
        error: (err) =>
          err instanceof Error ? err.message : "Failed to update product.",
      });
      return promise;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: productKeys.detail(variables.id),
      });
    },
  });
}
