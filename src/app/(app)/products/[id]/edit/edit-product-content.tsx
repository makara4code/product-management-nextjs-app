"use client";

import { use } from "react";
import { ProductForm } from "@/components/product-form";
import { useProductSuspenseQuery } from "../../_hooks";

interface EditProductContentProps {
  params: Promise<{ id: string }>;
}

export function EditProductContent({ params }: EditProductContentProps) {
  // Use React 19's use() hook to resolve params on the client
  // This allows the component to use client-side TanStack Query cache
  const { id } = use(params);

  // useSuspenseQuery: suspends when loading, returns immediately when cached
  const { data: product } = useProductSuspenseQuery(Number(id));

  return <ProductForm mode="edit" product={product} />;
}
