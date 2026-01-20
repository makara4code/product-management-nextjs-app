import { Plus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomersActions() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Button variant="outline" className="gap-2 flex-1 sm:flex-none">
        <Download className="h-4 w-4" />
        <span className="hidden sm:inline">Export</span>
      </Button>
      <Button className="gap-2 flex-1 sm:flex-none">
        <Plus className="h-4 w-4" />
        <span className="hidden sm:inline">Add Customer</span>
      </Button>
    </div>
  );
}
