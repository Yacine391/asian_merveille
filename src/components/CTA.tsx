"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FruitFloat } from "./FruitFloat";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-6"
      style={{ background: "linear-gradient(160deg, #ecfeff 0%, #cffafe 40%, #f0fdf4 100%)" }}
      aria-label="Commander"
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, #ff3d5a, #f5c400, #22c55e, #06b6d4, #8b5cf6)" }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,196,0,0.07), transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.3), transparent)" }} />
      </div>

      {/* Fruits */}
      <FruitFloat fruit="watermelon" side="left"  top="20%"  size={110} delay={0}   rotation={-12} />
      <FruitFloat fruit="grape"      side="left"  top="65%"  size={90}  delay={0.3} rotation={10}  />
      <FruitFloat fruit="pineapple"  side="right" top="15%"  size={120} delay={0.1} rotation={8}   />
      <FruitFloat fruit="orange"     side="right" top="60%"  size={95}  delay={0.4} rotation={-15} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--pineapple)" }}>
            Commander
          </p>
          <h2 className="leading-none mb-6"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3rem, 10vw, 7rem)", color: "#0f172a" }}>
            PRÊT POUR
            <br />
            <span style={{
              background: "linear-gradient(90deg, #f5c400, #ff6b47, #ff3d5a)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              LE VOYAGE ?
            </span>
          </h2>
          <p className="text-base max-w-lg mx-auto leading-relaxed mb-12" style={{ color: "#64748b" }}>
            Contactez-nous pour passer commande ou pour toute information sur nos produits.
            Disponibles en quantité limitée.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-3xl text-center"
              style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(34,197,94,0.2)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-white mb-2" style={{ fontFamily: "var(--font-bebas)", fontSize: "2rem" }}>
                Message envoyé !
              </h3>
              <p className="text-white/60 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "name", label: "Nom", type: "text", placeholder: "Votre nom", key: "name" },
                  { id: "email", label: "Email", type: "email", placeholder: "votre@email.com", key: "email" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium mb-2" style={{ color: "#475569" }}>
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      value={form[field.key as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.8)",
                        border: "1px solid #e2e8f0",
                        color: "#0f172a",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#06b6d4")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#475569" }}>Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Votre commande ou votre message..."
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200 resize-none"
                  style={{ background: "rgba(255,255,255,0.8)", border: "1px solid #e2e8f0", color: "#0f172a" }}
                  onFocus={(e) => (e.target.style.borderColor = "#06b6d4")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 rounded-xl font-semibold text-black text-base cursor-pointer transition-all duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, #f5c400, #ff6b47)" }}
              >
                {loading ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
