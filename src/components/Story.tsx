"use client";

import { motion } from "framer-motion";
import { FruitFloat } from "./FruitFloat";

const stats = [
  { value: "60%",  label: "Jus pur",   color: "#f5c400" },
  { value: "3",    label: "Saveurs",   color: "#ff3d5a" },
  { value: "0%",   label: "Alcool",    color: "#8b5cf6" },
  { value: "100%", label: "Naturel",   color: "#22c55e" },
];

export default function Story() {
  return (
    <section
      id="histoire"
      className="relative py-24 sm:py-32 px-6"
      style={{ background: "linear-gradient(160deg, #ecfdf5 0%, #d1fae5 50%, #cffafe 100%)" }}
      aria-label="Notre histoire"
    >
      {/* BG glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.5), transparent)" }} />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)" }} />
        <div className="absolute -right-32 bottom-0 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)" }} />
      </div>

      {/* Fruits */}
      <FruitFloat fruit="pineapple"   side="left"  top="15%"  size={115} delay={0}   rotation={-10} />
      <FruitFloat fruit="watermelon"  side="right" top="10%"  size={125} delay={0.2} rotation={12}  />
      <FruitFloat fruit="leaf"        side="right" top="65%"  size={95}  delay={0.4} rotation={-20} />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--cyan)" }}>
            Notre Histoire
          </p>
          <h2 className="leading-none mb-8"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.8rem, 7vw, 6rem)", color: "#0f172a" }}>
            L&apos;ASIE RENCONTRE
            <br />
            <span style={{
              background: "linear-gradient(90deg, #06b6d4, #22c55e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              LA MAGIE
            </span>
          </h2>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "#475569" }}>
            <p>
              Asian Merveille est née d&apos;une passion pour les saveurs exotiques et la fraîcheur
              naturelle. Nous avons voulu créer une boisson qui transporte, qui évoque les marchés
              tropicaux et les fruits gorgés de soleil.
            </p>
            <p>
              Chaque canette contient{" "}
              <strong style={{ color: "#0f172a" }}>60% de jus de fruit pur</strong>,
              sans colorants artificiels, sans conservateurs. Juste la nature, pétillante et délicieuse.
            </p>
            <p>Un voyage tropical dans chaque gorgée — Exotique, Frais, Pétillant.</p>
          </div>
          <a href="#saveurs"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full font-semibold text-black transition-all duration-200 cursor-pointer hover:scale-105"
            style={{ background: "linear-gradient(135deg, #06b6d4, #22c55e)" }}
          >
            Voir les saveurs
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="relative p-8 rounded-3xl text-center group hover:scale-105 transition-transform duration-300"
              style={{
                background: `${s.color}10`,
                border: `1px solid ${s.color}30`,
                boxShadow: `0 0 30px ${s.color}15`,
              }}
            >
              <div className="leading-none mb-2"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "3.5rem", color: s.color }}>
                {s.value}
              </div>
              <div className="text-sm font-medium" style={{ color: "#64748b" }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
