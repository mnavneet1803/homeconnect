import { siteConfig } from "@/config/site";

export const privacyPolicySections = [
  {
    title: "Information we collect",
    body: `When you submit a quote request, we collect your name, email, phone number, postal code, service type, project description, and timeline. We may also collect analytics data (pages visited, referral source) to improve our service.`,
  },
  {
    title: "How we use your information",
    body: `We use your information solely to match you with up to ${siteConfig.business.maxMatchedPros} vetted home service professionals in our Edmonton network. We do not sell your personal information to third parties or marketing lists.`,
  },
  {
    title: "Information sharing",
    body: `Your contact details and project description are shared only with matched professionals who may contact you regarding your request. Matched pros are independent contractors — not employees of ${siteConfig.name}.`,
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
    body: `${siteConfig.name} is a free matching platform connecting Edmonton homeowners with independent home service professionals. We do not perform work, employ contractors, or guarantee project outcomes.`,
  },
  {
    title: "No charge to homeowners",
    body: `Our matching service is free for homeowners. You pay the professional you hire directly. We do not mark up labour or materials.`,
  },
  {
    title: "Independent contractors",
    body: `All professionals in our network are independent businesses. ${siteConfig.name} is not liable for the quality, timing, pricing, or safety of work performed by matched pros.`,
  },
  {
    title: "Quotes & contracts",
    body: `Matched professionals provide their own written quotes and contracts. You are under no obligation to hire any matched pro. Always review quotes, insurance, and references before hiring.`,
  },
  {
    title: "Limitation of liability",
    body: `To the maximum extent permitted by Alberta law, ${siteConfig.name} shall not be liable for indirect, incidental, or consequential damages arising from use of our platform or services performed by matched professionals.`,
  },
  {
    title: "Governing law",
    body: `These terms are governed by the laws of Alberta, Canada. Disputes shall be resolved in the courts of Edmonton, Alberta.`,
  },
] as const;

export const disclaimerSections = [
  {
    title: "Marketplace disclaimer",
    body: siteConfig.business.marketplaceDisclaimer,
  },
  {
    title: "Not emergency services",
    body: `For emergencies (gas leaks, flooding, electrical hazards), call 911 or your utility emergency line immediately. Our matching service is not designed for emergency response.`,
  },
  {
    title: "Licensing",
    body: `Certain trades in Alberta require licensed professionals (electrical, plumbing, gas). While we verify licenses for trades in our network, homeowners should confirm credentials before work begins.`,
  },
  {
    title: "Pricing estimates",
    body: `Cost ranges and FAQ pricing on this site are general Edmonton market estimates. Actual quotes depend on project scope, materials, and individual pro rates.`,
  },
  {
    title: "Reviews & testimonials",
    body: `Testimonials represent individual homeowner experiences. Results vary. Google review counts and ratings reflect our business profile and are updated periodically.`,
  },
] as const;
