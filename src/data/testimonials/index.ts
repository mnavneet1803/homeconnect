import type { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "james-r",
    quote:
      "Submitted my request on Tuesday and heard back the same day with a clear quote. Their plumber showed up on time, was professional, and fixed the leak quickly.",
    author: "James R.",
    location: "Terwillegar",
    serviceSlug: "plumbers",
    rating: 5,
    featured: true,
  },
  {
    id: "linda-t",
    quote:
      "We needed interior painting before listing our home. The EHC crew was punctual, clean, and finished ahead of schedule. Great work from start to finish.",
    author: "Linda & Mark T.",
    location: "Strathearn",
    serviceSlug: "painters",
    rating: 5,
    featured: true,
  },
  {
    id: "priya-s",
    quote:
      "I was nervous about hiring online, but EHC's team was transparent about licensing and insurance. Our basement reno was done on budget and passed inspection.",
    author: "Priya S.",
    location: "Sherwood Park",
    serviceSlug: "renovators",
    rating: 5,
    featured: true,
  },
  {
    id: "david-k",
    quote:
      "As a landlord with 4 units, I use EHC for turnover maintenance. One call, one crew, reliable work every time.",
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
