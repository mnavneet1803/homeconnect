"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { useState } from "react";
import type { LocationSlug } from "@/constants/locations";
import { LOCATION_BY_SLUG } from "@/constants/locations";
import {
  COVERAGE_CENTER,
  COVERAGE_PROJECTED,
  COVERAGE_PX_PER_KM,
  COVERAGE_RADIUS_PX,
  COVERAGE_VIEWBOX,
  type ProjectedCity,
} from "@/data/coverage-map";
import { scrollViewport, easePremium, staggerContainer } from "@/lib/motion/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils/cn";

const { width: VB_W, height: VB_H } = COVERAGE_VIEWBOX;
const { x: CX, y: CY } = COVERAGE_CENTER;
const R50 = COVERAGE_RADIUS_PX; // ~50 km
const R25 = 25 * COVERAGE_PX_PER_KM; // ~25 km

/** Teardrop pin with the tip anchored at the local origin (0,0). */
const PIN_PATH =
  "M 0 0 C -6 -12 -12 -18 -12 -26 A 12 12 0 1 1 12 -26 C 12 -18 6 -12 0 0 Z";

function labelTransform(side: ProjectedCity["labelSide"]): string {
  switch (side) {
    case "top":
      return "translate(-50%, calc(-100% - 26px))";
    case "bottom":
      return "translate(-50%, 12px)";
    case "left":
      return "translate(calc(-100% - 14px), calc(-50% - 22px))";
    case "right":
      return "translate(14px, calc(-50% - 22px))";
  }
}

interface CoverageMapProps {
  className?: string;
  /** externally controlled highlight (e.g. from the city chips) */
  activeSlug?: LocationSlug | null;
  /** notified when a pin/label is hovered or focused */
  onCityHover?: (slug: LocationSlug | null) => void;
}

