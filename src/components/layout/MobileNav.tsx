"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="text-foreground hover:text-primary focus-visible:ring-primary inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100 focus:outline-none focus-visible:ring-2"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-border bg-background fixed inset-x-0 top-16 z-50 border-b px-4 py-6 shadow-lg sm:px-6"
        >
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-border/50 border-b pb-2">
                {item.children ? (
                  <div>
                    <button
                      type="button"
                      className="text-foreground hover:text-primary flex w-full items-center justify-between py-2 text-base font-medium"
                      onClick={() => toggleSubmenu(item.label)}
                      aria-expanded={openSubmenu === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openSubmenu === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="border-border mt-1 ml-4 flex flex-col space-y-2 border-l-2 pl-3">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={closeMenu}
                            className="text-muted hover:text-primary py-1 text-sm"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="text-foreground hover:text-primary block py-2 text-base font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
