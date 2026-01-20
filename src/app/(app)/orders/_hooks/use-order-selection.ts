import { useState, useCallback } from "react";
import type { Order } from "../_types";

export function useOrderSelection(orders: Order[]) {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  const toggleOrderSelection = useCallback((id: string) => {
    setSelectedOrders((prev) =>
      prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id],
    );
  }, []);

  const toggleAllOrders = useCallback(() => {
    setSelectedOrders((prev) =>
      prev.length === orders.length ? [] : orders.map((o) => o.id),
    );
  }, [orders]);

  const clearSelection = useCallback(() => {
    setSelectedOrders([]);
  }, []);

  const isAllSelected =
    orders.length > 0 && selectedOrders.length === orders.length;

  return {
    selectedOrders,
    toggleOrderSelection,
    toggleAllOrders,
    clearSelection,
    isAllSelected,
  };
}
