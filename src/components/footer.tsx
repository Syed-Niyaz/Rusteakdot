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

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/rusteakdot?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RUSTEAK DOT on Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] border border-white/10 hover:border-transparent flex items-center justify-center text-[#9e998f] hover:text-white transition-all duration-300 group"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
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
              <Link href="/about" className="hover:text-gold transition-colors">
                About Us
              </Link>
              <Link href="/vision" className="hover:text-gold transition-colors">
                Vision
              </Link>
              <Link href="/services" className="hover:text-gold transition-colors">
                Services
              </Link>
              <Link href="/before-after" className="hover:text-gold transition-colors">
                Before &amp; After
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
                +91 9530182514 / studio@rusteakdot.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Signature From Image) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#736e65]">
          <p>
            © 2025 RUSTEAK DOT. All rights reserved. Registered Trademark.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/rusteakdot?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RUSTEAK DOT Instagram"
              className="text-[#736e65] hover:text-[#ee2a7b] transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <span className="font-heading tracking-[0.25em] uppercase text-white/50 text-[10px]">
              RUSTEAK <span className="text-gold">DOT</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
