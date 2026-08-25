export const company = {
  legalName: "OM ROADLINES",
  short: "ORL",
  phone: "+91-9001890405",
  phoneHref: "tel:+919001890405",
  whatsapp: "https://wa.me/919001890405",
  email: "info@omroadlines.com",
  gst: "06AXPPS9936B1ZY",
  address: "Tauru Road, Bilaspur Chowk, Gurugram, Haryana 122413",
  branches: ["Gurugram", "Bhiwadi", "Hissar", "Ghaziabad", "Mumbai"],
  hours: "Mon–Sat, 9:00 AM – 8:00 PM IST · Dispatch desk 24×7",
};

export const stats = [
  { value: 15, suffix: "+", label: "Years of operations" },
  { value: 550, suffix: "+", label: "Owned & attached fleet" },
  { value: 100000, suffix: "+", label: "Shipments completed" },
  { value: 97.6, suffix: "%", label: "On-time delivery", decimals: 1 },
  { value: 1.5, suffix: "L+", label: "Tons moved annually", decimals: 1 },
];

export const whyOrl = [
  { title: "Verified Drivers", body: "Background-checked, trained and rated crews. Documents and licences audited before every deployment." },
  { title: "Cargo Insurance", body: "End-to-end transit insurance on every consignment, up to full declared value." },
  { title: "Maintained Fleet", body: "50 owned trucks plus 500+ attached vehicles, health-checked and papers current." },
  { title: "24×7 Dispatch Desk", body: "A dedicated logistics coordinator per account and a control desk that answers at 3 AM." },
  { title: "Pan-India Coverage", body: "NCR-anchored network moving freight to every major industrial corridor in India." },
  { title: "Fast Placement", body: "Same-day truck placement across NCR and guaranteed pickup windows on contract lanes." },
];

export type Service = {
  slug: string;
  name: string;
  tag: string;
  summary: string;
  description: string;
  benefits: string[];
  process: { step: string; body: string }[];
  faqs: { q: string; a: string }[];
  image: "ftl" | "odc" | "fleet";
};

