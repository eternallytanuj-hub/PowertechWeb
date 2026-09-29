import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-muted flex py-3 text-sm", className)}>
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="text-muted hover:text-primary inline-flex items-center transition-colors"
          >
            <Home className="mr-1.5 h-4 w-4" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="inline-flex items-center">
              <ChevronRight className="text-muted/60 h-4 w-4" aria-hidden="true" />
              {isLast ? (
                <span className="text-foreground ml-1 font-medium md:ml-2" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-muted hover:text-primary ml-1 transition-colors md:ml-2"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
