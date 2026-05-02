"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#saveurs", label: "Saveurs" },
  { href: "#histoire", label: "Histoire" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Commander" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg border border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group" aria-label="Asian Merveille - Accueil">
        <div className="w-8 h-8 rounded-full bg-[var(--pineapple)] flex items-center justify-center text-black font-bold text-sm font-[var(--font-bebas)] tracking-wider">
          AM
        </div>
        <span className="font-[var(--font-bebas)] text-xl tracking-widest" style={{ color: "#0f172a" }}>
          Asian Merveille
        </span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 cursor-pointer relative group"
              style={{ color: "#475569" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#0f172a")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#475569")}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--pineapple)] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:block px-5 py-2 bg-[var(--pineapple)] text-black text-sm font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-200 cursor-pointer"
      >
        Commander
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
        aria-label="Menu"
        aria-expanded={open}
      >
        <span className={`block w-6 h-0.5 transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} style={{ background: "#0f172a" }} />
        <span className={`block w-6 h-0.5 transition-all duration-200 ${open ? "opacity-0" : ""}`} style={{ background: "#0f172a" }} />
        <span className={`block w-6 h-0.5 transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "#0f172a" }} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-lg p-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium transition-colors duration-200 cursor-pointer py-2"
                style={{ color: "#475569" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 bg-[var(--pineapple)] text-black text-sm font-semibold rounded-full text-center hover:bg-yellow-300 transition-colors duration-200 cursor-pointer"
            >
              Commander
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
