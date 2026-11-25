"use client";

const craftsmanshipFeatures = [
  {
    number: "01",
    title: "Kiln-Dried Hardwood Core",
    subtitle: "Aged Teak & Sheesham",
    description:
      "All timber undergoes a rigorous 90-day seasoning and kiln-drying process to stabilize moisture content to 8%, preventing warping in any Indian climate.",
  },
  {
    number: "02",
    title: "Sculptural Cast Brass",
    subtitle: "Lost-Wax Metalwork",
    description:
      "Our golden feet, brackets, and structural accents are individually poured, hand-chiseled, and lacquered by hereditary Jodhpur metalsmiths.",
  },
  {
    number: "03",
    title: "Multi-Density Ergonomics",
    subtitle: "Cloud-Comfort Cushioning",
    description:
      "Dual-layered pocketed coils enveloped in 40-density high-resilience memory foam and hypoallergenic down feather toppers for sublime lumbar relief.",
  },
  {
    number: "04",
    title: "Artisanal Joinery",
    subtitle: "Mortise & Tenon Standards",
    description:
      "No flimsy staples or synthetic dowels. We employ reinforced interlocking mortise-and-tenon and corner-blocked joinery tested to withstand generations.",
  },
  {
    number: "05",
    title: "Curated Global Textiles",
    subtitle: "Italian Velvets & Bouclés",
    description:
      "Stain-resistant velvet, natural linen blends, and full-grain semi-aniline hides sourced from the world's most revered mills in Florence and Como.",
  },
  {
    number: "06",
    title: "Direct Workshop Transparency",
    subtitle: "Gang Tower Showroom",
    description:
      "Visit our studio at Gang Tower, Jodhpur. Inspect the raw wood slabs, feel fabric swatches in natural light, and observe masters at work.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative bg-[#f6f2ea] text-ink py-24 sm:py-32 border-t border-hairline overflow-hidden"
    >
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 text-gold-dark text-[11px] uppercase tracking-[0.3em] font-medium">
            <span className="w-8 h-[1px] bg-gold-dark" />
            <span>UNCOMPROMISING STANDARDS</span>
            <span className="w-8 h-[1px] bg-gold-dark" />
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181714]">
            The Anatomy of
            <br />
            <span className="font-normal italic text-gold-dark font-cormorant">
              RUSTEAK Precision.
            </span>
          </h2>
          <p className="mt-4 text-sm text-ink-muted leading-relaxed">
            Every millimeter is deliberate. Designed to provide luxurious ease
            today and become a cherished family heirloom tomorrow.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {craftsmanshipFeatures.map((feat) => (
            <div
              key={feat.number}
              className="bg-white/80 backdrop-blur-sm p-8 border border-hairline rounded-sm hover:border-gold-dark/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-hairline/60">
                  <span className="font-numeric text-sm tracking-widest text-gold-dark font-bold">
                    {feat.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                    {feat.subtitle}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
                  {feat.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
