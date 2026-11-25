import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clients & Architectural Collaborations — RUSTEAK DOT Jodhpur",
  description:
    "RUSTEAK DOT partners with architects, interior designers, luxury hospitality brands, corporate HQs, and private homeowners across India for bespoke precision-crafted furniture.",
};

interface ClientSector {
  id: string;
  category: string;
  title: string;
  tagline: string;
  scope: string[];
  engagement: string;
  whatsappMessage: string;
}

const clientSectors: ClientSector[] = [
  {
    id: "private-residences",
    category: "Private Residential",
    title: "Discerning Homeowners & Estates",
    tagline: "Custom Living Suites, Platform Beds & Heirloom Restorations",
    scope: [
      "Custom curved sectionals & tuxedo sofas built to room floor plans",
      "Solid Burma teak dining tables (6 to 14 seaters) with brass inlays",
      "Full bedroom sanctuary platform beds with integrated floating nightstands",
      "Restoration of family vintage heirlooms into contemporary focal pieces",
    ],
    engagement: "Direct atelier consultation, material swatches delivered home, white-glove setup.",
    whatsappMessage: "Hello RUSTEAK DOT, I am an individual homeowner looking to commission custom furniture for my residence.",
  },
  {
    id: "architects-designers",
    category: "Design Trade",
    title: "Architects & Interior Designers",
    tagline: "Custom Manufacturing from CAD Blueprints & 3D Renders",
    scope: [
      "Precision manufacturing strictly adhering to architect specification sheets",
      "Custom wood staining (honey, walnut, smoked charcoal) and brass finishes",
      "Turnkey millwork, bespoke credenzas, floating consoles and fluted panels",
      "Dedicated Jodhpur workshop project manager with live photo QC updates",
    ],
    engagement: "Trade pricing, CAD blueprint engineering, expedited sample dispatch.",
    whatsappMessage: "Hello RUSTEAK DOT, I am an architect / interior designer looking to partner on upcoming client projects.",
  },
  {
    id: "corporate-workspaces",
    category: "Commercial & HQ",
    title: "Corporate Offices & Innovation Hubs",
    tagline: "Executive Director Desks, Boardrooms & Acoustic Lounges",
    scope: [
      "10 to 24-seater solid hardwood conference tables with concealed wire raceways",
      "Director workstations with wireless charging wells and lockable drawers",
      "Modular breakout booths and acoustic bouclé lounge seating",
      "Reception statement desks featuring hand-chiseled stone and fluted teak",
    ],
    engagement: "Turnkey office installations, heavy commercial duty hardware, warranty cover.",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to enquire about bespoke commercial furniture for our corporate office.",
  },
  {
    id: "hospitality-resorts",
    category: "Hospitality & Boutique",
    title: "Hotels, Heritage Haveli & Resorts",
    tagline: "High-Traffic Luxury Suites, Lobby Lounges & Banquet Halls",
    scope: [
      "Heavy-duty solid Sheesham and teak guest room suites (bed, desk, wardrobe)",
      "Lobby lounge conversation clusters upholstered in water-repellent performance fabrics",
      "Bespoke bar counters, back-bar vitrines, and restaurant dining tables",
      "Handcrafted cabana outdoor teak loungers with weather-resistant finishes",
    ],
    engagement: "Multi-room volume production schedules, phased dispatches, on-site installation teams.",
    whatsappMessage: "Hello RUSTEAK DOT, I represent a hospitality brand / resort seeking bespoke furniture manufacturing.",
  },
  {
    id: "commercial-retail",
    category: "Retail & Gastronomy",
    title: "Boutiques, Cafés & Showrooms",
    tagline: "Architectural Display Fixtures & Signature Customer Seating",
    scope: [
      "Curated retail display plinths, brass clothing racks, and cashier counters",
      "Bespoke cafe banquettes, bistro dining tables, and bar stools",
      "Acoustic fluted partition screens and modular merchandising shelving",
      "High-durability commercial scratch-resistant polyurethane and micro-wax seals",
    ],
    engagement: "Custom architectural branding integration, rapid turnkey delivery.",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to enquire about custom furniture for our retail store / cafe space.",
  },
  {
    id: "turnkey-institutions",
    category: "Institutional & Bulk",
    title: "Institutions & Real Estate Developers",
    tagline: "Model Apartment Furnishing & Turnkey Property Fit-Outs",
    scope: [
      "Complete model home furniture packages for premium residential developments",
      "Library book stacks, executive reading tables, and club room furniture",
      "Standardized multi-unit production with strict batch-to-batch color consistency",
      "End-to-end logistics with transit insurance and room-placement guarantee",
    ],
    engagement: "Volume contract pricing, formal quotation schedules, milestone billing.",
    whatsappMessage: "Hello RUSTEAK DOT, I would like to discuss a bulk institutional / real estate project requirement.",
  },
];

