"use client";

import { ProductForm } from "@/components/product-form";
import { useProductQuery } from "../../_hooks";
import { EditProductSkeleton } from "../../_components";

interface EditProductContentProps {
  id: string;
}

export function EditProductContent({ id }: EditProductContentProps) {
  const {
    data: product,
    isLoading: loading,
    error: queryError,
  } = useProductQuery(Number(id));

  const error =
    queryError instanceof Error
      ? queryError.message
      : queryError
        ? "Failed to fetch product"
        : null;

  if (loading) {
    return <EditProductSkeleton />;
  }

  if (error || !product) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Product not found</h2>
          <p className="text-muted-foreground">
            {error || "Unable to load product"}
          </p>
        </div>
      </div>
    );
  }

  return <ProductForm mode="edit" product={product} />;
}
