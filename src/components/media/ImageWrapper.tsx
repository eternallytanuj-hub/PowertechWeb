import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface ImageWrapperProps extends Omit<ImageProps, "alt"> {
  alt: string;
  caption?: string;
  aspectRatio?: "video" | "square" | "wide" | "auto";
  containerClassName?: string;
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  auto: "",
};

export function ImageWrapper({
  alt,
  caption,
  aspectRatio = "auto",
  containerClassName,
  className,
  fill,
  ...props
}: ImageWrapperProps) {
  return (
    <figure className={cn("overflow-hidden", containerClassName)}>
      <div
        className={cn(
          "relative overflow-hidden bg-slate-100",
          aspectClasses[aspectRatio],
          fill && "h-full w-full"
        )}
      >
        <Image
          alt={alt}
          fill={fill}
          className={cn("object-cover transition-opacity duration-300", className)}
          {...props}
        />
      </div>
      {caption && (
        <figcaption className="text-muted mt-2 text-center text-xs">{caption}</figcaption>
      )}
    </figure>
  );
}
