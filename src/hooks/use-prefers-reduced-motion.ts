"use client";

import { useReducedMotion } from "framer-motion";

/** Returns true when user prefers reduced motion — use to disable animations */
export function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}
