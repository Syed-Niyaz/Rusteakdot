"use client";

import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="craftsmanship"
      className="relative bg-[#f4efe6] text-ink py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-hairline"
    >
      {/* Background Subtle Luxury Patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#c59e51_0.75px,transparent_0.75px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Sofa Detail */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-white border border-hairline shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <Image
                src="/frames/frame_000010.webp"
                alt="RUSTEAK Handcrafted Teak Joinery and Velvet Detailing"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 border border-hairline flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-medium">
                    Handmade in Jodhpur
                  </p>
                  <p className="font-heading text-sm text-ink font-semibold">
                    Kiln-Dried Teak Wood & Brushed Brass
                  </p>
                </div>
                <span className="text-xs font-serif italic text-ink-muted">
                  Series 01
                </span>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:block absolute -top-6 -right-6 bg-white p-6 border border-hairline shadow-lg max-w-[200px]">
              <span className="font-heading text-3xl text-gold-dark font-bold block">
                25+
              </span>
              <p className="text-[11px] leading-tight text-ink-muted mt-1 uppercase tracking-wider">
                Years of Royal Woodcraft Heritage
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-gold-dark text-[11px] uppercase tracking-[0.3em] font-medium">
              <span className="w-8 h-[1px] bg-gold-dark" />
              <span>THE HERITAGE OF JODHPUR</span>
            </div>

            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-[#181714]">
              Where Timeless Craft
              <br />
              <span className="font-normal italic text-gold-dark font-cormorant">
                Meets Contemporary Living.
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-ink-muted">
              Nestled near the historic heart of Jodhpur, Rajasthan, RUSTEAK DOT
              combines generations of imperial Rajasthani woodworking with
              modern Scandinavian minimalism. We hand-select each plank of aged
              Teak and Sheesham, honoring the natural grain and structural soul
              of the timber.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Every curve of our sofas, every hand-carved armrest, and every
              sculptural cast-brass footing is engineered not merely as furniture,
              but as an enduring architectural statement for your home.
            </p>

            {/* Four Pillars */}
            <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-hairline">
              <div>
                <span className="font-heading text-2xl font-semibold text-ink">
                  100%
                </span>
                <p className="text-[11px] uppercase tracking-wider text-ink-muted mt-1">
                  Kiln-Dried Solid Hardwood
                </p>
              </div>
              <div>
                <span className="font-heading text-2xl font-semibold text-ink">
                  Zero
                </span>
                <p className="text-[11px] uppercase tracking-wider text-ink-muted mt-1">
                  Synthetic Particle Board
                </p>
              </div>
              <div>
                <span className="font-heading text-2xl font-semibold text-ink">
                  10-Year
                </span>
                <p className="text-[11px] uppercase tracking-wider text-ink-muted mt-1">
                  Structural Warranty
                </p>
              </div>
              <div>
                <span className="font-heading text-2xl font-semibold text-ink">
                  Pan-India
                </span>
                <p className="text-[11px] uppercase tracking-wider text-ink-muted mt-1">
                  White Glove Delivery
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="#contact" className="btn-gold-outline">
                <span>Meet Our Master Artisans</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
