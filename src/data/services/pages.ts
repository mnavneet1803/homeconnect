import type { ServicePageContent, ServicePageBase } from "@/types/service-page";
import { SERVICE_PAGE_ENRICHMENTS } from "./enriched-pages";
import { mergeServicePage } from "./merge-page";
import type { SeoServiceSlug } from "./seo-slugs";

export { SEO_SERVICE_SLUGS, type SeoServiceSlug } from "./seo-slugs";

const LOCAL_AREAS = [
  "Edmonton",
  "Sherwood Park",
  "St. Albert",
  "Spruce Grove",
  "Stony Plain",
  "Leduc",
  "Beaumont",
  "Fort Saskatchewan",
  "Terwillegar",
  "Windermere",
  "Mill Woods",
  "Oliver",
];

export const SERVICE_PAGES: Record<string, ServicePageBase> = {
  handyman: {
    slug: "handyman",
    metaTitle: "Handyman Edmonton | Free Quote from Our Team",
    metaDescription:
      "Need a handyman in Edmonton? Our team handles repairs, installs, and home maintenance. Free quote — no obligation.",
    keywords: [
      "handyman Edmonton",
      "handyman near me Edmonton",
      "Edmonton handyman services",
      "home repairs Edmonton",
      "local handyman Alberta",
    ],
    hero: {
      eyebrow: "Handyman Services · Edmonton",
      headline: "Trusted handyman services in Edmonton",
      subheadline:
        "Repairs, installs, and odd jobs — handled by our own experienced crew.",
      intro:
        "From drywall patches to furniture assembly, our handyman team shows up on time, carries insurance, and gets the job done right. Request a free quote with no obligation.",
    },
    subServices: [
      { name: "General repairs", description: "Doors, drywall, trim, and fixture fixes" },
      { name: "Furniture assembly", description: "IKEA, shelving, and flat-pack installs" },
      { name: "Caulking & sealing", description: "Windows, tubs, and weatherproofing" },
      { name: "TV mounting", description: "Secure wall mounts and cable concealment" },
      { name: "Minor plumbing", description: "Faucets, toilets, and leak repairs" },
      { name: "Odd jobs", description: "Honey-do lists and punch-list items" },
    ],
    details: {
      title: "Professional handyman help across Edmonton",
      paragraphs: [
        "Edmonton homeowners rely on handymen for the jobs that fall between DIY and a full contractor call — hanging shelves before winter, patching walls after a move, or tackling a growing to-do list on a Saturday you would rather spend elsewhere.",
        "Our in-house handyman crew serves every quadrant of Edmonton and the Capital Region. Every team member carries. You receive a written quote before work begins and work directly with us — no middlemen.",
        "Whether you live in a 1960s bungalow in Glenora or a new build in Terwillegar, our team knows Edmonton homes and Alberta building practices.",
      ],
    },
    benefits: [
      { title: "Experienced local team", description: "Our crew carries on every job.", icon: "shield-check" },
      { title: "Free quotes", description: "Request a quote at no cost and no obligation before work begins.", icon: "gift" },
      { title: "Edmonton-local", description: "A team that knows Edmonton homes — from weatherproofing to legacy housing quirks.", icon: "map-pin" },
      { title: "Fast response", description: "Most homeowners hear back from our team within 24 hours.", icon: "clock" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does a handyman cost in Edmonton?", answer: "Every job is different. We quote based on the scope of work, materials, and time required. Submit a request and our team will provide a custom written quote before any work begins." },
      { question: "Are you local to Edmonton?", answer: "Yes. Our team carries on every job." },
      { question: "What jobs can a handyman handle?", answer: "Common jobs include drywall repair, minor plumbing and electrical (non-panel work), furniture assembly, caulking, shelving, door adjustments, and general home maintenance. Our specialist trades handle major electrical, plumbing, and structural work." },
      { question: "How quickly can I get a handyman in Edmonton?", answer: "Most requests receive a response from our team within 24 hours. Urgent repairs are prioritized when possible." },
      { question: "Do you serve areas outside Edmonton?", answer: "Yes — we cover the Capital Region including Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Leduc, and Beaumont." },
    ],
    relatedSlugs: ["painters", "plumbers", "home-maintenance"],
  },

  painters: {
    slug: "painters",
    metaTitle: "Painting & Drywall Edmonton | Interior, Exterior & Wall Repair",
    metaDescription:
      "Looking for painting and drywall in Edmonton? Our team handles interior and exterior paint plus drywall repair and prep. Free quote — no obligation.",
    keywords: [
      "painters Edmonton",
      "house painters Edmonton",
      "interior painting Edmonton",
      "exterior painting Edmonton",
      "drywall repair Edmonton",
      "painting contractors Edmonton",
    ],
    hero: {
      eyebrow: "Painting & Drywall · Edmonton",
      headline: "Painting and drywall services in Edmonton",
      subheadline:
        "Interior, exterior, and cabinet painting — plus drywall repair and paint-ready wall finishes by our own crew.",
      intro:
        "A quality finish starts with solid walls. Our Edmonton team patches drywall, primes, and paints so you get one accountable crew from prep to final coat. Request a free quote — fast and no obligation.",
    },
    subServices: [
      { name: "Interior painting", description: "Walls, ceilings, trim, and full-room refreshes" },
      { name: "Exterior painting", description: "Siding, stucco, trim, and weather-resistant coatings" },
      { name: "Drywall repair", description: "Holes, dents, seams, texture matching, and paint-ready prep" },
      { name: "Patch & paint", description: "Combine wall repairs and painting in one visit" },
      { name: "Cabinet painting", description: "Kitchen and bathroom cabinet refinishing" },
      { name: "Deck & fence staining", description: "Protect outdoor wood from Edmonton winters" },
    ],
    details: {
      title: "Edmonton painting and drywall for every surface",
      paragraphs: [
        "Edmonton's freeze-thaw cycles and dry winters take a toll on exterior paint — and everyday living leaves drywall dents that show through a fresh coat. Professional prep is the difference between a finish that lasts and one that peels or telegraphing patches.",
        "Whether you're refreshing a downtown condo in Oliver, repairing walls before a Terwillegar repaint, or preparing a rental for turnover in Mill Woods, our painting & drywall crew handles Edmonton housing stock end to end.",
        "Request a free quote from our team. One company, one crew, accountable from estimate to final coat.",
      ],
    },
    benefits: [
      { title: "Drywall + paint together", description: "Patch, texture, and paint scoped as one project when you need both.", icon: "layers" },
      { title: "Quality prep & finish", description: "Surface preparation and durable materials on every job.", icon: "shield-check" },
      { title: "Free written quote", description: "Upfront pricing and timeline before you commit.", icon: "gift" },
      { title: "Climate-aware work", description: "We schedule exterior work around Edmonton's weather windows.", icon: "calendar" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does it cost to paint a house in Edmonton?", answer: "Pricing depends on the size of your home, number of rooms, surface condition, and prep required. We assess your project and provide a detailed written quote before work begins." },
      { question: "What is the best time to paint exteriors in Edmonton?", answer: "Late spring through early fall (May–September) is ideal when temperatures stay above 10°C and rain is less frequent. Our team advises on optimal scheduling." },
      { question: "Do your painters provide prep work?", answer: "Yes. Our painters include cleaning, sanding, patching, and priming as part of a quality job. Scope is outlined in your quote." },
      { question: "Can I get interior and exterior done together?", answer: "Yes — our team handles both. Describe your full project when requesting a quote and we'll scope it accordingly." },
      { question: "Do you serve Edmonton and surrounding areas?", answer: "Yes. Our painting crew carries on every job." },
    ],
    relatedSlugs: ["handyman", "renovators", "deck-fence"],
  },

  renovators: {
    slug: "renovators",
    metaTitle: "Home Renovation Edmonton | Kitchen, Bath & Basement Quotes",
    metaDescription:
      "Planning a home renovation in Edmonton? Our team handles kitchens, bathrooms, basements, and full home projects. Free quote — no obligation.",
    keywords: [
      "home renovation Edmonton",
      "renovation contractors Edmonton",
      "kitchen renovation Edmonton",
      "basement development Edmonton",
      "bathroom renovation Edmonton",
    ],
    hero: {
      eyebrow: "Renovation Services · Edmonton",
      headline: "Home renovation contractors in Edmonton",
      subheadline:
        "Kitchens, bathrooms, basements, and full home renos — our own experienced crew.",
      intro:
        "Renovating in Edmonton means navigating permits, Alberta Building Code requirements, and long winters that favour indoor projects. Our renovation team knows the local market — request a free quote with no obligation.",
    },
    subServices: [
      { name: "Kitchen renovations", description: "Cabinetry, countertops, layouts, and full gut reno" },
      { name: "Bathroom renovations", description: "Showers, tubs, tile, and accessibility upgrades" },
      { name: "Basement development", description: "Legal suites, rec rooms, and full finishing" },
      { name: "Full home renovations", description: "Multi-room and whole-home transformations" },
      { name: "Open-concept conversions", description: "Wall removal, beams, and layout changes" },
      { name: "Rental property renos", description: "Turnover upgrades and landlord-focused work" },
    ],
    details: {
      title: "Edmonton renovation experts for your next project",
      paragraphs: [
        "Basement development is one of Edmonton's most popular renovations — adding livable square footage and rental income potential. Kitchen and bathroom renos remain the highest-ROI upgrades for resale in the Capital Region.",
        "Our renovation team understands City of Edmonton permit requirements, moisture management in below-grade spaces, and the trade coordination needed for multi-phase projects.",
        "Submit one request and receive a detailed written quote. Clear scope, timeline, and pricing — then we schedule our crew to complete the work.",
      ],
    },
    benefits: [
      { title: "Permit-ready team", description: "Familiar with Edmonton permit and inspection processes.", icon: "clipboard-list" },
      { title: "Written quotes", description: "Detailed scope and pricing before work begins.", icon: "gift" },
      { title: "Trade coordination", description: "We manage plumbing, electrical, and flooring as part of your reno.", icon: "users" },
      { title: "Experienced team", description: "Quality standards verified for every project.", icon: "shield-check" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does a basement development cost in Edmonton?", answer: "Basement projects vary widely based on layout, bathroom additions, legal suite requirements, and finishes. We provide an itemized custom quote after reviewing your plans and site." },
      { question: "Do I need a permit for renovation in Edmonton?", answer: "Most structural changes, basement developments, and electrical/plumbing alterations require City of Edmonton permits. Our team can advise and often handle permit applications." },
      { question: "How long does a kitchen renovation take?", answer: "A typical Edmonton kitchen reno takes 4–8 weeks depending on scope, custom cabinetry lead times, and inspections." },
      { question: "Can I renovate in winter?", answer: "Yes — interior renovations are ideal during Edmonton's winter months. Basements, kitchens, and bathrooms are year-round projects." },
      { question: "How do I get started?", answer: "Submit a quote request with your project details. Our team reviews scope, schedules a site visit if needed, and provides a written estimate before work begins." },
    ],
    relatedSlugs: ["flooring", "electricians", "plumbers"],
  },

  flooring: {
    slug: "flooring",
    metaTitle: "Flooring Installation Edmonton | Hardwood, Tile & Vinyl Quotes",
    metaDescription:
      "Need flooring installed in Edmonton? Our team installs hardwood, laminate, tile, and vinyl with proper subfloor prep. Free quote — no obligation.",
    keywords: [
      "flooring Edmonton",
      "flooring installation Edmonton",
      "hardwood floors Edmonton",
      "tile installation Edmonton",
      "vinyl plank flooring Edmonton",
    ],
    hero: {
      eyebrow: "Flooring Services · Edmonton",
      headline: "Flooring installation in Edmonton",
      subheadline:
        "Hardwood, tile, laminate, and vinyl — installed by our own crew.",
      intro:
        "New flooring changes how your entire home feels. Our flooring team handles removal, subfloor prep, and precision installation across Edmonton and the Capital Region. Request a free quote.",
    },
    subServices: [
      { name: "Hardwood flooring", description: "Solid and engineered hardwood install & refinish" },
      { name: "Luxury vinyl plank", description: "Water-resistant LVP for basements and main floors" },
      { name: "Laminate flooring", description: "Budget-friendly durable options" },
      { name: "Tile installation", description: "Ceramic, porcelain, and heated floor tile" },
      { name: "Carpet installation", description: "Bedrooms, stairs, and basement carpet" },
      { name: "Floor removal", description: "Old flooring tear-out and subfloor repair" },
    ],
    details: {
      title: "Expert flooring installation across the Capital Region",
      paragraphs: [
        "Edmonton's dry climate affects hardwood expansion and basement moisture demands moisture-resistant materials like LVP or engineered products. Our installers assess subfloor conditions — especially in older homes with settling foundations.",
        "From open-concept main floors in Summerside to basement suites in Sherwood Park, our team provides accurate measurements, material guidance, and clean installation.",
        "One request, one written quote, and our crew handles the rest.",
      ],
    },
    benefits: [
      { title: "Proper subfloor prep", description: "We don't skip the prep that prevents future failures.", icon: "shield-check" },
      { title: "Material guidance", description: "We recommend products suited to Edmonton climate and your budget.", icon: "check-circle" },
      { title: "Free written quote", description: "Detailed estimate before work begins.", icon: "gift" },
      { title: "Clean installation", description: "Our crew respects your home and leaves sites tidy.", icon: "sparkles" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does flooring installation cost in Edmonton?", answer: "Pricing depends on the flooring material, square footage, subfloor condition, and whether removal is needed. We provide a custom written quote after assessing your space." },
      { question: "What flooring is best for Edmonton basements?", answer: "Luxury vinyl plank and engineered products handle basement moisture better than solid hardwood. Our team advises based on your subfloor conditions." },
      { question: "How long does flooring installation take?", answer: "Most single-room installs take 1–2 days. Whole-home projects may take 3–5 days depending on scope and drying times." },
      { question: "Can you install over existing flooring?", answer: "Sometimes — depends on the current floor and subfloor condition. Our team assesses on-site and recommends the best approach." },
      { question: "Do installers move furniture?", answer: "We can for an additional fee. Clarify furniture handling when reviewing your quote." },
    ],
    relatedSlugs: ["renovators", "handyman", "cleaners"],
  },

  plumbers: {
    slug: "plumbers",
    metaTitle: "Plumber Edmonton | Plumbing Quotes & Emergency Service",
    metaDescription:
      "Need a plumber in Edmonton? Our team handles repairs, installs, and emergencies. Free quote — no obligation.",
    keywords: [
      "plumber Edmonton",
      "plumber near me Edmonton",
      "emergency plumber Edmonton",
      "plumbing services Edmonton",
      "plumber Alberta",
    ],
    hero: {
      eyebrow: "Plumbing Services · Edmonton",
      headline: "Professional plumbers in Edmonton",
      subheadline:
        "Leaks, installs, water heaters, and emergencies — our own in-house crew.",
      intro:
        "Frozen pipes, water heater failures, and slow drains can't wait. Our plumbers know Alberta plumbing code. Request a free quote — urgent requests prioritized.",
    },
    subServices: [
      { name: "Leak repair", description: "Pipes, faucets, toilets, and shut-off valves" },
      { name: "Water heater service", description: "Tank and tankless install, repair, replacement" },
      { name: "Drain cleaning", description: "Clogs, snaking, and hydro-jetting" },
      { name: "Fixture installation", description: "Sinks, toilets, showers, and garburators" },
      { name: "Frozen pipe repair", description: "Winter burst pipes and prevention" },
      { name: "Renovation rough-in", description: "Kitchen, bath, and basement plumbing" },
    ],
    details: {
      title: "Trusted Edmonton plumbing services",
      paragraphs: [
        "Edmonton winters create unique plumbing challenges — frozen hose bibs, burst pipes in unheated walls, and water heaters working overtime. Our in-house plumbers handle emergencies and planned work with equal professionalism.",
        "Our plumbing team holds Alberta trade credentials where required. You receive a direct quote and our crew completes the work.",
        "Serving Edmonton, Sherwood Park, St. Albert, and the full Capital Region.",
      ],
    },
    benefits: [
      { title: "Professional plumbers", description: "Qualified Alberta plumbers on every job.", icon: "shield-check" },
      { title: "Emergency availability", description: "Same-day and emergency response when possible.", icon: "clock" },
      { title: "Free quotes", description: "Upfront pricing on planned work — no obligation.", icon: "gift" },
      { title: "Code-compliant work", description: "Installations that meet Alberta plumbing standards.", icon: "check-circle" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does a plumber cost in Edmonton?", answer: "Plumbing costs depend on the type of repair or install, parts required, and access. We quote each job individually and provide upfront pricing before work begins." },
      { question: "Do you offer emergency plumbing in Edmonton?", answer: "Yes — mark your request as urgent when submitting and we prioritize emergency calls." },
      { question: "Are your plumbers qualified for work in Alberta?", answer: "Yes. Our plumbing team holds Alberta trade credentials where required." },
      { question: "Can a plumber install a water heater?", answer: "Yes — our in-house plumbers handle tank and tankless water heater installation, gas line connections, and permits where required." },
      { question: "What should I do if my pipes freeze?", answer: "Shut off water at the main valve and call us immediately. Do not use open flames to thaw pipes. Submit an urgent request and we'll respond quickly." },
    ],
    relatedSlugs: ["handyman", "renovators", "electricians"],
  },

  electricians: {
    slug: "electricians",
    metaTitle: "Electrician Edmonton | Electrical Contractors & Quotes",
    metaDescription:
      "Need an electrician in Edmonton? Our Master Electricians handle panels, wiring, lighting, and EV chargers. Free quote — no obligation.",
    keywords: [
      "electrician Edmonton",
      "electrician near me Edmonton",
      "Master Electrician Edmonton",
      "electrical contractor Edmonton",
      "panel upgrade Edmonton",
    ],
    hero: {
      eyebrow: "Electrical Services · Edmonton",
      headline: "Professional electricians in Edmonton",
      subheadline:
        "Panels, wiring, lighting, and EV chargers — our own Master Electricians.",
      intro:
        "Electrical work in Alberta requires qualified tradespeople. Our electricians handle everything from outlet installs to full panel upgrades. Request a free quote with no obligation.",
    },
    subServices: [
      { name: "Panel upgrades", description: "100A to 200A service upgrades and replacements" },
      { name: "Lighting installation", description: "Pot lights, fixtures, and dimmer switches" },
      { name: "Outlet & switch work", description: "New circuits, GFCI, and USB outlets" },
      { name: "EV charger install", description: "Level 2 home charging stations" },
      { name: "Aluminum wiring remediation", description: "Common in older Edmonton homes" },
      { name: "Renovation wiring", description: "Kitchen, basement, and addition rough-in" },
    ],
    details: {
      title: "Master Electricians serving Edmonton & area",
      paragraphs: [
        "Many Edmonton homes built in the 1960s–70s have aluminum wiring or undersized panels that struggle with modern loads — EV chargers, heat pumps, and home offices all demand adequate electrical service.",
        "Our electricians hold Alberta Master Electrician credentials where required and carry full liability insurance. Permits and inspections are handled properly — protecting your home and insurance coverage.",
        "Request a written quote and our crew completes the work to code.",
      ],
    },
    benefits: [
      { title: "Master Electricians", description: "Qualified Alberta electricians on every project.", icon: "shield-check" },
      { title: "Permit-compliant", description: "Work that passes inspection and protects your home insurance.", icon: "check-circle" },
      { title: "Free quotes", description: "Written estimates on every project — no obligation.", icon: "gift" },
      { title: "Modern home ready", description: "EV chargers, smart panels, and energy-efficient upgrades.", icon: "zap" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does an electrician cost in Edmonton?", answer: "Electrical pricing varies by job — from outlet installs to panel upgrades and EV chargers. We assess your panel capacity, wiring distance, and scope, then provide a custom written quote." },
      { question: "Do I need a permit for electrical work in Edmonton?", answer: "Yes — most electrical work beyond minor repairs requires permits and inspection. Our in-house electricians handle this process." },
      { question: "Can you upgrade my electrical panel?", answer: "Yes. Panel upgrades from 100A to 200A are common in older Edmonton homes. Our electricians assess your load and provide a quote." },
      { question: "Do you install EV chargers?", answer: "Yes — our team installs Level 2 home EV charging stations, including dedicated circuits and permit applications." },
      { question: "Do you serve Edmonton homes and condos?", answer: "Yes. Our electrical crew carries on every job." },
    ],
    relatedSlugs: ["renovators", "plumbers", "handyman"],
  },

  landscapers: {
    slug: "landscapers",
    metaTitle: "Landscaping Edmonton | Lawn Care, Garden & Yard Services",
    metaDescription:
      "Need landscaping in Edmonton? Our team handles lawn care, garden design, sod, and yard cleanup. Free quote — no obligation.",
    keywords: [
      "landscaping Edmonton",
      "landscaper Edmonton",
      "lawn care Edmonton",
      "yard cleanup Edmonton",
      "sod installation Edmonton",
    ],
    hero: {
      eyebrow: "Landscaping Services · Edmonton",
      headline: "Landscaping services in Edmonton",
      subheadline:
        "Lawns, gardens, sod, and seasonal cleanup — our own landscaping crew.",
      intro:
        "Edmonton's short growing season makes professional landscaping worth every dollar. From spring cleanup to fall winterization, our team knows Alberta climate and soil. Request a free quote.",
    },
    subServices: [
      { name: "Lawn care & mowing", description: "Regular mowing, edging, and fertilization" },
      { name: "Garden design", description: "Plant beds, shrubs, and perennial layouts" },
      { name: "Sod installation", description: "New lawn establishment and repair patches" },
      { name: "Spring & fall cleanup", description: "De-thatching, aeration, leaf removal" },
      { name: "Mulching & edging", description: "Bed maintenance and clean borders" },
      { name: "Snow prep & winterization", description: "Blowout, wrapping, and seasonal prep" },
    ],
    details: {
      title: "Edmonton landscaping for every season",
      paragraphs: [
        "The Capital Region's clay-heavy soil and harsh winters demand landscapers who understand proper grading, drainage, and plant selection for Zone 3a. Spring book-up happens fast — early quotes ensure summer-ready yards.",
        "Whether you need a complete yard overhaul in Windermere or ongoing lawn maintenance in St. Albert, our landscaping crew serves residential and commercial properties across the metro.",
        "Submit one request and receive a written quote from our team.",
      ],
    },
    benefits: [
      { title: "Climate-smart design", description: "We select plants and materials suited to Edmonton winters.", icon: "tree" },
      { title: "Seasonal scheduling", description: "Book spring cleanup early — Edmonton's season is short.", icon: "calendar" },
      { title: "Free quotes", description: "Written estimates with no obligation.", icon: "gift" },
      { title: "Professional crew", description: "Professional workmanship you can count on.", icon: "shield-check" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does landscaping cost in Edmonton?", answer: "Landscaping costs depend on yard size, scope, materials, and whether it's a one-time project or ongoing maintenance. We quote each job based on your specific needs." },
      { question: "When should I book landscaping in Edmonton?", answer: "Book spring cleanup and major projects by March–April. The active season runs May through September." },
      { question: "Do you offer ongoing maintenance?", answer: "Yes — we offer weekly mowing, seasonal cleanup, and annual maintenance contracts." },
      { question: "Can you fix drainage problems?", answer: "Yes — our team handles grading, swales, and downspout extensions to address Edmonton yard drainage issues." },
      { question: "Do you serve Sherwood Park and St. Albert?", answer: "Yes — we cover the full Edmonton Capital Region." },
    ],
    relatedSlugs: ["deck-fence", "cleaners", "handyman"],
  },

  cleaners: {
    slug: "cleaners",
    metaTitle: "Cleaning Services Edmonton | Home, Office & Post-Construction",
    metaDescription:
      "Professional cleaning services in Edmonton for homes, apartments, condos, offices, rental properties, and post-construction projects. Get a free cleaning quote.",
    keywords: [
      "cleaning services Edmonton",
      "house cleaning Edmonton",
      "move out cleaning Edmonton",
      "commercial cleaning Edmonton",
      "post construction cleaning Edmonton",
      "rental property cleaning Edmonton",
    ],
    hero: {
      eyebrow: "Cleaning Services · Edmonton",
      headline: "Professional cleaning services in Edmonton",
      subheadline:
        "Homes, apartments, condos, offices, rental properties, and post-construction projects — our own trusted crew.",
      intro:
        "Whether you're preparing a new home, turning over a rental, or clearing construction dust, our cleaning team delivers reliable results across Edmonton and surrounding areas. Get a free cleaning quote.",
    },
    subServices: [
      { name: "New Home Cleaning", description: "Pre-move-in and new-build cleans for fresh starts" },
      { name: "Apartment & Condo Cleaning", description: "Deep and recurring cleans for multi-unit living" },
      { name: "Move-In / Move-Out Cleaning", description: "Rental turnovers and deposit-ready deep cleans" },
      { name: "Commercial & Office Cleaning", description: "Offices, retail spaces, and common areas" },
      { name: "Post-Construction Cleaning", description: "Construction dust, debris, and final detail cleans" },
      { name: "Rental Property Cleaning", description: "Landlord turnovers and tenant move-out service" },
    ],
    details: {
      title: "Reliable cleaning across Edmonton",
      paragraphs: [
        "Landlords in Edmonton know move-out cleans can make or break deposit returns. Homeowners preparing for listing photos need a level of clean that goes beyond weekly tidying. Our cleaners use professional-grade products and consistent checklists.",
        "From new home cleans to post-construction detail work, our crew handles residential and commercial projects throughout Edmonton and surrounding communities including Sherwood Park, St. Albert, and Spruce Grove.",
        "You describe your property size and scope, receive a free quote, and our team handles the rest — no middlemen.",
      ],
    },
    benefits: [
      { title: "Professional crew", description: "Our cleaning team follows consistent quality standards on every job.", icon: "shield-check" },
      { title: "Flexible scheduling", description: "One-time deep cleans or recurring maintenance plans.", icon: "calendar" },
      { title: "Free quotes", description: "Pricing based on your property size and scope.", icon: "gift" },
      { title: "Eco-friendly options", description: "Green cleaning products available on request.", icon: "cleaning" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does house cleaning cost in Edmonton?", answer: "Cleaning costs depend on home size, number of rooms, condition, and whether it's a standard, deep, or move-out clean. We provide a custom quote based on your specific scope." },
      { question: "Do cleaners bring their own supplies?", answer: "Yes — our team brings equipment and products. Eco-friendly options are available on request." },
      { question: "How long does a deep clean take?", answer: "Typically 3–6 hours depending on home size and condition. Move-out cleans for rentals may take a full day." },
      { question: "Can I book recurring cleaning?", answer: "Yes — we offer weekly, bi-weekly, and monthly maintenance schedules at discounted rates." },
      { question: "Do you offer move-out cleaning?", answer: "Yes. Move-out and deep cleaning are among our most requested services in Edmonton." },
    ],
    relatedSlugs: ["handyman", "painters", "home-maintenance"],
  },

  "deck-fence": {
    slug: "deck-fence",
    metaTitle: "Deck & Fence Edmonton | Build, Repair & Stain Quotes",
    metaDescription:
      "Need deck or fence work in Edmonton? Our team handles builds, repairs, and staining. Free quote — no obligation.",
    keywords: [
      "deck builder Edmonton",
      "fence contractor Edmonton",
      "deck repair Edmonton",
      "fence repair Edmonton",
    ],
    hero: {
      eyebrow: "Deck & Fence · Edmonton",
      headline: "Deck & fence specialists in Edmonton",
      subheadline: "Builds, repairs, staining, and replacements — our own experienced crew.",
      intro:
        "From new composite decks to fence line repairs after Alberta winters, our deck and fence team serves Edmonton and the Capital Region. Request a free quote.",
    },
    subServices: [
      { name: "New deck builds", description: "Wood, composite, and multi-level designs" },
      { name: "Deck repairs", description: "Board replacement, railing, and structural fixes" },
      { name: "Fence installation", description: "Wood, vinyl, and chain-link fencing" },
      { name: "Fence repair", description: "Post replacement, panel fixes, gate repairs" },
      { name: "Staining & sealing", description: "Deck and fence finishing for Alberta weather" },
      { name: "Permits & planning", description: "Familiar with Edmonton permit requirements" },
    ],
    details: {
      title: "Professional deck & fence services across Edmonton",
      paragraphs: [
        "Edmonton's freeze-thaw cycles take a toll on outdoor structures. Homeowners turn to deck and fence specialists for everything from replacing rotted posts to building entertainment-ready composite decks.",
        "Our in-house crew serves every quadrant of the Capital Region. Every team member follows our quality and safety standards.",
      ],
    },
    benefits: [
      { title: "Experienced team", description: "Quality verified on every project.", icon: "shield-check" },
      { title: "Free quotes", description: "Written estimates before work begins.", icon: "gift" },
      { title: "Local expertise", description: "We know Alberta building codes and weather.", icon: "map-pin" },
      { title: "Fast response", description: "Most requests answered within 24 hours.", icon: "clock" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does a deck cost in Edmonton?", answer: "Deck pricing depends on size, materials, height, railing, and permit requirements. We assess your site and provide a written quote tailored to your project." },
      { question: "Do I need a permit for a deck in Edmonton?", answer: "Most decks over a certain height require a City of Edmonton permit. Our team can advise on permit requirements." },
      { question: "How long does fence installation take?", answer: "A standard residential fence line often takes 1–3 days depending on length, terrain, and material." },
    ],
    relatedSlugs: ["handyman", "landscapers", "renovators"],
  },

  "home-maintenance": {
    slug: "home-maintenance",
    metaTitle: "Home Maintenance Edmonton | Seasonal & Property Care",
    metaDescription:
      "Need home maintenance in Edmonton? Our team handles seasonal upkeep, property care, and landlord turnovers. Free quote — no obligation.",
    keywords: [
      "home maintenance Edmonton",
      "property maintenance Edmonton",
      "seasonal home care Edmonton",
    ],
    hero: {
      eyebrow: "Home Maintenance · Edmonton",
      headline: "Home maintenance services in Edmonton",
      subheadline: "Seasonal upkeep, property care, and landlord maintenance — our own crew.",
      intro:
        "Keep your Edmonton home running smoothly with our team — gutter cleaning, furnace checks, weatherproofing, and recurring property maintenance.",
    },
    subServices: [
      { name: "Seasonal maintenance", description: "Spring/fall checklists and weatherproofing" },
      { name: "Gutter cleaning", description: "Eavestrough clearing and downspout checks" },
      { name: "Landlord turnovers", description: "Between-tenant repairs and refreshes" },
      { name: "HVAC filter & checks", description: "Furnace filter changes and basic inspections" },
      { name: "Exterior upkeep", description: "Siding, caulking, and weather seal checks" },
      { name: "Recurring plans", description: "Monthly or seasonal maintenance schedules" },
    ],
    details: {
      title: "Reliable home maintenance across the Capital Region",
      paragraphs: [
        "Edmonton homeowners and landlords use maintenance services to stay ahead of costly repairs — from clearing gutters before spring melt to preparing furnaces before winter.",
        "Our team handles recurring property care or one-off seasonal tasks across Edmonton and the Capital Region.",
      ],
    },
    benefits: [
      { title: "Professional team", description: "Quality care on every maintenance visit.", icon: "shield-check" },
      { title: "Landlord-friendly", description: "Ideal for multi-unit and rental property owners.", icon: "home" },
      { title: "Capital Region coverage", description: "Edmonton, Sherwood Park, St. Albert, and beyond.", icon: "map-pin" },
      { title: "Flexible scheduling", description: "One-time or recurring maintenance plans.", icon: "clock" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does home maintenance cost in Edmonton?", answer: "Maintenance pricing depends on the tasks included, property size, and whether you need a one-time visit or recurring plan. We quote based on your specific checklist." },
      { question: "Do you serve rental property owners?", answer: "Yes — many landlords use our team for turnover maintenance and recurring property care." },
      { question: "Can I schedule recurring maintenance?", answer: "Yes — we offer monthly, quarterly, or seasonal maintenance plans at discounted rates." },
    ],
    relatedSlugs: ["handyman", "cleaners", "landscapers"],
  },

  "drywall-repair": {
    slug: "drywall-repair",
    metaTitle: "Drywall Repair Edmonton | Patch, Texture & Paint-Ready Walls",
    metaDescription:
      "Need drywall repair in Edmonton? Our crew patches holes, smooths seams, and preps walls for paint. Free quote — no obligation.",
    keywords: [
      "drywall repair Edmonton",
      "drywall patching Edmonton",
      "hole repair walls Edmonton",
      "drywall contractor Edmonton",
    ],
    hero: {
      eyebrow: "Drywall Repair · Edmonton",
      headline: "Professional drywall repair in Edmonton",
      subheadline:
        "Clean patches, proper tape and mud, and paint-ready finishes — done by our own crew.",
      intro:
        "From doorknob dents to larger water-damage patches, we restore walls so they look finished — not like a temporary fix. Request a free quote with no obligation.",
    },
    subServices: [
      { name: "Hole & dent patching", description: "Small to medium wall repairs blended to the surrounding surface" },
      { name: "Seam & corner repairs", description: "Tape, mud, and corner bead fixes for smooth edges" },
      { name: "Texture matching", description: "Knockdown and orange-peel blending where needed" },
      { name: "Paint-ready prep", description: "Sanded, primed surfaces ready for finishing coats" },
      { name: "Water-damage patches", description: "Cut out, replace, and finish drywall after leaks" },
      { name: "Rental punch-list walls", description: "Turnover wall repairs for landlords and property managers" },
    ],
    details: {
      title: "Drywall repair across Edmonton and the Capital Region",
      paragraphs: [
        "Damaged drywall makes rooms look unfinished and can delay rental turnovers or painting projects. Our in-house crew handles patching, taping, mudding, and finish prep so walls are ready for paint.",
        "We work in houses, condos, and rental units throughout Edmonton, Sherwood Park, St. Albert, Beaumont, Leduc, Fort Saskatchewan, and Spruce Grove.",
      ],
    },
    benefits: [
      { title: "Clean, paint-ready finishes", description: "Proper prep so patches disappear under paint.", icon: "shield-check" },
      { title: "Free quotes", description: "No-obligation pricing before work begins.", icon: "gift" },
      { title: "Local Edmonton crew", description: "One accountable team — no middlemen.", icon: "map-pin" },
      { title: "Fast turnaround", description: "Most requests get a response within 24 hours.", icon: "clock" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does drywall repair cost in Edmonton?", answer: "Pricing depends on hole size, texture matching, and whether paint is included. We provide a written quote after reviewing photos or an on-site look." },
      { question: "Can you match existing texture?", answer: "Yes — we blend common textures such as knockdown and orange peel so repairs disappear once painted." },
      { question: "Do you paint after patching?", answer: "We can include paint or leave walls primer-ready for your painter. Tell us your preference when you request a quote." },
    ],
    relatedSlugs: ["painters", "handyman", "move-in-move-out-repairs"],
  },

  "shed-assembly": {
    slug: "shed-assembly",
    metaTitle: "Shed Assembly Edmonton | Garden Shed & Outdoor Storage Setup",
    metaDescription:
      "Need shed assembly in Edmonton? Garden sheds and outdoor storage kits are part of our furniture & shed assembly service. Free quote — no obligation.",
    keywords: [
      "shed assembly Edmonton",
      "garden shed install Edmonton",
      "outdoor storage assembly Edmonton",
      "furniture and shed assembly Edmonton",
      "shed builder Edmonton",
    ],
    hero: {
      eyebrow: "Furniture & Shed Assembly · Edmonton",
      headline: "Shed and outdoor storage assembly in Edmonton",
      subheadline:
        "Flat-pack sheds and storage kits built square, level, and ready for Alberta weather — by the same crew that assembles your furniture.",
      intro:
        "From backyard garden sheds to larger storage kits, our furniture & shed assembly crew handles unboxing, assembly, anchoring, and finishing so you do not spend a weekend wrestling panels alone. Request a free quote with no obligation.",
    },
    subServices: [
      { name: "Garden shed kits", description: "Assemble popular retail and online shed kits" },
      { name: "Outdoor storage units", description: "Resin and wood storage buildings set up on-site" },
      { name: "Leveling & base prep", description: "Square, level installs on prepared pads" },
      { name: "Anchoring & doors", description: "Secure fastening, door alignment, and hardware" },
      { name: "Shelf & accessory installs", description: "Interior shelving and hooks as needed" },
      { name: "Indoor furniture too", description: "IKEA and flat-pack furniture from the same assembly team" },
    ],
    details: {
      title: "Professional shed assembly across the Capital Region",
      paragraphs: [
        "Shed kits look simple on the box and turn into a multi-day project without the right tools and a second set of hands. Our team builds outdoor storage correctly the first time — as part of our furniture & shed assembly service.",
        "We serve Edmonton and surrounding communities including Sherwood Park, St. Albert, Beaumont, Leduc, Fort Saskatchewan, Spruce Grove, and Stony Plain.",
      ],
    },
    benefits: [
      { title: "Built square and secure", description: "Level assembly with proper fastening and door fit.", icon: "shield-check" },
      { title: "Same assembly crew", description: "Furniture and sheds quoted together when you need both.", icon: "layers" },
      { title: "Free quotes", description: "Clear pricing before we start.", icon: "gift" },
      { title: "Fast scheduling", description: "Typical response within 24 hours.", icon: "clock" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "Is shed assembly separate from furniture assembly?", answer: "No — shed assembly is part of our furniture & shed assembly service. You can book furniture, a shed, or both on one quote." },
      { question: "Do you assemble sheds from big-box stores?", answer: "Yes — we assemble common retail and online shed kits. Share the brand/model and site photos when requesting a quote." },
      { question: "Do I need a concrete pad?", answer: "Many kits need a level base. Tell us what you have on site and we will confirm requirements in the quote." },
      { question: "How long does shed assembly take?", answer: "Most backyard kits are completed in one visit, depending on size and site conditions." },
    ],
    relatedSlugs: ["furniture-assembly", "handyman", "deck-fence"],
  },
};

export function getServicePageContent(slug: string): ServicePageContent | null {
  const base = SERVICE_PAGES[slug];
  if (!base) return null;
  const enrichment = SERVICE_PAGE_ENRICHMENTS[slug as SeoServiceSlug];
  if (!enrichment) return null;
  return mergeServicePage(base, enrichment);
}
