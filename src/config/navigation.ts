import { ROUTES } from "@/constants/routes";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/contact/whatsapp";
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
      { label: "Join Our Team", href: ROUTES.careers.index },
      { label: "Contact", href: ROUTES.contact },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Get a Quote", href: ROUTES.costGuides.index },
      { label: "Guides", href: ROUTES.guides.index },
      { label: "FAQ", href: ROUTES.faq },
      { label: "Blog", href: ROUTES.blog.index },
    ],
  },
];

export const ctaNavigation = {
  primary: { label: "Request a Free Quote", href: "/#quote" },
  secondary: { label: "Call Now", href: `tel:${siteConfig.phone.tel}` },
  whatsapp: { label: "WhatsApp", href: getWhatsAppUrl() },
} as const;
