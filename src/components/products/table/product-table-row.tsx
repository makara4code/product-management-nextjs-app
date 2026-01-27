"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import { ProductImage } from "@/components/products/product-image";
import type { Product } from "@/types/product";
import { formatDate, formatPrice } from "@/app/(app)/products/_lib";

type PrefetchHandlers = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
};

interface ProductTableRowProps {
  product: Product;
  isSelected: boolean;
  isLargeScreen: boolean;
  onToggleSelection: (id: number) => void;
  onDelete: (id: number) => void;
  prefetchHandlers?: PrefetchHandlers;
}

export function ProductTableRow({
  product,
  isSelected,
  isLargeScreen,
  onToggleSelection,
  onDelete,
  prefetchHandlers,
}: ProductTableRowProps) {
  return (
    <TableRow className={isSelected ? "bg-[#F9F9FC] dark:bg-muted/50" : ""}>
      <TableCell>
        <Checkbox
          checked={isSelected}
          onCheckedChange={() => onToggleSelection(product.id)}
        />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2 md:gap-3">
          <ProductImage src={product.thumbnail} alt={product.title} size="sm" />
          <div className="min-w-0">
            <Link
              href={`/products/${product.id}`}
              className="font-medium hover:underline block truncate text-sm md:text-base"
              {...prefetchHandlers}
            >
              {product.title}
            </Link>
            <div className="text-xs md:text-sm text-muted-foreground">
              {product.stock > 1 ? `${product.stock} Variants` : "1 Variant"}
            </div>
          </div>
        </div>
      </TableCell>
      {isLargeScreen && (
        <TableCell>
          <Link
            href={`/products/${product.id}`}
            className="text-primary hover:underline"
            {...prefetchHandlers}
          >
            {product.sku || product.id}
          </Link>
        </TableCell>
      )}
      <TableCell>
        <span className="capitalize text-sm truncate block max-w-[100px] lg:max-w-none">
          {product.category?.replace(/-/g, " ")}
        </span>
      </TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>{formatPrice(product.price)}</TableCell>
      {isLargeScreen && (
        <TableCell>
          {product.meta?.createdAt ? formatDate(product.meta.createdAt) : "-"}
        </TableCell>
      )}
      <TableCell>
        <div className="flex items-center justify-end gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
            <Link href={`/products/${product.id}/edit`}>
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onDelete(product.id)}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
