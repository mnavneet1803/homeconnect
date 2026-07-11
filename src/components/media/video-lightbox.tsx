"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/icons";
import { useFocusTrap } from "@/hooks/use-focus-trap";

interface VideoLightboxProps {
  open: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
  /** portrait sources get a narrower max width */
  orientation?: "landscape" | "portrait";
  title?: string;
}

/** Accessible, sound-on video modal. ESC / backdrop / button to close; locks page scroll. */
export function VideoLightbox({
  open,
  onClose,
  src,
  poster,
  orientation = "landscape",
  title = "Video",
}: VideoLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const trapRef = useFocusTrap(open, onClose);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Stop playback whenever the modal closes.
  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  if (!mounted) return null;

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          key="video-lightbox"
          className="fixed inset-0 z-modal flex items-center justify-center bg-pine-950/80 p-4 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            ref={trapRef as React.RefObject<HTMLDivElement>}
            className={
              "relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl " +
              (orientation === "portrait"
                ? "max-h-[88vh] max-w-[min(440px,92vw)] aspect-[9/16]"
                : "max-w-[min(1100px,94vw)] aspect-video")
            }
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              className="h-full w-full bg-black object-contain"
              src={src}
              poster={poster}
              controls
              autoPlay
              playsInline
              preload="none"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
            >
              <Icon name="x" size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(overlay, document.body);
}
