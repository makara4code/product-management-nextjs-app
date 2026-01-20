"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Product, SortField, SortOrder } from "@/types/product";
import {
  SortButton,
  ProductTableRow,
  ProductTableSkeleton,
  TablePaginationFooter,
} from "./table";

const LG_BREAKPOINT = 1024;

interface ProductsTableProps {
  products: Product[];
  loading: boolean;
  selectedProducts: number[];
  toggleProductSelection: (id: number) => void;
  toggleAllProducts: () => void;
  confirmDelete: (id: number) => void;
  sortField: SortField | null;
  sortOrder: SortOrder;
  onSort: (field: SortField) => void;
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

export function ProductsTable({
  products,
  loading,
  selectedProducts,
  toggleProductSelection,
  toggleAllProducts,
  confirmDelete,
  sortField,
  sortOrder,
  onSort,
  page,
  limit,
  total,
  totalPages,
  onPageChange,
  onLimitChange,
}: ProductsTableProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const lgMediaQuery = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);
    setIsLargeScreen(lgMediaQuery.matches);

    const lgHandler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    lgMediaQuery.addEventListener("change", lgHandler);

    return () => {
      lgMediaQuery.removeEventListener("change", lgHandler);
    };
  }, []);

  const isAllSelected =
    !loading &&
    products.length > 0 &&
    products.every((p) => selectedProducts.includes(p.id));

  const isIndeterminate =
    !loading &&
    products.some((p) => selectedProducts.includes(p.id)) &&
    !products.every((p) => selectedProducts.includes(p.id));

  return (
    <div className="rounded-lg border bg-card overflow-hidden flex flex-col min-h-0">
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox
                  checked={isAllSelected}
                  indeterminate={isIndeterminate}
                  onCheckedChange={toggleAllProducts}
                  disabled={loading}
                />
              </TableHead>
              <TableHead>
                <SortButton
                  field="title"
                  currentField={sortField}
                  currentOrder={sortOrder}
                  onSort={onSort}
                >
                  Product
                </SortButton>
              </TableHead>
              {isLargeScreen && (
                <TableHead>
                  <SortButton
                    field="sku"
                    currentField={sortField}
                    currentOrder={sortOrder}
                    onSort={onSort}
                  >
                    SKU
                  </SortButton>
                </TableHead>
              )}
              <TableHead>
                <SortButton
                  field="category"
                  currentField={sortField}
                  currentOrder={sortOrder}
                  onSort={onSort}
                >
                  Category
                </SortButton>
              </TableHead>
              <TableHead>
                <SortButton
                  field="stock"
                  currentField={sortField}
                  currentOrder={sortOrder}
                  onSort={onSort}
                >
                  Stock
                </SortButton>
              </TableHead>
              <TableHead>
                <SortButton
                  field="price"
                  currentField={sortField}
                  currentOrder={sortOrder}
                  onSort={onSort}
                >
                  Price
                </SortButton>
              </TableHead>
              {isLargeScreen && (
                <TableHead>
                  <SortButton
                    field="createdAt"
                    currentField={sortField}
                    currentOrder={sortOrder}
                    onSort={onSort}
                  >
                    Added
                  </SortButton>
                </TableHead>
              )}
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <ProductTableSkeleton
                rowCount={limit || 10}
                isLargeScreen={isLargeScreen}
              />
            ) : products.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={isLargeScreen ? 8 : 6}
                  className="h-32 text-center text-muted-foreground"
                >
                  No products found.
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <ProductTableRow
                  key={product.id}
                  product={product}
                  isSelected={selectedProducts.includes(product.id)}
                  isLargeScreen={isLargeScreen}
                  onToggleSelection={toggleProductSelection}
                  onDelete={confirmDelete}
                />
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <TablePaginationFooter
        page={page}
        limit={limit}
        total={total}
        totalPages={totalPages}
        onPageChange={onPageChange}
        onLimitChange={onLimitChange}
      />
    </div>
  );
}
