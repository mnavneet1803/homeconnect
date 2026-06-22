import type { SeoServiceSlug } from "@/data/services/seo-slugs";
import type {
  ServicePageFaq,
  ServicePageBenefit,
  ServicePageProblem,
  ServicePageProcessStep,
} from "@/types/service-page";

export interface ServicePageEnrichment {
  overview: { title: string; paragraphs: string[] };
  commonProblems: { title: string; intro: string; problems: ServicePageProblem[] };
  whyChooseUs: { title: string; intro: string; reasons: ServicePageBenefit[] };
  process: { title: string; intro: string; steps: ServicePageProcessStep[] };
  serviceAreas: { title: string; intro: string };
  cta: { headline: string; description: string };
  additionalFaq: ServicePageFaq[];
}

export const SERVICE_PAGE_ENRICHMENTS: Record<SeoServiceSlug, ServicePageEnrichment> = {
  handyman: {
    overview: {
      title: "Reliable handyman services for Edmonton homeowners",
      paragraphs: [
        "Every Edmonton home has a list of small jobs that never quite get done — a door that sticks after the first freeze, a bathroom grab bar that should have been installed months ago, or a rental unit waiting on punch-list repairs before the next tenant moves in. Home Solution Services provides handyman help across the Capital Region with our own in-house crew, so you deal directly with the people doing the work instead of chasing callbacks through a middleman.",
        "Our handymen handle the repairs and installs that fall between DIY and a full trade call. That includes drywall patching, trim and door adjustments, shelving, TV mounting, caulking, minor plumbing and electrical fixes, furniture assembly, and the scattered tasks that pile up on a honey-do list. We work in bungalows in Glenora, split-levels in Mill Woods, new builds in Windermere, and rental properties throughout Sherwood Park and St. Albert — and we understand how Alberta's climate affects doors, caulking, and exterior hardware.",
        "Landlords and property managers rely on us for turnover repairs, safety fixes, and the steady maintenance that keeps units rent-ready without calling a different contractor for every small item. Homeowners use us when they want the job done properly the first time, on a schedule that fits around work and family. Either way, you receive a written quote before work begins and a team that responds within 24 hours of your request.",
        "Because we employ our own handymen rather than subcontracting to unknown crews, quality and accountability stay in one place. We carry insurance on every job, show up when scheduled, and leave your home clean when we are finished. Whether you need a single afternoon of help or ongoing support for a portfolio of properties, our Edmonton handyman team is built for dependable, local service.",
        "Request a free quote with no obligation. Tell us what is on your list — photos and measurements help — and we will confirm scope, timeline, and pricing before anyone arrives at your door. From a quick fix in Oliver to a full punch list in Spruce Grove, Home Solution Services is your direct line to professional handyman work in the Edmonton area.",
      ],
    },
    commonProblems: {
      title: "Common handyman problems we fix in Edmonton",
      intro:
        "These are the handyman requests we handle most often for Edmonton homeowners, landlords, and property managers. If it sounds familiar, our in-house crew can help.",
      problems: [
        {
          title: "Doors that stick or won't latch",
          description:
            "Edmonton's dry winters and humid summers cause door frames to shift, leaving interior and exterior doors that drag, stick, or fail to latch properly. We adjust hinges, plane edges, and replace worn hardware so doors open smoothly year-round.",
        },
        {
          title: "Drywall holes and patchy repairs",
          description:
            "From doorknob dents to old anchor holes and botched DIY patches, damaged drywall makes rooms look unfinished. Our handymen cut clean patches, tape and mud properly, and sand for a smooth surface ready for paint or touch-up.",
        },
        {
          title: "Loose fixtures and failing caulk",
          description:
            "Towel bars, toilet paper holders, and shower grab bars pull away from walls when anchors fail or studs are missed. We remount securely and re-caulk tubs, sinks, and windows to prevent moisture damage behind walls and trim.",
        },
        {
          title: "Incomplete furniture and shelving installs",
          description:
            "Flat-pack furniture, wall-mounted shelving, and closet systems often sit half-assembled or poorly anchored. We assemble, level, and mount items safely — including heavy units on drywall, brick, or concrete basement walls common in Alberta homes.",
        },
        {
          title: "Rental turnover punch lists",
          description:
            "Between tenants, small items add up: broken blinds, scuffed walls, dripping faucets, and missing cover plates. We work through landlord punch lists efficiently so units are show-ready without coordinating multiple trades for minor work.",
        },
        {
          title: "Seasonal weatherproofing gaps",
          description:
            "Gaps around exterior doors, worn weatherstripping, and failed window caulking let cold air in and drive up heating bills. Our team seals problem areas before winter and addresses spring touch-ups after freeze-thaw cycles loosen materials.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Edmonton homeowners choose Home Solution Services",
      intro:
        "We built our handyman division for people who want one accountable team — not a marketplace of strangers. Here is what sets our Edmonton crew apart.",
      reasons: [
        {
          title: "In-house crew, no middlemen",
          description:
            "Every handyman works directly for Home Solution Services. You get consistent quality, clear communication, and one company standing behind the work.",
          icon: "shield-check",
        },
        {
          title: "Free written quotes",
          description:
            "Tell us what you need and we provide upfront pricing before any work starts. No surprise fees and no obligation to proceed.",
          icon: "gift",
        },
        {
          title: "Capital Region coverage",
          description:
            "We serve Edmonton and surrounding communities daily — from downtown condos to suburban homes and rental properties across the metro area.",
          icon: "map-pin",
        },
        {
          title: "24-hour response",
          description:
            "Most quote requests receive a reply within one business day. Urgent repairs are prioritized when scheduling allows.",
          icon: "clock",
        },
      ],
    },
    process: {
      title: "How our handyman service works",
      intro:
        "Getting handyman help in Edmonton should be straightforward. Our process keeps you informed from first message to final walkthrough.",
      steps: [
        {
          step: 1,
          title: "Tell us what needs doing",
          description:
            "Submit a quote request with your address, list of tasks, and photos if you have them. The more detail you provide, the more accurate your initial estimate will be.",
        },
        {
          step: 2,
          title: "Receive a written quote",
          description:
            "Our team reviews your request, asks clarifying questions if needed, and sends a clear quote covering labour, materials, and timeline. You approve before we book a visit.",
        },
        {
          step: 3,
          title: "We complete the work on site",
          description:
            "Our handyman arrives at the scheduled time with tools and supplies, completes the agreed scope, and walks you through anything you should know about the repair or install.",
        },
        {
          step: 4,
          title: "Final check and follow-up",
          description:
            "We tidy the work area, confirm you are satisfied with the results, and remain available if you need adjustments or want to add items to a future visit.",
        },
      ],
    },
    serviceAreas: {
      title: "Handyman service areas across the Capital Region",
      intro:
        "Home Solution Services dispatches handymen throughout Edmonton and the surrounding Capital Region, including Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc. Whether you manage a single home or multiple rental properties, our local crew travels to your neighbourhood with the tools and experience Edmonton housing requires.",
    },
    cta: {
      headline: "Ready to clear your Edmonton handyman list?",
      description:
        "Request a free quote from Home Solution Services today. Our in-house team responds within 24 hours — no middlemen, no obligation, just dependable local help.",
    },
    additionalFaq: [
      {
        question: "Do I need to buy materials before the handyman arrives?",
        answer:
          "Not necessarily. For many jobs our team brings standard fasteners, anchors, and consumables. If your project requires specific fixtures, paint, or hardware, we will list those in your quote so you can supply them or ask us to pick them up.",
      },
      {
        question: "Can a handyman work on my rental property while I am out of town?",
        answer:
          "Yes. Many landlords provide lockbox or key access for turnover repairs and maintenance visits. We coordinate scheduling with tenants or property managers and document completed work so you stay informed remotely.",
      },
      {
        question: "Is there a minimum charge for small handyman jobs in Edmonton?",
        answer:
          "Some small jobs are billed at a minimum visit rate to cover travel and setup. We outline any minimums clearly in your written quote so you know the cost before booking.",
      },
      {
        question: "Can I combine several small tasks into one visit?",
        answer:
          "Absolutely — that is one of the best ways to use a handyman. Share your full list when requesting a quote and we will schedule enough time to work through multiple items in a single trip when possible.",
      },
    ],
  },

  painters: {
    overview: {
      title: "Professional painting for Edmonton homes and rentals",
      paragraphs: [
        "A fresh coat of paint does more than update a room — it protects your home from Alberta's harsh climate, improves curb appeal before a sale, and helps rental units show well between tenants. Home Solution Services provides interior and exterior painting across Edmonton with our own professional crew, so your project stays on one timeline with one team accountable for prep, application, and cleanup.",
        "Edmonton exteriors face extreme freeze-thaw cycles, intense summer UV, and long dry winters that stress paint films on stucco, wood siding, and trim. Interior projects in older neighbourhoods like Strathearn and Highlands often involve plaster repairs, oil-to-latex conversions, and careful masking around heritage trim. Our painters understand these local conditions and build proper surface preparation into every job — because in Alberta, prep is what separates a finish that lasts from one that peels after a single winter.",
        "We paint single-family homes, condos, townhouses, and commercial spaces throughout the Capital Region. Landlords and property managers call us for turnover repaints, while homeowners trust us for full interior refreshes, cabinet refinishing, deck staining, and exterior repaints timed around Edmonton's weather windows. You receive a detailed written quote before work begins, with scope covering prep, primer, coats, and materials.",
        "Working directly with Home Solution Services means no subcontractor surprises — the painters on your estimate are the painters on your walls. We protect floors and furniture, ventilate properly during interior work, and schedule exterior projects when temperatures and humidity meet manufacturer specifications. Our team responds to quote requests within 24 hours and keeps communication clear from colour selection through final walkthrough.",
        "Whether you are refreshing a downtown condo in Oliver, repainting a weathered bungalow in St. Albert, or preparing a duplex in Mill Woods for new tenants, our Edmonton painting team delivers consistent, professional results. Request a free quote today and tell us about your surfaces, timeline, and any colour goals — we will take it from there.",
      ],
    },
    commonProblems: {
      title: "Common painting problems in Edmonton homes",
      intro:
        "Alberta's climate and aging housing stock create painting challenges that shortcuts cannot fix. These are the issues our Edmonton painters address every week.",
      problems: [
        {
          title: "Peeling exterior paint after winter",
          description:
            "Moisture trapped under failing paint film expands during freeze-thaw cycles and causes bubbling, cracking, and peeling on siding and trim. We strip loose material, repair substrate damage, prime properly, and apply coatings rated for Alberta weather.",
        },
        {
          title: "Stains bleeding through new paint",
          description:
            "Water stains, smoke residue, and tannin bleed from cedar or knots push through standard paint and ruin a fresh finish. Our crew identifies stain sources, uses appropriate primers, and ensures coverage that blocks bleed-through permanently.",
        },
        {
          title: "Cracked caulking and trim gaps",
          description:
            "Exterior caulking fails around windows, doors, and corner boards, leaving gaps that let water behind siding. We remove old caulk, seal joints correctly, and paint trim as a unified system rather than masking structural gaps with colour.",
        },
        {
          title: "Outdated or uneven interior finishes",
          description:
            "Patchy roller marks, visible cut lines, and dated colour schemes make rooms feel tired even when walls are technically intact. We sand imperfections, apply consistent coats, and help you choose modern palettes that suit Edmonton natural light.",
        },
        {
          title: "Worn kitchen and bathroom cabinets",
          description:
            "Replacing cabinetry is expensive when surfaces are structurally sound but cosmetically dated. Our painters degrease, sand, prime, and spray or brush cabinet doors and frames for a durable finish that transforms the room at a fraction of replacement cost.",
        },
        {
          title: "Rental unit wear between tenants",
          description:
            "Scuffed walls, nail holes, and marked trim accumulate quickly in rental properties. We provide fast turnover painting with durable washable finishes so units photograph well and pass inspection without delaying move-in dates.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why choose Home Solution Services for painting",
      intro:
        "Quality painting starts with preparation and ends with a crew that respects your home. Here is why Edmonton clients trust our in-house painters.",
      reasons: [
        {
          title: "Prep-first approach",
          description:
            "We never rush to roller. Cleaning, sanding, patching, and priming are scoped in every quote so your finish lasts through Alberta seasons.",
          icon: "shield-check",
        },
        {
          title: "Free detailed quotes",
          description:
            "You receive written pricing and timeline before we start — no hidden charges for prep or cleanup.",
          icon: "gift",
        },
        {
          title: "Weather-smart scheduling",
          description:
            "Exterior work is booked during Edmonton's reliable painting windows so coatings cure properly and warranties stay valid.",
          icon: "calendar",
        },
        {
          title: "Consistent professional finish",
          description:
            "Our employed painters follow the same quality standards on every job, from a single accent wall to a full exterior repaint.",
          icon: "check-circle",
        },
      ],
    },
    process: {
      title: "Our Edmonton painting process",
      intro:
        "From first quote to final coat, we keep your painting project organized and predictable — whether it is one room or your entire home exterior.",
      steps: [
        {
          step: 1,
          title: "Site review and quote",
          description:
            "Share photos, room counts, or exterior photos and we assess surface condition, prep needs, and materials. You receive a written quote with scope, timeline, and product recommendations.",
        },
        {
          step: 2,
          title: "Prep and protection",
          description:
            "Our crew masks floors, furniture, and landscaping, then completes washing, scraping, sanding, patching, and priming before any finish coats go on.",
        },
        {
          step: 3,
          title: "Application and drying",
          description:
            "We apply paint or stain in proper coats with adequate drying time between layers. Interior projects are ventilated; exterior work follows temperature and humidity guidelines.",
        },
        {
          step: 4,
          title: "Walkthrough and touch-ups",
          description:
            "We inspect every surface with you, address any touch-ups on the spot, and remove masking and protection materials so your space is ready to use.",
        },
      ],
    },
    serviceAreas: {
      title: "Painting services across Edmonton and area",
      intro:
        "Our painting crew works throughout Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc — on homes, condos, rentals, and small commercial spaces. Wherever you are in the Capital Region, Home Solution Services brings the same prep standards and professional finish.",
    },
    cta: {
      headline: "Transform your Edmonton home with a professional paint job",
      description:
        "Get a free painting quote from our in-house crew. We respond within 24 hours with clear scope and pricing — no middlemen, no guesswork.",
    },
    additionalFaq: [
      {
        question: "Do you help with colour selection for Edmonton homes?",
        answer:
          "Yes. We can recommend colours and sheens based on your lighting, existing finishes, and whether the space is a high-traffic rental or a long-term family home. Bring swatches or inspiration photos to your consultation.",
      },
      {
        question: "How do you protect furniture and floors during interior painting?",
        answer:
          "We use drop cloths, plastic sheeting, and careful masking on floors, fixtures, and remaining furnishings. Furniture can often stay in place when moved to the centre of the room and covered.",
      },
      {
        question: "What paint brands do your Edmonton painters use?",
        answer:
          "We use professional-grade products suited to each surface and environment — including durable washable finishes for rentals and weather-rated coatings for exteriors. Specific products are listed in your quote.",
      },
      {
        question: "Can you paint occupied rental units between tenants on a tight timeline?",
        answer:
          "Yes. Turnover painting is a common request. Share your move-out and move-in dates and we will schedule crews to complete prep and painting within your vacancy window.",
      },
    ],
  },

  renovators: {
    overview: {
      title: "Home renovation contractors serving Edmonton and the Capital Region",
      paragraphs: [
        "Renovating an Edmonton home means balancing vision with Alberta Building Code requirements, City of Edmonton permits, trade coordination, and the reality of long winters that push most major work indoors. Home Solution Services manages kitchen, bathroom, basement, and whole-home renovations with our own in-house team and trusted trade partners — giving you one point of contact instead of juggling multiple contractors who blame each other when timelines slip.",
        "Basement development remains one of the most popular renovations in the Capital Region, adding livable square footage, family space, and legal secondary suite potential in a city with strong rental demand. Kitchen and bathroom upgrades consistently deliver the highest return for homeowners preparing to sell in neighbourhoods from Terwillegar to Beverly. Our renovation team understands moisture management in below-grade spaces, framing for open-concept conversions, and the inspection milestones that keep projects compliant.",
        "Landlords and property managers renovate with us to modernize dated units, improve energy efficiency, and reduce turnover time with durable finishes tenants appreciate. Homeowners work with us when DIY has reached its limit and they want a written scope, realistic timeline, and crew that shows up consistently through demolition, rough-in, finishing, and final cleanup. Every project starts with a free quote and clear breakdown of what is included.",
        "Because we are a local Edmonton contractor — not a referral platform — accountability stays with Home Solution Services from first site visit to final inspection. We coordinate plumbing, electrical, flooring, and painting as part of your renovation so phases flow logically and you are not left waiting for the next trade to appear. Our team responds within 24 hours and keeps you updated as work progresses.",
        "Whether you are finishing a basement in St. Albert, gutting a kitchen in Oliver, or upgrading bathrooms in a Spruce Grove rental portfolio, we bring Edmonton-specific experience to your project. Request a free renovation quote and tell us your goals, budget range, and timeline — we will outline the path from plans to finished space.",
      ],
    },
    commonProblems: {
      title: "Renovation challenges we solve for Edmonton homeowners",
      intro:
        "Renovation projects stall when scope is unclear, trades are uncoordinated, or local code requirements catch homeowners off guard. We address these problems regularly across the Capital Region.",
      problems: [
        {
          title: "Basement moisture and improper finishing",
          description:
            "Finished basements fail when vapour barriers, insulation, and drainage are handled incorrectly. We assess moisture sources, use appropriate materials for below-grade walls, and build to code so your basement stays dry through Alberta freeze-thaw cycles.",
        },
        {
          title: "Outdated kitchens that hurt resale value",
          description:
            "Cramped layouts, worn countertops, and dated cabinetry make homes feel tired in competitive Edmonton listings. We redesign flow, upgrade surfaces and storage, and coordinate trades for a cohesive kitchen that functions for modern families.",
        },
        {
          title: "Permit confusion and inspection delays",
          description:
            "Structural changes, suite developments, and major electrical or plumbing work require City of Edmonton permits. Our team advises on permit needs, prepares documentation, and schedules inspections so work is not held up or red-tagged.",
        },
        {
          title: "Bathrooms that lack storage and accessibility",
          description:
            "Small Edmonton bathrooms often have failing tile, poor ventilation, and layouts that waste space. We reconfigure showers, tubs, and vanities, improve exhaust airflow, and add accessibility features for aging-in-place or rental compliance.",
        },
        {
          title: "Open-concept plans without structural support",
          description:
            "Removing walls without proper beams or engineering creates safety risks and failed inspections. We assess load-bearing requirements, install engineered solutions, and finish the space so it looks intentional — not like a wall was simply knocked out.",
        },
        {
          title: "Rental renovations on tight turnover schedules",
          description:
            "Landlords need units upgraded quickly between tenants without sacrificing quality. We scope efficient material choices, batch trade visits, and deliver durable finishes that reduce maintenance calls over multiple lease cycles.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Edmonton chooses us for home renovations",
      intro:
        "Renovations are disruptive enough without wondering who is actually showing up. Home Solution Services keeps your project under one accountable local team.",
      reasons: [
        {
          title: "Permit and code familiarity",
          description:
            "We navigate Edmonton permit requirements and Alberta Building Code standards so your renovation passes inspection the first time.",
          icon: "clipboard-list",
        },
        {
          title: "Transparent written quotes",
          description:
            "Detailed scope, materials, and timeline before demolition starts — so you know what you are paying for and when it will be done.",
          icon: "gift",
        },
        {
          title: "Coordinated trades under one roof",
          description:
            "Plumbing, electrical, flooring, and finishing are scheduled together — reducing gaps and finger-pointing between subcontractors.",
          icon: "users",
        },
        {
          title: "Local experience you can verify",
          description:
            "Our renovation crew knows Edmonton housing stock — from 1950s bungalows to new infill builds — and builds accordingly.",
          icon: "shield-check",
        },
      ],
    },
    process: {
      title: "How our renovation process works",
      intro:
        "A successful Edmonton renovation follows a clear sequence. We guide you through each phase so there are no surprises behind the walls.",
      steps: [
        {
          step: 1,
          title: "Consultation and scope definition",
          description:
            "Tell us about your goals, share photos or plans, and we schedule a site visit if needed. We define scope, identify permit requirements, and prepare a detailed written quote.",
        },
        {
          step: 2,
          title: "Planning, permits, and scheduling",
          description:
            "Once approved, we finalize material selections, submit permits where required, and book trades in logical order — demolition, rough-in, inspections, then finishing.",
        },
        {
          step: 3,
          title: "Construction and quality checks",
          description:
            "Our crew executes each phase with regular progress updates. Inspections are coordinated at required milestones before walls close and finishes go in.",
        },
        {
          step: 4,
          title: "Final walkthrough and handover",
          description:
            "We complete punch-list items, clean the work area, and walk you through your renovated space — including care instructions for new surfaces and systems.",
        },
      ],
    },
    serviceAreas: {
      title: "Renovation service areas in the Capital Region",
      intro:
        "We renovate homes and rental properties across Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc. From basement developments in suburban neighbourhoods to condo-friendly bathroom upgrades downtown, our team travels throughout the metro area with the trades and tools your project requires.",
    },
    cta: {
      headline: "Start your Edmonton renovation with a team you can reach",
      description:
        "Request a free renovation quote from Home Solution Services. Our in-house crew responds within 24 hours with clear scope — no referral fees, no runaround.",
    },
    additionalFaq: [
      {
        question: "Do you provide design help or work from my existing plans?",
        answer:
          "We work both ways. Bring architectural or design plans if you have them, or describe your goals and we will help refine layout, material selections, and scope during the consultation phase.",
      },
      {
        question: "Can I live in my home during a kitchen or bathroom renovation?",
        answer:
          "Often yes, though it depends on scope. We set up dust barriers, maintain safe access to essential plumbing, and discuss realistic disruption levels before work begins so you can plan accordingly.",
      },
      {
        question: "How do you handle unexpected issues found during demolition?",
        answer:
          "Hidden plumbing, wiring, or structural conditions sometimes appear once walls open. We document findings, explain options and cost impact, and get your approval before proceeding with additional work.",
      },
      {
        question: "Do you renovate legal secondary suites in Edmonton basements?",
        answer:
          "Yes. Legal suite development involves specific code requirements for egress, fire separation, and ceiling height. We scope these projects carefully and coordinate inspections required by the City of Edmonton.",
      },
    ],
  },

  flooring: {
    overview: {
      title: "Flooring installation for Edmonton homes and basements",
      paragraphs: [
        "New flooring changes how your entire home looks, feels, and functions — but in Edmonton, installation quality matters as much as the product you choose. Alberta's dry climate causes wood to expand and contract, basements hold moisture that ruins the wrong materials, and high-traffic rental units need surfaces that survive years of wear. Home Solution Services installs hardwood, engineered wood, luxury vinyl plank, laminate, and tile with proper subfloor preparation through our own in-house crew.",
        "We remove old flooring when needed, assess subfloor flatness and moisture, and recommend products suited to each room's conditions. Main-floor living areas in older Edmonton bungalows often benefit from engineered hardwood or premium LVP, while basements in Spruce Grove and St. Albert typically need moisture-tolerant vinyl rather than solid wood. Our installers work cleanly in occupied homes and rental turnovers, protecting adjacent rooms and completing transitions, trim, and thresholds professionally.",
        "Property managers call us between tenants to replace carpet with durable LVP or refresh damaged tile in kitchens and entries. Homeowners trust us during renovations when flooring ties together new kitchens, open basements, and whole-home updates. You receive a written quote covering removal, prep, materials, installation, and any baseboard or trim adjustments before we order product or schedule install dates.",
        "Choosing Home Solution Services means working directly with the installers — not a sales rep who disappears after deposit. We stand behind our work, respond to quote requests within 24 hours, and schedule installs around your timeline when materials are on hand. Our team knows Edmonton housing from concrete basement slabs to main-floor plywood and the acclimation times Alberta humidity levels require.",
        "Whether you are upgrading a single bedroom, reflooring an entire home in Mill Woods, or standardizing durable LVP across a Leduc rental portfolio, our flooring team delivers precise cuts, tight seams, and finishes that look right for years. Request a free quote and tell us your square footage, current flooring, and product preferences — we will recommend the best approach for your space.",
      ],
    },
    commonProblems: {
      title: "Flooring problems we fix across Edmonton",
      intro:
        "Failed flooring installs usually trace back to subfloor issues, wrong product choice, or rushed prep. These are the problems our Edmonton installers correct and prevent.",
      problems: [
        {
          title: "Buckling and gaps in hardwood",
          description:
            "Solid hardwood installed without acclimation or moisture testing buckles in humid summers and gaps in dry winters. We test conditions, recommend appropriate products, and install with expansion gaps and transitions that accommodate Alberta's climate swings.",
        },
        {
          title: "Basement flooring that warped or moulded",
          description:
            "Carpet and laminate fail on damp basement slabs common in Edmonton homes. We moisture-test subfloors, use vapour barriers where needed, and install LVP or tile systems rated for below-grade environments.",
        },
        {
          title: "Uneven subfloors causing soft spots",
          description:
            "Squeaks, flex, and cracked tile trace to unlevel or damaged subfloor. We grind high spots, shim low areas, replace rotten sections, and flatten surfaces to manufacturer tolerances before any flooring goes down.",
        },
        {
          title: "Peeling laminate and failed click-lock seams",
          description:
            "Cheap underlay, water intrusion, and improper locking leave laminate lifting at edges — especially near entries and kitchens. We remove failed product, address moisture sources, and reinstall with correct underlayment and seam protection.",
        },
        {
          title: "Cracked or loose tile and grout failure",
          description:
            "Tile cracks when installed over flexing subfloor or without proper thinset coverage. We demo damaged areas, stabilize substrate, waterproof wet zones, and retile with consistent grout lines and durable sealers.",
        },
        {
          title: "Rental carpet past its useful life",
          description:
            "Stained, odorous carpet in rental units drives tenant complaints and turnover costs. We replace with waterproof LVP or tile in high-wear areas — finishes that clean easily and survive multiple lease cycles.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why choose us for flooring in Edmonton",
      intro:
        "Flooring is permanent — you notice every seam and squeak. Our in-house installers treat prep and precision as non-negotiable.",
      reasons: [
        {
          title: "Subfloor prep included in scope",
          description:
            "We assess and correct subfloor issues before installation — not after your new floors fail.",
          icon: "shield-check",
        },
        {
          title: "Free on-site quotes",
          description:
            "Written pricing covers removal, prep, materials, and labour so you can compare options with confidence.",
          icon: "gift",
        },
        {
          title: "Product guidance for Alberta homes",
          description:
            "We recommend flooring suited to basements, pets, rentals, and main-floor living based on real Edmonton conditions.",
          icon: "home",
        },
        {
          title: "Reliable scheduling",
          description:
            "We confirm material lead times and install dates upfront, with 24-hour response on new quote requests.",
          icon: "calendar",
        },
      ],
    },
    process: {
      title: "Our flooring installation process",
      intro:
        "Professional flooring follows a sequence — skip a step and the finish suffers. Here is how we work in Edmonton homes every day.",
      steps: [
        {
          step: 1,
          title: "Measure, assess, and quote",
          description:
            "We review your space, check subfloor condition, discuss product options, and provide a written quote with material specifications and timeline.",
        },
        {
          step: 2,
          title: "Remove old flooring and prep",
          description:
            "Existing flooring comes out, subfloor is repaired and levelled, and products acclimate to your home's temperature and humidity before install day.",
        },
        {
          step: 3,
          title: "Precision installation",
          description:
            "Our installers lay flooring to manufacturer specs — proper stagger, expansion gaps, underlayment, and clean transitions at doorways, stairs, and adjoining rooms.",
        },
        {
          step: 4,
          title: "Trim, cleanup, and care instructions",
          description:
            "We reinstall or replace baseboards as scoped, remove debris, and explain maintenance and cure times so you protect your investment from day one.",
        },
      ],
    },
    serviceAreas: {
      title: "Flooring installation across the Capital Region",
      intro:
        "Home Solution Services installs flooring in Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc — in owner-occupied homes, new renovations, and rental turnovers. Our installers arrive with the equipment to handle everything from basement slabs to main-floor hardwood.",
    },
    cta: {
      headline: "Get flooring installed right the first time in Edmonton",
      description:
        "Request a free flooring quote from our in-house install team. We respond within 24 hours with product guidance and clear pricing — no middlemen.",
    },
    additionalFaq: [
      {
        question: "How long should flooring acclimate before installation in Alberta?",
        answer:
          "Most products need 48–72 hours in the installation environment. Solid and engineered wood may require longer depending on moisture differential. We build acclimation time into your schedule.",
      },
      {
        question: "Can you match new flooring to existing floors in part of my home?",
        answer:
          "We do our best to blend transitions when a full replacement is not needed. Bring samples or manufacturer details and we will advise on the closest match and transition strips.",
      },
      {
        question: "Do you install flooring on stairs and landings?",
        answer:
          "Yes. Stairs require additional labour for treads, risers, and nosing. Include stair counts in your quote request for accurate pricing.",
      },
      {
        question: "Is radiant floor heating compatible with your flooring products?",
        answer:
          "Many LVP, engineered wood, and tile products work with in-floor heat when installed correctly. We confirm compatibility with your heating system and product specs before ordering materials.",
      },
    ],
  },

  plumbers: {
    overview: {
      title: "Professional plumbing services for Edmonton homes and businesses",
      paragraphs: [
        "Plumbing problems escalate fast — a slow drip becomes ceiling damage, a frozen pipe bursts overnight, and a failing water heater leaves your family without hot water in the middle of an Edmonton winter. Home Solution Services provides professional plumbing repair, installation, and emergency response across the Capital Region with our own in-house plumbers, so you speak directly to the team that will be at your door — not a call centre or referral network.",
        "Our plumbers handle the full range of residential and light commercial work: leak detection and repair, drain cleaning, fixture replacement, toilet and faucet installs, sump pumps, water softeners, tank and tankless water heaters, and rough-in for renovations. We work in older homes with galvanized supply lines, new builds with PEX systems, and rental properties that need durable fixes tenants will not undo. Every job starts with upfront pricing in a written quote before work begins.",
        "Edmonton winters create specific plumbing risks — frozen hose bibs, inadequate pipe insulation in unheated crawlspaces, and water heaters working overtime in basements across St. Albert and Sherwood Park. Our team knows Alberta code requirements, pulls permits when needed, and installs products rated for local water conditions. Property managers rely on us for fast turnover repairs; homeowners call us when DIY has made the problem worse.",
        "As a local Edmonton contractor, Home Solution Services eliminates the middleman markup and communication gaps common with lead-generation platforms. Our plumbers carry proper credentials, arrive equipped for diagnosis, and explain your options clearly — repair versus replace, immediate fix versus scheduled upgrade. Urgent requests are prioritized and most quote inquiries receive a response within 24 hours.",
        "From a running toilet in a downtown condo to a full water heater replacement in Beaumont, our plumbing team delivers dependable service you can reach again if something needs follow-up. Request a free quote today — mark your request urgent if you have active leaking or no water — and we will get you sorted.",
      ],
    },
    commonProblems: {
      title: "Common plumbing problems in Edmonton",
      intro:
        "These plumbing issues show up daily in Edmonton homes and rental properties. Our in-house plumbers diagnose root causes — not just symptoms.",
      problems: [
        {
          title: "Frozen or burst pipes in winter",
          description:
            "Alberta cold snaps freeze pipes in exterior walls, garages, and crawlspaces. We thaw lines safely, repair bursts, and recommend insulation or rerouting to prevent repeat failures when temperatures drop below -25°C.",
        },
        {
          title: "Slow drains and recurring clogs",
          description:
            "Kitchen grease, hair, and tree roots in older sewer lines cause backups that store-bought drain cleaners cannot fix. We snake, camera, and hydro-jet where appropriate to restore flow and identify structural pipe issues.",
        },
        {
          title: "Running toilets and hidden water waste",
          description:
            "A running toilet can waste hundreds of litres daily — spiking utility bills in rental units and family homes alike. We rebuild or replace internals, fix flanges, and ensure wax seals stop leaks at the base.",
        },
        {
          title: "Water heater failure and inconsistent hot water",
          description:
            "Sediment buildup, failed elements, and aging tanks leave Edmonton homes with cold showers and rusty water. We service, repair, or replace tank and tankless units with proper venting, gas connections, and permit compliance.",
        },
        {
          title: "Leaking faucets and fixture corrosion",
          description:
            "Hard water and worn cartridges cause drips that stain fixtures and damage counters. We repair or upgrade faucets, shower valves, and supply lines with quality parts that survive daily use in busy households.",
        },
        {
          title: "Basement sump pump and flooding issues",
          description:
            "Spring melt and heavy rain overwhelm failing sump pumps in Edmonton basements. We install, test, and replace pumps, check discharge lines, and advise on backup systems for finished basement protection.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Edmonton trusts our plumbers",
      intro:
        "Plumbing is not a guess-and-patch trade. Our in-house plumbers bring credentials, clear pricing, and local experience to every call.",
      reasons: [
        {
          title: "Professional Alberta plumbers",
          description:
            "Our team holds the trade credentials required for code-compliant work, permits, and inspections across the Capital Region.",
          icon: "shield-check",
        },
        {
          title: "Upfront written quotes",
          description:
            "You know the cost before we wrench — no surprise line items after the job is half done.",
          icon: "gift",
        },
        {
          title: "Emergency prioritization",
          description:
            "Active leaks and no-water situations jump the queue. Mark your request urgent for fastest response.",
          icon: "clock",
        },
        {
          title: "Full-service plumbing",
          description:
            "From drips to water heaters to renovation rough-in — one local team handles it without passing you to strangers.",
          icon: "droplets",
        },
      ],
    },
    process: {
      title: "How our plumbing service works",
      intro:
        "Whether it is a scheduled upgrade or an urgent leak, our Edmonton plumbing process keeps you informed and your home protected.",
      steps: [
        {
          step: 1,
          title: "Describe the issue",
          description:
            "Submit a quote request with symptoms, photos, and urgency level. For emergencies, note active leaking or no water so we prioritize your call.",
        },
        {
          step: 2,
          title: "Diagnosis and upfront pricing",
          description:
            "Our plumber assesses the problem on site or from details provided, explains options, and gives written pricing before starting repairs.",
        },
        {
          step: 3,
          title: "Repair or installation",
          description:
            "We complete the work with proper parts and code-compliant methods — pulling permits for water heaters, gas lines, and major alterations when required.",
        },
        {
          step: 4,
          title: "Test and verify",
          description:
            "Every fix is pressure-tested and run before we leave. We walk you through what was done and flag any future maintenance worth planning.",
        },
      ],
    },
    serviceAreas: {
      title: "Plumbing service areas in Edmonton and beyond",
      intro:
        "Our in-house plumbers serve Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc — in homes, condos, rental properties, and small commercial spaces. Wherever you are in the Capital Region, Home Solution Services dispatches our own crew — not outsourced strangers.",
    },
    cta: {
      headline: "Need a plumber in Edmonton you can actually call back?",
      description:
        "Request a free plumbing quote from Home Solution Services. Our in-house team responds within 24 hours — mark urgent for active leaks.",
    },
    additionalFaq: [
      {
        question: "Do you pull permits for water heater replacements in Edmonton?",
        answer:
          "Yes. Tank and tankless installations often require permits and inspection. Our plumbers handle the process so your installation meets Alberta code and manufacturer warranty requirements.",
      },
      {
        question: "Can you help with low water pressure in older Edmonton homes?",
        answer:
          "Yes. Low pressure may stem from corroded supply lines, partially closed valves, or municipal side issues. We diagnose the cause and recommend repair or repiping options with clear pricing.",
      },
      {
        question: "Do you work on rental properties with tenant-occupied units?",
        answer:
          "Yes. We coordinate access with landlords and tenants for repairs that cannot wait until vacancy. Provide tenant contact details when booking so we can schedule efficiently.",
      },
      {
        question: "What should I do while waiting for an emergency plumber?",
        answer:
          "Shut off the nearest fixture valve or main water supply if safe to do so, contain water with towels or buckets, and avoid using affected drains. Submit an urgent request and we will respond as quickly as scheduling allows.",
      },
    ],
  },

  electricians: {
    overview: {
      title: "Professional electricians for Edmonton homes and renovations",
      paragraphs: [
        "Electrical work is not a weekend DIY project — Alberta code, permit requirements, and the risk of fire or shock mean your home's wiring needs a trained professional. Home Solution Services provides Master Electrician-led service across Edmonton and the Capital Region with our own in-house electrical team, handling everything from outlet installs and lighting upgrades to panel changes, rewiring, and EV charger installations.",
        "Older Edmonton neighbourhoods like Highlands, King Edward Park, and Westmount still have homes with undersized panels, ungrounded circuits, and aluminum wiring that struggles with modern loads from heat pumps, induction ranges, and home offices. Newer builds in the suburbs need dedicated circuits for hot tubs, garages, and Level 2 EV chargers. Our electricians assess capacity, recommend safe upgrades, and pull permits so work passes inspection the first time.",
        "Renovation clients depend on us for rough-in during kitchen and basement projects, pot light layouts, and smart switch installs. Landlords call us when tenants report tripping breakers, dead outlets, or outdated fixtures that fail inspection. Every job includes a written quote with scope, materials, and permit costs spelled out before we touch your panel.",
        "Working with Home Solution Services means one accountable local contractor — not a lead sold to the lowest bidder. Our electricians carry proper credentials, respond to quote requests within 24 hours, and explain your options in plain language. We coordinate with our renovation and handyman teams when projects overlap, keeping timelines tight and responsibility clear.",
        "Whether you need a few receptacles upgraded to GFCI in a Stony Plain rental, a 200-amp panel in a Spruce Grove bungalow, or an EV charger in your Leduc garage, our Edmonton electrical team delivers code-compliant work you can trust. Request a free quote and describe your project — we will outline the safest path forward.",
      ],
    },
    commonProblems: {
      title: "Electrical problems we resolve in Edmonton",
      intro:
        "Flickering lights and tripping breakers are symptoms — not diagnoses. Our in-house electricians find and fix the underlying issue safely.",
      problems: [
        {
          title: "Overloaded panels and tripping breakers",
          description:
            "Modern appliances and EV chargers push aging 100-amp panels beyond capacity. We calculate load, upgrade panels where needed, and balance circuits so breakers stop nuisance-tripping under normal use.",
        },
        {
          title: "Ungrounded or outdated two-prong outlets",
          description:
            "Older Edmonton homes often lack proper grounding — a safety risk for electronics and occupants. We install grounded circuits, GFCI protection where required, and update outlets to current code standards.",
        },
        {
          title: "Failing aluminum wiring connections",
          description:
            "1960s–70s aluminum branch wiring loosens at terminals and creates fire hazards. We pigtail with approved connectors, replace devices, and advise on long-term remediation options for affected homes.",
        },
        {
          title: "Insufficient lighting and poor layout",
          description:
            "Dark kitchens, shadowy basements, and single ceiling fixtures leave rooms unusable after dark. We design pot light layouts, add switches, and install fixtures that match how you actually use each space.",
        },
        {
          title: "Non-compliant DIY electrical work",
          description:
            "Previous owners often leave hidden splices, double-tapped breakers, and open junction boxes behind drywall. We trace circuits, correct violations, and bring work up to Alberta Electrical Code before covering walls.",
        },
        {
          title: "Missing EV charger capacity",
          description:
            "Plug-in chargers on shared circuits trip breakers and charge slowly. We install dedicated 240V lines, appropriate breakers, and permitted Level 2 chargers sized for your vehicle and panel capacity.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why choose Home Solution Services electricians",
      intro:
        "Electrical safety demands professional expertise and clear accountability. Our in-house electricians deliver both across the Edmonton metro.",
      reasons: [
        {
          title: "Master Electricians",
          description:
            "Code-compliant work, proper permits, and inspection-ready installations on every project — from small fixes to panel upgrades.",
          icon: "shield-check",
        },
        {
          title: "Written quotes before work",
          description:
            "Scope, materials, and permit fees are documented upfront so you can approve with confidence.",
          icon: "gift",
        },
        {
          title: "EV and modern load expertise",
          description:
            "We install EV chargers, heat pump circuits, and workshop subpanels sized for how Edmonton homes actually use power today.",
          icon: "zap",
        },
        {
          title: "Fast local response",
          description:
            "Quote requests are answered within 24 hours. We schedule efficiently across Edmonton and surrounding communities.",
          icon: "clock",
        },
      ],
    },
    process: {
      title: "Our electrical service process",
      intro:
        "Safe electrical work follows a disciplined process. Here is what to expect when you hire our Edmonton electricians.",
      steps: [
        {
          step: 1,
          title: "Project consultation",
          description:
            "Describe your electrical needs — upgrades, new circuits, lighting, or troubleshooting. We ask about your panel, home age, and any known issues to scope accurately.",
        },
        {
          step: 2,
          title: "On-site assessment and quote",
          description:
            "For most projects we inspect your panel and work area, calculate load if needed, and provide a written quote including permit requirements.",
        },
        {
          step: 3,
          title: "Permitted installation",
          description:
            "Our electricians complete rough-in and finish work to Alberta code, schedule inspections at required stages, and label circuits clearly at your panel.",
        },
        {
          step: 4,
          title: "Testing and documentation",
          description:
            "We test every circuit, confirm GFCI and AFCI protection where required, and leave you with inspection approval and care notes for new equipment.",
        },
      ],
    },
    serviceAreas: {
      title: "Electrical services across the Capital Region",
      intro:
        "Our in-house electricians work throughout Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc — in single-family homes, condos, rental properties, and renovation sites. Home Solution Services dispatches our own crew across the metro area with fully stocked vans for common residential work.",
    },
    cta: {
      headline: "Upgrade your Edmonton home's electrical safely",
      description:
        "Request a free electrical quote from our in-house team. We respond within 24 hours with clear scope and permit guidance — no referral runaround.",
    },
    additionalFaq: [
      {
        question: "How do I know if my Edmonton home needs a panel upgrade?",
        answer:
          "Frequent breaker trips, flickering when large appliances start, an existing 100-amp panel with no room for new circuits, or plans for EV charging and heat pumps are common signs. We assess load and recommend upgrades when capacity is insufficient.",
      },
      {
        question: "Can you install outdoor receptacles and hot tub circuits?",
        answer:
          "Yes. Outdoor and wet-location work requires GFCI protection and weather-rated hardware. We install dedicated circuits sized for hot tubs, saunas, and exterior outlets to code.",
      },
      {
        question: "Do you coordinate electrical rough-in during renovations?",
        answer:
          "Yes. We work alongside our renovation team and other trades, completing rough-in before drywall and finish work after cabinets and fixtures are ready.",
      },
      {
        question: "Are tamper-resistant outlets required in rental properties?",
        answer:
          "Current code requires tamper-resistant receptacles in many residential locations. We advise on upgrade requirements during turnover work and bring older units closer to current standards where practical.",
      },
    ],
  },

  landscapers: {
    overview: {
      title: "Landscaping and yard care for Edmonton properties",
      paragraphs: [
        "Your yard is the first thing visitors and tenants notice — and in Edmonton, keeping it healthy means fighting short growing seasons, heavy clay soil, spring melt drainage, and summer drought restrictions. Home Solution Services provides landscaping, lawn care, garden bed work, sod installation, and seasonal cleanup through our own in-house crew, helping homeowners and property managers maintain curb appeal without coordinating a different contractor every season.",
        "We serve detached homes, duplexes, and rental properties across the Capital Region with services ranging from one-time yard overhauls to recurring maintenance plans. Spring cleanup removes winter debris and prepares beds for growing season; summer mowing and trimming keep lawns presentable; fall cleanups protect lawns from smothering leaves before snow arrives. Our landscapers understand Edmonton soil conditions, municipal watering rules, and the plant varieties that survive Alberta Zone 3 winters.",
        "Property managers use us to maintain multiple addresses on predictable schedules — essential when curb appeal affects leasing speed in competitive neighbourhoods. Homeowners call us when overgrown hedges, bare patches, or poor grading turn the backyard into a problem instead of a retreat. Every project begins with a free quote outlining scope, frequency, and pricing.",
        "As a local Edmonton contractor, we employ our own landscaping team rather than passing your property to unknown subcontractors. You deal directly with Home Solution Services for scheduling, scope changes, and quality concerns. We respond to new quote requests within 24 hours and prioritize spring booking early so your yard is ready when the snow melts.",
        "From refreshing a front yard in St. Albert to installing sod at a new build in Beaumont or maintaining a portfolio of rentals in Sherwood Park, our landscaping team delivers reliable outdoor care. Request a free quote and tell us your property size, current condition, and whether you need a one-time project or ongoing service.",
      ],
    },
    commonProblems: {
      title: "Landscaping problems common in Edmonton yards",
      intro:
        "Capital Region yards face unique soil, drainage, and climate challenges. These are the landscaping issues our crew addresses throughout the season.",
      problems: [
        {
          title: "Poor drainage and standing water",
          description:
            "Clay soil and improper grading leave pools of meltwater near foundations and dead patches in lawns. We regrade, add swales, extend downspouts, and improve surface drainage so water moves away from structures.",
        },
        {
          title: "Patchy lawns and compacted soil",
          description:
            "High-traffic areas, pet damage, and years of neglect create thin, weed-filled turf. We aerate, overseed, top-dress, and sod where needed to restore even coverage that survives Edmonton summers.",
        },
        {
          title: "Overgrown shrubs and neglected beds",
          description:
            "Unmaintained hedges, invasive weeds, and buried edging make properties look abandoned — hurting rental appeal and neighbour relations. We cut back, reshape, weed deeply, and refresh mulch for a clean, managed appearance.",
        },
        {
          title: "Winter damage to trees and shrubs",
          description:
            "Heavy snow, chinook thaws, and road salt stress plants across Edmonton. We prune broken branches, remove dead wood, and advise on replacements suited to local hardiness zones.",
        },
        {
          title: "Bare new-build yards",
          description:
            "New construction in suburbs like Windermere and Lewis Farms often leaves compacted clay and no topsoil. We grade, amend soil, install sod or seed, and establish beds so your yard is usable — not a mud pit.",
        },
        {
          title: "Landlord yards falling behind schedule",
          description:
            "Rental properties with inconsistent mowing and cleanup draw complaints and bylaw attention. We put properties on recurring maintenance plans with reliable visit schedules through the growing season.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Edmonton property owners choose our landscapers",
      intro:
        "Consistent yard care requires a team that shows up on schedule and knows local conditions. That is what our in-house landscaping crew delivers.",
      reasons: [
        {
          title: "Reliable seasonal scheduling",
          description:
            "Spring, summer, and fall services are booked in advance so your yard never falls months behind.",
          icon: "calendar",
        },
        {
          title: "Free property quotes",
          description:
            "One-time projects and maintenance plans are quoted in writing before the first visit — no hidden surcharges.",
          icon: "gift",
        },
        {
          title: "Edmonton climate expertise",
          description:
            "We choose plants, timing, and methods suited to short seasons, clay soil, and winter hardiness requirements.",
          icon: "tree",
        },
        {
          title: "Direct local team",
          description:
            "Your property is serviced by Home Solution Services employees — not a rotating cast of unknown subcontractors.",
          icon: "shield-check",
        },
      ],
    },
    process: {
      title: "How our landscaping service works",
      intro:
        "Whether you need a single spring cleanup or year-round maintenance, our process keeps your Edmonton yard on track.",
      steps: [
        {
          step: 1,
          title: "Property assessment",
          description:
            "Tell us your address, yard size, and goals — cleanup, new sod, bed refresh, or recurring mowing. Photos help us quote accurately.",
        },
        {
          step: 2,
          title: "Written quote and schedule",
          description:
            "We provide pricing for one-time or recurring service and propose visit dates aligned with Edmonton's growing season.",
        },
        {
          step: 3,
          title: "Service delivery",
          description:
            "Our crew completes agreed work — cutting, trimming, bed maintenance, sod install, or grading — and removes debris from site.",
        },
        {
          step: 4,
          title: "Ongoing care or seasonal follow-up",
          description:
            "For maintenance clients we return on schedule through the season. One-time projects include recommendations for keeping results looking good.",
        },
      ],
    },
    serviceAreas: {
      title: "Landscaping across Edmonton and the Capital Region",
      intro:
        "We maintain and improve yards in Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc — for homeowners, landlords, and property managers with single or multiple addresses. Home Solution Services brings consistent outdoor care wherever your property sits in the metro area.",
    },
    cta: {
      headline: "Book Edmonton landscaping from a team that shows up",
      description:
        "Request a free landscaping quote from Home Solution Services. Our in-house crew responds within 24 hours — spring slots fill early, so reach out soon.",
    },
    additionalFaq: [
      {
        question: "Do you haul away yard waste after cleanup?",
        answer:
          "Yes. Spring and fall cleanups include bagging and removal of debris as scoped in your quote. Large branch removal or stump grinding may be quoted separately.",
      },
      {
        question: "Can you maintain yards at multiple rental properties on one schedule?",
        answer:
          "Yes. Property managers often bundle addresses into a recurring plan. Provide your property list and we will quote per site or as a portfolio package.",
      },
      {
        question: "When is the best time to lay sod in Edmonton?",
        answer:
          "Late spring and early fall offer cooler temperatures and adequate moisture for sod establishment. We advise on timing and watering schedules based on current conditions.",
      },
      {
        question: "Do you install garden beds and decorative stone?",
        answer:
          "Yes. Bed creation, edging, mulch, river rock, and basic hardscape elements are available. Describe your design goals in your quote request for accurate scoping.",
      },
    ],
  },

  cleaners: {
    overview: {
      title: "Professional cleaning services for Edmonton homes and rentals",
      paragraphs: [
        "A clean home reduces stress, protects surfaces, and — for landlords — speeds up turnover between tenants. Home Solution Services provides residential and commercial cleaning across Edmonton and the Capital Region with our own employed cleaning teams, so the crew quoted is the crew at your door. No marketplace randomness, no middleman fees — just consistent, accountable service.",
        "We offer standard maintenance cleans, deep cleans, move-in and move-out cleaning, post-construction cleanup, and recurring schedules for busy families and property portfolios. Edmonton rentals in Oliver, Garneau, and suburban neighbourhoods like Summerside often need move-out cleaning that meets landlord inspection standards — we know what property managers look for and scope accordingly. Homeowners call us for seasonal deep cleans, pre-holiday refreshes, and help when life gets too busy for scrubbing baseboards.",
        "Our cleaners bring equipment and professional-grade products, with eco-friendly options available on request. We work in houses, condos, apartments, and office spaces with clear checklists so nothing obvious is missed — kitchens, bathrooms, floors, fixtures, and the details that make a space feel genuinely clean rather than quickly wiped. Quotes are free, written, and tailored to your square footage and condition.",
        "Property managers appreciate one vendor for multiple units and reliable scheduling between lease dates. Families appreciate the same team returning on a bi-weekly rhythm who learns the layout and priorities of their home. Home Solution Services responds to new requests within 24 hours and stands behind our work — if something is missed, we want to know so we can fix it.",
        "Whether you need a one-time deep clean before guests arrive, recurring service in St. Albert, or move-out cleaning across a Leduc duplex portfolio, our Edmonton cleaning team is ready. Request a free quote and describe your space, preferred products, and timeline.",
      ],
    },
    commonProblems: {
      title: "Cleaning situations we handle in Edmonton",
      intro:
        "These are the cleaning challenges Edmonton homeowners, tenants, and property managers bring to us most often.",
      problems: [
        {
          title: "Move-out cleans that fail inspection",
          description:
            "Landlords reject turnovers when ovens, tubs, and inside cabinets are skipped. Our move-out checklist covers appliances, fixtures, baseboards, and windowsills to inspection standard so deposits release and new tenants move in on time.",
        },
        {
          title: "Post-renovation dust everywhere",
          description:
            "Drywall dust settles on every surface after construction — inside vents, on light fixtures, and across new floors. We HEPA-vacuum, wipe fine particulate, and polish so your renovated space is actually livable.",
        },
        {
          title: "Deep clean backlog in busy households",
          description:
            "When weekly tidying never reaches ovens, fridges, or shower grout, grime compounds. We reset kitchens and bathrooms, detail floors, and establish a baseline you can maintain or book us to keep up.",
        },
        {
          title: "Pet odours and hair buildup",
          description:
            "Carpet, upholstery, and baseboards trap pet hair and odours that regular vacuuming misses. We treat high-impact areas, clean hard surfaces thoroughly, and advise on maintenance between professional visits.",
        },
        {
          title: "Rental units between short-term tenants",
          description:
            "Quick turnarounds demand reliable crews who arrive on date and finish on time. We coordinate with property managers, follow lockbox access protocols, and document completion so remote owners stay informed.",
        },
        {
          title: "Office and commercial spaces losing professionalism",
          description:
            "Staff kitchens, washrooms, and client-facing areas reflect your business. We provide scheduled commercial cleaning with consistent teams who learn your layout and priority zones.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Edmonton chooses Home Solution Services cleaners",
      intro:
        "Cleaning quality depends on consistent teams, clear scope, and accountability. Our in-house model delivers all three.",
      reasons: [
        {
          title: "Employed cleaning teams",
          description:
            "The same professional standards apply on every visit — no anonymous gig workers rotating through your home.",
          icon: "shield-check",
        },
        {
          title: "Free custom quotes",
          description:
            "Pricing reflects your square footage, condition, and clean type. No flat-rate surprises for larger or dirtier spaces.",
          icon: "gift",
        },
        {
          title: "Supplies included",
          description:
            "We bring equipment and products. Eco-friendly options are available when you request them.",
          icon: "sparkles",
        },
        {
          title: "Flexible recurring schedules",
          description:
            "Weekly, bi-weekly, or monthly plans keep homes and rentals consistently clean without rebooking every time.",
          icon: "calendar",
        },
      ],
    },
    process: {
      title: "How our cleaning service works",
      intro:
        "Booking a professional clean in Edmonton should be simple. Here is our process from quote to sparkling finish.",
      steps: [
        {
          step: 1,
          title: "Share your space and needs",
          description:
            "Tell us property type, size, clean level (standard, deep, or move-out), and preferred dates. Photos of particularly dirty areas help us quote accurately.",
        },
        {
          step: 2,
          title: "Receive a written quote",
          description:
            "We confirm scope, estimated duration, and price. Recurring clients receive schedule options with discounted rates.",
        },
        {
          step: 3,
          title: "Professional clean on site",
          description:
            "Our team arrives with supplies, follows the agreed checklist, and respects your home — including lockbox and tenant access protocols for rentals.",
        },
        {
          step: 4,
          title: "Walkthrough and rebook",
          description:
            "We confirm satisfaction before leaving. Book your next visit or set up recurring service so your space stays consistently maintained.",
        },
      ],
    },
    serviceAreas: {
      title: "Cleaning services across the Capital Region",
      intro:
        "Home Solution Services cleans homes, condos, rentals, and offices in Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc. Whether you manage one home or a portfolio of units, our local teams travel throughout the metro area.",
    },
    cta: {
      headline: "Book a cleaner in Edmonton you can count on",
      description:
        "Request a free cleaning quote from our in-house team. We respond within 24 hours with scope and pricing — no marketplace middlemen.",
    },
    additionalFaq: [
      {
        question: "Do I need to be home during the cleaning?",
        answer:
          "Not necessarily. Many clients provide key or lockbox access — especially landlords between tenants. Let us know your preference when booking and we follow your access instructions.",
      },
      {
        question: "What is the difference between a standard and deep clean?",
        answer:
          "Standard cleans maintain already-tidy homes — surfaces, floors, bathrooms, and kitchens. Deep cleans add detail work like inside appliances, baseboards, grout scrubbing, and built-up grime removal.",
      },
      {
        question: "Can you clean after hours at my commercial space?",
        answer:
          "Yes. We schedule office and retail cleaning before opening or after closing to minimize disruption. Share building access requirements when requesting a quote.",
      },
      {
        question: "What if I am not satisfied with an area?",
        answer:
          "Contact us within 24 hours and we will address missed items promptly. We stand behind our work and want every client — homeowner or property manager — fully satisfied.",
      },
    ],
  },

  "deck-fence": {
    overview: {
      title: "Deck and fence building, repair, and staining in Edmonton",
      paragraphs: [
        "Decks and fences take the hardest weather Edmonton can deliver — UV exposure, hail, heavy snow load, and repeated freeze-thaw cycles that warp boards, loosen posts, and strip stain from wood every season. Home Solution Services builds, repairs, and finishes outdoor structures with our own in-house crew, giving you one accountable team for structural work and protective coatings.",
        "We construct new decks and fences to suit Alberta conditions — proper footings below the frost line, corrosion-resistant fasteners, and materials chosen for longevity whether you prefer cedar, pressure-treated lumber, or composite decking. Repair work addresses rotted joists, leaning posts, failed gate hardware, and railings that no longer meet code. Staining and sealing protect wood from Edmonton's dry summers and wet springs, extending the life of your investment.",
        "Homeowners in neighbourhoods from Riverbend to Castle Downs upgrade outdoor living spaces for summer entertaining; landlords install durable fencing for privacy and security between rental yards. We advise on City of Edmonton permit requirements for elevated decks and handle documentation when your project needs approval. Every job starts with a free written quote covering materials, labour, and timeline.",
        "Working directly with Home Solution Services eliminates the subcontractor chain common with referral websites. Our deck and fence team shows up on schedule, communicates scope changes clearly, and cleans the site when finished. Quote requests receive a response within 24 hours, and we book outdoor projects during weather windows that allow proper curing of stains and concrete footings.",
        "Whether you need a sagging fence line replaced in Sherwood Park, a new backyard deck in Beaumont, or seasonal staining before winter in Stony Plain, our Edmonton outdoor construction team has the experience and tools for the job. Request a free quote and share photos of your current structure — we will outline repair versus rebuild options honestly.",
      ],
    },
    commonProblems: {
      title: "Deck and fence problems in Edmonton",
      intro:
        "Outdoor structures fail predictably in Alberta if they are built wrong or left unmaintained. These are the deck and fence issues we fix across the Capital Region.",
      problems: [
        {
          title: "Rotting deck boards and soft joists",
          description:
            "Water pooling on boards and poor ventilation underneath rot joists from the top down. We replace compromised framing, improve drainage and airflow, and install decking rated for ground-contact and exposure.",
        },
        {
          title: "Heaving or leaning fence posts",
          description:
            "Posts set too shallow heave with frost and lean within seasons. We extract failed posts, dig below the frost line, set posts in concrete, and plumb lines that stay straight through Alberta winters.",
        },
        {
          title: "Failed stain and grey weathered wood",
          description:
            "Sun and moisture strip unprotected wood to grey splinters that absorb water. We wash, sand, and apply quality stain or sealant so decks and fences repel moisture and maintain appearance longer.",
        },
        {
          title: "Unsafe railing and stair systems",
          description:
            "Loose balusters, wobbly rails, and uneven steps create fall hazards — especially on elevated decks. We rebuild to current height and spacing requirements so your structure is safe for family and guests.",
        },
        {
          title: "Gate sag and hardware failure",
          description:
            "Heavy gates pull hinges and latch poorly without proper bracing. We install adjustable hardware, diagonal bracing, and latches that align season after season despite wood movement.",
        },
        {
          title: "Permit and code issues on existing decks",
          description:
            "Older decks may lack proper footings, ledger flashing, or guardrails. We assess against current standards, advise on compliance paths, and rebuild sections that fail inspection or insurance requirements.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why choose us for decks and fences",
      intro:
        "Outdoor builds need structural integrity and finishes that survive Alberta weather. Our in-house deck and fence crew delivers both.",
      reasons: [
        {
          title: "Built for Alberta winters",
          description:
            "Footings, fasteners, and materials are selected for freeze-thaw durability — not just summer aesthetics.",
          icon: "shield-check",
        },
        {
          title: "Free project quotes",
          description:
            "Repair or rebuild options are priced in writing before we dig or demo — so you choose with full information.",
          icon: "gift",
        },
        {
          title: "Permit guidance included",
          description:
            "We advise on City of Edmonton deck permit requirements and handle documentation when your project needs approval.",
          icon: "clipboard-list",
        },
        {
          title: "Repair and build expertise",
          description:
            "One team handles structural fixes, new construction, and staining — no juggling separate contractors.",
          icon: "home",
        },
      ],
    },
    process: {
      title: "Our deck and fence project process",
      intro:
        "Outdoor projects need proper sequencing and fair weather. Here is how we manage deck and fence work in Edmonton.",
      steps: [
        {
          step: 1,
          title: "Site review and options",
          description:
            "Share photos and measurements. We inspect on site when needed, compare repair versus rebuild, and quote materials and labour in writing.",
        },
        {
          step: 2,
          title: "Permits and scheduling",
          description:
            "If permits are required, we prepare submissions before construction. Install dates are booked during suitable weather for concrete and staining.",
        },
        {
          step: 3,
          title: "Build or repair",
          description:
            "Our crew completes demolition, footing work, framing, fencing, decking, and railings to spec — with progress updates on multi-day projects.",
        },
        {
          step: 4,
          title: "Stain, seal, and final inspection",
          description:
            "We finish with protective coatings where scoped, clean the site, and walk you through maintenance intervals to maximize lifespan in Edmonton conditions.",
        },
      ],
    },
    serviceAreas: {
      title: "Deck and fence services across the Capital Region",
      intro:
        "We build, repair, and stain decks and fences in Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc. From urban infill yards to acreage-style properties on the metro edge, Home Solution Services brings our own crew to your outdoor project.",
    },
    cta: {
      headline: "Fix or build your Edmonton deck and fence before the season turns",
      description:
        "Request a free quote from Home Solution Services. Our in-house outdoor crew responds within 24 hours — book early for spring and summer slots.",
    },
    additionalFaq: [
      {
        question: "Is composite decking worth it in Edmonton?",
        answer:
          "Composite costs more upfront but reduces staining and rot maintenance — appealing for busy homeowners and landlords. We install both wood and composite and will recommend based on budget, aesthetics, and maintenance tolerance.",
      },
      {
        question: "How often should I restain my Edmonton deck?",
        answer:
          "Most horizontal wood surfaces need restaining every 2–3 years depending on sun exposure and product quality. Vertical fence boards may last longer. We inspect and advise during quoting.",
      },
      {
        question: "Can you replace one section of fence without redoing the whole line?",
        answer:
          "Often yes. We match existing style where possible and ensure new posts are set properly even when adjacent old posts are still standing — preventing the same failure from spreading.",
      },
      {
        question: "Do you remove and dispose of old decking materials?",
        answer:
          "Yes. Demolition and haul-away are scoped in your quote when replacing existing structures. We leave the site clean and ready for new construction.",
      },
    ],
  },

  "home-maintenance": {
    overview: {
      title: "Seasonal home maintenance for Edmonton property owners",
      paragraphs: [
        "Homes in Edmonton need regular upkeep to survive Alberta's extremes — furnaces checked before winter, hose bibs shut off in fall, filters changed, caulk inspected, and the small repairs that prevent expensive emergencies later. Home Solution Services provides seasonal and recurring home maintenance for homeowners, landlords, and property managers through our own in-house team, so one request covers multiple tasks instead of calling a different contractor for every item.",
        "Our maintenance visits combine handyman repairs, basic system checks, exterior touch-ups, and landlord turnover support tailored to your property. We work through checklists developed for local conditions: weatherstripping before cold weather, downspout clearance after leaf drop, smoke and CO detector testing, garage door adjustments, and the rental-specific tasks that keep units compliant and tenant-ready. You receive a written quote for one-time visits or discounted recurring plans.",
        "Property managers with portfolios across Edmonton, Sherwood Park, and St. Albert use us to standardize care across addresses — reducing vacancy days and emergency calls from deferred maintenance. Homeowners book seasonal tune-ups when they want a professional walkthrough without dedicating a weekend to ladder work and hardware store runs. We respond to new requests within 24 hours and schedule visits efficiently across the Capital Region.",
        "Choosing Home Solution Services means working with a local contractor who employs the people doing the work — not a referral service that disappears after booking. We document completed tasks, flag items that need follow-up trades, and coordinate with our plumbing, electrical, and cleaning teams when maintenance reveals larger scope. Accountability stays in one place.",
        "Whether you own a single bungalow in Spruce Grove, manage duplexes in Mill Woods, or oversee commercial rentals in downtown Edmonton, our maintenance team keeps properties functional and presentable year-round. Request a free quote and share your property type, unit count, and whether you want a seasonal visit or ongoing plan.",
      ],
    },
    commonProblems: {
      title: "Home maintenance issues we prevent and fix",
      intro:
        "Deferred maintenance becomes emergency repair in Edmonton winters. These are the tasks our maintenance team handles before small problems grow.",
      problems: [
        {
          title: "Skipped seasonal furnace and filter service",
          description:
            "Dirty filters and unchecked furnaces fail during the first cold snap — often on the coldest night of the year. We replace filters, check thermostat operation, and flag issues worth a specialist HVAC follow-up.",
        },
        {
          title: "Exterior water lines not winterized",
          description:
            "Hose bibs and irrigation left pressurized freeze and burst inside walls. We shut off exterior lines, drain fixtures, and inspect caulking around penetrations before hard frost arrives.",
        },
        {
          title: "Gutter and downspout blockages",
          description:
            "Leaves and debris cause ice dams and foundation pooling when meltwater overflows. We clear gutters, extend downspouts away from foundations, and note sections needing repair.",
        },
        {
          title: "Smoke and CO detector gaps",
          description:
            "Expired or missing detectors fail landlord inspections and put occupants at risk. We test units, replace batteries and expired devices, and document compliance for property files.",
        },
        {
          title: "Minor repairs stacking into turnover delays",
          description:
            "Loose handrails, dripping faucets, and broken blinds delay re-renting when bundled at move-out. We work through landlord punch lists efficiently so units return to market faster.",
        },
        {
          title: "No maintenance plan for rental portfolios",
          description:
            "Reactive-only care means higher long-term costs and tenant churn. We offer scheduled quarterly or seasonal visits that catch issues early across multiple addresses.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Edmonton property owners trust our maintenance team",
      intro:
        "Effective maintenance is about consistency, local knowledge, and one team that already knows your property. That is the Home Solution Services model.",
      reasons: [
        {
          title: "One team for multiple tasks",
          description:
            "Handyman repairs, seasonal prep, and basic checks in a single visit — fewer vendors to manage.",
          icon: "clipboard-list",
        },
        {
          title: "Free maintenance quotes",
          description:
            "One-time and recurring plans are priced in writing with clear task lists before we schedule.",
          icon: "gift",
        },
        {
          title: "Landlord-focused workflows",
          description:
            "We understand turnover timelines, lockbox access, and documentation property managers need.",
          icon: "users",
        },
        {
          title: "Capital Region scheduling",
          description:
            "We route maintenance visits across Edmonton and surrounding communities efficiently year-round.",
          icon: "map-pin",
        },
      ],
    },
    process: {
      title: "How our home maintenance service works",
      intro:
        "From a single seasonal tune-up to a multi-property maintenance plan, our process is built for busy Edmonton owners and managers.",
      steps: [
        {
          step: 1,
          title: "Define your maintenance needs",
          description:
            "Tell us property type, location, and whether you want seasonal, annual, or recurring visits. Share known issues or a landlord punch list if you have one.",
        },
        {
          step: 2,
          title: "Custom quote and plan",
          description:
            "We propose a task checklist and pricing for one-time or scheduled service. Recurring plans include discounted rates and priority booking.",
        },
        {
          step: 3,
          title: "On-site maintenance visit",
          description:
            "Our team completes agreed tasks, documents work done, and notes any items needing follow-up with specialized trades.",
        },
        {
          step: 4,
          title: "Schedule next visit",
          description:
            "Seasonal clients are rebooked automatically. We remind you before furnace season, spring thaw, and other critical maintenance windows in Edmonton.",
        },
      ],
    },
    serviceAreas: {
      title: "Home maintenance across Edmonton and the Capital Region",
      intro:
        "Home Solution Services maintains owner-occupied homes and rental portfolios in Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Beaumont, and Leduc. One maintenance team, one point of contact — wherever your properties are in the metro area.",
    },
    cta: {
      headline: "Stay ahead of Edmonton weather with planned home maintenance",
      description:
        "Request a free maintenance quote from Home Solution Services. Our in-house team responds within 24 hours with a custom checklist — no middlemen.",
    },
    additionalFaq: [
      {
        question: "What is included in a seasonal maintenance visit?",
        answer:
          "Typical spring and fall visits cover filter changes, detector testing, caulking inspection, downspout checks, hose bib winterization or spring activation, and a short list of minor handyman repairs scoped in your plan.",
      },
      {
        question: "Can maintenance visits happen while tenants are in place?",
        answer:
          "Yes. We coordinate with tenants for access, respect notice requirements, and complete non-disruptive tasks efficiently. Landlords provide tenant contact details when booking.",
      },
      {
        question: "Do you maintain both houses and condo units?",
        answer:
          "Yes. Scope adjusts for condos — often interior-focused with owner approval for any common-element work. Share your building rules when requesting a quote.",
      },
      {
        question: "How does recurring maintenance pricing compare to one-time visits?",
        answer:
          "Recurring seasonal or quarterly plans are priced lower per visit than ad-hoc bookings because we route efficiently and know your property history. We outline both options in your quote.",
      },
    ],
  },
};
