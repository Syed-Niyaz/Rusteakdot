export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  year: string;
  hours: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  beforeImage: string;
  afterImage: string;
  tags: string[];
}

export const transformationProjects: BeforeAfterItem[] = [
  {
    id: "gang-tower-sofa",
    title: "01. The Gang Tower 4-Seater Sofa",
    category: "Master Restoration & Bespoke Upholstery",
    year: "Circa 1978 → 2025 Bespoke",
    hours: "185 Craft Hours",
    beforeLabel: "BEFORE: Weathered Frame & Sagging Core",
    afterLabel: "AFTER: Kiln-Dried Teak, Cast Brass Legs & Velvet",
    beforeDesc:
      "Original 1970s estate sofa with dried-out timber, loose dowel joints, collapsed jute webbing, and worn synthetic fabric.",
    afterDesc:
      "Complete timber rejuvenation, precision mortise-and-tenon joints, pocketed spring core, Italian caramel velvet, and custom lost-wax cast brass feet.",
    beforeImage: "/sofa-before.jpg",
    afterImage: "/sofa-after.jpg",
    tags: ["Aged Teak Wood", "Italian Velvet", "Cast Brass Legs", "Hand-Tufted"],
  },
  {
    id: "marwar-armchair",
    title: "02. The Marwar Sculptural Lounge Chair",
    category: "Mid-Century Teak & Italian Champagne Velvet",
    year: "Circa 1964 → 2025 Bespoke",
    hours: "92 Craft Hours",
    beforeLabel: "BEFORE: Scuffed Finish & Worn Sagging Cushions",
    afterLabel: "AFTER: Hand-Rubbed Oiled Teak & Brass Leg Tips",
    beforeDesc:
      "Vintage Danish-style low armchair with chipped lacquer, surface oxidation, loose arm joints, and degraded foam cushions.",
    afterDesc:
      "Hand-stripped and conditioned with virgin linseed and beeswax, reinforced structural dowels, high-density feather core, and polished brass ferrule feet.",
    beforeImage: "/chair-before.jpg",
    afterImage: "/chair-after.jpg",
    tags: ["Danish Modern Form", "Linseed Oil Finish", "Solid Brass Ferrules", "Champagne Velvet"],
  },
  {
    id: "mandore-coffee-table",
    title: "03. The Mandore Teak & Cast Brass Table",
    category: "Solid Timber Slab & Lost-Wax Brass Architecture",
    year: "Circa 1982 → 2025 Bespoke",
    hours: "120 Craft Hours",
    beforeLabel: "BEFORE: Cloudy Lacquer, Water Rings & Rustic Base",
    afterLabel: "AFTER: Mirror-Satin Teak Slab & Sculptural Brass Legs",
    beforeDesc:
      "Heavy Indian estate coffee table burdened with cloudy aged polyurethane, deep moisture rings, surface checking, and bulky outdated timber legs.",
    afterDesc:
      "Grain bookmatched and hand-planed to reveal vibrant golden-honey heartwood, finished in silky satin matte, and elevated on architectural solid cast brass legs.",
    beforeImage: "/table-before.jpg",
    afterImage: "/table-after.jpg",
    tags: ["Solid Old-Growth Teak", "Lost-Wax Brass", "Satin Hand Rub", "Waterproof Seal"],
  },
];
