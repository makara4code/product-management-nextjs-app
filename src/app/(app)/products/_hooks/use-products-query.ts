"use client";

import { useEffect, useRef, useCallback } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  keepPreviousData,
  type QueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { productsService } from "@/services/products.service";
import { productKeys, categoryKeys } from "@/hooks/queries/query-keys";
import type {
  Product,
  ProductsResponse,
  Category,
  SortField,
  SortOrder,
} from "../_types";

const MIN_LOADING_DELAY = 500;
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function withMinDelay<T>(promise: Promise<T>): Promise<T> {
  const [result] = await Promise.all([promise, delay(MIN_LOADING_DELAY)]);
  return result;
}

export interface ProductsQueryParams {
  limit: number;
  skip: number;
  search?: string;
  sortBy?: SortField | null;
  order?: SortOrder;
  category?: string;
}

export function useProductsQuery({
  limit,
  skip,
  search,
  sortBy,
  order = "asc",
  category,
}: ProductsQueryParams) {
  return useQuery<ProductsResponse>({
    queryKey: productKeys.list({
      search,
      limit,
      skip,
      sortBy,
      order,
      category,
    }),
    queryFn: async ({ signal }) => {
      const params = { limit, skip, sortBy, order, category, signal };

      if (search) {
        return productsService.searchProducts({
          query: search,
          ...params,
        });
      }
      return productsService.getProducts(params);
    },
    placeholderData: keepPreviousData,
  });
}

export function useProductQuery(id: number) {
  return useQuery<Product>({
    queryKey: productKeys.detail(id),
    queryFn: ({ signal }) => productsService.getProduct(id, signal),
    enabled: id > 0,
    // Keep prefetched data fresh for 30 seconds to avoid refetch on navigation
    staleTime: 30 * 1000,
  });
}

export function useCategoriesQuery() {
  return useQuery<Category[]>({
    queryKey: categoryKeys.all,
    queryFn: ({ signal }) => productsService.getCategories(signal),
  });
}

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

// Prefetch functions for route preloading
export function prefetchProduct(queryClient: QueryClient, id: number) {
  return queryClient.prefetchQuery({
    queryKey: productKeys.detail(id),
    queryFn: ({ signal }) => productsService.getProduct(id, signal),
    staleTime: 30 * 1000,
  });
}

export function prefetchProducts(
  queryClient: QueryClient,
  params: ProductsQueryParams = { limit: 10, skip: 0 },
) {
  return queryClient.prefetchQuery({
    queryKey: productKeys.list(params),
    queryFn: async ({ signal }) => {
      const { limit, skip, sortBy, order, category, search } = params;
      if (search) {
        return productsService.searchProducts({
          query: search,
          limit,
          skip,
          sortBy,
          order,
          category,
          signal,
        });
      }
      return productsService.getProducts({
        limit,
        skip,
        sortBy,
        order,
        category,
        signal,
      });
    },
  });
}

export function prefetchCategories(queryClient: QueryClient) {
  return queryClient.prefetchQuery({
    queryKey: categoryKeys.all,
    queryFn: ({ signal }) => productsService.getCategories(signal),
  });
}

// Hook for prefetching products page data
export function usePrefetchProducts() {
  const queryClient = useQueryClient();

  return () => {
    prefetchProducts(queryClient);
    prefetchCategories(queryClient);
  };
}

// Hover threshold before prefetching (ms) - prevents accidental triggers
const PREFETCH_HOVER_THRESHOLD = 150;

// Hook for prefetching a single product detail with hover threshold
export function usePrefetchProduct() {
  const queryClient = useQueryClient();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPrefetchTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const createPrefetchHandlers = useCallback(
    (id: number) => ({
      onMouseEnter: () => {
        clearPrefetchTimeout();
        timeoutRef.current = setTimeout(() => {
          prefetchProduct(queryClient, id);
        }, PREFETCH_HOVER_THRESHOLD);
      },
      onMouseLeave: clearPrefetchTimeout,
      onFocus: () => {
        clearPrefetchTimeout();
        timeoutRef.current = setTimeout(() => {
          prefetchProduct(queryClient, id);
        }, PREFETCH_HOVER_THRESHOLD);
      },
      onBlur: clearPrefetchTimeout,
    }),
    [queryClient, clearPrefetchTimeout],
  );

  // Cleanup on unmount
  useEffect(() => {
    return clearPrefetchTimeout;
  }, [clearPrefetchTimeout]);

  return createPrefetchHandlers;
}

// Hook for prefetching next/previous pages for pagination
export function usePrefetchNextPage(
  currentParams: ProductsQueryParams,
  totalPages: number,
) {
  const queryClient = useQueryClient();
  const { limit, skip, search, sortBy, order, category } = currentParams;
  const currentPage = Math.floor(skip / limit) + 1;

  // Prefetch next page if not on last page
  useEffect(() => {
    if (currentPage < totalPages) {
      const nextPageParams: ProductsQueryParams = {
        ...currentParams,
        skip: skip + limit,
      };
      prefetchProducts(queryClient, nextPageParams);
    }
  }, [
    queryClient,
    currentPage,
    totalPages,
    limit,
    skip,
    search,
    sortBy,
    order,
    category,
    currentParams,
  ]);
}
