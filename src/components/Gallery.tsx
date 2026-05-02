"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FruitFloat } from "./FruitFloat";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=75",
    alt: "Plage tropicale ensoleillée",
    label: "Ananas",
    color: "#f5c400",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=75",
    alt: "Jus tropical frais avec ananas",
    label: "Ananas",
    color: "#f5c400",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=75",
    alt: "Cocktail tropical rafraîchissant",
    label: "Raisin",
    color: "#8b5cf6",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=600&q=75",
    alt: "Pastèque fraîche tranchée",
    label: "Pastèque",
    color: "#ff3d5a",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=75",
    alt: "Cocktails colorés tropicaux",
    label: "Saveurs",
    color: "#06b6d4",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=75",
    alt: "Raisins violets frais",
    label: "Raisin",
    color: "#8b5cf6",
    span: "",
  },
];

function PhotoCard({ p, i }: { p: (typeof photos)[number]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href="https://www.instagram.com/_asianmerveille/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.88, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03, transition: { duration: 0.22 } }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${p.span}`}
      style={{ aspectRatio: p.span === "row-span-2" ? "3/4" : "1/1" }}
      aria-label={`Voir ${p.label} sur Instagram`}
    >
      <Image
        src={p.src}
        alt={p.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 33vw"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to top, ${p.color}cc 0%, transparent 55%)`,
        }}
      />

      {/* Label */}
      <div className="absolute bottom-4 left-4">
        <div className="font-bold text-sm tracking-widest uppercase text-white">
          {p.label}
        </div>
        <div className="text-white/60 text-xs">Asian Merveille</div>
      </div>

      {/* Instagram icon on hover */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
          style={{ background: "rgba(255,255,255,0.25)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8" />
            <circle cx="17.5" cy="6.5" r="1" fill="white" />
          </svg>
        </div>
      </motion.div>
    </motion.a>
  );
}

export default function Gallery() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-24 sm:py-32 px-6"
      style={{
        background: "linear-gradient(160deg, #fdf4ff 0%, #ede9fe 40%, #e0f2fe 100%)",
      }}
      aria-label="Galerie Instagram"
    >
      {/* Rainbow top line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, #ff3d5a, #f5c400, #22c55e, #06b6d4, #8b5cf6)",
        }}
      />

      {/* Fruits from sides */}
      <FruitFloat fruit="grape"      side="left"  top="15%" size={105} delay={0}   rotation={10}  />
      <FruitFloat fruit="leaf"       side="left"  top="65%" size={85}  delay={0.3} rotation={-15} />
      <FruitFloat fruit="watermelon" side="right" top="10%" size={115} delay={0.1} rotation={-8}  />
      <FruitFloat fruit="orange"     side="right" top="60%" size={100} delay={0.4} rotation={12}  />

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
              <span
                style={{
                  background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
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

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <PhotoCard key={i} p={p} i={i} />
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
