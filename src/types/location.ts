import type { LocationSlug } from "@/constants/locations";

export interface Location {
  slug: LocationSlug;
  name: string;
  region: string;
  href: string;
  featured: boolean;
  sortOrder: number;
  neighbourhoods: string[];
}

export interface Neighbourhood {
  slug: string;
  name: string;
  citySlug: LocationSlug;
  href: string;
}
