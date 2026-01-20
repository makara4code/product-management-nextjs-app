import type { LucideIcon } from "lucide-react";

export interface DashboardStat {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}

export interface RecentOrder {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: "Completed" | "Processing" | "Pending" | "Shipped";
}

export interface TopProduct {
  name: string;
  sales: number;
  revenue: string;
}

export type OrderStatus = RecentOrder["status"];
