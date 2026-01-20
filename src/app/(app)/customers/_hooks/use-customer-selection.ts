import { useState, useCallback } from "react";
import type { Customer } from "../_types";

export function useCustomerSelection(customers: Customer[]) {
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

  const toggleCustomerSelection = useCallback((id: string) => {
    setSelectedCustomers((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  }, []);

  const toggleAllCustomers = useCallback(() => {
    setSelectedCustomers((prev) =>
      prev.length === customers.length ? [] : customers.map((c) => c.id),
    );
  }, [customers]);

  const clearSelection = useCallback(() => {
    setSelectedCustomers([]);
  }, []);

  const isAllSelected =
    customers.length > 0 && selectedCustomers.length === customers.length;

  return {
    selectedCustomers,
    toggleCustomerSelection,
    toggleAllCustomers,
    clearSelection,
    isAllSelected,
  };
}
