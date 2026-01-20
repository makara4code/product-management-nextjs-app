import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TopProduct } from "../_types";

interface TopProductsCardProps {
  products: TopProduct[];
}

export function TopProductsCard({ products }: TopProductsCardProps) {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={product.name} className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs text-muted-foreground">
                  {product.sales} sales
                </p>
              </div>
              <div className="text-sm font-medium">{product.revenue}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
