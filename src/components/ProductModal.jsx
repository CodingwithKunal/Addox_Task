import { useState, useEffect } from "react";
import { 
  X, 
  Star, 
  Check, 
  ShieldCheck, 
  Flame, 
  MessageSquare, 
  Plus, 
  Minus
} from "lucide-react";

export const ProductModal = ({ 
  product, 
  isOpen, 
  onClose, 
  onAddToQuote, 
  isAddedToQuote = false 
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setActiveImageIndex(0);
      setQuantity(1);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Addox / Sam International Team,\n\nI am inquiring about:\n• Product: ${product.name} (${product.id})\n• Category: ${product.categoryLabel}\n• Quantity Needed: ${quantity} sets\n• Wholesale MOQ: ${product.moq}\n\nPlease share availability, bulk carton pricing, and dispatch timeline.`
    );
    window.open(`https://wa.me/919899460840?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container with Light Theme */}
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-900/20 overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Media Gallery */}
          <div className="md:col-span-6 p-6 flex flex-col justify-between bg-slate-50/80 border-b md:border-b-0 md:border-r border-slate-200">
            <div>
              {/* Main Image */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center p-3 shadow-xs">
                <img
                  src={images[activeImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-contain object-center"
                  onError={(e) => {
                    e.target.src = "/assets/banners/1.jpg";
                  }}
                />
                
                {/* Brand Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-amber-800 border border-amber-300 shadow-xs">
                    {product.stockist}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-2.5 mt-4">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 p-1 bg-white transition-all ${
                        activeImageIndex === idx ? "border-amber-500 scale-105 shadow-xs" : "border-slate-200 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quality Seals */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span>Thermal Shock Proof</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>100% Food Contact Safe</span>
              </div>
            </div>
          </div>

          {/* Right Product Specifications */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              
              {/* Category & Ratings */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-amber-700 font-mono uppercase tracking-wider font-bold">
                  {product.categoryLabel}
                </span>

                <div className="flex items-center text-amber-500 gap-1 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span className="text-slate-800">{product.rating}</span>
                  <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  {product.subtitle}
                </p>
              </div>

              {/* Price Banner */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between shadow-xs">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Retail Price</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-cinzel text-slate-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right border-l border-amber-200 pl-4">
                  <div className="text-[10px] text-amber-800 font-bold uppercase tracking-wider">
                    Wholesale Price
                  </div>
                  <div className="text-lg font-bold font-cinzel text-amber-700">
                    ₹{product.wholesalePrice.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">Min: {product.moq}</div>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="text-xs space-y-2 border-t border-b border-slate-100 py-3">
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-slate-500">Capacity / Pack:</span>
                  <span className="col-span-2 text-slate-900 font-semibold">{product.capacity}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-slate-500">Material:</span>
                  <span className="col-span-2 text-slate-900 font-medium">{product.material}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-slate-500">Resistance:</span>
                  <span className="col-span-2 text-slate-900 font-medium">{product.thermalResistance}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-slate-500">Master Crate MOQ:</span>
                  <span className="col-span-2 text-amber-800 font-bold">{product.moq}</span>
                </div>
              </div>

              {/* Description & Key Features */}
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                {product.description}
              </p>

              {product.features && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Key Highlights</div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Actions: Quantity + WhatsApp + Add to Quote */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity Selector */}
                <div className="flex items-center rounded-full bg-slate-100 border border-slate-300 px-2.5 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-1 text-slate-600 hover:text-slate-900"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-slate-900 min-w-7 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1 text-slate-600 hover:text-slate-900"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Quote Button */}
                <button
                  type="button"
                  onClick={() => onAddToQuote(product, quantity)}
                  className={`flex-1 py-3 px-4 rounded-full font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isAddedToQuote
                      ? "bg-amber-600 text-white shadow-md shadow-amber-600/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {isAddedToQuote ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  <span>{isAddedToQuote ? "Added to Quote Bag" : "Add to Quote Bag"}</span>
                </button>
              </div>

              {/* Direct WhatsApp Inquiry Button */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Price & Stock Check</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
