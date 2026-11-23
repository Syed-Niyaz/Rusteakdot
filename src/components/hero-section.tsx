"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen w-full bg-[#faf9f6] text-ink overflow-hidden select-none flex flex-col justify-between pt-16 md:pt-20 pb-4"
    >
      {/* ── Background Architectural Accents ── */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_90%_70%_at_50%_45%,rgba(255,255,255,0.95)_0%,rgba(250,248,245,0.7)_60%,rgba(240,236,226,0.5)_100%)]" />

      {/* ── Top Header Row (Inside Hero as in Image) ── */}
      <div className="relative z-20 w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 pt-3 md:pt-6">
        <div className="grid grid-cols-12 items-center">
          {/* Top Left: Slide Counter (01 / 04) with line indicator */}
          <div className="col-span-12 md:col-span-3 flex items-center gap-3">
            <span className="font-serif text-sm tracking-[0.2em] font-medium text-ink">
              01
            </span>
            <span className="text-xs font-light text-ink-faint">/</span>
            <span className="font-serif text-xs tracking-[0.2em] text-ink-faint">
              04
            </span>
            <div className="w-20 sm:w-24 h-[1.5px] bg-[#dcd7cb] overflow-hidden ml-1">
              <div className="h-full w-1/4 bg-gold" />
            </div>
          </div>

          {/* Top Center: Brand Title RUSTEAK DOT (Matching Image Exactly) */}
          <div className="col-span-12 md:col-span-6 text-center my-4 md:my-0">
            {/* Flanked Eyebrow */}
            <div className="flex items-center justify-center gap-3 text-[10px] md:text-[11px] tracking-[0.35em] text-ink-muted uppercase">
              <span className="w-6 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <span className="font-medium text-gold-dark">
                PREMIUM FURNITURE SOLUTIONS
              </span>
              <span className="w-6 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Majestic Title: RUSTEAK DOT */}
            <div className="mt-1 md:mt-2">
              <Link href="/" className="inline-block group">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-none">
                  <span className="text-[#141312]">RUSTEAK</span>{" "}
                  <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#ba8c3b] via-[#dca954] to-[#9e6d24]">
                    DOT
                  </span>
                </h1>
              </Link>
            </div>

            {/* Sub-tagline: DESIGN • COMFORT • ELEGANCE */}
            <div className="mt-2 md:mt-2.5 flex items-center justify-center gap-2 md:gap-3 text-[9px] md:text-[11px] uppercase tracking-[0.35em] text-ink-muted">
              <span>DESIGN</span>
              <span className="w-1 h-1 rounded-full bg-gold inline-block" />
              <span>COMFORT</span>
              <span className="w-1 h-1 rounded-full bg-gold inline-block" />
              <span>ELEGANCE</span>
            </div>
          </div>

          {/* Top Right: Scroll Anchor to 360 view */}
          <div className="col-span-12 md:col-span-3 hidden md:flex justify-end items-center gap-4">
            <a
              href="#experience"
              className="text-[11px] uppercase tracking-[0.2em] text-gold-dark font-medium hover:text-ink transition-colors flex items-center gap-2 group"
            >
              <span>Explore 360° Sequence</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Hero Content & BIG Sofa Centerpiece Stage ── */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 my-auto py-2 md:py-6">
        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[480px] lg:min-h-[540px]">
          {/* ── BIG Sofa Presentation (Spans across stage) ── */}
          <div className="absolute inset-0 z-0 flex items-center justify-center lg:justify-end lg:pr-12 pointer-events-none">
            {/* Soft floor reflection shadow */}
            <div className="absolute bottom-[6%] w-[90%] max-w-5xl h-[20%] bg-gradient-to-t from-black/12 via-black/5 to-transparent rounded-[100%] blur-2xl" />

            {/* The Big Sofa Artwork */}
            <div className="relative w-full max-w-5xl lg:max-w-[1100px] xl:max-w-[1200px] h-[360px] sm:h-[450px] lg:h-[520px] transition-transform duration-700 ease-out">
              <Image
                src="/rusteak-hero.jpg"
                alt="RUSTEAK DOT Flagship Custom 4-Seater Sofa"
                fill
                priority
                className="object-contain object-center lg:object-right drop-shadow-[0_20px_40px_rgba(0,0,0,0.09)]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>

          {/* ── Left Column: Clean Text with Frosted White Blur (Hides any image seam) ── */}
          <div className="relative z-20 w-full lg:w-[480px] text-left pt-6 lg:pt-0">
            {/* The blurred protective container so text is 100% crisp without image clash */}
            <div className="backdrop-blur-md bg-[#faf8f5]/85 lg:bg-[#faf8f5]/75 p-6 sm:p-8 rounded-2xl border border-white/60 shadow-[0_15px_35px_rgba(0,0,0,0.03)]">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark block mb-2">
                Series 01 — Flagship
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.65rem] leading-[1.08] font-semibold text-[#181714] tracking-[-0.015em]">
                Custom Furniture
                <br />
                <span className="font-normal italic text-gold-dark font-cormorant">
                  for Every Space
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-muted">
                Transform your space with timeless designs and premium
                craftsmanship.
              </p>

              {/* The Image Button: Caramel Gold Pill */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link href="#collection" className="btn-explore">
                  <span>Explore Collection</span>
                  <span className="text-base">→</span>
                </Link>

                <a
                  href="#experience"
                  className="text-xs font-semibold uppercase tracking-wider text-gold-dark hover:text-ink transition-colors flex items-center gap-1.5"
                >
                  <span>Scroll 360°</span>
                  <span className="text-sm">↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── Vertical Indicator Dots on the Right (from image) ── */}
          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col items-center gap-3.5 z-20">
            <button
              onClick={() => setCurrentSlide(0)}
              className="indicator-dot-solid scale-125"
              aria-label="Active slide 1"
            />
            <button
              onClick={() => setCurrentSlide(1)}
              className="indicator-dot-ring hover:scale-110"
              aria-label="Slide 2"
            />
            <button
              onClick={() => setCurrentSlide(2)}
              className="indicator-dot-ring hover:scale-110"
              aria-label="Slide 3"
            />
          </div>
        </div>
      </div>

      {/* ── Bottom Address Bar & Brand Baseline (Exact from Image) ── */}
      <div className="relative z-20 w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 pt-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-t border-[#e2ddd3] pt-3 text-[11px]">
          {/* Location details with Map Pin icon (from image) */}
          <div className="flex items-start md:items-center gap-2.5 text-ink-muted leading-tight max-w-2xl">
            <svg
              className="w-4 h-4 text-ink shrink-0 mt-0.5 md:mt-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="text-[10px] md:text-[11px] text-[#4a4740]">
              <span className="font-medium text-ink">
                Office No. 4, First Floor, Gang Tower
              </span>
              , Opposite Arora Honda Service Centre, Near Bombay Motors Circle,
              Jodhpur, Rajasthan.
            </span>
          </div>

          {/* Hairline Divider & Brand signature on bottom right */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="hidden lg:block w-32 h-[1px] bg-[#dcd7cb]" />
            <span className="font-heading text-xs tracking-[0.28em] font-semibold text-ink">
              RUSTEAK <span className="font-normal text-gold-dark">DOT</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
