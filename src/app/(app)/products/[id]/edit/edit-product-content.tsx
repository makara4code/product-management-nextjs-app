"use client";

import { ProductForm } from "@/components/product-form";
import { useProductSuspenseQuery } from "../../_hooks";

interface EditProductContentProps {
  id: string;
}

export function EditProductContent({ id }: EditProductContentProps) {
  // useSuspenseQuery: suspends when loading, returns immediately when cached
  const { data: product } = useProductSuspenseQuery(Number(id));

  return <ProductForm mode="edit" product={product} />;
}
