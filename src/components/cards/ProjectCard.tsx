import React from "react";
import Image from "next/image";
import { MapPin, Calendar, Activity } from "lucide-react";
import { ProjectItem } from "@/types";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const primaryImage = project.images && project.images.length > 0 ? project.images[0] : null;

  return (
    <article
      className={cn(
        "group border-border bg-surface flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        {primaryImage ? (
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt || project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="text-muted flex h-full w-full items-center justify-center bg-slate-100 text-xs font-medium">
            <span>Verified Project Media Pending</span>
          </div>
        )}
        {project.status && (
          <span className="bg-primary/90 absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <span className="text-secondary text-xs font-semibold tracking-wider uppercase">
            {project.category}
          </span>
          <h3 className="text-foreground mt-2 text-lg font-bold">{project.title}</h3>
          <p className="text-muted mt-2 line-clamp-2 text-sm">{project.description}</p>
        </div>

        <div className="border-border text-muted mt-6 space-y-1.5 border-t pt-4 text-xs">
          <div className="flex items-center">
            <MapPin className="text-secondary mr-1.5 h-3.5 w-3.5 shrink-0" />
            <span>{project.location}</span>
          </div>
          {project.completionYear && (
            <div className="flex items-center">
              <Calendar className="text-secondary mr-1.5 h-3.5 w-3.5 shrink-0" />
              <span>Year: {project.completionYear}</span>
            </div>
          )}
          {project.scope && (
            <div className="flex items-center">
              <Activity className="text-secondary mr-1.5 h-3.5 w-3.5 shrink-0" />
              <span className="truncate">Scope: {project.scope}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
