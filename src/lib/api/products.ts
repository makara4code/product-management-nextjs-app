const API_BASE = process.env.API_BASE_PATH ?? "https://dummyjson.com";

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
  meta: {
    createdAt: string;
    updatedAt: string;
  };
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

export type SortField =
  | "title"
  | "sku"
  | "category"
  | "stock"
  | "price"
  | "createdAt";
export type SortOrder = "asc" | "desc";

export interface GetProductsOptions {
  limit?: number;
  skip?: number;
  sortBy?: SortField | null;
  order?: SortOrder;
  category?: string;
}

export async function getProducts(
  options: GetProductsOptions = {},
  signal?: AbortSignal,
): Promise<ProductsResponse> {
  const { limit = 10, skip = 0, sortBy, order = "asc", category } = options;

  const params = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
    select:
      "id,title,price,sku,stock,category,thumbnail,meta,discountPercentage,description",
  });

  if (sortBy) {
    params.set("sortBy", sortBy);
    params.set("order", order);
  }

  // If category is specified, use the category endpoint
  const endpoint = category
    ? `${API_BASE}/products/category/${category}`
    : `${API_BASE}/products`;

  const response = await fetch(`${endpoint}?${params}`, { signal });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function getProductsByCategory(
  category: string,
  limit = 10,
  skip = 0,
  signal?: AbortSignal,
): Promise<ProductsResponse> {
  const params = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
    select:
      "id,title,price,sku,stock,category,thumbnail,meta,discountPercentage,description",
  });

  const response = await fetch(
    `${API_BASE}/products/category/${category}?${params}`,
    { signal },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products by category");
  }
  return response.json();
}

export interface SearchProductsOptions extends GetProductsOptions {
  query: string;
}

export async function searchProducts(
  options: SearchProductsOptions,
  signal?: AbortSignal,
): Promise<ProductsResponse> {
  const { query, limit = 10, skip = 0, sortBy, order = "asc" } = options;

  const params = new URLSearchParams({
    q: query,
    limit: String(limit),
    skip: String(skip),
    select:
      "id,title,price,sku,stock,category,thumbnail,meta,discountPercentage,description",
  });

  if (sortBy) {
    params.set("sortBy", sortBy);
    params.set("order", order);
  }

  const response = await fetch(`${API_BASE}/products/search?${params}`, {
    signal,
  });
  if (!response.ok) {
    throw new Error("Failed to search products");
  }
  return response.json();
}

export async function getProduct(
  id: number,
  signal?: AbortSignal,
): Promise<Product> {
  const response = await fetch(`${API_BASE}/products/${id}`, { signal });
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}

export async function getCategories(signal?: AbortSignal): Promise<Category[]> {
  const response = await fetch(`${API_BASE}/products/categories`, { signal });
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
}

export async function createProduct(data: CreateProductData): Promise<Product> {
  const response = await fetch(`${API_BASE}/products/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create product");
  }
  return response.json();
}

export async function updateProduct(
  id: number,
  data: UpdateProductData,
): Promise<Product> {
  const response = await fetch(`${API_BASE}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to update product");
  }
  return response.json();
}

export async function deleteProduct(id: number): Promise<Product> {
  const response = await fetch(`${API_BASE}/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
  return response.json();
}
