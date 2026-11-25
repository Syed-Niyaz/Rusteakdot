"use client";

import { useState } from "react";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { transformationProjects } from "@/lib/transformation-data";

const restorationPhilosophy = [
  {
    phase: "Phase 01",
    title: "Timber Deconstruction & Kiln Seasoning",
    tagline: "Stabilized to 8% Moisture Equilibrium",
    desc: "Aged timber is stripped of decayed polyurethane and kiln-stabilized over 3 weeks. Eliminates internal cellular stress and guarantees zero future warping in humid or dry climates.",
    detail: "Old-growth teak & Sheesham stripped to bare raw heartwood.",
  },
  {
    phase: "Phase 02",
    title: "Traditional Mortise & Tenon Joinery",
    tagline: "Hand-Cut Interlocking Hardwood Dowels",
    desc: "Every stressed joint is carefully dismantled, re-cut by hand, and reinforced with interlocking hardwood dowels and triangular corner bracing blocks for 50+ years of rigidity.",
    detail: "Zero synthetic staples or modern brad nails.",
  },
  {
    phase: "Phase 03",
    title: "Lost-Wax Brass Metallurgy",
    tagline: "Cire-Perdue Hand-Poured Castings",
    desc: "Hereditary Jodhpur metalsmiths hand-pour solid virgin brass in river-sand moulds to create custom leg footings, ferrules, and structural brackets that anchor the furniture.",
    detail: "Finished with natural micro-wax; patinas gracefully over time.",
  },
  {
    phase: "Phase 04",
    title: "Dual-Density Pocket Coil Suspension",
    tagline: "High-Resilience Core & Italian Velvet",
    desc: "Degraded coir and sagging webbing are replaced with independent pocketed coils and multi-density memory foam, upholstered in stain-resistant Italian caramel velvet or acoustic bouclé.",
    detail: "Hand-tailored piping and master deep-button tufting.",
  },
];

