"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import type { BeforeAfterItem } from "@/lib/transformation-data";

export function BeforeAfterSlider({ item }: { item: BeforeAfterItem }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  // Global window listeners when dragging so the slider never loses focus
  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (e: PointerEvent) => {
      updatePosition(e.clientX);
    };

    const onPointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [isDragging, updatePosition]);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full bg-white border border-hairline rounded-sm overflow-hidden shadow-sm select-none">
      {/* ── Top Project Meta Bar ── */}
      <div className="p-5 sm:p-7 border-b border-hairline flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.25em] text-gold-dark font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>{item.category}</span>
            <span className="text-ink-faint">•</span>
            <span>{item.year}</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink mt-1">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 bg-[#faf9f6] border border-hairline px-3.5 py-1.5 rounded-full text-[11px] font-medium text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>{item.hours}</span>
          </span>
          <span className="text-xs uppercase tracking-widest text-ink-faint hidden sm:inline">
            Drag Slider to Compare ↔
          </span>
        </div>
      </div>

      {/* ── Interactive Split Comparison Stage ── */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] bg-[#faf9f6] cursor-ew-resize overflow-hidden touch-none"
      >
        {/* ── Native Accessible Range Input for Keyboard & Immediate Slider Response ── */}
        <input
          type="range"
          min="0"
          max="100"
          value={Math.round(sliderPosition)}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          aria-label="Compare Before and After transformation"
          className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-ew-resize pointer-events-auto"
        />

        {/* ── AFTER Image (Underneath, Full Width) ── */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 sm:p-12 pointer-events-none">
          {/* Subtle warm glow */}
          <div className="absolute bottom-[8%] w-[80%] h-[18%] bg-gradient-to-t from-black/10 via-black/5 to-transparent rounded-[100%] blur-xl" />

          <div className="relative w-full h-full">
            <Image
              src={item.afterImage}
              alt={item.afterLabel}
              fill
              priority
              className="object-contain object-center pointer-events-none"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>

        {/* ── BEFORE Image (Clipped overlay on the left via clipPath) ── */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center p-6 sm:p-12 z-10 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="relative w-full h-full">
            <Image
              src={item.beforeImage}
              alt={item.beforeLabel}
              fill
              priority
              className="object-contain object-center pointer-events-none"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>

        {/* ── DRAGGABLE DIVIDER LINE & BRASS HANDLE ── */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center transition-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical Hairline Split */}
          <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.3)] relative">
            <div className="absolute inset-0 bg-gold" />
          </div>

          {/* Circular Draggable Brass Pill Handle */}
          <div
            className={`absolute w-10 h-10 sm:w-12 sm:h-12 -ml-[20px] sm:-ml-[24px] rounded-full bg-white border-2 border-gold shadow-[0_4px_25px_rgba(0,0,0,0.25)] flex items-center justify-center text-ink transition-transform ${
              isDragging ? "scale-115 border-gold-dark shadow-lg ring-4 ring-gold/20" : "hover:scale-105"
            }`}
          >
            <svg
              className="w-5 h-5 text-gold-dark pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 15 12 9 6" className="rotate-180" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Bottom Detailed Description & Material Tags ── */}
      <div className="p-5 sm:p-7 bg-[#fdfcfb] border-t border-hairline grid gap-6 md:grid-cols-2">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-wider font-semibold text-ink-muted flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-ink-faint" />
            Original Condition
          </p>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            {item.beforeDesc}
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-wider font-semibold text-gold-dark flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            RUSTEAK Transformation
          </p>
          <p className="text-xs sm:text-sm text-ink leading-relaxed font-medium">
            {item.afterDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
