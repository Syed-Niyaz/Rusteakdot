"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#181715] text-[#d6d1c7] pt-16 pb-12 border-t border-hairline/20">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="#hero" className="inline-block">
              <span className="font-heading text-xl font-bold tracking-[0.25em] text-white">
                RUSTEAK
                <span className="font-normal italic text-gold font-serif"> DOT</span>
              </span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-[#9e998f] max-w-sm">
              Architectural luxury furniture handcrafted from aged teak and
              sculptural brass. Designed, engineered, and manufactured in
              Jodhpur, Rajasthan.
            </p>
            <div className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold font-medium">
              <span>DESIGN</span>
              <span>•</span>
              <span>COMFORT</span>
              <span>•</span>
              <span>ELEGANCE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white">
              Navigation
            </h4>
            <nav className="mt-4 flex flex-col gap-2.5 text-xs text-[#9e998f]">
              <Link href="#hero" className="hover:text-gold transition-colors">
                Overview
              </Link>
              <Link href="#collection" className="hover:text-gold transition-colors">
                Curated Suites
              </Link>
              <Link href="#craftsmanship" className="hover:text-gold transition-colors">
                Heritage Craft
              </Link>
              <Link href="#features" className="hover:text-gold transition-colors">
                Wood & Brass Specs
              </Link>
              <Link href="#contact" className="hover:text-gold transition-colors">
                Showroom Visit
              </Link>
            </nav>
          </div>

          {/* Collections */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white">
              Bespoke Categories
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs text-[#9e998f]">
              <li>Flagship 4-Seater Lounges</li>
              <li>Modular Alabaster Sectionals</li>
              <li>Aged Teak Dining Tables & Chairs</li>
              <li>Lost-Wax Brass Accent Tables</li>
              <li>Custom Architectural Consoles</li>
            </ul>
          </div>

          {/* Showroom & Location (From User's Image) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold">
              Jodhpur Showroom
            </h4>
            <div className="mt-4 text-xs text-[#9e998f] space-y-2 leading-relaxed">
              <p className="text-white font-medium">
                Gang Tower Studio
              </p>
              <p>
                Office No. 4, First Floor, Gang Tower,
                <br />
                Opposite Arora Honda Service Centre,
                <br />
                Near Bombay Motors Circle, Jodhpur, Rajasthan.
              </p>
              <p className="pt-2 text-gold">
                +91 (0) 291 260 0000 / studio@rusteakdot.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Signature From Image) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#736e65]">
          <p>
            © 2025 RUSTEAK DOT. All rights reserved. Registered Trademark.
          </p>

          <div className="flex items-center gap-6">
            <span className="font-heading tracking-[0.25em] uppercase text-white/50 text-[10px]">
              RUSTEAK <span className="text-gold">DOT</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
