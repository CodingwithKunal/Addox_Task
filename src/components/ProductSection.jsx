import { useState, useMemo, useRef, useEffect } from "react";
import gsap from "gsap";
import { 
  CATEGORIES, 
  PRODUCTS, 
  STOCKIST_BRANDS 
} from "../data/productsData";
import { ProductCard } from "./ProductCard";
import { 
  Search, 
  X, 
  PackageCheck, 
  Sparkles, 
  Filter 
} from "lucide-react";

export const ProductSection = ({ 
  selectedCategory = "all", 
  onCategoryChange,
  searchQuery = "",
  onSearchChange,
  selectedStockist = null,
  onStockistChange,
  onQuickView,
  onAddToQuote,
  quoteItems = []
}) => {
  const [sortBy, setSortBy] = useState("featured");
  const gridRef = useRef(null);

  // Filter products based on Category, Stockist, Search Query, and Sort
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Stockist brand
    if (selectedStockist) {
      result = result.filter((p) => p.stockist.toLowerCase().includes(selectedStockist.toLowerCase()));
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.stockist.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedStockist, searchQuery, sortBy]);

  // GSAP animation when filtered list changes
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "power2.out"
        }
      );
    }
  }, [selectedCategory, selectedStockist, searchQuery, sortBy]);

  const quoteItemIds = useMemo(() => {
    return new Set(quoteItems.map((item) => item.id));
  }, [quoteItems]);

  const resetFilters = () => {
    if (onCategoryChange) onCategoryChange("all");
    if (onStockistChange) onStockistChange(null);
    if (onSearchChange) onSearchChange("");
    setSortBy("featured");
  };

  return (
    <section id="products" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Master Tableware Catalog</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
            The Complete <span className="gold-gradient-text italic">Addox Collection</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            Engineered for culinary presentation. Each piece is hallmarked for optical brilliance, 
            thermal durability, and commercial banquet longevity.
          </p>
        </div>

        {/* Filter Controls Bar with Light Theme */}
        <div className="bg-white/90 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-sm mb-8 space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange && onCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-linear-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-600/30 scale-102"
                      : "bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search, Stockist Filter, and Sort */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
            
            {/* Search Input */}
            <div className="relative grow max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                placeholder="Search goblets, bone china, decanters, candy pots..."
                className="w-full pl-10 pr-9 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange && onSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Right filter pill buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Stockist Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-slate-500 hidden sm:inline font-medium">Stockist:</span>
                <select
                  value={selectedStockist || ""}
                  onChange={(e) => onStockistChange && onStockistChange(e.target.value || null)}
                  className="px-3.5 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="">All Brands</option>
                  {STOCKIST_BRANDS.map((brand) => (
                    <option key={brand.name} value={brand.name}>
                      {brand.name}
                    </option>
                  ))}
                  <option value="Sam International">Sam International</option>
                  <option value="Addox Royale">Addox Royale</option>
                </select>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-slate-500 hidden sm:inline font-medium">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3.5 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="featured">Featured Picks</option>
                  <option value="rating">Top Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Reset active filters if any are applied */}
              {(selectedCategory !== "all" || selectedStockist || searchQuery) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-3.5 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-xs text-amber-800 font-bold transition-colors flex items-center gap-1 border border-amber-200"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Product Count & Active Filters Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <div>
            Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> luxury items
            {selectedCategory !== "all" && (
              <span> in <span className="text-amber-700 font-semibold">{CATEGORIES.find(c => c.id === selectedCategory)?.label}</span></span>
            )}
            {selectedStockist && (
              <span> by <span className="text-amber-700 font-semibold">{selectedStockist}</span></span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <PackageCheck className="w-4 h-4 text-amber-600" />
            <span className="text-slate-700 font-medium">Wholesale carton pricing applicable on bulk orders</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div 
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToQuote={onAddToQuote}
                isAddedToQuote={quoteItemIds.has(product.id)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 shadow-xs">
            <Filter className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-serif-luxury text-slate-900">No products found</h3>
            <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
              We couldn't find any items matching your selected criteria. Try adjusting your search term or clearing filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 px-5 py-2.5 rounded-full bg-amber-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-md shadow-amber-600/20"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
