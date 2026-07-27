"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/icons";
import { useFocusTrap } from "@/hooks/use-focus-trap";

export interface LightboxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoLightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/** Accessible full-screen photo viewer with prev/next navigation. ESC / backdrop to close. */
export function PhotoLightbox({ images, index, onClose, onNavigate }: PhotoLightboxProps) {
  const open = index !== null && images.length > 0;
  const [mounted, setMounted] = useState(false);
  const trapRef = useFocusTrap(open, onClose);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open || index === null) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        onNavigate((index! + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        onNavigate((index! - 1 + images.length) % images.length);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, index, images.length, onNavigate]);

  if (!mounted) return null;

  const current = index !== null ? images[index] : null;

  const overlay = (
    <AnimatePresence>
      {open && current && (
        <motion.div
          key="photo-lightbox"
          className="fixed inset-0 z-modal flex items-center justify-center bg-pine-950/85 p-4 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <motion.div
            ref={trapRef as React.RefObject<HTMLDivElement>}
            className="relative flex max-h-[90vh] max-w-[min(1100px,94vw)] items-center justify-center"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="94vw"
              className="max-h-[86vh] w-auto rounded-xl object-contain shadow-2xl"
              priority
            />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close photo"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
            >
              <Icon name="x" size={20} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => onNavigate((index! - 1 + images.length) % images.length)}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white ring-1 ring-white/20 transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 sm:left-3"
                >
                  <Icon name="arrow-right" size={18} className="rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate((index! + 1) % images.length)}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white ring-1 ring-white/20 transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 sm:right-3"
                >
                  <Icon name="arrow-right" size={18} />
                </button>
                <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-pill bg-black/55 px-3 py-1 text-caption text-white ring-1 ring-white/15">
                  {index! + 1} / {images.length}
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(overlay, document.body);
}
