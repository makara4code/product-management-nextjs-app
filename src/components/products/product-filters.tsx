"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useIsMobile, useIsTablet } from "@/hooks/use-mobile";

export interface AdvancedFilters {
  categories: string[];
  priceMin: number | null;
  priceMax: number | null;
  dateFrom: Date | null;
  dateTo: Date | null;
}

interface ProductFiltersProps {
  filters: AdvancedFilters;
  onFiltersChange: (filters: Partial<AdvancedFilters>) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  categories: string[];
}

export function ProductFilters({
  filters,
  onFiltersChange,
  onClearFilters,
  hasActiveFilters,
  categories,
}: ProductFiltersProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  // Use dialog for both mobile and tablet screens
  const useDialog = isMobile || isTablet;

  // Local state for all filters - only applied when user clicks Apply
  const [localCategories, setLocalCategories] = useState<string[]>(
    filters.categories,
  );
  const [localPriceMin, setLocalPriceMin] = useState(
    filters.priceMin?.toString() ?? "",
  );
  const [localPriceMax, setLocalPriceMax] = useState(
    filters.priceMax?.toString() ?? "",
  );

  // Sync local state with props only when dialog first opens (not while open)
  const [wasOpen, setWasOpen] = useState(false);
  useEffect(() => {
    if (open && !wasOpen) {
      // Dialog just opened - sync local state with current applied values
      setLocalCategories(filters.categories);
      setLocalPriceMin(filters.priceMin?.toString() ?? "");
      setLocalPriceMax(filters.priceMax?.toString() ?? "");
    }
    setWasOpen(open);
  }, [open, wasOpen, filters.categories, filters.priceMin, filters.priceMax]);

  const handleLocalCategoryToggle = (category: string) => {
    setLocalCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleApply = () => {
    onFiltersChange({
      categories: localCategories,
      priceMin: localPriceMin ? parseFloat(localPriceMin) : null,
      priceMax: localPriceMax ? parseFloat(localPriceMax) : null,
    });
    setOpen(false);
  };

  const handleCancel = () => {
    // Reset local state to current filters
    setLocalCategories(filters.categories);
    setLocalPriceMin(filters.priceMin?.toString() ?? "");
    setLocalPriceMax(filters.priceMax?.toString() ?? "");
    setOpen(false);
  };

  const handleClearAll = () => {
    setLocalCategories([]);
    setLocalPriceMin("");
    setLocalPriceMax("");
  };

  const _handleClearAndApply = () => {
    setLocalCategories([]);
    setLocalPriceMin("");
    setLocalPriceMax("");
    onClearFilters();
    setOpen(false);
  };

  // For removing individual active filters (immediate effect)
  const handleRemoveCategory = (category: string) => {
    const newCategories = filters.categories.filter((c) => c !== category);
    onFiltersChange({ categories: newCategories });
  };

  const handleRemovePrice = () => {
    onFiltersChange({ priceMin: null, priceMax: null });
  };

  // Only count category and price filters (date is handled separately)
  const activeFilterCount =
    (filters.categories.length > 0 ? 1 : 0) +
    (filters.priceMin !== null || filters.priceMax !== null ? 1 : 0);

  // Check if there are active category/price filters (excluding date)
  const hasActiveCategoryOrPriceFilters =
    filters.categories.length > 0 ||
    filters.priceMin !== null ||
    filters.priceMax !== null;

  // Check if local state differs from applied filters
  const _hasLocalChanges =
    JSON.stringify(localCategories.sort()) !==
      JSON.stringify([...filters.categories].sort()) ||
    (localPriceMin || null) !== (filters.priceMin?.toString() || null) ||
    (localPriceMax || null) !== (filters.priceMax?.toString() || null);

  // Shared filter content for both dialog and popover
  const FilterContent = (
    <div className="space-y-4">
      {/* Categories */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Categories</Label>
        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={localCategories.includes(category)}
                onCheckedChange={() => handleLocalCategoryToggle(category)}
              />
              <label
                htmlFor={`category-${category}`}
                className="text-sm capitalize cursor-pointer"
              >
                {category.replace(/-/g, " ")}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Price Range</Label>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Input
              type="number"
              placeholder="Min"
              value={localPriceMin}
              onChange={(e) => setLocalPriceMin(e.target.value)}
              className="h-9"
            />
          </div>
          <span className="text-muted-foreground">-</span>
          <div className="flex-1">
            <Input
              type="number"
              placeholder="Max"
              value={localPriceMax}
              onChange={(e) => setLocalPriceMax(e.target.value)}
              className="h-9"
            />
          </div>
        </div>
      </div>

      {/* Active Filters Summary (categories and price only, date is separate) */}
      {hasActiveCategoryOrPriceFilters && (
        <>
          <Separator />
          <div className="space-y-2">
            <Label className="text-sm font-medium">Active Filters</Label>
            <div className="flex flex-wrap gap-2">
              {filters.categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="gap-1 capitalize pr-1"
                >
                  {category.replace(/-/g, " ")}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleRemoveCategory(category);
                    }}
                    className="ml-1 rounded-full hover:bg-muted-foreground/20 p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {(filters.priceMin !== null || filters.priceMax !== null) && (
                <Badge variant="secondary" className="gap-1 pr-1">
                  ${filters.priceMin ?? 0} - ${filters.priceMax ?? "∞"}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleRemovePrice();
                    }}
                    className="ml-1 rounded-full hover:bg-muted-foreground/20 p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );

  // Direct clear for the X button on the trigger (immediate effect)
  const handleDirectClear = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClearFilters();
  };

  // Dialog trigger button (for mobile and tablet)
  const DialogTriggerButton = (
    <Button
      variant="outline"
      className="gap-2 relative group"
      onClick={() => setOpen(true)}
    >
      <SlidersHorizontal className="h-4 w-4" />
      Filters
      {hasActiveFilters && (
        <span className="relative ml-1">
          <Badge
            variant="secondary"
            className="h-5 px-1.5 group-hover:opacity-0 transition-opacity"
          >
            {activeFilterCount}
          </Badge>
          <span
            role="button"
            tabIndex={0}
            onClick={handleDirectClear}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
                onClearFilters();
              }
            }}
            className="absolute inset-0 h-5 w-5 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="h-3 w-3" />
          </span>
        </span>
      )}
    </Button>
  );

  // Popover trigger button (for desktop)
  const PopoverTriggerButton = (
    <Button variant="outline" className="gap-2 relative group">
      <SlidersHorizontal className="h-4 w-4" />
      Filters
      {hasActiveFilters && (
        <span className="relative ml-1">
          <Badge
            variant="secondary"
            className="h-5 px-1.5 group-hover:opacity-0 transition-opacity"
          >
            {activeFilterCount}
          </Badge>
          <span
            role="button"
            tabIndex={0}
            onClick={handleDirectClear}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
                onClearFilters();
              }
            }}
            className="absolute inset-0 h-5 w-5 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="h-3 w-3" />
          </span>
        </span>
      )}
    </Button>
  );

  // Mobile and Tablet: Use Dialog
  if (useDialog) {
    return (
      <>
        {DialogTriggerButton}
        <Dialog
          open={open}
          onOpenChange={(isOpen) => {
            if (!isOpen) handleCancel();
            else setOpen(true);
          }}
        >
          <DialogContent
            className="max-w-[calc(100%-2rem)]"
            showCloseButton={false}
          >
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                Filters
                {(hasActiveFilters ||
                  localCategories.length > 0 ||
                  localPriceMin ||
                  localPriceMax) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground text-xs"
                    onClick={handleClearAll}
                  >
                    Clear all
                  </Button>
                )}
              </DialogTitle>
            </DialogHeader>
            <div className="overflow-auto max-h-[60vh]">{FilterContent}</div>
            <DialogFooter>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleApply}>Apply</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // Desktop: Use Popover
  return (
    <Popover
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) handleCancel();
        else setOpen(true);
      }}
    >
      <PopoverTrigger asChild>{PopoverTriggerButton}</PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Filters</h4>
            {(hasActiveFilters ||
              localCategories.length > 0 ||
              localPriceMin ||
              localPriceMax) && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-muted-foreground hover:text-foreground"
                onClick={handleClearAll}
              >
                Clear all
              </Button>
            )}
          </div>
          <Separator />
          {FilterContent}
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
            <Button size="sm" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
