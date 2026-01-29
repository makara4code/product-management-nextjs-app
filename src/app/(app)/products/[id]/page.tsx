import { Suspense } from "react";
import { ProductViewContent } from "./product-view-content";
import { ProductViewSkeleton } from "../_components";

interface ProductViewPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductViewPage({ params }: ProductViewPageProps) {
  return (
    <Suspense fallback={<ProductViewSkeleton />}>
      {/* Pass params Promise directly to client component to use client-side cache */}
      <ProductViewContent params={params} />
    </Suspense>
  );
}
