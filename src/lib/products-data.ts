export interface ProductItem {
  id: string;
  name: string;
  category: "home" | "office" | "customized";
  subcategory?: string;
  categoryLabel: string;
  price: string;
  originalPrice?: string;
  priceNum: number;
  badge?: string;
  rating: number;
  reviewsCount: number;
  woodType: string;
  materials: string;
  dimensions: string;
  leadTime: string;
  image: string;
  swatches: { name: string; color: string }[];
  description: string;
  features: string[];
}

// ─── HOME FURNITURE ───────────────────────────────────────────────────────────
export const homeFurnitureProducts: ProductItem[] = [
  // Sofas and Couches
  {
    id: "gang-tower-sofa",
    name: "The Gang Tower 4-Seater Lounge",
    category: "home",
    subcategory: "sofas-couches",
    categoryLabel: "Sofas & Couches",
    price: "₹ 2,45,000",
    originalPrice: "₹ 2,80,000",
    priceNum: 245000,
    badge: "Flagship",
    rating: 4.9,
    reviewsCount: 42,
    woodType: "Kiln-Dried Aged Teak",
    materials: "Italian Caramel Velvet & Lost-Wax Brass Feet",
    dimensions: "108\" W × 38\" D × 32\" H",
    leadTime: "3–4 Weeks Bespoke",
    image: "/home-sofas.jpg",
    swatches: [
      { name: "Caramel Velvet", color: "#b87d3b" },
      { name: "Alabaster Bouclé", color: "#f3ede2" },
      { name: "Deep Charcoal", color: "#22201e" },
      { name: "Emerald Weave", color: "#2d4436" },
    ],
    description:
      "Our most acclaimed architectural seating centerpiece. Kiln-dried teak foundation, hand-poured solid brass sculptural legs, and dual-density pocket-coil cushions.",
    features: [
      "Individually poured lost-wax solid brass leg castings",
      "10-year structural warranty on internal hardwood timber",
      "High-resilience pocket coils with hypoallergenic feather wrap",
      "Custom length from 78\" to 124\"",
    ],
  },
  {
    id: "marwar-3-seater",
    name: "The Marwar 3-Seater Bouclé Couch",
    category: "home",
    subcategory: "sofas-couches",
    categoryLabel: "Sofas & Couches",
    price: "₹ 1,85,000",
    originalPrice: "₹ 2,10,000",
    priceNum: 185000,
    badge: "New",
    rating: 4.8,
    reviewsCount: 19,
    woodType: "Hand-Rubbed Solid Teak",
    materials: "Ivory Bouclé & Solid Teak Frame",
    dimensions: "90\" W × 36\" D × 30\" H",
    leadTime: "3 Weeks Bespoke",
    image: "/sofa-after.jpg",
    swatches: [
      { name: "Ivory Bouclé", color: "#eee8de" },
      { name: "Oatmeal Linen", color: "#e4ddd1" },
      { name: "Dusty Rose", color: "#c9a08c" },
    ],
    description:
      "A compact 3-seater couch with organic curved back-rail in solid teak and plush high-density bouclé cushions. Perfect for mid-sized living rooms.",
    features: [
      "Curved solid teak back-rail — no joins, single timber",
      "High-resilience foam with European feather top cushion",
      "Available in 2-seater, 3-seater, and L-shape",
      "Matching ottoman pouffe available separately",
    ],
  },

  // Beds and Headboards
  {
    id: "umaid-platform-bed",
    name: "The Umaid Floating Platform Bed",
    category: "home",
    subcategory: "beds-headboards",
    categoryLabel: "Beds & Headboards",
    price: "₹ 2,90,000",
    originalPrice: "₹ 3,30,000",
    priceNum: 290000,
    badge: "Sanctuary",
    rating: 5.0,
    reviewsCount: 22,
    woodType: "Seasoned Solid Teak",
    materials: "Natural Cane Inlay, Ivory Bouclé & Teak",
    dimensions: "King: 84\" W × 88\" L × 44\" H",
    leadTime: "4 Weeks Bespoke",
    image: "/home-beds.jpg",
    swatches: [
      { name: "Ivory Bouclé", color: "#eee8de" },
      { name: "Caramel Velvet", color: "#b87d3b" },
      { name: "Muted Sage", color: "#8b9485" },
    ],
    description:
      "A serene low platform sanctuary with cantilevered floating teak plinths, acoustic bouclé headboard panels, and heritage hand-woven cane wing accents.",
    features: [
      "Cantilevered base creates a weightless, floating aesthetic",
      "Solid beechwood spring-slat suspension for breathability",
      "Integrated dual concealed nightstand ledges",
      "Natural Jodhpur woven cane panels hand-tensioned",
    ],
  },
  {
    id: "jaisalmer-sleigh-bed",
    name: "The Jaisalmer Teak Sleigh Bed",
    category: "home",
    subcategory: "beds-headboards",
    categoryLabel: "Beds & Headboards",
    price: "₹ 2,20,000",
    priceNum: 220000,
    badge: "Heritage",
    rating: 4.9,
    reviewsCount: 15,
    woodType: "Old-Growth Sheesham",
    materials: "Sheesham & Brass Inlay Headboard",
    dimensions: "Queen: 72\" W × 84\" L × 52\" H",
    leadTime: "3–4 Weeks",
    image: "/bed-after.jpg",
    swatches: [
      { name: "Warm Honey", color: "#b87c3a" },
      { name: "Dark Walnut", color: "#32271f" },
    ],
    description:
      "A grand sleigh bed with a sweeping curved headboard in sheesham, hand-inlaid with hairline brass detailing. Includes matching footboard with solid brass rail.",
    features: [
      "Sweeping curved headboard — single timber billet",
      "Hairline brass inlay around headboard perimeter",
      "Matching solid brass footboard rail included",
      "Available in Queen, King, and Super King",
    ],
  },

  // Dining Tables & Chairs
  {
    id: "mehrangarh-dining-table",
    name: "The Mehrangarh Imperial 8-Seater Dining",
    category: "home",
    subcategory: "dining-tables",
    categoryLabel: "Dining Tables & Chairs",
    price: "₹ 3,80,000",
    originalPrice: "₹ 4,20,000",
    priceNum: 380000,
    badge: "Heritage",
    rating: 4.9,
    reviewsCount: 18,
    woodType: "Aged Sheesham & Teak",
    materials: "Hand-Inlaid Brass Wire & Satin Heartwood",
    dimensions: "96\" L × 42\" W × 30\" H",
    leadTime: "4–5 Weeks Bespoke",
    image: "/home-dining.jpg",
    swatches: [
      { name: "Warm Honey Teak", color: "#b87c3a" },
      { name: "Dark Walnut Tint", color: "#32271f" },
    ],
    description:
      "An imperial banquet centerpiece inspired by Jodhpur royal residences. Brass inlays along chamfered edges and 8 upholstered dining chairs included.",
    features: [
      "8 handcrafted teak dining armchairs with velvet seats",
      "Brass wire inlays hand-hammered into micro-grooves",
      "Kiln-dried to 8% moisture equilibrium",
      "Hidden tension butterfly extension to seat 10",
    ],
  },

  // Coffee Tables
  {
    id: "mandore-coffee-table",
    name: "The Mandore Teak & Brass Coffee Table",
    category: "home",
    subcategory: "coffee-tables",
    categoryLabel: "Coffee Tables",
    price: "₹ 1,15,000",
    originalPrice: "₹ 1,35,000",
    priceNum: 115000,
    badge: "Architectural",
    rating: 4.8,
    reviewsCount: 36,
    woodType: "Old-Growth Teak Slab",
    materials: "Bookmatched Teak & Lost-Wax Brass",
    dimensions: "56\" L × 30\" W × 16\" H",
    leadTime: "3 Weeks",
    image: "/home-coffee-table.jpg",
    swatches: [
      { name: "Golden Honey", color: "#c18c47" },
      { name: "Smoked Espresso", color: "#3a2e25" },
      { name: "Bleached Teak", color: "#dfd2be" },
    ],
    description:
      "A grand low coffee table with an organic live-bevel solid teak slab floating on architectural tripod cast brass legs.",
    features: [
      "40mm+ thick bookmatched solid teak tabletop",
      "Waterproof and stain-resistant satin natural finish",
      "Heavyweight sand-cast brass legs with floor levelers",
      "Available with bronze smoked glass reveals",
    ],
  },

  // Side Tables
  {
    id: "osian-side-table",
    name: "The Osian Round Teak Side Table",
    category: "home",
    subcategory: "side-tables",
    categoryLabel: "Side Tables",
    price: "₹ 42,000",
    originalPrice: "₹ 52,000",
    priceNum: 42000,
    badge: "Pair Available",
    rating: 4.8,
    reviewsCount: 28,
    woodType: "Solid Teak",
    materials: "Solid Teak & Brass-Capped Tripod",
    dimensions: "20\" Dia × 24\" H",
    leadTime: "2 Weeks",
    image: "/home-side-table.jpg",
    swatches: [
      { name: "Natural Teak", color: "#c18c47" },
      { name: "Ebonised", color: "#1e1710" },
    ],
    description:
      "A perfectly proportioned round side table with a solid teak top and slender splayed brass-capped tripod legs. Available as a matched pair.",
    features: [
      "Solid single-piece teak top — no veneers",
      "Slender splayed leg profile in solid teak",
      "Solid brass cap feet for scratch protection",
      "Available as matching nested set of 2",
    ],
  },

  // Wardrobes
  {
    id: "kailana-wardrobe",
    name: "The Kailana 4-Door Fluted Teak Wardrobe",
    category: "home",
    subcategory: "wardrobes",
    categoryLabel: "Wardrobes",
    price: "₹ 2,65,000",
    originalPrice: "₹ 3,00,000",
    priceNum: 265000,
    badge: "Made to Measure",
    rating: 4.9,
    reviewsCount: 14,
    woodType: "Seasoned Solid Teak",
    materials: "Solid Teak, Fluted Glass Doors & Brass Fittings",
    dimensions: "84\" W × 24\" D × 90\" H",
    leadTime: "4–5 Weeks Bespoke",
    image: "/home-wardrobe.jpg",
    swatches: [
      { name: "Natural Teak", color: "#b87d3b" },
      { name: "Ebonised Teak", color: "#1e1710" },
      { name: "Bleached White", color: "#ede9e1" },
    ],
    description:
      "A floor-to-ceiling wardrobe in solid teak with fluted glass door panels, soft-close German hinges, and custom internal layout designed around your storage needs.",
    features: [
      "Floor-to-ceiling solid teak construction",
      "Fluted or plain glass door panel options",
      "Internal layout fully customisable",
      "Integrated LED strip lighting & brass hanging rails",
    ],
  },

  // Console Tables
  {
    id: "balsamand-console",
    name: "The Balsamand Teak Console Table",
    category: "home",
    subcategory: "console-tables",
    categoryLabel: "Console Tables",
    price: "₹ 88,000",
    originalPrice: "₹ 1,05,000",
    priceNum: 88000,
    badge: "Entryway",
    rating: 4.8,
    reviewsCount: 21,
    woodType: "Solid Teak",
    materials: "Solid Teak & Forged Brass X-Legs",
    dimensions: "60\" W × 14\" D × 34\" H",
    leadTime: "2–3 Weeks",
    image: "/home-console.jpg",
    swatches: [
      { name: "Natural Teak", color: "#c18c47" },
      { name: "Dark Stain", color: "#32271f" },
    ],
    description:
      "A slim entryway console with a live-edge teak top and handforged brass X-trestle legs. The statement piece every hallway deserves.",
    features: [
      "Live-edge solid teak top — organic and unique",
      "Hand-forged solid brass X-trestle base",
      "One fixed lower shelf in matching teak",
      "Available in 48\", 60\", and 72\" widths",
    ],
  },

  // Cabinets & Storage
  {
    id: "kailana-fluted-credenza",
    name: "The Kailana 4-Door Fluted Credenza",
    category: "home",
    subcategory: "cabinets-storage",
    categoryLabel: "Cabinets & Storage",
    price: "₹ 1,65,000",
    originalPrice: "₹ 1,90,000",
    priceNum: 165000,
    badge: "Sculptural",
    rating: 4.9,
    reviewsCount: 31,
    woodType: "Solid Fluted Teak",
    materials: "Solid Teak Tambour, Brass Pulls & Marble Top",
    dimensions: "72\" W × 20\" D × 32\" H",
    leadTime: "3 Weeks Bespoke",
    image: "/home-cabinet.jpg",
    swatches: [
      { name: "Natural Oiled Teak", color: "#a5733d" },
      { name: "Smoked Charcoal", color: "#2b2520" },
    ],
    description:
      "A statement storage console with vertically machined fluted teak battens around radius corners and polished brass knurled handles.",
    features: [
      "Seamless radiused corner doors with soft-close German hinges",
      "Solid brass knurled column handles",
      "Adjustable internal hardwood shelving",
      "Choice of bookmatched teak or Carrara marble top",
    ],
  },

  // Study Tables
  {
    id: "mandore-study-desk",
    name: "The Mandore Teak Study & Writing Desk",
    category: "home",
    subcategory: "study-tables",
    categoryLabel: "Study Tables",
    price: "₹ 98,000",
    originalPrice: "₹ 1,15,000",
    priceNum: 98000,
    badge: "Work from Home",
    rating: 4.8,
    reviewsCount: 24,
    woodType: "Solid Teak",
    materials: "Solid Teak & Leather Writing Surface",
    dimensions: "60\" W × 28\" D × 30\" H",
    leadTime: "2–3 Weeks",
    image: "/home-study.jpg",
    swatches: [
      { name: "Golden Teak", color: "#b87d3b" },
      { name: "Dark Walnut", color: "#32271f" },
    ],
    description:
      "A refined home study desk with full-grain leather inlaid writing pad, integrated cable management, and a floating side drawer in matching teak.",
    features: [
      "Full-grain leather inlaid writing pad",
      "Solid brass cable-management grommet",
      "Floating side drawer with dovetail joints",
      "Available in 48\", 60\", and 72\" widths",
    ],
  },

  // Bookshelves
  {
    id: "mehrangarh-bookshelf",
    name: "The Mehrangarh Open Teak Bookshelf",
    category: "home",
    subcategory: "bookshelves",
    categoryLabel: "Bookshelves",
    price: "₹ 1,25,000",
    originalPrice: "₹ 1,45,000",
    priceNum: 125000,
    badge: "Library",
    rating: 4.9,
    reviewsCount: 17,
    woodType: "Solid Teak",
    materials: "Solid Teak & Adjustable Brass Shelf Pins",
    dimensions: "72\" H × 48\" W × 14\" D",
    leadTime: "2–3 Weeks",
    image: "/home-bookshelf.jpg",
    swatches: [
      { name: "Natural Teak", color: "#c18c47" },
      { name: "Ebonised", color: "#1e1710" },
    ],
    description:
      "A tall open bookshelf with adjustable solid teak shelves and solid brass adjustable shelf pins. Can be wall-fixed or free-standing with anti-tip kit.",
    features: [
      "5 adjustable solid teak shelves on brass pins",
      "Wall-fixable or free-standing with anti-tip bracket",
      "Back panel in teak veneer or optional open back",
      "Available in modular widths to create a library wall",
    ],
  },

  // Accent Furniture
  {
    id: "marwar-armchair",
    name: "The Marwar Sculptural Accent Chair",
    category: "home",
    subcategory: "accent-furniture",
    categoryLabel: "Accent Furniture",
    price: "₹ 82,000",
    originalPrice: "₹ 95,000",
    priceNum: 82000,
    badge: "Best Seller",
    rating: 5.0,
    reviewsCount: 29,
    woodType: "Hand-Rubbed Golden Teak",
    materials: "Italian Champagne Velvet & Solid Brass Ferrules",
    dimensions: "34\" W × 32\" D × 31\" H",
    leadTime: "2–3 Weeks Bespoke",
    image: "/home-accent.jpg",
    swatches: [
      { name: "Champagne Velvet", color: "#d9be8c" },
      { name: "Tobacco Saddle", color: "#744b29" },
      { name: "Oatmeal Linen", color: "#e4ddd1" },
    ],
    description:
      "A tribute to Scandinavian modern lines reinterpreted through Jodhpur craftsmanship. Sculpted single-billet teak armrests with hand-buffed brass ferrule tips.",
    features: [
      "Single-block sculpted curved organic armrests",
      "Triple-hand-rubbed virgin linseed and beeswax polish",
      "High-density foam with memory crown",
      "Brass ferrule caps prevent floor scuffing",
    ],
  },
];

