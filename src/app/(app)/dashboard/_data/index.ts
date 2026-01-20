import { DollarSign, ShoppingCart, Package, Users } from "lucide-react";
import type { DashboardStat, RecentOrder, TopProduct } from "../_types";

export const stats: DashboardStat[] = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "2,350",
    change: "+15.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    value: "1,247",
    change: "+5.4%",
    trend: "up",
    icon: Package,
  },
  {
    title: "Customers",
    value: "12,234",
    change: "-2.1%",
    trend: "down",
    icon: Users,
  },
];

export const recentOrders: RecentOrder[] = [
  {
    id: "ORD001",
    customer: "John Doe",
    product: "Smartwatch E2",
    amount: "$590.00",
    status: "Completed",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    product: "Headphone G1 Pro",
    amount: "$348.00",
    status: "Processing",
  },
  {
    id: "ORD003",
    customer: "Bob Wilson",
    product: "iPhone X",
    amount: "$607.00",
    status: "Pending",
  },
  {
    id: "ORD004",
    customer: "Alice Brown",
    product: "Nike Shoes",
    amount: "$400.00",
    status: "Completed",
  },
  {
    id: "ORD005",
    customer: "Charlie Davis",
    product: "Puma Shoes",
    amount: "$234.00",
    status: "Shipped",
  },
];

export const topProducts: TopProduct[] = [
  { name: "Smartwatch E2", sales: 245, revenue: "$144,550" },
  { name: "iPhone X", sales: 198, revenue: "$120,186" },
  { name: "Headphone G1 Pro", sales: 156, revenue: "$54,288" },
  { name: "Nike Shoes", sales: 134, revenue: "$53,600" },
  { name: "Puma Shoes", sales: 98, revenue: "$22,932" },
];
