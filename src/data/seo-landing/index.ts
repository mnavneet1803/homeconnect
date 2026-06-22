import { ROUTES } from "@/constants/routes";
import type { ServiceSlug } from "@/constants/services";

export interface SeoLandingPage {
  slug: string;
  path: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: { src: string; alt: string; width: number; height: number };
  intro: string;
  localContent: string;
  benefits: { title: string; description: string; icon: string }[];
  faq: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
  defaultServiceSlug?: ServiceSlug;
}

const DIR = "/images/services";

export const SEO_LANDING_PAGES: Record<string, SeoLandingPage> = {
  "tv-wall-mounting-edmonton": {
    slug: "tv-wall-mounting-edmonton",
    path: ROUTES.seoLanding.tvWallMounting,
    h1: "TV Wall Mounting in Edmonton",
    metaTitle: "TV Wall Mounting Edmonton | Professional Install & Wiring",
    metaDescription:
      "Professional TV wall mounting in Edmonton. Secure installs, concealed wiring, and soundbar setup. Call 587-594-8575 or request a free quote.",
    heroImage: {
      src: `${DIR}/tv-wall-mount-stereo-installation.png`,
      alt: "Professional TV wall mounting in an Edmonton living room",
      width: 627,
      height: 352,
    },
    intro:
      "Get your TV mounted safely and neatly. We handle stud finding, bracket selection, cable concealment, and soundbar installs for Edmonton homes and condos.",
    localContent:
      "Edmonton homeowners trust us for TV mounting in living rooms, bedrooms, and basement rec rooms — including condos with concrete or metal stud walls. We work across all quadrants and surrounding communities.",
    benefits: [
      { title: "Secure mounting", description: "Proper anchors and brackets for your wall type — drywall, concrete, or metal studs.", icon: "shield-check" },
      { title: "Clean wiring", description: "Concealed cables and tidy installs so your setup looks professional.", icon: "check-circle" },
      { title: "All TV sizes", description: "From bedroom TVs to large living-room displays and soundbar add-ons.", icon: "layers" },
      { title: "Condo-friendly", description: "Experienced with Edmonton condo rules and shared-wall considerations.", icon: "home" },
    ],
    faq: [
      { question: "Can you mount a TV on a brick or concrete wall?", answer: "Yes. We use the right anchors and techniques for brick, concrete, and metal stud walls common in Edmonton condos." },
      { question: "Do you hide the cables?", answer: "Yes. We offer in-wall cable concealment and external raceway options depending on your wall and budget." },
      { question: "What areas do you serve?", answer: "We serve Edmonton and surrounding areas including Sherwood Park, St. Albert, and Spruce Grove." },
      { question: "How do I get a quote?", answer: "Call 587-594-8575 or fill out our free quote form. Tell us your TV size, wall type, and whether you need wire concealment." },
    ],
    relatedLinks: [
      { label: "Handyman Services", href: ROUTES.seoLanding.handyman },
      { label: "Furniture Assembly", href: ROUTES.seoLanding.furnitureAssembly },
      { label: "House & Condo Maintenance", href: ROUTES.services.detail("home-maintenance") },
    ],
    defaultServiceSlug: "tv-wall-mounting",
  },
  "handyman-services-edmonton": {
    slug: "handyman-services-edmonton",
    path: ROUTES.seoLanding.handyman,
    h1: "Handyman Services in Edmonton",
    metaTitle: "Handyman Services Edmonton | Repairs, Installs & Home Fixes",
    metaDescription:
      "Reliable handyman services in Edmonton — drywall, doors, shelving, minor plumbing and electrical. Call 587-594-8575 or request a free quote.",
    heroImage: {
      src: `${DIR}/handyman-services-edmonton.png`,
      alt: "Handyman repairing kitchen cabinets in an Edmonton home",
      width: 859,
      height: 573,
    },
    intro:
      "One call for the repairs and installs piling up on your list. Our Edmonton handyman team handles drywall, doors, shelving, caulking, and general home fixes.",
    localContent:
      "From quick fixes in downtown condos to maintenance in Terwillegar and Windermere homes, we help Edmonton homeowners keep properties in great shape — without juggling multiple contractors.",
    benefits: [
      { title: "One team, many skills", description: "Drywall, doors, shelving, caulking, and general repairs handled by our crew.", icon: "wrench" },
      { title: "Free quotes", description: "Upfront pricing before work begins — no obligation.", icon: "gift" },
      { title: "Fast scheduling", description: "Most requests receive a response within 24 hours.", icon: "clock" },
      { title: "Local experience", description: "We know Edmonton homes — bungalows, infills, and condos.", icon: "map-pin" },
    ],
    faq: [
      { question: "What can a handyman help with?", answer: "Common jobs include drywall repair, door adjustments, shelving, furniture assembly, caulking, minor plumbing and electrical fixes, and general maintenance." },
      { question: "Do you serve condos?", answer: "Yes. We regularly work in Edmonton condos and understand building access and noise considerations." },
      { question: "How much does a handyman cost in Edmonton?", answer: "Cost depends on the job scope. Request a free quote and we'll provide upfront pricing before any work begins." },
      { question: "What areas do you cover?", answer: "Edmonton and surrounding areas including Sherwood Park, St. Albert, and Spruce Grove." },
    ],
    relatedLinks: [
      { label: "TV Wall Mounting", href: ROUTES.seoLanding.tvWallMounting },
      { label: "Door & Lock Repair", href: ROUTES.seoLanding.doorLockRepair },
      { label: "Move-In / Move-Out Repairs", href: ROUTES.seoLanding.moveInMoveOut },
    ],
    defaultServiceSlug: "handyman",
  },
  "furniture-assembly-edmonton": {
    slug: "furniture-assembly-edmonton",
    path: ROUTES.seoLanding.furnitureAssembly,
    h1: "Furniture Assembly in Edmonton",
    metaTitle: "Furniture Assembly Edmonton | IKEA & Flat-Pack Builds",
    metaDescription:
      "Professional furniture assembly in Edmonton — IKEA, flat-pack, office desks, and wardrobes. Call 587-594-8575 or request a free quote.",
    heroImage: {
      src: `${DIR}/repair-services-strip.png`,
      alt: "Furniture assembly service in Edmonton homes",
      width: 1024,
      height: 151,
    },
    intro:
      "Skip the frustration of flat-pack instructions. We assemble IKEA, Wayfair, office furniture, wardrobes, and more — correctly, securely, and on your schedule.",
    localContent:
      "Whether you're settling into a new Edmonton home or refreshing a room, our team assembles furniture in houses, townhomes, and condos across the city.",
    benefits: [
      { title: "IKEA & flat-pack pros", description: "Experienced with IKEA, Wayfair, Amazon, and other flat-pack brands.", icon: "clipboard-list" },
      { title: "Wall anchoring", description: "We secure tall units and dressers properly for safety.", icon: "shield-check" },
      { title: "Clean workspace", description: "Packaging removed and work area left tidy.", icon: "sparkles" },
      { title: "Flexible scheduling", description: "Book assembly around your move-in or delivery date.", icon: "calendar" },
    ],
    faq: [
      { question: "Do you assemble IKEA furniture?", answer: "Yes. IKEA PAX, BILLY, MALM, and kitchen modules are among our most common assembly requests in Edmonton." },
      { question: "Can you mount furniture to the wall?", answer: "Yes. We anchor tall dressers, bookshelves, and wardrobes per manufacturer guidelines." },
      { question: "Do I need to be home?", answer: "Someone 18+ should be present at the start and end of the appointment to confirm placement and access." },
      { question: "How do I book?", answer: "Call 587-594-8575 or request a free quote with your furniture brand, item count, and postal code." },
    ],
    relatedLinks: [
      { label: "Handyman Services", href: ROUTES.seoLanding.handyman },
      { label: "TV Wall Mounting", href: ROUTES.seoLanding.tvWallMounting },
      { label: "Move-In / Move-Out Repairs", href: ROUTES.seoLanding.moveInMoveOut },
    ],
    defaultServiceSlug: "furniture-assembly",
  },
  "door-lock-repair-edmonton": {
    slug: "door-lock-repair-edmonton",
    path: ROUTES.seoLanding.doorLockRepair,
    h1: "Door & Lock Repair in Edmonton",
    metaTitle: "Door Lock Repair Edmonton | Sticky Doors & Lock Fixes",
    metaDescription:
      "Door and lock repair in Edmonton — sticky doors, misaligned frames, deadbolts, and handle replacements. Call 587-594-8575 or request a free quote.",
    heroImage: {
      src: `${DIR}/handyman-repair-services-overview.png`,
      alt: "Door and lock repair services in Edmonton homes",
      width: 1024,
      height: 682,
    },
    intro:
      "Sticky doors, loose handles, and misaligned deadbolts are more than annoying — they're a security concern. We repair and adjust doors and locks across Edmonton homes and condos.",
    localContent:
      "Edmonton weather swings can throw doors out of alignment. We fix binding interior doors, exterior entry issues, and lock hardware for homeowners and landlords throughout the city.",
    benefits: [
      { title: "Door alignment", description: "Fix binding, rubbing, and gap issues caused by settling or humidity.", icon: "wrench" },
      { title: "Lock hardware", description: "Deadbolt, handle, and strike plate repairs and replacements.", icon: "lock" },
      { title: "Security peace of mind", description: "Ensure entry doors close and lock properly every time.", icon: "shield-check" },
      { title: "Rental-ready fixes", description: "Ideal for landlords preparing units between tenants.", icon: "home" },
    ],
    faq: [
      { question: "Can you fix a door that won't latch?", answer: "Yes. We adjust hinges, strike plates, and frames so doors close and latch smoothly." },
      { question: "Do you replace deadbolts?", answer: "Yes. We can replace or upgrade deadbolts and entry handles — bring your own hardware or ask us to supply." },
      { question: "Is this an emergency service?", answer: "We prioritize urgent lock and entry issues when possible. Call 587-594-8575 to discuss timing." },
      { question: "What areas do you serve?", answer: "Edmonton and surrounding areas. Request a free quote with your postal code." },
    ],
    relatedLinks: [
      { label: "Handyman Services", href: ROUTES.seoLanding.handyman },
      { label: "Move-In / Move-Out Repairs", href: ROUTES.seoLanding.moveInMoveOut },
      { label: "House & Condo Maintenance", href: ROUTES.services.detail("home-maintenance") },
    ],
    defaultServiceSlug: "handyman",
  },
  "move-in-move-out-repairs-edmonton": {
    slug: "move-in-move-out-repairs-edmonton",
    path: ROUTES.seoLanding.moveInMoveOut,
    h1: "Move-In / Move-Out Repairs in Edmonton",
    metaTitle: "Move-In Move-Out Repairs Edmonton | Rental Touch-Ups",
    metaDescription:
      "Move-in and move-out repairs in Edmonton — patch holes, fix scuffs, baseboards, and touch-ups. Call 587-594-8575 or request a free quote.",
    heroImage: {
      src: `/images/homepage/move-in-move-out-repairs.jpg`,
      alt: "Move-out and move-in repairs in Edmonton — hole and dent repair, baseboard fixes, scratch removal and touch-up painting",
      width: 1024,
      height: 682,
    },
    intro:
      "Get your rental or new home move-ready. We patch holes, fix scuffed walls, repair baseboards, and handle the small repairs that make a big difference at turnover.",
    localContent:
      "Edmonton landlords and tenants rely on us for fast move-out touch-ups and move-in fixes. We work in apartments, condos, and single-family homes across the city.",
    benefits: [
      { title: "Rental touch-ups", description: "Patch holes, fix dents, and touch up paint for deposit returns.", icon: "paintbrush" },
      { title: "Baseboard repair", description: "Fix chipped, loose, or damaged baseboards and trim.", icon: "layers" },
      { title: "Fast turnaround", description: "Ideal for tight move-out deadlines and new tenant handovers.", icon: "clock" },
      { title: "Landlord-friendly", description: "Written quotes and reliable scheduling for property managers.", icon: "clipboard-list" },
    ],
    faq: [
      { question: "Can you patch drywall holes from picture hangers?", answer: "Yes. Nail holes, anchor holes, and larger drywall damage are common move-out repairs we handle." },
      { question: "Do you do painting?", answer: "We handle touch-up painting for repaired areas. Full-room repainting can be quoted separately." },
      { question: "How fast can you complete repairs?", answer: "Timeline depends on scope. Share your move-out date when requesting a quote and we'll confirm availability." },
      { question: "Do you work with property managers?", answer: "Yes. We regularly help Edmonton landlords and property managers with turnover repairs." },
    ],
    relatedLinks: [
      { label: "Handyman Services", href: ROUTES.seoLanding.handyman },
      { label: "Door & Lock Repair", href: ROUTES.seoLanding.doorLockRepair },
      { label: "House & Condo Maintenance", href: ROUTES.services.detail("home-maintenance") },
    ],
    defaultServiceSlug: "move-in-move-out-repairs",
  },
};

export const SEO_LANDING_SLUGS = Object.keys(SEO_LANDING_PAGES);

export function getSeoLandingPage(slug: string): SeoLandingPage | null {
  return SEO_LANDING_PAGES[slug] ?? null;
}
