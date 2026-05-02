"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #cffafe 0%, #a7f3d0 40%, #fef9c3 100%)" }}
      aria-label="Section héros"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, #67e8f9, transparent)" }} />
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #fde68a, transparent)" }} />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #bbf7d0, transparent)" }} />
        {/* Bottom rainbow separator */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5"
          style={{ background: "linear-gradient(90deg,#ff3d5a,#f5c400,#22c55e,#06b6d4,#8b5cf6)" }} />
      </div>

      {/* ── Watermelon photo — LEFT ── */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{ bottom: "8%", left: "-40px" }}
        initial={{ x: -340, opacity: 0, rotate: -15 }}
        animate={{ x: 0, opacity: 1, rotate: -8 }}
        transition={{ type: "spring", stiffness: 55, damping: 14, delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=480&q=85"
            alt="Pastèque fraîche"
            width={280}
            height={280}
            className="rounded-2xl object-cover drop-shadow-2xl"
            style={{ width: "clamp(180px, 18vw, 280px)", height: "auto" }}
          />
        </motion.div>
      </motion.div>

      {/* ── Leaf — LEFT, above watermelon ── */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{ bottom: "38%", left: "20px" }}
        initial={{ x: -200, opacity: 0, rotate: 20 }}
        animate={{ x: 0, opacity: 1, rotate: 15 }}
        transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [15, 20, 15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="70" height="120" viewBox="0 0 55 100" fill="none" aria-hidden="true">
            <path d="M27 100 Q-2 72 4 42 Q10 14 27 0 Q44 14 50 42 Q56 72 27 100Z" fill="#22c55e" />
            <path d="M27 100 Q6 72 10 42 Q14 22 27 4 Z" fill="#16a34a" opacity="0.4" />
            <path d="M27 0 L27 100" stroke="#15803d" strokeWidth="2" />
            <path d="M27 28 Q14 22 11 32" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M27 46 Q40 40 43 50" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M27 64 Q14 58 12 68" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M27 80 Q40 74 42 84" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ── Grape photo — RIGHT, bottom ── */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{ bottom: "6%", right: "-30px" }}
        initial={{ x: 340, opacity: 0, rotate: 10 }}
        animate={{ x: 0, opacity: 1, rotate: 6 }}
        transition={{ type: "spring", stiffness: 55, damping: 14, delay: 0.2 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=480&q=85"
            alt="Grappe de raisin"
            width={260}
            height={260}
            className="rounded-2xl object-cover drop-shadow-2xl"
            style={{ width: "clamp(160px, 17vw, 260px)", height: "auto" }}
          />
        </motion.div>
      </motion.div>

      {/* ── Pineapple — RIGHT, top ── */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{ top: "14%", right: "30px" }}
        initial={{ x: 200, opacity: 0, rotate: -12 }}
        animate={{ x: 0, opacity: 1, rotate: -8 }}
        transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-8, -4, -8] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=260&q=85"
            alt="Ananas"
            width={130}
            height={130}
            className="rounded-xl object-cover drop-shadow-xl"
            style={{ width: "clamp(80px, 9vw, 130px)", height: "auto" }}
          />
        </motion.div>
      </motion.div>

      {/* ── Main content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 w-full max-w-4xl mx-auto px-6 pt-28 pb-24 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
          style={{ background: "rgba(255,255,255,0.75)", color: "#0f172a", border: "1px solid rgba(255,255,255,0.95)" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
          Boisson Énergisante Naturelle — 60% Jus Pur
        </motion.div>

        {/* ── "UN VOYAGE" rainbow gradient ── */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="leading-none font-black tracking-tight"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(5rem, 18vw, 13rem)",
              background: "linear-gradient(90deg, #ff3d5a 0%, #ff7043 18%, #f5c400 35%, #22c55e 52%, #06b6d4 70%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            UN VOYAGE
          </motion.h1>
        </div>

        {/* ── Top badges: EXOTIQUE · FRAIS · PÉTILLANT ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          {[
            { label: "EXOTIQUE", bg: "rgba(255,61,90,0.12)", color: "#be123c", border: "rgba(255,61,90,0.3)" },
            { label: "FRAIS",    bg: "rgba(6,182,212,0.12)", color: "#0e7490", border: "rgba(6,182,212,0.3)" },
            { label: "PÉTILLANT",bg: "rgba(245,196,0,0.15)", color: "#92400e", border: "rgba(245,196,0,0.4)" },
          ].map((b, i) => (
            <span key={b.label} className="flex items-center gap-3">
              <span
                className="font-bold tracking-widest text-xs md:text-sm uppercase px-3 py-1 rounded-full"
                style={{ background: b.bg, color: b.color, border: `1px solid ${b.border}` }}
              >
                {b.label}
              </span>
              {i < 2 && <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />}
            </span>
          ))}
        </motion.div>

        {/* ── 3 Cans — center ── */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="relative w-full max-w-xs sm:max-w-sm mx-auto my-2"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/cans-only.png"
              alt="Les trois saveurs Asian Merveille : Pastèque, Ananas et Raisin"
              width={486}
              height={530}
              priority
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
          {/* Colorful shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-6 rounded-full blur-xl opacity-50"
            style={{ background: "linear-gradient(90deg, #ff3d5a, #f5c400, #8b5cf6)" }} />
        </motion.div>

        {/* ── Bottom badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center gap-3 mb-6 mt-2"
        >
          {[
            { label: "EXOTIQUE", bg: "rgba(255,61,90,0.12)", color: "#be123c", border: "rgba(255,61,90,0.3)" },
            { label: "FRAIS",    bg: "rgba(6,182,212,0.12)", color: "#0e7490", border: "rgba(6,182,212,0.3)" },
            { label: "PÉTILLANT",bg: "rgba(245,196,0,0.15)", color: "#92400e", border: "rgba(245,196,0,0.4)" },
          ].map((b, i) => (
            <span key={b.label} className="flex items-center gap-3">
              <span
                className="font-bold tracking-widest text-xs md:text-sm uppercase px-3 py-1 rounded-full"
                style={{ background: b.bg, color: b.color, border: `1px solid ${b.border}` }}
              >
                {b.label}
              </span>
              {i < 2 && <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm sm:text-base max-w-md leading-relaxed mb-8"
          style={{ color: "#334155" }}
        >
          60% jus naturel pur — boostez vos entraînements, restez éveillé, performez au maximum.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="#saveurs"
            className="px-8 py-4 rounded-full font-bold text-white text-base min-w-[180px] text-center transition-all duration-200 cursor-pointer hover:scale-105 shadow-lg"
            style={{ background: "linear-gradient(135deg, #0e7490, #059669)" }}
          >
            Découvrir
          </a>
          <a href="#contact"
            className="px-8 py-4 font-bold rounded-full text-base min-w-[180px] text-center cursor-pointer transition-all duration-200 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.75)", color: "#0f172a", border: "2px solid rgba(255,255,255,0.95)" }}
          >
            Commander
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center gap-1.5 text-xs"
            style={{ color: "#0e7490" }}
          >
            <span className="tracking-widest uppercase">Défiler</span>
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
