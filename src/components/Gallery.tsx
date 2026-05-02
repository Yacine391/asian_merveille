"use client";

import { motion } from "framer-motion";
import { FruitFloat } from "./FruitFloat";

const items = [
  { color: "#ff3d5a", label: "Pastèque", size: "tall" },
  { color: "#f5c400", label: "Ananas",   size: "normal" },
  { color: "#8b5cf6", label: "Raisin",   size: "normal" },
  { color: "#22c55e", label: "Fraîcheur",size: "normal" },
  { color: "#06b6d4", label: "Voyage",   size: "wide" },
  { color: "#ff6b47", label: "Saveur",   size: "normal" },
];

export default function Gallery() {
  return (
    <section
      className="relative py-24 sm:py-32 px-6"
      style={{ background: "linear-gradient(160deg, #fdf4ff 0%, #ede9fe 40%, #e0f2fe 100%)" }}
      aria-label="Galerie Instagram"
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)" }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.06), transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,61,90,0.4), transparent)" }} />
      </div>

      {/* Fruits */}
      <FruitFloat fruit="grape"      side="left"  top="15%"  size={105} delay={0}   rotation={10}  />
      <FruitFloat fruit="leaf"       side="left"  top="65%"  size={85}  delay={0.3} rotation={-15} />
      <FruitFloat fruit="watermelon" side="right" top="10%"  size={115} delay={0.1} rotation={-8}  />
      <FruitFloat fruit="orange"     side="right" top="60%"  size={100} delay={0.4} rotation={12}  />

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
            style={{ color: "var(--grape)" }}>
            Instagram
          </p>
          <h2 className="leading-none mb-6"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 9vw, 6rem)", color: "#0f172a" }}>
            REJOIGNEZ
            <br />
            <span style={{
              background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              LE VOYAGE
            </span>
          </h2>
          <a href="https://www.instagram.com/_asianmerveille/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors duration-200 cursor-pointer text-sm"
            style={{ color: "#64748b" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            @_asianmerveille
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/_asianmerveille/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                item.size === "tall" ? "row-span-2" : ""
              } ${item.size === "wide" ? "col-span-2 md:col-span-1" : ""}`}
              style={{ aspectRatio: item.size === "tall" ? "1/2" : "1/1" }}
              aria-label={`Voir ${item.label} sur Instagram`}
            >
              <div className="absolute inset-0 flex items-end p-5"
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${item.color}40, ${item.color}18 50%, rgba(255,255,255,0.85))`,
                  border: `1px solid ${item.color}30`,
                }}>
                <div>
                  <div className="font-bold text-sm tracking-widest uppercase mb-0.5"
                    style={{ color: item.color }}>
                    {item.label}
                  </div>
                  <div className="text-xs" style={{ color: "#94a3b8" }}>Asian Merveille</div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(255,255,255,0.4)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a href="https://www.instagram.com/_asianmerveille/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full transition-all duration-200 cursor-pointer hover:scale-105"
            style={{ border: "1px solid rgba(139,92,246,0.3)", color: "#7c3aed", background: "rgba(139,92,246,0.06)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            Suivre sur Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
