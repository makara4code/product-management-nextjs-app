import { http, HttpResponse, delay } from "msw";
import { db } from "./data";
import type { Product } from "@/types/product";

const API_BASE_URL = "https://dummyjson.com";

// Simulate network delay (50-150ms)
const simulateDelay = () => delay(Math.random() * 100 + 50);

// Helper to parse query params
const getQueryParam = (url: URL, key: string, defaultValue?: string) =>
  url.searchParams.get(key) ?? defaultValue;

const getQueryParamInt = (url: URL, key: string, defaultValue: number) => {
  const value = url.searchParams.get(key);
  return value ? parseInt(value, 10) : defaultValue;
};

// Helper to sort products
const sortProducts = (
  products: Product[],
  sortBy?: string | null,
  order: "asc" | "desc" = "asc",
) => {
  if (!sortBy) return products;

  return [...products].sort((a, b) => {
    let aVal: string | number;
    let bVal: string | number;

    switch (sortBy) {
      case "title":
        aVal = a.title.toLowerCase();
        bVal = b.title.toLowerCase();
        break;
      case "price":
        aVal = a.price;
        bVal = b.price;
        break;
      case "stock":
        aVal = a.stock;
        bVal = b.stock;
        break;
      case "category":
        aVal = a.category.toLowerCase();
        bVal = b.category.toLowerCase();
        break;
      case "sku":
        aVal = a.sku.toLowerCase();
        bVal = b.sku.toLowerCase();
        break;
      case "createdAt":
        aVal = new Date(a.meta.createdAt).getTime();
        bVal = new Date(b.meta.createdAt).getTime();
        break;
      default:
        return 0;
    }

    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });
};

// Helper to select specific fields from products
// Note: For simplicity, we return all fields in mock - the real API filters fields
const selectFields = (
  products: Product[],
  _selectParam?: string | null,
): Product[] => {
  // In a real implementation, we would filter fields here
  // For mocking purposes, we return all fields which is compatible
  return products;
};

export const handlers = [
  // ===========================================
  // GET /products - List all products
  // ===========================================
  http.get(`${API_BASE_URL}/products`, async ({ request }) => {
    await simulateDelay();

    const url = new URL(request.url);
    const limit = getQueryParamInt(url, "limit", 10);
    const skip = getQueryParamInt(url, "skip", 0);
    const sortBy = getQueryParam(url, "sortBy");
    const order =
      (getQueryParam(url, "order", "asc") as "asc" | "desc") || "asc";
    const select = getQueryParam(url, "select");

    let products = db.products.getAll();
    products = sortProducts(products, sortBy, order);

    const total = products.length;
    products = products.slice(skip, skip + limit);
    products = selectFields(products, select);

    return HttpResponse.json({
      products,
      total,
      skip,
      limit,
    });
  }),

  // ===========================================
  // GET /products/search - Search products
  // ===========================================
  http.get(`${API_BASE_URL}/products/search`, async ({ request }) => {
    await simulateDelay();

    const url = new URL(request.url);
    const q = getQueryParam(url, "q", "");
    const limit = getQueryParamInt(url, "limit", 10);
    const skip = getQueryParamInt(url, "skip", 0);
    const sortBy = getQueryParam(url, "sortBy");
    const order =
      (getQueryParam(url, "order", "asc") as "asc" | "desc") || "asc";
    const select = getQueryParam(url, "select");

    let products = q ? db.products.search(q) : db.products.getAll();
    products = sortProducts(products, sortBy, order);

    const total = products.length;
    products = products.slice(skip, skip + limit);
    products = selectFields(products, select);

    return HttpResponse.json({
      products,
      total,
      skip,
      limit,
    });
  }),

  // ===========================================
  // GET /products/categories - List all categories
  // ===========================================
  http.get(`${API_BASE_URL}/products/categories`, async () => {
    await simulateDelay();
    return HttpResponse.json(db.categories.getAll());
  }),

  // ===========================================
  // GET /products/category/:category - Products by category
  // ===========================================
  http.get(
    `${API_BASE_URL}/products/category/:category`,
    async ({ request, params }) => {
      await simulateDelay();

      const { category } = params;
      const url = new URL(request.url);
      const limit = getQueryParamInt(url, "limit", 10);
      const skip = getQueryParamInt(url, "skip", 0);
      const sortBy = getQueryParam(url, "sortBy");
      const order =
        (getQueryParam(url, "order", "asc") as "asc" | "desc") || "asc";
      const select = getQueryParam(url, "select");

      let products = db.products.getByCategory(category as string);
      products = sortProducts(products, sortBy, order);

      const total = products.length;
      products = products.slice(skip, skip + limit);
      products = selectFields(products, select);

      return HttpResponse.json({
        products,
        total,
        skip,
        limit,
      });
    },
  ),

  // ===========================================
  // GET /products/:id - Get single product
  // ===========================================
  http.get(`${API_BASE_URL}/products/:id`, async ({ params }) => {
    await simulateDelay();

    const id = parseInt(params.id as string, 10);
    const product = db.products.getById(id);

    if (!product) {
      return HttpResponse.json(
        { message: `Product with id '${id}' not found` },
        { status: 404 },
      );
    }

    return HttpResponse.json(product);
  }),

  // ===========================================
  // POST /products/add - Create a new product
  // ===========================================
  http.post(`${API_BASE_URL}/products/add`, async ({ request }) => {
    await simulateDelay();

    const body = (await request.json()) as {
      title: string;
      description: string;
      price: number;
      discountPercentage?: number;
      stock: number;
      sku: string;
      category: string;
    };

    const newProduct = db.products.create({
      title: body.title,
      description: body.description,
      price: body.price,
      discountPercentage: body.discountPercentage ?? 0,
      stock: body.stock,
      sku: body.sku,
      category: body.category,
    });

    return HttpResponse.json(newProduct, { status: 201 });
  }),

  // ===========================================
  // PUT /products/:id - Update a product
  // ===========================================
  http.put(`${API_BASE_URL}/products/:id`, async ({ params, request }) => {
    await simulateDelay();

    const id = parseInt(params.id as string, 10);
    const body = (await request.json()) as Partial<Product>;

    const updatedProduct = db.products.update(id, body);

    if (!updatedProduct) {
      return HttpResponse.json(
        { message: `Product with id '${id}' not found` },
        { status: 404 },
      );
    }

    return HttpResponse.json(updatedProduct);
  }),

  // ===========================================
  // DELETE /products/:id - Delete a product
  // ===========================================
  http.delete(`${API_BASE_URL}/products/:id`, async ({ params }) => {
    await simulateDelay();

    const id = parseInt(params.id as string, 10);
    const deletedProduct = db.products.delete(id);

    if (!deletedProduct) {
      return HttpResponse.json(
        { message: `Product with id '${id}' not found` },
        { status: 404 },
      );
    }

    // DummyJSON returns the deleted product with additional fields
    return HttpResponse.json({
      ...deletedProduct,
      isDeleted: true,
      deletedOn: new Date().toISOString(),
    });
  }),
];
