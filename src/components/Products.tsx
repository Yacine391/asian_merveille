"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FruitFloat } from "./FruitFloat";

const flavors = [
  {
    name: "Pastèque",
    ghost: "PASTÈQUE",
    english: "Watermelon Energy",
    tagline: "Hydratation & Énergie",
    description:
      "60% de jus de pastèque pur. Riche en électrolytes naturels pour une hydratation optimale pendant l'effort. Le boost rafraîchissant idéal avant ou après le sport.",
    accent: "#ff3d5a",
    cardBg: "linear-gradient(145deg, #ff8fa3 0%, #ff3d5a 60%, #c0392b 100%)",
    canIndex: 0,
    ml: "250ml",
    fruitSrc: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=200&q=80",
  },
  {
    name: "Ananas",
    ghost: "ANANAS",
    english: "Pineapple Energy",
    tagline: "Boost Tropical",
    description:
      "60% de jus d'ananas pur. Vitamines C et énergie naturelle pour performer au maximum. Le shot tropical qui booste ta motivation et ta concentration.",
    accent: "#d97706",
    cardBg: "linear-gradient(145deg, #fde68a 0%, #f5c400 55%, #d97706 100%)",
    canIndex: 1,
    ml: "250ml",
    featured: true,
    fruitSrc: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=200&q=80",
  },
  {
    name: "Raisin",
    ghost: "RAISIN",
    english: "Grape Energy",
    tagline: "Énergie & Concentration",
    description:
      "60% de jus de raisin pur. Antioxydants et sucres naturels pour maintenir ta concentration et ton énergie tout au long de la journée. Idéal pour rester éveillé.",
    accent: "#7c3aed",
    cardBg: "linear-gradient(145deg, #c4b5fd 0%, #8b5cf6 55%, #6d28d9 100%)",
    canIndex: 2,
    ml: "260ml",
    fruitSrc: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=200&q=80",
  },
];

const canImages = [
  "/images/can-crop-watermelon.png",
  "/images/can-crop-pineapple.png",
  "/images/can-crop-grape.png",
];

function CanImage({ canIndex, className }: { canIndex: 0 | 1 | 2; className?: string }) {
  return (
    <div className={`flex justify-center items-end ${className ?? ""}`} style={{ height: "260px", paddingBottom: "8px" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={canImages[canIndex]}
        alt="Canette Asian Merveille"
        style={{
          height: "100%",
          width: "auto",
          objectFit: "contain",
          filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.35))",
        }}
      />
    </div>
  );
}

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
      className={`relative rounded-3xl overflow-hidden cursor-pointer group flex flex-col ${
        f.featured ? "md:-mt-6 md:mb-6" : ""
      }`}
      style={{
        background: f.cardBg,
        boxShadow: f.featured
          ? `0 24px 60px ${f.accent}50`
          : `0 8px 32px ${f.accent}28`,
      }}
    >
      {/* Ghost watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(4rem, 12vw, 7.5rem)",
            color: "white",
            opacity: 0.12,
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
          style={{ background: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.4)" }}
        >
          POPULAIRE
        </motion.div>
      )}

      {/* ── Can image + fruit accent ── */}
      <div className="relative z-10 mt-4">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        >
          <CanImage canIndex={f.canIndex as 0 | 1 | 2} />
        </motion.div>
        {/* Fruit photo accent — bottom-right of can area */}
        {f.fruitSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.14 + 0.3 }}
            className="absolute bottom-2 right-4 z-20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={f.fruitSrc}
              alt={f.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "3px solid rgba(255,255,255,0.4)",
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))",
              }}
            />
          </motion.div>
        )}
      </div>

      {/* ── Info ── */}
      <div className="relative z-10 p-6 flex flex-col flex-1">
        {/* Dot + english label */}
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
          <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
            {f.english}
          </span>
        </div>

        <h3
          className="leading-none mb-1 text-white"
          style={{ fontFamily: "var(--font-bebas)", fontSize: "2.4rem" }}
        >
          {f.name}
        </h3>
        <p className="text-sm mb-3 font-semibold text-white/80">{f.tagline}</p>
        <p className="text-sm leading-relaxed flex-1 mb-5 text-white/70">{f.description}</p>

        {/* Stats */}
        <div
          className="flex items-center justify-around pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          {[["60%", "Jus pur"], [f.ml, "Volume"], ["0%", "Alcool"]].map(([val, lbl]) => (
            <div key={lbl} className="text-center">
              <div
                className="leading-none text-2xl text-white"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                {val}
              </div>
              <div className="text-xs mt-0.5 text-white/50">{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover shimmer */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.12), transparent 60%)" }} />
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
