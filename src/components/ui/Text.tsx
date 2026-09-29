import React from "react";
import { cn } from "@/lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  variant?: "default" | "muted" | "subtle" | "primary";
}

const sizeClasses = {
  xs: "text-xs leading-normal",
  sm: "text-sm leading-relaxed",
  base: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
  xl: "text-xl leading-relaxed",
};

const variantClasses = {
  default: "text-foreground",
  muted: "text-muted",
  subtle: "text-muted-foreground",
  primary: "text-primary font-medium",
};

export function Text({
  as: Component = "p",
  size = "base",
  variant = "default",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component className={cn(sizeClasses[size], variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
}
