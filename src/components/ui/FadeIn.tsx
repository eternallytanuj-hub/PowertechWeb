"use client";

import React, { createContext, useContext } from "react";
import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const StaggerContext = createContext(false);

export interface FadeInProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "variants" | "whileInView"
> {
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  fullWidth?: boolean;
}

export function FadeIn({
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 28,
  fullWidth = false,
  className,
  children,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(StaggerContext);

  const getOffset = () => {
    if (shouldReduceMotion || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: isInStaggerGroup ? undefined : delay,
        ease: "easeOut",
      },
    },
  };

  if (isInStaggerGroup) {
    return (
      <motion.div
        variants={variants}
        className={cn(fullWidth ? "w-full" : undefined, className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      className={cn(fullWidth ? "w-full" : undefined, className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface FadeInStaggerProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "variants" | "whileInView"
> {
  staggerDelay?: number;
  delayChildren?: number;
  fullWidth?: boolean;
}

export function FadeInStagger({
  staggerDelay = 0.12,
  delayChildren = 0,
  fullWidth = false,
  className,
  children,
  ...props
}: FadeInStaggerProps) {
  return (
    <StaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          staggerChildren: staggerDelay,
          delayChildren,
        }}
        className={cn(fullWidth ? "w-full" : undefined, className)}
        {...props}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
}
