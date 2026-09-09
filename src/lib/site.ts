export const site = {
  name: "Bourke Construction",
  legalName: "Bourke Construction Inc.",
  tagline: "Orange County remodeling since 1996",
  phoneDisplay: "(714) 488-8325",
  phoneTel: "tel:+17144888325",
  email: "bourkecon@yahoo.com",
  hours: "Monday–Friday, 7:00am–5:00pm PT",
  originalUrl: "https://www.bourkeconstructionoc.com/",
  instagram: "https://www.instagram.com/bourkecon.inc/",
  houzz:
    "https://www.houzz.com/professionals/general-contractors/bourke-construction-inc-pfvwus-pf~595610126",
  cslbCheck:
    "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx",
  license: {
    number: "717199",
    classification: "B — General Building",
    status: "Current and active",
    issued: "January 9, 1996",
    expires: "April 30, 2027",
    address: "1039 South Armstrong Circle, Anaheim, CA 92807",
    verifiedOn: "September 8, 2026",
    source:
      "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=717199",
  },
  offices: [
    { name: "North Orange County", city: "Anaheim" },
    { name: "South Orange County", city: "Laguna Beach" },
  ],
  founded: 1996,
  owner: {
    name: "Ed Bourke",
    legalName: "Edmund James Bourke",
    title: "Owner",
    bio: "Ed has owned Bourke Construction Inc. and served Orange County since 1996. Before founding the company he worked in construction for fifteen years in London. First-party materials describe thirty-five years of construction experience.",
  },
  team: [
    {
      name: "Ed Bourke",
      title: "Owner",
      bio: "Ed has owned Bourke Construction Inc. and served Orange County, CA since 1996. Prior to owning Bourke Construction, he worked in construction for fifteen years in London.",
    },
    {
      name: "Patrick Bourke",
      title: "Project Manager",
      bio: "Pat has five years of experience in the construction industry. He also has a passion for music and cooking, once studying at a culinary institute in Los Angeles.",
    },
  ],
  proof: {
    since: "1996",
    combinedYears: "75 years of combined team experience",
    houzz:
      "Best of Houzz Service Award in 2026, continuing an eleven-year streak",
    materials: "Supplier discounts on materials — you’ll pay what we pay",
    nari: "First-party site states the company is a bonded and licensed member of NARI",
    azek:
      "Laguna Beach deck installation featured in Azek’s nationwide “Smarter than Wood” campaign",
    gcMag:
      "Featured in General Contractors Magazine among 15 general contractors in Laguna Beach",
    gcMagUrl:
      "https://www.generalcontractors.org/the-15-best-general-contractors-in-laguna-beach-california/",
  },
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const cities = [
  "Aliso Viejo",
  "Anaheim Hills",
  "Costa Mesa",
  "Coto de Caza",
  "Dana Point",
  "Fountain Valley",
  "Fullerton",
  "Huntington Beach",
  "Huntington Harbor",
  "Irvine",
  "Ladera Ranch",
  "Laguna Hills",
  "Laguna Niguel",
  "Laguna Beach",
  "Lake Forest",
  "Mission Viejo",
  "Newport Beach",
  "Orange Acres",
  "Orange Hills",
  "Placentia",
  "San Clemente",
  "San Juan Capistrano",
  "Tustin",
  "Villa Park",
  "Yorba Linda",
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  body: string;
  image: string;
  imageAlt: string;
  primary?: boolean;
};

export const services: Service[] = [
  {
    slug: "kitchens",
    name: "Kitchens",
    short: "Layouts, cabinetry, and finishes built for daily use.",
    body: "Kitchen remodeling is a core part of Bourke Construction’s residential work — from classic white kitchens to darker, more contemporary cabinetry. First-party galleries show completed kitchens across Orange County, including island layouts, range walls, and window-forward rooms.",
    image: "/images/kitchen-cream.jpg",
    imageAlt:
      "Cream kitchen with a large island, marble-look counters, and wood floors — a Bourke Construction project",
    primary: true,
  },
  {
    slug: "bathrooms",
    name: "Bathrooms",
    short: "Primary suites, hall baths, and clean, livable remodels.",
    body: "Bathroom remodeling appears throughout the company’s galleries and client reviews, including multi-bath projects. Work shown includes marble-look showers, floating vanities, and full bath renovations completed while families remained in the home.",
    image: "/images/bath-marble.jpg",
    imageAlt:
      "Bathroom with marble-look tile shower and glass enclosure — a Bourke Construction project",
    primary: true,
  },
  {
    slug: "additions",
    name: "Additions",
    short: "More room on the lot you already own.",
    body: "Home additions are listed among Bourke Construction’s primary services. Project photography includes new interior rooms, exterior massing, and related structural work for Orange County houses.",
    image: "/images/addition-interior.jpg",
    imageAlt:
      "Finished interior addition with wood floors, fireplace, and built-in cabinetry",
    primary: true,
  },
  {
    slug: "adus",
    name: "ADUs",
    short: "Accessory dwellings, garage conversions, and in-law units.",
    body: "Bourke Construction builds accessory dwelling units in Orange County, including detached backyard units, garage conversions, attached ADUs, and junior ADUs. The company describes managing design, permitting, and construction for these projects.",
    image: "/images/adu-aerial.jpg",
    imageAlt:
      "Aerial view of a completed accessory dwelling unit on an Orange County lot",
    primary: true,
  },
  {
    slug: "decks",
    name: "Decks & outdoor",
    short: "Coastal decks, including the Laguna Beach Azek project.",
    body: "Deck building and landscaping are a visible specialty. A Laguna Beach deck installation was featured in Azek’s nationwide “Smarter than Wood” campaign. The company states it is a certified installer for selected deck brands.",
    image: "/images/deck-laguna-ocean.jpg",
    imageAlt:
      "Laguna Beach composite deck overlooking the Pacific Ocean — Bourke Construction",
    primary: true,
  },
  {
    slug: "remodeling",
    name: "Whole-home remodeling",
    short: "Kitchens, baths, flooring, windows, and coordinated interiors.",
    body: "Interior and exterior remodeling is the center of the practice. Client reviews published on the first-party site describe full-home work spanning kitchens, multiple bathrooms, flooring, windows, and doors, with the crew keeping houses livable during construction.",
    image: "/images/remodel-living.jpg",
    imageAlt:
      "Remodeled living room with wood floors, fireplace, and open kitchen beyond",
    primary: true,
  },
];

export const secondaryServices = [
  { name: "Roofing", note: "Asphalt, composition, tile, metal, and related roof work." },
  { name: "Painting", note: "Interior and exterior painting listed among core services." },
  { name: "Doors & windows", note: "Installation and replacement, including patio and bi-fold openings." },
  { name: "Flooring", note: "Wood, tile, laminate, and related finish floors." },
  { name: "Siding & stucco", note: "Cedar siding, stucco installation and repair." },
  { name: "Custom homes", note: "New home construction and related general contracting." },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "In-home consultation",
    body: "A complimentary, no-obligation visit to talk through the project, budget range, and early design ideas.",
  },
  {
    n: "02",
    title: "Estimate",
    body: "Larger jobs start with an approximate estimate including product allowances. If it fits, a follow-up meeting locks finishes before a detailed estimate.",
  },
  {
    n: "03",
    title: "Contract & pre-construction",
    body: "A CSLB-approved contract with a complete scope of work, then a pre-construction meeting in the home to walk logistics and schedule.",
  },
  {
    n: "04",
    title: "Build, clean, protect",
    body: "Drop cloths, plastic protection, and a dust-control system on site. The crew cleans the home before leaving each day.",
  },
  {
    n: "05",
    title: "Walkthrough & follow-up",
    body: "A completion walkthrough, then ongoing availability by phone if questions come up after the work is finished.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Ed & his son were very knowledgable. They came recommended to us from a friend and we are really pleased with their work. They remodeled three of our bathrooms. One thing that I really liked was how clean and tidy the crew was. It can be hard to have contractors in the house but they were as non-invasive as possible.",
    source: "Client review published on Bourke Construction’s site, via Houzz",
    href: "https://www.houzz.com/viewReview/391538/BOURKE-CONSTRUCTION-INC--review",
  },
  {
    quote:
      "They completed a full home remodel on my 3500 sq ft house. They redid my kitchen, laundry room, and bathrooms (x4). New flooring, windows, and doors were installed. They were very professional. Eddie and his team were always on time, communicated clearly, and acted professionally in my home. The project stayed within my budget and they finished well within the stated timeframe.",
    source: "Client review published on Bourke Construction’s site, via Houzz",
    href: "https://www.houzz.com/viewReview/364465/BOURKE-CONSTRUCTION-INC--review",
  },
  {
    quote:
      "Mr. Bourke and his team is highly professional and trustworthy and patient and courteous. We did full house remodel kitchen, 2 bathrooms and New windows and closets. We would definitely use this company again and would recommend you and your company to our families.",
    source: "Client review published on Bourke Construction’s site, via Houzz",
    href: "https://www.houzz.com/viewReview/352403/BOURKE-CONSTRUCTION-INC--review",
  },
] as const;

