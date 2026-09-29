import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-primary focus-visible:ring-primary flex items-center space-x-2 text-xl font-bold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
        >
          <span className="font-extrabold tracking-wider uppercase">{SITE_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
              {item.children ? (
                <div className="relative">
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-primary focus-visible:ring-primary inline-flex items-center text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <div className="border-border bg-background w-64 rounded-md border p-2 shadow-lg">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="text-foreground hover:bg-surface hover:text-primary block rounded-md px-3 py-2 text-sm transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-foreground hover:text-primary focus-visible:ring-primary text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary hidden items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:ring-2 focus-visible:outline-none sm:inline-flex"
          >
            Enquire Now
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
