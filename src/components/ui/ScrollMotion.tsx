"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  Variants,
  HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView"> {
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
  children: React.ReactNode;
}

export function ScrollReveal({
  direction = "up",
  delay = 0,
  duration = 0.65,
  distance = 32,
  scale = 0.98,
  className,
  viewportMargin = "-80px",
  once = true,
  children,
  ...props
}: ScrollRevealProps) {
  const shouldReduce = useReducedMotion();

  const getInitial = () => {
    if (shouldReduce) return { opacity: 0, x: 0, y: 0, scale: 1 };
    switch (direction) {
      case "up":
        return { opacity: 0, x: 0, y: distance, scale };
      case "down":
        return { opacity: 0, x: 0, y: -distance, scale };
      case "left":
        return { opacity: 0, x: distance, y: 0, scale };
      case "right":
        return { opacity: 0, x: -distance, y: 0, scale };
      default:
        return { opacity: 0, x: 0, y: 0, scale };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: shouldReduce ? 0.2 : duration,
          delay,
          ease: [0.22, 1, 0.36, 1], // Custom smooth cubic-bezier
        },
      }}
      viewport={{ once, margin: viewportMargin }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface ScrollParallaxProps {
  speed?: number; // negative for reverse, positive for forward (e.g. 0.15 to 0.4)
  className?: string;
  children: React.ReactNode;
}

export function ScrollParallax({ speed = 0.2, className, children }: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? [0, 0] : [speed * -100, speed * 100]
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

export interface ScrollStaggerContainerProps extends HTMLMotionProps<"div"> {
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  children: React.ReactNode;
}

export function ScrollStaggerContainer({
  staggerChildren = 0.12,
  delayChildren = 0.05,
  className,
  children,
  ...props
}: ScrollStaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStaggerItem({
  children,
  className,
  yOffset = 24,
}: {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: yOffset, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
