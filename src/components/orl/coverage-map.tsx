import { useState } from "react";
import { coverageCities } from "@/data/orl";

const INDIA_PATH =
  "M46,4 C55,6 60,10 63,14 C67,19 72,20 76,24 C79,28 74,32 71,35 C68,38 70,43 74,45 C79,48 78,54 72,55 C66,56 62,54 58,56 C54,58 55,63 52,68 C49,73 48,80 44,88 C41,94 37,97 34,96 C31,95 31,89 30,84 C29,78 25,72 22,66 C19,60 14,54 12,47 C10,40 6,34 8,29 C10,24 16,24 20,20 C24,16 26,10 32,7 C37,4 42,3 46,4 Z";

export function CoverageMap() {
  const [active, setActive] = useState(coverageCities[0].name);
  const city = coverageCities.find((c) => c.name === active)!;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="relative rounded-3xl border border-navy-foreground/12 bg-[color-mix(in_oklab,var(--navy-foreground)_5%,transparent)] p-6">
        <svg viewBox="0 0 90 100" className="h-[440px] w-full sm:h-[560px]" role="img" aria-label="ORL coverage across India">
          <defs>
            <linearGradient id="orl-map" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.55 0.23 262 / 0.35)" />
              <stop offset="100%" stopColor="oklch(0.7 0.19 48 / 0.18)" />
            </linearGradient>
          </defs>
          <path
            d={INDIA_PATH}
            fill="url(#orl-map)"
            stroke="oklch(0.98 0.003 250 / 0.35)"
            strokeWidth="0.4"
          />
          {coverageCities.slice(1).map((c, i) => (
            <path
              key={`route-${c.name}`}
              d={`M${coverageCities[0].x},${coverageCities[0].y} Q${(coverageCities[0].x + c.x) / 2 + 6},${(coverageCities[0].y + c.y) / 2} ${c.x},${c.y}`}
              fill="none"
              stroke="oklch(0.7 0.19 48 / 0.5)"
              strokeWidth="0.35"
              strokeDasharray="60"
              strokeDashoffset="60"
              style={{ animation: `orl-dash 2.4s ${0.15 * i}s var(--ease-power3) forwards` }}
            />
          ))}
          {coverageCities.map((c) => {
            const isActive = c.name === active;
            return (
              <g
                key={c.name}
                onMouseEnter={() => setActive(c.name)}
                onFocus={() => setActive(c.name)}
                tabIndex={0}
                role="button"
                aria-label={`${c.name} coverage details`}
                className="cursor-pointer outline-none"
              >
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={isActive ? 2.4 : 1.5}
                  fill={isActive ? "oklch(0.7 0.19 48)" : "oklch(0.98 0.003 250 / 0.9)"}
                  className="transition-all duration-300"
                />
                <circle
                  cx={c.x}
                  cy={c.y}
                  r="1.4"
                  fill="oklch(0.7 0.19 48 / 0.5)"
                  style={{ animation: "orl-pulse-dot 2.6s ease-in-out infinite" }}
                />
                <text
                  x={c.x + 3}
                  y={c.y + 1}
                  fontSize="2.1"
                  fill={isActive ? "oklch(0.7 0.19 48)" : "oklch(0.98 0.003 250 / 0.7)"}
                  className="font-medium"
                >
                  {c.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div>
        <div className="rounded-3xl border border-navy-foreground/12 bg-[color-mix(in_oklab,var(--navy-foreground)_6%,transparent)] p-8">
          <p className="eyebrow text-accent">Hub detail</p>
          <h3 className="mt-3 text-3xl text-navy-foreground">{city.name}</h3>
          <dl className="mt-8 grid grid-cols-2 gap-6">
            {[
              ["Trips completed", city.trips],
              ["Fleet available", city.fleet],
              ["Avg. placement", city.transit],
              ["Routes served", city.routes],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs tracking-wide text-navy-foreground/50 uppercase">{k}</dt>
                <dd className="mt-1.5 font-display text-xl font-bold text-navy-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-5 text-sm text-navy-foreground/55">
          Hover a city to see lane depth. Branch offices in Gurugram, Bhiwadi,
          Hissar, Ghaziabad and Mumbai anchor a pan-India attached fleet network.
        </p>
      </div>
    </div>
  );
}
