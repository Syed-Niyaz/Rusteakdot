"use client";

import { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    furnitureInterest: "Living Room Sofa & Suite",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#f4efe6] text-ink py-24 sm:py-32 border-t border-hairline"
    >
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Showroom & Studio Details (Matching Address from Image!) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-gold-dark text-[11px] uppercase tracking-[0.3em] font-medium">
              <span className="w-8 h-[1px] bg-gold-dark" />
              <span>GANG TOWER SHOWROOM</span>
            </div>

            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-[#181714]">
              Experience the Craft
              <br />
              <span className="font-normal italic text-gold-dark font-cormorant">
                In Person at Jodhpur.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-ink-muted">
              Whether you are an architect curating an estate or a family
              seeking the ideal centerpiece sofa, our doors at Gang Tower are
              open for private viewings and material tactile consultations.
            </p>

            {/* Address Box (From User's Image) */}
            <div className="mt-8 p-6 bg-white border border-hairline rounded-sm space-y-5 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-gold-dark/10 flex items-center justify-center text-gold-dark shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-ink">
                    Main Showroom & Studio
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed mt-1">
                    Office No. 4, First Floor, Gang Tower,
                    <br />
                    Opposite Arora Honda Service Centre,
                    <br />
                    Near Bombay Motors Circle, Jodhpur, Rajasthan.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-hairline">
                <div className="w-8 h-8 rounded-full bg-gold-dark/10 flex items-center justify-center text-gold-dark shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ink-faint">
                    Direct Client Concierge / WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919530182514"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-ink hover:text-gold-dark transition-colors"
                  >
                    +91 9530182514
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-hairline">
                <div className="w-8 h-8 rounded-full bg-gold-dark/10 flex items-center justify-center text-gold-dark shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ink-faint">
                    Architectural Inquiries
                  </p>
                  <a
                    href="mailto:studio@rusteakdot.com"
                    className="text-xs font-semibold text-ink hover:text-gold-dark transition-colors"
                  >
                    studio@rusteakdot.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Quote Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-hairline rounded-sm shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-gold-dark/15 text-gold-dark rounded-full flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h3 className="font-heading text-2xl font-semibold text-ink">
                  Inquiry Received
                </h3>
                <p className="text-sm text-ink-muted max-w-md mx-auto">
                  Thank you for your interest in RUSTEAK DOT. Our Jodhpur studio
                  concierge will connect with you via phone/WhatsApp within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-gold-outline text-xs mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-medium block">
                    Bespoke Request
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-ink mt-1">
                    Book a Private Viewing or Request Catalogue
                  </h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-medium text-ink-muted block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Maharana Pratap"
                      className="w-full bg-[#faf8f5] border border-hairline px-4 py-3 text-sm text-ink rounded-none focus:outline-none focus:border-gold-dark transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-medium text-ink-muted block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98290 XXXXX"
                      className="w-full bg-[#faf8f5] border border-hairline px-4 py-3 text-sm text-ink rounded-none focus:outline-none focus:border-gold-dark transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-medium text-ink-muted block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@domain.com"
                      className="w-full bg-[#faf8f5] border border-hairline px-4 py-3 text-sm text-ink rounded-none focus:outline-none focus:border-gold-dark transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-medium text-ink-muted block mb-2">
                      Furniture Category
                    </label>
                    <select
                      value={formData.furnitureInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          furnitureInterest: e.target.value,
                        })
                      }
                      className="w-full bg-[#faf8f5] border border-hairline px-4 py-3 text-sm text-ink rounded-none focus:outline-none focus:border-gold-dark transition-colors"
                    >
                      <option>Living Room Sofa & Suite</option>
                      <option>Dining Table & Chairs</option>
                      <option>Master Bedroom Set</option>
                      <option>Full Architectural Villa Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-medium text-ink-muted block mb-2">
                    Project Details or Dimensions
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your space, preferred fabric colors (e.g. caramel velvet, cream linen), or required delivery timeline..."
                    className="w-full bg-[#faf8f5] border border-hairline px-4 py-3 text-sm text-ink rounded-none focus:outline-none focus:border-gold-dark transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-explore w-full justify-center">
                  <span>Submit Inquiry to Jodhpur Studio</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
