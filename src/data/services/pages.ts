import type { ServicePageContent } from "@/types/service-page";

const LOCAL_AREAS = [
  "Edmonton",
  "Sherwood Park",
  "St. Albert",
  "Spruce Grove",
  "Stony Plain",
  "Fort Saskatchewan",
  "Leduc",
  "Beaumont",
  "Terwillegar",
  "Windermere",
  "Mill Woods",
  "Oliver",
];

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  handyman: {
    slug: "handyman",
    metaTitle: "Handyman Edmonton | Free Quotes from Vetted Local Pros",
    metaDescription:
      "Need a handyman in Edmonton? Get matched with up to 3 vetted, insured local pros for repairs, installs, and home maintenance. Free quotes — no obligation.",
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
        "Repairs, installs, and odd jobs — matched with vetted local pros in minutes.",
      intro:
        "From drywall patches to furniture assembly, Edmonton Home Connect matches you with experienced handymen who show up on time, carry insurance, and get the job done right. One free request, up to 3 quotes.",
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
        "Our network includes independent handymen serving every quadrant of Edmonton and the Capital Region. Each pro is vetted for liability insurance and WCB coverage before joining the platform. You compare quotes, choose who to hire, and pay the pro directly — we never mark up labour.",
        "Whether you live in a 1960s bungalow in Glenora or a new build in Terwillegar, we match you with pros familiar with Edmonton homes and Alberta building practices.",
      ],
    },
    benefits: [
      { title: "Vetted & insured pros", description: "Every handyman verified for insurance and customer reviews before joining.", icon: "shield-check" },
      { title: "Free multi-quote matching", description: "One request, up to 3 quotes. You pay nothing to use our platform.", icon: "gift" },
      { title: "Edmonton-local", description: "Pros who know Edmonton homes — from weatherproofing to legacy housing quirks.", icon: "map-pin" },
      { title: "Fast response", description: "Most homeowners hear back from matched pros within 24 hours.", icon: "clock" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does a handyman cost in Edmonton?", answer: "Handyman rates in Edmonton typically range from $50–$90 per hour depending on scope and experience. Fixed-price quotes are common for defined tasks. We connect you with pros who provide written quotes before work begins." },
      { question: "Are your handymen insured?", answer: "Yes. All professionals in our network must provide proof of liability insurance and WCB coverage. We verify credentials before matching." },
      { question: "What jobs can a handyman handle?", answer: "Common jobs include drywall repair, minor plumbing and electrical (non-panel work), furniture assembly, caulking, shelving, door adjustments, and general home maintenance. Licensed trades are recommended for major electrical, plumbing, and structural work." },
      { question: "How quickly can I get a handyman in Edmonton?", answer: "Most requests receive contact from matched pros within 24 hours. Urgent repairs are prioritized when possible." },
      { question: "Do you serve areas outside Edmonton?", answer: "Yes — we cover the Capital Region including Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Fort Saskatchewan, Leduc, and Beaumont." },
    ],
    relatedSlugs: ["painters", "plumbers", "home-maintenance"],
  },

  painters: {
    slug: "painters",
    metaTitle: "House Painters Edmonton | Interior & Exterior Painting Quotes",
    metaDescription:
      "Looking for house painters in Edmonton? Get matched with vetted interior and exterior painting pros. Free quotes from up to 3 local painters — no obligation.",
    keywords: [
      "painters Edmonton",
      "house painters Edmonton",
      "interior painting Edmonton",
      "exterior painting Edmonton",
      "painting contractors Edmonton",
    ],
    hero: {
      eyebrow: "Painting Services · Edmonton",
      headline: "Professional house painters in Edmonton",
      subheadline:
        "Interior, exterior, and cabinet painting — matched with vetted local pros.",
      intro:
        "A quality paint job transforms your home and protects Alberta's harsh climate from damaging your exterior. Tell us about your project and we'll connect you with experienced Edmonton painters — free, fast, and no obligation.",
    },
    subServices: [
      { name: "Interior painting", description: "Walls, ceilings, trim, and full-room refreshes" },
      { name: "Exterior painting", description: "Siding, stucco, trim, and weather-resistant coatings" },
      { name: "Cabinet painting", description: "Kitchen and bathroom cabinet refinishing" },
      { name: "Deck & fence staining", description: "Protect outdoor wood from Edmonton winters" },
      { name: "Commercial painting", description: "Offices, retail, and rental turnovers" },
      { name: "Colour consultation", description: "Expert guidance on finishes and palettes" },
    ],
    details: {
      title: "Edmonton painting pros for every surface",
      paragraphs: [
        "Edmonton's freeze-thaw cycles and dry winters take a toll on exterior paint. Professional painters understand surface prep — the difference between a finish that lasts five years and one that peels after one winter.",
        "Whether you're refreshing a downtown condo in Oliver, repainting a weatherboard home in Strathearn, or preparing a rental for turnover in Mill Woods, our network includes painters experienced with Edmonton housing stock.",
        "Request a free match and compare up to 3 written quotes from vetted, insured painting contractors. No shared leads, no call-centre runaround.",
      ],
    },
    benefits: [
      { title: "Quality prep & finish", description: "Matched pros who prioritize surface preparation and durable materials.", icon: "shield-check" },
      { title: "Up to 3 free quotes", description: "Compare pricing and timelines before you commit.", icon: "gift" },
      { title: "Climate-aware work", description: "Pros who schedule exterior work around Edmonton's weather windows.", icon: "calendar" },
      { title: "Insured contractors", description: "Liability insurance verified for every pro in our network.", icon: "check-circle" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does it cost to paint a house in Edmonton?", answer: "Interior painting typically runs $2–$4 per square foot; full exterior repaints range from $3,000–$8,000+ depending on size and prep. We connect you with pros who provide detailed written estimates." },
      { question: "What is the best time to paint exteriors in Edmonton?", answer: "Late spring through early fall (May–September) is ideal when temperatures stay above 10°C and rain is less frequent. Pros in our network advise on optimal scheduling." },
      { question: "Do your painters provide prep work?", answer: "Yes. Professional painters include cleaning, sanding, patching, and priming as part of a quality job. Scope is outlined in each quote." },
      { question: "Can I get interior and exterior done together?", answer: "Many Edmonton painters handle both. Describe your full project when requesting a quote and we'll match accordingly." },
      { question: "Are your painters insured?", answer: "All professionals in our network carry liability insurance and WCB coverage, verified before they receive leads." },
    ],
    relatedSlugs: ["handyman", "renovators", "deck-fence"],
  },

  renovators: {
    slug: "renovators",
    metaTitle: "Home Renovation Edmonton | Kitchen, Bath & Basement Quotes",
    metaDescription:
      "Planning a home renovation in Edmonton? Get matched with vetted renovators for kitchens, bathrooms, basements, and full home projects. Free quotes — no obligation.",
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
        "Kitchens, bathrooms, basements, and full home renos — vetted local pros.",
      intro:
        "Renovating in Edmonton means navigating permits, Alberta Building Code requirements, and long winters that favour indoor projects. We match you with experienced renovation contractors who know the local market — up to 3 free quotes.",
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
        "Our renovators understand City of Edmonton permit requirements, moisture management in below-grade spaces, and the trade coordination needed for multi-phase projects.",
        "Submit one request and receive quotes from up to 3 vetted renovation contractors. Compare scope, timeline, and price — then hire with confidence.",
      ],
    },
    benefits: [
      { title: "Permit-ready pros", description: "Contractors familiar with Edmonton permit and inspection processes.", icon: "clipboard-list" },
      { title: "Written quotes", description: "Compare detailed scope from up to 3 matched renovators.", icon: "gift" },
      { title: "Trade coordination", description: "Many renovators manage plumbing, electrical, and flooring subs.", icon: "users" },
      { title: "Verified credentials", description: "Insurance and references checked before joining our network.", icon: "shield-check" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does a basement development cost in Edmonton?", answer: "Basement finishing in Edmonton typically ranges from $40–$70+ per square foot depending on layout, bathroom addition, and legal suite requirements. Matched pros provide itemized quotes." },
      { question: "Do I need a permit for renovation in Edmonton?", answer: "Most structural changes, basement developments, and electrical/plumbing alterations require City of Edmonton permits. Renovators in our network can advise and often handle permit applications." },
      { question: "How long does a kitchen renovation take?", answer: "A typical Edmonton kitchen reno takes 4–8 weeks depending on scope, custom cabinetry lead times, and inspections." },
      { question: "Can I renovate in winter?", answer: "Yes — interior renovations are ideal during Edmonton's winter months. Basements, kitchens, and bathrooms are year-round projects." },
      { question: "How do I choose the right renovator?", answer: "Compare written quotes, check references, verify insurance, and ensure scope is clearly defined. Our vetting process pre-screens pros for credentials and review history." },
    ],
    relatedSlugs: ["flooring", "electricians", "plumbers"],
  },

  flooring: {
    slug: "flooring",
    metaTitle: "Flooring Installation Edmonton | Hardwood, Tile & Vinyl Quotes",
    metaDescription:
      "Need flooring installed in Edmonton? Get matched with vetted installers for hardwood, laminate, tile, and vinyl. Free quotes from local pros — no obligation.",
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
        "Hardwood, tile, laminate, and vinyl — installed by vetted local pros.",
      intro:
        "New flooring changes how your entire home feels. We connect Edmonton homeowners with experienced flooring installers who handle removal, subfloor prep, and precision installation — up to 3 free quotes.",
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
      title: "Expert flooring installers across the Capital Region",
      paragraphs: [
        "Edmonton's dry climate affects hardwood expansion and basement moisture demands moisture-resistant materials like LVP or engineered products. Professional installers assess subfloor conditions — especially in older homes with settling foundations.",
        "From open-concept main floors in Summerside to basement suites in Sherwood Park, matched pros provide accurate measurements, material guidance, and clean installation.",
        "One request, multiple quotes, zero platform fees for homeowners.",
      ],
    },
    benefits: [
      { title: "Proper subfloor prep", description: "Matched installers who don't skip the prep that prevents future failures.", icon: "shield-check" },
      { title: "Material guidance", description: "Pros recommend products suited to Edmonton climate and your budget.", icon: "check-circle" },
      { title: "Free quote comparison", description: "Up to 3 written estimates from vetted installers.", icon: "gift" },
      { title: "Clean installation", description: "Professionals who respect your home and leave sites tidy.", icon: "sparkles" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does flooring installation cost in Edmonton?", answer: "Installation typically runs $3–$8+ per square foot depending on material. Hardwood and tile are at the higher end; LVP and laminate are more affordable. Quotes include prep and removal if needed." },
      { question: "What flooring is best for Edmonton basements?", answer: "Luxury vinyl plank and engineered products handle basement moisture better than solid hardwood. Installers in our network advise based on your subfloor conditions." },
      { question: "How long does flooring installation take?", answer: "Most single-room installs take 1–2 days. Whole-home projects may take 3–5 days depending on scope and drying times." },
      { question: "Can you install over existing flooring?", answer: "Sometimes — depends on the current floor and subfloor condition. Matched pros assess on-site and recommend the best approach." },
      { question: "Do installers move furniture?", answer: "Many do for an additional fee. Clarify furniture handling when reviewing quotes." },
    ],
    relatedSlugs: ["renovators", "handyman", "cleaners"],
  },

  plumbers: {
    slug: "plumbers",
    metaTitle: "Plumber Edmonton | Licensed Plumbing Quotes & Emergency Service",
    metaDescription:
      "Need a plumber in Edmonton? Get matched with licensed, insured plumbing pros for repairs, installs, and emergencies. Free quotes — up to 3 vetted plumbers.",
    keywords: [
      "plumber Edmonton",
      "plumber near me Edmonton",
      "emergency plumber Edmonton",
      "plumbing services Edmonton",
      "licensed plumber Alberta",
    ],
    hero: {
      eyebrow: "Plumbing Services · Edmonton",
      headline: "Licensed plumbers in Edmonton",
      subheadline:
        "Leaks, installs, water heaters, and emergencies — vetted local pros.",
      intro:
        "Frozen pipes, water heater failures, and slow drains can't wait. Edmonton Home Connect matches you with licensed plumbers who carry insurance and know Alberta plumbing code — free quotes from up to 3 pros.",
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
      title: "Trusted Edmonton plumbing professionals",
      paragraphs: [
        "Edmonton winters create unique plumbing challenges — frozen hose bibs, burst pipes in unheated walls, and water heaters working overtime. Licensed plumbers in our network handle emergencies and planned work with equal professionalism.",
        "All matched plumbers are verified for Alberta licensing where required, liability insurance, and WCB coverage. You receive direct quotes and hire the pro you trust most.",
        "Serving Edmonton, Sherwood Park, St. Albert, and the full Capital Region.",
      ],
    },
    benefits: [
      { title: "Licensed plumbers", description: "Alberta-licensed professionals verified before matching.", icon: "shield-check" },
      { title: "Emergency availability", description: "Many network pros offer same-day and emergency response.", icon: "clock" },
      { title: "Up to 3 quotes", description: "Compare pricing on planned work — free for homeowners.", icon: "gift" },
      { title: "Code-compliant work", description: "Installations that meet Alberta plumbing standards.", icon: "check-circle" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does a plumber cost in Edmonton?", answer: "Service calls typically start at $100–$150; hourly rates range from $100–$150+. Emergency and after-hours rates may be higher. Matched pros provide upfront pricing." },
      { question: "Do you offer emergency plumbing in Edmonton?", answer: "Many pros in our network offer emergency service. Mark your request as urgent when submitting and we prioritize matching." },
      { question: "Are your plumbers licensed in Alberta?", answer: "Yes. We verify trade credentials and licensing for all plumbing professionals in our network." },
      { question: "Can a plumber install a water heater?", answer: "Yes — licensed plumbers handle tank and tankless water heater installation, gas line connections, and permits where required." },
      { question: "What should I do if my pipes freeze?", answer: "Shut off water at the main valve and call a licensed plumber. Do not use open flames to thaw pipes. Submit an urgent request and we'll match you quickly." },
    ],
    relatedSlugs: ["handyman", "renovators", "electricians"],
  },

  electricians: {
    slug: "electricians",
    metaTitle: "Electrician Edmonton | Licensed Electrical Contractors & Quotes",
    metaDescription:
      "Need an electrician in Edmonton? Get matched with Master Electricians for panels, wiring, lighting, and EV chargers. Free quotes from vetted pros.",
    keywords: [
      "electrician Edmonton",
      "electrician near me Edmonton",
      "Master Electrician Edmonton",
      "electrical contractor Edmonton",
      "panel upgrade Edmonton",
    ],
    hero: {
      eyebrow: "Electrical Services · Edmonton",
      headline: "Licensed electricians in Edmonton",
      subheadline:
        "Panels, wiring, lighting, and EV chargers — Master Electricians you can trust.",
      intro:
        "Electrical work in Alberta requires licensed professionals. We match Edmonton homeowners with verified electricians for everything from outlet installs to full panel upgrades — up to 3 free quotes.",
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
        "Compare quotes from up to 3 matched pros and hire with confidence.",
      ],
    },
    benefits: [
      { title: "Master Electricians", description: "Alberta-licensed pros verified before joining our network.", icon: "shield-check" },
      { title: "Permit-compliant", description: "Work that passes inspection and protects your home insurance.", icon: "check-circle" },
      { title: "Free quote matching", description: "Up to 3 estimates on every project — no homeowner fees.", icon: "gift" },
      { title: "Modern home ready", description: "EV chargers, smart panels, and energy-efficient upgrades.", icon: "zap" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does an electrician cost in Edmonton?", answer: "Hourly rates typically range from $100–$130+. Panel upgrades run $2,500–$5,000+. EV charger installs range from $800–$2,000 depending on panel capacity and wiring distance." },
      { question: "Do I need a permit for electrical work in Edmonton?", answer: "Yes — most electrical work beyond minor repairs requires permits and inspection. Licensed electricians in our network handle this process." },
      { question: "Can you upgrade my electrical panel?", answer: "Yes. Panel upgrades from 100A to 200A are common in older Edmonton homes. Matched electricians assess your load and provide quotes." },
      { question: "Do you install EV chargers?", answer: "Many electricians in our network install Level 2 home EV charging stations, including dedicated circuits and permit applications." },
      { question: "Are your electricians insured?", answer: "All professionals carry liability insurance and WCB coverage, verified before they receive matched leads." },
    ],
    relatedSlugs: ["renovators", "plumbers", "handyman"],
  },

  landscapers: {
    slug: "landscapers",
    metaTitle: "Landscaping Edmonton | Lawn Care, Garden & Yard Services",
    metaDescription:
      "Need landscaping in Edmonton? Get matched with vetted landscapers for lawn care, garden design, sod, and yard cleanup. Free quotes from local pros.",
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
        "Lawns, gardens, sod, and seasonal cleanup — vetted local landscapers.",
      intro:
        "Edmonton's short growing season makes professional landscaping worth every dollar. From spring cleanup to fall winterization, we match you with landscapers who know Alberta climate and soil — up to 3 free quotes.",
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
      title: "Edmonton landscaping pros for every season",
      paragraphs: [
        "The Capital Region's clay-heavy soil and harsh winters demand landscapers who understand proper grading, drainage, and plant selection for Zone 3a. Spring book-up happens fast — early quotes ensure summer-ready yards.",
        "Whether you need a complete yard overhaul in Windermere or ongoing lawn maintenance in St. Albert, our network includes landscapers serving residential and commercial properties across the metro.",
        "Submit one request and compare quotes from up to 3 vetted landscaping professionals.",
      ],
    },
    benefits: [
      { title: "Climate-smart design", description: "Pros who select plants and materials suited to Edmonton winters.", icon: "tree" },
      { title: "Seasonal scheduling", description: "Book spring cleanup early — Edmonton's season is short.", icon: "calendar" },
      { title: "Free quotes", description: "Compare up to 3 estimates with no platform fee.", icon: "gift" },
      { title: "Insured crews", description: "Verified insurance for property and worker protection.", icon: "shield-check" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does landscaping cost in Edmonton?", answer: "Lawn mowing runs $40–$80 per visit; full yard landscaping projects range from $2,000–$15,000+ depending on scope. Sod installation is typically $1–$2 per square foot installed." },
      { question: "When should I book landscaping in Edmonton?", answer: "Book spring cleanup and major projects by March–April. The active season runs May through September." },
      { question: "Do landscapers offer ongoing maintenance?", answer: "Yes — many pros offer weekly mowing, seasonal cleanup, and annual maintenance contracts." },
      { question: "Can landscapers fix drainage problems?", answer: "Many handle grading, swales, and downspout extensions to address Edmonton yard drainage issues." },
      { question: "Do you serve Sherwood Park and St. Albert?", answer: "Yes — our network covers the full Edmonton Capital Region." },
    ],
    relatedSlugs: ["deck-fence", "cleaners", "handyman"],
  },

  cleaners: {
    slug: "cleaners",
    metaTitle: "House Cleaning Edmonton | Move-Out & Deep Cleaning Services",
    metaDescription:
      "Need house cleaning in Edmonton? Get matched with vetted cleaners for deep cleans, move-out service, and recurring maintenance. Free quotes — no obligation.",
    keywords: [
      "house cleaning Edmonton",
      "cleaning services Edmonton",
      "move out cleaning Edmonton",
      "deep cleaning Edmonton",
      "maid service Edmonton",
    ],
    hero: {
      eyebrow: "Cleaning Services · Edmonton",
      headline: "House cleaning services in Edmonton",
      subheadline:
        "Deep cleans, move-out service, and recurring maintenance — trusted local pros.",
      intro:
        "Whether you're preparing a rental turnover, moving into a new home, or reclaiming your weekends, we match Edmonton homeowners with reliable cleaning professionals — up to 3 free quotes.",
    },
    subServices: [
      { name: "Deep cleaning", description: "Top-to-bottom cleans for homes and condos" },
      { name: "Move-out / move-in", description: "Rental turnovers and pre-possession cleans" },
      { name: "Recurring maintenance", description: "Weekly, bi-weekly, and monthly schedules" },
      { name: "Post-renovation cleaning", description: "Construction dust and debris removal" },
      { name: "Carpet & upholstery", description: "Steam cleaning and stain treatment" },
      { name: "Commercial cleaning", description: "Offices, retail, and common areas" },
    ],
    details: {
      title: "Reliable cleaners across Edmonton",
      paragraphs: [
        "Landlords in Edmonton know move-out cleans can make or break deposit returns. Homeowners preparing for listing photos need a level of clean that goes beyond weekly tidying. Our cleaners use professional-grade products and consistent checklists.",
        "Every cleaning pro in our network is vetted for insurance and review history. You describe your home size and needs, receive quotes, and hire directly — no middleman markups.",
        "Serving Edmonton and surrounding communities including Sherwood Park, St. Albert, and Spruce Grove.",
      ],
    },
    benefits: [
      { title: "Vetted professionals", description: "Background-checked, insured cleaners with verified reviews.", icon: "shield-check" },
      { title: "Flexible scheduling", description: "One-time deep cleans or recurring maintenance plans.", icon: "calendar" },
      { title: "Up to 3 quotes", description: "Compare pricing based on your home size and scope.", icon: "gift" },
      { title: "Eco-friendly options", description: "Many pros offer green cleaning products on request.", icon: "sparkles" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does house cleaning cost in Edmonton?", answer: "Standard cleans range from $120–$200 for a 2-bedroom home; deep cleans run $200–$400+. Move-out cleans depend on size and condition. Quotes are based on your specific scope." },
      { question: "Do cleaners bring their own supplies?", answer: "Most professional cleaners bring equipment and products. Eco-friendly options are available on request — confirm when reviewing quotes." },
      { question: "How long does a deep clean take?", answer: "Typically 3–6 hours depending on home size and condition. Move-out cleans for rentals may take a full day." },
      { question: "Can I book recurring cleaning?", answer: "Yes — many cleaners offer weekly, bi-weekly, and monthly maintenance schedules at discounted rates." },
      { question: "Are your cleaners insured?", answer: "All professionals in our network carry liability insurance, verified before matching." },
    ],
    relatedSlugs: ["handyman", "painters", "home-maintenance"],
  },

  "deck-fence": {
    slug: "deck-fence",
    metaTitle: "Deck & Fence Edmonton | Build, Repair & Stain Quotes",
    metaDescription:
      "Need deck or fence work in Edmonton? Get matched with vetted local specialists for builds, repairs, and staining. Free quotes from up to 3 pros.",
    keywords: [
      "deck builder Edmonton",
      "fence contractor Edmonton",
      "deck repair Edmonton",
      "fence repair Edmonton",
    ],
    hero: {
      eyebrow: "Deck & Fence · Edmonton",
      headline: "Deck & fence specialists in Edmonton",
      subheadline: "Builds, repairs, staining, and replacements — matched with vetted local pros.",
      intro:
        "From new composite decks to fence line repairs after Alberta winters, we connect you with experienced deck and fence contractors across Edmonton and the Capital Region.",
    },
    subServices: [
      { name: "New deck builds", description: "Wood, composite, and multi-level designs" },
      { name: "Deck repairs", description: "Board replacement, railing, and structural fixes" },
      { name: "Fence installation", description: "Wood, vinyl, and chain-link fencing" },
      { name: "Fence repair", description: "Post replacement, panel fixes, gate repairs" },
      { name: "Staining & sealing", description: "Deck and fence finishing for Alberta weather" },
      { name: "Permits & planning", description: "Pros familiar with Edmonton permit requirements" },
    ],
    details: {
      title: "Professional deck & fence services across Edmonton",
      paragraphs: [
        "Edmonton's freeze-thaw cycles take a toll on outdoor structures. Homeowners turn to deck and fence specialists for everything from replacing rotted posts to building entertainment-ready composite decks.",
        "Our network includes independent contractors serving every quadrant of the Capital Region. Each pro is vetted for insurance and WCB before joining.",
      ],
    },
    benefits: [
      { title: "Vetted contractors", description: "Insurance and WCB verified before matching.", icon: "shield-check" },
      { title: "Free quotes", description: "Compare up to 3 written estimates.", icon: "gift" },
      { title: "Local expertise", description: "Pros who know Alberta building codes and weather.", icon: "map-pin" },
      { title: "Fast matching", description: "Most requests answered within 24 hours.", icon: "clock" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does a deck cost in Edmonton?", answer: "New decks typically range from $8,000–$25,000+ depending on size, materials, and complexity. Composite decks cost more upfront but require less maintenance." },
      { question: "Do I need a permit for a deck in Edmonton?", answer: "Most decks over a certain height require a City of Edmonton permit. Matched contractors can advise on permit requirements." },
      { question: "How long does fence installation take?", answer: "A standard residential fence line often takes 1–3 days depending on length, terrain, and material." },
    ],
    relatedSlugs: ["handyman", "landscapers", "renovators"],
  },

  "home-maintenance": {
    slug: "home-maintenance",
    metaTitle: "Home Maintenance Edmonton | Seasonal & Property Care Pros",
    metaDescription:
      "Need home maintenance in Edmonton? Get matched with vetted pros for seasonal upkeep, property care, and landlord turnovers. Free quotes.",
    keywords: [
      "home maintenance Edmonton",
      "property maintenance Edmonton",
      "seasonal home care Edmonton",
    ],
    hero: {
      eyebrow: "Home Maintenance · Edmonton",
      headline: "Home maintenance services in Edmonton",
      subheadline: "Seasonal upkeep, property care, and landlord maintenance — vetted local pros.",
      intro:
        "Keep your Edmonton home running smoothly with pros who handle gutter cleaning, furnace checks, weatherproofing, and recurring property maintenance.",
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
        "Edmonton homeowners and landlords use maintenance pros to stay ahead of costly repairs — from clearing gutters before spring melt to preparing furnaces before winter.",
        "Our network connects you with insured professionals who can handle recurring property care or one-off seasonal tasks.",
      ],
    },
    benefits: [
      { title: "Vetted pros", description: "Insurance verified for every maintenance provider.", icon: "shield-check" },
      { title: "Landlord-friendly", description: "Ideal for multi-unit and rental property owners.", icon: "home" },
      { title: "Capital Region coverage", description: "Edmonton, Sherwood Park, St. Albert, and beyond.", icon: "map-pin" },
      { title: "Flexible scheduling", description: "One-time or recurring maintenance plans.", icon: "clock" },
    ],
    localAreas: LOCAL_AREAS,
    faq: [
      { question: "How much does home maintenance cost in Edmonton?", answer: "Seasonal packages typically run $200–$600 depending on scope. Individual tasks like gutter cleaning range from $150–$300." },
      { question: "Do you serve rental property owners?", answer: "Yes — many landlords use our platform for turnover maintenance and recurring property care." },
      { question: "Can I schedule recurring maintenance?", answer: "Many pros offer monthly, quarterly, or seasonal maintenance plans at discounted rates." },
    ],
    relatedSlugs: ["handyman", "cleaners", "landscapers"],
  },
};

export const SEO_SERVICE_SLUGS = [
  "handyman",
  "painters",
  "renovators",
  "flooring",
  "plumbers",
  "electricians",
  "landscapers",
  "cleaners",
  "deck-fence",
  "home-maintenance",
] as const;

export type SeoServiceSlug = (typeof SEO_SERVICE_SLUGS)[number];

export function getServicePageContent(slug: string): ServicePageContent | null {
  return SERVICE_PAGES[slug] ?? null;
}
