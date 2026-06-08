import type { FAQItem } from "@/types/faq";

export const homepageFaqs: FAQItem[] = [
  {
    id: "contractor",
    question: "Do you do the work yourselves?",
    answer:
      "Yes. We are a licensed contractor with our own team. When you request a quote, our crew handles the project directly — no outside subcontractors or lead matching.",
    category: "general",
    featured: true,
  },
  {
    id: "free",
    question: "Is the quote really free?",
    answer:
      "Yes. Requesting a quote is completely free with no obligation. We provide upfront pricing before any work begins.",
    category: "pricing",
    featured: true,
  },
  {
    id: "who-does-work",
    question: "Who will do the work?",
    answer:
      "Our own in-house team handles your project from start to finish. You work directly with us — one company, one crew, accountable from quote to completion.",
    category: "process",
    featured: true,
  },
  {
    id: "vetting",
    question: "Is your team licensed and insured?",
    answer:
      "Yes. Our team carries liability insurance and WCB coverage. Licensed trades handle electrical, plumbing, and gas work where required by Alberta law.",
    category: "vetting",
    featured: true,
  },
  {
    id: "areas",
    question: "What areas do you serve?",
    answer:
      "We serve Edmonton and the Capital Region including Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Leduc, and Beaumont.",
    category: "general",
    featured: true,
  },
  {
    id: "speed",
    question: "How fast will I hear back?",
    answer:
      "Most quote requests receive a response from our team within 24 hours. Urgent requests are prioritized when possible.",
    category: "process",
    featured: true,
  },
  {
    id: "unhappy",
    question: "What if I'm not happy with the work?",
    answer:
      "Contact us immediately. We stand behind our work and will work with you to make it right. Your satisfaction is our priority.",
    category: "general",
    featured: true,
  },
];

export function getFeaturedFaqs(): FAQItem[] {
  return homepageFaqs.filter((f) => f.featured);
}
