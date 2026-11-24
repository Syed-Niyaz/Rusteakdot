import type { Metadata } from "next";
import Link from "next/link";
import { ProductsEcommerceSection } from "@/components/products-ecommerce-section";

export const metadata: Metadata = {
  title: "Bespoke Furniture E-Catalog — RUSTEAK DOT Jodhpur",
  description:
    "Explore our complete bespoke catalog of handcrafted teak sofas, sculptural lounge chairs, dining tables, and architectural consoles.",
};

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-ink">
      {/* ── Top Breadcrumb & Return to 360° Studio Bar ── */}
      <div className="border-b border-hairline/80 bg-white/90 backdrop-blur-xs sticky top-0 z-40">
        <div className="mx-auto max-w-[1540px] px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-2 text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-ink-muted hover:text-gold-dark font-medium transition-colors group shrink-0"
          >
            <span className="text-sm transition-transform group-hover:-translate-x-1">←</span>
            <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-semibold">
              Back to 360° Studio
            </span>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider text-ink-faint">
            <Link href="/" className="hover:text-gold-dark hidden sm:inline">
              Home
            </Link>
            <span className="hidden sm:inline">/</span>
            <span className="text-gold-dark font-semibold">Bespoke E-Catalog</span>
          </div>
        </div>
      </div>

      {/* ── E-Commerce Section: clean grid, no hero, no trust pillars, no explore button ── */}
      <ProductsEcommerceSection showExploreMore={false} isStandalonePage={true} />
    </main>
  );
}
