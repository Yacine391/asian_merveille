"use client";

const links = [
  { label: "Saveurs", href: "#saveurs" },
  { label: "Histoire", href: "#histoire" },
  { label: "Expérience", href: "#experience" },
  { label: "Commander", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 overflow-hidden" style={{ background: "#050508" }}>
      {/* Rainbow top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, #ff3d5a, #f5c400, #22c55e, #06b6d4, #8b5cf6)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-black font-bold text-sm"
                style={{ fontFamily: "var(--font-bebas)", background: "linear-gradient(135deg, #f5c400, #ff6b47)" }}>
                AM
              </div>
              <span className="text-xl tracking-widest text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                Asian Merveille
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Boisson énergisante naturelle. 60% de jus pur.
              <br />Sport · Performance · Éveil.
            </p>
            {/* Flavor dots */}
            <div className="flex gap-2 mt-4">
              {["#ff3d5a", "#f5c400", "#8b5cf6"].map((c) => (
                <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white/80 font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                    className="text-white/40 text-sm hover:text-white transition-colors duration-200 cursor-pointer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + tagline */}
          <div>
            <h3 className="text-white/80 font-semibold text-sm mb-4">Suivez-nous</h3>
            <a href="https://www.instagram.com/_asianmerveille/" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 transition-all duration-200 cursor-pointer hover:scale-110"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.5)";
                (e.currentTarget as HTMLElement).style.color = "#8b5cf6";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            <div className="mt-8">
              <p className="leading-none"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "1.6rem",
                  background: "linear-gradient(90deg, #f5c400, #ff6b47)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                UN VOYAGE TROPICAL
              </p>
              <p className="text-white/30 text-xs mt-1">Sport · Performance · Naturel</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Asian Merveille. Tous droits réservés.</p>
          <p className="text-white/20 text-xs">Fait avec passion pour les saveurs exotiques</p>
        </div>
      </div>
    </footer>
  );
}
