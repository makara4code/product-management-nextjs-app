import { Suspense } from "react";
import { EditProductContent } from "./edit-product-content";
import { EditProductSkeleton } from "../../_components";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

async function EditProductLoader({ params }: EditProductPageProps) {
  const { id } = await params;
  return <EditProductContent id={id} />;
}

export default function EditProductPage({ params }: EditProductPageProps) {
  return (
    <Suspense fallback={<EditProductSkeleton />}>
      <EditProductLoader params={params} />
    </Suspense>
  );
}
