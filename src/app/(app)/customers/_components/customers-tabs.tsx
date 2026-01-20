import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CustomerTab } from "../_types";

interface CustomersTabsProps {
  activeTab: CustomerTab;
  onTabChange: (tab: CustomerTab) => void;
}

export function CustomersTabs({ activeTab, onTabChange }: CustomersTabsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Tabs
        value={activeTab}
        onValueChange={(value) => onTabChange(value as CustomerTab)}
      >
        <TabsList>
          <TabsTrigger value="all">All Customers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="blocked">Blocked</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center gap-2 sm:gap-3">
        <Button variant="outline" className="gap-2 text-sm">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="hidden sm:inline">Filters</span>
        </Button>
      </div>
    </div>
  );
}
