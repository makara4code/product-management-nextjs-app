"use client";

import { useEffect, useState, type PropsWithChildren } from "react";
import { WifiOff, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function OfflineContent() {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 rounded-full bg-muted p-4">
            <WifiOff className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle>Connect to the internet</CardTitle>
          <CardDescription>
            You're offline. Check your connection.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Retry
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function OfflineDetector({ children }: PropsWithChildren) {
  const [isOnline, setIsOnline] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set initial state after hydration
    setIsOnline(navigator.onLine);
    setIsHydrated(true);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // During SSR/hydration, always show children to avoid mismatch
  if (!isHydrated) {
    return <>{children}</>;
  }

  // When offline, show offline content
  if (!isOnline) {
    return <OfflineContent />;
  }

  return <>{children}</>;
}
