"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  leadQuote: string;
  sections: { heading: string; paragraphs: string[] }[];
}

const articles: Article[] = [
  {
    id: "kiln-drying-teak-equilibrium",
    title: "The Science of Kiln-Drying: Why 8% Moisture Equilibrium Matters",
    category: "Timber & Craft",
    readTime: "5 min read",
    date: "Oct 24, 2025",
    image: "/table-after.jpg",
    excerpt:
      "Most mass-market timber cracks or bows within two monsoons. Learn why our Jodhpur workshop kiln-stabilizes aged solid teak to 8% internal moisture before crafting.",
    leadQuote:
      "A tree never truly dies when felled; it continues to breathe with humidity. Kiln-stabilization is the only way to tame its movement forever.",
    sections: [
      {
        heading: "The Climate Challenge in India",
        paragraphs: [
          "India experiences extreme seasonal swings — from scorching 45°C summers in Rajasthan to 90% humidity during coastal monsoons. Raw or inadequately dried timber absorbs moisture during rains and shrinks drastically during dry spells.",
          "This moisture cycle causes hairline cracks in table surfaces, misaligned cabinet doors that refuse to shut, and loose joinery dowels.",
        ],
      },
      {
        heading: "Our 8% Equilibrium Process",
        paragraphs: [
          "At RUSTEAK DOT, we refuse to work with fresh green timber. Every plank undergoes slow, computer-controlled kiln stabilization over several weeks until internal moisture reaches an exact 8% equilibrium.",
          "Once stabilized, the cellular grain structure of the teak relaxes. Even decades later, changes in room humidity will not cause warping, split joints, or veneer lifting.",
        ],
      },
    ],
  },
  {
    id: "standard-vs-bespoke-living-spaces",
    title: "Standard vs. Bespoke: How Custom Dimensions Transform Modern Homes",
    category: "Bespoke Guides",
    readTime: "4 min read",
    date: "Nov 12, 2025",
    image: "/home-sofas.jpg",
    excerpt:
      "After a decade in interior design, founder Rohan Choudhary reflects on why mass-produced furniture leaves homeowners compromising on space, sightlines, and comfort.",
    leadQuote:
      "A sofa that is 4 inches too wide or a coffee table that suffocates your walkway ruins an otherwise breathtaking architectural room.",
    sections: [
      {
        heading: "The Illusion of Convenience",
        paragraphs: [
          "Factory-made furniture is built for shipping containers, not your specific living room. When you buy off-the-shelf, you are forced to adapt your living habits and room layout to someone else's arbitrary measurements.",
          "During my decade of work at The Rohan Interiors, the number one complaint from clients was awkward gaps, blocked light, or dining sets that felt too oversized for their dining niche.",
        ],
      },
      {
        heading: "Designing Around Your Floorplan",
        paragraphs: [
          "Bespoke manufacturing gives you back complete control. Need a curved sectional that perfectly clears your floor-to-ceiling balcony glass? Or an 8-seater dining table with custom 32-inch leg clearance?",
          "We manufacture directly to your blueprints, ensuring every inch serves your lifestyle rather than crowding it.",
        ],
      },
    ],
  },
  {
    id: "lost-wax-brass-casting-heritage",
    title: "Lost-Wax Brass Casting: The Hereditary Metalsmiths of Jodhpur",
    category: "Heritable Craft",
    readTime: "6 min read",
    date: "Nov 28, 2025",
    image: "/home-dining.jpg",
    excerpt:
      "Discover the ancient Rajasthani lost-wax metallurgy behind our sculptural tripod leg footings, cable grommets, and hand-chiseled drawer pulls.",
    leadQuote:
      "Brass is not merely an ornament; it provides structural anchorage and a tactile warmth that develops an exquisite patina over generations.",
    sections: [
      {
        heading: "A Centuries-Old Craft",
        paragraphs: [
          "Unlike modern pressed-sheet hardware or electroplated plastic, RUSTEAK DOT uses traditional 'Cire Perdue' (lost-wax) solid brass casting. Hereditary Jodhpur metalsmiths sculpt wax originals, pack them in river-sand moulds, and pour red-hot molten virgin brass.",
          "Every brass footing carries subtle artisanal chiseling marks, making each piece an authentic one-of-a-kind sculptural creation.",
        ],
      },
      {
        heading: "Natural Patina Over Time",
        paragraphs: [
          "We do not seal our brass in cheap synthetic lacquers that chip and tarnish unevenly. Instead, we hand-brush our fittings and apply a micro-wax coating.",
          "Over years of use, touching the brass creates a rich, burnished antique luster that complements the golden honey tones of aged teakwood.",
        ],
      },
    ],
  },
  {
    id: "rejuvenating-heirlooms-second-life",
    title: "The Second Life: Rejuvenating Family Heirlooms into Architectural Statements",
    category: "Care & Restoration",
    readTime: "5 min read",
    date: "Dec 15, 2025",
    image: "/credenza-after.jpg",
    excerpt:
      "Vintage Sheesham and Burma teak hold sentimental value that money cannot buy. Here is how our atelier re-engineers heritage furniture for contemporary living.",
    leadQuote:
      "You don't have to choose between family nostalgia and modern aesthetics. Great timber only gets better with age.",
    sections: [
      {
        heading: "Beyond Cosmetic Polishing",
        paragraphs: [
          "True restoration is not about slapping dark polish over weathered wood. When an heirloom piece arrives at our workshop, we systematically dismantle fatigued joinery, clean off decades of degraded varnish, and stabilize the core timber.",
          "We re-cut mortise and tenon joints with hidden hardwood dowels, restoring 100% structural rigidity without destroying the wood's historic character.",
        ],
      },
      {
        heading: "Contemporary Cushions & Velvet",
        paragraphs: [
          "Outdated coir padding and saggy cotton webbing are replaced with high-resilience memory foam and pocketed coil suspension. Tailored with Italian velvets, linen blends, or textured bouclés, the piece is reborn for modern daily living.",
        ],
      },
    ],
  },
  {
    id: "executive-office-furniture-ergonomics",
    title: "Ergonomics in Executive Spaces: Designing Desks for Focus & Stature",
    category: "Commercial & Office",
    readTime: "4 min read",
    date: "Jan 10, 2026",
    image: "/office-executive-luxury.jpg",
    excerpt:
      "A director table is where critical decisions are made. Why natural wood grain, concealed cable architecture, and ergonomic heights inspire productivity.",
    leadQuote:
      "A great workstation removes friction. When wiring is invisible and natural wood supports your forearms, focus flows effortlessly.",
    sections: [
      {
        heading: "The Psychology of Solid Wood in Workspaces",
        paragraphs: [
          "Studies continually show that natural timber surfaces in office environments reduce stress markers and improve sustained focus compared to synthetic laminates or cold glass desks.",
          "The tactile grain of seasoned teak provides warmth, acoustic softening, and a sense of enduring permanence that inspires confidence during client discussions.",
        ],
      },
      {
        heading: "Modern Wire Management & Concealed Docks",
        paragraphs: [
          "Executive desks should never be cluttered with power cables. We integrate CNC-machined solid brass cable ports and hidden under-desk raceways to keep multi-monitor setups, laptops, and chargers completely organized.",
        ],
      },
    ],
  },
  {
    id: "maintaining-natural-teak-finishes",
    title: "Daily Care Guide: Maintaining Natural Wax and Oil Teak Finishes",
    category: "Care & Restoration",
    readTime: "3 min read",
    date: "Feb 04, 2026",
    image: "/chair-after.jpg",
    excerpt:
      "Simple rituals to keep your solid teak furniture glowing without chemical sprays or abrasive cleaners.",
    leadQuote:
      "Natural wood thrives on simple care: occasional dusting, avoiding direct harsh sunlight, and a biannual coat of natural beeswax.",
    sections: [
      {
        heading: "Everyday Cleaning",
        paragraphs: [
          "Never use chemical household sprays containing ammonia or alcohol on solid teak — they strip the natural protective oils and leave dull, cloudy patches.",
          "A soft microfibre cloth lightly dampened with lukewarm water is all you need for daily cleaning. Always wipe in the direction of the wood grain.",
        ],
      },
      {
        heading: "Protecting Against Heat & Rings",
        paragraphs: [
          "Always use coasters under hot teacups and felt pads under heavy stone ornaments. If a water ring ever occurs, a dab of olive oil or mineral oil rubbed into the grain can effortlessly lift the mark.",
        ],
      },
    ],
  },
];

