"use client";

import {
  StatsGrid,
  TopProductsCard,
  RevenueChartCard,
  RecentOrdersTable,
} from "./_components";
import { stats, recentOrders, topProducts } from "./_data";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      {/* Stats Cards */}
      <StatsGrid stats={stats} />

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <RevenueChartCard />
        <TopProductsCard products={topProducts} />
      </div>

      {/* Recent Orders */}
      <RecentOrdersTable orders={recentOrders} />
    </div>
  );
}
