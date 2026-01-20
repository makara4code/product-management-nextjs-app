"use client";

import Link from "next/link";
import { Pencil, Trash2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Pagination } from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Product } from "@/lib/api/products";

const limitOptions = [5, 10, 20, 50, 100] as const;

interface VirtualizedCardGridProps {
  products: Product[];
  loading: boolean;
  selectedProducts: number[];
  toggleProductSelection: (id: number) => void;
  confirmDelete: (id: number) => void;
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function ProductCard({
  product,
  isSelected,
  onToggleSelection,
  onDelete,
}: {
  product: Product;
  isSelected: boolean;
  onToggleSelection: () => void;
  onDelete: () => void;
}) {
  return (
    <Card className="overflow-hidden group pt-0 flex flex-col">
      <div className="relative">
        <div className="aspect-4/3 overflow-hidden bg-muted flex items-center justify-center">
          {product.thumbnail ? (
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
          ) : null}
          <Package
            className={`h-12 w-12 text-muted-foreground ${product.thumbnail ? "hidden" : ""}`}
          />
        </div>
        <div className="absolute top-2 left-2">
          <Checkbox
            checked={isSelected}
            onCheckedChange={onToggleSelection}
            className="bg-background"
          />
        </div>
        <div className="absolute top-2 right-2 flex gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" className="h-8 w-8" asChild>
            <Link href={`/products/${product.id}/edit`}>
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Link>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </div>
      <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <div>
            <Link
              href={`/products/${product.id}`}
              className="font-medium line-clamp-1 hover:underline text-sm sm:text-base"
            >
              {product.title}
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground capitalize">
              {product.category?.replace(/-/g, " ")}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold text-primary text-sm sm:text-base">
              {formatPrice(product.price)}
            </span>
            <Badge
              variant={
                product.stock > 10
                  ? "secondary"
                  : product.stock > 0
                    ? "outline"
                    : "destructive"
              }
              className="text-xs shrink-0"
            >
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </Badge>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="truncate">SKU: {product.sku || product.id}</span>
            <span className="shrink-0 ml-2">
              {product.meta?.createdAt
                ? formatDate(product.meta.createdAt)
                : "-"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function VirtualizedCardGrid({
  products,
  loading,
  selectedProducts,
  toggleProductSelection,
  confirmDelete,
  page,
  limit,
  total,
  totalPages,
  onPageChange,
  onLimitChange,
}: VirtualizedCardGridProps) {
  const renderSkeletonCards = () => (
    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-4">
      {Array.from({ length: limit || 10 }).map((_, index) => (
        <Card key={index} className="overflow-hidden pt-0">
          <Skeleton className="aspect-4/3 w-full" />
          <CardContent className="p-3 sm:p-4 space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <div className="flex justify-between">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  if (products.length === 0 && !loading) {
    return (
      <div className="flex flex-col min-h-76">
        <div className="flex-1 flex items-center justify-center rounded-lg border bg-card">
          <p className="text-muted-foreground">No products found.</p>
        </div>
        <div className="shrink-0 border-t bg-background px-3 py-3 md:px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <p className="text-sm text-muted-foreground">Showing 0 of 0</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-76">
      <div className="overflow-auto">
        {loading ? (
          renderSkeletonCards()
        ) : (
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isSelected={selectedProducts.includes(product.id)}
                onToggleSelection={() => toggleProductSelection(product.id)}
                onDelete={() => confirmDelete(product.id)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="shrink-0 border-t bg-background px-3 py-3 md:px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <p className="text-sm text-muted-foreground">
              Showing {total === 0 ? 0 : (page - 1) * limit + 1}-
              {Math.min(page * limit, total)} of {total}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">per page:</span>
              <Select
                value={String(limit)}
                onValueChange={(value) => onLimitChange(Number(value))}
              >
                <SelectTrigger className="w-fit">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent align="end">
                  {limitOptions.map((option) => (
                    <SelectItem key={option} value={String(option)}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}
