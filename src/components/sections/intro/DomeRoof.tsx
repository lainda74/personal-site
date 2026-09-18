'use client';

export default function DomeRoof() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[520px] z-[2] pointer-events-none">
      <svg
        viewBox="0 0 1200 520"
        className="w-full h-full"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <radialGradient id="skyGradient" cx="50%" cy="0%" r="90%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* MAIN GLASS DOME */}
        <ellipse
          cx="600"
          cy="0"
          rx="600"
          ry="180"
          fill="url(#skyGradient)"
          stroke="#334155"
          strokeWidth="2"
        />

        {/* Horizontal glass grid rings */}
        {[60, 90, 120, 150].map((y, i) => (
          <ellipse
            key={i}
            cx="600"
            cy={y}
            rx={600 - y * 2}
            ry={60}
            fill="none"
            stroke="#64748b"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}

        {/* Vertical curved dome ribs */}
        {[...Array(14)].map((_, i) => {
          const x = 80 + i * 80;
          return (
            <path
              key={i}
              d={`M ${x} 0 Q 600 180 ${1200 - x} 0`}
              stroke="#64748b"
              strokeWidth="1"
              opacity="0.35"
              fill="none"
            />
          );
        })}

        {/* CENTRAL HANGING STRUCTURE */}
        <g transform="translate(600,170)">

          {/* Top metal ring */}
          <ellipse
            cx="0"
            cy="0"
            rx="140"
            ry="42"
            fill="white"
            stroke="#334155"
            strokeWidth="4"
          />

          {/* Plant ring */}
          {[...Array(70)].map((_, i) => {
            const angle = (i / 70) * Math.PI * 2
            const r = 140 + Math.random() * 12
            const x = Math.cos(angle) * r
            const y = Math.sin(angle) * r * 0.35

            const colors = [
              "#15803d",
              "#166534",
              "#22c55e",
              "#a855f7",
              "#e9d5ff",
              "#86efac"
            ]

            return (
              <circle
                key={i}
                cx={x}
                cy={y - 12}
                r={Math.random() * 7 + 4}
                fill={colors[Math.floor(Math.random() * colors.length)]}
              />
            )
          })}

          {/* Funnel support lattice */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const x1 = Math.cos(angle) * 130
            const y1 = Math.sin(angle) * 45

            const x2 = Math.cos(angle) * 50
            const y2 = 150

            return (
              <path
                key={i}
                d={`M ${x1} ${y1} L ${x2} ${y2}`}
                stroke="#475569"
                strokeWidth="2"
                fill="none"
              />
            )
          })}

          {/* Cross braces */}
          {[...Array(6)].map((_, i) => {
            const a1 = (i / 6) * Math.PI * 2
            const a2 = ((i + 3) / 6) * Math.PI * 2

            const x1 = Math.cos(a1) * 120
            const y1 = Math.sin(a1) * 40

            const x2 = Math.cos(a2) * 120
            const y2 = Math.sin(a2) * 40

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#94a3b8"
                strokeWidth="1"
              />
            )
          })}

          {/* Funnel rings */}
          <ellipse cx="0" cy="40" rx="105" ry="35" fill="none" stroke="#475569" strokeWidth="3"/>
          <ellipse cx="0" cy="80" rx="85" ry="28" fill="none" stroke="#64748b" strokeWidth="2"/>
          <ellipse cx="0" cy="120" rx="65" ry="22" fill="none" stroke="#94a3b8" strokeWidth="2"/>
          <ellipse cx="0" cy="155" rx="50" ry="16" fill="none" stroke="#cbd5e1" strokeWidth="2"/>

        </g>
      </svg>
    </div>
  );
}
