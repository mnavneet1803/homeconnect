import { howItWorksSteps } from "@/data/content/homepage";

export const vettingSteps = [
  {
    step: 1,
    title: "Skilled tradespeople",
    description:
      "Our team has the experience needed for handyman, plumbing, electrical, and general home repair work across Edmonton.",
  },
  {
    step: 2,
    title: "Quality standards",
    description:
      "We follow consistent quality checklists, safety protocols, and homeowner communication standards on every job.",
  },
  {
    step: 3,
    title: "Training & standards",
    description:
      "Our crew follows consistent quality checklists, safety protocols, and homeowner communication standards on every job.",
  },
  {
    step: 4,
    title: "Ongoing quality monitoring",
    description:
      "Homeowner feedback after every project helps us maintain our service standards and improve with every job.",
  },
] as const;

export const vettingRequirements = [
  "Valid Alberta business registration",
  "Written quotes provided before work begins",
  "Code of conduct and homeowner communication standards",
  "Experienced crew for residential repairs and maintenance",
  "Reliable scheduling and follow-through",
  "Respect for your home and property",
] as const;

export { howItWorksSteps };
