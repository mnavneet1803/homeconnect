"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { LOCATION_BY_SLUG } from "@/constants/locations";
import {
  COVERAGE_MAP_NODES,
  COVERAGE_MAP_VIEWBOX,
  coverageCoord,
  getHubNode,
  getSpokeNodes,
} from "@/data/coverage-map";
import { scrollViewport, easePremium, staggerContainer } from "@/lib/motion/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils/cn";

const { width: VB_W, height: VB_H } = COVERAGE_MAP_VIEWBOX;
const hub = getHubNode();
const hubX = coverageCoord(hub.x, "x");
const hubY = coverageCoord(hub.y, "y");

function spokePath(node: (typeof COVERAGE_MAP_NODES)[number]) {
  const x = coverageCoord(node.x, "x");
  const y = coverageCoord(node.y, "y");
  const midX = (hubX + x) / 2;
  const midY = (hubY + y) / 2;
  const dx = x - hubX;
  const dy = y - hubY;
  const bend = 0.15;
  const cx = midX - dy * bend;
  const cy = midY + dx * bend;
  return `M ${hubX} ${hubY} Q ${cx} ${cy} ${x} ${y}`;
}

function labelPosition(node: (typeof COVERAGE_MAP_NODES)[number]) {
  if (node.isHub) {
    return { x: node.x, y: node.y + 14 };
  }
  const dx = node.x - hub.x;
  const dy = node.y - hub.y;
  const len = Math.hypot(dx, dy) || 1;
  const push = 7;
  return {
    x: node.x + (dx / len) * push,
    y: node.y + (dy / len) * push,
  };
}

export function CoverageMap({ className }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  const spokes = getSpokeNodes();

  return (
    <div
      className={cn("relative w-full", className)}
      role="img"
      aria-label="Service coverage map showing Edmonton at the centre connected to Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Leduc, and Beaumont"
    >
      <m.svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="h-auto w-full"
        initial={reducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={scrollViewport}
        variants={staggerContainer}
      >
        <defs>
          <radialGradient id="coverage-hub-glow" cx="50%" cy="48%" r="45%">
            <stop offset="0%" stopColor="var(--color-brand-100)" stopOpacity="0.9" />
            <stop offset="55%" stopColor="var(--color-brand-50)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--color-brand-50)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="coverage-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-brand-600)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--color-brand-400)" stopOpacity="0.2" />
          </linearGradient>
          <filter id="coverage-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Service radius rings */}
        {[72, 118, 168].map((r, i) => (
          <m.circle
            key={r}
            cx={hubX}
            cy={hubY}
            r={r}
            fill="none"
            stroke="var(--color-brand-200)"
            strokeWidth={1}
            strokeOpacity={0.35 - i * 0.08}
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, delay: i * 0.08, ease: easePremium },
              },
            }}
            style={{ transformOrigin: `${hubX}px ${hubY}px` }}
          />
        ))}

        <ellipse
          cx={hubX}
          cy={hubY}
          rx={200}
          ry={175}
          fill="url(#coverage-hub-glow)"
          opacity={0.85}
        />

        {/* Connection lines */}
        {spokes.map((node, i) => (
          <m.path
            key={node.slug}
            d={spokePath(node)}
            fill="none"
            stroke="url(#coverage-line)"
            strokeWidth={2}
            strokeLinecap="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.15 + i * 0.06, ease: easePremium },
              },
            }}
          />
        ))}

        {/* Spoke nodes */}
        {spokes.map((node, i) => {
          const x = coverageCoord(node.x, "x");
          const y = coverageCoord(node.y, "y");
          return (
            <m.g
              key={node.slug}
              variants={{
                hidden: { opacity: 0, scale: 0.6 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4, delay: 0.35 + i * 0.06, ease: easePremium },
                },
              }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              <circle cx={x} cy={y} r={14} fill="var(--color-surface-0)" filter="url(#coverage-soft-shadow)" />
              <circle cx={x} cy={y} r={10} fill="var(--color-brand-50)" stroke="var(--color-brand-300)" strokeWidth={1.5} />
              <circle cx={x} cy={y} r={4} fill="var(--color-brand-600)" />
            </m.g>
          );
        })}

        {/* Hub node */}
        <m.g
          variants={{
            hidden: { opacity: 0, scale: 0.7 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 0.05, ease: easePremium },
            },
          }}
          style={{ transformOrigin: `${hubX}px ${hubY}px` }}
        >
          <circle cx={hubX} cy={hubY} r={36} fill="var(--color-brand-100)" opacity={0.5} />
          <circle cx={hubX} cy={hubY} r={26} fill="var(--color-surface-0)" filter="url(#coverage-soft-shadow)" />
          <circle cx={hubX} cy={hubY} r={22} fill="var(--color-brand-700)" />
          <circle cx={hubX} cy={hubY} r={8} fill="var(--color-surface-0)" opacity={0.95} />
        </m.g>
      </m.svg>

      {/* Interactive labels */}
      <div className="pointer-events-none absolute inset-0">
        {COVERAGE_MAP_NODES.map((node) => {
          const location = LOCATION_BY_SLUG[node.slug];
          const isHub = node.isHub;
          const label = labelPosition(node);
          return (
            <Link
              key={node.slug}
              href={location.href}
              className={cn(
                "pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2",
                "rounded-full border bg-surface-0/95 px-3 py-1.5 shadow-sm backdrop-blur-sm",
                "text-label-sm font-medium transition-all duration-300",
                "hover:-translate-y-[calc(50%+2px)] hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800 hover:shadow-card",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30",
                isHub
                  ? "border-brand-200 text-brand-800 ring-2 ring-brand-100"
                  : "border-border-subtle text-ink-700"
              )}
              style={{ left: `${label.x}%`, top: `${label.y}%` }}
            >
              {node.name}
            </Link>
          );
        })}
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border-subtle/80 bg-surface-0/90 px-4 py-3 text-caption text-ink-500 backdrop-blur-sm sm:left-auto sm:right-4 sm:bottom-4 sm:max-w-xs">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-700 ring-2 ring-brand-100" aria-hidden />
          Edmonton hub
        </span>
        <span className="text-ink-400">~50 km service radius</span>
      </div>
    </div>
  );
}
