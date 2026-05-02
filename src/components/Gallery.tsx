"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const panels = [
  {
    src: "/images/lifestyle-raisin.png",
    alt: "Cocktail raisin Asian Merveille",
    label: "RAISIN",
    gradient: "linear-gradient(to top, rgba(44,0,90,0.9) 0%, rgba(44,0,90,0.45) 38%, transparent 70%)",
  },
  {
    src: "/images/lifestyle-energie.png",
    alt: "Énergie naturelle Asian Merveille",
    label: "ÉNERGIE",
    gradient: "linear-gradient(to top, rgba(80,50,0,0.9) 0%, rgba(80,50,0,0.45) 38%, transparent 70%)",
  },
  {
    src: "/images/lifestyle-fitness.png",
    alt: "Fitness et énergie naturelle",
    label: "FITNESS ET\nÉNERGIE NATURELLE",
    gradient: "linear-gradient(to top, rgba(2,50,30,0.9) 0%, rgba(2,50,30,0.45) 38%, transparent 70%)",
  },
];

function PanelCard({ p, i }: { p: (typeof panels)[number]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href="https://www.instagram.com/_asianmerveille/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95, y: 24 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
      className="relative overflow-hidden rounded-2xl cursor-pointer group block"
      style={{ height: "clamp(280px, 55vh, 640px)" }}
      aria-label={`Voir ${p.label.replace("\n", " ")} sur Instagram`}
    >
      <Image
        src={p.src}
        alt={p.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      <div className="absolute inset-0" style={{ background: p.gradient }} />

      <div className="absolute bottom-6 left-6">
        <div
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "0.04em",
            whiteSpace: "pre-line",
          }}
        >
          {p.label}
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.7rem",
            marginTop: "4px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Asian Merveille
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
          style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)" }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8" />
            <circle cx="17.5" cy="6.5" r="1" fill="white" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}

export default function Gallery() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-24 sm:py-32 px-6"
      style={{ background: "linear-gradient(160deg, #fdf4ff 0%, #ede9fe 40%, #e0f2fe 100%)" }}
      aria-label="Galerie Instagram"
    >
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #ff3d5a, #f5c400, #22c55e, #06b6d4, #8b5cf6)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#7c3aed" }}
          >
            Instagram
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={headInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="leading-none mb-4"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem, 9vw, 6rem)",
                color: "#0f172a",
              }}
            >
              REJOIGNEZ{" "}
              <span style={{
                background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                LE VOYAGE
              </span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://www.instagram.com/_asianmerveille/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200 cursor-pointer"
            style={{ color: "#7c3aed" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            @_asianmerveille
          </motion.a>
        </div>

        {/* 3 Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {panels.map((p, i) => (
            <PanelCard key={p.label} p={p} i={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/_asianmerveille/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full transition-all duration-200 cursor-pointer hover:scale-105"
            style={{
              border: "1px solid rgba(124,58,237,0.35)",
              color: "#7c3aed",
              background: "rgba(124,58,237,0.07)",
            }}
          >
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
