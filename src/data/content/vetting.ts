import { howItWorksSteps } from "@/data/content/homepage";

export const vettingSteps = [
  {
    step: 1,
    title: "Application & credentials",
    description:
      "Pros submit business registration, trade licenses (where required), liability insurance certificates, and WCB clearance letters.",
  },
  {
    step: 2,
    title: "Insurance verification",
    description:
      "We verify minimum $2M general liability coverage and active WCB account status before any pro enters our matching network.",
  },
  {
    step: 3,
    title: "Reference & review check",
    description:
      "We review Google Business Profile ratings, past customer references, and complaint history. Pros below our standards are declined.",
  },
  {
    step: 4,
    title: "Ongoing monitoring",
    description:
      "Insurance and license renewals are re-checked annually. Homeowner feedback after every match helps us maintain network quality.",
  },
] as const;

export const vettingRequirements = [
  "Valid Alberta business registration or sole proprietorship",
  "Minimum $2M general liability insurance",
  "Active WCB coverage for all employees",
  "Trade license for electricians, plumbers, and gas fitters",
  "Google rating of 4.0+ with minimum 10 reviews (or equivalent references for new businesses)",
  "Written quotes provided before work begins",
  "Agreement to our code of conduct and homeowner communication standards",
] as const;

export { howItWorksSteps };
