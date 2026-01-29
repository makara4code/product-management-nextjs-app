"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { logger } from "@/lib/logger";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("Global error", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
            <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold">Something went wrong</h1>
            <p className="text-muted-foreground max-w-md">
              A critical error has occurred. Please try refreshing the page.
            </p>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="max-w-lg w-full rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-left">
              <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                Error Details (Development Only)
              </p>
              <pre className="max-h-32 overflow-auto text-xs text-red-600 dark:text-red-400">
                {error.message}
              </pre>
              {error.digest && (
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}

          <Button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
