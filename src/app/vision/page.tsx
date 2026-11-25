import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Purpose, Vision, Mission & Values | RUSTEAK DOT",
  description:
    "RUSTEAK DOT's purpose is to make customized furniture accessible, dependable, and thoughtfully crafted — bridging the gap between mass-produced furniture and the individual needs of every space.",
};

const values = [
  {
    num: "01",
    title: "Customization Without Compromise",
    desc: "Every space is different, and every customer has unique requirements. We believe furniture should be made to fit those needs rather than forcing customers to adjust to standard sizes.",
  },
  {
    num: "02",
    title: "Craftsmanship at the Core",
    desc: "We value the skill, experience, and dedication of artisans. Every piece deserves careful execution, attention to detail, and quality workmanship.",
  },
  {
    num: "03",
    title: "Precision in Every Detail",
    desc: "Dimensions, materials, finishes, and functionality matter. We work according to approved specifications to ensure the final furniture reflects the agreed requirements.",
  },
  {
    num: "04",
    title: "Quality & Accountability",
    desc: "We take responsibility for the work we undertake. From understanding requirements to final quality checks, we focus on maintaining the standards promised to our customers.",
  },
  {
    num: "05",
    title: "Transparency & Trust",
    desc: "A good customer experience begins with clear communication. We believe in understanding expectations, discussing requirements, and maintaining clarity throughout the process.",
  },
  {
    num: "06",
    title: "Function Meets Design",
    desc: "Furniture should look good, but it should also work well. We bring together aesthetics, practicality, and functionality to create pieces that complement the spaces they belong to.",
  },
];

const missionCommitments = [
  "Offering customization across designs, dimensions, materials, and finishes.",
  "Bringing skilled artisans and customers together through an organized process.",
  "Maintaining precision in approved designs and specifications.",
  "Following quality checks and consistent workmanship standards.",
  "Serving individual customers as well as large residential, commercial, and institutional projects.",
];

export default function VisionPage() {
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
            <span className="text-gold-dark font-semibold">Vision</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-14 pt-8 sm:pt-12 space-y-14">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase">
              <span>RUSTEAK DOT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
              <span>PURPOSE, VISION, MISSION &amp; VALUES</span>
            </div>
            <h1 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.15]">
              Purpose, Vision,
              <br />
              <span className="font-normal italic font-serif text-gold-dark">
                Mission &amp; Values.
              </span>
            </h1>
          </div>

          {/* Purpose + Vision + Mission — 3 column layout */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Our Purpose */}
            <div className="bg-white p-7 sm:p-9 border border-hairline rounded-sm flex flex-col gap-4 hover:border-gold/50 transition-colors shadow-2xs">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-dark">01 / Our Purpose</span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink leading-snug">
                To make customized furniture accessible, dependable, and thoughtfully crafted.
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                We exist to bridge the gap between mass-produced furniture and the individual needs of every space. Our purpose is to give people the freedom to create furniture that fits their dimensions, preferences, lifestyle, and design vision — without the complications of traditional custom carpentry.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-[#181714] p-7 sm:p-9 border border-gold/20 rounded-sm flex flex-col gap-4 shadow-md">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">02 / Our Vision</span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                To become a trusted name in customized furniture, where craftsmanship meets individuality.
              </h2>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                We envision a future where people don&apos;t have to compromise on their furniture choices. We aim to build a brand that makes personalized furniture a reliable and seamless experience, while bringing skilled artisans and thoughtful design together.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white p-7 sm:p-9 border border-hairline rounded-sm flex flex-col gap-4 hover:border-gold/50 transition-colors shadow-2xs">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-dark">03 / Our Mission</span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink leading-snug">
                To transform individual furniture ideas into well-crafted, functional, and personalized pieces.
              </h2>
              <p className="text-xs text-ink-muted mb-2">We are committed to:</p>
              <ul className="space-y-2">
                {missionCommitments.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-xs sm:text-[13px] text-ink-muted">
                    <span className="text-gold-dark font-bold mt-0.5 shrink-0">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Values */}
          <div>
            <div className="text-center mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold-dark block mb-2">04 / Our Values</span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-ink">
                What We Stand For
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div
                  key={v.num}
                  className="bg-white p-6 sm:p-7 border border-hairline rounded-sm hover:border-gold/60 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-numeric text-2xl text-gold-dark font-bold tracking-tight">{v.num}.</span>
                    <span className="w-8 h-[1px] bg-gold/40" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-ink leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Belief Banner */}
          <div className="bg-gradient-to-r from-[#181714] via-[#24221d] to-[#181714] text-white p-8 sm:p-12 rounded-sm border border-gold/30 shadow-lg text-center space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold block">Our Belief</span>
            <p className="font-heading text-xl sm:text-3xl font-bold text-white max-w-3xl mx-auto leading-snug">
              We don&apos;t believe in making furniture just to fill a space.
              <br />
              <span className="font-normal italic font-serif text-gold-light">
                We believe in making furniture that belongs in that space.
              </span>
            </p>
            <p className="font-heading text-lg sm:text-2xl font-bold tracking-[0.15em] text-white/90 pt-2">
              RUSTEAK <span className="text-gold font-serif italic">DOT</span>
              <span className="text-white/40 mx-2">—</span>
              <span className="text-gold-light font-normal text-base sm:text-xl">Furniture, Made Yours.</span>
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20would%20like%20to%20enquire%20about%20a%20custom%20furniture%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Discuss Your Furniture Requirement</span>
              </a>
              <Link
                href="/about"
                className="w-full sm:w-auto h-12 px-7 rounded-full border border-white/30 hover:border-gold text-white hover:text-gold flex items-center justify-center text-xs uppercase tracking-wider font-semibold transition-all bg-white/5"
              >
                <span>Our Story →</span>
              </Link>
            </div>
          </div>

        </div>
    </main>
  );
}
