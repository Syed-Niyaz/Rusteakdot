"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "E-Catalog", href: "#products" },
  { label: "Before & After", href: "#before-after" },
  { label: "Showroom", href: "#enquire" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#enquire") {
      setEnquireOpen(true);
      return;
    }
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#faf9f6]/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.03)] border-b border-hairline/70 py-1.5 sm:py-2"
            : "bg-[#faf9f6]/90 backdrop-blur-sm py-2 sm:py-2.5 border-b border-hairline/40"
        }`}
      >
        <div className="mx-auto flex max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Brand Logo (Left) */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold transition-transform duration-500 group-hover:scale-125 shadow-[0_0_8px_rgba(197,158,81,0.6)]" />
            <span className="font-heading text-base md:text-lg font-bold tracking-[0.24em] text-ink">
              RUSTEAK
              <span className="font-normal italic text-gold-dark font-serif"> DOT</span>
            </span>
          </Link>

          {/* Desktop Navigation (Center - Clean & Spacious) */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 lg:gap-12 text-[11px] uppercase tracking-[0.25em] text-ink-muted md:flex"
          >
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-gold-dark font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="transition-colors duration-200 hover:text-gold-dark font-medium cursor-pointer"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          {/* Right Action: Clean WhatsApp & Enquire */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct WhatsApp Redirect Button - Slim & Clean */}
            <a
              href="https://wa.me/912912600000?text=Hello%20RUSTEAK%20DOT%20Studio,%20I%20would%20like%20to%20enquire%20about%20bespoke%20furniture."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Consultation"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300 text-[10px] sm:text-[11px] font-semibold tracking-wider shadow-2xs group"
            >
              <svg
                className="w-3.5 h-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setEnquireOpen(true)}
              className="btn-explore !py-1.5 !px-3.5 text-[10px] uppercase tracking-[0.16em] hidden sm:inline-flex"
            >
              <span>Enquire</span>
              <span className="text-xs">→</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button - 44px Touch Target */}
          <button
            className="flex flex-col justify-center items-center gap-1.5 md:hidden w-11 h-11 -mr-2 text-ink cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                mobileOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="border-b border-hairline bg-[#faf9f6]/98 px-6 py-8 backdrop-blur-xl md:hidden shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-5 text-center">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs uppercase tracking-[0.25em] text-ink py-1.5 transition-colors hover:text-gold-dark font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-xs uppercase tracking-[0.25em] text-ink py-1.5 transition-colors hover:text-gold-dark cursor-pointer font-medium"
                  >
                    {link.label}
                  </button>
                )
              )}
              <div className="pt-5 border-t border-hairline flex flex-col items-center gap-3">
                <span className="text-[11px] text-ink-muted">
                  Gang Tower, Jodhpur, Rajasthan
                </span>
                <a
                  href="https://wa.me/912912600000?text=Hello%20RUSTEAK%20DOT%20Studio,%20I%20would%20like%20to%20enquire%20about%20bespoke%20furniture."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-[#25D366] text-white flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setEnquireOpen(true);
                  }}
                  className="btn-explore w-full justify-center text-xs"
                >
                  Book Private Consultation
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ── LUXURY ENQUIRY / SHOWROOM MODAL ── */}
      {enquireOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#faf9f6] p-7 sm:p-9 border border-hairline shadow-2xl rounded-sm">
            {/* Close Button */}
            <button
              onClick={() => {
                setEnquireOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 text-ink-muted hover:text-ink text-xl transition-colors p-1"
              aria-label="Close modal"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-gold-dark/15 text-gold-dark rounded-full flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h3 className="font-heading text-2xl font-semibold text-ink">
                  Inquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted max-w-sm mx-auto leading-relaxed">
                  Our Jodhpur studio concierge will connect with you within 24
                  hours regarding your custom furniture request.
                </p>
                <button
                  onClick={() => {
                    setEnquireOpen(false);
                    setSubmitted(false);
                  }}
                  className="btn-gold-outline text-xs mt-4"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark block">
                  Gang Tower Studio • Jodhpur
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-ink mt-1">
                  Private Viewing & Consultation
                </h3>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                  Office No. 4, First Floor, Gang Tower, Near Bombay Motors
                  Circle, Jodhpur, Rajasthan.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-ink-muted block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-white border border-hairline px-3.5 py-2.5 text-xs text-ink rounded-none focus:outline-none focus:border-gold-dark"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-ink-muted block mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98290 XXXXX"
                        className="w-full bg-white border border-hairline px-3.5 py-2.5 text-xs text-ink rounded-none focus:outline-none focus:border-gold-dark"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-ink-muted block mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mumbai, Jodhpur"
                        className="w-full bg-white border border-hairline px-3.5 py-2.5 text-xs text-ink rounded-none focus:outline-none focus:border-gold-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-ink-muted block mb-1">
                      Project Notes / Desired Dimensions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your space..."
                      className="w-full bg-white border border-hairline px-3.5 py-2.5 text-xs text-ink rounded-none focus:outline-none focus:border-gold-dark resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <a
                      href="tel:+912912600000"
                      className="text-xs font-semibold text-gold-dark hover:underline"
                    >
                      Call: +91 291 260 0000
                    </a>
                    <button type="submit" className="btn-explore !py-2.5 !px-6 text-xs">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
