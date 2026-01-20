"use client";

import { useState } from "react";
import {
  CustomersSearch,
  CustomersActions,
  CustomersTabs,
  CustomersTable,
  CustomersPagination,
} from "./_components";
import { useCustomerSelection } from "./_hooks";
import { customers } from "./_data";
import type { CustomerTab } from "./_types";

export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState<CustomerTab>("all");
  const [page, setPage] = useState(1);

  const {
    selectedCustomers,
    toggleCustomerSelection,
    toggleAllCustomers,
    isAllSelected,
  } = useCustomerSelection(customers);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      {/* Search and Actions Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <CustomersSearch />
        <CustomersActions />
      </div>

      {/* Tabs and Filters */}
      <CustomersTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Customers Table */}
      <CustomersTable
        customers={customers}
        selectedCustomers={selectedCustomers}
        isAllSelected={isAllSelected}
        onToggleCustomer={toggleCustomerSelection}
        onToggleAll={toggleAllCustomers}
      />

      {/* Pagination */}
      <CustomersPagination
        currentPage={page}
        totalPages={30}
        totalItems={234}
        itemsPerPage={8}
        onPageChange={setPage}
      />
    </div>
  );
}