export const services: Service[] = [
  {
    slug: "full-truck-load",
    name: "Full Truck Load (FTL)",
    tag: "Dedicated vehicle, direct run",
    summary: "Dedicated trucks running point-to-point with no transhipment, no consolidation delays.",
    description:
      "Your consignment gets the whole vehicle. Sealed at origin, opened at destination — the fastest and safest way to move high-value or high-volume freight across India.",
    benefits: [
      "Open body trucks and trailers from 9 MT to 40 MT",
      "Direct run with zero transhipment handling",
      "Sealed vehicle with driver accountability",
      "Same-day placement across NCR industrial belts",
    ],
    process: [
      { step: "Share the lane", body: "Origin, destination, cargo type and tonnage — over call, WhatsApp or the quote form." },
      { step: "Vehicle allocation", body: "We match the right body type and confirm placement window with rate in writing." },
      { step: "Loading & sealing", body: "Driver reports with verified documents; e-way bill and LR issued on loading." },
      { step: "Transit & POD", body: "Coordinator updates you at checkpoints and shares signed POD on delivery." },
    ],
    faqs: [
      { q: "How quickly can you place a truck?", a: "Same-day across NCR, Bhiwadi and Ghaziabad. 24–48 hours for most other origins." },
      { q: "Is the cargo insured?", a: "Yes. Transit insurance is arranged on every FTL consignment up to declared value." },
    ],
    image: "ftl",
  },
  {
    slug: "part-load",
    name: "Part Load / PTL",
    tag: "Pay for the space you use",
    summary: "Shared-vehicle freight for consignments that don't justify a full truck.",
    description:
      "Consolidated movement on scheduled corridors, priced per tonne. Ideal for regular smaller dispatches to distributors, dealers and job-work vendors.",
    benefits: [
      "Scheduled departures on core corridors",
      "Per-tonne pricing with no minimum truck cost",
      "Careful segregation and labelling of consignments",
      "Documented handover at every hub",
    ],
    process: [
      { step: "Booking", body: "Share dimensions, weight and destination pin code." },
      { step: "Pickup", body: "Cargo collected and consolidated at the nearest ORL hub." },
      { step: "Line haul", body: "Moved on the next scheduled departure for the corridor." },
      { step: "Last mile", body: "Delivered to consignee with signed POD." },
    ],
    faqs: [
      { q: "What is the minimum booking?", a: "We handle part loads from roughly 1 MT upward on regular corridors." },
      { q: "Is part load slower than FTL?", a: "Typically 1–2 days longer because of consolidation and hub handling." },
    ],
    image: "fleet",
  },
  {
    slug: "odc-heavy-equipment",
    name: "ODC & Heavy Equipment",
    tag: "Over-dimensional cargo",
    summary: "Trailers, low-beds and route surveys for cargo that will not fit a standard truck.",
    description:
      "Plant machinery, structural steel, tanks and project equipment moved with the right trailer, the right permits and a surveyed route.",
    benefits: [
      "Low-bed, semi-low-bed and multi-axle trailers",
      "Route survey and height/width clearance planning",
      "State permits and escort coordination",
      "Lashing, chocking and secure load plans",
    ],
    process: [
      { step: "Cargo assessment", body: "Dimensions, weight and lifting arrangement reviewed with drawings." },
      { step: "Route survey", body: "Bridges, overheads and turning radii checked end to end." },
      { step: "Permits", body: "State-wise ODC permits and escorts arranged before dispatch." },
      { step: "Movement", body: "Supervised loading, day-wise movement plan and delivery confirmation." },
    ],
    faqs: [
      { q: "Do you handle loading and cranes?", a: "We coordinate cranes and lashing at both ends when required." },
      { q: "How long do ODC permits take?", a: "Usually 3–7 working days depending on the states involved." },
    ],
    image: "odc",
  },
  {
    slug: "express-freight",
    name: "Express Freight",
    tag: "Time-critical dispatch",
    summary: "Priority movement with double-driver operation for deadline-bound consignments.",
    description:
      "Line-stoppage risk, export cut-offs, seasonal peaks — express lanes with continuous running and hourly status updates.",
    benefits: [
      "Double-driver continuous running",
      "Committed delivery windows",
      "Priority placement even at short notice",
      "Escalation contact available round the clock",
    ],
    process: [
      { step: "Urgency call", body: "Tell us the deadline; we confirm feasibility within the hour." },
      { step: "Priority allocation", body: "Nearest suitable vehicle is diverted and drivers briefed." },
      { step: "Continuous run", body: "Minimal halts with paired drivers on long corridors." },
      { step: "Confirmation", body: "Delivery confirmed with POD and time stamp." },
    ],
    faqs: [
      { q: "How much faster is express?", a: "Typically 25–35% quicker than standard transit on long-haul lanes." },
      { q: "Is express available for part loads?", a: "Express runs are dedicated-vehicle only to protect the timeline." },
    ],
    image: "ftl",
  },
  {
    slug: "dedicated-fleet",
    name: "Dedicated Fleet / 3PL",
    tag: "Trucks reserved for you",
    summary: "Vehicles parked on your plant, billed monthly, managed by an ORL coordinator.",
    description:
      "For manufacturers with predictable daily dispatch volumes. Fixed capacity, fixed rates, and a coordinator embedded with your dispatch team.",
    benefits: [
      "Fixed monthly capacity and rate cards",
      "Named coordinator and monthly MIS",
      "Priority on peak days and month-end",
      "Driver continuity for plant familiarity",
    ],
    process: [
      { step: "Volume study", body: "We map your dispatch pattern, lanes and peak days." },
      { step: "Fleet plan", body: "Vehicle mix and placement schedule agreed and contracted." },
      { step: "Deployment", body: "Trucks and drivers assigned exclusively to your operation." },
      { step: "Review", body: "Monthly performance review on placement, transit and cost." },
    ],
    faqs: [
      { q: "What is the minimum contract?", a: "Dedicated fleet arrangements typically start at three months." },
      { q: "Can we scale mid-contract?", a: "Yes — attached fleet capacity absorbs seasonal spikes." },
    ],
    image: "fleet",
  },
];

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  solution: string[];
  fleet: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing Logistics",
    summary: "Inbound raw material and outbound finished goods for plants across the NCR belt and beyond.",
    challenges: ["Line stoppage from late inbound material", "Month-end dispatch surges", "Heavy and irregular loads"],
    solution: ["Dedicated fleet parked at plant", "Guaranteed placement on peak days", "Trailer capacity for heavy sections"],
    fleet: "Open body 19–22 MT, multi-axle trailers, low-beds",
  },
  {
    slug: "fmcg",
    name: "FMCG Logistics",
    summary: "High-frequency distribution movement to depots, C&F agents and modern trade warehouses.",
    challenges: ["Tight appointment windows at warehouses", "High SKU count and damage risk", "Seasonal demand spikes"],
    solution: ["Scheduled corridor departures", "Careful stacking and load plans", "Surge capacity from attached fleet"],
    fleet: "Containerised 19–32 ft, part load consolidation",
  },
  {
    slug: "pharma",
    name: "Pharma Logistics",
    summary: "Documentation-heavy, compliance-first movement for pharmaceutical manufacturers and distributors.",
    challenges: ["Strict documentation and audit trails", "Zero tolerance for pilferage", "Time-bound distribution"],
    solution: ["Sealed FTL with driver accountability", "Complete e-way bill and LR trail", "Express lanes for urgent stock"],
    fleet: "Closed body containers, sealed FTL",
  },
  {
    slug: "automotive",
    name: "Automotive Logistics",
    summary: "Component inbound and spares outbound for OEMs and tier-1 suppliers.",
    challenges: ["JIT sequencing", "Bin and trolley handling", "Penalty for line stoppage"],
    solution: ["Milk-run planning across vendor clusters", "Express escalation lane", "Dedicated coordinator on site"],
    fleet: "Container trucks, dedicated milk-run vehicles",
  },
  {
    slug: "agriculture",
    name: "Agriculture Logistics",
    summary: "Bulk seasonal movement of grain, produce inputs and agri machinery.",
    challenges: ["Sharp seasonal peaks", "Rural pickup points", "Weather-sensitive cargo"],
    solution: ["Attached fleet scale during harvest", "Tier-3 and rural reach", "Tarpaulin covered open body"],
    fleet: "Open body trucks with covers, trailers",
  },
  {
    slug: "e-commerce",
    name: "E-commerce Logistics",
    summary: "Fulfilment centre line hauls and returns movement on fixed daily schedules.",
    challenges: ["Fixed daily departure slots", "Volume unpredictability", "Dock appointment compliance"],
    solution: ["Fixed-slot dedicated line hauls", "Flex capacity for sale events", "Punctual dock arrivals"],
    fleet: "32 ft SXL/MXL containers, dedicated fleet",
  },
];

