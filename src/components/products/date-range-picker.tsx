"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, X } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { useIsMobile, useIsTablet } from "@/hooks/use-mobile";

interface DateRangePickerProps {
  dateFrom: Date | null;
  dateTo: Date | null;
  onDateRangeChange: (dateFrom: Date | null, dateTo: Date | null) => void;
  className?: string;
}

export function DateRangePicker({
  dateFrom,
  dateTo,
  onDateRangeChange,
  className,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  // Use dialog for both mobile and tablet screens
  const useDialog = isMobile || isTablet;

  // Local state for pending changes - only applied when user clicks Apply
  const [localDateFrom, setLocalDateFrom] = useState<Date | null>(dateFrom);
  const [localDateTo, setLocalDateTo] = useState<Date | null>(dateTo);

  // Sync local state with props only when dialog first opens (not while open)
  const [wasOpen, setWasOpen] = useState(false);
  useEffect(() => {
    if (open && !wasOpen) {
      // Dialog just opened - sync local state with current applied values
      setLocalDateFrom(dateFrom);
      setLocalDateTo(dateTo);
    }
    setWasOpen(open);
  }, [open, wasOpen, dateFrom, dateTo]);

  const localDateRange: DateRange | undefined =
    localDateFrom || localDateTo
      ? {
          from: localDateFrom ?? undefined,
          to: localDateTo ?? undefined,
        }
      : undefined;

  const handleLocalSelect = (range: DateRange | undefined) => {
    setLocalDateFrom(range?.from ?? null);
    setLocalDateTo(range?.to ?? null);
  };

  const handleApply = () => {
    onDateRangeChange(localDateFrom, localDateTo);
    setOpen(false);
  };

  const handleCancel = () => {
    // Reset local state to current applied values
    setLocalDateFrom(dateFrom);
    setLocalDateTo(dateTo);
    setOpen(false);
  };

  const handleLocalClear = () => {
    setLocalDateFrom(null);
    setLocalDateTo(null);
  };

  // Direct clear for the X button on the trigger (immediate effect)
  const handleDirectClear = () => {
    onDateRangeChange(null, null);
  };

  const hasDateRange = dateFrom !== null || dateTo !== null;
  const hasLocalDateRange = localDateFrom !== null || localDateTo !== null;

  const getDisplayText = () => {
    if (dateFrom && dateTo) {
      return `${format(dateFrom, "MMM d")} - ${format(dateTo, "MMM d, yyyy")}`;
    }
    if (dateFrom) {
      return `From ${format(dateFrom, "MMM d, yyyy")}`;
    }
    if (dateTo) {
      return `Until ${format(dateTo, "MMM d, yyyy")}`;
    }
    return "Select Date";
  };

  const getLocalDisplayText = () => {
    if (localDateFrom && localDateTo) {
      return `${format(localDateFrom, "MMM d")} - ${format(localDateTo, "MMM d, yyyy")}`;
    }
    if (localDateFrom) {
      return `From ${format(localDateFrom, "MMM d, yyyy")}`;
    }
    if (localDateTo) {
      return `Until ${format(localDateTo, "MMM d, yyyy")}`;
    }
    return null;
  };

  // Shared content for both dialog and popover
  const CalendarContent = (
    <Calendar
      initialFocus
      mode="range"
      defaultMonth={localDateFrom ?? dateFrom ?? new Date()}
      selected={localDateRange}
      onSelect={handleLocalSelect}
      numberOfMonths={isMobile ? 1 : 2}
    />
  );

  // Dialog trigger button (for mobile and tablet)
  const DialogTrigger = (
    <Button
      variant="outline"
      className={cn(
        "gap-2 justify-start text-left font-normal group",
        !hasDateRange && "text-muted-foreground",
        className,
      )}
      onClick={() => setOpen(true)}
    >
      <CalendarIcon className="h-4 w-4" />
      <span className="truncate max-w-[150px]">{getDisplayText()}</span>
      {hasDateRange && (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDirectClear();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              handleDirectClear();
            }
          }}
          className="ml-auto h-5 w-5 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X className="h-3 w-3" />
        </span>
      )}
    </Button>
  );

  // Popover trigger button (for desktop)
  const PopoverTriggerButton = (
    <Button
      variant="outline"
      className={cn(
        "gap-2 justify-start text-left font-normal group",
        !hasDateRange && "text-muted-foreground",
        className,
      )}
    >
      <CalendarIcon className="h-4 w-4" />
      <span className="truncate max-w-[150px]">{getDisplayText()}</span>
      {hasDateRange && (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDirectClear();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              handleDirectClear();
            }
          }}
          className="ml-auto h-5 w-5 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X className="h-3 w-3" />
        </span>
      )}
    </Button>
  );

  // Mobile and Tablet: Use Dialog
  if (useDialog) {
    return (
      <>
        {DialogTrigger}
        <Dialog
          open={open}
          onOpenChange={(isOpen) => {
            if (!isOpen) handleCancel();
            else setOpen(true);
          }}
        >
          <DialogContent
            className="max-w-[calc(100%-2rem)] p-0"
            showCloseButton={false}
          >
            <DialogHeader className="p-4 pb-0">
              <DialogTitle className="flex items-center justify-between">
                Select Date Range
                {hasLocalDateRange && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground text-xs"
                    onClick={handleLocalClear}
                  >
                    Clear
                  </Button>
                )}
              </DialogTitle>
              {hasLocalDateRange && (
                <p className="text-xs text-muted-foreground">
                  {getLocalDisplayText()}
                </p>
              )}
            </DialogHeader>
            <div className="flex justify-center overflow-auto">
              {CalendarContent}
            </div>
            <DialogFooter className="p-4 pt-0">
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
      <PopoverContent className="w-auto p-0" align="end">
        <div className="p-3 border-b">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm">Select Date Range</h4>
            {hasLocalDateRange && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-muted-foreground hover:text-foreground text-xs"
                onClick={handleLocalClear}
              >
                Clear
              </Button>
            )}
          </div>
          {hasLocalDateRange && (
            <p className="text-xs text-muted-foreground mt-1">
              {getLocalDisplayText()}
            </p>
          )}
        </div>
        {CalendarContent}
        <div className="p-3 border-t flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
