"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProductFilter } from "@/types/product";

interface ProductsTabsProps {
  value: ProductFilter;
  onChange: (value: ProductFilter) => void;
}

export function ProductsTabs({ value, onChange }: ProductsTabsProps) {
  const handleValueChange = (newValue: string) => {
    onChange(newValue as ProductFilter);
  };

  return (
    <Tabs
      value={value}
      onValueChange={handleValueChange}
      className="w-full lg:w-auto"
    >
      <TabsList className="w-full lg:w-auto grid grid-cols-4 lg:flex">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="published">Published</TabsTrigger>
        <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
        <TabsTrigger value="draft">Draft</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
