"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { beforeAfterPairs, type BeforeAfterPair } from "@/data/before-after";
import { ROUTES } from "@/constants/routes";
import { IMAGE_SIZES } from "@/lib/images";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { cn } from "@/lib/utils/cn";

function SlotImage({
  image,
  label,
}: {
  image: BeforeAfterPair["before"];
  label: "Before" | "After";
}) {
  if (image.placeholder) {
    return (
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-pine-950/5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_46%,rgba(27,70,56,0.06)_46%,rgba(27,70,56,0.06)_54%,transparent_54%)] bg-[length:14px_14px]" />
        <div className="relative z-10 px-4 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-brass-500">{label}</p>
          <p className="mt-1 text-[13px] text-ink-500">Photo coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-surface-100">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={IMAGE_SIZES.card}
        className="object-cover"
        loading="lazy"
      />
      <span className="absolute left-2 top-2 rounded-pill bg-pine-950/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-paper backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}

function PairCard({
  pair,
  onOpen,
}: {
  pair: BeforeAfterPair;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full overflow-hidden rounded-xl border border-border bg-surface-0 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brass-200 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
    >
      <div className="grid grid-cols-2 gap-px bg-border">
        <SlotImage image={pair.before} label="Before" />
        <SlotImage image={pair.after} label="After" />
      </div>
      <div className="p-4">
        <p className="text-[12px] font-medium uppercase tracking-wide text-brass-500">
          {pair.service}
          <span className="text-ink-400"> · {pair.area}</span>
        </p>
        <p className="mt-1.5 text-[14px] leading-snug text-ink-700">{pair.caption}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-pine-700 opacity-0 transition-opacity group-hover:opacity-100">
          View larger
          <Icon name="arrow-right" size={12} />
        </span>
      </div>
    </button>
  );
}

function Lightbox({ pair, onClose }: { pair: BeforeAfterPair; onClose: () => void }) {
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${pair.service} before and after`}
      className="fixed inset-0 z-modal flex items-center justify-center bg-pine-950/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface-0 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-pine-950/70 text-paper"
        >
          <Icon name="x" size={18} />
        </button>
        <div className="grid gap-px bg-border md:grid-cols-2">
          <SlotImage image={pair.before} label="Before" />
          <SlotImage image={pair.after} label="After" />
        </div>
        <div className="p-5">
          <p className="font-semibold text-pine-950">
            {pair.service}
            <span className="font-normal text-ink-500"> · {pair.area}</span>
          </p>
          <p className="mt-1 text-body-sm text-ink-600">{pair.caption}</p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function BeforeAfterSection({ className }: { className?: string }) {
  const [active, setActive] = useState<BeforeAfterPair | null>(null);

  return (
    <Section id="before-after" className={cn("bg-surface-50", className)}>
      <Container>
        <Reveal variant="fade-up">
          <p className="section-eyebrow">Real work</p>
          <h2 className="mt-3.5 max-w-2xl text-balance text-display-sm text-pine-950 md:text-[clamp(26px,3.2vw,36px)]">
            Before &amp; after from Edmonton jobs
          </h2>
          <p className="mt-3.5 max-w-[540px] text-[15.5px] text-ink-600">
            Furniture assembly, painting, drywall, shed builds, and cleaning — a look at the
            work our crew delivers. True before photos are being added as job archives are
            uploaded.
          </p>
        </Reveal>

        <StaggerGrid className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfterPairs.map((pair) => (
            <StaggerItem key={pair.id}>
              <PairCard pair={pair} onOpen={() => setActive(pair)} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mt-10 flex flex-wrap gap-3" delay={0.08}>
          <Button href={ROUTES.quote}>Get a Free Quote</Button>
          <Button href={ROUTES.reviews} variant="secondary">
            Read reviews
          </Button>
        </Reveal>
      </Container>

      {active ? <Lightbox pair={active} onClose={() => setActive(null)} /> : null}
    </Section>
  );
}
