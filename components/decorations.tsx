import React from "react";

/**
 * Decor 1: Stacked Circles/Semi-circles with Fading
 */
export const Decor1 = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="fadeGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="25" r="25" fill="currentColor" />
    <path
      d="M0 70C0 42.3858 22.3858 20 50 20C77.6142 20 100 42.3858 100 70H0Z"
      fill="url(#fadeGrad1)"
      transform="translate(0 15)"
    />
    <path
      d="M0 70C0 42.3858 22.3858 20 50 20C77.6142 20 100 42.3858 100 70H0Z"
      fill="url(#fadeGrad1)"
      transform="translate(0 50)"
      opacity="0.5"
    />
  </svg>
);

/**
 * Decor 2: Rounded Horizontal Bars with Fading
 */
export const Decor2 = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="fadeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="120" height="28" rx="14" fill="url(#fadeGrad2)" />
    <rect
      x="0"
      y="36"
      width="120"
      height="28"
      rx="14"
      fill="url(#fadeGrad2)"
      opacity="0.7"
    />
    <rect
      x="0"
      y="72"
      width="120"
      height="28"
      rx="14"
      fill="url(#fadeGrad2)"
      opacity="0.4"
    />
  </svg>
);

/**
 * Decor 3: Parallel Wavy Lines with Path Fading
 */
export const Decor3 = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 150 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="fadeGrad3" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
    </defs>
    {[...Array(8)].map((_, i) => (
      <path
        key={i}
        d={`M${10 + i * 8} 100V70C${10 + i * 8} 50 ${40 + i * 8} 50 ${40 + i * 8} 30V0`}
        stroke="url(#fadeGrad3)"
        strokeWidth="1.5"
        strokeOpacity={1 - i * 0.1}
      />
    ))}
  </svg>
);

/**
 * Decor 4: Concentric Arches with Path Fading
 */
export const Decor4 = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="fadeGrad4" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
    </defs>
    {[...Array(6)].map((_, i) => (
      <path
        key={i}
        d={`M${10 + i * 8} 120V50C${10 + i * 8} 25 ${90 - i * 8} 25 ${90 - i * 8} 50V120`}
        stroke="url(#fadeGrad4)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    ))}
  </svg>
);
