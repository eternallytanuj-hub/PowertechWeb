import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/lib/utils";

export interface CustomLinkProps
  extends NextLinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  variant?: "default" | "muted" | "primary" | "underline";
}

const variantClasses = {
  default: "text-foreground hover:text-primary transition-colors",
  muted: "text-muted hover:text-primary transition-colors",
  primary: "text-secondary hover:text-secondary/80 font-medium transition-colors",
  underline: "text-secondary underline underline-offset-4 hover:opacity-80 transition-opacity",
};

export function CustomLink({
  href,
  variant = "default",
  className,
  children,
  target,
  rel,
  ...props
}: CustomLinkProps) {
  const isExternal = typeof href === "string" && (href.startsWith("http") || href.startsWith("//"));

  if (isExternal) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={cn(variantClasses[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </NextLink>
  );
}
