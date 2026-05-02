"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FruitFloat } from "./FruitFloat";

const flavors = [
  {
    name: "Pastèque",
    ghost: "PASTÈQUE",
    english: "Watermelon Sparkling",
    tagline: "Fraîcheur d'été",
    description:
      "60% de jus de pastèque pur, légèrement pétillant. Un goût sucré et rafraîchissant qui évoque les chaudes journées d'été.",
    accent: "#ff3d5a",
    bg: "linear-gradient(145deg, #fff1f3 0%, #ffe4e8 100%)",
    border: "rgba(255,61,90,0.2)",
    ml: "250ml",
    fruit: "watermelon" as const,
  },
  {
    name: "Ananas",
    ghost: "ANANAS",
    english: "Pineapple Sparkling",
    tagline: "Voyage exotique",
    description:
      "60% de jus d'ananas pur, pétillant et exotique. La saveur tropicale par excellence qui transporte vos papilles.",
    accent: "#ca8a04",
    bg: "linear-gradient(145deg, #fefce8 0%, #fef3c7 100%)",
    border: "rgba(202,138,4,0.2)",
    ml: "250ml",
    fruit: "pineapple" as const,
    featured: true,
  },
  {
    name: "Raisin",
    ghost: "RAISIN",
    english: "Grape Sparkling",
    tagline: "Douceur pourpre",
    description:
      "60% de jus de raisin pur, subtilement pétillant. Un goût doux et fruité avec une touche d'élégance naturelle.",
    accent: "#7c3aed",
    bg: "linear-gradient(145deg, #faf5ff 0%, #ede9fe 100%)",
    border: "rgba(124,58,237,0.2)",
    ml: "260ml",
    fruit: "grape" as const,
  },
];

/* ── inline SVG fruit map ── */
import { WatermelonCard, PineappleCard, GrapeCard } from "./CardFruits";

function FlavorCard({ f, i }: { f: (typeof flavors)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const FruitComp = f.fruit === "watermelon" ? WatermelonCard : f.fruit === "pineapple" ? PineappleCard : GrapeCard;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className={`relative rounded-3xl p-8 flex flex-col overflow-hidden cursor-pointer group ${
        f.featured ? "md:-mt-6 md:mb-6 ring-2" : ""
      }`}
      style={{
        background: f.bg,
        border: `1px solid ${f.border}`,
        boxShadow: f.featured
          ? `0 20px 60px ${f.accent}22, 0 0 0 2px ${f.accent}40`
          : `0 4px 24px ${f.accent}12`,
        ...(f.featured ? { "--tw-ring-color": f.accent } as React.CSSProperties : {}),
      }}
    >
      {/* Ghost watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold leading-none whitespace-nowrap"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(5rem, 14vw, 9rem)",
            color: f.accent,
            opacity: 0.07,
            letterSpacing: "0.05em",
          }}
        >
          {f.ghost}
        </span>
      </div>

      {/* Featured badge */}
      {f.featured && (
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-bold tracking-wider"
          style={{ background: f.accent }}
        >
          POPULAIRE
        </div>
      )}

      {/* Fruit illustration — animated float */}
      <div className="flex justify-center mb-4 mt-2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          <FruitComp size={120} />
        </motion.div>
      </div>

      {/* Dot + label */}
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: f.accent }} />
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: f.accent }}>
          {f.english}
        </span>
      </div>

      <h3
        className="leading-none mb-1"
        style={{ fontFamily: "var(--font-bebas)", fontSize: "2.6rem", color: "#0f172a" }}
      >
        {f.name}
      </h3>
      <p className="text-sm mb-3 font-medium" style={{ color: f.accent }}>
        {f.tagline}
      </p>
      <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#475569" }}>
        {f.description}
      </p>

      {/* Stats bar */}
      <div
        className="flex items-center justify-around pt-4"
        style={{ borderTop: `1px solid ${f.accent}20` }}
      >
        {[
          ["60%", "Jus pur"],
          [f.ml, "Volume"],
          ["0%", "Alcool"],
        ].map(([val, lbl]) => (
          <div key={lbl} className="text-center">
            <div
              className="leading-none text-2xl"
              style={{ fontFamily: "var(--font-bebas)", color: f.accent }}
            >
              {val}
            </div>
            <div className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>
              {lbl}
            </div>
          </div>
        ))}
      </div>

      {/* Hover shimmer */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at 50% 0%, ${f.accent}10, transparent 60%)`,
        }}
      />
    </motion.div>
  );
}

export default function Products() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="saveurs"
      className="relative py-24 sm:py-32 px-6"
      style={{
        background: "linear-gradient(160deg, #faf5ff 0%, #ede9fe 40%, #fdf4ff 100%)",
      }}
      aria-label="Nos saveurs"
    >
      {/* Rainbow top line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, #ff3d5a, #f5c400, #22c55e, #06b6d4, #8b5cf6)",
        }}
      />

      {/* Fruits from sides */}
      <FruitFloat fruit="leaf"   side="left"  top="10%" size={110} delay={0}   rotation={-20} />
      <FruitFloat fruit="orange" side="left"  top="60%" size={90}  delay={0.3} rotation={15}  />
      <FruitFloat fruit="grape"  side="right" top="8%"  size={105} delay={0.1} rotation={10}  />
      <FruitFloat fruit="leaf"   side="right" top="65%" size={85}  delay={0.4} rotation={-15} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#ca8a04" }}
          >
            Nos Saveurs
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={headInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="leading-none mb-4"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem, 9vw, 7rem)",
                color: "#0f172a",
              }}
            >
              CHOISISSEZ{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #ff3d5a, #f5c400, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                VOTRE VOYAGE
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base max-w-lg mx-auto"
            style={{ color: "#64748b" }}
          >
            Trois saveurs exotiques, 100% naturelles, pétillantes à 60% de jus pur.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {flavors.map((f, i) => (
            <FlavorCard key={f.name} f={f} i={i} />
          ))}
        </div>

        {/* Can image centred below cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/cans-only.png"
              alt="Les trois saveurs Asian Merveille"
              width={380}
              height={415}
              className="w-full max-w-sm h-auto drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
