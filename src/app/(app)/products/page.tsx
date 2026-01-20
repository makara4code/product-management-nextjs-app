import { Suspense } from "react";
import { ProductsContent } from "./products-content";
import { ProductsLoadingSkeleton } from "./_components";

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoadingSkeleton />}>
      <ProductsContent />
    </Suspense>
  );
}
