import { Suspense } from "react";
import { EditProductContent } from "./edit-product-content";
import { EditProductSkeleton } from "../../_components";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<EditProductSkeleton />}>
      <EditProductContent id={id} />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
