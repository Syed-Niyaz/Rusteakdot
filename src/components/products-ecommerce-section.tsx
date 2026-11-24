"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  luxuryProducts,
  homeSubcategories,
  officeSubcategories,
  type ProductItem,
} from "@/lib/products-data";

export function ProductsEcommerceSection({
  showExploreMore = true,
  isStandalonePage = false,
}: {
  showExploreMore?: boolean;
  isStandalonePage?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeSubcategory, setActiveSubcategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
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

  const handleSwatchSelect = (productId: string, swatchIdx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSwatches((prev) => ({ ...prev, [productId]: swatchIdx }));
  };

  // When switching main category, reset subcategory
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setActiveSubcategory("all");
  };

  const filteredProducts = useMemo(() => {
    let list = luxuryProducts;

    // Filter by main category
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Filter by subcategory (for home or office)
    if (activeCategory === "home" && activeSubcategory !== "all" && activeSubcategory !== "all-home") {
      list = list.filter((p) => p.subcategory === activeSubcategory);
    } else if (activeCategory === "office" && activeSubcategory !== "all" && activeSubcategory !== "all-office") {
      list = list.filter((p) => p.subcategory === activeSubcategory);
    }

    if (sortBy === "price-low") return [...list].sort((a, b) => a.priceNum - b.priceNum);
    if (sortBy === "price-high") return [...list].sort((a, b) => b.priceNum - a.priceNum);
    if (sortBy === "rating") return [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, activeSubcategory, sortBy]);

  const categories = [
    { id: "all", label: "All Collections", count: luxuryProducts.length },
    { id: "home", label: "Home Furniture", count: luxuryProducts.filter((p) => p.category === "home").length },
    { id: "office", label: "Office Furniture", count: luxuryProducts.filter((p) => p.category === "office").length },
    { id: "customized", label: "Customized Furniture", count: luxuryProducts.filter((p) => p.category === "customized").length },
  ];

  return (
    <section
      id="products"
      className="relative w-full bg-[#faf9f6] text-ink py-8 sm:py-14 lg:py-16 border-t border-hairline overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1540px] px-4 sm:px-8 lg:px-12">
        {/* ── Section Header (Compact & Crisp, shown on home page) ── */}
        {!isStandalonePage && (
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2.5 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-gold-dark font-medium mb-1.5 sm:mb-2">
              <span className="w-5 sm:w-6 h-[1px] bg-gold-dark" />
              <span>ATELIER COMMISSIONS • E-CATALOG</span>
              <span className="w-5 sm:w-6 h-[1px] bg-gold-dark" />
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141312] leading-tight tracking-tight">
              Curated Bespoke Furniture{" "}
              <span className="font-normal italic text-gold-dark font-cormorant">
                Ready for Your Floorplan
              </span>
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed max-w-xl mx-auto">
              Individually handcrafted in Jodhpur from seasoned hardwoods, solid brass, and European velvet.
            </p>
          </div>
        )}

        {/* ── Controls Bar: swipeable pills on mobile | clean dropdowns ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-hairline mb-0">
          {/* Category Pills — horizontal scroll, touch-friendly, never wrap */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none w-full md:w-auto -mx-4 px-4 sm:mx-0 sm:px-0 py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 touch-manipulation ${
                  activeCategory === cat.id
                    ? "bg-[#181714] text-white border border-[#181714] shadow-sm"
                    : "bg-white text-ink-muted border border-hairline hover:border-gold-dark hover:text-ink active:bg-[#f6f2ea]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full leading-none ${
                    activeCategory === cat.id
                      ? "bg-gold text-ink font-bold"
                      : "bg-[#f0ebe1] text-ink-faint"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Category dropdown + divider + Sort dropdown — full width on mobile, right on desktop */}
          <div className="flex items-center justify-between md:justify-end gap-2 w-full md:w-auto shrink-0 pt-0.5 md:pt-0">
            {/* Category Quick-Filter Dropdown */}
            <div className="relative flex-1 md:flex-initial">
              <select
                value={activeCategory}
                aria-label="Filter by category"
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full md:w-auto appearance-none bg-white border border-gold/40 text-[10px] sm:text-[11px] font-semibold text-ink pl-3 pr-7 py-2 rounded-full focus:outline-none focus:border-gold-dark cursor-pointer hover:border-gold-dark transition-colors"
              >
                <option value="all">All Collections</option>
                <option value="home">Home Furniture</option>
                <option value="office">Office Furniture</option>
              </select>
              <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gold-dark text-[9px]">▾</span>
            </div>

            <span className="w-px h-5 bg-hairline shrink-0" />

            {/* Sort By */}
            <select
              value={sortBy}
              aria-label="Sort products by"
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 md:flex-initial bg-white border border-hairline text-[10px] sm:text-[11px] font-medium text-ink px-3 py-2 rounded-full md:rounded-sm focus:outline-none focus:border-gold-dark cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price ↑</option>
              <option value="price-high">Price ↓</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* ── Subcategory Pills (shown when Home Furniture is active) ── */}
        {activeCategory === "home" && (
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-2.5 sm:py-3 border-b border-hairline mb-6 sm:mb-8 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12">
            <span className="shrink-0 text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold text-gold-dark mr-1">
              Browse:
            </span>
            {homeSubcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubcategory(sub.id === "all-home" ? "all" : sub.id)}
                className={`shrink-0 px-3 sm:px-3.5 py-1.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer border touch-manipulation ${
                  activeSubcategory === sub.id || (sub.id === "all-home" && activeSubcategory === "all")
                    ? "bg-gold-dark text-white border-gold-dark shadow-sm"
                    : "bg-white text-ink-faint border-hairline hover:border-gold hover:text-ink active:bg-[#f6f2ea]"
                }`}
              >
                {sub.label}
              </button>
            ))}

            {/* Link to dedicated standalone collection page */}
            <Link
              href="/catalog/home-furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto shrink-0 inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold bg-[#181714] text-white hover:bg-gold-dark transition-colors shadow-2xs whitespace-nowrap"
              title="Open standalone Home Furniture page in separate tab"
            >
              <span>Separate Page</span>
              <span>↗</span>
            </Link>
          </div>
        )}

        {/* ── Subcategory Pills (shown when Office Furniture is active) ── */}
        {activeCategory === "office" && (
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-2.5 sm:py-3 border-b border-hairline mb-6 sm:mb-8 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12">
            <span className="shrink-0 text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold text-gold-dark mr-1">
              Browse:
            </span>
            {officeSubcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubcategory(sub.id === "all-office" ? "all" : sub.id)}
                className={`shrink-0 px-3 sm:px-3.5 py-1.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer border touch-manipulation ${
                  activeSubcategory === sub.id || (sub.id === "all-office" && activeSubcategory === "all")
                    ? "bg-gold-dark text-white border-gold-dark shadow-sm"
                    : "bg-white text-ink-faint border-hairline hover:border-gold hover:text-ink active:bg-[#f6f2ea]"
                }`}
              >
                {sub.label}
              </button>
            ))}

            {/* Link to dedicated standalone collection page */}
            <Link
              href="/catalog/office-furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto shrink-0 inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold bg-[#181714] text-white hover:bg-gold-dark transition-colors shadow-2xs whitespace-nowrap"
              title="Open standalone Office Furniture page in separate tab"
            >
              <span>Separate Page</span>
              <span>↗</span>
            </Link>
          </div>
        )}

        {/* Spacer when no subcategory row */}
        {activeCategory !== "home" && activeCategory !== "office" && <div className="mb-6 sm:mb-8" />}

        {/* ── Products Grid ── */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {(isStandalonePage ? filteredProducts : filteredProducts.slice(0, 6)).map((product) => {
                  const swatchIdx = activeSwatches[product.id] || 0;
                  const currentSwatch = product.swatches[swatchIdx] || product.swatches[0];
                  const isLiked = wishlist.has(product.id);

                  return (
                    <div
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className="group bg-white border border-hairline rounded-xl sm:rounded-sm overflow-hidden flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-gold/60 transition-all duration-300 cursor-pointer touch-manipulation"
                    >
                      {/* ── Product Image Card Header ── */}
                      <div className="relative aspect-[4/3] w-full bg-[#f6f2ea] overflow-hidden p-3.5 sm:p-5 flex items-center justify-center">
                        {/* Badge */}
                        {product.badge && (
                          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold text-gold-dark border border-gold/30 shadow-xs">
                            {product.badge}
                          </span>
                        )}

                        {/* Wishlist Button */}
                        <button
                          onClick={(e) => toggleWishlist(product.id, e)}
                          aria-label="Save to Wishlist"
                          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md border border-hairline flex items-center justify-center text-ink hover:text-red-600 active:scale-95 transition-all shadow-xs"
                        >
                          <svg
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                              isLiked ? "fill-red-500 text-red-500" : "fill-none text-ink-muted"
                            }`}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>

                        {/* Product Isolated Image with Hover Zoom */}
                        <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain object-center"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>

                        {/* Quick View Hover Pill Overlay (desktop hover) */}
                        <div className="hidden sm:flex absolute inset-x-0 bottom-3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <span className="bg-[#181714]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg">
                            Quick View & Specs ↗
                          </span>
                        </div>
                      </div>

                      {/* ── Product Card Details ── */}
                      <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between flex-1 bg-white">
                        <div>
                          {/* Subhead & Rating */}
                          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-ink-faint">
                            <span className="font-semibold text-gold-dark">{product.categoryLabel}</span>
                            <span className="flex items-center gap-1 font-medium text-ink-muted">
                              <span className="text-amber-500">★</span>
                              <span>{product.rating}</span>
                              <span className="text-ink-faint">({product.reviewsCount})</span>
                            </span>
                          </div>

                          {/* Product Title */}
                          <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-ink mt-1.5 sm:mt-2 group-hover:text-gold-dark transition-colors line-clamp-1">
                            {product.name}
                          </h3>

                          {/* Materials & Wood */}
                          <p className="text-[11px] sm:text-xs text-ink-muted mt-1 line-clamp-1">
                            {product.woodType} • {product.materials}
                          </p>

                          {/* Dimensions & Lead Time */}
                          <div className="mt-2.5 sm:mt-3 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-ink-faint">
                            <span>{product.dimensions}</span>
                            <span>•</span>
                            <span className="text-emerald-700 font-medium">{product.leadTime}</span>
                          </div>

                          {/* Material Swatch Selector */}
                          {product.swatches.length > 0 && (
                            <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-hairline/80 flex items-center justify-between">
                              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-faint">
                                Finish: <span className="font-medium text-ink">{currentSwatch.name}</span>
                              </span>
                              <div className="flex items-center gap-1.5">
                                {product.swatches.map((swatch, sIdx) => (
                                  <button
                                    key={swatch.name}
                                    onClick={(e) => handleSwatchSelect(product.id, sIdx, e)}
                                    title={swatch.name}
                                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border transition-transform touch-manipulation ${
                                      swatchIdx === sIdx
                                        ? "scale-125 border-gold shadow-xs"
                                        : "border-hairline hover:scale-110 active:scale-95"
                                    }`}
                                    style={{ backgroundColor: swatch.color }}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* ── Price & Action Footer ── */}
                        <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-hairline flex items-center justify-between gap-2">
                          <div>
                            <div className="flex items-baseline gap-1.5 sm:gap-2">
                              <span
                                suppressHydrationWarning
                                className="text-base sm:text-lg font-sans font-bold text-[#141312] lining-digits tracking-tight"
                              >
                                {product.price}
                              </span>
                              {product.originalPrice && (
                                <span
                                  suppressHydrationWarning
                                  className="text-[11px] sm:text-xs font-sans line-through text-ink-faint lining-digits"
                                >
                                  {product.originalPrice}
                                </span>
                              )}
                            </div>
                            <span className="text-[9px] sm:text-[10px] text-ink-faint uppercase tracking-wider block">
                              Made to Order
                            </span>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProduct(product);
                            }}
                            className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#181714] text-white text-[10px] sm:text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-gold-dark hover:text-white active:bg-gold-dark transition-colors cursor-pointer shadow-sm touch-manipulation shrink-0"
                          >
                            Enquire Quote →
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

        {/* ── Right-Aligned Explore More Option ── */}
        {showExploreMore && (
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-3">
            {!isStandalonePage && filteredProducts.length > 6 && (
              <p className="text-xs text-ink-muted">
                Showing <strong className="text-ink">6</strong> of{" "}
                <strong className="text-ink">{filteredProducts.length}</strong> pieces &mdash; tap Explore More to see the full collection.
              </p>
            )}
            <Link
              href="/catalog"
              className="ml-auto btn-explore !py-2.5 !px-6 text-xs uppercase tracking-wider inline-flex items-center gap-2.5 group shadow-sm"
              title="Open standalone e-commerce catalog in separate page"
            >
              <span>Explore More Collections</span>
              <span className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </Link>
          </div>
        )}

        {/* ── 4 E-Commerce Guarantee Trust Pillars (home page only) ── */}
        {!isStandalonePage && (
          <div className="mt-20 pt-14 border-t border-hairline grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 border border-hairline rounded-sm">
              <span className="text-2xl">🪵</span>
              <h4 className="font-heading text-base font-semibold text-ink mt-3">
                100% Seasoned Hardwood
              </h4>
              <p className="text-xs text-ink-muted leading-relaxed mt-1">
                Kiln-stabilized teak, sheesham, and walnut seasoned to 8% moisture equilibrium with a 10-year timber warranty.
              </p>
            </div>

            <div className="bg-white p-6 border border-hairline rounded-sm">
              <span className="text-2xl">🚛</span>
              <h4 className="font-heading text-base font-semibold text-ink mt-3">
                White-Glove Pan-India Delivery
              </h4>
              <p className="text-xs text-ink-muted leading-relaxed mt-1">
                Dedicated padded transport, unpackaging, in-room placement, and professional setup across all major Indian cities.
              </p>
            </div>

            <div className="bg-white p-6 border border-hairline rounded-sm">
              <span className="text-2xl">🎨</span>
              <h4 className="font-heading text-base font-semibold text-ink mt-3">
                Material Sample Box
              </h4>
              <p className="text-xs text-ink-muted leading-relaxed mt-1">
                Curated timber blocks, solid brass castings, and Italian velvet swatches shipped to your doorstep before committing.
              </p>
            </div>

            <div className="bg-white p-6 border border-hairline rounded-sm">
              <span className="text-2xl">🏛️</span>
              <h4 className="font-heading text-base font-semibold text-ink mt-3">
                Gang Tower Showroom
              </h4>
              <p className="text-xs text-ink-muted leading-relaxed mt-1">
                Visit our live atelier in Jodhpur opposite Arora Honda, near Bombay Motors Circle, for a private design consultation.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── Quick View / Bespoke Commission Modal ── */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProduct.name}
          className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white w-full max-w-4xl max-h-[94vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-sm border border-hairline shadow-2xl p-4 sm:p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button — easy to tap with thumb */}
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
              className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-8 h-8 rounded-full bg-[#faf9f6] border border-hairline flex items-center justify-center text-ink-muted hover:text-ink active:scale-95 cursor-pointer shadow-xs"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-start sm:items-center">
              {/* Modal Image */}
              <div className="relative aspect-[4/3] w-full bg-[#f6f2ea] rounded-lg sm:rounded-sm overflow-hidden p-3 sm:p-6 flex items-center justify-center">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Modal Info */}
              <div>
                <div className="flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold-dark font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{selectedProduct.categoryLabel}</span>
                  <span>•</span>
                  <span>{selectedProduct.woodType}</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-ink mt-1.5 sm:mt-2">
                  {selectedProduct.name}
                </h3>

                <div className="mt-2.5 sm:mt-3 flex items-baseline gap-2 sm:gap-3 flex-wrap">
                  <span
                    suppressHydrationWarning
                    className="text-xl sm:text-2xl font-sans font-bold text-[#141312] lining-digits tracking-tight"
                  >
                    {selectedProduct.price}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span
                      suppressHydrationWarning
                      className="text-xs sm:text-sm font-sans line-through text-ink-faint lining-digits"
                    >
                      {selectedProduct.originalPrice}
                    </span>
                  )}
                  <span className="text-[9px] sm:text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full lining-digits">
                    {selectedProduct.leadTime}
                  </span>
                </div>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Key Features */}
                <div className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-ink-faint block">
                    Bespoke Engineering Highlights:
                  </span>
                  {selectedProduct.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-[11px] sm:text-xs text-ink-muted">
                      <span className="text-gold-dark font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Specifications List */}
                <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-4 border-t border-hairline grid grid-cols-2 gap-3 sm:gap-4 text-[11px] sm:text-xs">
                  <div>
                    <span className="text-ink-faint block text-[9px] sm:text-[10px] uppercase">Dimensions</span>
                    <span className="font-medium text-ink">{selectedProduct.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-ink-faint block text-[9px] sm:text-[10px] uppercase">Materials</span>
                    <span className="font-medium text-ink">{selectedProduct.materials}</span>
                  </div>
                </div>

                {/* Modal Action Buttons - Sleek, Premium & Touch-Friendly */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-hairline flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                  <a
                    href={`https://wa.me/919530182514?text=Hello%20Rusteak%20Dot,%20I%20would%20like%20to%20commission%20the%20${encodeURIComponent(
                      selectedProduct.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 h-11 sm:h-12 px-4 rounded-full bg-[#181714] hover:bg-gold-dark active:bg-gold-dark text-white flex items-center justify-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm whitespace-nowrap group cursor-pointer touch-manipulation"
                  >
                    <svg className="w-4 h-4 fill-[#25D366] transition-transform duration-300 group-hover:scale-110 shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>WhatsApp Quote</span>
                    <span className="text-gold-light group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>

                  <a
                    href="tel:+919530182514"
                    className="w-full sm:flex-1 h-11 sm:h-12 px-4 rounded-full border border-hairline hover:border-gold-dark text-ink hover:text-gold-dark active:bg-gold/5 bg-white/70 flex items-center justify-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-2xs whitespace-nowrap cursor-pointer touch-manipulation"
                  >
                    <svg className="w-3.5 h-3.5 text-gold-dark shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>Call Showroom</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
