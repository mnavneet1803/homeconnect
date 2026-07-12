export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  keywords: string[];
  /** Simple paragraph blocks for Phase 2 (no MDX pipeline yet) */
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "edmonton-home-maintenance-checklist",
    title: "Edmonton home maintenance checklist for every season",
    excerpt:
      "A practical Capital Region checklist — from furnace filters to freeze-thaw caulking — so small jobs do not turn into expensive repairs.",
    date: "2026-07-01",
    readingMinutes: 6,
    keywords: ["home maintenance Edmonton", "seasonal home checklist Alberta"],
    body: [
      "Edmonton homes take a beating from long winters, spring melt, and dry summer heat. A short seasonal checklist keeps costs predictable and helps you catch issues before they grow.",
      "In fall, prioritize furnace filters, outdoor tap shutoffs, weatherstripping on exterior doors, and a walkthrough of downspouts and extensions. These jobs protect pipes and keep warm air inside when temperatures drop.",
      "In spring, look for caulking that failed after freeze-thaw cycles, sticky doors that shifted over winter, and any staining that suggests a slow roof or plumbing leak. Small drywall and paint touch-ups are easiest before humidity rises.",
      "Summer is ideal for exterior touch-ups, deck and fence checks, and shed or outdoor storage assembly while the ground is workable. Book handyman time around vacations so punch lists do not pile up.",
      "If you would rather hand the list to a local crew, Home Solution Services provides free quotes for handyman work, painting, drywall, cleaning, and more across Edmonton and surrounding areas.",
    ],
  },
  {
    slug: "prepare-for-furniture-assembly",
    title: "How to prepare for furniture assembly in Edmonton",
    excerpt:
      "Make assembly day faster: clear the room, stage boxes, confirm wall types, and share brand/model details before our crew arrives.",
    date: "2026-07-05",
    readingMinutes: 5,
    keywords: ["furniture assembly Edmonton", "IKEA assembly tips"],
    body: [
      "Flat-pack furniture is easier when the room is ready before tools come out. A little prep saves time and keeps your floors protected.",
      "Clear the install area and leave a walking path from the door. Stage boxes near where each piece will live, and keep pets and kids out of the workspace once assembly starts.",
      "Confirm wall type if anything needs anchoring — drywall, concrete, or metal studs are common in Edmonton condos. Tall dressers and wardrobes should be secured for safety.",
      "Share brand, model numbers, and photos when you request a quote. That helps us bring the right hardware and estimate labour accurately for IKEA, Wayfair, and other kits.",
      "When you are ready, request a free furniture assembly quote or call 587-594-8575. We assemble across Edmonton, Sherwood Park, St. Albert, and nearby communities.",
    ],
  },
  {
    slug: "move-out-cleaning-tips-edmonton-rentals",
    title: "Move-out cleaning tips for Edmonton rentals",
    excerpt:
      "What landlords actually check — kitchens, baths, baseboards, and cabinets — plus when to book a professional turnover clean.",
    date: "2026-07-08",
    readingMinutes: 5,
    keywords: ["move out cleaning Edmonton", "rental cleaning checklist"],
    body: [
      "Move-out cleans are deeper than a weekly tidy. Edmonton landlords and property managers look for kitchens, bathrooms, floors, baseboards, and inside cabinets when deciding on deposits.",
      "Start with the kitchen: appliances (including oven interiors if required), range hoods, counters, and sink bases. Grease and crumbs are the most common inspection fails.",
      "Bathrooms need tile, glass, fixtures, and toilets detailed — soap scum and hard-water marks show under bright light. Floors should be vacuumed and mopped after furniture is out.",
      "If walls have holes or scuffs, consider pairing cleaning with move-out repairs so the unit is both clean and visually ready. Cleaning and repairs are separate scopes, but we can quote both.",
      "Tight on time before key handover? Request a free move-in / move-out cleaning quote from Home Solution Services and we will schedule around your move.",
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}
