import React from "react";
import Image from "next/image";
import { UserCheck } from "lucide-react";
import { LeadershipMember } from "@/types";
import { cn } from "@/lib/utils";

export interface LeadershipCardProps {
  member: LeadershipMember;
  className?: string;
}

export function LeadershipCard({ member, className }: LeadershipCardProps) {
  return (
    <div
      className={cn(
        "border-border bg-surface flex flex-col rounded-lg border p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className="relative mx-auto mb-4 aspect-square w-full max-w-[200px] overflow-hidden rounded-full bg-slate-100">
        {member.image ? (
          <Image
            src={member.image.src}
            alt={member.image.alt || member.name}
            fill
            className="object-cover"
            sizes="200px"
          />
        ) : (
          <div className="text-muted flex h-full w-full items-center justify-center">
            <UserCheck className="text-muted h-16 w-16 stroke-1" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="text-center">
        <h3 className="text-foreground text-lg font-bold">{member.name}</h3>
        <p className="text-secondary mt-1 text-xs font-semibold tracking-wider uppercase">
          {member.designation}
        </p>

        {member.qualifications && member.qualifications.length > 0 && (
          <p className="text-muted mt-2 text-xs">{member.qualifications.join(" • ")}</p>
        )}

        <p className="text-muted mt-3 line-clamp-4 text-sm leading-relaxed">{member.biography}</p>
      </div>
    </div>
  );
}
