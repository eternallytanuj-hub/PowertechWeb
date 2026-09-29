import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "accent" | "outline" | "success" | "warning";
  size?: "sm" | "md";
}

const variantClasses = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  outline: "border border-border text-foreground bg-transparent",
  success: "bg-green-100 text-success border border-green-200",
  warning: "bg-amber-100 text-warning border border-amber-200",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-[11px] font-medium rounded",
  md: "px-2.5 py-1 text-xs font-semibold rounded-md",
};

export function Badge({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center tracking-wide uppercase transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
