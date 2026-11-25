"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface SuiteItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  badge: string;
  pieces: string[];
  materials: string;
  highlight: string;
  whatsappMessage: string;
}

const residentialSuites: SuiteItem[] = [
  {
    id: "living-lounge",
    name: "Living & Salon Suite",
    tagline: "Curved Sectionals, Sculptural Lounge & Plinth Tables",
    image: "/home-sofas.jpg",
    badge: "Residential • Living",
    pieces: [
      "Curved Tuxedo Sofas & Modular Sectionals",
      "Live-Bevel Marble & Brass Coffee Tables",
      "Petite Solid Wood Accent Plinths",
      "Ergonomic Reading Armchairs",
    ],
    materials: "Kiln-dried Burma Teak & Italian Caramel Velvet / Bouclé",
    highlight: "Custom radius curvature matched to your wall angles & light wells",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to enquire about custom Living & Salon furniture for my space.",
  },
  {
    id: "dining-banquet",
    name: "Dining & Banquet Suite",
    tagline: "Live-Bevel Teak Slabs with Lost-Wax Brass Inlay",
    image: "/table-after.jpg",
    badge: "Residential • Dining",
    pieces: [
      "Solid Teak Monolith Tables (6 to 14 Seaters)",
      "Sculptural Dining Chairs with Lumbar Contours",
      "Credenza Buffets & Wine Vitrines",
      "Bespoke Fluted Bar Cabinets",
    ],
    materials: "Aged Solid Teak, Chiseled Cast Brass & Honed Stone",
    highlight: "Precision bookmatched timber planks with natural food-safe wax polish",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to commission a bespoke Dining Table / Banquet Suite.",
  },
  {
    id: "bedroom-sanctuary",
    name: "Bedroom Sanctuary Suite",
    tagline: "Cantilevered Platform Beds & Fluted Wardrobes",
    image: "/home-beds.jpg",
    badge: "Residential • Bedroom",
    pieces: [
      "Low-Profile Platform Beds with Integrated Nightstands",
      "Woven Cane & Upholstered Acoustic Headboards",
      "Fluted Teak Walk-In Wardrobes with LED Channels",
      "Minimalist Dressing Consoles with Vanity Mirrors",
    ],
    materials: "Solid Hardwood Frame, Natural Cane & Blum Soft-Close Joinery",
    highlight: "Engineered to your exact mattress thickness and bedroom floor plan",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to discuss bespoke Bedroom Furniture & Wardrobe solutions.",
  },
  {
    id: "architectural-storage",
    name: "Architectural Consoles & Storage",
    tagline: "Floating TV Consoles, Libraries & Display Buffets",
    image: "/credenza-after.jpg",
    badge: "Residential • Storage",
    pieces: [
      "Floating Acoustic TV Consoles with Cane Fronts",
      "Floor-to-Ceiling Modular Hardwood Libraries",
      "Heirloom Bar Cabinets with Brass Glassware Racks",
      "Entryway Statement Console Tables with Marble Tops",
    ],
    materials: "Smoked Teak, Lost-Wax Brass Hardware & Acoustic Mesh",
    highlight: "Concealed wiring raceways, acoustic pass-throughs, and anti-sag shelves",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to enquire about bespoke Consoles & Storage millwork.",
  },
];

const commercialSuites: SuiteItem[] = [
  {
    id: "executive-director",
    name: "C-Suite & Director Suites",
    tagline: "Commanding Executive Tables in Smoked Walnut & Teak",
    image: "/office-executive-luxury.jpg",
    badge: "Commercial • Executive",
    pieces: [
      "Director Workstations with Wireless Power Wells",
      "Matching Credenza & High-Security Storage Suites",
      "Hand-Stitched Leather & Brass Swivel Chairs",
      "Private Discussion Low-Tables with Club Chairs",
    ],
    materials: "Kiln-Dried Hardwood, Architectural Brass & Top-Grain Leather",
    highlight: "Integrated multi-monitor cable architecture & concealed biometric drawers",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to enquire about Executive Director Tables and C-Suite furniture.",
  },
  {
    id: "boardroom-conference",
    name: "Boardroom & Conference Centers",
    tagline: "10 to 24-Seater Monolith Boardroom Centerpieces",
    image: "/office-conference-luxury.jpg",
    badge: "Commercial • Boardroom",
    pieces: [
      "Continuous Teak Boardroom Tables with Brass Wire Inlays",
      "Acoustic Ergonomic Conference Armchairs",
      "Integrated AV & Telepresence Connectivity Trays",
      "Executive Beverage Buffets & Credenzas",
    ],
    materials: "Seasoned Teak Timber, Laser-Cut Brass & Steel Sub-Structure",
    highlight: "Vibration-dampened subframes engineered for zero wobble at 24-foot spans",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to discuss a custom Boardroom / Conference Table project.",
  },
  {
    id: "workstations-team-pods",
    name: "Modular Team Workstations",
    tagline: "Collaborative 2-Pod to 8-Pod Workstations",
    image: "/office-workstations-luxury.jpg",
    badge: "Commercial • Workstations",
    pieces: [
      "Modular 4-Pod and 6-Pod Collaborative Clusters",
      "Acoustic Bouclé Privacy Screens & Pinboards",
      "Under-Desk Mobile File Pedestals with Cushions",
      "Height-Adjustable Stand-Desk Teak Converters",
    ],
    materials: "Kiln-Dried Teak Slabs, Powder-Coated Steel & Acoustic Felt",
    highlight: "Rapid modular reconfiguration with integrated high-density cable trays",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to get a quote for Modular Office Workstations.",
  },
  {
    id: "reception-hospitality",
    name: "Hospitality & Statement Receptions",
    tagline: "Curved Fluted Teak Receptions & Boutique Hotel Suites",
    image: "/office-reception-luxury.jpg",
    badge: "Commercial • Hospitality",
    pieces: [
      "Curved Statement Reception Counters with LED Coves",
      "Hotel Room Full Millwork Suites (Beds, Desks, Luggage Racks)",
      "Waiting Lounge Benches & Sculptural Settees",
      "Retail Display Plinths & Vitrines with Brass Trim",
    ],
    materials: "Fluted Hardwood, Honed Quartz Stone & Brushed Brass",
    highlight: "Engineered for high-traffic commercial durability with luxury aesthetics",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to discuss Hospitality / Reception Furniture for a project.",
  },
];

