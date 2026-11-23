"use client";

import { useState } from "react";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { transformationProjects } from "@/lib/transformation-data";

export function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeProject = transformationProjects[activeTab];

  return (
    <section
      id="before-after"
      className="relative w-full bg-[#f6f2ea] text-ink py-12 sm:py-16 border-t border-hairline overflow-hidden"
    >
      {/* Background Soft Studio Atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(255,255,255,0.95)_0%,rgba(246,242,234,0.7)_60%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1540px] px-6 sm:px-10 lg:px-16">
        {/* ── Section Header (Compact & Elegant) ── */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center gap-2.5 text-[10px] uppercase tracking-[0.3em] text-gold-dark font-medium mb-2">
            <span className="w-6 h-[1px] bg-gold-dark" />
            <span>FURNITURE TRANSFORMATION</span>
            <span className="w-6 h-[1px] bg-gold-dark" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141312] leading-tight tracking-tight">
            How Furniture Looked Before{" "}
            <span className="font-normal italic text-gold-dark font-cormorant">
              & After Rebirth
            </span>
          </h2>

          <p className="mt-2 text-xs text-ink-muted leading-relaxed max-w-xl mx-auto">
            Drag slider left & right to witness aged antique timber reborn into contemporary museum-grade pieces.
          </p>
        </div>

        {/* ── Furniture Category Selector Tabs (Responsive on Mobile) ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {transformationProjects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                activeTab === idx
                  ? "bg-[#181714] text-white shadow-md scale-102 sm:scale-105 border border-[#181714]"
                  : "bg-white text-ink-muted border border-hairline hover:border-gold-dark hover:text-ink shadow-2xs"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  activeTab === idx ? "bg-gold" : "bg-hairline"
                }`}
              />
              <span className="sm:hidden">
                {idx === 0 ? "01. Sofa" : idx === 1 ? "02. Chair" : "03. Table"}
              </span>
              <span className="hidden sm:inline">{project.title}</span>
            </button>
          ))}
        </div>

        {/* ── The Interactive Before & After Slider ── */}
        <div className="max-w-[1380px] mx-auto shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
          <BeforeAfterSlider item={activeProject} />
        </div>
      </div>
    </section>
  );
}
