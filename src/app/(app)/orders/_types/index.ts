export interface Order {
  id: string;
  customer: string;
  email: string;
  products: number;
  total: string;
  date: string;
  status: OrderStatus;
  payment: PaymentStatus;
}

export type OrderStatus =
  | "Completed"
  | "Processing"
  | "Pending"
  | "Shipped"
  | "Cancelled";

export type PaymentStatus = "Paid" | "Pending" | "Refunded";

export type OrderTab =
  | "all"
  | "pending"
  | "processing"
  | "shipped"
  | "completed";
