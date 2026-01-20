export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  spent: string;
  joined: string;
  status: CustomerStatus;
}

export type CustomerStatus = "Active" | "Inactive" | "Blocked";

export type CustomerTab = "all" | "active" | "inactive" | "blocked";
