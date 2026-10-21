import { useState } from "react";
import { Eye, Plus, Check, Star, Flame } from "lucide-react";

export const ProductCard = ({ 
  product, 
  onQuickView, 
  onAddToQuote, 
  isAddedToQuote = false 
}) => {
  const [imageError, setImageError] = useState(false);

  const getBadgeClass = (type) => {
    switch (type) {
      case "gold":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "blue":
        return "bg-sky-100 text-sky-800 border-sky-300";
      case "amber":
        return "bg-orange-100 text-orange-800 border-orange-300";
      default:
        return "bg-slate-100 text-slate-700 border-slate-300";
    }
  };

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-400/80 transition-all duration-400 flex flex-col justify-between">
      
      {/* Top Media Area */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-50 flex items-center justify-center p-2">
        <img
          src={imageError ? "/assets/banners/1.jpg" : product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center group-hover:scale-106 transition-transform duration-600 ease-out"
          onError={() => {
            if (!imageError) setImageError(true);
          }}
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md shadow-xs ${getBadgeClass(product.badgeType)}`}>
            {product.badge}
          </span>

          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/95 border border-slate-200 text-slate-700 shadow-xs">
            {product.stockist}
          </span>
        </div>

        {/* Quick View Floating Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none bg-slate-900/10 backdrop-blur-[2px]">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
            className="pointer-events-auto px-4 py-2 rounded-full bg-white hover:bg-amber-600 hover:text-white text-slate-900 text-xs font-bold uppercase tracking-wider shadow-lg border border-slate-200 transition-all flex items-center gap-1.5 scale-95 group-hover:scale-100"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Bottom Spec pill over image */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/95 text-slate-700 border border-slate-200 font-mono font-medium shadow-xs">
            {product.capacity}
          </span>
        </div>
      </div>

      {/* Product Details Body */}
      <div className="p-5 flex flex-col grow justify-between gap-3.5 bg-white">
        <div>
          {/* Rating and Reviews */}
          <div className="flex items-center gap-1.5 text-xs mb-1.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="ml-1 font-bold text-slate-800">{product.rating}</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] text-slate-500">({product.reviewsCount} reviews)</span>
          </div>

          {/* Product Title */}
          <h4 
            onClick={() => onQuickView(product)}
            className="font-serif-luxury text-base font-semibold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h4>

          {/* Subtitle / Features */}
          <p className="mt-1 text-xs text-slate-500 line-clamp-2 font-normal leading-relaxed">
            {product.subtitle}
          </p>

          {/* Material & Thermal Resistance */}
          <div className="mt-2.5 flex items-center gap-2 text-[10px] text-slate-500">
            <Flame className="w-3 h-3 text-amber-600 shrink-0" />
            <span className="truncate">{product.thermalResistance}</span>
          </div>
        </div>

        {/* Pricing & Add to Quote CTA */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-slate-900 font-cinzel">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <div className="text-[10px] text-amber-700 font-bold">
              Wholesale: ₹{product.wholesalePrice.toLocaleString("en-IN")}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onAddToQuote(product)}
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isAddedToQuote
                  ? "bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-600/30"
                  : "bg-slate-100 text-slate-700 hover:text-white hover:bg-amber-600 border-slate-200"
              }`}
              title={isAddedToQuote ? "Added to Quote Request" : "Add to Quote Request"}
              aria-label="Add to Quote"
            >
              {isAddedToQuote ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
