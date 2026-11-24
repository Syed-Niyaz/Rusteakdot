"use client";

import { useState } from "react";
import Link from "next/link";

const homeFurnitureItems = [
  { name: "Sofas and Couches", icon: "🛋️", desc: "Flagship 4-seaters, curved sectionals & tuxedo loungers" },
  { name: "Beds and Headboards", icon: "🛏️", desc: "Cantilevered platform beds, cane inlays & acoustic bouclé" },
  { name: "Dining Tables & Chairs", icon: "🍽️", desc: "Solid teak banquet slabs with brass wire inlay & dining chairs" },
  { name: "Coffee Tables", icon: "☕", desc: "Bookmatched live-bevel slabs with sculptural tripod brass legs" },
  { name: "Side Tables", icon: "🪴", desc: "Petite accent plinths, turned hardwood columns & marble tops" },
  { name: "Wardrobes", icon: "🚪", desc: "Fluted teak wardrobes, seamless walk-in suites & soft-close joinery" },
  { name: "TV Units", icon: "📺", desc: "Floating low consoles, acoustic cane fronts & cable management" },
  { name: "Console Tables", icon: "🏛️", desc: "Entryway focal pieces with radius corners and lost-wax brass pulls" },
  { name: "Cabinets & Storage", icon: "🗄️", desc: "Bar cabinets, vitrines, and multi-tier heirloom buffets" },
  { name: "Study Tables", icon: "✍️", desc: "Ergonomic executive home-office desks with leather pad inlays" },
  { name: "Bookshelves", icon: "📚", desc: "Floor-to-ceiling modular hardwood libraries & brass-framed shelving" },
  { name: "Accent Furniture", icon: "✨", desc: "Sculptural benches, ottoman poufs, vanity stools & magazine holders" },
];

const officeFurnitureItems = [
  { name: "Office Desks", icon: "🖥️", desc: "Architectural solid wood workspaces with integrated power docks" },
  { name: "Executive Tables", icon: "👑", desc: "Commanding director tables in smoked walnut & aged teak" },
  { name: "Workstations", icon: "👥", desc: "Modular team pods designed for collaborative acoustic comfort" },
  { name: "Office Chairs", icon: "🪑", desc: "Hand-stitched leather & brass swivel chairs with lumbar ergonomics" },
  { name: "Conference Tables", icon: "🤝", desc: "Bespoke 10 to 24-seater boardroom centerpieces with brass inlays" },
  { name: "Reception Desks", icon: "🏢", desc: "Curved statement reception counters in fluted teak & honed stone" },
  { name: "Storage Cabinets", icon: "🗂️", desc: "High-security file credenzas and executive credenza suites" },
  { name: "Meeting-Room Furniture", icon: "💬", desc: "Round collaborative discussion tables and tailored club chairs" },
];

const servicesOffered = [
  {
    title: "Single-Piece Furniture Orders",
    tag: "Individual Commissions",
    desc: "Every bespoke piece is crafted with the exact same museum-grade attention to detail, whether for a standalone accent chair or an individual sofa.",
  },
  {
    title: "Customized Furniture Manufacturing",
    tag: "Tailored to Your Space",
    desc: "Complete freedom over dimensions, timber species, upholstery fabrics, metal hardware, and surface finishes down to the millimeter.",
  },
  {
    title: "Bulk Furniture Orders",
    tag: "Turnkey Volume",
    desc: "Dedicated workshop capacity to manufacture and deliver large-scale batches with consistent master-artisan quality across India.",
  },
  {
    title: "Residential Furniture Solutions",
    tag: "Private Residences",
    desc: "End-to-end furniture curation for penthouses, heritage bungalows, luxury villas, and contemporary apartments.",
  },
  {
    title: "Office Furniture Solutions",
    tag: "Corporate Workspaces",
    desc: "High-performance executive suites, ergonomic workstations, and distinguished boardroom installations built for durability.",
  },
  {
    title: "Commercial Furniture Projects",
    tag: "Hospitality & Retail",
    desc: "Turnkey bespoke installations for boutique hotels, luxury resorts, members' clubs, and flagship retail showrooms.",
  },
  {
    title: "Design-Based Manufacturing",
    tag: "Architect Collaborations",
    desc: "We work directly from 2D blueprints, 3D CAD models, or reference sketches shared by architects and interior designers.",
  },
];

