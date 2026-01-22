"use client";

import { ChevronRight, GitCompare } from "lucide-react";
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
import type { Product } from "@/types/product";
import { useProductForm } from "./use-product-form";
import { ChangeComparison } from "./change-comparison";

interface ProductFormProps {
  mode: "create" | "edit";
  product?: Product;
}

export function ProductForm({ mode, product }: ProductFormProps) {
  const {
    formData,
    error,
    fieldErrors,
    loading,
    hasChanges,
    categories,
    categoriesLoading,
    showDiscardDialog,
    setShowDiscardDialog,
    showChangesComparison,
    setShowChangesComparison,
    handleCancel,
    handleNavigate,
    confirmDiscard,
    cancelDiscard,
    handleChange,
    handleCategoryChange,
    handleSubmit,
    isFieldChanged,
    getOriginalValue,
    title,
    submitLabel,
  } = useProductForm({ mode, product });

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
          onClick={handleCancel}
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
                <ChangeComparison
                  fieldName="title"
                  currentValue={formData.title}
                  originalValue={getOriginalValue("title")}
                  isChanged={isFieldChanged("title")}
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
                <ChangeComparison
                  fieldName="description"
                  currentValue={formData.description}
                  originalValue={getOriginalValue("description")}
                  isChanged={isFieldChanged("description")}
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
                <ChangeComparison
                  fieldName="price"
                  currentValue={formData.price}
                  originalValue={getOriginalValue("price")}
                  isChanged={isFieldChanged("price")}
                />
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
                <ChangeComparison
                  fieldName="discountPercentage"
                  currentValue={formData.discountPercentage}
                  originalValue={getOriginalValue("discountPercentage")}
                  isChanged={isFieldChanged("discountPercentage")}
                />
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
                  <ChangeComparison
                    fieldName="sku"
                    currentValue={formData.sku}
                    originalValue={getOriginalValue("sku")}
                    isChanged={isFieldChanged("sku")}
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
                  <ChangeComparison
                    fieldName="stock"
                    currentValue={formData.stock}
                    originalValue={getOriginalValue("stock")}
                    isChanged={isFieldChanged("stock")}
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
                <ChangeComparison
                  fieldName="category"
                  currentValue={formData.category}
                  originalValue={getOriginalValue("category")}
                  isChanged={isFieldChanged("category")}
                  categories={categories}
                />
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
