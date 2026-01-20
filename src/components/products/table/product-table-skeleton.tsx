"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

interface ProductTableSkeletonProps {
  rowCount: number;
  isLargeScreen: boolean;
}

export function ProductTableSkeleton({
  rowCount,
  isLargeScreen,
}: ProductTableSkeletonProps) {
  return (
    <>
      {Array.from({ length: rowCount }).map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <Skeleton className="h-4 w-4" />
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 md:h-12 md:w-12 rounded-lg shrink-0" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 md:w-32" />
                <Skeleton className="h-3 w-16 md:w-20" />
              </div>
            </div>
          </TableCell>
          {isLargeScreen && (
            <TableCell>
              <Skeleton className="h-4 w-16" />
            </TableCell>
          )}
          <TableCell>
            <Skeleton className="h-4 w-16" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-12" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-16" />
          </TableCell>
          {isLargeScreen && (
            <TableCell>
              <Skeleton className="h-4 w-20" />
            </TableCell>
          )}
          <TableCell>
            <Skeleton className="h-4 w-12" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
