"use client";

import { useState } from "react";
import {
  OrdersSearch,
  OrdersActions,
  OrdersTabs,
  OrdersTable,
  OrdersPagination,
} from "./_components";
import { useOrderSelection } from "./_hooks";
import { orders } from "./_data";
import type { OrderTab } from "./_types";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<OrderTab>("all");
  const [page, setPage] = useState(1);

  const {
    selectedOrders,
    toggleOrderSelection,
    toggleAllOrders,
    isAllSelected,
  } = useOrderSelection(orders);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      {/* Search and Actions Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <OrdersSearch />
        <OrdersActions />
      </div>

      {/* Tabs and Filters */}
      <OrdersTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Orders Table */}
      <OrdersTable
        orders={orders}
        selectedOrders={selectedOrders}
        isAllSelected={isAllSelected}
        onToggleOrder={toggleOrderSelection}
        onToggleAll={toggleAllOrders}
      />

      {/* Pagination */}
      <OrdersPagination
        currentPage={page}
        totalPages={20}
        totalItems={156}
        itemsPerPage={8}
        onPageChange={setPage}
      />
    </div>
  );
}
