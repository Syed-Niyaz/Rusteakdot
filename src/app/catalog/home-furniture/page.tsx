"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  homeFurnitureProducts,
  homeSubcategories,
  type ProductItem,
} from "@/lib/products-data";

export default function HomeFurnitureCatalogPage() {
  const [activeSubcategory, setActiveSubcategory] = useState("all-home");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [activeSwatches, setActiveSwatches] = useState<Record<string, number>>({});

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredProducts = useMemo(() => {
    let list = homeFurnitureProducts;
    if (activeSubcategory !== "all-home") {
      list = list.filter((p) => p.subcategory === activeSubcategory);
    }
    if (sortBy === "price-low") return [...list].sort((a, b) => a.priceNum - b.priceNum);
    if (sortBy === "price-high") return [...list].sort((a, b) => b.priceNum - a.priceNum);
    if (sortBy === "rating") return [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeSubcategory, sortBy]);

  const activeSub = homeSubcategories.find((s) => s.id === activeSubcategory);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* ── Sticky top nav bar ── */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-hairline">
        <div className="mx-auto max-w-[1540px] px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
          {/* Back links */}
          <div className="flex items-center gap-1.5 sm:gap-3 text-[10px] sm:text-[11px] text-ink-faint">
            <Link href="/" className="hover:text-gold-dark transition-colors font-medium hidden sm:inline">Home</Link>
            <span className="hidden sm:inline">/</span>
            <Link href="/catalog" className="hover:text-gold-dark transition-colors font-medium">E-Catalog</Link>
            <span>/</span>
            <span className="text-gold-dark font-semibold uppercase tracking-wider">Home Furniture</span>
          </div>

          <Link
            href="/catalog"
            className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-ink-muted hover:text-gold-dark transition-colors group shrink-0"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            <span>All Collections</span>
          </Link>
        </div>

        {/* ── Subcategory scrollable pill strip ── */}
        <div className="border-t border-hairline/60 bg-[#faf9f6]/95">
          <div className="mx-auto max-w-[1540px] px-4 sm:px-8 lg:px-12 py-2 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
            <span className="shrink-0 text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold text-gold-dark mr-1">
              Browse:
            </span>
            {homeSubcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubcategory(sub.id)}
                className={`shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer border touch-manipulation ${
                  activeSubcategory === sub.id
                    ? "bg-[#181714] text-white border-[#181714] shadow-sm"
                    : "bg-white text-ink-muted border-hairline hover:border-gold hover:text-ink active:bg-[#f6f2ea]"
                }`}
              >
                {sub.label}
              </button>
            ))}

            {/* Sort on right */}
            <div className="ml-auto shrink-0 flex items-center gap-1.5 sm:gap-2 pl-2">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-faint font-semibold hidden md:block">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-hairline text-[10px] sm:text-[11px] font-medium text-ink px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm focus:outline-none focus:border-gold-dark cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price ↑</option>
                <option value="price-high">Price ↓</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ── Page Title ── */}
      <div className="mx-auto max-w-[1540px] px-4 sm:px-8 lg:px-12 pt-5 sm:pt-7 pb-2">
        <div className="flex items-baseline justify-between">
          <div>
            <h1 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#141312] tracking-tight">
              Home Furniture
              {activeSub && activeSubcategory !== "all-home" && (
                <span className="font-normal italic text-gold-dark font-cormorant ml-2">
                  — {activeSub.label}
                </span>
              )}
            </h1>
            <p className="mt-1 text-[11px] sm:text-xs text-ink-muted">
              {filteredProducts.length} handcrafted piece{filteredProducts.length !== 1 ? "s" : ""} · Made to order from Jodhpur
            </p>
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div className="mx-auto max-w-[1540px] px-4 sm:px-8 lg:px-12 py-5 sm:py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 text-ink-muted">
            <p className="text-lg font-heading">No pieces in this category yet.</p>
            <p className="text-xs mt-2">
              <button onClick={() => setActiveSubcategory("all-home")} className="text-gold-dark underline cursor-pointer">
                View all Home Furniture →
              </button>
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 lg:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => {
              const swatchIdx = activeSwatches[product.id] || 0;
              const currentSwatch = product.swatches[swatchIdx] || product.swatches[0];
              const isLiked = wishlist.has(product.id);

              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white border border-hairline rounded-xl sm:rounded-sm overflow-hidden flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-gold/60 transition-all duration-300 cursor-pointer touch-manipulation"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-[#f6f2ea] overflow-hidden p-3.5 sm:p-5 flex items-center justify-center">
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 bg-white/95 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold text-gold-dark border border-gold/30">
                        {product.badge}
                      </span>
                    )}
                    <button
                      onClick={(e) => toggleWishlist(product.id, e)}
                      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 border border-hairline flex items-center justify-center hover:text-red-500 active:scale-95 transition-colors"
                    >
                      <svg className={`w-3.5 h-3.5 ${isLiked ? "fill-red-500 text-red-500" : "fill-none text-ink-muted"}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                      <Image src={product.image} alt={product.name} fill className="object-contain object-center" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw" />
                    </div>
                    <div className="hidden sm:flex absolute inset-x-0 bottom-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <span className="bg-[#181714]/90 text-white text-[10px] uppercase tracking-widest font-semibold px-3.5 py-1 rounded-full">Quick View ↗</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider">
                      <span className="font-semibold text-gold-dark">{product.categoryLabel}</span>
                      <span className="text-amber-500 font-medium">★ {product.rating}</span>
                    </div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-ink mt-1.5 group-hover:text-gold-dark transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-ink-muted mt-1 line-clamp-1">{product.woodType} · {product.materials}</p>

                    {/* Swatches */}
                    {product.swatches.length > 0 && (
                      <div className="mt-3 flex items-center gap-1.5">
                        {product.swatches.map((sw, si) => (
                          <button
                            key={sw.name}
                            title={sw.name}
                            onClick={(e) => { e.stopPropagation(); setActiveSwatches(p => ({ ...p, [product.id]: si })); }}
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border transition-transform touch-manipulation ${swatchIdx === si ? "scale-125 border-gold" : "border-hairline hover:scale-110"}`}
                            style={{ backgroundColor: sw.color }}
                          />
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-3.5 sm:pt-4 border-t border-hairline flex items-center justify-between gap-2">
                      <div>
                        <span suppressHydrationWarning className="text-base font-sans font-bold text-[#141312] lining-digits">{product.price}</span>
                        {product.originalPrice && (
                          <span suppressHydrationWarning className="text-xs font-sans line-through text-ink-faint lining-digits ml-1.5">{product.originalPrice}</span>
                        )}
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                        className="px-3.5 py-1.5 bg-[#181714] text-white text-[10px] uppercase tracking-wider font-semibold rounded-full hover:bg-gold-dark active:bg-gold-dark transition-colors cursor-pointer touch-manipulation"
                      >
                        Enquire →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Quick View Modal ── */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white w-full max-w-3xl max-h-[94vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-sm border border-hairline shadow-2xl p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-[#faf9f6] border border-hairline flex items-center justify-center text-ink-muted hover:text-ink cursor-pointer"
            >✕</button>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-7 items-start">
              <div className="relative aspect-[4/3] bg-[#f6f2ea] rounded-lg sm:rounded-sm overflow-hidden p-3 sm:p-5">
                <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-contain" />
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold text-gold-dark">{selectedProduct.categoryLabel}</span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink mt-1">{selectedProduct.name}</h3>
                <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                  <span suppressHydrationWarning className="text-xl font-sans font-bold text-[#141312] lining-digits">{selectedProduct.price}</span>
                  {selectedProduct.originalPrice && (
                    <span suppressHydrationWarning className="text-sm font-sans line-through text-ink-faint lining-digits">{selectedProduct.originalPrice}</span>
                  )}
                  <span className="text-[9px] sm:text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">{selectedProduct.leadTime}</span>
                </div>
                <p className="mt-3 text-xs text-ink-muted leading-relaxed">{selectedProduct.description}</p>
                <div className="mt-4 space-y-1.5">
                  {selectedProduct.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-ink-muted">
                      <span className="text-gold-dark font-bold">✓</span><span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-hairline flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <a
                    href={`https://wa.me/919530182514?text=Hello%20RUSTEAK%20DOT,%20I%27d%20like%20to%20enquire%20about%20the%20${encodeURIComponent(selectedProduct.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 h-11 sm:h-12 rounded-full bg-[#181714] hover:bg-gold-dark text-white flex items-center justify-center gap-2 text-[11px] uppercase tracking-wider font-semibold transition-all touch-manipulation"
                  >
                    <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    WhatsApp Quote
                  </a>
                  <a
                    href="tel:+919530182514"
                    className="w-full sm:flex-1 h-11 sm:h-12 rounded-full border border-hairline hover:border-gold-dark text-ink hover:text-gold-dark bg-white flex items-center justify-center gap-2 text-[11px] uppercase tracking-wider font-semibold transition-all touch-manipulation"
                  >
                    Call Showroom
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
