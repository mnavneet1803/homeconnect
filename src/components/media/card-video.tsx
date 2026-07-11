"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/icons";
import { useInViewAutoplay } from "@/hooks/use-in-view-autoplay";
import { VideoLightbox } from "@/components/media/video-lightbox";
import type { VideoAsset } from "@/data/homepage-media";
import { cn } from "@/lib/utils/cn";

interface CardVideoProps {
  video: VideoAsset;
  alt: string;
  /** shown as the modal title / play affordance label */
  label: string;
  className?: string;
}

/**
 * Poster-first service-card media.
 * Muted loop autoplays only while the card is in view (paused offscreen); the
 * play button opens a sound-on modal. Reduced-motion keeps the poster only.
 */
export function CardVideo({ video, alt, label, className }: CardVideoProps) {
  const { ref, reducedMotion } = useInViewAutoplay({ resetOnLeave: true });
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setModalOpen(true);
  };

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-surface-100", className)}>
      <Image
        src={video.poster}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        className="object-cover object-center"
      />

      {!reducedMotion && (
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="none"
        />
      )}

      <button
        type="button"
        onClick={openModal}
        aria-label={`Play ${label} video`}
        className="absolute bottom-3 right-3 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-pine-950/70 text-white ring-1 ring-white/25 backdrop-blur-sm transition duration-300 hover:bg-pine-950 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
      >
        <Icon name="play" size={18} className="translate-x-[1px]" />
      </button>

      <VideoLightbox
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        src={video.src}
        poster={video.poster}
        orientation="landscape"
        title={label}
      />
    </div>
  );
}
