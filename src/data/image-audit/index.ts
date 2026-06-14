/**
 * Image Audit Data — Home Solution Services
 *
 * Temporary dev tool. Remove before final production launch.
 * Toggle overlay with the floating "Image Audit" button on the site.
 */

export type AuditStatus = "keep" | "improve" | "replace";

export interface ImageAuditEntry {
  /** Unique ID used as the `auditId` prop on AuditImage */
  id: string;
  /** Section of the website where this image appears */
  section: string;
  /** Specific card / usage context */
  usage: string;
  /** Current image filename in use */
  currentFile: string;
  /** Status verdict */
  status: AuditStatus;
  /** How relevant is this image to the service/content? 1–10 */
  relevance: number;
  /** How trustworthy does this image make the business appear? 1–10 */
  trust: number;
  /** Why this image has a problem (or why it's good) */
  issue: string;
  /** What the ideal replacement looks like */
  needed: string;
  /** Recommended filename for the replacement */
  suggestedFilename: string;
  /** AI image generation prompt (Midjourney / DALL-E / Ideogram) */
  aiPrompt: string;
  /** Suggested SEO alt text for the replacement */
  suggestedAlt: string;
  /** Search keywords for Unsplash / Pexels / Pixabay */
  searchKeywords: string[];
}

const AUDIT_ENTRIES: ImageAuditEntry[] = [
  // ─────────────────────────────────────────────
  // SERVICE CARD GRID (homepage)
  // ─────────────────────────────────────────────
  {
    id: "service-card-handyman",
    section: "Services Section",
    usage: "Handyman service card",
    currentFile: "handyman-services-edmonton.png",
    status: "improve",
    relevance: 7,
    trust: 5,
    issue:
      "Branded marketing poster with baked-in logo and text. When cropped to 4:3 aspect ratio the text gets cut off and it looks like an ad, not proof of real work.",
    needed:
      "Real photo of a tradesperson using hand tools (drill, wrench, screwdriver) inside a Canadian home — natural lighting, work in progress.",
    suggestedFilename: "handyman-drilling-home-repair-edmonton.webp",
    aiPrompt:
      "Photorealistic image of a male handyman in his 30s wearing a grey work shirt, kneeling and using a cordless drill to fix a kitchen cabinet door in a modern Canadian home. Natural window light. Tools on the floor nearby. No text. 4:3 landscape.",
    suggestedAlt:
      "Handyman repairing kitchen cabinet in an Edmonton home — Home Solution Services",
    searchKeywords: [
      "handyman drilling home repair",
      "contractor fixing cabinet door",
      "repairman home interior Canada",
    ],
  },
  {
    id: "service-card-painters",
    section: "Services Section",
    usage: "Painters service card",
    currentFile: "interior-paint.jpg",
    status: "keep",
    relevance: 9,
    trust: 9,
    issue:
      "Strong actual photo of freshly painted interior. Bright, clean, and clearly relevant to the service.",
    needed: "N/A — this is one of the best images on the site.",
    suggestedFilename: "interior-paint.jpg",
    aiPrompt: "",
    suggestedAlt:
      "Freshly painted bright living room in Edmonton — professional interior painting by Home Solution Services",
    searchKeywords: [],
  },
  {
    id: "service-card-renovators",
    section: "Services Section",
    usage: "Renovators service card",
    currentFile: "basement-reno.jpg",
    status: "keep",
    relevance: 9,
    trust: 8,
    issue:
      "Actual photo of a finished basement development. Shows quality workmanship and real project output.",
    needed: "N/A — strong project proof photo. Keep.",
    suggestedFilename: "basement-reno.jpg",
    aiPrompt: "",
    suggestedAlt:
      "Finished basement suite renovation in Sherwood Park Edmonton — Home Solution Services",
    searchKeywords: [],
  },
  {
    id: "service-card-flooring",
    section: "Services Section",
    usage: "Flooring service card",
    currentFile: "home-maintenance-repairs-edmonton.png",
    status: "replace",
    relevance: 2,
    trust: 3,
    issue:
      "This is a generic maintenance poster grid showing leaks, hinges and wall patches — nothing related to flooring. Completely wrong service match. Visitors expect to see hardwood, tile or laminate.",
    needed:
      "Close-up photo of hardwood or engineered floor planks being installed, or a beautifully finished floor in a Canadian home.",
    suggestedFilename: "hardwood-flooring-installation-edmonton.webp",
    aiPrompt:
      "Photorealistic close-up of a flooring contractor installing wide-plank light oak hardwood flooring in a bright Canadian home. Visible planks, rubber mallet, safety gloves. Natural light. No text. 4:3 landscape.",
    suggestedAlt:
      "Hardwood flooring installation in Edmonton home — professional floor fitting by Home Solution Services",
    searchKeywords: [
      "hardwood floor installation close up",
      "flooring contractor working home",
      "laminate floor fitting residential",
    ],
  },
  {
    id: "service-card-electricians",
    section: "Services Section",
    usage: "Electricians service card",
    currentFile: "handyman-repair-services-overview.png",
    status: "replace",
    relevance: 2,
    trust: 3,
    issue:
      "Generic handyman overview poster — shows multiple unrelated services. Electricians expect to see wiring, outlets or a panel. This erodes category trust.",
    needed:
      "Technician's hands working on a residential electrical outlet or breaker panel — professional context, safety gloves, code-compliant setting.",
    suggestedFilename: "electrician-outlet-repair-edmonton.webp",
    aiPrompt:
      "Photorealistic image of an electrician's gloved hands replacing a white electrical outlet in a residential wall. Wire connectors visible, professional tools nearby. Soft natural light. No text. 4:3 landscape.",
    suggestedAlt:
      "Licensed electrician repairing outlet in Edmonton home — Home Solution Services",
    searchKeywords: [
      "electrician working outlet panel residential",
      "electrical repair home contractor",
      "wiring outlet residential close up",
    ],
  },
  {
    id: "service-card-plumbers",
    section: "Services Section",
    usage: "Plumbers service card",
    currentFile: "home-maintenance-repairs-edmonton.png",
    status: "replace",
    relevance: 2,
    trust: 3,
    issue:
      "Same maintenance poster used for the Flooring card. Completely wrong for plumbing. No pipe, tap, or water-related imagery. Creates confusion and reduces trust.",
    needed:
      "Real photo of a plumber under a sink, working on a faucet, or fixing a pipe — clearly residential, professional appearance.",
    suggestedFilename: "plumber-sink-repair-edmonton.webp",
    aiPrompt:
      "Photorealistic image of a plumber in a blue work shirt lying on a bathroom floor, fixing the plumbing under a white sink cabinet. Wrench visible. Bright bathroom lighting. No text. 4:3 landscape.",
    suggestedAlt:
      "Plumber repairing under-sink plumbing in Edmonton home — Home Solution Services",
    searchKeywords: [
      "plumber fixing sink pipe residential",
      "plumbing repair under sink bathroom",
      "faucet repair professional home",
    ],
  },
  {
    id: "service-card-cleaners",
    section: "Services Section",
    usage: "Cleaners service card",
    currentFile: "move-in-move-out-cleaning-edmonton.png",
    status: "improve",
    relevance: 6,
    trust: 5,
    issue:
      "Branded marketing poster for cleaning — recognizable service but looks promotional rather than authentic. Real cleaning-in-progress photo would convert better.",
    needed:
      "Professional cleaner with microfibre cloth wiping a kitchen counter or bathroom. Real residential setting, no text overlay.",
    suggestedFilename: "professional-house-cleaning-edmonton.webp",
    aiPrompt:
      "Photorealistic image of a female house cleaner in a branded blue apron wiping down a white kitchen counter with a microfibre cloth. Sparkling clean kitchen, natural light. No text. 4:3 landscape.",
    suggestedAlt:
      "Professional house cleaning in Edmonton home — move-in and move-out cleaning by Home Solution Services",
    searchKeywords: [
      "professional house cleaning kitchen",
      "cleaning service mop floor residential",
      "move out clean bathroom sparkling",
    ],
  },
  {
    id: "service-card-landscapers",
    section: "Services Section",
    usage: "Landscapers service card",
    currentFile: "complete-home-care-edmonton.png",
    status: "replace",
    relevance: 1,
    trust: 2,
    issue:
      "3-panel home care poster showing cleaning and repairs. Zero connection to landscaping. Visitors scanning for lawn/yard services will be confused or bounce.",
    needed:
      "Person mowing a lawn or doing garden bed maintenance in a suburban Edmonton backyard. Green grass, natural outdoor light.",
    suggestedFilename: "landscaping-lawn-care-edmonton.webp",
    aiPrompt:
      "Photorealistic image of a man pushing a bright red lawn mower across a lush green backyard of a suburban Canadian home. Clear blue sky, bright sunlight. No text. 4:3 landscape.",
    suggestedAlt:
      "Lawn mowing and landscaping service in Edmonton — residential yard maintenance by Home Solution Services",
    searchKeywords: [
      "lawn mowing residential backyard Canada",
      "landscaping garden maintenance suburban",
      "grass cutting homeowner professional",
    ],
  },
  {
    id: "service-card-deck-fence",
    section: "Services Section",
    usage: "Deck & Fence service card",
    currentFile: "deck-build.jpg",
    status: "keep",
    relevance: 10,
    trust: 9,
    issue:
      "Actual photo of a finished composite deck build. Perfect category match, high visual quality, and demonstrates real project output.",
    needed: "N/A — best-matched card on the site. Keep.",
    suggestedFilename: "deck-build.jpg",
    aiPrompt: "",
    suggestedAlt:
      "New composite deck with railings built in Windermere, Edmonton — Home Solution Services",
    searchKeywords: [],
  },
  {
    id: "service-card-home-maintenance",
    section: "Services Section",
    usage: "Home Maintenance service card",
    currentFile: "handyman-repair-services-overview.png",
    status: "improve",
    relevance: 5,
    trust: 5,
    issue:
      "Same handyman overview poster used for the Electricians card (duplicate). The grid collage is somewhat relevant but generic and branded. A real photo of routine maintenance work would convert better.",
    needed:
      "Contractor caulking a window frame, replacing a furnace filter, or cleaning gutters — a recognizable home maintenance task.",
    suggestedFilename: "home-maintenance-technician-edmonton.webp",
    aiPrompt:
      "Photorealistic image of a home maintenance technician in a yellow hard hat caulking the exterior frame of a large window on a Canadian residential home. Daytime, sunny. No text. 4:3 landscape.",
    suggestedAlt:
      "Home maintenance technician caulking window in Edmonton home — preventive maintenance by Home Solution Services",
    searchKeywords: [
      "home maintenance caulking window exterior",
      "furnace filter replacement residential",
      "home maintenance technician house Canada",
    ],
  },

  // ─────────────────────────────────────────────
  // SERVICES SHOWCASE GRID (homepage — 6 cards below the strip)
  // ─────────────────────────────────────────────
  {
    id: "showcase-handyman-repairs",
    section: "Services Section — Showcase Grid",
    usage: "Showcase card: Handyman & repairs",
    currentFile: "handyman-repair-services-overview.png",
    status: "improve",
    relevance: 7,
    trust: 6,
    issue:
      "Branded poster with text overlay. Works as a gallery item but lacks authenticity of real work photography.",
    needed:
      "Real photo of a handyman in action — fixing a door hinge, assembling furniture, or installing a shelf bracket.",
    suggestedFilename: "handyman-home-repairs-action-edmonton.webp",
    aiPrompt:
      "Photorealistic photo of a handyman in a navy work shirt using a Phillips screwdriver to fix a door hinge in a bright Edmonton home hallway. Natural light, focused expression. No text. 16:9 landscape.",
    suggestedAlt:
      "Handyman repairing door hinge in Edmonton home — professional repair services by Home Solution Services",
    searchKeywords: [
      "handyman repairing home interior action",
      "contractor fixing door hinge",
      "repairman working residential",
    ],
  },
  {
    id: "showcase-complete-home-care",
    section: "Services Section — Showcase Grid",
    usage: "Showcase card: Complete home care",
    currentFile: "complete-home-care-edmonton.png",
    status: "improve",
    relevance: 5,
    trust: 5,
    issue:
      "3-panel collage poster. Conceptually correct but low authenticity. Real team photo or multi-service montage would build more trust.",
    needed:
      "Happy Edmonton homeowner shaking hands with a contractor at their front door, or a team of two professionals doing a walk-through.",
    suggestedFilename: "homeowner-contractor-consultation-edmonton.webp",
    aiPrompt:
      "Photorealistic image of a smiling Edmonton homeowner couple talking with a professional contractor inside their home, looking at a clipboard together. Bright living room, natural light. No text. 16:9 landscape.",
    suggestedAlt:
      "Edmonton homeowner consulting with Home Solution Services contractor about home repair and maintenance plan",
    searchKeywords: [
      "homeowner contractor consultation indoor",
      "family home service professional meeting",
      "contractor client discussion house Canada",
    ],
  },
  {
    id: "showcase-home-maintenance",
    section: "Services Section — Showcase Grid",
    usage: "Showcase card: Home maintenance",
    currentFile: "home-maintenance-repairs-edmonton.png",
    status: "improve",
    relevance: 7,
    trust: 6,
    issue:
      "Branded maintenance poster grid. Relevant but promotional. A real photo of maintenance work in progress would be more convincing.",
    needed:
      "Tradesperson checking electrical switches, tightening a leaky tap, or patching a small hole in drywall — routine residential maintenance.",
    suggestedFilename: "home-maintenance-repair-work-edmonton.webp",
    aiPrompt:
      "Photorealistic image of a male technician in a grey shirt using a caulk gun to seal around a white bathtub in a clean Edmonton bathroom. Focused work, professional setting. No text. 16:9 landscape.",
    suggestedAlt:
      "Home maintenance technician sealing bathtub in Edmonton home — preventive upkeep by Home Solution Services",
    searchKeywords: [
      "home maintenance repair work residential",
      "technician fixing leak home",
      "preventive home upkeep contractor",
    ],
  },
  {
    id: "showcase-cleaning",
    section: "Services Section — Showcase Grid",
    usage: "Showcase card: Move in / Move out cleaning",
    currentFile: "move-in-move-out-cleaning-edmonton.png",
    status: "keep",
    relevance: 7,
    trust: 7,
    issue:
      "Cleaning-specific branded poster. Clear and relevant to the service. One of the better-matched showcase cards.",
    needed: "N/A — acceptable. Optional upgrade to a real cleaning photo.",
    suggestedFilename: "move-in-move-out-cleaning-edmonton.png",
    aiPrompt: "",
    suggestedAlt:
      "Professional move-in and move-out cleaning service in Edmonton — deep clean for homes, condos and apartments",
    searchKeywords: [],
  },
  {
    id: "showcase-tv-mount",
    section: "Services Section — Showcase Grid",
    usage: "Showcase card: TV mounting & stereo",
    currentFile: "tv-wall-mount-stereo-installation.png",
    status: "keep",
    relevance: 9,
    trust: 8,
    issue:
      "Very specific and clearly branded poster for TV mounting. Highly relevant and professional-looking.",
    needed: "N/A — strong category match. Keep.",
    suggestedFilename: "tv-wall-mount-stereo-installation.png",
    aiPrompt: "",
    suggestedAlt:
      "Professional TV wall mounting and stereo installation service in Edmonton — Home Solution Services",
    searchKeywords: [],
  },
  {
    id: "showcase-computer-setup",
    section: "Services Section — Showcase Grid",
    usage: "Showcase card: Computer & printer setup",
    currentFile: "computer-printer-setup-software.png",
    status: "keep",
    relevance: 9,
    trust: 8,
    issue:
      "Clear tech setup poster. Service is niche and the image is appropriately specific.",
    needed: "N/A — strong category match. Keep.",
    suggestedFilename: "computer-printer-setup-software.png",
    aiPrompt: "",
    suggestedAlt:
      "Computer, printer and software setup service for Edmonton homes and small businesses",
    searchKeywords: [],
  },

  // ─────────────────────────────────────────────
  // BEFORE & AFTER SECTION (homepage)
  // ─────────────────────────────────────────────
  {
    id: "before-after-main",
    section: "Before & After Section",
    usage: "Main before/after proof image",
    currentFile: "move-out-move-in-repairs-before-after.png",
    status: "replace",
    relevance: 6,
    trust: 4,
    issue:
      "Branded marketing graphic designed to look like a before/after — but it's clearly a designed poster, not a real photo. This is the #1 trust-building section on the site. Visitors who see a designed graphic instead of a genuine before/after photo are far less likely to call. A real side-by-side photo (patched hole vs painted wall, damaged baseboard vs repaired) increases conversions 2–3×.",
    needed:
      "Genuine side-by-side before/after photo: cracked drywall on the left, professionally patched and painted on the right. Or damaged baseboard before vs repainted/repaired after.",
    suggestedFilename: "drywall-repair-before-after-edmonton.webp",
    aiPrompt:
      "Split-frame photorealistic image. LEFT half: close-up of a damaged interior wall with a fist-sized hole and paint chips in a Canadian home. RIGHT half: the same wall area fully repaired, smooth, freshly painted bright white, seamless. Bright indoor lighting. The word BEFORE appears in small white text top-left of left half, AFTER appears top-right of right half. 16:9 landscape.",
    suggestedAlt:
      "Before and after drywall hole repair in Edmonton home — professional wall patching by Home Solution Services",
    searchKeywords: [
      "drywall repair before after home",
      "wall repair patch painted seamless",
      "baseboard repair before after residential",
    ],
  },

  // ─────────────────────────────────────────────
  // FEATURED PROJECTS (homepage — currently hidden)
  // ─────────────────────────────────────────────
  {
    id: "project-interior-paint",
    section: "Featured Projects",
    usage: "Project card: Full interior repaint (Oliver)",
    currentFile: "interior-paint.jpg",
    status: "keep",
    relevance: 9,
    trust: 9,
    issue:
      "Clean, professional photo of a freshly painted room. Bright, high-quality, and clearly demonstrates finished painting work.",
    needed: "N/A — strong project photo. Keep and re-enable this section.",
    suggestedFilename: "interior-paint.jpg",
    aiPrompt: "",
    suggestedAlt:
      "Freshly painted living room interior in Oliver, Edmonton — full home repaint by Home Solution Services",
    searchKeywords: [],
  },
  {
    id: "project-basement-reno",
    section: "Featured Projects",
    usage: "Project card: Basement development (Sherwood Park)",
    currentFile: "basement-reno.jpg",
    status: "keep",
    relevance: 9,
    trust: 8,
    issue:
      "Real finished basement suite photo. Demonstrates project scale and quality of workmanship.",
    needed: "N/A — strong project photo. Keep.",
    suggestedFilename: "basement-reno.jpg",
    aiPrompt: "",
    suggestedAlt:
      "Finished basement development in Sherwood Park — 850 sq ft legal suite by Home Solution Services",
    searchKeywords: [],
  },
  {
    id: "project-deck-build",
    section: "Featured Projects",
    usage: "Project card: Composite deck build (Windermere)",
    currentFile: "deck-build.jpg",
    status: "keep",
    relevance: 10,
    trust: 9,
    issue:
      "Actual deck project photo. Perfect match — shows scale, finish quality and real outdoor work.",
    needed: "N/A — best project photo on the site. Keep.",
    suggestedFilename: "deck-build.jpg",
    aiPrompt: "",
    suggestedAlt:
      "400 sq ft composite deck with railings in Windermere, Edmonton — built by Home Solution Services",
    searchKeywords: [],
  },

  // ─────────────────────────────────────────────
  // SERVICE DETAIL PAGE HEROES (10 pages)
  // ─────────────────────────────────────────────
  {
    id: "service-hero-handyman",
    section: "Service Detail Page — Hero",
    usage: "Handyman page hero image",
    currentFile: "handyman-services-edmonton.png",
    status: "improve",
    relevance: 7,
    trust: 6,
    issue:
      "Branded promo poster. Works as a hero but looks like a flyer. Visitors on a specific service page expect to see the work, not an ad.",
    needed:
      "Real photo of a handyman doing repair work in an Edmonton home — drilling, fixing, assembling. Natural lighting.",
    suggestedFilename: "handyman-home-repair-hero-edmonton.webp",
    aiPrompt:
      "Wide-angle photorealistic photo of a professional handyman in a grey work shirt crouching in a bright modern Edmonton kitchen, fixing the hinge on a cabinet door. Tools on the counter. Natural window light. No text. 3:2 landscape.",
    suggestedAlt:
      "Professional handyman repairing kitchen cabinet in Edmonton home — Home Solution Services",
    searchKeywords: [
      "handyman home repair professional interior",
      "contractor fixing home kitchen",
      "repairman work residential Edmonton Canada",
    ],
  },
  {
    id: "service-hero-painters",
    section: "Service Detail Page — Hero",
    usage: "Painters page hero image",
    currentFile: "move-out-move-in-repairs-before-after.png",
    status: "improve",
    relevance: 6,
    trust: 5,
    issue:
      "Before/after repair poster — adjacent to painting but not specific. Visitors on a painters page want to see paint being applied or a beautifully finished painted room.",
    needed:
      "Painter rolling interior wall, or beautifully painted room with crisp edges and clean finish.",
    suggestedFilename: "interior-painting-professional-edmonton.webp",
    aiPrompt:
      "Photorealistic wide-angle photo of a professional painter in white overalls using a long roller to apply bright white paint to a living room wall in an Edmonton home. Drop cloth on the floor. Natural light. No text. 3:2 landscape.",
    suggestedAlt:
      "Professional interior painter applying wall paint in Edmonton home — Home Solution Services",
    searchKeywords: [
      "painter rolling interior wall professional",
      "house painter ladder interior room",
      "interior painting contractor residential Canada",
    ],
  },
  {
    id: "service-hero-renovators",
    section: "Service Detail Page — Hero",
    usage: "Renovators page hero image",
    currentFile: "complete-home-care-edmonton.png",
    status: "improve",
    relevance: 5,
    trust: 5,
    issue:
      "Generic home care 3-panel poster. Visitors on a renovators page expect to see kitchen or bathroom renovation work — countertops, tiles, new cabinetry.",
    needed:
      "Finished kitchen or bathroom renovation in a Canadian home — clean, modern, professional result.",
    suggestedFilename: "kitchen-renovation-finished-edmonton.webp",
    aiPrompt:
      "Photorealistic wide-angle photo of a freshly renovated modern kitchen in a Canadian home — white Shaker cabinets, quartz countertop, new subway tile backsplash. Bright natural light. No contractors visible. No text. 3:2 landscape.",
    suggestedAlt:
      "Finished kitchen renovation in Edmonton home — modern cabinetry and countertop by Home Solution Services",
    searchKeywords: [
      "kitchen renovation finished modern Canada",
      "bathroom renovation before after Edmonton",
      "home renovation contractor professional result",
    ],
  },
  {
    id: "service-hero-flooring",
    section: "Service Detail Page — Hero",
    usage: "Flooring page hero image",
    currentFile: "handyman-repair-services-overview.png",
    status: "replace",
    relevance: 2,
    trust: 2,
    issue:
      "Handyman overview poster on a flooring-specific page. No flooring imagery whatsoever. This is a major content mismatch that damages credibility.",
    needed:
      "Wide-angle photo of a recently installed hardwood, engineered or tile floor in a bright Edmonton home.",
    suggestedFilename: "flooring-installation-finished-edmonton.webp",
    aiPrompt:
      "Photorealistic wide-angle photo of a freshly installed light oak hardwood floor in a bright, modern Edmonton living room. Clean baseboards, natural sunlight streaming through a window. No text. 3:2 landscape.",
    suggestedAlt:
      "New hardwood flooring installation in Edmonton home — professional floor fitting by Home Solution Services",
    searchKeywords: [
      "hardwood floor finished installation bright room",
      "new flooring home interior Canada",
      "tile floor installation residential professional",
    ],
  },
  {
    id: "service-hero-electricians",
    section: "Service Detail Page — Hero",
    usage: "Electricians page hero image",
    currentFile: "repair-services-strip.png",
    status: "replace",
    relevance: 3,
    trust: 3,
    issue:
      "Narrow decorative banner (1024×151 px). Not appropriate for a hero image — extremely thin, renders awkwardly, and only partially shows electrical content among 4 other services.",
    needed:
      "Licensed electrician working at a residential breaker panel or replacing an outlet. Safety gloves visible, professional appearance.",
    suggestedFilename: "electrician-breaker-panel-edmonton.webp",
    aiPrompt:
      "Photorealistic photo of a licensed electrician in a white safety vest and insulated gloves working at a residential breaker panel inside an Edmonton home utility room. Panel open, wires visible. Professional lighting. No text. 3:2 landscape.",
    suggestedAlt:
      "Licensed electrician working on residential breaker panel in Edmonton — Home Solution Services",
    searchKeywords: [
      "electrician residential panel work professional",
      "licensed electrician home outlet repair",
      "electrical repair home contractor safety gloves",
    ],
  },
  {
    id: "service-hero-plumbers",
    section: "Service Detail Page — Hero",
    usage: "Plumbers page hero image",
    currentFile: "home-maintenance-repairs-edmonton.png",
    status: "replace",
    relevance: 2,
    trust: 2,
    issue:
      "Generic home maintenance poster on a plumbing-specific page. Contains no plumbing imagery. Critical mismatch — visitors are evaluating whether to trust this company with their plumbing.",
    needed:
      "Plumber fixing a faucet, working under a sink, or inspecting a pipe. Clearly residential setting.",
    suggestedFilename: "plumber-faucet-repair-edmonton.webp",
    aiPrompt:
      "Photorealistic photo of a professional plumber in a blue uniform crouching and repairing the faucet under a white kitchen sink in a bright Edmonton home. Wrench in hand, PVC pipes visible. Natural light. No text. 3:2 landscape.",
    suggestedAlt:
      "Professional plumber repairing kitchen faucet in Edmonton home — Home Solution Services",
    searchKeywords: [
      "plumber fixing kitchen faucet residential",
      "plumbing repair under sink professional",
      "pipe repair residential bathroom contractor",
    ],
  },
  {
    id: "service-hero-cleaners",
    section: "Service Detail Page — Hero",
    usage: "Cleaners page hero image",
    currentFile: "move-in-move-out-cleaning-edmonton.png",
    status: "keep",
    relevance: 8,
    trust: 7,
    issue:
      "Cleaning-specific branded poster. Clearly relevant and recognizable. One of the better service hero matches.",
    needed: "N/A — acceptable. Optional upgrade: real photo of cleaner in action.",
    suggestedFilename: "move-in-move-out-cleaning-edmonton.png",
    aiPrompt: "",
    suggestedAlt:
      "Professional move-in and move-out cleaning service in Edmonton — deep clean for homes, condos and apartments",
    searchKeywords: [],
  },
  {
    id: "service-hero-landscapers",
    section: "Service Detail Page — Hero",
    usage: "Landscapers page hero image",
    currentFile: "complete-home-care-edmonton.png",
    status: "replace",
    relevance: 1,
    trust: 1,
    issue:
      "Home care 3-panel poster showing cleaning and repairs — zero connection to landscaping or lawn care. Worst content mismatch on the site. Visitors looking for landscaping services will immediately question if this company even does the service.",
    needed:
      "Green lawn and garden in a suburban Edmonton backyard. Contractor with lawn equipment, or a beautifully maintained yard.",
    suggestedFilename: "landscaping-garden-maintenance-edmonton.webp",
    aiPrompt:
      "Photorealistic wide-angle photo of a beautifully maintained suburban Edmonton backyard. Lush green lawn freshly mowed, tidy garden beds with perennials, clean fence. Bright summer day. No people. No text. 3:2 landscape.",
    suggestedAlt:
      "Professionally maintained backyard lawn and garden in Edmonton — landscaping by Home Solution Services",
    searchKeywords: [
      "landscaping backyard maintained suburban Canada",
      "lawn care garden Edmonton residential",
      "yard maintenance professional summer Alberta",
    ],
  },
  {
    id: "service-hero-deck-fence",
    section: "Service Detail Page — Hero",
    usage: "Deck & Fence page hero image",
    currentFile: "handyman-repair-services-overview.png",
    status: "replace",
    relevance: 2,
    trust: 2,
    issue:
      "Generic handyman poster on a deck and fence page. No outdoor structure visible. Visitors expect to see a finished deck or fence build.",
    needed:
      "Finished composite or pressure-treated deck with railings, or a professional contractor building a fence in an Edmonton backyard.",
    suggestedFilename: "deck-fence-build-edmonton.webp",
    aiPrompt:
      "Photorealistic wide-angle photo of a newly built composite deck with black metal railings attached to the back of a modern Edmonton home. Sunny summer day, blue sky. No text. 3:2 landscape.",
    suggestedAlt:
      "New composite deck with black railings built in Edmonton backyard — Home Solution Services",
    searchKeywords: [
      "composite deck build backyard Canada",
      "deck railing construction residential",
      "fence installation wooden residential Edmonton",
    ],
  },
  {
    id: "service-hero-home-maintenance",
    section: "Service Detail Page — Hero",
    usage: "Home Maintenance page hero image",
    currentFile: "home-maintenance-repairs-edmonton.png",
    status: "keep",
    relevance: 7,
    trust: 7,
    issue:
      "Home maintenance branded poster — relevant to the service. One of the better-matched service hero images.",
    needed: "N/A — acceptable match. Optional: real photo of maintenance task.",
    suggestedFilename: "home-maintenance-repairs-edmonton.png",
    aiPrompt: "",
    suggestedAlt:
      "Edmonton home maintenance services — preventive upkeep, repairs and inspections by Home Solution Services",
    searchKeywords: [],
  },

  // ─────────────────────────────────────────────
  // SERVICE DETAIL PAGE — DETAIL SECTION IMAGES
  // ─────────────────────────────────────────────
  {
    id: "service-detail-handyman",
    section: "Service Detail Page — Details Section",
    usage: "Handyman detail image",
    currentFile: "handyman-repair-services-overview.png",
    status: "improve",
    relevance: 6,
    trust: 5,
    issue:
      "Overview poster grid — somewhat relevant but not a real photo. Could be any service.",
    needed:
      "Close-up of repair tools or a handyman mid-task — drilling, screwing, measuring.",
    suggestedFilename: "handyman-repair-tools-work-edmonton.webp",
    aiPrompt:
      "Photorealistic close-up of a handyman's hands using a measuring tape on a wooden shelf being installed in a bright Edmonton living room. Level, pencil nearby. Natural light. No text. 4:3 landscape.",
    suggestedAlt:
      "Handyman measuring shelf installation in Edmonton home — professional handyman services",
    searchKeywords: ["repair tools close up home improvement", "handyman measuring install shelf"],
  },
  {
    id: "service-detail-painters",
    section: "Service Detail Page — Details Section",
    usage: "Painters detail image",
    currentFile: "repair-services-strip.png",
    status: "replace",
    relevance: 3,
    trust: 3,
    issue:
      "Repair strip banner on a painting details section. Shows furniture assembly and electrical work — completely wrong for painting.",
    needed:
      "Paint supplies: roller, brushes, paint tray with fresh paint, colour swatches — or painter cutting in edges.",
    suggestedFilename: "painting-supplies-interior-edmonton.webp",
    aiPrompt:
      "Photorealistic close-up of a painting roller with white paint partially rolled onto a wall, paint tray below, painter's hand visible in glove. Clean and bright. No text. 4:3 landscape.",
    suggestedAlt:
      "Interior painting in progress — professional wall painting services by Home Solution Services Edmonton",
    searchKeywords: [
      "paint roller wall interior close up",
      "painting supplies brush tray residential",
      "interior painting contractor wall finish",
    ],
  },
  {
    id: "service-detail-renovators",
    section: "Service Detail Page — Details Section",
    usage: "Renovators detail image",
    currentFile: "move-out-move-in-repairs-before-after.png",
    status: "improve",
    relevance: 6,
    trust: 5,
    issue:
      "Before/after repair poster — adjacent to renovation but not specific. More relevant to touch-up work.",
    needed:
      "Contractor installing kitchen cabinets, tile backsplash, or bathroom fixtures in a real renovation project.",
    suggestedFilename: "renovation-kitchen-install-edmonton.webp",
    aiPrompt:
      "Photorealistic photo of a contractor installing white kitchen cabinets in a modern Edmonton home during a kitchen renovation. Measuring tape, drill, and cabinets visible. Bright work lighting. No text. 4:3 landscape.",
    suggestedAlt:
      "Kitchen cabinet installation during renovation in Edmonton — Home Solution Services",
    searchKeywords: [
      "kitchen renovation contractor installing cabinets",
      "bathroom tile installation professional",
      "home renovation work in progress Canada",
    ],
  },
  {
    id: "service-detail-flooring",
    section: "Service Detail Page — Details Section",
    usage: "Flooring detail image",
    currentFile: "home-maintenance-repairs-edmonton.png",
    status: "replace",
    relevance: 2,
    trust: 2,
    issue:
      "Generic maintenance poster. On a flooring detail page, visitors want to see flooring being installed or a beautiful finished floor.",
    needed:
      "Contractor kneeling on floor installing planks, or close-up of tile being set with adhesive.",
    suggestedFilename: "flooring-contractor-installing-planks-edmonton.webp",
    aiPrompt:
      "Photorealistic close-up of a flooring installer kneeling on the floor, tapping a light oak wood plank into place with a rubber mallet. Gloves visible, stack of planks nearby. No text. 4:3 landscape.",
    suggestedAlt:
      "Flooring contractor installing hardwood planks in Edmonton home — Home Solution Services",
    searchKeywords: [
      "flooring installation contractor kneeling planks",
      "hardwood floor fitting rubber mallet",
      "tile installation adhesive residential professional",
    ],
  },
  {
    id: "service-detail-electricians",
    section: "Service Detail Page — Details Section",
    usage: "Electricians detail image",
    currentFile: "home-maintenance-repairs-edmonton.png",
    status: "improve",
    relevance: 4,
    trust: 4,
    issue:
      "Generic maintenance poster — partially relevant (includes an electrical image) but not electrician-specific.",
    needed:
      "Electrician testing an outlet with a multimeter, or installing a light fixture in an Edmonton home.",
    suggestedFilename: "electrician-testing-outlet-multimeter-edmonton.webp",
    aiPrompt:
      "Photorealistic close-up of an electrician's hands holding a yellow multimeter probes against a white outlet being tested in a residential wall. Professional setting, clear background. No text. 4:3 landscape.",
    suggestedAlt:
      "Electrician testing residential outlet with multimeter in Edmonton — Home Solution Services",
    searchKeywords: [
      "electrician multimeter outlet testing",
      "electrical testing residential wiring professional",
      "outlet replacement home contractor close up",
    ],
  },
  {
    id: "service-detail-plumbers",
    section: "Service Detail Page — Details Section",
    usage: "Plumbers detail image",
    currentFile: "handyman-repair-services-overview.png",
    status: "replace",
    relevance: 2,
    trust: 2,
    issue:
      "Handyman overview poster on a plumbing detail section. Zero plumbing-related imagery. Erodes trust on a page where the visitor is evaluating the company's specific plumbing expertise.",
    needed:
      "Close-up of a plumber's hands with a wrench tightening a pipe fitting, or replacing a sink trap.",
    suggestedFilename: "plumber-pipe-fitting-wrench-edmonton.webp",
    aiPrompt:
      "Photorealistic close-up of a plumber's hands with an adjustable wrench tightening a chrome P-trap pipe fitting under a white bathroom sink. Clean setting, tools nearby. No text. 4:3 landscape.",
    suggestedAlt:
      "Plumber tightening P-trap pipe fitting in Edmonton bathroom — Home Solution Services",
    searchKeywords: [
      "plumber wrench pipe fitting bathroom",
      "plumbing repair p-trap sink close up",
      "residential plumbing repair professional hands",
    ],
  },
  {
    id: "service-detail-cleaners",
    section: "Service Detail Page — Details Section",
    usage: "Cleaners detail image",
    currentFile: "complete-home-care-edmonton.png",
    status: "improve",
    relevance: 5,
    trust: 5,
    issue:
      "3-panel home care poster — cleaning is one of the panels but it's too generic. A focused cleaning detail image would be stronger.",
    needed:
      "Cleaner scrubbing bathroom tiles or wiping mirrors — clearly showing the deep clean process.",
    suggestedFilename: "cleaning-bathroom-tiles-edmonton.webp",
    aiPrompt:
      "Photorealistic close-up of a professional cleaner's gloved hands scrubbing white ceramic bathroom tiles with a brush and foamy cleaner. Bright clean bathroom setting. No text. 4:3 landscape.",
    suggestedAlt:
      "Professional cleaner scrubbing bathroom tiles in Edmonton home — move-in cleaning by Home Solution Services",
    searchKeywords: [
      "professional cleaning bathroom tiles close up",
      "house cleaner scrubbing shower residential",
      "deep clean bathroom professional service",
    ],
  },
  {
    id: "service-detail-landscapers",
    section: "Service Detail Page — Details Section",
    usage: "Landscapers detail image",
    currentFile: "handyman-repair-services-overview.png",
    status: "replace",
    relevance: 1,
    trust: 1,
    issue:
      "Handyman overview poster on a landscapers detail page. Worst mismatch on a service detail page — no outdoor or garden content at all.",
    needed:
      "Gardener trimming hedges or planting flowers in a residential garden bed.",
    suggestedFilename: "landscaper-garden-work-edmonton.webp",
    aiPrompt:
      "Photorealistic photo of a landscaper in green work clothes kneeling and planting colourful perennial flowers in a tidy garden bed alongside a suburban Edmonton home. Bright summer day. No text. 4:3 landscape.",
    suggestedAlt:
      "Landscaper planting flowers in garden bed in Edmonton — residential landscaping by Home Solution Services",
    searchKeywords: [
      "landscaper planting garden bed residential",
      "gardener trimming hedges suburban Canada",
      "garden maintenance professional Alberta summer",
    ],
  },
  {
    id: "service-detail-deck-fence",
    section: "Service Detail Page — Details Section",
    usage: "Deck & Fence detail image",
    currentFile: "handyman-services-edmonton.png",
    status: "improve",
    relevance: 4,
    trust: 4,
    issue:
      "Handyman promo poster on a deck and fence detail page. Partially relevant (shows a handyman) but not outdoor structure focused.",
    needed:
      "Contractor framing a deck or installing fence posts in an Edmonton backyard.",
    suggestedFilename: "deck-framing-construction-edmonton.webp",
    aiPrompt:
      "Photorealistic photo of a carpenter in a hard hat and safety vest nailing deck boards to a wooden frame in an Edmonton backyard. Power tools visible, mid-construction stage. Sunny day. No text. 4:3 landscape.",
    suggestedAlt:
      "Contractor building deck frame in Edmonton backyard — professional deck construction by Home Solution Services",
    searchKeywords: [
      "deck framing construction carpenter backyard",
      "fence post installation residential Canada",
      "deck build contractor working outdoor",
    ],
  },
  {
    id: "service-detail-home-maintenance",
    section: "Service Detail Page — Details Section",
    usage: "Home Maintenance detail image",
    currentFile: "complete-home-care-edmonton.png",
    status: "improve",
    relevance: 6,
    trust: 6,
    issue:
      "Home care 3-panel poster — relevant umbrella concept but not showing a specific maintenance task.",
    needed:
      "Technician replacing a furnace filter, checking a smoke detector, or caulking a window — classic home maintenance tasks.",
    suggestedFilename: "home-maintenance-furnace-filter-edmonton.webp",
    aiPrompt:
      "Photorealistic close-up of a home maintenance technician's hands replacing a white HVAC air filter in a residential furnace room in an Edmonton home. Filter packaging visible. Good lighting. No text. 4:3 landscape.",
    suggestedAlt:
      "Home maintenance technician replacing furnace filter in Edmonton home — preventive upkeep by Home Solution Services",
    searchKeywords: [
      "furnace filter replacement home maintenance",
      "home technician hvac filter residential",
      "preventive maintenance technician house Canada",
    ],
  },
];

/** Lookup map by entry ID for O(1) access. */
export const IMAGE_AUDIT_DATA: Record<string, ImageAuditEntry> = Object.fromEntries(
  AUDIT_ENTRIES.map((e) => [e.id, e])
);

/** All entries as an array (for dashboard listing). */
export const ALL_AUDIT_ENTRIES = AUDIT_ENTRIES;

/** Summary counts. */
export function getAuditSummary() {
  const keep = AUDIT_ENTRIES.filter((e) => e.status === "keep").length;
  const improve = AUDIT_ENTRIES.filter((e) => e.status === "improve").length;
  const replace = AUDIT_ENTRIES.filter((e) => e.status === "replace").length;
  return { total: AUDIT_ENTRIES.length, keep, improve, replace };
}
