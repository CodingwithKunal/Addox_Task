import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../data/productsData";

export const SearchModal = ({ isOpen, onClose, onSelectProduct, onSelectCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "auto";
      setSearchTerm("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = searchTerm.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.stockist.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.material.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const suggestions = [
    "Pougine Gold-Stemmed Goblet",
    "Royal Botanical Bone China",
    "Glacier Cut Decanter",
    "Compass Candy Pot",
    "Blink Max Canister",
    "Titanium Gold Cutlery"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Search Modal Box with Light Theme */}
      <div 
        className="w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-amber-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search tableware, crystal goblets, bone china sets, canisters..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none font-medium"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 px-2.5 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors shrink-0"
          >
            Esc
          </button>
        </div>

        {/* Suggestions or Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 bg-white">
          {!searchTerm.trim() ? (
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-2 font-cinzel">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => setSearchTerm(sug)}
                      className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 hover:border-amber-400 text-xs text-slate-700 hover:text-amber-800 hover:bg-amber-50 transition-colors cursor-pointer font-medium"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-2 font-cinzel">
                  Browse by Collection
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.filter(c => c.id !== "all").map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectCategory(cat.id);
                        document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="p-3 text-left rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50 text-xs text-slate-700 hover:text-amber-900 transition-all flex items-center justify-between group"
                    >
                      <span className="font-semibold">{cat.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-amber-600 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-slate-500 font-medium">
                Found {results.length} matching products:
              </span>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onClose();
                    onSelectProduct(product);
                  }}
                  className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-sm flex items-center gap-4 cursor-pointer transition-all group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-xl object-contain bg-slate-50 shrink-0 border border-slate-100 p-1"
                    onError={(e) => {
                      e.target.src = "/assets/banners/1.jpg";
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-amber-800 font-mono uppercase font-bold">
                        {product.stockist}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {product.capacity}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors truncate">
                      {product.name}
                    </h4>

                    <p className="text-xs text-slate-500 truncate font-normal">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-sm font-bold text-slate-900 font-cinzel">
                      ₹{product.price.toLocaleString("en-IN")}
                    </div>
                    <div className="text-[10px] text-amber-700 font-bold">
                      Wholesale: ₹{product.wholesalePrice.toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-xs text-slate-500">
              No products found matching "<span className="text-slate-900 font-bold">{searchTerm}</span>".
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
