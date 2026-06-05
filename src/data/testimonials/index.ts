import type { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "james-r",
    quote:
      "Submitted my request on Tuesday, had two plumbers contact me by Wednesday. Both were professional and insured. Saved me hours of searching.",
    author: "James R.",
    location: "Terwillegar",
    serviceSlug: "plumbers",
    rating: 5,
    featured: true,
  },
  {
    id: "linda-t",
    quote:
      "We needed interior painting before listing our home. The painter EHC matched us with was punctual, clean, and finished ahead of schedule.",
    author: "Linda & Mark T.",
    location: "Strathearn",
    serviceSlug: "painters",
    rating: 5,
    featured: true,
  },
  {
    id: "priya-s",
    quote:
      "I was nervous about hiring online. The vetting page convinced me. Our basement reno pro had WCB and great references.",
    author: "Priya S.",
    location: "Sherwood Park",
    serviceSlug: "renovators",
    rating: 5,
    featured: true,
  },
  {
    id: "david-k",
    quote:
      "As a landlord with 4 units, I use EHC for turnover maintenance. One form, reliable pros, every time.",
    author: "David K.",
    location: "Oliver",
    serviceSlug: "home-maintenance",
    rating: 5,
    featured: true,
  },
];

export function getFeaturedTestimonials(limit = 3): Testimonial[] {
  return testimonials.filter((t) => t.featured).slice(0, limit);
}
