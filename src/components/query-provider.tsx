"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type PropsWithChildren } from "react";

export function QueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes - data considered fresh for this duration
            gcTime: 30 * 60 * 1000, // 30 minutes - cache kept for this duration
            refetchOnWindowFocus: false,
            refetchOnMount: false, // Don't refetch when component mounts if data is fresh
            refetchOnReconnect: false, // Don't refetch on network reconnect
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
