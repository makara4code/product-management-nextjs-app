/**
 * Product validation schemas using Zod
 */

import { z } from "zod";

/**
 * Schema for creating a new product
 */
export const createProductSchema = z.object({
  title: z
    .string({ error: "Product name is required" })
    .min(1, "Product name is required")
    .max(200, "Product name must be less than 200 characters"),
  description: z
    .string({ error: "Description is required" })
    .min(1, "Description is required")
    .max(2000, "Description must be less than 2000 characters"),
  price: z
    .number({ error: "Price must be a number" })
    .positive("Price must be greater than 0")
    .max(1000000, "Price must be less than 1,000,000"),
  discountPercentage: z
    .number({ error: "Discount must be a number" })
    .min(0, "Discount must be at least 0%")
    .max(100, "Discount cannot exceed 100%")
    .optional()
    .default(0),
  stock: z
    .number({ error: "Stock must be a number" })
    .int("Stock must be a whole number")
    .min(0, "Stock cannot be negative")
    .max(100000, "Stock must be less than 100,000"),
  sku: z
    .string({ error: "SKU is required" })
    .min(1, "SKU is required")
    .max(50, "SKU must be less than 50 characters")
    .regex(
      /^[A-Za-z0-9-_]+$/,
      "SKU can only contain letters, numbers, hyphens, and underscores",
    ),
  category: z
    .string({ error: "Category is required" })
    .min(1, "Category is required"),
});

/**
 * Schema for updating an existing product (all fields optional)
 */
export const updateProductSchema = createProductSchema.partial();

/**
 * Type for create product form data
 */
export type CreateProductInput = z.infer<typeof createProductSchema>;

/**
 * Type for update product form data
 */
export type UpdateProductInput = z.infer<typeof updateProductSchema>;

/**
 * Validate create product data
 */
export function validateCreateProduct(data: unknown): {
  success: boolean;
  data?: CreateProductInput;
  errors?: z.core.$ZodError;
} {
  const result = createProductSchema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, errors: result.error };
}

/**
 * Validate update product data
 */
export function validateUpdateProduct(data: unknown): {
  success: boolean;
  data?: UpdateProductInput;
  errors?: z.core.$ZodError;
} {
  const result = updateProductSchema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, errors: result.error };
}

/**
 * Get error message for a specific field
 */
export function getFieldError(
  errors: z.core.$ZodError | undefined,
  field: string,
): string | undefined {
  if (!errors) return undefined;
  const fieldError = errors.issues.find((err) => err.path[0] === field);
  return fieldError?.message;
}

/**
 * Get all field errors as a record
 */
export function getFieldErrors(
  errors: z.core.$ZodError | undefined,
): Record<string, string> {
  if (!errors) return {};
  const fieldErrors: Record<string, string> = {};
  for (const err of errors.issues) {
    const field = err.path[0] as string;
    if (!fieldErrors[field]) {
      fieldErrors[field] = err.message;
    }
  }
  return fieldErrors;
}
