import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LoadingStateProps {
  message?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const iconSizes = {
  sm: "h-5 w-5",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

export function LoadingState({
  message = "Loading engineering data...",
  size = "md",
  className,
}: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn("flex flex-col items-center justify-center p-8 text-center", className)}
    >
      <Loader2 className={cn("text-primary animate-spin", iconSizes[size])} aria-hidden="true" />
      <span className="sr-only">Loading</span>
      {message && <p className="text-muted mt-3 text-sm">{message}</p>}
    </div>
  );
}
