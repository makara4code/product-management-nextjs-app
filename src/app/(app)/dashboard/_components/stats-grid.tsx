import type { DashboardStat } from "../_types";
import { StatCard } from "./stat-card";

interface StatsGridProps {
  stats: DashboardStat[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
}
