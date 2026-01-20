import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OrdersActions() {
  return (
    <Button variant="outline" className="gap-2 w-full sm:w-auto">
      <Download className="h-4 w-4" />
      Export
    </Button>
  );
}
