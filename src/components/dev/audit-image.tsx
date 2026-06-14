"use client";

/**
 * AuditImage — drop-in replacement for next/image that shows visual audit
 * overlays when Image Audit mode is enabled. Remove before final launch.
 *
 * Usage (fill):   <AuditImage auditId="service-card-flooring" fill src={...} alt={...} sizes={...} className="object-cover" />
 * Usage (sized):  <AuditImage auditId="before-after-main" src={...} alt={...} width={1024} height={682} className="h-auto w-full" />
 *
 * For fill images: renders as a React fragment (Image + sibling overlay) so
 * the parent's `relative` container positions the overlay automatically.
 * For sized images: wraps in a `relative block w-full` div.
 */

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { useImageAudit } from "./image-audit-context";
import { IMAGE_AUDIT_DATA, type ImageAuditEntry, type AuditStatus } from "@/data/image-audit";

interface AuditImageProps extends ImageProps {
  auditId: string;
}

// ─── Status palette ────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<
  AuditStatus,
  { label: string; bg: string; border: string; dot: string; panelBg: string }
> = {
  keep: {
    label: "KEEP",
    bg: "bg-emerald-500",
    border: "border-emerald-400",
    dot: "bg-emerald-300",
    panelBg: "bg-emerald-950/90",
  },
  improve: {
    label: "IMPROVE",
    bg: "bg-amber-500",
    border: "border-amber-400",
    dot: "bg-amber-300",
    panelBg: "bg-amber-950/90",
  },
  replace: {
    label: "REPLACE",
    bg: "bg-red-500",
    border: "border-red-400",
    dot: "bg-red-300",
    panelBg: "bg-red-950/90",
  },
};

// ─── Score dots ───────────────────────────────────────────────────────────

function ScoreDots({ score, max = 10 }: { score: number; max?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`inline-block h-1.5 w-1.5 rounded-full ${i < score ? "bg-white" : "bg-white/25"}`}
        />
      ))}
    </span>
  );
}

// ─── Overlay panel ───────────────────────────────────────────────────────

function AuditOverlay({ entry }: { entry: ImageAuditEntry }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = STATUS_CONFIG[entry.status];
  const showDetail = entry.status !== "keep";

  return (
    <>
      {/* TOP-LEFT status badge */}
      <div className="absolute left-2 top-2 z-20 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold tracking-wider text-white shadow-lg backdrop-blur-sm"
           style={{ background: "rgba(0,0,0,0.55)", borderColor: cfg.dot }}>
        <span className={`h-2 w-2 rounded-full ${cfg.dot}`} />
        {cfg.label}
      </div>

      {/* TOP-RIGHT score chips */}
      <div className="absolute right-2 top-2 z-20 flex flex-col items-end gap-1">
        <div className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[9px] text-white backdrop-blur-sm">
          <span className="opacity-60">REL</span>
          <ScoreDots score={entry.relevance} />
          <span className="font-semibold">{entry.relevance}/10</span>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[9px] text-white backdrop-blur-sm">
          <span className="opacity-60">TRUST</span>
          <ScoreDots score={entry.trust} />
          <span className="font-semibold">{entry.trust}/10</span>
        </div>
      </div>

      {/* BOTTOM info panel (only for improve / replace) */}
      {showDetail && (
        <div
          className={`absolute bottom-0 left-0 right-0 z-20 ${cfg.panelBg} border-t border-white/10 p-2.5 text-[10px] leading-snug text-white backdrop-blur-sm`}
        >
          <p className="font-semibold uppercase tracking-wider opacity-70">{entry.usage}</p>
          <p className="mt-1 opacity-90">
            <span className="opacity-60">Issue: </span>{entry.issue.slice(0, 80)}{entry.issue.length > 80 ? "…" : ""}
          </p>
          <p className="mt-0.5 opacity-90">
            <span className="opacity-60">Need: </span>{entry.needed.slice(0, 70)}{entry.needed.length > 70 ? "…" : ""}
          </p>
          <p className="mt-0.5 font-mono opacity-75">📁 {entry.suggestedFilename}</p>

          {/* Expand / collapse AI prompt */}
          {entry.aiPrompt && (
            <>
              <button
                onClick={() => setExpanded((v) => !v)}
                className="mt-1.5 flex items-center gap-1 rounded bg-white/15 px-2 py-0.5 text-[9px] font-medium hover:bg-white/25"
              >
                {expanded ? "▲ Hide" : "▼ AI Prompt"}
              </button>
              {expanded && (
                <p className="mt-1.5 rounded bg-black/30 p-1.5 font-mono text-[9px] leading-relaxed opacity-90">
                  {entry.aiPrompt}
                </p>
              )}
            </>
          )}
        </div>
      )}

      {/* Subtle border glow around the image */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 rounded-[inherit] border-2 ${cfg.border} opacity-60`}
      />
    </>
  );
}

// ─── Main AuditImage component ────────────────────────────────────────────

export function AuditImage({ auditId, fill, className, ...imageProps }: AuditImageProps) {
  const { showAudit } = useImageAudit();
  const entry = IMAGE_AUDIT_DATA[auditId];

  if (fill) {
    return (
      <>
        <Image fill className={className} {...imageProps} />
        {showAudit && entry && <AuditOverlay entry={entry} />}
      </>
    );
  }

  return (
    <div className="relative block w-full">
      <Image className={className} {...imageProps} />
      {showAudit && entry && <AuditOverlay entry={entry} />}
    </div>
  );
}
