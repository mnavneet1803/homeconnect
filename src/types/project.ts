import type { ServiceSlug } from "@/constants/services";

export interface Project {
  slug: string;
  title: string;
  serviceSlug: ServiceSlug;
  location: string;
  caption: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  featured: boolean;
}
