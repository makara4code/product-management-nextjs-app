import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  PieChart,
  LineChart,
} from "lucide-react";
import type { SummaryStat, ReportType, RecentReport } from "../_types";

export const summaryStats: SummaryStat[] = [
  {
    title: "Total Sales",
    value: "$125,430",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "bg-blue-500",
  },
  {
    title: "Total Orders",
    value: "1,847",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    color: "bg-green-500",
  },
  {
    title: "Products Sold",
    value: "3,421",
    change: "+15.3%",
    trend: "up",
    icon: Package,
    color: "bg-purple-500",
  },
  {
    title: "New Customers",
    value: "284",
    change: "-3.1%",
    trend: "down",
    icon: Users,
    color: "bg-orange-500",
  },
];

export const reportTypes: ReportType[] = [
  {
    title: "Sales Report",
    description:
      "Detailed breakdown of sales by product, category, and time period",
    icon: BarChart3,
    lastGenerated: "Today, 9:30 AM",
  },
  {
    title: "Inventory Report",
    description:
      "Current stock levels, low stock alerts, and inventory valuation",
    icon: Package,
    lastGenerated: "Today, 8:00 AM",
  },
  {
    title: "Customer Report",
    description: "Customer demographics, acquisition, and retention metrics",
    icon: Users,
    lastGenerated: "Yesterday, 6:00 PM",
  },
  {
    title: "Order Report",
    description: "Order status, fulfillment times, and shipping analytics",
    icon: ShoppingCart,
    lastGenerated: "Today, 10:15 AM",
  },
  {
    title: "Revenue Report",
    description: "Revenue trends, profit margins, and financial summaries",
    icon: LineChart,
    lastGenerated: "Yesterday, 11:00 PM",
  },
  {
    title: "Product Performance",
    description: "Best sellers, slow movers, and product analytics",
    icon: PieChart,
    lastGenerated: "2 days ago",
  },
];

export const recentReports: RecentReport[] = [
  {
    name: "Monthly Sales Report - January 2024",
    date: "15 Jan 2024",
    size: "2.4 MB",
    type: "PDF",
  },
  {
    name: "Inventory Status Report",
    date: "14 Jan 2024",
    size: "1.8 MB",
    type: "Excel",
  },
  {
    name: "Customer Analytics Q4 2023",
    date: "10 Jan 2024",
    size: "3.2 MB",
    type: "PDF",
  },
  {
    name: "Product Performance Report",
    date: "08 Jan 2024",
    size: "1.5 MB",
    type: "Excel",
  },
  {
    name: "Revenue Summary 2023",
    date: "02 Jan 2024",
    size: "4.1 MB",
    type: "PDF",
  },
];
