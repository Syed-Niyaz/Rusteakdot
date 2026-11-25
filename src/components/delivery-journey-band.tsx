"use client";

export function DeliveryJourneyBand() {
  return (
    <section
      aria-label="White-Glove Bespoke Delivery Journey"
      className="relative w-full bg-[#f6f2ea] border-t border-hairline py-10 sm:py-14 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* ── Eyebrow & Title ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7 sm:mb-9">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-semibold text-gold-dark mb-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-dark" />
              <span>PAN-INDIA WHITE-GLOVE LOGISTICS</span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-ink leading-tight">
              From Our Jodhpur Atelier{" "}
              <span className="font-normal italic text-gold-dark">
                Straight to Your Home
              </span>
            </h2>
          </div>

          <p className="text-xs text-ink-muted max-w-sm leading-relaxed">
            Every custom piece is padded, crated, insured, and installed inside your exact room by our dedicated crew.
          </p>
        </div>

        {/* ── Clean Architectural Horizontal Road Stage ── */}
        <div className="relative bg-white border border-hairline rounded-sm px-4 sm:px-10 pt-7 pb-6 sm:pt-9 sm:pb-8 shadow-2xs">
          {/* Scene Container with Unified Ground Baseline */}
          <div className="relative h-[92px] sm:h-[104px] w-full">
            {/* 1. UNIFIED HORIZONTAL GROUND LINE (Sits cleanly beneath tires & buildings) */}
            <div className="absolute inset-x-4 sm:inset-x-6 bottom-[32px] h-[1.5px] bg-[#e7e2d6] rounded-full">
              {/* Golden progress line filling behind the truck */}
              <div className="animate-track-fill h-full bg-gradient-to-r from-[#a87932] via-[#c59e51] to-[#a87932] rounded-full" />
            </div>

            {/* 2. LEFT NODE: JODHPUR ATELIER WORKSHOP */}
            <div className="absolute left-2 sm:left-4 bottom-[32px] z-10 flex flex-col items-center">
              <svg
                className="w-11 h-9 sm:w-12 sm:h-10"
                viewBox="0 0 64 52"
                fill="none"
              >
                <path
                  d="M6 22L32 6L58 22V50H6V22Z"
                  fill="#3b3228"
                  stroke="#a87932"
                  strokeWidth="1.6"
                />
                <rect x="20" y="29" width="24" height="21" rx="1" fill="#faf8f5" stroke="#a87932" strokeWidth="1" />
                <line x1="20" y1="36" x2="44" y2="36" stroke="#c59e51" strokeWidth="0.9" opacity="0.6" />
                <line x1="20" y1="43" x2="44" y2="43" stroke="#c59e51" strokeWidth="0.9" opacity="0.6" />
                <rect x="26" y="16" width="12" height="3" rx="1" fill="#c59e51" />
              </svg>

              {/* Neat Crate sliding from Workshop Bay into Truck */}
              <div className="animate-crate-load absolute -right-4 bottom-[3px] pointer-events-none z-20">
                <svg className="w-4 h-3.5 drop-shadow-2xs" viewBox="0 0 24 20" fill="none">
                  <rect x="1.5" y="2" width="21" height="16" rx="2" fill="#dfc285" stroke="#a87932" strokeWidth="1.6" />
                  <line x1="5" y1="10" x2="19" y2="10" stroke="#a87932" strokeWidth="1.4" />
                </svg>
              </div>
            </div>

            {/* 3. SMALL, CLEAN LUXURY DELIVERY TRUCK (Ivory + Warm Walnut-Bronze + Gold) */}
            <div className="animate-truck-drive absolute bottom-[32px] w-[68px] sm:w-[76px] z-20 pointer-events-none">
              <div className="animate-truck-bounce relative">
                {/* Subtle Speed Lines during Transit */}
                <div className="animate-speed-lines absolute -left-4 top-3.5 flex flex-col gap-1">
                  <span className="block w-3 h-[1px] bg-gold/70 rounded-full" />
                  <span className="block w-4 h-[1px] bg-gold/50 rounded-full -ml-1" />
                </div>

                <svg
                  viewBox="0 0 132 62"
                  className="w-full h-auto drop-shadow-[0_2px_4px_rgba(59,50,40,0.12)]"
                  fill="none"
                >
                  {/* Cargo Box — Clean Ivory / Alabaster with Bronze-Gold Trim */}
                  <rect
                    x="6"
                    y="12"
                    width="76"
                    height="34"
                    rx="3"
                    fill="#faf8f5"
                    stroke="#a87932"
                    strokeWidth="2"
                  />
                  {/* Minimal Gold Accent Line */}
                  <line x1="12" y1="29" x2="76" y2="29" stroke="#c59e51" strokeWidth="1.4" opacity="0.75" />
                  {/* Subtle Brand Badge */}
                  <circle cx="16" cy="21" r="2.2" fill="#a87932" />
                  <rect x="22" y="19.8" width="28" height="2.4" rx="1.2" fill="#3b3228" opacity="0.75" />

                  {/* Cab — Warm Espresso Walnut */}
                  <path
                    d="M82 20H104C108.5 20 112.5 22.5 115.2 26.8L122 36.5V46H82V20Z"
                    fill="#3b3228"
                    stroke="#a87932"
                    strokeWidth="2"
                  />
                  {/* Cab Windshield */}
                  <path
                    d="M87 24H102.5C105.5 24 108 25.6 109.8 28.5L113.5 34.5H87V24Z"
                    fill="#f7eedc"
                  />
                  {/* Headlight */}
                  <rect x="119" y="38.5" width="3.5" height="3.5" rx="1" fill="#dfc285" />

                  {/* Chassis */}
                  <rect x="6" y="46" width="116" height="2.5" rx="1" fill="#3b3228" />

                  {/* Wheel Well Cutouts */}
                  <circle cx="28" cy="51" r="10" fill="#ffffff" />
                  <circle cx="101" cy="51" r="10" fill="#ffffff" />

                  {/* Rear Wheel */}
                  <g className="animate-wheel-spin">
                    <circle cx="28" cy="51" r="8.5" fill="#2b2723" stroke="#a87932" strokeWidth="1.8" />
                    <circle cx="28" cy="51" r="2.8" fill="#dfc285" />
                    <line x1="28" y1="43.5" x2="28" y2="58.5" stroke="#faf8f5" strokeWidth="1.1" opacity="0.5" />
                    <line x1="20.5" y1="51" x2="35.5" y2="51" stroke="#faf8f5" strokeWidth="1.1" opacity="0.5" />
                  </g>

                  {/* Front Wheel */}
                  <g className="animate-wheel-spin">
                    <circle cx="101" cy="51" r="8.5" fill="#2b2723" stroke="#a87932" strokeWidth="1.8" />
                    <circle cx="101" cy="51" r="2.8" fill="#dfc285" />
                    <line x1="101" y1="43.5" x2="101" y2="58.5" stroke="#faf8f5" strokeWidth="1.1" opacity="0.5" />
                    <line x1="93.5" y1="51" x2="108.5" y2="51" stroke="#faf8f5" strokeWidth="1.1" opacity="0.5" />
                  </g>
                </svg>
              </div>
            </div>

            {/* 4. RIGHT NODE: YOUR HOME */}
            <div className="absolute right-2 sm:right-4 bottom-[32px] z-10 flex flex-col items-center">
              {/* Crate unloading from Truck into Home Doorway */}
              <div className="animate-crate-deliver absolute -left-4 bottom-[3px] pointer-events-none z-20">
                <svg className="w-4 h-3.5 drop-shadow-2xs" viewBox="0 0 24 20" fill="none">
                  <rect x="1.5" y="2" width="21" height="16" rx="2" fill="#dfc285" stroke="#a87932" strokeWidth="1.6" />
                  <line x1="5" y1="10" x2="19" y2="10" stroke="#a87932" strokeWidth="1.4" />
                </svg>
              </div>

              <svg
                className="animate-home-glow w-11 h-9 sm:w-12 sm:h-10"
                viewBox="0 0 64 52"
                fill="none"
              >
                <path
                  d="M6 24L32 5L58 24V50H6V24Z"
                  fill="#faf8f5"
                  stroke="#3b3228"
                  strokeWidth="1.8"
                />
                <path
                  d="M3 25L32 4L61 25"
                  stroke="#a87932"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect className="animate-home-window" x="14" y="28" width="9" height="9" rx="1" stroke="#3b3228" strokeWidth="1.3" />
                <rect className="animate-home-window" x="41" y="28" width="9" height="9" rx="1" stroke="#3b3228" strokeWidth="1.3" />
                <rect x="27" y="31" width="10" height="19" rx="1" fill="#3b3228" />
                <circle cx="35" cy="41" r="1" fill="#dfc285" />
              </svg>
            </div>

            {/* Labels strictly below the horizontal road line */}
            <div className="absolute left-0 sm:left-2 bottom-1 text-left">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-ink whitespace-nowrap block">
                Jodhpur Atelier
              </span>
            </div>
            <div className="absolute right-0 sm:right-2 bottom-1 text-right">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-ink whitespace-nowrap block">
                Your Home
              </span>
            </div>
          </div>

          {/* ── Synchronized 3-Step Live Status Labels ── */}
          <div className="mt-5 pt-4 border-t border-hairline/70 grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div className="animate-stage-1 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
              <span className="font-numeric font-bold mr-1">01.</span>
              <span className="hidden sm:inline">Loading Craft Crate</span>
              <span className="sm:hidden">Loading</span>
            </div>
            <div className="animate-stage-2 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
              <span className="font-numeric font-bold mr-1">02.</span>
              <span className="hidden sm:inline">Insured Padded Transit</span>
              <span className="sm:hidden">In Transit</span>
            </div>
            <div className="animate-stage-3 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
              <span className="font-numeric font-bold mr-1">03.</span>
              <span className="hidden sm:inline">Delivered &amp; Placed</span>
              <span className="sm:hidden">Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
