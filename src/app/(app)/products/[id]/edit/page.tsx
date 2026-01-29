import { Suspense } from "react";
import { EditProductContent } from "./edit-product-content";
import { EditProductSkeleton } from "../../_components";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export default function EditProductPage({ params }: EditProductPageProps) {
  return (
    <Suspense fallback={<EditProductSkeleton />}>
      {/* Pass params Promise directly to client component to use client-side cache */}
      <EditProductContent params={params} />
    </Suspense>
  );
}
