import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: HeadingTag = "h2",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "mb-8 max-w-3xl md:mb-12",
        isCentered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="text-secondary mb-2 text-xs font-bold tracking-widest uppercase">{eyebrow}</p>
      )}
      <HeadingTag className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        {title}
      </HeadingTag>
      {description && (
        <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">{description}</p>
      )}
    </div>
  );
}
