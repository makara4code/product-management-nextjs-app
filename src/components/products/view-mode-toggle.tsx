"use client";

import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ViewMode = "table" | "card";

interface ViewModeToggleProps {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}

export function ViewModeToggle({ value, onChange }: ViewModeToggleProps) {
  return (
    <div className="hidden md:flex items-center border rounded-md">
      <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 rounded-r-none ${value === "table" ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : ""}`}
        onClick={() => onChange("table")}
      >
        <List className="h-4 w-4" />
        <span className="sr-only">Table view</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 rounded-l-none ${value === "card" ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : ""}`}
        onClick={() => onChange("card")}
      >
        <LayoutGrid className="h-4 w-4" />
        <span className="sr-only">Card view</span>
      </Button>
    </div>
  );
}
