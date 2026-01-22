"use client";

import { diffChars } from "diff";
import type { CreateProductData } from "@/types/product";
import type { Category } from "@/types/product";

// Fields that should show full value comparison instead of character diff
const FULL_VALUE_FIELDS: Array<keyof CreateProductData> = [
  "category",
  "price",
  "stock",
  "discountPercentage",
];

interface ChangeComparisonProps {
  fieldName: keyof CreateProductData;
  currentValue: string | number | undefined;
  originalValue: string | number | undefined;
  isChanged: boolean;
  categories?: Category[];
}

// Helper to get display value for a field (e.g., category name instead of slug)
function getDisplayValue(
  fieldName: keyof CreateProductData,
  value: string | number | undefined,
  categories?: Category[],
): string {
  if (value === undefined || value === "") return "";

  if (fieldName === "category" && categories) {
    const category = categories.find((c) => c.slug === value);
    return category?.name ?? String(value);
  }

  if (fieldName === "price") {
    return `$${value}`;
  }

  if (fieldName === "discountPercentage") {
    return `${value}%`;
  }

  return String(value);
}

export function ChangeComparison({
  fieldName,
  currentValue,
  originalValue,
  isChanged,
  categories,
}: ChangeComparisonProps) {
  if (!isChanged) return null;

  // Use full value comparison for certain fields
  if (FULL_VALUE_FIELDS.includes(fieldName)) {
    const currentDisplay = getDisplayValue(fieldName, currentValue, categories);
    const originalDisplay = getDisplayValue(
      fieldName,
      originalValue,
      categories,
    );

    return (
      <div className="mt-1.5 flex items-center gap-2 text-xs">
        <span className="rounded-sm bg-rose-100 px-1.5 py-0.5 text-rose-600 line-through dark:bg-rose-900/40 dark:text-rose-300">
          {originalDisplay || "(empty)"}
        </span>
        <span className="text-muted-foreground">→</span>
        <span className="rounded-sm bg-emerald-100 px-1.5 py-0.5 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          {currentDisplay || "(empty)"}
        </span>
      </div>
    );
  }

  // Character-level diff for text fields (title, description, sku)
  const currentStr = String(currentValue ?? "");
  const originalStr = String(originalValue ?? "");
  const changes = diffChars(originalStr, currentStr);

  const renderInlineDiff = () => {
    return changes.map((part, index) => {
      if (part.added) {
        return (
          <span
            key={index}
            className="rounded-sm bg-emerald-100 px-0.5 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
          >
            {part.value}
          </span>
        );
      }
      if (part.removed) {
        return (
          <span
            key={index}
            className="rounded-sm bg-rose-100 px-0.5 text-rose-600 line-through decoration-rose-400 dark:bg-rose-900/40 dark:text-rose-300 dark:decoration-rose-500"
          >
            {part.value}
          </span>
        );
      }
      return (
        <span key={index} className="text-foreground/70">
          {part.value}
        </span>
      );
    });
  };

  return (
    <div className="mt-1.5 rounded-md border border-muted-foreground/20 bg-muted/50 px-2.5 py-2 font-mono text-xs leading-relaxed">
      {currentStr === "" && originalStr === "" ? (
        <span className="italic text-muted-foreground">(empty)</span>
      ) : (
        renderInlineDiff()
      )}
    </div>
  );
}
