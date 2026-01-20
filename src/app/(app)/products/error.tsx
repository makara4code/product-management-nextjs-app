"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { logger } from "@/lib/logger";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("Products module error", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="h-10 w-10 text-destructive" />
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold">Failed to load products</h1>
        <p className="text-muted-foreground max-w-md">
          We couldn&apos;t load the products data. This might be a temporary
          issue with our servers.
        </p>
      </div>

      {process.env.NODE_ENV === "development" && (
        <pre className="max-w-lg max-h-32 overflow-auto rounded-lg bg-muted p-4 text-xs text-left w-full">
          {error.message}
        </pre>
      )}

      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={reset} size="lg">
          <RefreshCw className="mr-2 h-4 w-4" />
          Try again
        </Button>
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
