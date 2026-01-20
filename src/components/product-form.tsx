"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
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

interface ProductFormProps {
  mode: "create" | "edit";
  product?: Product;
}

export function ProductForm({ mode, product }: ProductFormProps) {
  const router = useRouter();
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategoriesQuery();
  const createMutation = useCreateProductMutation();
  const updateMutation = useUpdateProductMutation();

  const [formData, setFormData] = useState<CreateProductData>({
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    stock: 0,
    sku: "",
    category: "",
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

  // Store original form data for comparison (only in edit mode)
  const [originalFormData, setOriginalFormData] =
    useState<CreateProductData | null>(null);

  useEffect(() => {
    if (product) {
      const productData = {
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage || 0,
        stock: product.stock,
        sku: product.sku || "",
        category: product.category,
      };
      setFormData(productData);
      setOriginalFormData(productData);
    }
  }, [product]);

  // Check if form has unsaved changes (only meaningful in edit mode)
  const hasChanges = useMemo(() => {
    if (mode === "create") return true; // Always allow save in create mode
    if (!originalFormData) return false;

    return (
      formData.title !== originalFormData.title ||
      formData.description !== originalFormData.description ||
      formData.price !== originalFormData.price ||
      formData.discountPercentage !== originalFormData.discountPercentage ||
      formData.stock !== originalFormData.stock ||
      formData.sku !== originalFormData.sku ||
      formData.category !== originalFormData.category
    );
  }, [mode, formData, originalFormData]);

  // Handle browser/tab close with unsaved changes
  useEffect(() => {
    if (!hasChanges || mode === "create") return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasChanges, mode]);

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
      // Keep isSubmitting true to prevent button click during redirect
      router.push("/products");
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : "Failed to save product");
    }
  };

  const title = mode === "create" ? "Add Product" : "Edit Product";
  const submitLabel = mode === "create" ? "Add Product" : "Save Product";

  return (
    <div className="flex flex-1 flex-col gap-4 p-3 md:gap-6 md:p-6">
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
