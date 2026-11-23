"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "RUSTEAK DOT designed our penthouse sectional in Mumbai. The balance between the sculpted dark wood base and the caramel velvet is pure poetry. Our guests never fail to compliment it.",
    author: "Ar. Vikramaditya Rathore",
    designation: "Principal Architect, Studio Marwar",
    city: "Mumbai, Maharashtra",
  },
  {
    quote:
      "Visiting their showroom at Gang Tower in Jodhpur convinced us immediately. You can smell the aged teak wood and witness the incredible passion of their artisans. Outstanding build quality.",
    author: "Sunita & Arvind Singhania",
    designation: "Private Estate Owner",
    city: "Jaipur, Rajasthan",
  },
  {
    quote:
      "The custom dining table and chairs they crafted survived two overseas relocations without a single millimeter of misalignment. Real solid wood joinery at its absolute finest.",
    author: "Kabir Malhotra",
    designation: "Design Director",
    city: "New Delhi",
  },
];

export function TestimonialSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#faf8f5] text-ink py-24 sm:py-32 border-t border-hairline">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center justify-center gap-3 text-gold-dark text-[11px] uppercase tracking-[0.3em] font-medium">
          <span className="w-8 h-[1px] bg-gold-dark" />
          <span>CLIENT VOICES</span>
          <span className="w-8 h-[1px] bg-gold-dark" />
        </div>

        {/* Large Decorative Serif Quotation Mark */}
        <div className="font-serif text-7xl text-gold-dark/25 font-bold leading-none mt-6 select-none">
          “
        </div>

        {/* Active Testimonial Quote */}
        <p className="mt-4 font-heading text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-[#1d1b18]">
          {testimonials[active].quote}
        </p>

        {/* Author Details */}
        <div className="mt-8">
          <p className="font-serif text-base font-semibold text-ink">
            {testimonials[active].author}
          </p>
          <p className="text-xs text-gold-dark mt-0.5 tracking-wide">
            {testimonials[active].designation}
          </p>
          <p className="text-[11px] text-ink-faint mt-1 uppercase tracking-wider">
            {testimonials[active].city}
          </p>
        </div>

        {/* Indicator Buttons */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 ${
                active === i
                  ? "w-8 h-2 rounded-full bg-gold-dark"
                  : "w-2 h-2 rounded-full bg-hairline hover:bg-gold-dark/50"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
