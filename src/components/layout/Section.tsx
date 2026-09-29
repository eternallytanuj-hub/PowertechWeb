import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: "default" | "surface" | "primary" | "muted";
  spacing?: "sm" | "md" | "lg" | "xl" | "none";
}

const variantClasses = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  primary: "bg-primary text-primary-foreground",
  muted: "bg-slate-50 text-foreground",
};

const spacingClasses = {
  none: "py-0",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

export function Section({
  as: Component = "section",
  variant = "default",
  spacing = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn("relative w-full", variantClasses[variant], spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
