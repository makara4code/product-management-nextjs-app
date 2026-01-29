import { ProductViewContent } from "./product-view-content";

// Fully client-side page - no async server component
// This allows client-side navigation to use TanStack Query cache immediately
// loading.tsx provides Suspense boundary for initial load only
export default function ProductViewPage() {
  return <ProductViewContent />;
}
