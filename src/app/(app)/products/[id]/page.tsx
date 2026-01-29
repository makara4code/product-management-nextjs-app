import { Suspense } from "react";
import { ProductViewContent } from "./product-view-content";
import { ProductViewSkeleton } from "../_components";

interface ProductViewPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductViewPage({
  params,
}: ProductViewPageProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<ProductViewSkeleton />}>
      <ProductViewContent id={id} />
    </Suspense>
  );
}