export function ProductsServicesSection() {
  const [activeTab, setActiveTab] = useState<"home" | "office" | "custom" | "services">("home");

  return (
    <section
      id="services"
      className="relative w-full bg-[#f6f2ea] text-ink py-12 sm:py-16 border-t border-hairline overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center gap-2.5 text-[10px] uppercase tracking-[0.3em] text-gold-dark font-medium mb-2">
            <span className="w-6 h-[1px] bg-gold-dark" />
            <span>PRODUCTS & BESPOKE SERVICES</span>
            <span className="w-6 h-[1px] bg-gold-dark" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141312] leading-tight tracking-tight">
            Comprehensive Atelier Offerings{" "}
            <span className="font-normal italic text-gold-dark font-cormorant">
              for Home & Office
            </span>
          </h2>

          <p className="mt-2 text-xs text-ink-muted leading-relaxed max-w-xl mx-auto">
            From single bespoke commissions to full architectural hospitality projects.
            Every piece is precision-crafted in Jodhpur.
          </p>
        </div>

        {/* ── Category Navigation Tabs (Mobile Swipeable) ── */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none mb-8">
          <button
            onClick={() => setActiveTab("home")}
            className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === "home"
                ? "bg-[#181714] text-white shadow-md scale-102 sm:scale-105 border border-[#181714]"
                : "bg-white text-ink-muted border border-hairline hover:border-gold-dark hover:text-ink shadow-2xs"
            }`}
          >
            <span>A. Home Furniture</span>
            <span className="text-[10px] opacity-70">({homeFurnitureItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("office")}
            className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === "office"
                ? "bg-[#181714] text-white shadow-md scale-102 sm:scale-105 border border-[#181714]"
                : "bg-white text-ink-muted border border-hairline hover:border-gold-dark hover:text-ink shadow-2xs"
            }`}
          >
            <span>B. Office Furniture</span>
            <span className="text-[10px] opacity-70">({officeFurnitureItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("custom")}
            className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === "custom"
                ? "bg-[#181714] text-white shadow-md scale-102 sm:scale-105 border border-[#181714]"
                : "bg-white text-ink-muted border border-hairline hover:border-gold-dark hover:text-ink shadow-2xs"
            }`}
          >
            <span>C. Customized Furniture</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          </button>

          <button
            onClick={() => setActiveTab("services")}
            className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              activeTab === "services"
                ? "bg-[#181714] text-white shadow-md scale-102 sm:scale-105 border border-[#181714]"
                : "bg-white text-ink-muted border border-hairline hover:border-gold-dark hover:text-ink shadow-2xs"
            }`}
          >
            <span>Services Offered</span>
            <span className="text-[10px] opacity-70">({servicesOffered.length})</span>
          </button>
        </div>

        {/* ── TAB 1: Home Furniture Grid ── */}
        {activeTab === "home" && (
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in duration-300">
            {homeFurnitureItems.map((item) => (
              <div
                key={item.name}
                className="bg-white p-5 border border-hairline rounded-sm hover:border-gold/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-dark bg-[#faf8f5] px-2 py-0.5 rounded-full border border-hairline">
                      Residential
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink mt-3 group-hover:text-gold-dark transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline/70 flex items-center justify-between text-[11px]">
                  <span className="text-ink-faint">Custom to Order</span>
                  <a
                    href={`https://wa.me/919530182514?text=Hello%20Rusteak%20Dot,%20I%20would%20like%20to%20enquire%20about%20Home%20Furniture:%20${encodeURIComponent(
                      item.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-dark font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB 2: Office Furniture Grid ── */}
        {activeTab === "office" && (
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-in fade-in duration-300">
            {officeFurnitureItems.map((item) => (
              <div
                key={item.name}
                className="bg-white p-5 border border-hairline rounded-sm hover:border-gold/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-ink-muted bg-[#faf8f5] px-2 py-0.5 rounded-full border border-hairline">
                      Commercial
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink mt-3 group-hover:text-gold-dark transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline/70 flex items-center justify-between text-[11px]">
                  <span className="text-ink-faint">Ergonomic Grade</span>
                  <a
                    href={`https://wa.me/919530182514?text=Hello%20Rusteak%20Dot,%20I%20would%20like%20to%20enquire%20about%20Office%20Furniture:%20${encodeURIComponent(
                      item.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-dark font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB 3: Customized Furniture Manifesto & Blueprint Upload ── */}
        {activeTab === "custom" && (
          <div className="bg-white border border-hairline p-6 sm:p-10 rounded-sm shadow-sm animate-in fade-in duration-300">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark mb-2">
                OUR BESPOKE PHILOSOPHY
              </span>
              <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#141312] leading-tight">
                “Furniture should adapt to the space,{" "}
                <span className="font-normal italic text-gold-dark font-cormorant">
                  not the other way around.
                </span>”
              </blockquote>
              <p className="mt-4 text-xs sm:text-sm text-ink-muted leading-relaxed max-w-2xl mx-auto">
                RUSTEAK DOT offers customized furniture solutions based on individual design
                preferences, dimensions, material selection, finishes, functionality, and
                intended use. Customers may share a reference image, a detailed design, or an
                initial idea for discussion.
              </p>

              {/* 5 Dimensions of Customization */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 border-t border-hairline text-left">
                <div className="bg-[#faf8f5] p-3.5 border border-hairline rounded-xs">
                  <span className="text-[10px] uppercase font-semibold text-gold-dark block">01. Dimensions</span>
                  <span className="text-xs text-ink font-medium mt-1 block">To the exact millimeter</span>
                </div>
                <div className="bg-[#faf8f5] p-3.5 border border-hairline rounded-xs">
                  <span className="text-[10px] uppercase font-semibold text-gold-dark block">02. Materials</span>
                  <span className="text-xs text-ink font-medium mt-1 block">Old-growth teak & rosewood</span>
                </div>
                <div className="bg-[#faf8f5] p-3.5 border border-hairline rounded-xs">
                  <span className="text-[10px] uppercase font-semibold text-gold-dark block">03. Finishes</span>
                  <span className="text-xs text-ink font-medium mt-1 block">Satin oils, wax & matte coats</span>
                </div>
                <div className="bg-[#faf8f5] p-3.5 border border-hairline rounded-xs">
                  <span className="text-[10px] uppercase font-semibold text-gold-dark block">04. Hardware</span>
                  <span className="text-xs text-ink font-medium mt-1 block">Lost-wax cast brass & bronze</span>
                </div>
                <div className="bg-[#faf8f5] p-3.5 border border-hairline rounded-xs col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-semibold text-gold-dark block">05. Functionality</span>
                  <span className="text-xs text-ink font-medium mt-1 block">Ergonomics & dual-density coils</span>
                </div>
              </div>

              {/* Direct WhatsApp / Consultation CTA */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20have%20a%20reference%20image%20/%20custom%20idea%20for%20a%20furniture%20piece%20I%20would%20like%20to%20discuss."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-11 px-6 rounded-full bg-[#181714] hover:bg-gold-dark text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
                >
                  <span>Share Reference Image / Idea on WhatsApp</span>
                  <span>→</span>
                </a>
                <Link
                  href="#enquire"
                  className="w-full sm:w-auto h-11 px-6 rounded-full border border-hairline hover:border-gold-dark text-ink flex items-center justify-center text-xs uppercase tracking-wider font-semibold transition-all bg-white"
                >
                  <span>Book Atelier Discussion</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 4: Services Offered ── */}
        {activeTab === "services" && (
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in duration-300">
            {servicesOffered.map((service, idx) => (
              <div
                key={service.title}
                className="bg-white p-6 border border-hairline rounded-sm hover:border-gold-dark/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm tracking-widest text-gold-dark font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-ink-muted bg-[#faf8f5] px-2.5 py-0.5 rounded-full border border-hairline">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink mt-3 group-hover:text-gold-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mt-2">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-hairline/70">
                  <a
                    href={`https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20would%20like%20to%20enquire%20about%20Services:%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider font-semibold text-gold-dark hover:text-ink transition-colors flex items-center gap-1"
                  >
                    <span>Consult on Service</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Universal Bottom Consultation Banner ── */}
        <div className="mt-10 bg-[#faf8f5] border border-hairline p-6 sm:p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark block">
              Direct Workshop Collaboration
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink mt-1">
              Have a Blueprint, CAD Model or Reference Photo?
            </h3>
            <p className="text-xs text-ink-muted mt-1.5 max-w-xl">
              Send us your floor plan or reference images. Our hereditary Jodhpur craftsmen
              engineer bespoke pieces tailored to your exact architectural space.
            </p>
          </div>

          <a
            href="https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%20would%20like%20to%20share%20my%20floorplan%20/%20furniture%20drawings."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 h-11 px-5 rounded-full bg-[#181714] hover:bg-gold-dark text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
          >
            <span>WhatsApp Project Drawings</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
