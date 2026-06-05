import type { ServiceSlug } from "@/constants/services";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  serviceSlug: ServiceSlug;
  rating: number;
  featured: boolean;
}
