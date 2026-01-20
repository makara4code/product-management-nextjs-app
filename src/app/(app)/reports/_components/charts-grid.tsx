import { LineChart, PieChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ChartsGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-base md:text-lg">Sales Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-48 md:h-64 items-center justify-center rounded-lg bg-muted/50">
            <div className="text-center">
              <LineChart className="h-10 w-10 md:h-12 md:w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground text-sm">
                Sales Chart Placeholder
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-base md:text-lg">
            Revenue by Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-48 md:h-64 items-center justify-center rounded-lg bg-muted/50">
            <div className="text-center">
              <PieChart className="h-10 w-10 md:h-12 md:w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground text-sm">
                Category Chart Placeholder
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
