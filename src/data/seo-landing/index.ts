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
      { label: "Furniture & Shed Assembly", href: ROUTES.seoLanding.furnitureAssembly },
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
    h1: "Furniture & Shed Assembly in Edmonton",
    metaTitle: "Furniture & Shed Assembly Edmonton | IKEA, Flat-Pack & Outdoor Kits",
    metaDescription:
      "Furniture and shed assembly in Edmonton — IKEA, flat-pack, wardrobes, and outdoor storage kits. Call 587-594-8575 or request a free quote.",
    heroImage: {
      src: `${DIR}/repair-services-strip.png`,
      alt: "Furniture and shed assembly service in Edmonton homes",
      width: 1024,
      height: 151,
    },
    intro:
      "Skip the frustration of flat-pack instructions. We assemble IKEA, Wayfair, office furniture, wardrobes, and outdoor shed / storage kits — correctly, securely, and on your schedule.",
    localContent:
      "Whether you're settling into a new Edmonton home, refreshing a room, or putting up a backyard shed, our team assembles indoor furniture and outdoor storage kits across houses, townhomes, and condos in the Capital Region.",
    benefits: [
      { title: "IKEA & flat-pack pros", description: "Experienced with IKEA, Wayfair, Amazon, and other flat-pack brands.", icon: "clipboard-list" },
      { title: "Shed & outdoor storage", description: "Garden sheds and storage kits built square, level, and secure.", icon: "home" },
      { title: "Wall anchoring", description: "We secure tall units and dressers properly for safety.", icon: "shield-check" },
      { title: "Clean workspace", description: "Packaging removed and work area left tidy.", icon: "sparkles" },
    ],
    faq: [
      { question: "Do you assemble IKEA furniture?", answer: "Yes. IKEA PAX, BILLY, MALM, and kitchen modules are among our most common assembly requests in Edmonton." },
      { question: "Do you assemble sheds too?", answer: "Yes. Shed and outdoor storage kit assembly is part of our furniture & shed assembly service — share the brand, model, and pad photos for a clear quote." },
      { question: "Can you mount furniture to the wall?", answer: "Yes. We anchor tall dressers, bookshelves, and wardrobes per manufacturer guidelines." },
      { question: "Do I need to be home?", answer: "Someone 18+ should be present at the start and end of the appointment to confirm placement and access." },
      { question: "How do I book?", answer: "Call 587-594-8575 or request a free quote with your furniture or shed brand, item count, and postal code." },
    ],
    relatedLinks: [
      { label: "Shed Assembly details", href: ROUTES.seoLanding.shedAssembly },
      { label: "Handyman Services", href: ROUTES.seoLanding.handyman },
      { label: "TV Wall Mounting", href: ROUTES.seoLanding.tvWallMounting },
      { label: "Get a Free Quote", href: ROUTES.quote },
      { label: "Contact", href: ROUTES.contact },
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
      { label: "Get a Free Quote", href: ROUTES.quote },
      { label: "Contact", href: ROUTES.contact },
    ],
    defaultServiceSlug: "move-in-move-out-repairs",
  },

  "house-cleaning-edmonton": {
    slug: "house-cleaning-edmonton",
    path: ROUTES.seoLanding.houseCleaning,
    h1: "House Cleaning Edmonton",
    metaTitle: "House Cleaning Edmonton | Home, Condo & Rental Cleaners",
    metaDescription:
      "Professional house cleaning in Edmonton for homes, condos, and rentals. Reliable crews, free quotes. Call 587-594-8575.",
    heroImage: {
      src: `/images/homepage/cleaning-services-banner.png`,
      alt: "Professional house cleaning services in Edmonton homes",
      width: 807,
      height: 532,
    },
    intro:
      "Keep your Edmonton home fresh with professional cleaning — regular visits, deep cleans, and move-ready turnovers from our own crew.",
    localContent:
      "We clean houses, condos, apartments, and small offices across Edmonton, Sherwood Park, St. Albert, Beaumont, Leduc, Fort Saskatchewan, and Spruce Grove. Whether you need a one-time reset or recurring service, you get clear pricing and accountable local cleaners — not a marketplace of strangers.",
    benefits: [
      { title: "Homes & condos", description: "Residential cleaning tailored to Edmonton houses and multi-unit living.", icon: "home" },
      { title: "Deep & routine cleans", description: "Weekly, bi-weekly, or one-time deep cleans scoped to your checklist.", icon: "sparkles" },
      { title: "Free quotes", description: "Upfront pricing before we arrive — call or book online.", icon: "gift" },
      { title: "Local crew", description: "Accountable Edmonton cleaners — not a rotating marketplace.", icon: "users" },
    ],
    faq: [
      { question: "Do you offer recurring house cleaning in Edmonton?", answer: "Yes. We can schedule weekly, bi-weekly, or monthly cleans based on your home size and preferences." },
      { question: "Do I need to provide supplies?", answer: "We typically bring professional supplies. Share any product preferences or sensitivities when requesting a quote." },
      { question: "What areas do you serve?", answer: "Edmonton and surrounding areas including Sherwood Park, St. Albert, Beaumont, Leduc, Fort Saskatchewan, and Spruce Grove." },
      { question: "How do I get a free quote?", answer: "Call 587-594-8575, message us on WhatsApp, or submit the quote form with your home size and preferred timing." },
    ],
    relatedLinks: [
      { label: "Handyman Services", href: ROUTES.seoLanding.handyman },
      { label: "Get a Free Quote", href: ROUTES.quote },
      { label: "Contact", href: ROUTES.contact },
    ],
    defaultServiceSlug: "cleaners",
  },

  "painting-services-edmonton": {
    slug: "painting-services-edmonton",
    path: ROUTES.seoLanding.painting,
    h1: "Painting & Drywall Services Edmonton",
    metaTitle: "Painting & Drywall Edmonton | Interior, Exterior & Wall Repair",
    metaDescription:
      "Painting and drywall services in Edmonton — interior, exterior, patches, and paint-ready finishes. Free quotes. Call 587-594-8575.",
    heroImage: {
      src: `/images/homepage/painting-renovation-collage.png`,
      alt: "Interior painting and drywall finishing services in Edmonton",
      width: 1024,
      height: 558,
    },
    intro:
      "Fresh walls start with solid prep. Our Edmonton crew handles drywall repair, priming, and clean paint finishes for interior and exterior projects — one team from patch to final coat.",
    localContent:
      "From condo touch-ups in Oliver to full-room refreshes in Terwillegar and Windermere, we repair drywall and paint Edmonton homes with careful masking, smooth coverage, and tidy cleanup. Landlords also use us for turnover wall repairs and paint between tenants.",
    benefits: [
      { title: "Interior & exterior painting", description: "Rooms, hallways, ceilings, trim, and weather-ready exteriors.", icon: "paintbrush" },
      { title: "Drywall repair included", description: "Holes, dents, seams, and texture blending before we paint.", icon: "layers" },
      { title: "Paint-ready finishes", description: "Proper patching, sanding, and priming so coats look smooth.", icon: "shield-check" },
      { title: "Free estimates", description: "Written quotes for painting, drywall, or both — no obligation.", icon: "gift" },
    ],
    faq: [
      { question: "Do you paint interiors and exteriors?", answer: "Yes. We handle interior rooms and select exterior painting projects. Share photos for an accurate quote." },
      { question: "Is drywall repair part of painting?", answer: "Yes. Drywall patching, seam repairs, and paint-ready prep are included in our painting service when your walls need it — quoted as one scope so you are not coordinating two crews." },
      { question: "Can you match drywall texture before painting?", answer: "Yes. We blend common textures such as knockdown and orange peel so repairs disappear under paint." },
      { question: "How long does a typical room take?", answer: "Most single rooms finish in one day depending on drywall prep and colour changes. Multi-room projects are scheduled accordingly." },
      { question: "What areas do you cover?", answer: "Edmonton and surrounding communities across the Capital Region." },
    ],
    relatedLinks: [
      { label: "Drywall Repair details", href: ROUTES.seoLanding.drywallRepair },
      { label: "Handyman Services", href: ROUTES.seoLanding.handyman },
      { label: "Get a Free Quote", href: ROUTES.quote },
      { label: "Contact", href: ROUTES.contact },
    ],
    defaultServiceSlug: "painters",
  },

  "drywall-repair-edmonton": {
    slug: "drywall-repair-edmonton",
    path: ROUTES.seoLanding.drywallRepair,
    h1: "Drywall Repair Edmonton",
    metaTitle: "Drywall Repair Edmonton | Patch, Texture & Paint-Ready Walls",
    metaDescription:
      "Drywall repair in Edmonton — holes, dents, seams, and paint-ready finishes. Free quotes. Call 587-594-8575.",
    heroImage: {
      src: `${DIR}/handyman-repair-services-overview.png`,
      alt: "Drywall repair and wall patching in an Edmonton home",
      width: 1024,
      height: 682,
    },
    intro:
      "Holes, dents, and uneven patches make rooms look unfinished. We repair drywall as part of our painting & drywall service — so walls are paint-ready and finished by one crew.",
    localContent:
      "Edmonton homeowners and landlords call us for doorknob dents, picture-hanger holes, water-damage patches, and rental punch-list walls. Drywall repair is included with our painting service when you need patch-and-paint in one visit across the Capital Region.",
    benefits: [
      { title: "Hole & dent patching", description: "Small to medium repairs blended to the surrounding wall.", icon: "layers" },
      { title: "Seam & texture work", description: "Tape, mud, and texture matching for a smooth look.", icon: "check-circle" },
      { title: "Paint in the same visit", description: "Ask for patch-and-paint so one crew finishes the job.", icon: "paintbrush" },
      { title: "Free quotes", description: "Clear pricing after photos or a quick site look.", icon: "gift" },
    ],
    faq: [
      { question: "Is drywall repair separate from painting?", answer: "No — drywall repair is part of our painting & drywall service. You can book patch-only or patch-and-paint as one quote." },
      { question: "Can you match drywall texture?", answer: "Yes — we blend common textures such as knockdown and orange peel so repairs disappear once painted." },
      { question: "Do you paint after patching?", answer: "Yes. Most clients combine drywall repair with paint so walls look finished when we leave." },
      { question: "How fast can you start?", answer: "Most requests get a response within 24 hours. Ask about same-day availability when you call." },
      { question: "Do you serve surrounding areas?", answer: "Yes — Edmonton, Sherwood Park, St. Albert, Beaumont, Leduc, Fort Saskatchewan, Spruce Grove, and more." },
    ],
    relatedLinks: [
      { label: "Painting & Drywall Services", href: ROUTES.seoLanding.painting },
      { label: "Handyman Services", href: ROUTES.seoLanding.handyman },
      { label: "Get a Free Quote", href: ROUTES.quote },
      { label: "Contact", href: ROUTES.contact },
    ],
    defaultServiceSlug: "painters",
  },

  "plumbing-services-edmonton": {
    slug: "plumbing-services-edmonton",
    path: ROUTES.seoLanding.plumbing,
    h1: "Plumbing Services Edmonton",
    metaTitle: "Plumbing Services Edmonton | Leaks, Fixtures & Maintenance",
    metaDescription:
      "Plumbing services in Edmonton — leaks, taps, toilets, drains, and fixture repairs. Free quotes. Call 587-594-8575.",
    heroImage: {
      src: `${DIR}/home-maintenance-repairs-edmonton.png`,
      alt: "Plumbing maintenance and leak repair in Edmonton",
      width: 1024,
      height: 682,
    },
    intro:
      "Stop drips and small plumbing headaches before they become big ones. Our Edmonton crew handles fixture repairs, leaks, and everyday plumbing maintenance.",
    localContent:
      "From dripping taps in Mill Woods to toilet repairs in St. Albert condos, we help homeowners across the Capital Region with practical plumbing maintenance — clear quotes, careful work, and direct accountability.",
    benefits: [
      { title: "Leak & fixture fixes", description: "Taps, toilets, shutoffs, and common fixture repairs.", icon: "droplets" },
      { title: "Drain help", description: "Clear slow drains and restore everyday flow where scoped.", icon: "wrench" },
      { title: "Upfront pricing", description: "Free quotes before work begins.", icon: "gift" },
      { title: "Local response", description: "Edmonton metro coverage with fast follow-up.", icon: "map-pin" },
    ],
    faq: [
      { question: "What plumbing jobs do you handle?", answer: "Common requests include leaky taps, toilet repairs, fixture replacements, and drain issues. Major re-pipes or panel-level work may be scoped separately." },
      { question: "Do you offer emergency plumbing?", answer: "We prioritize urgent leaks when scheduling allows. Call 587-594-8575 to discuss timing." },
      { question: "Are quotes free?", answer: "Yes. Request a free quote with photos and a short description of the issue." },
      { question: "What areas do you serve?", answer: "Edmonton and surrounding areas including Sherwood Park, St. Albert, Beaumont, Leduc, Fort Saskatchewan, and Spruce Grove." },
    ],
    relatedLinks: [
      { label: "Electrical Services", href: ROUTES.seoLanding.electrical },
      { label: "Handyman Services", href: ROUTES.seoLanding.handyman },
      { label: "Get a Free Quote", href: ROUTES.quote },
      { label: "Contact", href: ROUTES.contact },
    ],
    defaultServiceSlug: "plumbers",
  },

  "electrical-services-edmonton": {
    slug: "electrical-services-edmonton",
    path: ROUTES.seoLanding.electrical,
    h1: "Electrical Services Edmonton",
    metaTitle: "Electrical Services Edmonton | Outlets, Switches & Lighting",
    metaDescription:
      "Electrical services in Edmonton — outlets, switches, lighting, and minor electrical fixes. Free quotes. Call 587-594-8575.",
    heroImage: {
      src: `/images/homepage/handyman-services-banner.png`,
      alt: "Electrical maintenance and lighting installs in Edmonton",
      width: 1024,
      height: 709,
    },
    intro:
      "Safe, tidy electrical fixes for Edmonton homes — outlets, switches, lighting, and common maintenance work by our crew.",
    localContent:
      "We help homeowners across Edmonton and surrounding communities with practical electrical maintenance: replacing switches, adding fixtures, and fixing everyday issues that make a home safer and more livable.",
    benefits: [
      { title: "Outlets & switches", description: "Replacements and repairs for everyday electrical hardware.", icon: "zap" },
      { title: "Lighting installs", description: "Fixtures and lighting updates installed cleanly.", icon: "sparkles" },
      { title: "Safety-minded work", description: "Careful installs with clear scope boundaries.", icon: "shield-check" },
      { title: "Free quotes", description: "Know the price before work starts.", icon: "gift" },
    ],
    faq: [
      { question: "What electrical work do you offer?", answer: "Outlets, switches, lighting fixtures, and similar maintenance tasks. Panel upgrades and complex wiring may require specialist scoping." },
      { question: "Do you work in condos?", answer: "Yes. We regularly work in Edmonton condos and follow building access rules." },
      { question: "How do I book?", answer: "Call 587-594-8575, WhatsApp us, or request a free quote online." },
      { question: "What areas are covered?", answer: "Edmonton metro including Sherwood Park, St. Albert, Beaumont, Leduc, Fort Saskatchewan, and Spruce Grove." },
    ],
    relatedLinks: [
      { label: "Plumbing Services", href: ROUTES.seoLanding.plumbing },
      { label: "TV Wall Mounting", href: ROUTES.seoLanding.tvWallMounting },
      { label: "Get a Free Quote", href: ROUTES.quote },
      { label: "Contact", href: ROUTES.contact },
    ],
    defaultServiceSlug: "electricians",
  },

  "shed-assembly-edmonton": {
    slug: "shed-assembly-edmonton",
    path: ROUTES.seoLanding.shedAssembly,
    h1: "Shed Assembly Edmonton",
    metaTitle: "Shed Assembly Edmonton | Garden Shed & Outdoor Storage Setup",
    metaDescription:
      "Shed assembly in Edmonton — garden sheds and outdoor storage kits built square and secure. Part of our furniture & shed assembly service. Call 587-594-8575.",
    heroImage: {
      src: `/images/homepage/furniture-assembly-workshop.jpg`,
      alt: "Shed and outdoor storage assembly in Edmonton",
      width: 1024,
      height: 558,
    },
    intro:
      "Skip the weekend struggle. We assemble garden sheds and outdoor storage kits as part of our furniture & shed assembly service — square, level, and ready for Alberta weather.",
    localContent:
      "From backyard kits in Spruce Grove to storage builds in Beaumont and Leduc, Edmonton-area homeowners hire us to assemble sheds correctly — doors that latch, panels that line up, and a tidy site when we leave. Indoor furniture assembly is available from the same crew.",
    benefits: [
      { title: "Kit assembly pros", description: "Retail and online shed kits assembled on site.", icon: "clipboard-list" },
      { title: "Square & secure", description: "Level builds with proper fastening and door fit.", icon: "shield-check" },
      { title: "Same assembly crew", description: "Furniture and sheds quoted together when you need both.", icon: "home" },
      { title: "Free quotes", description: "Share brand, model, and pad photos for clear pricing.", icon: "gift" },
    ],
    faq: [
      { question: "Is shed assembly separate from furniture assembly?", answer: "No — shed assembly is part of our furniture & shed assembly service. You can book furniture, a shed, or both on one quote." },
      { question: "Do you assemble big-box shed kits?", answer: "Yes. Share the brand and model when requesting a quote so we can confirm labour scope." },
      { question: "Do I need a concrete pad?", answer: "Many kits need a level base. Tell us what you have prepared and we will confirm requirements." },
      { question: "How long does assembly take?", answer: "Most backyard kits finish in one visit depending on size and site conditions." },
      { question: "What areas do you serve?", answer: "Edmonton and surrounding areas across the Capital Region." },
    ],
    relatedLinks: [
      { label: "Furniture & Shed Assembly", href: ROUTES.seoLanding.furnitureAssembly },
      { label: "Handyman Services", href: ROUTES.seoLanding.handyman },
      { label: "Get a Free Quote", href: ROUTES.quote },
      { label: "Contact", href: ROUTES.contact },
    ],
    defaultServiceSlug: "furniture-assembly",
  },
};

export const SEO_LANDING_SLUGS = Object.keys(SEO_LANDING_PAGES);

export function getSeoLandingPage(slug: string): SeoLandingPage | null {
  return SEO_LANDING_PAGES[slug] ?? null;
}
