import { Suspense } from "react";
import { ProductForm } from "@/components/product-form";
import { EditProductSkeleton } from "../_components";

export default function NewProductPage() {
  return (
    <Suspense fallback={<EditProductSkeleton />}>
      <ProductForm mode="create" />
    </Suspense>
  );
}
