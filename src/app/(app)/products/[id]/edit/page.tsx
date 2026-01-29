import { EditProductContent } from "./edit-product-content";

// Fully client-side page - no async server component
// This allows client-side navigation to use TanStack Query cache immediately
// loading.tsx provides Suspense boundary for initial load only
export default function EditProductPage() {
  return <EditProductContent />;
}
