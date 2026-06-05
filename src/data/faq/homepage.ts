import type { FAQItem } from "@/types/faq";

export const homepageFaqs: FAQItem[] = [
  {
    id: "marketplace",
    question: "Are you the contractor, or a matching service?",
    answer:
      "We are a free matching platform — not a contractor. We connect you with independent, vetted professionals in Edmonton. You hire and pay the pro directly.",
    category: "general",
    featured: true,
  },
  {
    id: "free",
    question: "Is this really free for homeowners?",
    answer:
      "Yes. Homeowners never pay to use Edmonton Home Connect. Professionals in our network pay to receive matched leads.",
    category: "pricing",
    featured: true,
  },
  {
    id: "how-many",
    question: "How many pros will contact me?",
    answer:
      "Typically up to 3 matched professionals will reach out with quotes. We curate matches based on your project, location, and availability — no spam lists.",
    category: "process",
    featured: true,
  },
  {
    id: "vetting",
    question: "How do you vet professionals?",
    answer:
      "Every pro must provide proof of liability insurance and WCB coverage, pass credential checks where applicable, and maintain strong customer reviews. Learn more on our vetting process page.",
    category: "vetting",
    featured: true,
  },
  {
    id: "areas",
    question: "What areas do you serve?",
    answer:
      "We serve Edmonton and the Capital Region including Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Fort Saskatchewan, Leduc, and Beaumont.",
    category: "general",
    featured: true,
  },
  {
    id: "speed",
    question: "How fast will I hear back?",
    answer:
      "Most homeowners receive their first pro contact within 24 hours. Urgent requests are prioritized when possible.",
    category: "process",
    featured: true,
  },
  {
    id: "unhappy",
    question: "What if I'm not happy with the pro?",
    answer:
      "Contact us immediately. We investigate all feedback and remove pros who don't meet our standards. Your experience helps keep our network trustworthy.",
    category: "general",
    featured: true,
  },
];

export function getFeaturedFaqs(): FAQItem[] {
  return homepageFaqs.filter((f) => f.featured);
}
