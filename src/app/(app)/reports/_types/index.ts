import type { LucideIcon } from "lucide-react";

export interface SummaryStat {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  color: string;
}

export interface ReportType {
  title: string;
  description: string;
  icon: LucideIcon;
  lastGenerated: string;
}

export interface RecentReport {
  name: string;
  date: string;
  size: string;
  type: "PDF" | "Excel";
}

export type ReportsTab = "overview" | "sales" | "inventory" | "customers";