export function CoverageMap({ className, activeSlug, onCityHover }: CoverageMapProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [internalActive, setInternalActive] = useState<LocationSlug | null>(null);
  const active = activeSlug ?? internalActive;

  const setActive = (slug: LocationSlug | null) => {
    setInternalActive(slug);
    onCityHover?.(slug);
  };

  const ringVariant = (delay: number) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay, ease: easePremium },
    },
  });

  return (
    <div
      className={cn("relative aspect-[640/520] w-full select-none", className)}
      role="img"
      aria-label="Service coverage map of the Edmonton metro area, centred on Edmonton with a roughly 50 kilometre service radius covering St. Albert, Sherwood Park, Fort Saskatchewan, Spruce Grove, Stony Plain, Leduc, and Beaumont"
    >
      <m.svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="absolute inset-0 h-full w-full"
        initial={reducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={scrollViewport}
        variants={staggerContainer}
      >
        <defs>
          <linearGradient id="cov-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7f2e7" />
            <stop offset="100%" stopColor="#ece2cd" />
          </linearGradient>
          <radialGradient id="cov-disc" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4ede2" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#d4ede2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d4ede2" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cov-pin-green" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a6b55" />
            <stop offset="100%" stopColor="#1b4638" />
          </linearGradient>
          <linearGradient id="cov-pin-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbb459" />
            <stop offset="100%" stopColor="#c89b3c" />
          </linearGradient>
          <filter id="cov-pin-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#1b4638" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* Cream base */}
        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#cov-bg)" />

        {/* Faint graticule for a real-map texture */}
        <g stroke="#1b4638" strokeOpacity="0.05" strokeWidth="1">
          {[80, 160, 240, 320, 400, 480, 560].map((gx) => (
            <line key={`v${gx}`} x1={gx} y1="0" x2={gx} y2={VB_H} />
          ))}
          {[80, 160, 240, 320, 400, 480].map((gy) => (
            <line key={`h${gy}`} x1="0" y1={gy} x2={VB_W} y2={gy} />
          ))}
        </g>

        {/* Parkland accents */}
        <path
          d="M60 360 q40 -60 120 -50 q60 8 40 70 q-20 60 -110 45 q-70 -12 -50 -65 Z"
          fill="#215645"
          opacity="0.06"
        />
        <path
          d="M470 300 q60 -30 90 20 q26 46 -30 74 q-64 30 -92 -22 q-22 -44 32 -72 Z"
          fill="#215645"
          opacity="0.06"
        />

        {/* North Saskatchewan River */}
        <path
          d="M120 448 C 210 372 250 322 330 262 C 402 208 452 176 548 108"
          fill="none"
          stroke="#2a6b55"
          strokeOpacity="0.24"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M120 448 C 210 372 250 322 330 262 C 402 208 452 176 548 108"
          fill="none"
          stroke="#edf7f2"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Yellowhead corridor + Anthony Henday ring road (subtle, not spokes) */}
        <path
          d="M40 250 C 200 232 440 232 600 240"
          fill="none"
          stroke="#8a6d2a"
          strokeOpacity="0.14"
          strokeWidth="2.5"
          strokeDasharray="1 9"
          strokeLinecap="round"
        />
        <ellipse
          cx={CX}
          cy={CY}
          rx="74"
          ry="66"
          fill="none"
          stroke="#8a6d2a"
          strokeOpacity="0.16"
          strokeWidth="2"
          strokeDasharray="1 8"
          strokeLinecap="round"
        />

        {/* Coverage disc */}
        <m.circle
          cx={CX}
          cy={CY}
          r={R50}
          fill="url(#cov-disc)"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, ease: easePremium } },
          }}
        />

        {/* 25 km ring */}
        <m.circle
          cx={CX}
          cy={CY}
          r={R25}
          fill="none"
          stroke="#215645"
          strokeOpacity="0.28"
          strokeWidth="1.25"
          strokeDasharray="2 7"
          variants={ringVariant(0.1)}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />

        {/* 50 km service radius ring */}
        <m.circle
          cx={CX}
          cy={CY}
          r={R50}
          fill="none"
          stroke="#c89b3c"
          strokeOpacity="0.7"
          strokeWidth="1.75"
          strokeDasharray="4 6"
          variants={ringVariant(0.18)}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />

        {/* Radius measurement annotation */}
        <m.g
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3, ease: easePremium } },
          }}
        >
          <line
            x1={CX}
            y1={CY}
            x2={CX}
            y2={CY - R50}
            stroke="#c89b3c"
            strokeOpacity="0.6"
            strokeWidth="1.25"
            strokeDasharray="3 4"
          />
          <circle cx={CX} cy={CY - R50} r="3" fill="#c89b3c" />
          <text
            x={CX}
            y={CY - R50 - 10}
            textAnchor="middle"
            fontSize="13"
            fontWeight={600}
            fill="#8a6d2a"
            stroke="#f7f2e7"
            strokeWidth="3"
            paintOrder="stroke"
            style={{ fontFamily: "var(--font-mono, ui-monospace), monospace" }}
          >
            ~50 km radius
          </text>
        </m.g>

        {/* City pins */}
        {COVERAGE_PROJECTED.map((city, i) => {
          const isActive = active === city.slug;
          const scale = city.isHub ? 1.22 : 1;
          return (
            <g key={city.slug} transform={`translate(${city.x} ${city.y})`}>
              <m.g
                variants={{
                  hidden: { opacity: 0, y: -12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.38 + i * 0.07,
                      ease: easePremium,
                    },
                  },
                }}
              >
                <g
                  style={{
                    transform: `scale(${isActive ? scale * 1.14 : scale})`,
                    transformBox: "fill-box",
                    transformOrigin: "bottom center",
                    transition: "transform 0.28s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  {/* highlight halo */}
                  <circle
                    cx="0"
                    cy="-26"
                    r="20"
                    fill="#dbb459"
                    style={{
                      opacity: isActive ? 0.4 : 0,
                      transition: "opacity 0.28s ease",
                    }}
                  />
                  <path
                    d={PIN_PATH}
                    fill={city.isHub ? "url(#cov-pin-gold)" : "url(#cov-pin-green)"}
                    stroke="#ffffff"
                    strokeWidth="1.6"
                    filter="url(#cov-pin-shadow)"
                  />
                  <circle
                    cx="0"
                    cy="-26"
                    r={city.isHub ? 5 : 4}
                    fill={city.isHub ? "#f7f2e7" : "#dbb459"}
                  />
                </g>
              </m.g>
            </g>
          );
        })}
      </m.svg>

      {/* Interactive city labels (constant size for mobile legibility) */}
      <div className="pointer-events-none absolute inset-0">
        {COVERAGE_PROJECTED.map((city) => {
          const location = LOCATION_BY_SLUG[city.slug];
          const isActive = active === city.slug;
          return (
            <Link
              key={city.slug}
              href={location.href}
              title={`${city.name} · ${city.distanceKm} km from Edmonton`}
              onMouseEnter={() => setActive(city.slug)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(city.slug)}
              onBlur={() => setActive(null)}
              className={cn(
                "pointer-events-auto absolute whitespace-nowrap rounded-pill border px-2.5 py-1 text-[12px] font-medium shadow-sm backdrop-blur-sm transition-colors duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400",
                isActive
                  ? "border-brand-600 bg-brand-600 text-white shadow-card"
                  : city.isHub
                    ? "border-brass-400 bg-surface-0/95 text-pine-950 ring-1 ring-brass-100"
                    : "border-border-subtle bg-surface-0/95 text-ink-700 hover:border-brass-400 hover:text-pine-950"
              )}
              style={{
                left: `${city.xPct}%`,
                top: `${city.yPct}%`,
                transform: labelTransform(city.labelSide),
              }}
            >
              {city.name}
            </Link>
          );
        })}
      </div>

      {/* Legend */}
      <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2.5 rounded-pill border border-border-subtle/80 bg-surface-0/90 px-3.5 py-2 text-[11.5px] text-ink-600 shadow-sm backdrop-blur-sm">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brass-500 ring-2 ring-brass-100" aria-hidden />
          Edmonton hub
        </span>
        <span aria-hidden className="text-ink-300">
          ·
        </span>
        <span className="text-ink-500">~50 km service radius</span>
      </div>
    </div>
  );
}