export default function BeforeAfterPage() {
  const [activeProject, setActiveProject] = useState<string>("all");

  const visibleProjects =
    activeProject === "all"
      ? transformationProjects
      : transformationProjects.filter((p) => p.id === activeProject);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-ink pb-24">
      {/* ── Top Breadcrumb & Return to 360° Studio Bar (Consistent Minimal Header) ── */}
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
            <span className="text-gold-dark font-semibold">The Second Life</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12 pt-8 sm:pt-14">
        {/* ── Unique Atelier Hero Header (Split Screen Exhibition Format) ── */}
        <div className="pb-10 border-b border-hairline flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark mb-3">
              <span className="w-2 h-2 rounded-full bg-gold-dark" />
              <span>THE SECOND LIFE ATELIER</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.08]">
              Nothing Discarded.
              <br />
              <span className="font-normal italic font-serif text-gold-dark">
                Everything Re-Engineered.
              </span>
            </h1>

            <p className="mt-4 text-xs sm:text-sm lg:text-base text-ink-muted leading-relaxed font-serif italic max-w-xl">
              From sagging, weathered Indian estate heirlooms to museum-grade contemporary focal pieces &mdash; explore how our Jodhpur workshop resurrects vintage timber with lost-wax brass and Italian velvet.
            </p>
          </div>

          {/* 4 Architectural Guarantee Badges */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0 max-w-md w-full">
            <div className="bg-white p-4 border border-hairline rounded-xs shadow-2xs">
              <span className="text-gold-dark font-numeric text-lg sm:text-xl font-bold block">8% Moisture</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-wider block mt-0.5">Kiln-Stabilized Teak</span>
            </div>
            <div className="bg-white p-4 border border-hairline rounded-xs shadow-2xs">
              <span className="text-gold-dark font-numeric text-lg sm:text-xl font-bold block">100% Solid</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-wider block mt-0.5">Lost-Wax Cast Brass</span>
            </div>
            <div className="bg-white p-4 border border-hairline rounded-xs shadow-2xs">
              <span className="text-gold-dark font-heading text-lg sm:text-xl font-bold block">Pocket Coils</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-wider block mt-0.5">Dual-Density Memory Foam</span>
            </div>
            <div className="bg-white p-4 border border-hairline rounded-xs shadow-2xs">
              <span className="text-gold-dark font-heading text-lg sm:text-xl font-bold block">Zero Fiberboard</span>
              <span className="text-[10px] text-ink-muted uppercase tracking-wider block mt-0.5">Aged Hardwood Only</span>
            </div>
          </div>
        </div>

        {/* ── Interactive Project Filter Tabs (Unique to this page) ── */}
        <div className="mt-8 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none pb-2 border-b border-hairline/80">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold mr-2">
              Filter Transformation:
            </span>
            <button
              onClick={() => setActiveProject("all")}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeProject === "all"
                  ? "bg-[#181714] text-white shadow-sm"
                  : "bg-white text-ink-muted border border-hairline hover:border-gold-dark"
              }`}
            >
              All Projects ({transformationProjects.length})
            </button>
            {transformationProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(p.id)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeProject === p.id
                    ? "bg-[#181714] text-white shadow-sm"
                    : "bg-white text-ink-muted border border-hairline hover:border-gold-dark"
                }`}
              >
                {p.title.replace(/^\d+\.\s*/, "")}
              </button>
            ))}
          </div>

          <span className="text-[11px] text-ink-faint font-serif italic hidden md:inline shrink-0">
            &larr; Drag split handle left &amp; right to compare &rarr;
          </span>
        </div>

        {/* ── Interactive Transformation Sliders Stack ── */}
        <div className="mt-10 space-y-16 sm:space-y-20 max-w-[1400px] mx-auto animate-in fade-in duration-300">
          {visibleProjects.map((project) => (
            <div key={project.id} className="relative">
              <BeforeAfterSlider item={project} />

              {/* Direct Enquiry pill under each slider */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-ink-faint text-[10px] uppercase tracking-wider font-semibold">Craft Elements:</span>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-medium text-ink bg-white px-2.5 py-0.5 rounded-full border border-hairline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20saw%20the%20${encodeURIComponent(
                    project.title
                  )}%20transformation%20and%20would%20like%20to%20enquire%20about%20a%20similar%20restoration.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold-dark hover:text-ink font-semibold tracking-wider uppercase text-[11px] transition-colors"
                >
                  <span>Enquire Similar Restoration</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Unique 4-Stage Architectural Restoration Philosophy ── */}
        <div className="mt-24 pt-16 border-t border-hairline">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark block mb-2">
              HERITAGE JOINERY STANDARDS
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-ink">
              How an Heirloom is Reborn
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
              We do not simply apply dark cosmetic polish. We rebuild the structural skeleton and elevate the soul of the timber.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {restorationPhilosophy.map((s) => (
              <div
                key={s.phase}
                className="bg-white p-7 border border-hairline rounded-sm flex flex-col justify-between hover:border-gold/60 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-hairline">
                    <span className="font-numeric text-xl sm:text-2xl font-bold text-gold-dark tracking-tight">{s.phase}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-ink mt-4 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-gold-dark font-medium mt-1 font-serif italic">
                    {s.tagline}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-hairline/60 text-[10px] text-ink-faint uppercase tracking-wider">
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Unique "Send Your Furniture Photos" Evaluation Suite ── */}
        <div className="mt-20 bg-gradient-to-r from-[#181714] via-[#24221d] to-[#181714] text-white p-8 sm:p-12 lg:p-14 rounded-sm border border-gold/30 shadow-xl">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold block">
                Free Structural Evaluation
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 leading-snug">
                Have an Antique or Weathered Heirloom?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
                Take 2 photos of your existing furniture (full frame &amp; joint/fabric detail) and share them with our Jodhpur studio on WhatsApp. Our master woodworkers will provide a structural assessment and quotation within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href="https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20have%20an%20antique%20/%20heirloom%20furniture%20piece%20and%20would%20like%20to%20share%20photos%20for%20a%20restoration%20assessment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp Photos for Quote</span>
              </a>

              <a
                href="tel:+919530182514"
                className="w-full sm:w-auto h-12 px-6 rounded-full border border-white/30 hover:border-gold text-white hover:text-gold flex items-center justify-center text-xs uppercase tracking-wider font-semibold transition-all bg-white/5"
              >
                <span>Call Studio: +91 9530182514</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
