"use client";

import { motion } from "framer-motion";
import { FruitFloat } from "./FruitFloat";

const flavors = [
  {
    name: "Pastèque",
    english: "Watermelon",
    tagline: "Fraîcheur d'été",
    description: "60% de jus de pastèque pur, légèrement pétillant. Un goût sucré et rafraîchissant qui évoque les chaudes journées d'été.",
    badge: "#ff3d5a",
    cardBg: "linear-gradient(145deg, #fff1f3 0%, #ffe4e8 100%)",
    border: "rgba(255,61,90,0.25)",
    glow: "rgba(255,61,90,0.1)",
    ml: "250ml",
    emoji: "🍉",
  },
  {
    name: "Ananas",
    english: "Pineapple",
    tagline: "Voyage exotique",
    description: "60% de jus d'ananas pur, pétillant et exotique. La saveur tropicale par excellence qui transporte vos papilles.",
    badge: "#ca8a04",
    cardBg: "linear-gradient(145deg, #fefce8 0%, #fef3c7 100%)",
    border: "rgba(202,138,4,0.25)",
    glow: "rgba(245,196,0,0.12)",
    ml: "250ml",
    emoji: "🍍",
    featured: true,
  },
  {
    name: "Raisin",
    english: "Grape",
    tagline: "Douceur dorée",
    description: "60% de jus de raisin pur, subtilement pétillant. Un goût doux et fruité avec une touche d'élégance naturelle.",
    badge: "#7c3aed",
    cardBg: "linear-gradient(145deg, #faf5ff 0%, #ede9fe 100%)",
    border: "rgba(124,58,237,0.25)",
    glow: "rgba(139,92,246,0.1)",
    ml: "260ml",
    emoji: "🍇",
  },
];

export default function Products() {
  return (
    <section
      id="saveurs"
      className="relative py-24 sm:py-32 px-6"
      style={{ background: "linear-gradient(160deg, #faf5ff 0%, #ede9fe 40%, #fdf4ff 100%)" }}
      aria-label="Nos saveurs"
    >
      {/* ── Background glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.4), transparent)" }} />
      </div>

      {/* ── Fruits ── */}
      <FruitFloat fruit="leaf"      side="left"  top="10%"  size={110} delay={0}    rotation={-20} />
      <FruitFloat fruit="orange"    side="left"  top="55%"  size={95}  delay={0.3}  rotation={15}  />
      <FruitFloat fruit="grape"     side="right" top="8%"   size={105} delay={0.1}  rotation={10}  />
      <FruitFloat fruit="leaf"      side="right" top="62%"  size={90}  delay={0.4}  rotation={-15} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--pineapple)" }}>
            Nos Saveurs
          </p>
          <h2 className="leading-none mb-4"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 9vw, 7rem)", color: "#0f172a" }}>
            CHOISISSEZ
            <br />
            <span style={{
              background: "linear-gradient(90deg, #ff3d5a, #f5c400, #8b5cf6)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              VOTRE VOYAGE
            </span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: "#64748b" }}>
            Trois saveurs exotiques, 100% naturelles, pétillantes à 60% de jus pur.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flavors.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`relative rounded-3xl p-8 flex flex-col overflow-hidden cursor-pointer group ${
                f.featured ? "md:-mt-5 md:mb-5" : ""
              }`}
              style={{
                background: f.cardBg,
                border: `1px solid ${f.border}`,
                boxShadow: `0 0 40px ${f.glow}`,
              }}
            >
              {f.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-black text-xs font-bold tracking-wider"
                  style={{ background: f.badge }}>
                  POPULAIRE
                </div>
              )}

              {/* Emoji icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${f.badge}18`, border: `1px solid ${f.badge}30` }}>
                {f.emoji}
              </div>

              {/* Flavor dot + label */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full" style={{ background: f.badge }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: f.badge }}>
                  {f.english} Sparkling
                </span>
              </div>

              <h3 className="leading-none mb-1"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "2.4rem", color: "#0f172a" }}>
                {f.name}
              </h3>
              <p className="text-sm mb-4" style={{ color: f.badge }}>{f.tagline}</p>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#475569" }}>{f.description}</p>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                {[["60%", "Jus pur"], [f.ml, "Volume"], ["0%", "Alcool"]].map(([val, lbl]) => (
                  <div key={lbl} className="text-center">
                    <div className="leading-none text-2xl" style={{ fontFamily: "var(--font-bebas)", color: f.badge }}>{val}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>{lbl}</div>
                  </div>
                ))}
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${f.badge}12, transparent 60%)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
