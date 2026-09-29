import React from "react";
import { Award, CheckCircle } from "lucide-react";
import { CertificationItem } from "@/types";
import { cn } from "@/lib/utils";

export interface CertificationCardProps {
  certification: CertificationItem;
  className?: string;
}

export function CertificationCard({ certification, className }: CertificationCardProps) {
  return (
    <div
      className={cn(
        "border-border bg-surface flex flex-col justify-between rounded-lg border p-6 shadow-sm transition hover:shadow-md",
        className
      )}
    >
      <div>
        <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg">
          <Award className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-foreground mt-4 text-lg font-bold">{certification.name}</h3>
        <p className="text-secondary mt-1 text-sm font-medium">{certification.issuingBody}</p>

        {certification.certificateNumber && (
          <div className="bg-background text-muted border-border/60 mt-4 rounded border p-2.5 text-xs">
            <span className="text-foreground font-semibold">Reg / Cert No: </span>
            <span>{certification.certificateNumber}</span>
          </div>
        )}
      </div>

      <div className="border-border text-muted mt-6 flex items-center justify-between border-t pt-4 text-xs">
        <span>{certification.date ? `Issued: ${certification.date}` : "Date: On File"}</span>
        <span className="text-success inline-flex items-center">
          <CheckCircle className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
          Verified
        </span>
      </div>
    </div>
  );
}
