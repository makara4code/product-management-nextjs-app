import { Suspense } from "react";
import { ProductViewContent } from "./product-view-content";
import { ProductViewSkeleton } from "../_components";

interface ProductViewPageProps {
  params: Promise<{ id: string }>;
}

async function ProductViewLoader({ params }: ProductViewPageProps) {
  const { id } = await params;
  return <ProductViewContent id={id} />;
}

export default function ProductViewPage({ params }: ProductViewPageProps) {
  return (
    <Suspense fallback={<ProductViewSkeleton />}>
      <ProductViewLoader params={params} />
    </Suspense>
  );
}
