"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/icons";
import { useInViewAutoplay } from "@/hooks/use-in-view-autoplay";
import { VideoLightbox } from "@/components/media/video-lightbox";
import { cn } from "@/lib/utils/cn";

interface AutoplayVideoProps {
  src: string;
  poster: string;
  alt: string;
  /** used as modal title / play affordance label */
  label?: string;
  orientation?: "landscape" | "portrait";
  sizes?: string;
  priority?: boolean;
  /** show the "watch with sound" button that opens the modal (default true) */
  sound?: boolean;
  /** source for the sound modal (defaults to `src`) */
  modalSrc?: string;
  /** show a small pause/play toggle (features, reel) */
  controls?: boolean;
  className?: string;
  objectPosition?: string;
}

/**
 * Poster-first muted loop that autoplays only while in view. Sound is available
 * only via the tap-to-open modal. Under prefers-reduced-motion the video never
 * mounts — the poster and (optional) play button stand in.
 */
export function AutoplayVideo({
  src,
  poster,
  alt,
  label = "video",
  orientation = "landscape",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  sound = true,
  modalSrc,
  controls = false,
  className,
  objectPosition = "center",
}: AutoplayVideoProps) {
  const [manualPaused, setManualPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { ref, reducedMotion } = useInViewAutoplay({ disabled: manualPaused });

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      setManualPaused(false);
      void el.play().catch(() => {});
    } else {
      el.pause();
      setManualPaused(true);
    }
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setModalOpen(true);
  };

  return (
    <div className={cn("group/av relative h-full w-full overflow-hidden bg-surface-100", className)}>
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="object-cover"
        style={{ objectPosition }}
      />

      {!reducedMotion && (
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
        />
      )}

      {/* subtle scrim so controls stay legible */}
      {(sound || controls) && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-pine-950/45 to-transparent"
        />
      )}

      {controls && !reducedMotion && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={manualPaused ? `Play ${label}` : `Pause ${label}`}
          className="absolute bottom-3 left-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-pine-950/65 text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-pine-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
        >
          <Icon name={manualPaused ? "play" : "pause"} size={16} className={manualPaused ? "translate-x-[1px]" : ""} />
        </button>
      )}

      {sound && (
        <button
          type="button"
          onClick={openModal}
          aria-label={`Play ${label} in full screen`}
          className="absolute bottom-3 right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-pine-950/70 text-white ring-1 ring-white/25 backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-pine-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
        >
          <Icon name="play" size={18} className="translate-x-[1px]" />
        </button>
      )}

      {sound && (
        <VideoLightbox
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          src={modalSrc ?? src}
          poster={poster}
          orientation={orientation}
          title={label}
        />
      )}
    </div>
  );
}
