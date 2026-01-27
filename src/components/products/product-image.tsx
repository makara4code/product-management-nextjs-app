"use client";

import { useState } from "react";
import Image from "next/image";
import { Package } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string | null | undefined;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

const sizeConfig = {
  sm: { container: "h-10 w-10 md:h-12 md:w-12", icon: "h-5 w-5", imgSize: 48 },
  md: { container: "h-16 w-16", icon: "h-6 w-6", imgSize: 64 },
  lg: { container: "aspect-4/3 w-full", icon: "h-12 w-12", imgSize: 200 },
};

export function ProductImage({
  src,
  alt,
  size = "sm",
  className,
  priority = false,
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);
  const config = sizeConfig[size];

  const showFallback = !src || hasError;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg bg-muted shrink-0 flex items-center justify-center relative",
        config.container,
        className,
      )}
    >
      {!showFallback && (
        <Image
          src={src}
          alt={alt}
          fill={size === "lg"}
          width={size !== "lg" ? config.imgSize : undefined}
          height={size !== "lg" ? config.imgSize : undefined}
          className={cn(
            "object-cover",
            size === "lg" &&
              "object-contain transition-transform group-hover:scale-105",
          )}
          onError={() => setHasError(true)}
          priority={priority}
          sizes={
            size === "lg"
              ? "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              : undefined
          }
        />
      )}
      {showFallback && (
        <Package className={cn("text-muted-foreground", config.icon)} />
      )}
    </div>
  );
}
