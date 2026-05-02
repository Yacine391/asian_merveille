"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FruitFloat } from "./FruitFloat";

const stats = [
  { value: "60%",  label: "Jus pur",   color: "#ca8a04" },
  { value: "3",    label: "Saveurs",   color: "#ff3d5a" },
  { value: "0%",   label: "Alcool",    color: "#7c3aed" },
  { value: "100%", label: "Naturel",   color: "#059669" },
];

export default function Story() {
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section
      id="histoire"
      className="relative py-24 sm:py-32 px-6"
      style={{
        background: "linear-gradient(160deg, #ecfdf5 0%, #d1fae5 50%, #cffafe 100%)",
      }}
      aria-label="Notre histoire"
    >
      {/* Rainbow top line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, #ff3d5a, #f5c400, #22c55e, #06b6d4, #8b5cf6)",
        }}
      />

      {/* Subtle blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -left-32 top-1/3 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
        />
        <div
          className="absolute -right-20 bottom-0 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #22c55e, transparent)" }}
        />
      </div>

      {/* Fruits from sides */}
      <FruitFloat fruit="pineapple"  side="left"  top="15%" size={115} delay={0}   rotation={-10} />
      <FruitFloat fruit="watermelon" side="right" top="10%" size={125} delay={0.2} rotation={12}  />
      <FruitFloat fruit="leaf"       side="right" top="68%" size={95}  delay={0.4} rotation={-20} />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div ref={textRef}>
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={textInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-6"
            style={{ color: "#0891b2" }}
          >
            Notre Histoire
          </motion.p>

          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: "100%" }}
              animate={textInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                color: "#0f172a",
              }}
            >
              L&apos;ASIE RENCONTRE{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #06b6d4, #22c55e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                LA MAGIE
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-5 text-base leading-relaxed mb-10"
            style={{ color: "#475569" }}
          >
            <p>
              Asian Merveille est née pour les sportifs et les personnes actives qui refusent de faire
              des compromis sur le goût. Une boisson énergisante qui te booste sans les ingrédients
              artificiels des energy drinks classiques.
            </p>
            <p>
              Chaque canette contient{" "}
              <strong style={{ color: "#0f172a" }}>60% de jus de fruit pur</strong>,
              sans colorants artificiels, sans conservateurs — juste l&apos;énergie de la nature,
              pétillante et délicieuse.
            </p>
            <p>
              Parfaite avant l&apos;entraînement, pendant une longue journée ou pour rester concentré
              — Exotique, Frais, Naturellement Énergisant.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={textInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#saveurs"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white cursor-pointer"
            style={{ background: "linear-gradient(135deg, #06b6d4, #22c55e)" }}
          >
            Voir les saveurs
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>

        {/* Stats side */}
        <div ref={statsRef} className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={statsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative p-8 rounded-3xl text-center cursor-default"
              style={{
                background: `${s.color}10`,
                border: `1px solid ${s.color}30`,
              }}
            >
              {/* Animated number */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={statsInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1, type: "spring", stiffness: 200 }}
                className="leading-none mb-2"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "3.5rem", color: s.color }}
              >
                {s.value}
              </motion.div>
              <div className="text-sm font-medium" style={{ color: "#64748b" }}>
                {s.label}
              </div>
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 20px ${s.color}20` }}
              />
            </motion.div>
          ))}

          {/* 3 individual cans */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="col-span-2 flex items-end justify-center gap-2 mt-2"
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/can-crop-watermelon.png" alt="Canette Pastèque" style={{ height: "130px", width: "auto", filter: "drop-shadow(0 6px 14px rgba(255,61,90,0.35))" }} />
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/can-crop-pineapple.png" alt="Canette Ananas" style={{ height: "162px", width: "auto", filter: "drop-shadow(0 8px 18px rgba(245,196,0,0.4))" }} />
            </motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/can-crop-grape.png" alt="Canette Raisin" style={{ height: "130px", width: "auto", filter: "drop-shadow(0 6px 14px rgba(139,92,246,0.35))" }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
