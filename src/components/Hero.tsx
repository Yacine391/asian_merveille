"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FruitFloat } from "./FruitFloat";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-hero)" }}
      aria-label="Section héros"
    >
      {/* ── Bold color glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cyan sweep top-left */}
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.28) 0%, transparent 65%)" }} />
        {/* Yellow center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,196,0,0.18) 0%, transparent 65%)" }} />
        {/* Coral/watermelon bottom-right */}
        <div className="absolute -bottom-16 -right-16 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,61,90,0.22) 0%, transparent 65%)" }} />
        {/* Grape top-right */}
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)" }} />

        {/* Colorful horizontal gradient strip */}
        <div className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, #ff3d5a, #f5c400, #22c55e, #06b6d4, #8b5cf6)" }} />
      </div>

      {/* ── Floating fruits ── */}
      <FruitFloat fruit="watermelon" side="left"  top="30%"  size={120} delay={0.3}  rotation={-15} />
      <FruitFloat fruit="leaf"       side="left"  top="60%"  size={100} delay={0.6}  rotation={20}  />
      <FruitFloat fruit="pineapple"  side="right" top="18%"  size={130} delay={0.2}  rotation={10}  />
      <FruitFloat fruit="grape"      side="right" top="55%"  size={100} delay={0.5}  rotation={-8}  />

      {/* ── Content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm text-white/70"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
          Nouveau — Disponible maintenant
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="leading-none tracking-tight text-white"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(4rem, 16vw, 13rem)" }}
          >
            UN VOYAGE
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(4rem, 16vw, 13rem)",
              background: "linear-gradient(90deg, #f5c400, #ff6b47, #ff3d5a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            TROPICAL
          </motion.h1>
        </div>

        {/* Can image */}
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative w-full max-w-xs sm:max-w-sm mx-auto my-4"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/cans-hero.png"
              alt="Les trois saveurs Asian Merveille : Pastèque, Ananas et Raisin pétillants"
              width={440}
              height={440}
              priority
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
          {/* Colorful glow under cans */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-72 h-10 rounded-full blur-2xl"
            style={{ background: "linear-gradient(90deg, #ff3d5a80, #f5c40080, #8b5cf680)" }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-white/60 text-base sm:text-lg max-w-md leading-relaxed mb-8"
        >
          Jus pétillants 60% pur · Exotique, Frais &amp; Pétillant
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="#saveurs"
            className="px-8 py-4 rounded-full font-semibold text-black text-base min-w-[180px] text-center transition-all duration-200 cursor-pointer hover:scale-105"
            style={{ background: "linear-gradient(135deg, #f5c400, #ff6b47)" }}
          >
            Découvrir
          </a>
          <a href="#contact"
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-200 cursor-pointer text-base min-w-[180px] text-center"
          >
            Commander
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/30 text-xs"
          >
            <span>Défiler</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
              <rect x="7" y="5" width="2" height="6" rx="1" fill="currentColor" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
