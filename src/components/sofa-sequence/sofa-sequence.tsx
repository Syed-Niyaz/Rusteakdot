"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { progressToFrame } from "@/lib/frames";
import { FrameCanvas, type FrameCanvasHandle } from "./frame-canvas";

interface Chapter {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  tag?: string;
}

const chapters: Chapter[] = [
  {
    eyebrow: "SERIES 01 — BESPOKE LIVING",
    headlineLine1: "Custom Furniture",
    headlineLine2: "for Every Space",
    description:
      "Transform your space with timeless designs and premium craftsmanship.",
    buttonText: "Explore Collection",
    buttonHref: "#products",
    tag: "Flagship 4-Seater",
  },
  {
    eyebrow: "01 / SCULPTURAL FORM",
    headlineLine1: "A Silhouette Pared",
    headlineLine2: "to Essentials.",
    description:
      "Contoured walnut base, sweeping low profile, and balanced proportions. Nothing added without deliberate architectural intent.",
    tag: "Kiln-Dried Aged Teak",
  },
  {
    eyebrow: "02 / ERGONOMIC COMFORT",
    headlineLine1: "Support That Meets",
    headlineLine2: "You Where You Are.",
    description:
      "Multi-layered dual-density pocket coils enveloped in hypoallergenic plush down, engineered for hours of effortless relaxation.",
    tag: "Italian Caramel Velvet",
  },
  {
    eyebrow: "03 / RAJASTHANI CRAFT",
    headlineLine1: "Made to be Lived With",
    headlineLine2: "For Generations.",
    description:
      "Hand-chiseled lost-wax brass feet and kiln-dried solid teak joinery crafted by hereditary Jodhpur master woodworkers.",
    buttonText: "Book Private Viewing",
    buttonHref: "https://wa.me/919530182514?text=Hello%20Rusteak%20Dot,%20I%20would%20like%20to%20book%20a%20private%20viewing%20at%20Gang%20Tower%20Showroom.",
    tag: "Gang Tower Showroom",
  },
];

