"use client";

import Link from "next/link";
import { useState } from "react";
import type { LocationSlug } from "@/constants/locations";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { CoverageMap } from "@/components/illustrations/coverage-map";
import { cn } from "@/lib/utils/cn";

interface CoverageCityChip {
  slug: LocationSlug;
  name: string;
  href: string;
}

interface CoverageExplorerProps {
  cities: CoverageCityChip[];
  neighbourhoods: string[];
  quoteHref: string;
}

export function CoverageExplorer({ cities, neighbourhoods, quoteHref }: CoverageExplorerProps) {
  const [active, setActive] = useState<LocationSlug | null>(null);

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <Reveal variant="fade-up">
          <p className="section-eyebrow">Where we work</p>
          <h2 className="mt-3.5 text-balance text-display-sm text-pine-950 md:text-[clamp(26px,3.2vw,36px)]">
            Serving Edmonton &amp; surrounding areas
          </h2>
          <p className="mt-3.5 max-w-[460px] text-[15.5px] text-ink-600">
            Wherever you are in the metro region, our team can reach you — usually within a day of your
            request.
          </p>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {cities.map((loc) => {
            const isActive = active === loc.slug;
            return (
              <Link
                key={loc.slug}
                href={loc.href}
                onMouseEnter={() => setActive(loc.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(loc.slug)}
                onBlur={() => setActive(null)}
                className={cn(
                  "flex items-center gap-1.5 rounded-pill border px-4 py-2 text-[13.5px] transition-colors",
                  isActive
                    ? "border-brass-500 bg-brass-100/60 text-pine-950"
                    : "border-border bg-surface-0 text-ink-600 hover:border-brass-500 hover:text-pine-950"
                )}
              >
                <Icon name="map-pin" size={12} className="text-brass-500" />
                {loc.name}
              </Link>
            );
          })}
        </div>

        {neighbourhoods.length > 0 && (
          <Reveal className="mt-8" delay={0.08}>
            <p className="text-label-sm font-medium text-ink-700">Popular Edmonton neighbourhoods</p>
            <p className="mt-2 text-body-sm leading-relaxed text-ink-600">
              {neighbourhoods.join(" · ")}
            </p>
          </Reveal>
        )}

        <Reveal className="mt-8" delay={0.12}>
          <Button href={quoteHref}>Check availability</Button>
        </Reveal>
      </div>

      <Reveal variant="fade-up" delay={0.1}>
        <div className="overflow-hidden rounded-lg border border-border bg-surface-0 shadow-card">
          <CoverageMap activeSlug={active} onCityHover={setActive} />
        </div>
      </Reveal>
    </div>
  );
}
