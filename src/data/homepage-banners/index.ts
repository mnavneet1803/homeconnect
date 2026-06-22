/**
 * Homepage marketing banners and service photography.
 * Assets live under /public/images/homepage/.
 */

export interface HomepageBanner {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const DIR = "/images/homepage";

export const homePromoBanner: HomepageBanner = {
  src: `${DIR}/home-solutions-promo-banner.png`,
  alt: "Home Solution Services — one call for handyman, cleaning, painting, plumbing, electrical and maintenance across Edmonton",
  width: 1024,
  height: 426,
};

export const handymanServicesBanner: HomepageBanner = {
  src: `${DIR}/handyman-services-banner.png`,
  alt: "Edmonton handyman services — furniture assembly, TV mounting, drywall, painting, plumbing, electrical and general repairs",
  width: 1024,
  height: 709,
};

export const furnitureBrandsBanner: HomepageBanner = {
  src: `${DIR}/furniture-assembly-workshop.jpg`,
  alt: "Canadian furniture assembly service in Edmonton — IKEA, JYSK, Wayfair, The Brick and more leading brands",
  width: 1024,
  height: 558,
};

export const cleaningServicesBanner: HomepageBanner = {
  src: `${DIR}/cleaning-services-banner.png`,
  alt: "Professional cleaning services in Edmonton — reliable, thorough and affordable for homes, apartments, condos and businesses",
  width: 807,
  height: 532,
};

export const paintingRenovationCollage: HomepageBanner = {
  src: `${DIR}/painting-renovation-collage.png`,
  alt: "Edmonton painting and renovation work — interior painting, exterior siding, fencing, deck building and finishing",
  width: 1024,
  height: 558,
};

export const paintingHighRiseLiving: HomepageBanner = {
  src: `${DIR}/painting-high-rise-living.jpg`,
  alt: "Professional house painting in Edmonton — single-family homes, multi-unit buildings and high-rise living",
  width: 1024,
  height: 558,
};

export const modernKitchenPhoto: HomepageBanner = {
  src: `${DIR}/modern-kitchen.png`,
  alt: "Spotless modern kitchen after professional cleaning and home maintenance in Edmonton",
  width: 1024,
  height: 664,
};

export const cleaningGalleryPhotos: HomepageBanner[] = [
  {
    src: `${DIR}/residential-bedroom.png`,
    alt: "Residential bedroom cleaning service in Edmonton homes and apartments",
    width: 247,
    height: 179,
  },
  {
    src: `${DIR}/move-in-move-out.png`,
    alt: "Move-in and move-out cleaning with packing boxes in an Edmonton home",
    width: 245,
    height: 181,
  },
  {
    src: `${DIR}/post-construction-cleaning.png`,
    alt: "Post-construction and deep cleaning in Edmonton — ladders, dust removal and final touch-ups",
    width: 248,
    height: 176,
  },
  {
    src: `${DIR}/commercial-office.png`,
    alt: "Commercial office cleaning services across Edmonton and the Capital Region",
    width: 246,
    height: 175,
  },
];
