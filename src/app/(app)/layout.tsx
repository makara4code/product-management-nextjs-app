import type { PropsWithChildren } from "react";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

const SIDEBAR_COOKIE_NAME = "sidebar_state";

// Skeleton header for static shell - no hooks, pure static content
function HeaderSkeleton() {
  return (
    <header className="flex h-14 md:h-16 shrink-0 items-center justify-between border-b bg-background">
      <div className="flex justify-between w-full container items-center mx-auto px-4">
        <Skeleton className="h-6 w-32" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-20 md:h-9 md:w-24" />
          <Skeleton className="h-8 w-8 md:h-9 md:w-9 rounded-md" />
          <Skeleton className="h-8 w-8 md:h-9 md:w-9 rounded-full" />
          <Skeleton className="h-8 w-8 md:h-9 md:w-9 rounded-full" />
        </div>
      </div>
    </header>
  );
}

// Skeleton sidebar for static shell - no hooks, pure static content
function SidebarSkeleton() {
  return (
    <div className="flex h-full w-[280px] flex-col bg-sidebar border-r">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <Skeleton className="h-[30px] w-[30px] rounded-full" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>
      <div className="flex-1 px-3 py-2">
        <div className="space-y-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

// Server Component that reads runtime data (cookies)
// Wrapped in Suspense for PPR - allows layout shell to be prerendered
async function SidebarStateProvider({ children }: PropsWithChildren) {
  const cookieStore = await cookies();
  const sidebarCookie = cookieStore.get(SIDEBAR_COOKIE_NAME);
  const defaultOpen = sidebarCookie ? sidebarCookie.value !== "false" : true;

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <AppHeader />
        <main className="container mx-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

// Static shell fallback - uses skeleton components that don't require hooks
// This becomes part of the prerendered static HTML
function LayoutShell({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-svh w-full">
      <SidebarSkeleton />
      <div className="flex flex-1 flex-col">
        <HeaderSkeleton />
        <main className="container mx-auto">{children}</main>
      </div>
    </div>
  );
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<LayoutShell>{children}</LayoutShell>}>
      <SidebarStateProvider>{children}</SidebarStateProvider>
    </Suspense>
  );
}
