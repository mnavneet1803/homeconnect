import type { LocationSlug } from "@/constants/locations";

/**
 * Real geographic coordinates for the Edmonton-metro service area. Positions are
 * projected (equirectangular, centred on Edmonton) into the map viewBox so the
 * coverage map reads like an actual regional map rather than an abstract diagram.
 */
export interface CoverageCity {
  slug: LocationSlug;
  name: string;
  lat: number;
  lon: number;
  isHub?: boolean;
  /** preferred label placement relative to the pin (avoids collisions) */
  labelSide: "top" | "bottom" | "left" | "right";
}

export const COVERAGE_CITIES: CoverageCity[] = [
  { slug: "edmonton", name: "Edmonton", lat: 53.5461, lon: -113.4938, isHub: true, labelSide: "bottom" },
  { slug: "st-albert", name: "St. Albert", lat: 53.6305, lon: -113.6256, labelSide: "top" },
  { slug: "sherwood-park", name: "Sherwood Park", lat: 53.5417, lon: -113.2958, labelSide: "right" },
  { slug: "fort-saskatchewan", name: "Fort Saskatchewan", lat: 53.7119, lon: -113.2128, labelSide: "right" },
  { slug: "spruce-grove", name: "Spruce Grove", lat: 53.545, lon: -113.911, labelSide: "top" },
  { slug: "stony-plain", name: "Stony Plain", lat: 53.5263, lon: -113.9922, labelSide: "bottom" },
  { slug: "leduc", name: "Leduc", lat: 53.2634, lon: -113.5519, labelSide: "bottom" },
  { slug: "beaumont", name: "Beaumont", lat: 53.3549, lon: -113.4152, labelSide: "right" },
];

export const COVERAGE_VIEWBOX = { width: 640, height: 520 } as const;
export const SERVICE_RADIUS_KM = 50;

const KM_PER_DEG_LAT = 111.2;
const PX_PER_KM = 3.6;
const CENTER = { x: 320, y: 240 } as const;

const hub = COVERAGE_CITIES.find((c) => c.isHub)!;
const latMidCos = Math.cos((hub.lat * Math.PI) / 180);

export interface ProjectedCity extends CoverageCity {
  /** viewBox coordinates */
  x: number;
  y: number;
  /** percentage coordinates (for the HTML label overlay) */
  xPct: number;
  yPct: number;
  /** straight-line distance from the Edmonton hub, rounded to km */
  distanceKm: number;
}

function project(city: CoverageCity): ProjectedCity {
  const kmEast = (city.lon - hub.lon) * latMidCos * KM_PER_DEG_LAT;
  const kmNorth = (city.lat - hub.lat) * KM_PER_DEG_LAT;
  const x = CENTER.x + kmEast * PX_PER_KM;
  const y = CENTER.y - kmNorth * PX_PER_KM;
  return {
    ...city,
    x,
    y,
    xPct: (x / COVERAGE_VIEWBOX.width) * 100,
    yPct: (y / COVERAGE_VIEWBOX.height) * 100,
    distanceKm: Math.round(Math.hypot(kmEast, kmNorth)),
  };
}

export const COVERAGE_PROJECTED: ProjectedCity[] = COVERAGE_CITIES.map(project);
export const COVERAGE_HUB: ProjectedCity = COVERAGE_PROJECTED.find((c) => c.isHub)!;
export const COVERAGE_SPOKES: ProjectedCity[] = COVERAGE_PROJECTED.filter((c) => !c.isHub);
export const COVERAGE_CENTER = CENTER;
export const COVERAGE_PX_PER_KM = PX_PER_KM;
export const COVERAGE_RADIUS_PX = SERVICE_RADIUS_KM * PX_PER_KM;