export type Project = {
  id: string;
  title: string;
  place: string;
  category: "kitchens" | "bathrooms" | "additions" | "adus" | "decks" | "remodeling";
  image: string;
  alt: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: "laguna-deck",
    title: "Laguna Beach deck",
    place: "Laguna Beach",
    category: "decks",
    image: "/images/deck-laguna-ocean.jpg",
    alt: "Composite deck in Laguna Beach overlooking the Pacific",
    note: "Featured in Azek’s nationwide campaign",
  },
  {
    id: "deck-wide",
    title: "Coastal deck and planting",
    place: "Laguna Beach",
    category: "decks",
    image: "/images/deck-laguna-wide.jpg",
    alt: "Wide view of a gray composite deck with drought-tolerant planting",
  },
  {
    id: "deck-path",
    title: "Deck, path, and ocean view",
    place: "Laguna Beach",
    category: "decks",
    image: "/images/deck-laguna-path.jpg",
    alt: "Stepping-stone path through a coastal garden to a composite deck",
  },
  {
    id: "kitchen-cream",
    title: "Open kitchen with island",
    place: "Orange County",
    category: "kitchens",
    image: "/images/kitchen-cream.jpg",
    alt: "Cream kitchen with marble-look island and pendant lighting",
  },
  {
    id: "kitchen-island",
    title: "Kitchen and dining",
    place: "Orange County",
    category: "kitchens",
    image: "/images/hero-kitchen-island.jpg",
    alt: "Kitchen island with seating opening to a dining area",
  },
  {
    id: "kitchen-dark",
    title: "Dark cabinetry kitchen",
    place: "Orange County",
    category: "kitchens",
    image: "/images/kitchen-dark-cabinets.jpg",
    alt: "Kitchen with dark lower cabinets, white uppers, and a long island",
  },
  {
    id: "kitchen-range",
    title: "White kitchen, range wall",
    place: "Orange County",
    category: "kitchens",
    image: "/images/kitchen-white-range.jpg",
    alt: "White kitchen with stainless range and wood floors",
  },
  {
    id: "kitchen-open",
    title: "Open-plan kitchen",
    place: "Orange County",
    category: "kitchens",
    image: "/images/kitchen-open-plan.jpg",
    alt: "Open kitchen with island seating and adjacent living area",
  },
  {
    id: "bath-marble",
    title: "Marble-look shower",
    place: "Orange County",
    category: "bathrooms",
    image: "/images/bath-marble.jpg",
    alt: "Walk-in shower with marble-look tile and glass door",
  },
  {
    id: "bath-vanity",
    title: "Primary bath vanity",
    place: "Orange County",
    category: "bathrooms",
    image: "/images/bath-vanity.jpg",
    alt: "Floating double vanity with stone counters and large mirrors",
  },
  {
    id: "bath-white",
    title: "White bath remodel",
    place: "Orange County",
    category: "bathrooms",
    image: "/images/bath-white.jpg",
    alt: "White bathroom with soaking tub, vanity, and tile floors",
  },
  {
    id: "bath-spa",
    title: "Spa bath",
    place: "Orange County",
    category: "bathrooms",
    image: "/images/bath-spa.jpg",
    alt: "Bathroom with soaking tub, glass shower, and dual vanity",
  },
  {
    id: "addition-interior",
    title: "Interior addition",
    place: "Orange County",
    category: "additions",
    image: "/images/addition-interior.jpg",
    alt: "Finished addition with fireplace, built-ins, and wood floors",
  },
  {
    id: "addition-exterior",
    title: "Addition exterior",
    place: "Orange County",
    category: "additions",
    image: "/images/addition-exterior.jpg",
    alt: "House exterior showing a completed residential addition",
  },
  {
    id: "adu-aerial",
    title: "Accessory dwelling unit",
    place: "Orange County",
    category: "adus",
    image: "/images/adu-aerial.jpg",
    alt: "Aerial of a completed ADU beside a primary residence",
  },
  {
    id: "adu-living",
    title: "ADU living space",
    place: "Orange County",
    category: "adus",
    image: "/images/adu-living.jpg",
    alt: "Living area inside an accessory dwelling unit",
  },
  {
    id: "adu-kitchen",
    title: "ADU kitchen",
    place: "Orange County",
    category: "adus",
    image: "/images/adu-kitchen.jpg",
    alt: "Compact kitchen inside an accessory dwelling unit",
  },
  {
    id: "remodel-living",
    title: "Living room remodel",
    place: "Orange County",
    category: "remodeling",
    image: "/images/remodel-living.jpg",
    alt: "Remodeled living room opening to the kitchen",
  },
  {
    id: "before-after",
    title: "Bathroom before & after",
    place: "Orange County",
    category: "bathrooms",
    image: "/images/before-after-bath.jpg",
    alt: "Side-by-side before and after of a bathroom remodel",
  },
  {
    id: "kitchen-contemporary",
    title: "Contemporary kitchen",
    place: "Orange County",
    category: "kitchens",
    image: "/images/kitchen-contemporary.jpg",
    alt: "Kitchen with warm wood island and contemporary lighting",
  },
];
