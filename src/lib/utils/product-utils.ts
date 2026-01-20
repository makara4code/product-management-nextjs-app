/**
 * Product utility functions for filtering and sorting
 */

import { LOW_STOCK_THRESHOLD } from "@/constants/config";
import type {
  Product,
  ProductFilter,
  SortField,
  SortOrder,
} from "@/types/product";
import type { AdvancedFilters } from "@/types/filters";

/**
 * Apply tab filter to products
 */
export function applyTabFilter(
  products: Product[],
  filter: ProductFilter,
): Product[] {
  switch (filter) {
    case "published":
      return products.filter((p) => p.stock > 0);
    case "low-stock":
      return products.filter(
        (p) => p.stock > 0 && p.stock <= LOW_STOCK_THRESHOLD,
      );
    case "draft":
      return products.filter((p) => p.stock === 0);
    default:
      return products;
  }
}

/**
 * Apply advanced filters to products
 */
export function applyAdvancedFilters(
  products: Product[],
  filters: AdvancedFilters,
): Product[] {
  let result = products;

  // Category filter
  if (filters.categories.length > 0) {
    result = result.filter(
      (p) => p.category && filters.categories.includes(p.category),
    );
  }

  // Price range filter
  if (filters.priceMin !== null) {
    const minPrice = filters.priceMin;
    result = result.filter((p) => p.price >= minPrice);
  }
  if (filters.priceMax !== null) {
    const maxPrice = filters.priceMax;
    result = result.filter((p) => p.price <= maxPrice);
  }

  // Date range filter
  if (filters.dateFrom !== null || filters.dateTo !== null) {
    result = result.filter((p) => {
      if (!p.meta?.createdAt) return false;
      const productDate = new Date(p.meta.createdAt);

      if (filters.dateFrom && productDate < filters.dateFrom) {
        return false;
      }
      if (filters.dateTo) {
        const endOfDay = new Date(filters.dateTo);
        endOfDay.setHours(23, 59, 59, 999);
        if (productDate > endOfDay) {
          return false;
        }
      }
      return true;
    });
  }

  return result;
}

/**
 * Sort products by field and order
 */
export function sortProducts(
  products: Product[],
  sortField: SortField | null,
  sortOrder: SortOrder,
): Product[] {
  if (!sortField) return products;

  return [...products].sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

    switch (sortField) {
      case "title":
        aValue = a.title.toLowerCase();
        bValue = b.title.toLowerCase();
        break;
      case "sku":
        aValue = (a.sku || String(a.id)).toLowerCase();
        bValue = (b.sku || String(b.id)).toLowerCase();
        break;
      case "category":
        aValue = (a.category || "").toLowerCase();
        bValue = (b.category || "").toLowerCase();
        break;
      case "stock":
        aValue = a.stock;
        bValue = b.stock;
        break;
      case "price":
        aValue = a.price;
        bValue = b.price;
        break;
      case "createdAt":
        aValue = a.meta?.createdAt ? new Date(a.meta.createdAt).getTime() : 0;
        bValue = b.meta?.createdAt ? new Date(b.meta.createdAt).getTime() : 0;
        break;
      default:
        return 0;
    }

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
}

/**
 * Format price for display
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/**
 * Get unique categories from products
 */
export function getUniqueCategories(products: Product[]): string[] {
  const categories = new Set<string>();
  for (const product of products) {
    if (product.category) {
      categories.add(product.category);
    }
  }
  return Array.from(categories).sort();
}
