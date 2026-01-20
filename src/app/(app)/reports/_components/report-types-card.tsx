import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReportType } from "../_types";

interface ReportTypesCardProps {
  reportTypes: ReportType[];
}

export function ReportTypesCard({ reportTypes }: ReportTypesCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base md:text-lg">Generate Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
          {reportTypes.map((report) => (
            <div
              key={report.title}
              className="flex items-start gap-3 md:gap-4 rounded-lg border p-3 md:p-4 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <report.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm md:text-base">
                  {report.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                  {report.description}
                </p>
                <p className="text-xs text-muted-foreground mt-2 hidden sm:block">
                  Last generated: {report.lastGenerated}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
