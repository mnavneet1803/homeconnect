/**
 * /image-audit — Image Audit Dashboard (dev tool)
 * Remove this page before final production launch.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ALL_AUDIT_ENTRIES,
  getAuditSummary,
  type AuditStatus,
  type ImageAuditEntry,
} from "@/data/image-audit";

export const metadata: Metadata = {
  title: "Image Audit Dashboard — Dev Tool",
  robots: { index: false, follow: false },
};

// ─── Helpers ─────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<AuditStatus, { badge: string; row: string; label: string }> = {
  keep: {
    badge: "bg-emerald-100 text-emerald-800 border border-emerald-200",
    row: "bg-emerald-50/40",
    label: "✓ KEEP",
  },
  improve: {
    badge: "bg-amber-100 text-amber-800 border border-amber-200",
    row: "bg-amber-50/40",
    label: "△ IMPROVE",
  },
  replace: {
    badge: "bg-red-100 text-red-800 border border-red-200",
    row: "bg-red-50/40",
    label: "✕ REPLACE",
  },
};

function ScoreBar({ value, max = 10 }: { value: number; max?: number }) {
  const pct = (value / max) * 100;
  const color = value >= 8 ? "bg-emerald-500" : value >= 5 ? "bg-amber-500" : "bg-red-500";
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-gray-200">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-gray-600">{value}/10</span>
    </div>
  );
}

function AuditCard({ entry }: { entry: ImageAuditEntry }) {
  const style = STATUS_STYLES[entry.status];

  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 shadow-sm ${style.row}`}>
      {/* Image thumbnail */}
      <div className="relative h-40 bg-gray-100">
        <Image
          src={entry.currentFile.startsWith("/") ? entry.currentFile : `/images/services/${entry.currentFile}`}
          alt={entry.usage}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover object-top"
        />
        <div className="absolute left-2 top-2">
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${style.badge}`}>
            {style.label}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          {entry.section}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-gray-900">{entry.usage}</p>
        <p className="mt-1 font-mono text-[10px] text-gray-500">{entry.currentFile}</p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div>
            <p className="text-[10px] text-gray-400">Relevance</p>
            <ScoreBar value={entry.relevance} />
          </div>
          <div>
            <p className="text-[10px] text-gray-400">Trust</p>
            <ScoreBar value={entry.trust} />
          </div>
        </div>

        {entry.status !== "keep" && (
          <>
            <div className="mt-3 border-t border-gray-200 pt-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Issue</p>
              <p className="mt-1 text-xs text-gray-700">{entry.issue}</p>
            </div>
            <div className="mt-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">Needed</p>
              <p className="mt-1 text-xs text-gray-700">{entry.needed}</p>
            </div>
            <div className="mt-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Suggested filename
              </p>
              <p className="mt-1 rounded bg-gray-100 px-2 py-1 font-mono text-[10px] text-gray-800">
                {entry.suggestedFilename}
              </p>
            </div>
            {entry.searchKeywords.length > 0 && (
              <div className="mt-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Search keywords
                </p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {entry.searchKeywords.map((kw) => (
                    <span key={kw} className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {entry.aiPrompt && (
              <details className="mt-3">
                <summary className="cursor-pointer text-[10px] font-semibold uppercase tracking-wider text-purple-600 hover:text-purple-800">
                  AI Image Prompt ▼
                </summary>
                <p className="mt-2 rounded border border-purple-100 bg-purple-50 p-2 text-[10px] leading-relaxed text-purple-900">
                  {entry.aiPrompt}
                </p>
              </details>
            )}
            <div className="mt-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                SEO alt text
              </p>
              <p className="mt-1 rounded bg-gray-100 px-2 py-1 text-[10px] italic text-gray-700">
                &ldquo;{entry.suggestedAlt}&rdquo;
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function ImageAuditPage() {
  const summary = getAuditSummary();
  const sections = Array.from(new Set(ALL_AUDIT_ENTRIES.map((e) => e.section)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-6 shadow-sm">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔍</span>
                <h1 className="text-xl font-bold text-gray-900">Image Audit Dashboard</h1>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                  DEV TOOL
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Home Solution Services — All website images reviewed for relevance and trust impact.
              </p>
            </div>
            <Link
              href="/"
              className="shrink-0 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              ← Back to site
            </Link>
          </div>

          {/* Summary stats */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Total images audited", value: summary.total, color: "text-gray-900" },
              { label: "✓ Keep", value: summary.keep, color: "text-emerald-700" },
              { label: "△ Improve", value: summary.improve, color: "text-amber-700" },
              { label: "✕ Replace", value: summary.replace, color: "text-red-700" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                <p className="mt-0.5 text-xs text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Priority note */}
          <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-800">
            <strong>🚨 Priority replacements:</strong> Flooring card · Electricians card · Plumbers card · Landscapers card/hero · Deck-Fence hero · Plumbers hero · Before &amp; After image — these 7 fixes have the highest conversion impact.
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        {sections.map((section) => {
          const entries = ALL_AUDIT_ENTRIES.filter((e) => e.section === section);
          const replaceCount = entries.filter((e) => e.status === "replace").length;
          const improveCount = entries.filter((e) => e.status === "improve").length;

          return (
            <section key={section} className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <h2 className="text-base font-bold text-gray-900">{section}</h2>
                <div className="flex items-center gap-2">
                  {replaceCount > 0 && (
                    <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-[11px] font-semibold text-red-700">
                      {replaceCount} replace
                    </span>
                  )}
                  {improveCount > 0 && (
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
                      {improveCount} improve
                    </span>
                  )}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {entries.map((entry) => (
                  <AuditCard key={entry.id} entry={entry} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="border-t border-gray-200 bg-white px-6 py-6 text-center text-xs text-gray-400">
        This page is a temporary development tool for Home Solution Services image review. Remove <code>/image-audit</code> before final production launch.
      </div>
    </div>
  );
}
