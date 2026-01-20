"use client";

import { useState } from "react";
import {
  ReportsHeader,
  SummaryStatsGrid,
  ChartsGrid,
  ReportTypesCard,
  RecentReportsCard,
} from "./_components";
import { summaryStats, reportTypes, recentReports } from "./_data";
import type { ReportsTab } from "./_types";

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState<ReportsTab>("overview");

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      {/* Header Actions */}
      <ReportsHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Summary Stats */}
      <SummaryStatsGrid stats={summaryStats} />

      {/* Charts Row */}
      <ChartsGrid />

      {/* Report Types & Recent Reports */}
      <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ReportTypesCard reportTypes={reportTypes} />
        </div>
        <RecentReportsCard reports={recentReports} />
      </div>
    </div>
  );
}