// ─── OFFICE FURNITURE ─────────────────────────────────────────────────────────
export const officeFurnitureProducts: ProductItem[] = [
  // Office Desks
  {
    id: "marwar-office-desk",
    name: "The Marwar Minimalist Teak Office Desk",
    category: "office",
    subcategory: "office-desks",
    categoryLabel: "Office Desks",
    price: "₹ 1,35,000",
    originalPrice: "₹ 1,55,000",
    priceNum: 135000,
    badge: "Ergonomic",
    rating: 4.8,
    reviewsCount: 16,
    woodType: "Seasoned Solid Teak",
    materials: "Solid Teak & Brass Cable Grommets",
    dimensions: "60\" W × 30\" D × 30\" H",
    leadTime: "2–3 Weeks Bespoke",
    image: "/office-desks-luxury.jpg",
    swatches: [
      { name: "Golden Teak", color: "#b87d3b" },
      { name: "Smoked Espresso", color: "#3a2e25" },
    ],
    description:
      "A streamlined desk crafted for executive focus. Features hidden wire channels, solid brass ferrules, and soft-closing stationery drawers.",
    features: [
      "Solid kiln-dried teak with scratch-resistant matte ceramic coat",
      "Concealed power bar and cable-tray underneath",
      "Twin flush stationery drawers with dovetailed joints",
      "Available in bespoke lengths from 48\" to 72\"",
    ],
  },

  // Executive Tables
  {
    id: "executive-teak-desk",
    name: "The Rathore Executive Teak Table",
    category: "office",
    subcategory: "executive-tables",
    categoryLabel: "Executive Tables",
    price: "₹ 1,85,000",
    originalPrice: "₹ 2,10,000",
    priceNum: 185000,
    badge: "Flagship",
    rating: 4.9,
    reviewsCount: 14,
    woodType: "Aged Solid Teak",
    materials: "Solid Teak, Brass Cable Ports & Leather Writing Surface",
    dimensions: "72\" W × 36\" D × 30\" H",
    leadTime: "3–4 Weeks Bespoke",
    image: "/office-executive-luxury.jpg",
    swatches: [
      { name: "Golden Teak", color: "#b87d3b" },
      { name: "Dark Walnut", color: "#32271f" },
    ],
    description:
      "A commanding executive desk with integrated leather writing surface, solid brass cable-management grommets, and a floating modesty panel.",
    features: [
      "Full-grain vegetable-tanned leather inlaid writing pad",
      "Solid brass cable-management grommets on three faces",
      "Floating suspended modesty panel in matching teak",
      "Customisable length from 60\" to 96\"",
    ],
  },

  // Workstations
  {
    id: "jodhpur-workstation",
    name: "The Jodhpur Modular 4-Pod Workstation",
    category: "office",
    subcategory: "workstations",
    categoryLabel: "Workstations",
    price: "₹ 3,40,000",
    originalPrice: "₹ 3,90,000",
    priceNum: 340000,
    badge: "Modular",
    rating: 4.9,
    reviewsCount: 12,
    woodType: "Kiln-Dried Teak & Steel",
    materials: "Solid Teak Tops, Acoustic Bouclé Dividers & Brass Accents",
    dimensions: "120\" W × 60\" D × 29\" H (4-Person)",
    leadTime: "3–4 Weeks Bespoke",
    image: "/office-workstations-luxury.jpg",
    swatches: [
      { name: "Natural Honey Teak", color: "#c18c47" },
      { name: "Smoked Ash", color: "#4a423a" },
    ],
    description:
      "A collaborative 4-desk pod system engineered from solid teak worktops with integrated acoustic bouclé acoustic screens and central power spine.",
    features: [
      "4 individual ergonomic work surfaces with bevelled front edges",
      "Central continuous raceway for power, data, and HDMI",
      "Acoustic bouclé privacy and pin-up divider panels",
      "Modular expandability to 6, 8, or 12 pods",
    ],
  },

  // Office Chairs
  {
    id: "umaid-executive-chair",
    name: "The Umaid Ergonomic Teak & Leather Chair",
    category: "office",
    subcategory: "office-chairs",
    categoryLabel: "Office Chairs",
    price: "₹ 68,000",
    originalPrice: "₹ 78,000",
    priceNum: 68000,
    badge: "Ergonomic",
    rating: 5.0,
    reviewsCount: 27,
    woodType: "Solid Teak & Cast Brass",
    materials: "Top-Grain Italian Saddle Leather & Teak Base",
    dimensions: "26\" W × 26\" D × 42\"–46\" H",
    leadTime: "2 Weeks",
    image: "/office-chairs-luxury.jpg",
    swatches: [
      { name: "Saddle Tan Leather", color: "#8a5229" },
      { name: "Onyx Black Leather", color: "#1c1a18" },
      { name: "Olive Green Leather", color: "#424b35" },
    ],
    description:
      "A luxury executive swivel armchair pairing buttery Italian top-grain leather with single-block sculpted teak armrests and pneumatic height control.",
    features: [
      "Smooth pneumatic height adjustment and synchro-tilt mechanism",
      "Sculpted single-piece teak armrests with hand-rubbed oil finish",
      "High-density molded foam core with memory lumbar support",
      "Heavyweight 5-star teak-capped base with smooth silent castors",
    ],
  },

  // Conference Tables
  {
    id: "conference-table",
    name: "The Sardar Conference Table — 10-Seater",
    category: "office",
    subcategory: "conference-tables",
    categoryLabel: "Conference Tables",
    price: "₹ 4,50,000",
    originalPrice: "₹ 5,00,000",
    priceNum: 450000,
    badge: "Boardroom",
    rating: 4.8,
    reviewsCount: 9,
    woodType: "Kiln-Dried Sheesham Slab",
    materials: "Live-Edge Sheesham, Brass Inlay & Power Tower",
    dimensions: "120\" L × 48\" W × 30\" H",
    leadTime: "5–6 Weeks Bespoke",
    image: "/office-conference-luxury.jpg",
    swatches: [
      { name: "Natural Sheesham", color: "#a5733d" },
      { name: "Ebony Stain", color: "#1e1710" },
    ],
    description:
      "A live-edge sheesham boardroom table with integrated flush power-tower: HDMI, USB-C, and wireless charging. 10 executive chairs included.",
    features: [
      "Live-edge bookmatched sheesham slab top",
      "Recessed flush power tower with HDMI & USB-C",
      "Hairline brass edge inlay around full perimeter",
      "10 matching executive chairs included",
    ],
  },

  // Reception Desks
  {
    id: "reception-desk",
    name: "The Jodhpur Reception Console Desk",
    category: "office",
    subcategory: "reception-desks",
    categoryLabel: "Reception Desks",
    price: "₹ 2,20,000",
    priceNum: 220000,
    badge: "First Impression",
    rating: 4.7,
    reviewsCount: 11,
    woodType: "Hand-Rubbed Solid Teak",
    materials: "Teak, Fluted Tambour Front & Cast Brass Logo Panel",
    dimensions: "84\" W × 24\" D × 42\" H",
    leadTime: "3–4 Weeks Bespoke",
    image: "/office-reception-luxury.jpg",
    swatches: [
      { name: "Natural Teak", color: "#c18c47" },
      { name: "Charcoal Stain", color: "#2b2520" },
    ],
    description:
      "A grand reception desk with fluted tambour front panels, custom brass logo mounting plate, and concealed rear storage.",
    features: [
      "Fluted solid teak tambour front panels",
      "Custom brass logo/signage mounting plate included",
      "Concealed rear storage with soft-close doors",
      "Integrated cable trunking and grommet access",
    ],
  },

  // Storage Cabinets
  {
    id: "mandore-office-cabinet",
    name: "The Mandore Teak Filing & Storage Cabinet",
    category: "office",
    subcategory: "storage-cabinets",
    categoryLabel: "Storage Cabinets",
    price: "₹ 1,55,000",
    originalPrice: "₹ 1,75,000",
    priceNum: 155000,
    badge: "Archive",
    rating: 4.8,
    reviewsCount: 15,
    woodType: "Solid Teak",
    materials: "Solid Teak, Lockable German Hardware & Brass Pulls",
    dimensions: "64\" W × 18\" D × 38\" H",
    leadTime: "3 Weeks",
    image: "/office-storage-luxury.jpg",
    swatches: [
      { name: "Oiled Teak", color: "#a5733d" },
      { name: "Smoked Espresso", color: "#3a2e25" },
    ],
    description:
      "Executive low-line filing credenza with central lockable document bays, lateral file drawer suspension, and open architectural display shelf.",
    features: [
      "Heavy-duty full-extension ball-bearing drawer slides",
      "Central German keyed-alike lock for sensitive documents",
      "Adjustable internal hardwood shelving",
      "Reinforced top rated to support 150kg printers or displays",
    ],
  },

  // Meeting-Room Furniture
  {
    id: "mehrangarh-meeting-suite",
    name: "The Mehrangarh 6-Person Meeting Suite",
    category: "office",
    subcategory: "meeting-room",
    categoryLabel: "Meeting-Room Furniture",
    price: "₹ 2,95,000",
    originalPrice: "₹ 3,35,000",
    priceNum: 295000,
    badge: "Turnkey",
    rating: 4.9,
    reviewsCount: 13,
    woodType: "Seasoned Teak & Cast Brass",
    materials: "Teak Table + 6 Ergonomic Conference Armchairs",
    dimensions: "84\" L × 40\" W × 30\" H",
    leadTime: "3–4 Weeks",
    image: "/office-meeting-luxury.jpg",
    swatches: [
      { name: "Warm Honey Teak", color: "#b87c3a" },
      { name: "Dark Walnut Tint", color: "#32271f" },
    ],
    description:
      "A complete turnkey meeting-room ensemble designed for client presentations and team huddles. Includes solid teak table with center wire box and 6 matching chairs.",
    features: [
      "Complete set: 84\" solid teak table and 6 upholstered armchairs",
      "Central flip-top brushed aluminum cable & power module",
      "Chamfered comfort-edge design for natural arm resting",
      "Stain-resistant commercial polyurethane satin finish",
    ],
  },
];

