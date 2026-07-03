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
    <div className={cn("faq-list", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div key={item.id} className="faq-item" data-open={isOpen}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-5 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="font-display text-[17px] font-semibold text-pine-950">
                  {item.question}
                </span>
                <span className="faq-toggle" aria-hidden="true">
                  <span
                    className={cn(
                      "absolute h-px w-[11px] bg-pine-950 transition-transform",
                      isOpen && "bg-pine-950"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute h-[11px] w-px bg-pine-950 transition-transform",
                      isOpen && "scale-y-0"
                    )}
                  />
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
                  <p className="max-w-[640px] pb-5 text-[15px] leading-relaxed text-ink-600">
                    {item.answer}
                  </p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