const workflowSteps = [
  {
    num: "01",
    phase: "Design & Blueprint",
    title: "Share Your Vision or CAD",
    desc: "Send us your 2D floor plans, 3D CAD drawings, hand sketches, or Pinterest reference photos. We assess space constraints, walkway clearances, and structural proportions.",
  },
  {
    num: "02",
    phase: "Material Curation",
    title: "Timber & Velvet Swatch Approval",
    desc: "We curate timber blocks (Burma Teak, Smoked Sheesham, Walnut), lost-wax brass samples, and Italian velvet fabric swatches shipped directly to your home or studio.",
  },
  {
    num: "03",
    phase: "Master Joinery",
    title: "Hereditary Jodhpur Craftsmanship",
    desc: "Our master artisans hand-cut traditional mortise-and-tenon joints, turn brass components, and hand-chisel every detail to exact millimeter specifications.",
  },
  {
    num: "04",
    phase: "QC & White-Glove Setup",
    title: "Rigorous Pre-Dispatch Inspection",
    desc: "Every piece undergoes a 24-point stability and surface inspection before padded transport and white-glove inside-room installation across all Indian metros.",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial" | "workflow">("residential");

  return (
    <main className="min-h-screen bg-[#faf9f6] text-ink pb-24">
      {/* ── Top Breadcrumb & Return to 360° Studio Bar ── */}
      <div className="border-b border-hairline/80 bg-white/90 backdrop-blur-xs sticky top-0 z-40">
        <div className="mx-auto max-w-[1540px] px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-2 text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-ink-muted hover:text-gold-dark font-medium transition-colors group shrink-0"
          >
            <span className="text-sm transition-transform group-hover:-translate-x-1">←</span>
            <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">
              Back to 360° Studio
            </span>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider text-ink-faint">
            <Link href="/" className="hover:text-gold-dark hidden sm:inline">
              Home
            </Link>
            <span className="hidden sm:inline">/</span>
            <span className="text-gold-dark font-semibold">Bespoke Atelier</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12 pt-8 sm:pt-14">
        {/* ── Simple, Clean, Unique Editorial Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-hairline">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark mb-2">
              <span className="w-2 h-2 rounded-full bg-gold-dark" />
              <span>THE BESPOKE ATELIER</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.12]">
              Tailored Around Your Space.
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-ink-muted font-serif italic max-w-xl">
              From standalone statement pieces to turnkey architectural hospitality projects &mdash; handcrafted in Jodhpur to your exact dimensions.
            </p>
          </div>

          {/* Simple Tab Switcher */}
          <div className="flex items-center gap-1.5 bg-[#f0ebe1] p-1.5 rounded-full shrink-0 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "residential"
                  ? "bg-[#181714] text-white shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Residential Suites
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "commercial"
                  ? "bg-[#181714] text-white shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Commercial &amp; Offices
            </button>
            <button
              onClick={() => setActiveTab("workflow")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "workflow"
                  ? "bg-[#181714] text-white shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              How We Build &rarr;
            </button>
          </div>
        </div>

        {/* ── TAB 1: RESIDENTIAL SUITES ── */}
        {activeTab === "residential" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-2 animate-in fade-in duration-300">
            {residentialSuites.map((suite) => (
              <div
                key={suite.id}
                className="bg-white border border-hairline rounded-sm overflow-hidden flex flex-col justify-between shadow-2xs hover:border-gold/60 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Suite Image with Subtle Zoom */}
                  <div className="relative aspect-[16/10] w-full bg-[#f6f2ea] overflow-hidden">
                    <Image
                      src={suite.image}
                      alt={suite.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-semibold text-gold-dark border border-gold/30">
                      {suite.badge}
                    </div>
                  </div>

                  {/* Suite Content */}
                  <div className="p-6 sm:p-8">
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink leading-snug group-hover:text-gold-dark transition-colors">
                      {suite.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gold-dark font-medium mt-1 font-serif italic">
                      {suite.tagline}
                    </p>

                    {/* Pieces Breakdown */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-hairline/70">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-faint">
                        Available Commissions
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs text-ink-muted">
                        {suite.pieces.map((piece, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-gold-dark font-bold shrink-0">&bull;</span>
                            <span>{piece}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications Callout */}
                    <div className="mt-5 p-3.5 bg-[#faf8f5] border border-hairline/80 rounded-xs space-y-1.5 text-xs">
                      <div>
                        <span className="text-ink-faint uppercase text-[10px] tracking-wider block">Material Standards</span>
                        <span className="text-ink font-semibold">{suite.materials}</span>
                      </div>
                      <div>
                        <span className="text-ink-faint uppercase text-[10px] tracking-wider block">Atelier Advantage</span>
                        <span className="text-ink-muted">{suite.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={`https://wa.me/919530182514?text=${encodeURIComponent(suite.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 px-5 rounded-full bg-[#181714] hover:bg-gold-dark text-white flex items-center justify-between text-xs uppercase tracking-wider font-semibold transition-all shadow-sm group-hover:bg-gold-dark"
                  >
                    <span>Commission This Suite on WhatsApp</span>
                    <span className="text-base">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB 2: COMMERCIAL & OFFICE SUITES ── */}
        {activeTab === "commercial" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-2 animate-in fade-in duration-300">
            {commercialSuites.map((suite) => (
              <div
                key={suite.id}
                className="bg-white border border-hairline rounded-sm overflow-hidden flex flex-col justify-between shadow-2xs hover:border-gold/60 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-[#f6f2ea] overflow-hidden">
                    <Image
                      src={suite.image}
                      alt={suite.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-semibold text-gold-dark border border-gold/30">
                      {suite.badge}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink leading-snug group-hover:text-gold-dark transition-colors">
                      {suite.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gold-dark font-medium mt-1 font-serif italic">
                      {suite.tagline}
                    </p>

                    <div className="mt-5 space-y-2 pt-4 border-t border-hairline/70">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-faint">
                        Commercial Elements
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs text-ink-muted">
                        {suite.pieces.map((piece, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-gold-dark font-bold shrink-0">&bull;</span>
                            <span>{piece}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 p-3.5 bg-[#faf8f5] border border-hairline/80 rounded-xs space-y-1.5 text-xs">
                      <div>
                        <span className="text-ink-faint uppercase text-[10px] tracking-wider block">Structural Specifications</span>
                        <span className="text-ink font-semibold">{suite.materials}</span>
                      </div>
                      <div>
                        <span className="text-ink-faint uppercase text-[10px] tracking-wider block">Commercial Engineering</span>
                        <span className="text-ink-muted">{suite.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={`https://wa.me/919530182514?text=${encodeURIComponent(suite.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 px-5 rounded-full bg-[#181714] hover:bg-gold-dark text-white flex items-center justify-between text-xs uppercase tracking-wider font-semibold transition-all shadow-sm group-hover:bg-gold-dark"
                  >
                    <span>Request Commercial / Office Proposal</span>
                    <span className="text-base">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB 3: HOW WE BUILD (UNIQUE WORKFLOW TIMELINE) ── */}
        {activeTab === "workflow" && (
          <div className="mt-10 space-y-10 animate-in fade-in duration-300">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark block mb-2">
                FROM CONCEPT TO ROOM PLACEMENT
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-ink">
                How Your Bespoke Furniture Is Born
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Zero hassle coordinating separate carpenters. Our centralized Jodhpur workshop manages the entire journey with accountability.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {workflowSteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-white p-7 border border-hairline rounded-sm flex flex-col justify-between hover:border-gold/60 hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-hairline">
                      <span className="font-numeric text-2xl font-bold text-gold-dark tracking-tight">{step.num}.</span>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-ink-faint bg-[#faf8f5] px-2 py-0.5 rounded-full">
                        {step.phase}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-ink mt-4 leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-hairline/60 text-[11px] text-gold-dark font-medium flex items-center gap-1">
                    <span>Precision Phase {step.num}</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Direct Workshop Blueprint & Floorplan Consultation Bar ── */}
        <div className="mt-14 bg-gradient-to-r from-[#181714] via-[#24221d] to-[#181714] text-white p-8 sm:p-12 rounded-sm border border-gold/30 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold block">
              Architectural &amp; Bespoke Consultation
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1 leading-snug">
              Have a Blueprint, CAD Model or Reference Photo?
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
              Send us your floor plan or reference images. Our hereditary Jodhpur craftsmen engineer bespoke pieces tailored to your exact architectural space.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20would%20like%20to%20share%20my%20floorplan%20/%20furniture%20drawings."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-12 px-7 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp Project Drawings</span>
            </a>

            <a
              href="tel:+919530182514"
              className="w-full sm:w-auto h-12 px-6 rounded-full border border-white/30 hover:border-gold text-white hover:text-gold flex items-center justify-center text-xs uppercase tracking-wider font-semibold transition-all bg-white/5"
            >
              <span>Call: +91 9530182514</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
