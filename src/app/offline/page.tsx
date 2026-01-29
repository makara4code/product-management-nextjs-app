"use client";

import {
  WifiOff,
  RefreshCw,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Navigation items - must match app-sidebar.tsx
const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Product Management", url: "/products", icon: Package },
  { title: "Order Management", url: "/orders", icon: ShoppingCart },
  { title: "Customer Management", url: "/customers", icon: Users },
  { title: "Reports", url: "/reports", icon: FileText },
];

// Static sidebar for offline page - matches AppSidebar styling
function OfflineSidebar() {
  return (
    <aside className="hidden md:flex h-screen w-[--sidebar-width] flex-col bg-sidebar border-r">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-3">
          <Image
            src="/Ellipse.svg"
            alt="Logo"
            width={30}
            height={30}
            className="shrink-0"
          />
          <span className="text-lg font-semibold text-sidebar-foreground">
            Logo
          </span>
        </Link>
      </div>
      <nav className="flex-1 px-3 py-2">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.url}
                className="flex items-center gap-3 h-12 px-5 text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
              >
                <item.icon className="h-5 w-5 shrink-0" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

// Mobile header for offline page
function OfflineHeader() {
  return (
    <header className="flex h-14 md:h-16 shrink-0 items-center justify-between border-b bg-background">
      <div className="flex justify-between w-full container items-center mx-auto px-4">
        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="flex items-center gap-2 md:hidden">
            <Image src="/Ellipse.svg" alt="Logo" width={24} height={24} />
            <span className="font-semibold">Logo</span>
          </Link>
          <span className="hidden md:inline text-base md:text-xl font-semibold">
            Offline
          </span>
        </div>
      </div>
    </header>
  );
}

export default function OfflinePage() {
  return (
    <div className="flex min-h-svh w-full">
      <OfflineSidebar />
      <div className="flex flex-1 flex-col">
        <OfflineHeader />
        <main className="container mx-auto flex flex-1 items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 rounded-full bg-muted p-4">
                <WifiOff className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardTitle>You&apos;re offline</CardTitle>
              <CardDescription>
                This page hasn&apos;t been cached yet. Connect to the internet
                to load it.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Retry
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Pages you&apos;ve visited before will be available offline.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