export function MainHomeScrollingExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<FrameCanvasHandle>(null);
  const activeChapterRef = useRef(0);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Generous scroll distance for slow, cinematic, fluid frame scrubbing
    const getScrollDistance = () =>
      window.innerHeight * (window.innerWidth < 768 ? 3.8 : 4.8);

    let lastSequenceUpdate = 0;

    const update = (progress: number) => {
      lastSequenceUpdate = performance.now();
      const frame = progressToFrame(progress);

      // Rotate canvas frame
      canvasRef.current?.setFrame(frame);

      // Map scroll progress smoothly to chapter index (0 -> 3)
      const nextChapter = Math.min(
        chapters.length - 1,
        Math.floor(progress * chapters.length + 1e-6),
      );

      if (nextChapter !== activeChapterRef.current) {
        activeChapterRef.current = nextChapter;
        setActiveChapter(nextChapter);
      }
    };

    const context = gsap.context(() => {
      const state = { progress: 0 };

      gsap.to(state, {
        progress: 1,
        ease: "none",
        onUpdate: () => update(state.progress),
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          pin: stage,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          scrub: reduceMotion ? true : 0.65,
          onRefresh: (self) => {
            state.progress = self.progress;
            update(self.progress);
          },
        },
      });

      update(0);
    }, section);

    // Reliable fallback for edge scroll events
    const handleNativeScroll = () => {
      if (performance.now() - lastSequenceUpdate < 100) return;
      const progress = Math.min(
        Math.max(-section.getBoundingClientRect().top / getScrollDistance(), 0),
        1,
      );
      update(progress);
    };

    window.addEventListener("scroll", handleNativeScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleNativeScroll);
      context.revert();
    };
  }, []);

  return (
    <section
      id="main-experience"
      ref={sectionRef}
      className="relative bg-[#faf9f6] text-ink select-none overflow-hidden"
      aria-label="RUSTEAK DOT Master 360 Scroll Experience"
    >
      {/* ── Fixed / Pinned Stage in Viewport ── */}
      <div
        ref={stageRef}
        className="relative h-screen h-[100dvh] w-full overflow-hidden flex flex-col justify-between pt-12 sm:pt-14 pb-3 sm:pb-4 px-4 sm:px-6 lg:px-8 bg-[#faf9f6]"
      >
        {/* Radial Warm Ambient Lighting across canvas */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_95%_75%_at_50%_48%,rgba(255,255,255,0.95)_0%,rgba(250,248,245,0.75)_55%,rgba(242,238,228,0.5)_100%)] z-0" />

        {/* ── SOFA FRAME CANVAS (Centerpiece - BIG & Grand) ── */}
        <FrameCanvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* ── RIGHT SIDE FOG & ATMOSPHERE ── */}
        <div className="absolute right-0 top-0 bottom-0 w-[45vw] max-w-[700px] pointer-events-none z-10 overflow-hidden">
          {/* Layer 1: Soft White/Cream Fog Mist */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_80%_at_85%_50%,rgba(255,255,255,0.92)_0%,rgba(250,248,245,0.65)_45%,transparent_100%)] blur-2xl" />

          {/* Layer 2: Luminous Studio Fog Drift */}
          <div className="absolute -right-[15%] top-[15%] w-[38vw] h-[70vh] bg-gradient-to-l from-white/95 via-white/70 to-transparent blur-3xl opacity-85" />

          {/* Layer 3: Warm Champagne Golden Ambient Glow */}
          <div className="absolute right-[5%] bottom-[20%] w-[25vw] h-[35vh] bg-[radial-gradient(circle,rgba(224,195,138,0.22)_0%,transparent_70%)] blur-2xl" />
        </div>

        {/* ── TOP HEADER (Centered Brand Identity) ── */}
        <header className="relative z-20 w-full max-w-[1540px] mx-auto pt-1 sm:pt-2 md:pt-4 text-center">
          {/* Flanked Eyebrow */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-ink-muted uppercase">
            <span className="w-4 sm:w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <span className="font-medium text-gold-dark">
              PREMIUM FURNITURE SOLUTIONS
            </span>
            <span className="w-4 sm:w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Majestic Title: RUSTEAK DOT */}
          <div className="mt-1">
            <Link href="/" className="inline-block group">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-ink leading-none">
                <span className="text-[#141312]">RUSTEAK</span>{" "}
                <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#ba8c3b] via-[#dca954] to-[#9e6d24]">
                  DOT
                </span>
              </h1>
            </Link>
          </div>

          {/* Sub-tagline: DESIGN • COMFORT • ELEGANCE */}
          <div className="mt-1 sm:mt-2 flex items-center justify-center gap-2 md:gap-3 text-[8.5px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-ink-muted">
            <span>DESIGN</span>
            <span className="w-1 h-1 rounded-full bg-gold inline-block" />
            <span>COMFORT</span>
            <span className="w-1 h-1 rounded-full bg-gold inline-block" />
            <span>ELEGANCE</span>
          </div>
        </header>

        {/* ── LEFT SIDE TEXT (Seamless Fog Effect, Mobile-Adaptive) ── */}
        <div className="relative z-20 w-full max-w-[1540px] mx-auto my-auto py-1 sm:py-2">
          {/* Seamless Fog Layer behind text */}
          <div className="absolute -left-[8%] top-1/2 -translate-y-1/2 w-[85vw] sm:w-[55vw] max-w-[640px] h-[75vh] pointer-events-none z-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_25%_50%,rgba(250,249,246,0.95)_0%,rgba(250,249,246,0.7)_50%,transparent_100%)] blur-3xl" />
            <div className="absolute left-0 top-[15%] w-[65vw] sm:w-[42vw] h-[55vh] bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/85 to-transparent blur-2xl opacity-90" />
          </div>

          <div className="relative flex items-center justify-between min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
            {/* The Left Narrative Text (Directly in scene, NO container, NO box) */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-[460px] pl-1 sm:pl-2">
              {chapters.map((chapter, idx) => (
                <div
                  key={chapter.eyebrow}
                  aria-hidden={activeChapter !== idx}
                  className={`transition-all duration-700 ease-out ${
                    activeChapter === idx
                      ? "relative opacity-100 translate-y-0 pointer-events-auto"
                      : "absolute top-0 left-0 opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    {/* Eyebrow / Phase Badge */}
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                      <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-gold-dark">
                        {chapter.eyebrow}
                      </span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="font-heading text-2xl sm:text-4xl md:text-[2.85rem] leading-[1.12] sm:leading-[1.08] font-semibold text-[#181714] tracking-[-0.015em]">
                      {chapter.headlineLine1}
                      <br />
                      <span className="font-normal italic text-gold-dark font-cormorant">
                        {chapter.headlineLine2}
                      </span>
                    </h2>

                    {/* Body Description */}
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-ink-muted max-w-md line-clamp-3 sm:line-clamp-none">
                      {chapter.description}
                    </p>

                    {/* Subtle Tag Accent */}
                    {chapter.tag && (
                      <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[10px] uppercase tracking-wider text-ink-faint">
                        <span className="w-1 h-1 rounded-full bg-gold/70" />
                        <span className="italic font-serif">{chapter.tag}</span>
                      </div>
                    )}

                    {/* Button CTA (Caramel-Gold Pill from Image) */}
                    {chapter.buttonText && (
                      <div className="mt-5 sm:mt-7 flex items-center gap-4">
                        <Link
                          href={chapter.buttonHref || "#products"}
                          className="btn-explore !py-2.5 !px-5 text-xs"
                        >
                          <span>{chapter.buttonText}</span>
                          <span className="text-base">→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
