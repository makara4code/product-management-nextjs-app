import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RecentOrder } from "../_types";
import { getOrderStatusColor } from "../_lib/utils";

interface RecentOrdersTableProps {
  orders: RecentOrder[];
}

export function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <a
          href="/orders"
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View all
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b text-left text-sm text-muted-foreground">
                <th className="pb-3 font-medium">Order ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium hidden sm:table-cell">
                  Product
                </th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b last:border-0">
                  <td className="py-3 text-sm font-medium text-primary">
                    {order.id}
                  </td>
                  <td className="py-3 text-sm">{order.customer}</td>
                  <td className="py-3 text-sm hidden sm:table-cell">
                    {order.product}
                  </td>
                  <td className="py-3 text-sm">{order.amount}</td>
                  <td className="py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getOrderStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
