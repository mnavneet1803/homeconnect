"use client";

import { useId, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-xl border transition-all duration-300 ease-smooth",
              isOpen
                ? "border-brass-300 bg-surface-0 shadow-card"
                : "border-border bg-surface-0 hover:border-brass-200"
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span
                  className={cn(
                    "font-display text-[16.5px] font-semibold transition-colors duration-200",
                    isOpen ? "text-pine-700" : "text-pine-950"
                  )}
                >
                  {item.question}
                </span>

                {/* Chevron icon — rotates on open */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "border-brass-400 bg-brass-500 text-pine-950"
                      : "border-border bg-surface-50 text-ink-500 hover:border-brass-300"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(
                      "transition-transform duration-300 ease-smooth",
                      isOpen ? "rotate-180" : "rotate-0"
                    )}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    {/* Gold accent bar */}
                    <div className="mb-3 h-px w-full bg-gradient-to-r from-brass-300 via-brass-100 to-transparent" />
                    <p className="text-[15px] leading-relaxed text-ink-600">
                      {item.answer}
                    </p>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
