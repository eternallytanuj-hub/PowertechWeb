"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Zap } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentPercent = Math.round((window.scrollY / totalScroll) * 100);
        setScrollPercent(Math.min(100, Math.max(0, currentPercent)));
      }
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Top Fixed Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 shadow-sm shadow-orange-500/50"
          style={{ scaleX, transformOrigin: "0%" }}
        />
      </div>

      {/* Floating Back to Top with Scroll Percentage Badge */}
      {showBackToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-center"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-orange-500/40 bg-[#111650]/90 text-white shadow-xl shadow-orange-500/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-orange-400 hover:bg-[#EA580C]"
          >
            {/* Circular Progress Ring */}
            <svg className="absolute inset-0 h-full w-full -rotate-90 p-1" viewBox="0 0 36 36">
              <path
                className="text-white/10"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-orange-400 transition-all duration-150"
                strokeDasharray={`${scrollPercent}, 100`}
                strokeWidth="2.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
          <span className="mt-1 rounded bg-[#0b0e2b]/80 px-1.5 py-0.5 text-[9px] font-mono font-bold text-orange-400 backdrop-blur-xs">
            {scrollPercent}%
          </span>
        </motion.div>
      )}
    </>
  );
}
