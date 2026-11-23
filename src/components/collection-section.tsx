"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const collections = [
  {
    id: "living",
    category: "Signature Lounging",
    title: "The Gang Tower 4-Seater Lounge",
    materials: "Kiln-Dried Walnut & Caramel Velvet",
    dimensions: "108\" W × 38\" D × 32\" H",
    tag: "Flagship",
    image: "/rusteak-hero.jpg",
  },
  {
    id: "sculptural",
    category: "360° Modular Seating",
    title: "The Alabaster Curvature Suite",
    materials: "Natural Teak Frame & Bouclé Cream",
    dimensions: "96\" W × 40\" D × 30\" H",
    tag: "Bespoke",
    image: "/frames/frame_000005.webp",
  },
  {
    id: "dining",
    category: "Dining Sanctuary",
    title: "The Marwar Teak Dining Table & Chairs",
    materials: "Solid Aged Teak & Brushed Brass Inlay",
    dimensions: "8-Seater Custom Length",
    tag: "Heritage",
    image: "/frames/frame_000020.webp",
  },
  {
    id: "bedroom",
    category: "Master Suite",
    title: "The Royal Pavilion Platform Bed",
    materials: "Hand-Carved Headboard & Woven Cane",
    dimensions: "King & Super King Available",
    tag: "Imperial",
    image: "/frames/frame_000035.webp",
  },
];

export function CollectionSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section
      id="collection"
      className="relative bg-[#faf8f5] text-ink py-24 sm:py-32 border-t border-hairline"
    >
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-gold-dark text-[11px] uppercase tracking-[0.3em] font-medium">
              <span className="w-8 h-[1px] bg-gold-dark" />
              <span>CURATED COLLECTIONS</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181714]">
              Bespoke Pieces Built for
              <br />
              <span className="font-normal italic text-gold-dark font-cormorant">
                Discerning Living Spaces.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-ink-muted leading-relaxed">
            Each creation is customized to your floorplan dimensions, choice of
            European fabrics, and native Rajasthani timber finishes.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => (
            <div
              key={item.id}
              className="luxury-card group rounded-sm overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative aspect-[4/3] w-full bg-[#f4efe8] overflow-hidden p-3 flex items-center justify-center">
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-medium text-gold-dark border border-hairline z-10">
                  {item.tag}
                </span>

                <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-gold-dark font-medium block">
                    {item.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-ink group-hover:text-gold-dark transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-ink-muted">
                    {item.materials}
                  </p>
                  <p className="mt-1 text-[11px] text-ink-faint">
                    {item.dimensions}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between">
                  <span className="text-xs font-serif italic text-ink-muted">
                    Custom to Order
                  </span>
                  <Link
                    href="#contact"
                    className="text-xs uppercase tracking-wider font-semibold text-gold-dark hover:text-ink transition-colors flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Commission Banner */}
        <div className="mt-16 bg-[#f4ede0] border border-[#e3d9c7] p-8 sm:p-10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark block">
              Architectural Collaborations
            </span>
            <h3 className="mt-1 font-heading text-2xl sm:text-3xl font-semibold text-ink">
              Have a Blueprint or Bespoke Interior Plan?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
              We work directly with leading architects, luxury interior designers, and
              homeowners across India to manufacture tailor-made furniture suites.
            </p>
          </div>
          <Link href="#contact" className="btn-explore shrink-0">
            <span>Consult Design Studio</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
