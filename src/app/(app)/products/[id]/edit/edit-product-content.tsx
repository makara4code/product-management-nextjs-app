"use client";

import { useParams } from "next/navigation";
import { ProductForm } from "@/components/product-form";
import { useProductQuery } from "../../_hooks";
import { EditProductSkeleton } from "../../_components";

export function EditProductContent() {
  // Use client-side params hook - no server round-trip needed
  const params = useParams<{ id: string }>();
  const id = params.id;

  // useQuery checks cache first - renders instantly if data is cached
  // No Suspense boundary needed, we handle loading state manually
  const { data: product } = useProductQuery(Number(id));

  // Show skeleton only when data is not in cache
  if (!product) {
    return <EditProductSkeleton />;
  }

  return <ProductForm mode="edit" product={product} />;
}
