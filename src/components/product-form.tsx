"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, GitCompare } from "lucide-react";
import { diffChars } from "diff";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  useCategoriesQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} from "@/hooks/queries/use-products-query";
import type { Product, CreateProductData } from "@/types/product";
import {
  createProductSchema,
  updateProductSchema,
  getFieldErrors,
} from "@/lib/validations/product";
import { parseAsBoolean, useQueryState } from "nuqs";

interface ProductFormProps {
  mode: "create" | "edit";
  product?: Product;
}

// localStorage key prefix for form drafts
const FORM_DRAFT_KEY_PREFIX = "product-form-draft";

function getStorageKey(mode: "create" | "edit", productId?: number): string {
  return `${FORM_DRAFT_KEY_PREFIX}-${mode === "edit" && productId ? productId : "new"}`;
}

function loadDraftFromStorage(storageKey: string): CreateProductData | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      return JSON.parse(saved) as CreateProductData;
    }
  } catch {
    // Ignore parse errors
  }
  return null;
}

function saveDraftToStorage(storageKey: string, data: CreateProductData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
  } catch {
    // Ignore storage errors (e.g., quota exceeded)
  }
}

function clearDraftFromStorage(storageKey: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(storageKey);
  } catch {
    // Ignore errors
  }
}

export function ProductForm({ mode, product }: ProductFormProps) {
  const router = useRouter();
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategoriesQuery();
  const createMutation = useCreateProductMutation();
  const updateMutation = useUpdateProductMutation();

  // Storage key for this form instance
  const storageKey = useMemo(
    () => getStorageKey(mode, product?.id),
    [mode, product?.id],
  );

  const [formData, setFormData] = useState<CreateProductData>(() => {
    // First, try to load from localStorage (draft)
    const draft = loadDraftFromStorage(getStorageKey(mode, product?.id));
    if (draft) {
      return draft;
    }

    // Otherwise, use product data or defaults
    if (product) {
      return {
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage || 0,
        stock: product.stock,
        sku: product.sku || "",
        category: product.category,
      };
    }
    return {
      title: "",
      description: "",
      price: 0,
      discountPercentage: 0,
      stock: 0,
      sku: "",
      category: "",
    };
  });

  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDiscardDialog, setShowDiscardDialog] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(
    null,
  );

  const loading =
    isSubmitting || createMutation.isPending || updateMutation.isPending;

  // Compute original form data from product prop (stable reference for comparison)
  const originalFormData = useMemo<CreateProductData | null>(() => {
    if (!product) return null;
    return {
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage || 0,
      stock: product.stock,
      sku: product.sku || "",
      category: product.category,
    };
  }, [product]);

  // Track if form has been initialized from product data
  const [isFormInitialized, setIsFormInitialized] = useState(!!product);

  // Sync form data with product when it loads (only if no draft exists)
  useEffect(() => {
    if (originalFormData) {
      const existingDraft = loadDraftFromStorage(storageKey);
      if (!existingDraft) {
        setFormData(originalFormData);
      }
      setIsFormInitialized(true);
    }
  }, [originalFormData, storageKey]);

  // Save form data to localStorage when it changes (debounced)
  useEffect(() => {
    if (!isFormInitialized) return;

    const timeoutId = setTimeout(() => {
      saveDraftToStorage(storageKey, formData);
    }, 500); // Debounce saves by 500ms

    return () => clearTimeout(timeoutId);
  }, [formData, storageKey, isFormInitialized]);

  // Check if form has unsaved changes (only meaningful in edit mode)
  const hasChanges = useMemo(() => {
    if (mode === "create") return true; // Always allow save in create mode
    if (!originalFormData || !isFormInitialized) return false;

    return JSON.stringify(formData) !== JSON.stringify(originalFormData);
  }, [mode, formData, originalFormData, isFormInitialized]);

  // Track which fields have changed (for highlighting)
  const changedFields = useMemo(() => {
    if (!originalFormData || mode === "create") return new Set<string>();

    const changed = new Set<string>();
    (Object.keys(formData) as Array<keyof CreateProductData>).forEach((key) => {
      if (formData[key] !== originalFormData[key]) {
        changed.add(key);
      }
    });
    return changed;
  }, [formData, originalFormData, mode]);

  // Toggle for showing changes comparison (persisted in URL)
  const [showChangesComparison, setShowChangesComparison] = useQueryState(
    "diff",
    parseAsBoolean.withDefault(false),
  );

  // Note: No beforeunload handler needed - localStorage persists form data on refresh

  // Handle navigation with unsaved changes
  const handleNavigate = useCallback(
    (href: string) => {
      if (hasChanges && mode === "edit") {
        setPendingNavigation(href);
        setShowDiscardDialog(true);
      } else {
        router.push(href);
      }
    },
    [hasChanges, mode, router],
  );

  const confirmDiscard = () => {
    setShowDiscardDialog(false);
    clearDraftFromStorage(storageKey);
    if (pendingNavigation) {
      router.push(pendingNavigation);
    }
  };

  const cancelDiscard = () => {
    setShowDiscardDialog(false);
    setPendingNavigation(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "stock" || name === "discountPercentage"
          ? Number(value)
          : value,
    }));
  };

  const handleCategoryChange = (value: string) => {
    // Clear category error when user selects
    if (fieldErrors.category) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.category;
        return newErrors;
      });
    }
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const validateForm = (): boolean => {
    const schema =
      mode === "create" ? createProductSchema : updateProductSchema;
    const result = schema.safeParse(formData);

    if (!result.success) {
      const errors = getFieldErrors(result.error);
      setFieldErrors(errors);
      return false;
    }

    setFieldErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (loading) {
      return;
    }

    setError(null);

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);
      if (mode === "create") {
        await createMutation.mutateAsync(formData);
      } else if (product) {
        await updateMutation.mutateAsync({ id: product.id, data: formData });
      }
      // Clear draft on successful save
      clearDraftFromStorage(storageKey);
      // Keep isSubmitting true to prevent button click during redirect
      router.push("/products");
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : "Failed to save product");
    }
  };

  const title = mode === "create" ? "Add Product" : "Edit Product";
  const submitLabel = mode === "create" ? "Add Product" : "Save Product";

  // Helper to check if a field has changed
  const isFieldChanged = (fieldName: keyof CreateProductData) =>
    showChangesComparison && changedFields.has(fieldName);

  // Helper to get original value for display
  const getOriginalValue = (fieldName: keyof CreateProductData) =>
    originalFormData?.[fieldName];

  // Fields that should show full value comparison instead of character diff
  const fullValueFields: Array<keyof CreateProductData> = [
    "category",
    "price",
    "stock",
    "discountPercentage",
  ];

  // Helper to get display value for a field (e.g., category name instead of slug)
  const getDisplayValue = (
    fieldName: keyof CreateProductData,
    value: string | number | undefined,
  ): string => {
    if (value === undefined || value === "") return "";

    if (fieldName === "category") {
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
  };

  // Component to render change comparison
  const ChangeComparison = ({
    fieldName,
  }: {
    fieldName: keyof CreateProductData;
  }) => {
    if (!isFieldChanged(fieldName)) return null;

    const currentValue = formData[fieldName];
    const originalValue = getOriginalValue(fieldName);

    // Use full value comparison for certain fields
    if (fullValueFields.includes(fieldName)) {
      const currentDisplay = getDisplayValue(fieldName, currentValue);
      const originalDisplay = getDisplayValue(fieldName, originalValue);

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
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-3 md:gap-6 md:p-6 max-w-300 mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <button
          type="button"
          onClick={() => handleNavigate("/products")}
          className="text-primary hover:underline"
        >
          Product
        </button>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground">{title}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-2 md:gap-3">
        {/* Compare Changes Toggle - only show in edit mode when there are changes */}
        {mode === "edit" && hasChanges && (
          <Button
            variant={showChangesComparison ? "secondary" : "outline"}
            size="sm"
            className="md:size-default"
            onClick={() => setShowChangesComparison(!showChangesComparison)}
            title="Toggle changes comparison"
          >
            <GitCompare className="mr-1 h-4 w-4 md:mr-2" />
            <span className="hidden sm:inline">
              {showChangesComparison ? "Hide Changes" : "Show Changes"}
            </span>
            <span className="sm:hidden">Diff</span>
          </Button>
        )}
        <Button
          variant="outline"
          size="sm"
          className="md:size-default"
          onClick={() => handleNavigate("/products")}
        >
          <span className="mr-1 md:mr-2">×</span>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={loading || (mode === "edit" && !hasChanges)}
          size="sm"
          className="md:size-default"
        >
          <span className="mr-1 md:mr-2">+</span>
          {loading ? "Saving..." : submitLabel}
        </Button>
      </div>

      {error && (
        <div className="rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:gap-6 lg:grid-cols-3"
      >
        {/* Main Content */}
        <div className="space-y-4 md:space-y-6 lg:col-span-2">
          {/* General Information */}
          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Product Name</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Type product name here..."
                  value={formData.title}
                  onChange={handleChange}
                  className={fieldErrors.title ? "border-destructive" : ""}
                />
                <ChangeComparison fieldName="title" />
                {fieldErrors.title && (
                  <p className="text-sm text-destructive">
                    {fieldErrors.title}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Type product description here..."
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className={
                    fieldErrors.description ? "border-destructive" : ""
                  }
                />
                <ChangeComparison fieldName="description" />
                {fieldErrors.description && (
                  <p className="text-sm text-destructive">
                    {fieldErrors.description}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="price">Base Price</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Type base price here..."
                    value={formData.price || ""}
                    onChange={handleChange}
                    className={`pl-7 ${fieldErrors.price ? "border-destructive" : ""}`}
                  />
                </div>
                <ChangeComparison fieldName="price" />
                {fieldErrors.price && (
                  <p className="text-sm text-destructive">
                    {fieldErrors.price}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="discountPercentage">
                  Discount Percentage (%)
                </Label>
                <div className="relative">
                  <Input
                    id="discountPercentage"
                    name="discountPercentage"
                    type="number"
                    step="0.01"
                    min="0"
                    max="100"
                    placeholder="Type discount percentage..."
                    value={formData.discountPercentage || ""}
                    onChange={handleChange}
                    className={
                      fieldErrors.discountPercentage ? "border-destructive" : ""
                    }
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    %
                  </span>
                </div>
                <ChangeComparison fieldName="discountPercentage" />
                {fieldErrors.discountPercentage && (
                  <p className="text-sm text-destructive">
                    {fieldErrors.discountPercentage}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Inventory */}
          <Card>
            <CardHeader>
              <CardTitle>Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="sku">SKU</Label>
                  <Input
                    id="sku"
                    name="sku"
                    placeholder="Type product SKU here..."
                    value={formData.sku}
                    onChange={handleChange}
                    className={fieldErrors.sku ? "border-destructive" : ""}
                  />
                  <ChangeComparison fieldName="sku" />
                  {fieldErrors.sku && (
                    <p className="text-sm text-destructive">
                      {fieldErrors.sku}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Quantity</Label>
                  <Input
                    id="stock"
                    name="stock"
                    type="number"
                    min="0"
                    placeholder="Type product quantity here..."
                    value={formData.stock || ""}
                    onChange={handleChange}
                    className={fieldErrors.stock ? "border-destructive" : ""}
                  />
                  <ChangeComparison fieldName="stock" />
                  {fieldErrors.stock && (
                    <p className="text-sm text-destructive">
                      {fieldErrors.stock}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 md:space-y-6">
          {/* Category */}
          <Card>
            <CardHeader>
              <CardTitle>Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="category">Product Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={handleCategoryChange}
                  disabled={categoriesLoading}
                >
                  <SelectTrigger
                    className={`w-full ${fieldErrors.category ? "border-destructive" : ""}`}
                  >
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {categories.map((category) => (
                      <SelectItem key={category.slug} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <ChangeComparison fieldName="category" />
                {fieldErrors.category && (
                  <p className="text-sm text-destructive">
                    {fieldErrors.category}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </form>

      {/* Discard Changes Dialog */}
      <AlertDialog open={showDiscardDialog} onOpenChange={setShowDiscardDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard changes?</AlertDialogTitle>
            <AlertDialogDescription>
              You have unsaved changes. Are you sure you want to leave this
              page? Your changes will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelDiscard}>
              Keep editing
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmDiscard}>
              Discard changes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
