"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FruitFloat } from "./FruitFloat";

const features = [
  {
    num: "01",
    title: "EXOTIQUE",
    sub: "Des saveurs venues d'ailleurs",
    desc: "Inspiré par les fruits tropicaux d'Asie, chaque saveur est une invitation au voyage. Pastèque, Ananas, Raisin — trois destinations dans une canette.",
    color: "#ff3d5a",
    photo: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=500&q=75",
    photoAlt: "Pastèque tranchée fraîche",
  },
  {
    num: "02",
    title: "FRAIS",
    sub: "Naturellement rafraîchissant",
    desc: "Aucun conservateur, aucun colorant artificiel. Juste le goût authentique des fruits frais, préservé naturellement pour une fraîcheur maximale.",
    color: "#059669",
    photo: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&q=75",
    photoAlt: "Jus tropical frais",
  },
  {
    num: "03",
    title: "PÉTILLANT",
    sub: "L'effervescence de la vie",
    desc: "Des bulles fines et légères qui dansent sur votre palais. L'effervescence parfaite pour sublimer chaque saveur et rendre chaque gorgée unique.",
    color: "#7c3aed",
    photo: "https://images.unsplash.com/photo-1517638851339-a711cfcf3279?w=500&q=75",
    photoAlt: "Eau pétillante avec bulles",
  },
];

function FeatureCard({ f, i }: { f: (typeof features)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative rounded-3xl overflow-hidden cursor-pointer group"
      style={{ boxShadow: `0 8px 32px ${f.color}18` }}
    >
      {/* Photo background */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={f.photo}
          alt={f.photoAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Color overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${f.color}30 0%, ${f.color}60 100%)`,
          }}
        />
        {/* Number */}
        <div
          className="absolute top-4 left-5 font-bold leading-none opacity-70"
          style={{ fontFamily: "var(--font-bebas)", fontSize: "4rem", color: "white" }}
          aria-hidden="true"
        >
          {f.num}
        </div>
        {/* Title on photo */}
        <div className="absolute bottom-4 left-5">
          <h3
            className="leading-none text-white"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "2.4rem" }}
          >
            {f.title}
          </h3>
        </div>
      </div>

      {/* Text below photo */}
      <div
        className="p-6"
        style={{ background: "white" }}
      >
        {/* Color accent line */}
        <motion.div
          className="h-1 w-10 rounded-full mb-4 group-hover:w-20 transition-all duration-500"
          style={{ background: f.color }}
        />
        <p className="text-sm font-semibold mb-2" style={{ color: f.color }}>
          {f.sub}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
          {f.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-6"
      style={{
        background: "linear-gradient(160deg, #fffbeb 0%, #fef3c7 40%, #fff1f2 100%)",
      }}
      aria-label="Notre expérience"
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
      <FruitFloat fruit="orange"     side="left"  top="12%" size={110} delay={0}   rotation={15}  />
      <FruitFloat fruit="watermelon" side="left"  top="60%" size={130} delay={0.3} rotation={-10} />
      <FruitFloat fruit="pineapple"  side="right" top="18%" size={120} delay={0.1} rotation={-12} />
      <FruitFloat fruit="leaf"       side="right" top="65%" size={90}  delay={0.4} rotation={20}  />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#ff6b47" }}
          >
            L&apos;Expérience
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={headInView ? { y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem, 9vw, 7rem)",
                color: "#0f172a",
              }}
            >
              TROIS MOTS.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #ff6b47, #f5c400)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                UNE VÉRITÉ.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
