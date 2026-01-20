"use client";

import { usePathname } from "next/navigation";
import {
  Bell,
  ChevronDown,
  Package,
  ShoppingCart,
  Users,
  AlertCircle,
  User,
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const shops = [
  { id: "1", name: "Nik Shop" },
  { id: "2", name: "Main Store" },
  { id: "3", name: "Warehouse" },
];

const notifications = [
  {
    id: "1",
    title: "New Order Received",
    description: "Order #ORD-2024-089 from John Doe",
    time: "2 min ago",
    icon: ShoppingCart,
    read: false,
  },
  {
    id: "2",
    title: "Low Stock Alert",
    description: "iPhone 15 Pro Max is running low (5 left)",
    time: "15 min ago",
    icon: AlertCircle,
    read: false,
  },
  {
    id: "3",
    title: "New Customer",
    description: "Sarah Wilson just signed up",
    time: "1 hour ago",
    icon: Users,
    read: false,
  },
  {
    id: "4",
    title: "Product Updated",
    description: "Samsung Galaxy S24 price updated",
    time: "2 hours ago",
    icon: Package,
    read: true,
  },
];

// Route to title mapping
const routeTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/products": "Products",
  "/products/new": "New Product",
  "/orders": "Orders",
  "/customers": "Customer Management",
  "/reports": "Reports",
};

function getPageTitle(pathname: string): string {
  // Check exact match first
  if (routeTitles[pathname]) {
    return routeTitles[pathname];
  }

  // Check for dynamic routes
  if (pathname.match(/^\/products\/\d+\/edit$/)) {
    return "Edit Product";
  }
  if (pathname.match(/^\/products\/\d+$/)) {
    return "Product Details";
  }

  // Default: capitalize the first segment
  const segment = pathname.split("/")[1];
  return segment
    ? segment.charAt(0).toUpperCase() + segment.slice(1)
    : "Dashboard";
}

interface AppHeaderProps {
  title?: string;
}

export function AppHeader({ title }: AppHeaderProps) {
  const pathname = usePathname();
  const pageTitle = title ?? getPageTitle(pathname);
  return (
    <header className="flex h-14 md:h-16 shrink-0 items-center justify-between border-b bg-background px-3 md:px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-6 hidden md:block" />
        <h1 className="text-base md:text-xl font-semibold truncate">
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="gap-1 md:gap-2 h-8 md:h-9 px-2 md:px-3 text-sm"
            >
              <span className="hidden sm:inline">Nik Shop</span>
              <span className="sm:hidden">Shop</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {shops.map((shop) => (
              <DropdownMenuItem key={shop.id}>{shop.name}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-8 w-8 md:h-9 md:w-9"
            >
              <Bell className="h-4 w-4 md:h-5 md:w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-primary text-[8px] md:text-[10px] text-primary-foreground">
                {notifications.filter((n) => !n.read).length}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>Notifications</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-xs text-primary hover:text-primary"
              >
                Mark all as read
              </Button>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ScrollArea className="h-80">
              {notifications.map((notification) => (
                <DropdownMenuItem
                  key={notification.id}
                  className="flex items-start gap-3 p-3 cursor-pointer"
                >
                  <div
                    className={`p-2 rounded-full shrink-0 ${notification.read ? "bg-muted" : "bg-primary/10"}`}
                  >
                    <notification.icon
                      className={`h-4 w-4 ${notification.read ? "text-muted-foreground" : "text-primary"}`}
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        className={`text-sm leading-tight ${notification.read ? "font-normal" : "font-medium"}`}
                      >
                        {notification.title}
                      </p>
                      {!notification.read && (
                        <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {notification.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {notification.time}
                    </p>
                  </div>
                </DropdownMenuItem>
              ))}
            </ScrollArea>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-primary cursor-pointer">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-8 w-8 md:h-9 md:w-9 rounded-full"
            >
              <Avatar className="h-8 w-8 md:h-9 md:w-9">
                <AvatarImage src="/avatars/user.jpg" alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  U
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">
                  john@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & Support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