// ─── CUSTOMIZED FURNITURE ─────────────────────────────────────────────────────
export const customizedFurnitureProducts: ProductItem[] = [
  {
    id: "bespoke-wardrobe",
    name: "Walk-In Bespoke Teak Wardrobe System",
    category: "customized",
    categoryLabel: "Customized Furniture",
    price: "₹ 3,20,000",
    priceNum: 320000,
    badge: "Made to Measure",
    rating: 5.0,
    reviewsCount: 17,
    woodType: "Seasoned Solid Teak",
    materials: "Solid Teak, Fluted Glass Doors & Brass Fittings",
    dimensions: "Custom to your space",
    leadTime: "4–6 Weeks Bespoke",
    image: "/sofa-after.jpg",
    swatches: [
      { name: "Natural Teak", color: "#b87d3b" },
      { name: "Ebonised Teak", color: "#1e1710" },
      { name: "Bleached White", color: "#ede9e1" },
    ],
    description:
      "A fully bespoke floor-to-ceiling wardrobe system designed to your exact room dimensions, lifestyle requirements, and aesthetic preferences.",
    features: [
      "Engineered to your exact room width, height, and depth",
      "Internal layout designed around your specific needs",
      "Fluted glass or solid teak door panels",
      "Integrated LED strip lighting and brass hanging rails",
    ],
  },
  {
    id: "custom-tv-unit",
    name: "Bespoke Fluted Teak TV & Media Unit",
    category: "customized",
    categoryLabel: "Customized Furniture",
    price: "₹ 1,40,000",
    priceNum: 140000,
    badge: "Custom Size",
    rating: 4.9,
    reviewsCount: 23,
    woodType: "Solid Teak",
    materials: "Solid Teak, Rattan Inserts & Brass Leg",
    dimensions: "Custom — 48\" to 96\" wide",
    leadTime: "2–3 Weeks Bespoke",
    image: "/table-after.jpg",
    swatches: [
      { name: "Golden Teak", color: "#c18c47" },
      { name: "Smoked Teak", color: "#3a2e25" },
    ],
    description:
      "A TV unit built to your wall width and viewing height. Choose drawer count, door style, cable management, and finish.",
    features: [
      "Sized exactly to your wall — no filler strips",
      "Rattan cane or fluted teak door panel inserts",
      "Integrated rear cable management channels",
      "Floating wall-mounted or brass-legged floor versions",
    ],
  },
];

