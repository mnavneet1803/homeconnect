import type { LocationSlug } from "@/constants/locations";

/** Illustrative node positions for the Capital Region coverage map (not geographic scale). */
export interface CoverageMapNode {
  slug: LocationSlug;
  name: string;
  /** 0–100 percentage of map width */
  x: number;
  /** 0–100 percentage of map height */
  y: number;
  isHub?: boolean;
}

export const COVERAGE_MAP_NODES: CoverageMapNode[] = [
  { slug: "edmonton", name: "Edmonton", x: 50, y: 48, isHub: true },
  { slug: "st-albert", name: "St. Albert", x: 50, y: 14 },
  { slug: "sherwood-park", name: "Sherwood Park", x: 82, y: 46 },
  { slug: "spruce-grove", name: "Spruce Grove", x: 16, y: 44 },
  { slug: "stony-plain", name: "Stony Plain", x: 10, y: 28 },
  { slug: "leduc", name: "Leduc", x: 50, y: 88 },
  { slug: "beaumont", name: "Beaumont", x: 66, y: 82 },
];

export const COVERAGE_MAP_VIEWBOX = { width: 640, height: 520 } as const;

/** Convert percentage coords to SVG viewBox units */
export function coverageCoord(percent: number, axis: "x" | "y"): number {
  const dim = axis === "x" ? COVERAGE_MAP_VIEWBOX.width : COVERAGE_MAP_VIEWBOX.height;
  return (percent / 100) * dim;
}

export function getHubNode(): CoverageMapNode {
  return COVERAGE_MAP_NODES.find((n) => n.isHub)!;
}

export function getSpokeNodes(): CoverageMapNode[] {
  return COVERAGE_MAP_NODES.filter((n) => !n.isHub);
}
