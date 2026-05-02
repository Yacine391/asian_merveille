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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Section héros"
    >
      {/* Bottom rainbow separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 z-20"
        style={{ background: "linear-gradient(90deg,#ff3d5a,#f5c400,#22c55e,#06b6d4,#8b5cf6)" }} />

      {/* ── Hero banner image (parallax + float) ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-banner.png"
              alt="Asian Merveille — UN VOYAGE — Watermelon · Pineapple · Grape"
              style={{ width: "100%", height: "auto", display: "block" }}
              priority="true"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── CTAs overlay ── */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-4 items-center"
      >
        <a href="#saveurs"
          className="px-8 py-4 rounded-full font-bold text-white text-base min-w-[180px] text-center transition-all duration-200 hover:scale-105 shadow-xl"
          style={{ background: "linear-gradient(135deg, #0e7490, #059669)", fontFamily: "var(--font-bebas)", letterSpacing: "0.08em", fontSize: "1.1rem" }}
        >
          Découvrir
        </a>
        <a href="#contact"
          className="px-8 py-4 font-bold rounded-full text-base min-w-[180px] text-center transition-all duration-200 hover:scale-105 shadow-lg"
          style={{ background: "rgba(255,255,255,0.85)", color: "#0f172a", border: "2px solid rgba(255,255,255,0.95)", fontFamily: "var(--font-bebas)", letterSpacing: "0.08em", fontSize: "1.1rem" }}
        >
          Commander
        </a>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 right-8 z-20"
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
