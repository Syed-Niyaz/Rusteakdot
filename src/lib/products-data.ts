export interface ProductItem {
  id: string;
  name: string;
  category: "sofas" | "chairs" | "tables" | "dining" | "casegoods";
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

export const luxuryProducts: ProductItem[] = [
  {
    id: "gang-tower-sofa",
    name: "The Gang Tower 4-Seater Lounge",
    category: "sofas",
    categoryLabel: "Living Room Sofas",
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
    image: "/sofa-after.jpg",
    swatches: [
      { name: "Caramel Velvet", color: "#b87d3b" },
      { name: "Alabaster Bouclé", color: "#f3ede2" },
      { name: "Deep Charcoal", color: "#22201e" },
      { name: "Emerald Weave", color: "#2d4436" },
    ],
    description:
      "Our most acclaimed architectural seating centerpiece. Featuring an uninterrupted kiln-dried teak foundation, hand-poured solid brass sculptural legs, and dual-density pocket-coil comfort cushions.",
    features: [
      "Individually poured lost-wax solid brass leg castings",
      "10-year structural warranty on internal hardwood timber",
      "High-resilience pocket coils with hypoallergenic feather wrap",
      "Custom length options available from 78\" to 124\"",
    ],
  },
  {
    id: "marwar-armchair",
    name: "The Marwar Sculptural Lounge Chair",
    category: "chairs",
    categoryLabel: "Accent Chairs",
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
    image: "/chair-after.jpg",
    swatches: [
      { name: "Champagne Velvet", color: "#d9be8c" },
      { name: "Tobacco Saddle", color: "#744b29" },
      { name: "Oatmeal Linen", color: "#e4ddd1" },
    ],
    description:
      "A tribute to Scandinavian modern lines reinterpreted through Jodhpur craftsmanship. Seamless sculpted armrests carved from single-billet teakwood and capped with hand-buffed brass ferrule tips.",
    features: [
      "Single-block sculpted curved organic armrests",
      "Triple-hand-rubbed virgin linseed and beeswax polish",
      "High-density foam with memory crown for supportive lumbar posture",
      "Brass ferrule caps prevent floor scuffing and add radiant luster",
    ],
  },
  {
    id: "mandore-coffee-table",
    name: "The Mandore Teak & Cast Brass Coffee Table",
    category: "tables",
    categoryLabel: "Coffee & Accent Tables",
    price: "₹ 1,15,000",
    originalPrice: "₹ 1,35,000",
    priceNum: 115000,
    badge: "Architectural",
    rating: 4.8,
    reviewsCount: 36,
    woodType: "Old-Growth Teak Slab",
    materials: "Bookmatched Teak & Lost-Wax Brass Architecture",
    dimensions: "56\" L × 30\" W × 16\" H",
    leadTime: "3 Weeks Handcrafting",
    image: "/table-after.jpg",
    swatches: [
      { name: "Golden Honey", color: "#c18c47" },
      { name: "Smoked Espresso", color: "#3a2e25" },
      { name: "Bleached Raw Teak", color: "#dfd2be" },
    ],
    description:
      "A grand low coffee table featuring an organic live-bevel solid teak slab floating on architectural tripod cast brass legs. Sealed with proprietary waterproof matte ceramic oil.",
    features: [
      "Over 40mm thick bookmatched solid teak tabletop",
      "Waterproof and stain-resistant satin natural finish",
      "Heavyweight sand-cast brass legs with floor levelers",
      "Available with custom integrated bronze smoked glass reveals",
    ],
  },
  {
    id: "mehrangarh-dining-table",
    name: "The Mehrangarh Imperial 8-Seater Dining Suite",
    category: "dining",
    categoryLabel: "Dining Suites",
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
    image: "/dining-after.jpg",
    swatches: [
      { name: "Warm Honey Teak", color: "#b87c3a" },
      { name: "Dark Walnut Tint", color: "#32271f" },
    ],
    description:
      "An imperial banquet centerpiece inspired by the halls of Jodhpur royal residences. Finished with subtle hairline brass inlays running along the chamfered edge and includes 8 upholstered dining chairs.",
    features: [
      "Includes 8 handcrafted teak dining armchairs with velvet seats",
      "Brass wire inlays hand-hammered into micro-grooves by traditional artisans",
      "Kiln-dried to 8% moisture equilibrium to withstand climatic shifts",
      "Accommodates up to 10 guests with hidden tension butterfly extension",
    ],
  },
  {
    id: "umaid-platform-bed",
    name: "The Umaid Floating Teak & Bouclé Platform Bed",
    category: "casegoods",
    categoryLabel: "Bedroom & Casegoods",
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
    image: "/bed-after.jpg",
    swatches: [
      { name: "Ivory Bouclé", color: "#eee8de" },
      { name: "Caramel Velvet", color: "#b87d3b" },
      { name: "Muted Sage", color: "#8b9485" },
    ],
    description:
      "A serene low platform sanctuary engineered with cantilevered floating teak plinths, acoustic bouclé acoustic headboard panels, and heritage hand-woven cane wing accents.",
    features: [
      "Cantilevered base creates a weightless, floating bed aesthetic",
      "Solid beechwood spring-slat suspension for mattress breathability",
      "Integrated dual concealed nightstand ledges with brass wire routing",
      "Natural Jodhpur woven cane panels hand-tensioned to perfection",
    ],
  },
  {
    id: "kailana-fluted-credenza",
    name: "The Kailana 4-Door Fluted Teak Credenza",
    category: "casegoods",
    categoryLabel: "Bedroom & Casegoods",
    price: "₹ 1,65,000",
    originalPrice: "₹ 1,90,000",
    priceNum: 165000,
    badge: "Sculptural",
    rating: 4.9,
    reviewsCount: 31,
    woodType: "Solid Fluted Teak",
    materials: "Solid Teak Tambour, Cast Brass Pulls & Marble Top",
    dimensions: "72\" W × 20\" D × 32\" H",
    leadTime: "3 Weeks Bespoke",
    image: "/credenza-after.jpg",
    swatches: [
      { name: "Natural Oiled Teak", color: "#a5733d" },
      { name: "Smoked Charcoal", color: "#2b2520" },
    ],
    description:
      "A statement storage console featuring dozens of individually machined vertical fluted teak battens wrapping smoothly around radius corners. Finished with polished brass handles.",
    features: [
      "Seamless radiused corner doors with smooth soft-close German hinges",
      "Solid brass knurled column handles custom turned in Jodhpur",
      "Adjustable internal hardwood shelving with cable-management apertures",
      "Choice of solid bookmatched teak top or Italian Carrara marble surface",
    ],
  },
];
