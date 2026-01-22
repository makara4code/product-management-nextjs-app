"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { parseAsBoolean, useQueryState } from "nuqs";
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
import {
  getStorageKey,
  loadDraftFromStorage,
  saveDraftToStorage,
  clearDraftFromStorage,
} from "./form-draft-storage";

interface UseProductFormProps {
  mode: "create" | "edit";
  product?: Product;
}

const DEFAULT_FORM_DATA: CreateProductData = {
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  stock: 0,
  sku: "",
  category: "",
};

function getInitialFormData(
  mode: "create" | "edit",
  product?: Product,
): CreateProductData {
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

  return DEFAULT_FORM_DATA;
}

export function useProductForm({ mode, product }: UseProductFormProps) {
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

  const [formData, setFormData] = useState<CreateProductData>(() =>
    getInitialFormData(mode, product),
  );

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

  // Handle cancel - go back in history for edit mode, go to /products for create mode
  const handleCancel = useCallback(() => {
    if (hasChanges && mode === "edit") {
      setPendingNavigation("__back__");
      setShowDiscardDialog(true);
    } else if (mode === "edit") {
      router.back();
    } else {
      router.push("/products");
    }
  }, [hasChanges, mode, router]);

  const confirmDiscard = useCallback(() => {
    setShowDiscardDialog(false);
    clearDraftFromStorage(storageKey);
    if (pendingNavigation === "__back__") {
      router.back();
    } else if (pendingNavigation) {
      router.push(pendingNavigation);
    }
  }, [storageKey, pendingNavigation, router]);

  const cancelDiscard = useCallback(() => {
    setShowDiscardDialog(false);
    setPendingNavigation(null);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    },
    [fieldErrors],
  );

  const handleCategoryChange = useCallback(
    (value: string) => {
      // Clear category error when user selects
      if (fieldErrors.category) {
        setFieldErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.category;
          return newErrors;
        });
      }
      setFormData((prev) => ({ ...prev, category: value }));
    },
    [fieldErrors.category],
  );

  const validateForm = useCallback((): boolean => {
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
  }, [mode, formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
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
        // Go back to previous page for edit mode, go to /products for create mode
        if (mode === "edit") {
          router.back();
        } else {
          router.push("/products");
        }
      } catch (err) {
        setIsSubmitting(false);
        setError(err instanceof Error ? err.message : "Failed to save product");
      }
    },
    [
      loading,
      validateForm,
      mode,
      product,
      formData,
      createMutation,
      updateMutation,
      storageKey,
      router,
    ],
  );

  // Helper to check if a field has changed
  const isFieldChanged = useCallback(
    (fieldName: keyof CreateProductData) =>
      showChangesComparison && changedFields.has(fieldName),
    [showChangesComparison, changedFields],
  );

  // Helper to get original value for display
  const getOriginalValue = useCallback(
    (fieldName: keyof CreateProductData): string | number | undefined =>
      originalFormData?.[fieldName],
    [originalFormData],
  );

  const title = mode === "create" ? "Add Product" : "Edit Product";
  const submitLabel = mode === "create" ? "Add Product" : "Save Product";

  return {
    // Form data
    formData,
    setFormData,
    originalFormData,

    // Form state
    error,
    fieldErrors,
    loading,
    hasChanges,
    changedFields,

    // Categories
    categories,
    categoriesLoading,

    // Dialog state
    showDiscardDialog,
    setShowDiscardDialog,

    // Changes comparison
    showChangesComparison,
    setShowChangesComparison,

    // Navigation
    handleCancel,
    handleNavigate,
    confirmDiscard,
    cancelDiscard,

    // Form handlers
    handleChange,
    handleCategoryChange,
    handleSubmit,

    // Change tracking helpers
    isFieldChanged,
    getOriginalValue,

    // Labels
    title,
    submitLabel,
    mode,
  };
}