const categories = [
  "All Stories",
  "Timber & Craft",
  "Bespoke Guides",
  "Heritable Craft",
  "Care & Restoration",
  "Commercial & Office",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredArticles =
    activeCategory === "All Stories"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-ink pb-20">
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
            <span className="text-gold-dark font-semibold">Journal &amp; Blog</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14 pt-8 sm:pt-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase">
            <span>RUSTEAK JOURNAL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
            <span>STORIES &amp; CRAFT INSIGHTS</span>
          </div>

          <h1 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.15]">
            The Atelier Journal
          </h1>

          <p className="mt-4 text-xs sm:text-sm lg:text-base text-ink-muted leading-relaxed max-w-2xl mx-auto">
            Reflections on aged teakwood, architectural dimensions, hereditary Jodhpur metalcraft, and the art of living with furniture crafted to endure.
          </p>
        </div>

        {/* Category Filter Pills — Swipeable on mobile */}
        <div className="mt-10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-none pb-2 -mx-5 px-5 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#181714] text-white shadow-sm"
                  : "bg-white text-ink-muted border border-hairline hover:border-gold-dark hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-white border border-hairline rounded-sm overflow-hidden flex flex-col justify-between hover:border-gold/60 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full bg-[#f6f2ea] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] uppercase tracking-widest font-semibold text-gold-dark border border-gold/30">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] text-ink-faint uppercase tracking-wider mb-2">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="font-heading text-lg sm:text-xl font-bold text-ink leading-snug group-hover:text-gold-dark transition-colors">
                    {article.title}
                  </h2>

                  <p className="mt-3 text-xs text-ink-muted leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-hairline/60 mt-4 text-xs font-semibold text-gold-dark group-hover:text-ink transition-colors">
                <span>Read Full Story</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#181714] via-[#24221d] to-[#181714] text-white p-8 sm:p-12 rounded-sm border border-gold/30 shadow-lg text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold block">
            Direct Atelier Collaboration
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
            Inspired by a Piece or Material You Read About?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Connect directly with our master woodworkers and design consultants in Jodhpur. We craft every piece to your architectural space.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20was%20reading%20The%20Atelier%20Journal%20and%20would%20like%20to%20discuss%20a%20custom%20furniture%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Consult on WhatsApp</span>
            </a>
            <Link
              href="/catalog"
              className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/30 hover:border-gold text-white hover:text-gold flex items-center justify-center text-xs uppercase tracking-wider font-semibold transition-all bg-white/5"
            >
              <span>Explore Bespoke E-Catalog →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Interactive Story Reading Modal ── */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeArticle.title}
          onClick={() => setActiveArticle(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-xl sm:rounded-sm border border-hairline shadow-2xl p-6 sm:p-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              aria-label="Close article"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-[#faf9f6] border border-hairline flex items-center justify-center text-ink-muted hover:text-ink cursor-pointer shadow-xs"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-[10px] text-gold-dark font-semibold uppercase tracking-widest mb-2">
              <span>{activeArticle.category}</span>
              <span>&bull;</span>
              <span>{activeArticle.date}</span>
              <span>&bull;</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ink leading-snug">
              {activeArticle.title}
            </h2>

            {/* Featured Image inside modal */}
            <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden my-6 bg-[#f6f2ea]">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Lead Quote */}
            <blockquote className="p-4 sm:p-5 bg-[#faf8f5] border-l-2 border-gold-dark my-6 font-serif italic text-sm sm:text-base text-ink">
              &ldquo;{activeArticle.leadQuote}&rdquo;
            </blockquote>

            {/* Article Sections */}
            <div className="space-y-6 text-xs sm:text-sm text-ink-muted leading-relaxed">
              {activeArticle.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-ink">
                    {section.heading}
                  </h3>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-8 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-ink-muted font-serif italic">
                Published by RUSTEAK DOT Atelier, Jodhpur
              </span>
              <a
                href={`https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20read%20your%20story%20on%20%22${encodeURIComponent(
                  activeArticle.title
                )}%22%20and%20would%20like%20to%20enquire.`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 rounded-full bg-[#181714] hover:bg-gold-dark text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                <span>Discuss on WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