export type RouteLane = {
  slug: string;
  from: string;
  to: string;
  distanceKm: number;
  transit: string;
  cargo: string[];
  fleet: string[];
  priceFrom: number;
};

export const lanes: RouteLane[] = [
  { slug: "delhi-to-mumbai", from: "Delhi NCR", to: "Mumbai", distanceKm: 1420, transit: "36–48 hours", cargo: ["Steel & metals", "FMCG stock", "Machinery", "Packaged goods"], fleet: ["32 ft SXL", "22 MT open body", "Multi-axle trailer"], priceFrom: 62000 },
  { slug: "delhi-to-bangalore", from: "Delhi NCR", to: "Bangalore", distanceKm: 2150, transit: "60–72 hours", cargo: ["Electronics", "Auto components", "Industrial equipment"], fleet: ["32 ft MXL", "19 MT container"], priceFrom: 92000 },
  { slug: "delhi-to-chennai", from: "Delhi NCR", to: "Chennai", distanceKm: 2180, transit: "62–76 hours", cargo: ["Auto parts", "Chemicals in drums", "Textiles"], fleet: ["32 ft SXL", "Multi-axle trailer"], priceFrom: 95000 },
  { slug: "mumbai-to-ahmedabad", from: "Mumbai", to: "Ahmedabad", distanceKm: 525, transit: "14–20 hours", cargo: ["Pharma consignments", "Packaging material", "Chemicals"], fleet: ["19 ft container", "22 MT open body"], priceFrom: 28000 },
  { slug: "gurugram-to-hyderabad", from: "Gurugram", to: "Hyderabad", distanceKm: 1580, transit: "42–54 hours", cargo: ["Plant machinery", "Steel coils", "Consumer durables"], fleet: ["Low-bed trailer", "32 ft container"], priceFrom: 74000 },
  { slug: "bhiwadi-to-kolkata", from: "Bhiwadi", to: "Kolkata", distanceKm: 1520, transit: "44–56 hours", cargo: ["Glass", "Industrial goods", "Agri inputs"], fleet: ["22 MT open body", "32 ft SXL"], priceFrom: 71000 },
];

export const clients = [
  "Jindal Stainless Limited",
  "Radico Khaitan Limited",
  "Emerge Glass Limited",
  "Dental Hydraulics Limited",
];

