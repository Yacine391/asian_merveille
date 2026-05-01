"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── SVG fruits ── */
const WatermelonSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size * 0.65} viewBox="0 0 120 78" fill="none">
    <path d="M0 78 Q60-20 120 78 Z" fill="#22863a" />
    <path d="M6 78 Q60-10 114 78 Z" fill="#4ade80" />
    <path d="M14 78 Q60 5 106 78 Z" fill="#ff3d5a" />
    <ellipse cx="38" cy="68" rx="3.5" ry="4" fill="#111" transform="rotate(-10 38 68)" />
    <ellipse cx="60" cy="60" rx="3.5" ry="4" fill="#111" />
    <ellipse cx="82" cy="68" rx="3.5" ry="4" fill="#111" transform="rotate(10 82 68)" />
    <ellipse cx="50" cy="72" rx="3" ry="3.5" fill="#111" transform="rotate(-5 50 72)" />
    <ellipse cx="72" cy="64" rx="3" ry="3.5" fill="#111" transform="rotate(5 72 64)" />
  </svg>
);

const PineappleSVG = ({ size }: { size: number }) => (
  <svg width={size * 0.65} height={size} viewBox="0 0 78 120" fill="none">
    {/* crown leaves */}
    <path d="M39 42 C34 20 18 18 28 2 C32 14 37 18 39 14 C41 18 46 14 50 2 C60 18 44 20 39 42Z" fill="#16a34a" />
    <path d="M39 42 C26 22 10 28 18 12 C24 22 32 26 39 30Z" fill="#22c55e" />
    <path d="M39 42 C52 22 68 28 60 12 C54 22 46 26 39 30Z" fill="#22c55e" />
    {/* body */}
    <ellipse cx="39" cy="82" rx="28" ry="38" fill="#f5c400" />
    {/* diamond pattern */}
    {[58, 70, 82, 94, 106].map((y, i) => (
      <path key={i} d={`M${11 + (i % 2) * 14} ${y} L39 ${y - 12} L${67 - (i % 2) * 14} ${y} L39 ${y + 12} Z`}
        fill="#e5a800" opacity="0.45" />
    ))}
    <ellipse cx="39" cy="82" rx="28" ry="38" fill="url(#pineGrad)" opacity="0.2" />
    <defs>
      <radialGradient id="pineGrad" cx="35%" cy="35%">
        <stop offset="0%" stopColor="white" stopOpacity="0.6" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

const GrapeSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 100 110" fill="none">
    <path d="M50 8 Q62 2 68 -2" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 8 Q38 2 30 5 Q40 16 50 8Z" fill="#16a34a" />
    {/* grapes */}
    {[
      [50, 24, 13], [34, 38, 13], [66, 38, 13],
      [20, 54, 12], [50, 52, 13], [80, 54, 12],
      [33, 70, 11], [67, 70, 11],
      [50, 86, 11],
    ].map(([cx, cy, r], i) => (
      <circle key={i} cx={cx} cy={cy} r={r}
        fill={i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#7c3aed" : "#a78bfa"} />
    ))}
    {/* shine */}
    {[
      [44, 20], [28, 34], [60, 34], [14, 50], [44, 48], [74, 50],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={3} fill="white" opacity="0.25" />
    ))}
  </svg>
);

const LeafSVG = ({ size }: { size: number }) => (
  <svg width={size * 0.55} height={size} viewBox="0 0 55 100" fill="none">
    <path d="M27 100 Q-2 72 4 42 Q10 14 27 0 Q44 14 50 42 Q56 72 27 100Z" fill="#22c55e" />
    <path d="M27 100 Q6 72 10 42 Q14 22 27 4 Z" fill="#16a34a" opacity="0.4" />
    <path d="M27 0 L27 100" stroke="#15803d" strokeWidth="2" />
    <path d="M27 28 Q14 22 11 32" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M27 46 Q40 40 43 50" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M27 64 Q14 58 12 68" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M27 80 Q40 74 42 84" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const OrangeSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="53" r="44" fill="#fb923c" />
    <circle cx="50" cy="53" r="38" fill="#f97316" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <line key={i} x1="50" y1="15" x2="50" y2="91"
        stroke="#ea6a00" strokeWidth="1.2"
        transform={`rotate(${deg} 50 53)`} />
    ))}
    <circle cx="50" cy="53" r="38" fill="url(#orgGrad)" opacity="0.35" />
    <path d="M50 9 Q58 3 63 5" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M50 9 Q42 2 36 6 Q42 14 50 9Z" fill="#22c55e" />
    <defs>
      <radialGradient id="orgGrad" cx="30%" cy="30%">
        <stop offset="0%" stopColor="white" stopOpacity="0.7" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

const FRUITS = { watermelon: WatermelonSVG, pineapple: PineappleSVG, grape: GrapeSVG, leaf: LeafSVG, orange: OrangeSVG };

export type FruitType = keyof typeof FRUITS;

interface FruitFloatProps {
  fruit: FruitType;
  side: "left" | "right";
  top: string;
  size?: number;
  delay?: number;
  rotation?: number;
  floatAmplitude?: number;
}

export function FruitFloat({
  fruit, side, top, size = 90, delay = 0, rotation = 0, floatAmplitude = 14,
}: FruitFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const FruitComponent = FRUITS[fruit];

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      initial={{ x: side === "left" ? -180 : 180, opacity: 0, rotate: side === "left" ? -25 : 25 }}
      animate={isInView ? { x: 0, opacity: 1, rotate: rotation } : {}}
      transition={{ duration: 0.9, delay, type: "spring", stiffness: 70, damping: 15 }}
      className="absolute pointer-events-none z-10"
      style={{ top, [side]: 0 }}
    >
      <motion.div
        animate={{ y: [0, -floatAmplitude, 0], rotate: [rotation, rotation + 4, rotation] }}
        transition={{ duration: 3.5 + delay * 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FruitComponent size={size} />
      </motion.div>
    </motion.div>
  );
}
