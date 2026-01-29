"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ChevronRight,
  Pencil,
  Trash2,
  Package,
  Tag,
  Layers,
  Calendar,
} from "lucide-react";
import { useProductQuery, useDeleteProductMutation } from "../_hooks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatDate, formatPrice, calculateDiscountedPrice } from "../_lib";
import { ProductViewSkeleton } from "../_components";

export function ProductViewContent() {
  // Use client-side params hook - no server round-trip needed
  const params = useParams<{ id: string }>();
  const id = params.id;

  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // useQuery checks cache first - renders instantly if data is cached
  // No Suspense boundary needed, we handle loading state manually
  const { data: product } = useProductQuery(Number(id));

  const deleteProductMutation = useDeleteProductMutation();

  // Set selected image when product loads - must be before early return
  useEffect(() => {
    if (product?.thumbnail) {
      setSelectedImage(product.thumbnail);
    }
  }, [product?.thumbnail]);

  // Show skeleton only when data is not in cache
  if (!product) {
    return <ProductViewSkeleton />;
  }

  const handleDelete = async () => {
    try {
      await deleteProductMutation.mutateAsync(product.id);
      router.push("/products");
    } catch {
      setDeleteDialogOpen(false);
    }
  };

  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discountPercentage,
  );

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 md:p-6 max-w-300">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <Link href="/products" className="text-primary hover:underline">
            Product
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground truncate max-w-50">
            {product.title}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2">
          <Button
            variant="outline"
            asChild
            className="gap-2 flex-1 sm:flex-none"
          >
            <Link href={`/products/${product.id}/edit`}>
              <Pencil className="h-4 w-4" />
              Edit
            </Link>
          </Button>
          <Button
            variant="destructive"
            className="gap-2 flex-1 sm:flex-none"
            onClick={() => setDeleteDialogOpen(true)}
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-square overflow-hidden rounded-lg border bg-white relative">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                  sizes="320px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                  No image
                </div>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image: string) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setSelectedImage(image)}
                    className={`h-14 w-14 shrink-0 overflow-hidden rounded-md border-2 bg-white relative ${
                      selectedImage === image
                        ? "border-primary"
                        : "border-muted hover:border-muted-foreground/50"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={product.title}
                      fill
                      className="object-contain p-1"
                      sizes="56px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            {/* Title and Badge */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-xl font-bold md:text-2xl">
                  {product.title}
                </h1>
                <Badge
                  variant={
                    product.stock > 10
                      ? "secondary"
                      : product.stock > 0
                        ? "outline"
                        : "destructive"
                  }
                  className="shrink-0"
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground capitalize">
                {product.category?.replace(/-/g, " ")}
              </p>
            </div>

            {/* Price */}
            <div>
              {discountedPrice ? (
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(discountedPrice)}
                  </span>
                  <span className="text-base text-muted-foreground line-through">
                    {formatPrice(product.price)}
                  </span>
                  <Badge variant="destructive" className="text-xs">
                    -{product.discountPercentage?.toFixed(2)}%
                  </Badge>
                </div>
              ) : (
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="mb-1.5 text-sm font-semibold">Description</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Product Details - Compact Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-lg border bg-muted/30 p-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Tag className="h-3.5 w-3.5" />
                  SKU
                </div>
                <p className="text-sm font-medium truncate">
                  {product.sku || product.id}
                </p>
              </div>

              <div className="rounded-lg border bg-muted/30 p-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Layers className="h-3.5 w-3.5" />
                  Stock
                </div>
                <p className="text-sm font-medium">{product.stock} units</p>
              </div>

              <div className="rounded-lg border bg-muted/30 p-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Package className="h-3.5 w-3.5" />
                  Category
                </div>
                <p className="text-sm font-medium capitalize truncate">
                  {product.category?.replace(/-/g, " ")}
                </p>
              </div>

              <div className="rounded-lg border bg-muted/30 p-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Added
                </div>
                <p className="text-sm font-medium">
                  {product.meta?.createdAt
                    ? formatDate(product.meta.createdAt)
                    : "-"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{product.title}&quot;? This
              action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              disabled={deleteProductMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleteProductMutation.isPending}
            >
              {deleteProductMutation.isPending ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
