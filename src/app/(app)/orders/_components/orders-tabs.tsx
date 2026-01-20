import { Calendar, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { OrderTab } from "../_types";

interface OrdersTabsProps {
  activeTab: OrderTab;
  onTabChange: (tab: OrderTab) => void;
}

export function OrdersTabs({ activeTab, onTabChange }: OrdersTabsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Tabs
        value={activeTab}
        onValueChange={(value) => onTabChange(value as OrderTab)}
      >
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="shipped">Shipped</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center gap-2 sm:gap-3">
        <Button variant="outline" className="gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span className="hidden sm:inline">Select Date</span>
        </Button>
        <Button variant="outline" className="gap-2 text-sm">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="hidden sm:inline">Filters</span>
        </Button>
      </div>
    </div>
  );
}
