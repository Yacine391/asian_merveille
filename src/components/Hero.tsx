"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FruitFloat } from "./FruitFloat";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(160deg, #cffafe 0%, #a7f3d0 40%, #fef9c3 100%)" }}
      aria-label="Section héros"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

      {/* Fruits — NO overflow-hidden on this section so they slide in from outside */}
      <FruitFloat fruit="watermelon" side="left"  top="28%" size={130} delay={0.2} rotation={-18} />
      <FruitFloat fruit="leaf"       side="left"  top="62%" size={105} delay={0.5} rotation={15}  />
      <FruitFloat fruit="pineapple"  side="right" top="18%" size={140} delay={0.1} rotation={12}  />
      <FruitFloat fruit="grape"      side="right" top="58%" size={110} delay={0.4} rotation={-10} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
          style={{ background: "rgba(255,255,255,0.7)", color: "#0f172a", border: "1px solid rgba(255,255,255,0.9)" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
          Nouveau — Disponible maintenant
        </motion.div>

        {/* ── Text that was on the original image, now on the site ── */}
        <div className="overflow-hidden mb-0">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-semibold tracking-[0.2em] uppercase text-sm md:text-base"
            style={{ color: "#0e7490" }}
          >
            Un Voyage
          </motion.p>
        </div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
            className="leading-none"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(4.5rem, 17vw, 14rem)",
              background: "linear-gradient(135deg, #0e7490 0%, #059669 50%, #ca8a04 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            TROPICAL
          </motion.h1>
        </div>

        {/* ── "EXOTIQUE · FRAIS · PÉTILLANT" from original image ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-3 mb-6"
        >
          {["EXOTIQUE", "FRAIS", "PÉTILLANT"].map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              <span
                className="font-bold tracking-widest text-sm md:text-base uppercase px-3 py-1 rounded-full"
                style={{
                  background: [
                    "rgba(255,61,90,0.12)", "rgba(6,182,212,0.12)", "rgba(245,196,0,0.15)"
                  ][i],
                  color: ["#be123c", "#0e7490", "#92400e"][i],
                  border: `1px solid ${["rgba(255,61,90,0.3)","rgba(6,182,212,0.3)","rgba(245,196,0,0.4)"][i]}`,
                }}
              >
                {word}
              </span>
              {i < 2 && <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />}
            </span>
          ))}
        </motion.div>

        {/* ── Cropped can image (no text) ── */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative w-full max-w-xs sm:max-w-sm mx-auto my-2"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/cans-only.png"
              alt="Les trois saveurs Asian Merveille : Pastèque, Ananas et Raisin pétillants"
              width={486}
              height={530}
              priority
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>
          {/* Colorful shadow under cans */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-6 rounded-full blur-xl opacity-50"
            style={{ background: "linear-gradient(90deg, #ff3d5a, #f5c400, #8b5cf6)" }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm sm:text-base max-w-md leading-relaxed mb-8"
          style={{ color: "#334155" }}
        >
          Jus pétillants 60% pur — trois saveurs, un seul voyage.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
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
            style={{ background: "rgba(255,255,255,0.7)", color: "#0f172a", border: "2px solid rgba(255,255,255,0.9)" }}
          >
            Commander
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
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
