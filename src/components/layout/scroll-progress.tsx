"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateTape() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
    }

    updateTape();
    window.addEventListener("scroll", updateTape, { passive: true });
    return () => window.removeEventListener("scroll", updateTape);
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-tape h-[5px] bg-tape-track bg-surface-50/50"
      aria-hidden="true"
    >
      <div
        className="relative h-full bg-gradient-to-r from-brass-500 to-brass-400 transition-[width] duration-75 linear"
        style={{ width: `${progress}%` }}
      >
        <span className="absolute -right-1.5 top-1/2 h-[11px] w-[11px] -translate-y-1/2 rounded-full bg-brass-500 shadow-[0_0_0_3px_rgba(200,155,60,0.28)]" />
      </div>
    </div>
  );
}
