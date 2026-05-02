"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FruitFloat } from "./FruitFloat";
import { WatermelonCard, PineappleCard, GrapeCard } from "./CardFruits";

const flavors = [
  {
    name: "Pastèque",
    ghost: "PASTÈQUE",
    english: "Watermelon Energy",
    tagline: "Hydratation & Énergie",
    description:
      "60% de jus de pastèque pur. Riche en électrolytes naturels pour une hydratation optimale pendant l'effort. Le boost rafraîchissant idéal avant ou après le sport.",
    accent: "#ff3d5a",
    bg: "linear-gradient(145deg, #fff1f3 0%, #ffe4e8 100%)",
    border: "rgba(255,61,90,0.2)",
    canSrc: "/images/can-watermelon.png",
    ml: "250ml",
    FruitComp: WatermelonCard,
  },
  {
    name: "Ananas",
    ghost: "ANANAS",
    english: "Pineapple Energy",
    tagline: "Boost Tropical",
    description:
      "60% de jus d'ananas pur. Vitamines C et énergie naturelle pour performer au maximum. Le shot tropical qui booste ta motivation et ta concentration.",
    accent: "#ca8a04",
    bg: "linear-gradient(145deg, #fefce8 0%, #fef3c7 100%)",
    border: "rgba(202,138,4,0.2)",
    canSrc: "/images/can-pineapple.png",
    ml: "250ml",
    FruitComp: PineappleCard,
    featured: true,
  },
  {
    name: "Raisin",
    ghost: "RAISIN",
    english: "Grape Energy",
    tagline: "Énergie & Concentration",
    description:
      "60% de jus de raisin pur. Antioxydants et sucres naturels pour maintenir ta concentration et ton énergie tout au long de la journée. Idéal pour rester éveillé.",
    accent: "#7c3aed",
    bg: "linear-gradient(145deg, #faf5ff 0%, #ede9fe 100%)",
    border: "rgba(124,58,237,0.2)",
    canSrc: "/images/can-grape.png",
    ml: "260ml",
    FruitComp: GrapeCard,
  },
];

function FlavorCard({ f, i }: { f: (typeof flavors)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className={`relative rounded-3xl p-7 flex flex-col overflow-hidden cursor-pointer group ${
        f.featured ? "md:-mt-6 md:mb-6" : ""
      }`}
      style={{
        background: f.bg,
        border: `1px solid ${f.border}`,
        boxShadow: f.featured
          ? `0 24px 60px ${f.accent}28, 0 0 0 2px ${f.accent}35`
          : `0 4px 24px ${f.accent}12`,
      }}
    >
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(5rem, 13vw, 8.5rem)",
            color: f.accent,
            opacity: 0.07,
            letterSpacing: "0.06em",
            whiteSpace: "nowrap",
          }}
        >
          {f.ghost}
        </span>
      </div>

      {/* Popular badge */}
      {f.featured && (
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-bold tracking-wider z-10"
          style={{ background: f.accent }}
        >
          POPULAIRE
        </motion.div>
      )}

      {/* Can image — main visual */}
      <div className="relative flex justify-center items-end h-40 mb-2">
        {/* Fruit SVG behind the can */}
        <div className="absolute -bottom-2 opacity-20" aria-hidden="true">
          <f.FruitComp size={90} />
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Image
            src={f.canSrc}
            alt={`Canette Asian Merveille ${f.name}`}
            width={130}
            height={200}
            className="h-36 w-auto object-contain drop-shadow-xl"
          />
        </motion.div>
        {/* Color halo under can */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full blur-lg"
          style={{ background: f.accent, opacity: 0.25 }}
        />
      </div>

      {/* Dot + label */}
      <div className="flex items-center gap-2 mb-1 mt-2">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: f.accent }} />
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: f.accent }}>
          {f.english}
        </span>
      </div>

      <h3
        className="leading-none mb-1"
        style={{ fontFamily: "var(--font-bebas)", fontSize: "2.4rem", color: "#0f172a" }}
      >
        {f.name}
      </h3>
      <p className="text-sm mb-3 font-semibold" style={{ color: f.accent }}>
        {f.tagline}
      </p>
      <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#475569" }}>
        {f.description}
      </p>

      {/* Stats */}
      <div
        className="flex items-center justify-around pt-4"
        style={{ borderTop: `1px solid ${f.accent}20` }}
      >
        {[["60%", "Jus pur"], [f.ml, "Volume"], ["0%", "Alcool"]].map(([val, lbl]) => (
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
        style={{ background: `radial-gradient(circle at 50% 0%, ${f.accent}10, transparent 60%)` }}
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
      style={{ background: "linear-gradient(160deg, #faf5ff 0%, #ede9fe 40%, #fdf4ff 100%)" }}
      aria-label="Nos saveurs"
    >
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #ff3d5a, #f5c400, #22c55e, #06b6d4, #8b5cf6)" }} />

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
            Boissons Énergisantes
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
              <span style={{
                background: "linear-gradient(90deg, #ff3d5a, #f5c400, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                VOTRE BOOST
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base max-w-xl mx-auto"
            style={{ color: "#64748b" }}
          >
            Trois saveurs exotiques, 60% de jus naturel — énergie pure pour le sport, la performance et l&apos;éveil.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {flavors.map((f, i) => (
            <FlavorCard key={f.name} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
