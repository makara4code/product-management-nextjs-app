"use client";

import Link from "next/link";
import { Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductsActionsProps {
  onExport?: () => void;
}

export function ProductsActions({ onExport }: ProductsActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        className="gap-1.5 flex-1 sm:flex-none"
        onClick={onExport}
      >
        <Download className="h-4 w-4" />
        <span className="hidden sm:inline">Export</span>
      </Button>
      <Button asChild size="sm" className="gap-1.5 flex-1 sm:flex-none">
        <Link href="/products/new">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Add Product</span>
          <span className="sm:hidden">Add</span>
        </Link>
      </Button>
    </div>
  );
}
