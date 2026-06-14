"use client";

/**
 * Image Audit FAB — floating action button that toggles audit overlays sitewide.
 * Remove before final production launch.
 */

import Link from "next/link";
import { useImageAudit } from "./image-audit-context";

export function ImageAuditFAB() {
  const { showAudit, toggle } = useImageAudit();

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-2">
      {showAudit && (
        <Link
          href="/image-audit"
          className="flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2.5 text-xs font-semibold text-white shadow-xl ring-1 ring-white/10 transition hover:bg-slate-700"
        >
          <span className="text-base">📋</span>
          Open Dashboard
        </Link>
      )}
      <button
        onClick={toggle}
        aria-label={showAudit ? "Disable image audit mode" : "Enable image audit mode"}
        className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold shadow-xl ring-1 transition-all ${
          showAudit
            ? "bg-amber-500 text-white ring-amber-400 hover:bg-amber-600"
            : "bg-slate-900 text-white ring-white/10 hover:bg-slate-700"
        }`}
      >
        <span className="text-base">{showAudit ? "🔍" : "🔍"}</span>
        {showAudit ? "Audit ON" : "Image Audit"}
      </button>
    </div>
  );
}
