import { siteConfig } from "@/config/site";

export const privacyPolicySections = [
  {
    title: "Information we collect",
    body: `When you submit a quote request, we collect your name, email, phone number, postal code, service type, project description, and timeline. We may also collect analytics data (pages visited, referral source) to improve our service.`,
  },
  {
    title: "How we use your information",
    body: `We use your information to review your project, prepare quotes, and schedule work with our team. We do not sell your personal information to third parties or marketing lists.`,
  },
  {
    title: "Information sharing",
    body: `Your contact details and project description are used by ${siteConfig.name} staff to respond to your request, provide quotes, and schedule work. We do not sell or share your information with outside contractors.`,
  },
  {
    title: "Data retention",
    body: `We retain lead data for up to 24 months for quality assurance and dispute resolution, then securely delete or anonymize it unless a longer period is required by law.`,
  },
  {
    title: "Your rights (PIPEDA)",
    body: `Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), you may request access to, correction of, or deletion of your personal information. Contact us at ${siteConfig.email}.`,
  },
  {
    title: "Cookies & analytics",
    body: `We use Google Analytics and Google Tag Manager to understand site usage. You may disable cookies in your browser settings. Analytics data is aggregated and does not identify you personally.`,
  },
  {
    title: "Contact",
    body: `Privacy inquiries: ${siteConfig.email} · ${siteConfig.phone.display}`,
  },
] as const;

export const termsSections = [
  {
    title: "Service description",
    body: `${siteConfig.name} is a licensed home service contractor serving Edmonton and the Capital Region. Our own team performs the work described in your approved quote.`,
  },
  {
    title: "No charge to homeowners",
    body: `Quote requests are free with no obligation. You pay ${siteConfig.name} directly for approved work as outlined in your written quote.`,
  },
  {
    title: "Our team & workmanship",
    body: `Work is performed by ${siteConfig.name}'s own employees and crew. We stand behind the quality of work outlined in your approved quote and address concerns promptly.`,
  },
  {
    title: "Quotes & contracts",
    body: `We provide written quotes before work begins. You are under no obligation until you approve a quote. Review scope, pricing, and timeline before authorizing work.`,
  },
  {
    title: "Limitation of liability",
    body: `To the maximum extent permitted by Alberta law, ${siteConfig.name} shall not be liable for indirect, incidental, or consequential damages arising from use of our website or services beyond the scope of your approved quote.`,
  },
  {
    title: "Governing law",
    body: `These terms are governed by the laws of Alberta, Canada. Disputes shall be resolved in the courts of Edmonton, Alberta.`,
  },
] as const;

export const disclaimerSections = [
  {
    title: "Contractor disclaimer",
    body: siteConfig.business.marketplaceDisclaimer,
  },
  {
    title: "Not emergency services",
    body: `For emergencies (gas leaks, flooding, electrical hazards), call 911 or your utility emergency line immediately. Standard quote requests are not designed for emergency response.`,
  },
  {
    title: "Licensing",
    body: `Certain trades in Alberta require licensed professionals (electrical, plumbing, gas). Our licensed team members handle work that requires credentials under Alberta law.`,
  },
  {
    title: "Pricing & quotes",
    body: `We do not publish fixed prices on this site. Every project is quoted individually based on scope, materials, access, and complexity. Request a free quote for accurate pricing on your specific work.`,
  },
  {
    title: "Reviews & testimonials",
    body: `Testimonials represent individual homeowner experiences. Results vary. Google review counts and ratings reflect our business profile and are updated periodically.`,
  },
] as const;