// ─── Combined export ───────────────────────────────────────────────────────────
export const luxuryProducts: ProductItem[] = [
  ...homeFurnitureProducts,
  ...officeFurnitureProducts,
  ...customizedFurnitureProducts,
];

// ─── Home Furniture subcategories ─────────────────────────────────────────────
export const homeSubcategories = [
  { id: "all-home", label: "All Home" },
  { id: "sofas-couches", label: "Sofas and Couches" },
  { id: "beds-headboards", label: "Beds and Headboards" },
  { id: "dining-tables", label: "Dining Tables & Chairs" },
  { id: "coffee-tables", label: "Coffee Tables" },
  { id: "side-tables", label: "Side Tables" },
  { id: "wardrobes", label: "Wardrobes" },
  { id: "console-tables", label: "Console Tables" },
  { id: "cabinets-storage", label: "Cabinets & Storage" },
  { id: "study-tables", label: "Study Tables" },
  { id: "bookshelves", label: "Bookshelves" },
  { id: "accent-furniture", label: "Accent Furniture" },
];

// ─── Office Furniture subcategories ───────────────────────────────────────────
export const officeSubcategories = [
  { id: "all-office", label: "All Office" },
  { id: "office-desks", label: "Office Desks" },
  { id: "executive-tables", label: "Executive Tables" },
  { id: "workstations", label: "Workstations" },
  { id: "office-chairs", label: "Office Chairs" },
  { id: "conference-tables", label: "Conference Tables" },
  { id: "reception-desks", label: "Reception Desks" },
  { id: "storage-cabinets", label: "Storage Cabinets" },
  { id: "meeting-room", label: "Meeting-Room Furniture" },
];
