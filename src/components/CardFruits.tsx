// Fruit SVGs sized for product cards — slightly different style than FruitFloat

export function WatermelonCard({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 160 120" fill="none">
      {/* Rind */}
      <path d="M0 120 Q80-30 160 120 Z" fill="#15803d" />
      <path d="M8 120 Q80-16 152 120 Z" fill="#4ade80" />
      {/* Flesh */}
      <path d="M18 120 Q80 8 142 120 Z" fill="#ff3d5a" />
      {/* Seeds */}
      <ellipse cx="52" cy="104" rx="5" ry="6" fill="#1a1a1a" transform="rotate(-8 52 104)" />
      <ellipse cx="80" cy="92"  rx="5" ry="6" fill="#1a1a1a" />
      <ellipse cx="108" cy="104" rx="5" ry="6" fill="#1a1a1a" transform="rotate(8 108 104)" />
      <ellipse cx="66" cy="111" rx="4" ry="5" fill="#1a1a1a" />
      <ellipse cx="96" cy="98"  rx="4" ry="5" fill="#1a1a1a" />
      {/* Shine */}
      <path d="M30 95 Q55 60 80 55" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}

export function PineappleCard({ size }: { size: number }) {
  return (
    <svg width={size * 0.7} height={size} viewBox="0 0 84 120" fill="none">
      {/* Leaves */}
      <path d="M42 40 C36 16 16 14 28 -2 C33 12 39 17 42 12 C45 17 51 12 56 -2 C68 14 48 16 42 40Z" fill="#15803d" />
      <path d="M42 40 C28 18 10 24 20 8 C26 20 34 26 42 30Z" fill="#22c55e" />
      <path d="M42 40 C56 18 74 24 64 8 C58 20 50 26 42 30Z" fill="#22c55e" />
      {/* Body */}
      <ellipse cx="42" cy="84" rx="30" ry="38" fill="#f5c400" />
      {/* Diamond pattern */}
      {[56, 70, 84, 98, 112].map((y, i) => (
        <path key={i} d={`M${12 + (i % 2) * 16} ${y} L42 ${y - 14} L${72 - (i % 2) * 16} ${y} L42 ${y + 14} Z`}
          fill="#d97706" opacity="0.35" />
      ))}
      {/* Gloss */}
      <defs>
        <radialGradient id="pg2" cx="33%" cy="33%">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="42" cy="84" rx="30" ry="38" fill="url(#pg2)" />
    </svg>
  );
}

export function GrapeCard({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 110 120" fill="none">
      {/* Stem */}
      <path d="M55 6 Q68 0 74 -4" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" />
      {/* Leaf */}
      <path d="M55 6 Q40 -2 32 2 Q44 18 55 6Z" fill="#16a34a" />
      {/* Grapes grid */}
      {([
        [55, 24, 14], [37, 40, 14], [73, 40, 14],
        [20, 58, 13], [55, 56, 14], [90, 58, 13],
        [34, 76, 12], [76, 76, 12], [55, 92, 12],
      ] as [number, number, number][]).map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          fill={i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#7c3aed" : "#a78bfa"} />
      ))}
      {/* Highlights */}
      {([48, 18, 30, 36, 64, 36, 14, 52, 46, 52, 82, 54] as number[])
        .reduce<[number, number][]>((acc, v, i) => {
          if (i % 2 === 0) acc.push([v, 0]); else acc[acc.length - 1][1] = v;
          return acc;
        }, [])
        .map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3.5} fill="white" opacity="0.32" />
        ))}
    </svg>
  );
}
