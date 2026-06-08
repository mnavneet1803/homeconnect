import { howItWorksSteps } from "@/data/content/homepage";

export const vettingSteps = [
  {
    step: 1,
    title: "Licensed & credentialed",
    description:
      "Our team holds required trade licenses for electrical, plumbing, and gas work. Every crew member meets Alberta credential requirements for their role.",
  },
  {
    step: 2,
    title: "Insurance verification",
    description:
      "We maintain minimum $2M general liability coverage and active WCB account status for all employees and on-site work.",
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
      "Insurance and license renewals are kept current. Homeowner feedback after every project helps us maintain our service standards.",
  },
] as const;

export const vettingRequirements = [
  "Valid Alberta business registration",
  "Minimum $2M general liability insurance",
  "Active WCB coverage for all employees",
  "Trade license for electricians, plumbers, and gas fitters",
  "Written quotes provided before work begins",
  "Code of conduct and homeowner communication standards",
] as const;

export { howItWorksSteps };
