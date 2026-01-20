import { apiClient } from "@/lib/api/client";
import { PRODUCT_FIELDS } from "@/constants/config";
import type {
  Product,
  ProductsResponse,
  Category,
  CreateProductData,
  UpdateProductData,
  SortField,
  SortOrder,
} from "@/types/product";

const PRODUCT_SELECT_FIELDS = PRODUCT_FIELDS.join(",");

export interface GetProductsParams {
  limit?: number;
  skip?: number;
  sortBy?: SortField | null;
  order?: SortOrder;
  category?: string;
  signal?: AbortSignal;
}

export interface SearchProductsParams extends GetProductsParams {
  query: string;
}

export interface GetProductsByCategoryParams extends GetProductsParams {
  category: string;
}

class ProductsService {
  private buildQueryParams(
    params: GetProductsParams,
  ): Record<string, string | number> {
    const { limit = 10, skip = 0, sortBy, order } = params;

    const queryParams: Record<string, string | number> = {
      limit,
      skip,
      select: PRODUCT_SELECT_FIELDS,
    };

    if (sortBy) {
      queryParams.sortBy = sortBy;
      queryParams.order = order || "asc";
    }

    return queryParams;
  }

  async getProducts(params: GetProductsParams = {}): Promise<ProductsResponse> {
    const { category, signal } = params;

    if (category) {
      return this.getProductsByCategory({ ...params, category });
    }

    return apiClient.get<ProductsResponse>("/products", {
      params: this.buildQueryParams(params),
      signal,
    });
  }

  async searchProducts(
    params: SearchProductsParams,
  ): Promise<ProductsResponse> {
    const { query, signal, ...rest } = params;

    return apiClient.get<ProductsResponse>("/products/search", {
      params: {
        ...this.buildQueryParams(rest),
        q: query,
      },
      signal,
    });
  }

  async getProductsByCategory(
    params: GetProductsByCategoryParams,
  ): Promise<ProductsResponse> {
    const { category, signal, ...rest } = params;

    return apiClient.get<ProductsResponse>(`/products/category/${category}`, {
      params: this.buildQueryParams(rest),
      signal,
    });
  }

  async getProduct(id: number, signal?: AbortSignal): Promise<Product> {
    return apiClient.get<Product>(`/products/${id}`, { signal });
  }

  async getCategories(signal?: AbortSignal): Promise<Category[]> {
    return apiClient.get<Category[]>("/products/categories", { signal });
  }

  async createProduct(data: CreateProductData): Promise<Product> {
    return apiClient.post<Product>("/products/add", data);
  }

  async updateProduct(id: number, data: UpdateProductData): Promise<Product> {
    return apiClient.put<Product>(`/products/${id}`, data);
  }

  async deleteProduct(id: number): Promise<Product> {
    return apiClient.delete<Product>(`/products/${id}`);
  }
}

export const productsService = new ProductsService();
export { ProductsService };
