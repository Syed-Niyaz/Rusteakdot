import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Furniture That Fits. Craftsmanship That Matters. | RUSTEAK DOT",
  description:
    "Founded by Rohan Choudhary after a decade of experience at The Rohan Interiors, RUSTEAK DOT bridges customization, skilled craftsmanship, and organized furniture-making for homes, offices, and commercial projects in Jodhpur, Rajasthan.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-ink pb-20">
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
            <span className="text-gold-dark font-semibold">About Us</span>
          </div>
        </div>
      </div>

      <div className="pt-8 sm:pt-12">
        {/* Hero Header Section */}
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase">
              <span>ABOUT US</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
              <span>THE ROHAN INTERIORS HERITAGE</span>
            </div>

            <h1 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.15]">
              Furniture That Fits.
              <br />
              <span className="font-normal italic font-serif text-gold-dark">
                Craftsmanship That Matters.
              </span>
            </h1>

            <div className="mt-6 p-4 sm:p-6 bg-white/80 border border-hairline rounded-sm shadow-2xs max-w-3xl mx-auto">
              <p className="text-sm sm:text-base lg:text-lg text-ink font-serif italic leading-relaxed">
                &ldquo;At RUSTEAK DOT, we believe furniture should be designed around your space, your needs, and your vision &mdash; not the other way around.&rdquo;
              </p>
            </div>
          </div>

          {/* Narrative & Origin Story Layout */}
          <div className="mt-14 lg:mt-20 grid gap-8 lg:grid-cols-12 lg:gap-12 items-stretch">
            {/* Column 1: The Observation & The Challenge */}
            <div className="lg:col-span-6 bg-white p-7 sm:p-10 lg:p-12 border border-hairline rounded-sm shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-hairline/80">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-gold-dark">
                    01 / THE OBSERVATION
                  </span>
                  <span className="text-[11px] font-semibold text-ink-faint">
                    A Decade in Interiors
                  </span>
                </div>

                <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink mt-6 leading-snug">
                  Why Should You Compromise On Dimensions, Usability and Aesthetics?
                </h2>

                <div className="mt-5 space-y-4 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  <p>
                    Our story began with a simple observation. After a decade of experience in the interior industry through <strong className="text-ink font-semibold">The Rohan Interiors</strong>, our founder, <strong className="text-ink font-semibold">Rohan Choudhary</strong>, noticed a recurring challenge: finding furniture that truly fits individual spaces and requirements.
                  </p>
                  <p>
                    Most furniture available in the market is mass-produced in standard sizes and designs. While convenient, it often leaves people compromising on dimensions, functionality, and aesthetics. A table that is a few inches too short or a cabinet that doesn&apos;t fit a specific corner may seem like a small issue, but it can affect the entire look and usability of a space.
                  </p>
                  <p>
                    Custom furniture offers a solution, but getting a single piece made often means finding the right carpenter, explaining the design, coordinating the work, and ensuring the final finish meets expectations. It can be a complicated process, especially when finding skilled craftsmanship is not easy.
                  </p>
                </div>
              </div>

              {/* Founder Note Badge */}
              <div className="mt-8 pt-6 border-t border-hairline flex items-center gap-4 bg-[#faf8f5] p-4 rounded-xs">
                <div className="w-12 h-12 rounded-full bg-gold-dark/15 text-gold-dark flex items-center justify-center font-heading font-bold text-lg shrink-0 border border-gold/20">
                  RC
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">Rohan Choudhary</p>
                  <p className="text-[11px] text-ink-muted uppercase tracking-wider">
                    Founder &bull; The Rohan Interiors &amp; RUSTEAK DOT
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: The RUSTEAK DOT Solution & Craftsmanship */}
            <div className="lg:col-span-6 bg-white p-7 sm:p-10 lg:p-12 border border-hairline rounded-sm shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-hairline/80">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-gold-dark">
                    02 / THE SOLUTION
                  </span>
                  <span className="text-[11px] font-semibold text-ink-faint">
                    Bridging The Gap
                  </span>
                </div>

                <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink mt-6 leading-snug">
                  Customization, Skilled Craftsmanship &amp; Organized Execution.
                </h2>

                <div className="mt-5 space-y-4 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  <p>
                    <strong className="text-ink font-semibold">That is the gap RUSTEAK DOT was created to bridge.</strong> We bring customization, skilled craftsmanship, and a more organized furniture-making experience together. Whether you need one thoughtfully designed piece of furniture for an entire home, office, hotel, or commercial project, we make furniture according to your specific requirements.
                  </p>
                  <p>
                    Working with materials such as <strong className="text-ink font-semibold">solid wood, plywood, metal, and upholstery</strong>, we turn ideas and references into furniture made to suit your space. You can share your dimensions, designs, material preferences, and functional requirements, and our team works to bring them together with attention to detail.
                  </p>
                  <p>
                    Every order is handled with a commitment to craftsmanship and accountability. Skilled artisans work on our customized pieces, approved dimensions and specifications guide the making process, and each finished piece goes through quality checks before delivery. Our focus is on delivering the agreed design, finish, and workmanship &mdash; with care at every stage.
                  </p>
                </div>
              </div>

              {/* Quality & Material Checklist */}
              <div className="mt-8 pt-6 border-t border-hairline grid grid-cols-2 gap-2.5 text-xs text-ink">
                <div className="flex items-center gap-2">
                  <span className="text-gold-dark font-bold">✓</span>
                  <span>Solid Wood &amp; Marine Plywood</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold-dark font-bold">✓</span>
                  <span>Architectural Metal &amp; Cast Brass</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold-dark font-bold">✓</span>
                  <span>Multi-Point Pre-Delivery QC</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold-dark font-bold">✓</span>
                  <span>Homes, Offices, Hotels &amp; Boutiques</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillar Summary Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="bg-white p-6 sm:p-7 border border-hairline rounded-sm hover:border-gold/50 transition-colors shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block">
                01 &bull; Tailored Geometry
              </span>
              <h3 className="font-heading text-lg font-bold text-ink mt-2">
                Customized to Your Exact Space
              </h3>
              <p className="text-xs sm:text-[13px] text-ink-muted mt-2 leading-relaxed">
                Zero compromises on dimensions, awkward corners, or wall niches. Every bespoke piece is precision-crafted to fit your architectural blueprints.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 border border-hairline rounded-sm hover:border-gold/50 transition-colors shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block">
                02 &bull; Heritable Craftsmanship
              </span>
              <h3 className="font-heading text-lg font-bold text-ink mt-2">
                Skilled Jodhpur Artisans
              </h3>
              <p className="text-xs sm:text-[13px] text-ink-muted mt-2 leading-relaxed">
                Eliminate the headache of finding and micromanaging independent carpenters. Our hereditary artisans execute approved designs with accountability.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 border border-hairline rounded-sm hover:border-gold/50 transition-colors shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block">
                03 &bull; Dependable Assurance
              </span>
              <h3 className="font-heading text-lg font-bold text-ink mt-2">
                Rigorous Quality Checks
              </h3>
              <p className="text-xs sm:text-[13px] text-ink-muted mt-2 leading-relaxed">
                Every grain finish, joint stability, and stitch tension is rigorously verified against your specifications prior to white-glove dispatch.
              </p>
            </div>
          </div>

          {/* Brand Creed Callout Banner */}
          <div className="mt-10 bg-gradient-to-r from-[#181714] via-[#24221d] to-[#181714] text-white p-8 sm:p-12 lg:p-14 rounded-sm border border-gold/30 shadow-lg">
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <p className="text-sm sm:text-base lg:text-lg font-serif italic text-white/95 leading-relaxed">
                &ldquo;From a single table to a complete furniture requirement, we believe customization should feel straightforward, dependable, and thoughtfully executed. Because good furniture isn&apos;t about choosing what&apos;s readily available. It&apos;s about creating what&apos;s right for you.&rdquo;
              </p>

              <div className="pt-2">
                <p className="font-heading text-xl sm:text-3xl font-bold tracking-[0.2em] uppercase text-white">
                  RUSTEAK <span className="text-gold font-serif italic">DOT</span>
                  <span className="text-white/40 font-light mx-2 sm:mx-3">—</span>
                  <span className="text-gold-light font-normal text-lg sm:text-2xl">Furniture, Made Yours.</span>
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/919530182514?text=Hello%20Rohan%20/%20RUSTEAK%20DOT,%20I%20would%20like%20to%20discuss%20a%20custom%20furniture%20requirement%20for%20my%20space."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Discuss Your Space on WhatsApp</span>
                </a>

                <Link
                  href="/catalog"
                  className="w-full sm:w-auto h-12 px-7 rounded-full border border-white/30 hover:border-gold text-white hover:text-gold flex items-center justify-center text-xs uppercase tracking-wider font-semibold transition-all bg-white/5"
                >
                  <span>Browse Bespoke E-Catalog</span>
                  <span className="ml-2 text-xs">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Showroom & Workshop Location Card */}
          <div className="mt-10 bg-white p-7 sm:p-10 border border-hairline rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-bold block">
                Atelier Showroom &bull; Jodhpur, Rajasthan
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink mt-1">
                Gang Tower Studio
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted mt-2 max-w-xl">
                Office No. 4, First Floor, Gang Tower, Opposite Arora Honda Service Centre, Near Bombay Motors Circle, Jodhpur, Rajasthan.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:+919530182514"
                className="h-11 px-6 rounded-full border border-hairline hover:border-gold-dark text-ink hover:text-gold-dark flex items-center justify-center text-xs uppercase tracking-wider font-semibold transition-all bg-white"
              >
                <span>Call: +91 9530182514</span>
              </a>
              <a
                href="https://wa.me/919530182514"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 rounded-full bg-[#181714] hover:bg-gold-dark text-white flex items-center justify-center text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
