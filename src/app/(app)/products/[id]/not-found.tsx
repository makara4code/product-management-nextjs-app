import Link from "next/link";
import { Package, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <Package className="h-10 w-10 text-muted-foreground" />
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p className="text-muted-foreground max-w-md">
          The product you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
      </div>

      <Button asChild size="lg">
        <Link href="/products">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </Button>
    </div>
  );
}
