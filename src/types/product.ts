/**
 * Product domain types
 */

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode?: string;
  qrCode?: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  sku: string;
  category: string;
  thumbnail: string;
  images: string[];
  meta: ProductMeta;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface CreateProductData {
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  stock: number;
  sku: string;
  category: string;
}

export interface UpdateProductData extends Partial<CreateProductData> {}

// Sorting types
export type SortField =
  | "title"
  | "sku"
  | "category"
  | "stock"
  | "price"
  | "createdAt";
export type SortOrder = "asc" | "desc";

// Filter types
export type ProductFilter = "all" | "published" | "low-stock" | "draft";
