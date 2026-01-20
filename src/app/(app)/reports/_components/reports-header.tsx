import { Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ReportsTab } from "../_types";

interface ReportsHeaderProps {
  activeTab: ReportsTab;
  onTabChange: (tab: ReportsTab) => void;
}

export function ReportsHeader({ activeTab, onTabChange }: ReportsHeaderProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Tabs
        value={activeTab}
        onValueChange={(value) => onTabChange(value as ReportsTab)}
      >
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="inventory" className="hidden sm:inline-flex">
            Inventory
          </TabsTrigger>
          <TabsTrigger value="customers" className="hidden sm:inline-flex">
            Customers
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center gap-2 sm:gap-3">
        <Button variant="outline" className="gap-2 flex-1 sm:flex-none text-sm">
          <Calendar className="h-4 w-4" />
          <span className="hidden sm:inline">Last 30 Days</span>
          <span className="sm:hidden">30 Days</span>
        </Button>
        <Button className="gap-2 flex-1 sm:flex-none text-sm">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Export All</span>
          <span className="sm:hidden">Export</span>
        </Button>
      </div>
    </div>
  );
}
