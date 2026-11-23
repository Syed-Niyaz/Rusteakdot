"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { luxuryProducts, type ProductItem } from "@/lib/products-data";

export function ProductsEcommerceSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
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

  const filteredProducts = useMemo(() => {
    let list = luxuryProducts;
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (sortBy === "price-low") {
      return [...list].sort((a, b) => a.priceNum - b.priceNum);
    }
    if (sortBy === "price-high") {
      return [...list].sort((a, b) => b.priceNum - a.priceNum);
    }
    if (sortBy === "rating") {
      return [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [activeCategory, sortBy]);

  const categories = [
    { id: "all", label: "All Collections", count: luxuryProducts.length },
    { id: "sofas", label: "Sofas & Lounges", count: luxuryProducts.filter((p) => p.category === "sofas").length },
    { id: "chairs", label: "Lounge Chairs", count: luxuryProducts.filter((p) => p.category === "chairs").length },
    { id: "tables", label: "Coffee Tables", count: luxuryProducts.filter((p) => p.category === "tables").length },
    { id: "dining", label: "Dining Suites", count: luxuryProducts.filter((p) => p.category === "dining").length },
    { id: "casegoods", label: "Beds & Storage", count: luxuryProducts.filter((p) => p.category === "casegoods").length },
  ];

  return (
    <section
      id="products"
      className="relative w-full bg-[#faf9f6] text-ink py-12 sm:py-16 border-t border-hairline overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1540px] px-6 sm:px-10 lg:px-16">
        {/* ── Section Header (Compact & Crisp) ── */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center gap-2.5 text-[10px] uppercase tracking-[0.3em] text-gold-dark font-medium mb-2">
            <span className="w-6 h-[1px] bg-gold-dark" />
            <span>ATELIER COMMISSIONS • E-CATALOG</span>
            <span className="w-6 h-[1px] bg-gold-dark" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141312] leading-tight tracking-tight">
            Curated Bespoke Furniture{" "}
            <span className="font-normal italic text-gold-dark font-cormorant">
              Ready for Your Floorplan
            </span>
          </h2>

          <p className="mt-2 text-xs text-ink-muted leading-relaxed max-w-xl mx-auto">
            Individually handcrafted in Jodhpur from seasoned hardwoods, solid brass, and European velvet.
          </p>
        </div>

        {/* ── Controls: Category Tabs & Sort Filter Bar (Mobile-Swipeable) ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-hairline mb-8">
          {/* Category Filter Pills: Smooth swipe on mobile, clean wrap on desktop */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-[#181714] text-white shadow-md scale-102 sm:scale-105 border border-[#181714]"
                    : "bg-white text-ink-muted border border-hairline hover:border-gold-dark hover:text-ink shadow-2xs"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
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

          {/* Sort By Dropdown */}
          <div className="flex items-center justify-between sm:justify-end gap-3 self-stretch md:self-auto shrink-0 pt-2 sm:pt-0">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-ink-faint">
              Sort By:
            </span>
            <select
              value={sortBy}
              aria-label="Sort products by"
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-hairline text-xs font-medium text-ink px-3 py-2 rounded-sm focus:outline-none focus:border-gold-dark cursor-pointer shadow-2xs"
            >
              <option value="featured">Curated & Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated ★</option>
            </select>
          </div>
        </div>

        {/* ── Products Grid ── */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const swatchIdx = activeSwatches[product.id] || 0;
            const currentSwatch = product.swatches[swatchIdx] || product.swatches[0];
            const isLiked = wishlist.has(product.id);

            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group bg-white border border-hairline rounded-sm overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-gold/60 transition-all duration-500 cursor-pointer"
              >
                {/* ── Product Image Card Header ── */}
                <div className="relative aspect-[4/3] w-full bg-[#f6f2ea] overflow-hidden p-6 flex items-center justify-center">
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold text-gold-dark border border-gold/30 shadow-xs">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => toggleWishlist(product.id, e)}
                    aria-label="Save to Wishlist"
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-hairline flex items-center justify-center text-ink hover:text-red-600 hover:scale-110 transition-all shadow-xs"
                  >
                    <svg
                      className={`w-4 h-4 transition-colors ${
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
                  <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-108">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Quick View Hover Pill Overlay */}
                  <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="bg-[#181714]/90 backdrop-blur-md text-white text-[11px] uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      Quick View & Specs ↗
                    </span>
                  </div>
                </div>

                {/* ── Product Card Details ── */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-white">
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
                    <h3 className="font-heading text-xl font-bold text-ink mt-2 group-hover:text-gold-dark transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Materials & Wood */}
                    <p className="text-xs text-ink-muted mt-1 line-clamp-1">
                      {product.woodType} • {product.materials}
                    </p>

                    {/* Dimensions & Lead Time */}
                    <div className="mt-3 flex items-center gap-3 text-[11px] text-ink-faint">
                      <span>{product.dimensions}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-medium">{product.leadTime}</span>
                    </div>

                    {/* Material Swatch Selector */}
                    {product.swatches.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-hairline/80 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider text-ink-faint">
                          Finish: <span className="font-medium text-ink">{currentSwatch.name}</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                          {product.swatches.map((swatch, sIdx) => (
                            <button
                              key={swatch.name}
                              onClick={(e) => handleSwatchSelect(product.id, sIdx, e)}
                              title={swatch.name}
                              className={`w-4 h-4 rounded-full border transition-transform ${
                                swatchIdx === sIdx
                                  ? "scale-125 border-gold shadow-xs"
                                  : "border-hairline hover:scale-110"
                              }`}
                              style={{ backgroundColor: swatch.color }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── Price & Action Footer ── */}
                  <div className="mt-5 pt-4 border-t border-hairline flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-heading font-bold text-[#141312]">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs line-through text-ink-faint">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-ink-faint uppercase tracking-wider block">
                        Made to Order
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="px-4 py-2 bg-[#181714] text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-gold-dark hover:text-white transition-colors cursor-pointer shadow-sm"
                    >
                      Enquire Quote →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 4 E-Commerce Guarantee Trust Pillars ── */}
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
      </div>

      {/* ── Quick View / Bespoke Commission Modal ── */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProduct.name}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm border border-hairline shadow-2xl p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#faf9f6] border border-hairline flex items-center justify-center text-ink-muted hover:text-ink cursor-pointer"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Modal Image */}
              <div className="relative aspect-[4/3] w-full bg-[#f6f2ea] rounded-sm overflow-hidden p-6 flex items-center justify-center">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Modal Info */}
              <div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold-dark font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{selectedProduct.categoryLabel}</span>
                  <span>•</span>
                  <span>{selectedProduct.woodType}</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink mt-2">
                  {selectedProduct.name}
                </h3>

                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-2xl font-heading font-bold text-[#141312]">
                    {selectedProduct.price}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-sm line-through text-ink-faint">
                      {selectedProduct.originalPrice}
                    </span>
                  )}
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                    {selectedProduct.leadTime}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Key Features */}
                <div className="mt-5 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-ink-faint block">
                    Bespoke Engineering Highlights:
                  </span>
                  {selectedProduct.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-ink-muted">
                      <span className="text-gold-dark font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Specifications List */}
                <div className="mt-6 pt-4 border-t border-hairline grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-ink-faint block text-[10px] uppercase">Dimensions</span>
                    <span className="font-medium text-ink">{selectedProduct.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-ink-faint block text-[10px] uppercase">Materials</span>
                    <span className="font-medium text-ink">{selectedProduct.materials}</span>
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/912912600000?text=Hello%20Rusteak%20Dot,%20I%20would%20like%20to%20commission%20the%20${encodeURIComponent(
                      selectedProduct.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-6 bg-[#181714] text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-gold-dark transition-colors shadow-sm"
                  >
                    Request WhatsApp Quote
                  </a>
                  <a
                    href="tel:+912912600000"
                    className="text-center py-3 px-6 border border-hairline text-ink text-xs uppercase tracking-wider font-semibold rounded-full hover:border-gold-dark transition-colors"
                  >
                    Call Showroom Studio
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
