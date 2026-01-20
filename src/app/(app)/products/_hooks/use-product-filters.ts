"use client";

import { useMemo } from "react";
import type { Product, ProductFilter, AdvancedFilters } from "../_types";

interface UseProductFiltersParams {
  products: Product[];
  filter: ProductFilter;
  advancedFilters: AdvancedFilters;
}

export function useProductFilters({
  products,
  filter,
  advancedFilters,
}: UseProductFiltersParams) {
  const filteredProducts = useMemo(() => {
    let result = products;

    // Apply tab filter (client-side - not supported by DummyJSON API)
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

    // Apply multiple category filter (server only supports single category)
    if (advancedFilters.categories.length > 1) {
      result = result.filter(
        (p) => p.category && advancedFilters.categories.includes(p.category),
      );
    }

    // Apply price range filter (client-side - not supported by DummyJSON API)
    if (advancedFilters.priceMin !== null) {
      const minPrice = advancedFilters.priceMin;
      result = result.filter((p) => p.price >= minPrice);
    }
    if (advancedFilters.priceMax !== null) {
      const maxPrice = advancedFilters.priceMax;
      result = result.filter((p) => p.price <= maxPrice);
    }

    // Apply date range filter (client-side - not supported by DummyJSON API)
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
  }, [products, filter, advancedFilters]);

  const hasClientSideFilters = useMemo(() => {
    return (
      filter !== "all" ||
      advancedFilters.categories.length > 1 ||
      advancedFilters.priceMin !== null ||
      advancedFilters.priceMax !== null ||
      advancedFilters.dateFrom !== null ||
      advancedFilters.dateTo !== null
    );
  }, [filter, advancedFilters]);

  const hasActiveCategoryOrPriceFilters = useMemo(() => {
    return (
      advancedFilters.categories.length > 0 ||
      advancedFilters.priceMin !== null ||
      advancedFilters.priceMax !== null
    );
  }, [advancedFilters]);

  return {
    filteredProducts,
    hasClientSideFilters,
    hasActiveCategoryOrPriceFilters,
  };
}
