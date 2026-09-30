import React from "react";
import Image from "next/image";

interface PowertechLogoProps {
  className?: string;
  variant?: "dark" | "light"; // "dark" = dark text for light backgrounds, "light" = white text for dark backgrounds
  height?: number;
  useImage?: boolean;
}

export function PowertechLogo({
  className = "",
  variant = "dark",
  height = 42,
  useImage = false,
}: PowertechLogoProps) {
  // Ratio is ~190:78 (approx 2.44:1)
  const width = Math.round(height * 2.44);

  if (useImage) {
    const src = variant === "light" ? "/images/logo-dark-bg.png" : "/images/logo-transparent.png";

    return (
      <Image
        src={src}
        alt="Powertech Engineers Logo"
        width={width}
        height={height}
        className={`inline-block object-contain ${className}`}
        priority
      />
    );
  }

  const textColor = variant === "light" ? "#FFFFFF" : "#131B38";
  const greenColor = variant === "light" ? "#4ADE80" : "#2E6B4E";

  return (
    <svg
      viewBox="0 0 190 78"
      height={height}
      width={width}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
      aria-label="Powertech Engineers Logo"
      role="img"
    >
      {/* Top Line: POWER */}
      <text
        x="13"
        y="34"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="33"
        fill={textColor}
        letterSpacing="-0.5"
      >
        P
      </text>

      {/* Power Standby Icon as 'O' */}
      <g transform="translate(59.5, 21)">
        {/* Outer Ring with Top Opening */}
        <path
          d="M 0 -13 A 13.5 13.5 0 1 0 7.8 -11 M -7.8 -11 A 13.5 13.5 0 0 0 0 -13"
          fill="none"
          stroke="#F27A1A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        {/* Center Vertical Power Bar */}
        <line
          x1="0"
          y1="-15"
          x2="0"
          y2="-2"
          stroke="#F27A1A"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
      </g>

      {/* WER text */}
      <text
        x="80"
        y="34"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="33"
        fill={textColor}
        letterSpacing="-0.5"
      >
        WER
      </text>

      {/* Bottom Line: TECH */}
      <text
        x="13"
        y="68"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="30"
        fill={textColor}
        letterSpacing="-0.5"
      >
        TECH
      </text>

      {/* Power Cable & 2-Pin Plug */}
      <g transform="translate(102, 50)">
        {/* Horizontal Cable */}
        <line
          x1="0"
          y1="0"
          x2="56"
          y2="0"
          stroke="#F27A1A"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Plug Body */}
        <path
          d="M 56 -5.5 C 58 -5.5 59.5 -4 59.5 -2.5 L 62.5 -2.5 L 62.5 2.5 L 59.5 2.5 C 59.5 4 58 5.5 56 5.5 Z"
          fill="#F27A1A"
        />
        {/* Plug Prongs */}
        <line
          x1="62.5"
          y1="-2"
          x2="66.5"
          y2="-2"
          stroke="#F27A1A"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <line
          x1="62.5"
          y1="2"
          x2="66.5"
          y2="2"
          stroke="#F27A1A"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </g>

      {/* Sub-text: ENGINEERS */}
      <text
        x="102"
        y="67"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        fontWeight="800"
        fontSize="10.8"
        fill={greenColor}
        letterSpacing="0.8"
      >
        ENGINEERS
      </text>
    </svg>
  );
}