export default function ClientsPage() {
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
            <span className="text-gold-dark font-semibold">Client Partnerships</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12 pt-8 sm:pt-14">
        {/* ── Unique Editorial Header ── */}
        <div className="pb-10 border-b border-hairline flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark mb-3">
              <span className="w-2 h-2 rounded-full bg-gold-dark" />
              <span>COMMISSIONS &amp; PARTNERSHIPS</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.08]">
              Who We Build For.
              <br />
              <span className="font-normal italic font-serif text-gold-dark">
                From One Room to Turnkey Projects.
              </span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm lg:text-base text-ink-muted leading-relaxed font-serif italic max-w-xl">
              Whether you need a single custom-dimensioned teak dining table for your residence or 50 executive suites for a luxury hotel &mdash; our Jodhpur atelier executes every commission with heirloom precision.
            </p>
          </div>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0 max-w-lg w-full">
            <div className="bg-white p-4 border border-hairline rounded-xs shadow-2xs text-center">
              <span className="text-gold-dark font-numeric text-xl sm:text-2xl font-bold block">10+ Yrs</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-wider block mt-0.5">Heritage Experience</span>
            </div>
            <div className="bg-white p-4 border border-hairline rounded-xs shadow-2xs text-center">
              <span className="text-gold-dark font-numeric text-xl sm:text-2xl font-bold block">100%</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-wider block mt-0.5">Custom Dimensions</span>
            </div>
            <div className="bg-white p-4 border border-hairline rounded-xs shadow-2xs text-center">
              <span className="text-gold-dark font-heading text-xl sm:text-2xl font-bold block">Pan-India</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-wider block mt-0.5">White-Glove Setup</span>
            </div>
          </div>
        </div>

        {/* ── Client Sectors Grid ── */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientSectors.map((sector, index) => (
            <div
              key={sector.id}
              className="bg-white border border-hairline rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-gold/60 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Sector Header */}
                <div className="flex items-center justify-between pb-4 border-b border-hairline/80">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-gold-dark bg-[#faf8f5] px-2.5 py-1 rounded-full border border-gold/30">
                    {sector.category}
                  </span>
                  <span className="text-xs font-numeric font-bold text-ink-faint">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="mt-4 font-heading text-xl sm:text-2xl font-bold text-ink leading-snug group-hover:text-gold-dark transition-colors">
                  {sector.title}
                </h2>
                <p className="mt-1 text-xs text-gold-dark font-serif italic font-medium">
                  {sector.tagline}
                </p>

                {/* Scope items */}
                <div className="mt-5 space-y-2 pt-4 border-t border-hairline/70">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-faint">
                    Scope of Commissions
                  </p>
                  <ul className="space-y-2">
                    {sector.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-ink-muted">
                        <span className="text-gold-dark font-bold mt-0.5 shrink-0">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Engagement Standard */}
                <div className="mt-5 p-3 bg-[#faf8f5] border border-hairline/80 rounded-xs text-[11px] text-ink-muted">
                  <span className="text-[9px] uppercase tracking-wider text-ink-faint block font-semibold">
                    Collaboration Terms
                  </span>
                  <p className="mt-0.5 leading-relaxed">{sector.engagement}</p>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-hairline/80">
                <a
                  href={`https://wa.me/919530182514?text=${encodeURIComponent(sector.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 px-4 rounded-full bg-[#181714] hover:bg-gold-dark text-white flex items-center justify-between text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
                >
                  <span>Enquire For This Sector</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Direct Workshop Blueprint Submission Suite ── */}
        <div className="mt-14 bg-gradient-to-br from-[#181714] via-[#24221d] to-[#181714] text-white p-8 sm:p-12 lg:p-14 rounded-sm border border-gold/30 shadow-xl">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold block">
                DIRECT JODHPUR WORKSHOP COLLABORATION
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white leading-tight">
                Have Architectural Drawings or a Project BOQ?
              </h2>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-serif italic max-w-xl">
                Send us your floor plans, 3D renderings, material finish targets, or quantity schedules. Our production engineers will provide a formal itemized quote within 24 hours.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20have%20an%20architectural%20drawing%20/%20BOQ%20I%20would%20like%20to%20share%20for%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-7 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
              >
                <span>WhatsApp Drawings &rarr;</span>
              </a>
              <Link
                href="/catalog"
                className="h-12 px-7 rounded-full border border-white/30 hover:border-gold text-white hover:text-gold flex items-center justify-center text-xs uppercase tracking-wider font-semibold transition-all bg-white/5"
              >
                <span>Browse E-Catalog</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
