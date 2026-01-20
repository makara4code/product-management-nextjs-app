import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RevenueChartCard() {
  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-[300px] items-center justify-center rounded-lg bg-muted/50">
          <p className="text-muted-foreground">Revenue Chart Placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
}
