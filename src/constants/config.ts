import { env } from "@/lib/env";

export const API_CONFIG = {
  BASE_URL: env.NEXT_PUBLIC_API_BASE_URL,
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
} as const;

export const PAGINATION_CONFIG = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  LIMIT_OPTIONS: [10, 20, 50, 100] as const,
} as const;

export const QUERY_CONFIG = {
  STALE_TIME: 5 * 60 * 1000, // 5 minutes
  GC_TIME: 30 * 60 * 1000, // 30 minutes
  RETRY: 1,
} as const;

export const PRODUCT_FIELDS = [
  "id",
  "title",
  "price",
  "sku",
  "stock",
  "category",
  "thumbnail",
  "meta",
  "discountPercentage",
  "description",
] as const;

export const LOW_STOCK_THRESHOLD = 10;
