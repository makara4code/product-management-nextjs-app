"use client";

import type * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FileText,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Product Management",
    url: "/products",
    icon: Package,
  },
  {
    title: "Order Management",
    url: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Customer Management",
    url: "/customers",
    icon: Users,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { setOpenMobile, isMobile } = useSidebar();

  // Close mobile sidebar on navigation
  const handleNavClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="p-6 transition-all duration-200 ease-linear group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:h-12">
        <Link
          href="/dashboard"
          onClick={handleNavClick}
          className="flex items-center gap-3 overflow-hidden group-data-[collapsible=icon]:gap-0"
        >
          <Image
            src="/Ellipse.svg"
            alt="Logo"
            width={30}
            height={30}
            className="shrink-0"
          />
          <span className="text-lg font-semibold text-sidebar-foreground truncate transition-opacity duration-200 group-data-[collapsible=icon]:hidden">
            Logo
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-3 py-2 group-data-[collapsible=icon]:px-0">
        <SidebarMenu className="gap-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.url || pathname.startsWith(`${item.url}/`);
            return (
              <SidebarMenuItem key={item.title} className="relative">
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full" />
                )}
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.title}
                  className={cn(
                    "h-[48px] gap-3 rounded-none px-5 text-sidebar-foreground/70 hover:bg-transparent hover:text-sidebar-foreground",
                    "data-[active=true]:bg-transparent data-[active=true]:text-sidebar-foreground data-[active=true]:font-medium",
                    "group-data-[collapsible=icon]:h-12 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center",
                  )}
                >
                  <Link
                    href={item.url}
                    onClick={handleNavClick}
                    className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:w-full"
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
