import React from "react";
import { cn } from "@/lib/utils";

export interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "accent" | "muted" | "subtle";
  shape?: "square" | "rounded" | "circle";
}

const sizeClasses = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
  xl: "h-16 w-16 text-2xl",
};

const variantClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/20 text-foreground",
  muted: "bg-slate-100 text-muted",
  subtle: "bg-background border border-border text-foreground",
};

const shapeClasses = {
  square: "rounded-none",
  rounded: "rounded-lg",
  circle: "rounded-full",
};

export function IconWrapper({
  size = "md",
  variant = "primary",
  shape = "rounded",
  className,
  children,
  ...props
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center transition-colors",
        sizeClasses[size],
        variantClasses[variant],
        shapeClasses[shape],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
