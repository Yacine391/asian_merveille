"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(110deg, #9edbc8 0%, #bee8d4 25%, #d8f2de 48%, #eef6cc 62%, #f5e89a 82%, #f0d060 100%)" }}
      aria-label="Section héros"
    >
      {/* Rainbow bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 z-30"
        style={{ background: "linear-gradient(90deg,#ff3d5a,#f5c400,#22c55e,#06b6d4,#8b5cf6)" }} />

      {/* ── Watermelon slice — top LEFT ── */}
      <motion.div
        className="absolute pointer-events-none z-10 hidden sm:block"
        style={{ top: "8%", left: "2%" }}
        initial={{ x: -250, opacity: 0, rotate: 20 }}
        animate={{ x: 0, opacity: 1, rotate: 15 }}
        transition={{ type: "spring", stiffness: 48, damping: 13, delay: 0.2 }}
      >
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [15, 9, 15] }}
          transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1563114773-84221bd62daa?w=600&q=85"
            alt="Pastèque fraîche"
            style={{
              width: "clamp(180px, 20vw, 320px)",
              height: "auto",
              borderRadius: "50% 50% 48% 48%",
              objectFit: "cover",
              filter: "drop-shadow(0 18px 42px rgba(0,0,0,0.18))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Pineapple ring — top RIGHT ── */}
      <motion.div
        className="absolute pointer-events-none z-10 hidden sm:block"
        style={{ top: "4%", right: "2%" }}
        initial={{ x: 250, opacity: 0, rotate: -18 }}
        animate={{ x: 0, opacity: 1, rotate: -10 }}
        transition={{ type: "spring", stiffness: 48, damping: 13, delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-10, -5, -10] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&q=85"
            alt="Ananas tranche"
            style={{
              width: "clamp(160px, 17vw, 280px)",
              height: "clamp(160px, 17vw, 280px)",
              borderRadius: "50%",
              objectFit: "cover",
              filter: "drop-shadow(0 16px 38px rgba(0,0,0,0.16))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Pineapple — bottom LEFT (blurred) ── */}
      <motion.div
        className="absolute pointer-events-none z-10 hidden sm:block"
        style={{ bottom: "4%", left: "1%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.4, delay: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=350&q=75"
            alt="Ananas"
            style={{
              width: "clamp(110px, 13vw, 200px)",
              height: "auto",
              filter: "blur(3.5px) drop-shadow(0 8px 18px rgba(0,0,0,0.1))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Grapes — bottom RIGHT ── */}
      <motion.div
        className="absolute pointer-events-none z-10 hidden sm:block"
        style={{ bottom: "6%", right: "2%" }}
        initial={{ x: 250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 48, damping: 13, delay: 0.4 }}
      >
        <motion.div
          animate={{ y: [0, -11, 0] }}
          transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&q=85"
            alt="Raisin"
            style={{
              width: "clamp(160px, 18vw, 280px)",
              height: "auto",
              filter: "drop-shadow(0 16px 36px rgba(0,0,0,0.18))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Main content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center pt-24 pb-20"
      >
        {/* UN VOYAGE — rainbow */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(5rem, 18vw, 13rem)",
              lineHeight: 1,
              background: "linear-gradient(90deg, #ff3d5a 0%, #ff7043 18%, #f5c400 35%, #22c55e 52%, #06b6d4 70%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            UN VOYAGE
          </motion.h1>
        </div>

        {/* ── 3 Cans côte à côte ── */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative flex items-end justify-center gap-2 sm:gap-4 my-2"
        >
          {/* Watermelon — left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/can-watermelon.png"
              alt="Canette Pastèque Asian Merveille"
              style={{
                height: "clamp(180px, 22vw, 290px)",
                width: "auto",
                filter: "drop-shadow(0 16px 36px rgba(255,61,90,0.4))",
              }}
            />
          </motion.div>

          {/* Pineapple — center (taller) */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/can-pineapple.png"
              alt="Canette Ananas Asian Merveille"
              style={{
                height: "clamp(220px, 28vw, 360px)",
                width: "auto",
                filter: "drop-shadow(0 20px 44px rgba(245,196,0,0.5))",
              }}
            />
          </motion.div>

          {/* Grape — right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/can-grape.png"
              alt="Canette Raisin Asian Merveille"
              style={{
                height: "clamp(180px, 22vw, 290px)",
                width: "auto",
                filter: "drop-shadow(0 16px 36px rgba(139,92,246,0.4))",
              }}
            />
          </motion.div>

          {/* Glow coloré sous les canettes */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full blur-2xl opacity-35"
            style={{ background: "linear-gradient(90deg, rgba(255,61,90,0.6), rgba(6,182,212,0.7), rgba(139,92,246,0.6))" }} />
        </motion.div>

        {/* Badges: EXOTIQUE × FRAIS × PÉTILLANT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-2 sm:gap-3 mt-3"
        >
          {([
            { label: "EXOTIQUE",  bg: "rgba(34,197,94,0.18)",  color: "#15803d", border: "rgba(34,197,94,0.55)" },
            { label: "×",         bg: "transparent",            color: "#94a3b8", border: "transparent" },
            { label: "FRAIS",     bg: "rgba(6,182,212,0.18)",   color: "#0e7490", border: "rgba(6,182,212,0.55)" },
            { label: "×",         bg: "transparent",            color: "#94a3b8", border: "transparent" },
            { label: "PÉTILLANT", bg: "rgba(245,196,0,0.18)",   color: "#92400e", border: "rgba(245,196,0,0.55)" },
          ] as const).map((b, i) => (
            <span
              key={i}
              className="font-bold tracking-widest text-xs md:text-sm uppercase px-4 py-2 rounded-full"
              style={{
                background: b.bg,
                color: b.color,
                border: b.border !== "transparent" ? `1.5px solid ${b.border}` : "none",
              }}
            >
              {b.label}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 items-center mt-8"
        >
          <a href="#saveurs"
            className="px-8 py-4 rounded-full font-bold text-white text-base min-w-[180px] text-center transition-all duration-200 hover:scale-105 shadow-lg"
            style={{ background: "linear-gradient(135deg, #0e7490, #059669)", fontFamily: "var(--font-bebas)", letterSpacing: "0.08em", fontSize: "1.1rem" }}
          >
            Découvrir
          </a>
          <a href="#contact"
            className="px-8 py-4 font-bold rounded-full text-base min-w-[180px] text-center transition-all duration-200 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.78)", color: "#0f172a", border: "2px solid rgba(255,255,255,0.95)", fontFamily: "var(--font-bebas)", letterSpacing: "0.08em", fontSize: "1.1rem" }}
          >
            Commander
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 right-8 z-30"
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
    </section>
  );
}
