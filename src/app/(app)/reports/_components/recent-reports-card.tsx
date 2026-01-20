import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RecentReport } from "../_types";

interface RecentReportsCardProps {
  reports: RecentReport[];
}

export function RecentReportsCard({ reports }: RecentReportsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base md:text-lg">Recent Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 md:space-y-4">
          {reports.map((report, index) => (
            <div
              key={index}
              className="flex items-center gap-3 pb-3 md:pb-4 border-b last:border-0 last:pb-0"
            >
              <div className="p-2 rounded-lg bg-muted shrink-0">
                <FileText className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm font-medium truncate">
                  {report.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {report.date} • {report.size}
                </p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
