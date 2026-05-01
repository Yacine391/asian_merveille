"use client";

import { motion } from "framer-motion";
import { FruitFloat } from "./FruitFloat";

const features = [
  {
    num: "01",
    title: "EXOTIQUE",
    sub: "Des saveurs venues d'ailleurs",
    desc: "Inspiré par les fruits tropicaux d'Asie, chaque saveur est une invitation au voyage. Pastèque, Ananas, Raisin — trois destinations dans une canette.",
    color: "#ff3d5a",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3c0 0-8 6-8 13a8 8 0 0016 0c0-7-8-13-8-13z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 18v-4M14 22v-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "FRAIS",
    sub: "Naturellement rafraîchissant",
    desc: "Aucun conservateur, aucun colorant artificiel. Juste le goût authentique des fruits frais, préservé naturellement pour une fraîcheur maximale.",
    color: "#22c55e",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4L8 10h4v10h4V10h4L14 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M6 22h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "PÉTILLANT",
    sub: "L'effervescence de la vie",
    desc: "Des bulles fines et légères qui dansent sur votre palais. L'effervescence parfaite pour sublimer chaque saveur et rendre chaque gorgée unique.",
    color: "#f5c400",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 14c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
        <path d="M14 8v-2M14 22v-2M20 14h2M6 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
      style={{ background: "var(--bg-features)" }}
      aria-label="Notre expérience"
    >
      {/* BG glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,107,71,0.5), transparent)" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(245,196,0,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(255,61,90,0.1) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.4), transparent)" }} />
      </div>

      {/* Fruits */}
      <FruitFloat fruit="orange"     side="left"  top="12%"  size={110} delay={0}   rotation={15}  />
      <FruitFloat fruit="watermelon" side="left"  top="60%"  size={130} delay={0.3} rotation={-10} />
      <FruitFloat fruit="pineapple"  side="right" top="20%"  size={120} delay={0.1} rotation={-12} />
      <FruitFloat fruit="leaf"       side="right" top="65%"  size={90}  delay={0.4} rotation={20}  />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--coral)" }}>
            L&apos;Expérience
          </p>
          <h2 className="text-white leading-none"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 9vw, 7rem)" }}>
            TROIS MOTS.
            <br />
            <span style={{
              background: "linear-gradient(90deg, #ff6b47, #f5c400)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              UNE VÉRITÉ.
            </span>
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group p-8 rounded-3xl hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: `${f.color}08`,
                border: `1px solid ${f.color}20`,
              }}
            >
              {/* Number */}
              <div className="leading-none mb-4 select-none opacity-10"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "6rem", color: f.color }}>
                {f.num}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${f.color}15`, color: f.color, border: `1px solid ${f.color}25` }}>
                {f.icon}
              </div>

              <h3 className="text-white mb-1" style={{ fontFamily: "var(--font-bebas)", fontSize: "2.2rem" }}>
                {f.title}
              </h3>
              <p className="text-sm font-semibold mb-4" style={{ color: f.color }}>{f.sub}</p>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>

              {/* Animated bottom line */}
              <div className="mt-8 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(to right, ${f.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
