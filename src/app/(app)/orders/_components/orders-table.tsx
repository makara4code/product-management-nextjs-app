import { Eye, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Order } from "../_types";
import { getStatusColor, getPaymentColor } from "../_lib/utils";

interface OrdersTableProps {
  orders: Order[];
  selectedOrders: string[];
  isAllSelected: boolean;
  onToggleOrder: (id: string) => void;
  onToggleAll: () => void;
}

export function OrdersTable({
  orders,
  selectedOrders,
  isAllSelected,
  onToggleOrder,
  onToggleAll,
}: OrdersTableProps) {
  return (
    <div className="rounded-lg border bg-card overflow-x-auto">
      <Table className="min-w-[800px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox checked={isAllSelected} onCheckedChange={onToggleAll} />
            </TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="hidden md:table-cell">Products</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="hidden sm:table-cell">Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden sm:table-cell">Payment</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <Checkbox
                  checked={selectedOrders.includes(order.id)}
                  onCheckedChange={() => onToggleOrder(order.id)}
                />
              </TableCell>
              <TableCell className="font-medium text-primary">
                {order.id}
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{order.customer}</div>
                  <div className="text-sm text-muted-foreground">
                    {order.email}
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {order.products} items
              </TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell className="hidden sm:table-cell">
                {order.date}
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(order.status)}`}
                >
                  {order.status}
                </span>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getPaymentColor(order.payment)}`}
                >
                  {order.payment}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Update Status</DropdownMenuItem>
                      <DropdownMenuItem>Print Invoice</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Cancel Order
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
