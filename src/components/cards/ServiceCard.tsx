import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "@/types";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group border-border bg-surface hover:border-secondary relative flex flex-col justify-between rounded-lg border p-6 shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <div>
        <h3 className="text-foreground group-hover:text-secondary text-xl font-bold tracking-tight transition-colors">
          {service.title}
        </h3>
        <p className="text-muted mt-3 text-sm leading-relaxed">{service.shortDescription}</p>

        {service.capabilities && service.capabilities.length > 0 && (
          <div className="border-border/60 mt-4 border-t pt-4">
            <p className="text-muted mb-2 text-xs font-semibold tracking-wider uppercase">
              Capabilities:
            </p>
            <ul className="text-foreground/80 space-y-1.5 text-xs">
              {service.capabilities.slice(0, 3).map((cap, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="text-secondary mt-0.5 mr-1.5 h-3.5 w-3.5 shrink-0" />
                  <span className="line-clamp-1">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-border/40 mt-6 border-t pt-4">
        <Link
          href={`/services/${service.slug}`}
          className="text-secondary group-hover:text-primary focus-visible:ring-secondary inline-flex items-center text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          <span>Explore Service</span>
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
