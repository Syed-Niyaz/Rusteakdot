import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { transformationProjects } from "@/lib/transformation-data";

export const metadata: Metadata = {
  title: "Before & After Transformations — RUSTEAK DOT Jodhpur",
  description:
    "Explore how aged antique hardwoods and vintage furniture are rejuvenated into museum-grade luxury pieces with Italian velvet and lost-wax cast brass.",
};

const restorationSteps = [
  {
    step: "01",
    title: "Timber Stabilization & Kiln Seasoning",
    desc: "Aged timber is stripped of decayed finishes and kiln-stabilized to 8% moisture equilibrium to eliminate internal stress and guarantee zero future warping.",
  },
  {
    step: "02",
    title: "Traditional Mortise & Tenon Joinery",
    desc: "Every joint is taken apart, re-cut by hand, and secured with internal interlocking hardwood dowels and corner reinforcement blocks.",
  },
  {
    step: "03",
    title: "Lost-Wax Brass Sculptural Casting",
    desc: "Hereditary Jodhpur metalsmiths hand-pour, carve, and polish solid brass leg fixtures and hardware accents that anchor the piece with architectural dignity.",
  },
  {
    step: "04",
    title: "Dual-Density Pocket Coil Upholstery",
    desc: "Replaced with multi-density high-resilience memory foam, pocketed coils, and hand-tailored Italian velvets and bouclés built for everyday ease.",
  },
];

export default function BeforeAfterPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#faf9f6] text-ink pt-28 sm:pt-36 pb-24">
        {/* ── Page Header / Hero ── */}
        <div className="mx-auto max-w-[1540px] px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* Eyebrow */}
            <div className="inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.35em] text-gold-dark font-medium mb-4">
              <span className="w-8 h-[1px] bg-gold-dark" />
              <span>BEFORE & AFTER TRANSFORMATION</span>
              <span className="w-8 h-[1px] bg-gold-dark" />
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#141312] leading-[1.08] tracking-tight">
              The Art of the
              <br />
              <span className="font-normal italic text-gold-dark font-cormorant">
                Second Life.
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-ink-muted max-w-2xl mx-auto">
              From weathered, sagging estate heirlooms to immaculate contemporary
              centerpieces. Explore how RUSTEAK DOT re-engineers vintage Indian
              hardwoods into architectural luxury.
            </p>

            <div className="mt-6 flex items-center justify-center gap-4 text-xs font-medium text-ink-faint">
              <span>◄ Drag slider left & right to inspect transformation ►</span>
            </div>
          </div>

          {/* ── Transformation Projects Stack ── */}
          <div className="space-y-16 sm:space-y-24 max-w-[1380px] mx-auto">
            {transformationProjects.map((project) => (
              <BeforeAfterSlider key={project.id} item={project} />
            ))}
          </div>

          {/* ── The 4-Step Restoration Philosophy ── */}
          <div className="mt-28 pt-20 border-t border-hairline max-w-[1380px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark block mb-2">
                Our Engineering Philosophy
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink">
                How an Heirloom is Reborn
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                We do not simply reupholster. We rebuild the structural skeleton
                and elevate the soul of the furniture.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {restorationSteps.map((s) => (
                <div
                  key={s.step}
                  className="bg-white p-7 border border-hairline rounded-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-sm tracking-widest text-gold-dark font-semibold">
                      {s.step}
                    </span>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-ink-muted leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Consultation / Custom Commission Banner ── */}
          <div className="mt-24 bg-[#f4ede0] border border-[#e3d9c7] p-8 sm:p-12 rounded-sm max-w-[1380px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark block">
                Have an Antique or Heirloom?
              </span>
              <h3 className="mt-1 font-heading text-2xl sm:text-3xl font-semibold text-ink">
                Restore or Custom-Build With Our Jodhpur Artisans
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Send us photos of your existing furniture or share your floor plan.
                Our team provides structural evaluations, fabric samples, and
                turnkey white-glove delivery across India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/" className="btn-gold-outline text-xs">
                <span>← Back to 360° Studio</span>
              </Link>
              <a
                href="tel:+912912600000"
                className="btn-explore text-xs"
              >
                <span>Call Jodhpur Studio: +91 291 260 0000</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
