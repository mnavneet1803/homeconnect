import { ROUTES } from "@/constants/routes";
import type { NavItem, FooterColumn } from "@/types/navigation";

export const mainNavigation: NavItem[] = [
  {
    label: "Services",
    href: ROUTES.services.index,
    children: [], // populated dynamically from services data in Header
  },
  {
    label: "Service Areas",
    href: ROUTES.locations.index,
  },
  {
    label: "How It Works",
    href: ROUTES.howItWorks,
  },
  {
    label: "About",
    href: ROUTES.about,
  },
];

export const footerNavigation: FooterColumn[] = [
  {
    title: "Services",
    links: [], // populated from services data
  },
  {
    title: "Locations",
    links: [], // populated from locations data
  },
  {
    title: "Company",
    links: [
      { label: "About", href: ROUTES.about },
      { label: "How It Works", href: ROUTES.howItWorks },
      { label: "Vetting Process", href: ROUTES.vetting },
      { label: "For Pros", href: ROUTES.forPros.index },
      { label: "Contact", href: ROUTES.contact },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Cost Guides", href: ROUTES.costGuides.index },
      { label: "Guides", href: ROUTES.guides.index },
      { label: "FAQ", href: ROUTES.faq },
      { label: "Blog", href: ROUTES.blog.index },
    ],
  },
];

export const ctaNavigation = {
  primary: { label: "Get Free Quotes", href: ROUTES.quote },
  secondary: { label: "Call Us", href: "tel:+17805550123" },
} as const;