export const coverageCities = [
  { name: "Delhi NCR", x: 33, y: 30, trips: "42,000+", fleet: "180 vehicles", transit: "Same-day placement", routes: "120+ lanes" },
  { name: "Bhiwadi", x: 31, y: 34, trips: "18,400+", fleet: "60 vehicles", transit: "Same-day placement", routes: "45+ lanes" },
  { name: "Hissar", x: 28, y: 26, trips: "9,200+", fleet: "34 vehicles", transit: "Within 24 hours", routes: "28+ lanes" },
  { name: "Ghaziabad", x: 36, y: 29, trips: "15,700+", fleet: "48 vehicles", transit: "Same-day placement", routes: "52+ lanes" },
  { name: "Mumbai", x: 25, y: 62, trips: "21,300+", fleet: "70 vehicles", transit: "Within 24 hours", routes: "64+ lanes" },
  { name: "Ahmedabad", x: 21, y: 52, trips: "11,800+", fleet: "40 vehicles", transit: "Within 24 hours", routes: "38+ lanes" },
  { name: "Hyderabad", x: 38, y: 68, trips: "8,600+", fleet: "28 vehicles", transit: "24–48 hours", routes: "31+ lanes" },
  { name: "Bangalore", x: 34, y: 80, trips: "7,400+", fleet: "24 vehicles", transit: "24–48 hours", routes: "26+ lanes" },
  { name: "Chennai", x: 44, y: 82, trips: "6,900+", fleet: "22 vehicles", transit: "24–48 hours", routes: "24+ lanes" },
  { name: "Kolkata", x: 62, y: 50, trips: "5,800+", fleet: "20 vehicles", transit: "24–48 hours", routes: "22+ lanes" },
];

export const faqs = [
  { topic: "Pricing", q: "How is freight priced?", a: "FTL is priced per trip based on lane, vehicle type and tonnage. Part load is priced per tonne. Diesel and toll movements are reflected transparently — no hidden add-ons after dispatch." },
  { topic: "Pricing", q: "Do you offer contract rates?", a: "Yes. Regular shippers get a locked rate card with monthly review, typically after a volume study of your dispatch pattern." },
  { topic: "Insurance", q: "Is my cargo insured?", a: "Transit insurance is arranged on every consignment. For high-value freight we can extend cover to the full declared value on request." },
  { topic: "Delivery Time", q: "What transit times can I expect?", a: "Delhi–Mumbai runs 36–48 hours, Delhi–Bangalore 60–72 hours. Express lanes with double drivers cut roughly 25–35% off standard transit." },
  { topic: "Tracking", q: "How do I know where my truck is?", a: "Your coordinator shares checkpoint updates over call or WhatsApp, and driver contact is shared on dispatch." },
  { topic: "Fleet", q: "What vehicles do you operate?", a: "50 owned trucks plus 500+ attached vehicles — open body trucks, containers and trailers including low-beds for ODC cargo." },
  { topic: "Safety", q: "How are drivers vetted?", a: "Every driver is background-checked with licence and document verification, and rated after each trip. Vehicles are checked for both health and paperwork." },
  { topic: "Documentation", q: "Which documents do you issue?", a: "LR/consignment note at loading, e-way bill compliance, GST invoice and signed POD on delivery." },
  { topic: "Documentation", q: "What is your GST number?", a: `Our GSTIN is ${company.gst}, registered at ${company.address}.` },
];

export const articles = [
  { slug: "freight-cost-guide", title: "What actually drives your freight cost in India", excerpt: "Diesel, tolls, lane balance and detention — a breakdown of the five variables that decide your per-trip rate.", topic: "Freight Cost Guide", readTime: "7 min read", author: "ORL Operations Desk" },
  { slug: "e-way-bill-guide", title: "E-way bill: a practical checklist for dispatch teams", excerpt: "Thresholds, validity, part-B updates and the mistakes that most often stall a truck at a checkpoint.", topic: "Compliance", readTime: "6 min read", author: "ORL Compliance Desk" },
  { slug: "seasonal-capacity", title: "Planning for seasonal capacity crunches", excerpt: "Harvest, festive peaks and month-end pressure: how to secure trucks before rates move against you.", topic: "Capacity", readTime: "5 min read", author: "ORL Operations Desk" },
  { slug: "reducing-detention", title: "Cutting detention time at your loading dock", excerpt: "Detention is the quietest line item in your freight budget. Here is how plants recover it.", topic: "Best Practices", readTime: "6 min read", author: "ORL Operations Desk" },
];
