"use client";

import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import type { SortField, SortOrder } from "@/types/product";

interface SortButtonProps {
  field: SortField;
  currentField: SortField | null;
  currentOrder: SortOrder;
  onSort: (field: SortField) => void;
  children: React.ReactNode;
}

export function SortButton({
  field,
  currentField,
  currentOrder,
  onSort,
  children,
}: SortButtonProps) {
  const isActive = currentField === field;

  return (
    <button
      type="button"
      onClick={() => onSort(field)}
      className="flex items-center gap-1 hover:text-foreground transition-colors -ml-2 px-2 py-1 rounded"
    >
      {children}
      {isActive ? (
        currentOrder === "asc" ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )
      ) : (
        <ChevronsUpDown className="h-4 w-4 opacity-50" />
      )}
    </button>
  );
}
