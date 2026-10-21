import { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageSquare, 
  Mail
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/productsData";

export const InquiryCartDrawer = ({ 
  isOpen, 
  onClose, 
  items = [], 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) => {
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        drawerRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const totalWholesale = items.reduce(
    (sum, item) => sum + item.wholesalePrice * (item.quantity || 1),
    0
  );

  const totalRetail = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleSendWhatsAppQuote = () => {
    let summary = `*ADDOX / SAM INTERNATIONAL - WHOLESALE QUOTE REQUEST*\n\n`;
    items.forEach((item, idx) => {
      summary += `${idx + 1}. ${item.name} (${item.stockist})\n   • Qty: ${item.quantity || 1} sets\n   • Est Wholesale: ₹${(item.wholesalePrice * (item.quantity || 1)).toLocaleString("en-IN")}\n`;
    });
    summary += `\n*Total Estimated Wholesale:* ₹${totalWholesale.toLocaleString("en-IN")}\n`;
    summary += `\nPlease confirm carton availability, freight dispatch, and invoice.`;

    window.open(`https://wa.me/919899460840?text=${encodeURIComponent(summary)}`, "_blank");
  };

  const handleSendEmailQuote = () => {
    let subject = encodeURIComponent("Wholesale Tableware Quote Request - Addox");
    let body = encodeURIComponent(
      `Dear Addox / Sam International Sales Team,\n\nI would like to request a wholesale quotation for the following items:\n\n` +
      items.map((item, idx) => `${idx + 1}. ${item.name} - Qty: ${item.quantity || 1} sets`).join("\n") +
      `\n\nTotal Estimated Value: ₹${totalWholesale.toLocaleString("en-IN")}\n\nPlease contact me with master carton details.\n\nRegards.`
    );
    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div 
          ref={drawerRef}
          className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-lg font-bold text-slate-900">
                  Wholesale Quote Bag
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  {items.length} {items.length === 1 ? "item" : "items"} shortlisted
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length > 0 ? (
              items.map((item) => (
                <div 
                  key={item.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex gap-3.5 items-center justify-between"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-contain bg-slate-50 shrink-0 border border-slate-100 p-1"
                    onError={(e) => {
                      e.target.src = "/assets/banners/1.jpg";
                    }}
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-amber-800 font-mono uppercase font-bold">
                      {item.stockist}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <div className="text-[11px] text-amber-700 font-mono font-bold mt-0.5">
                      Wholesale: ₹{(item.wholesalePrice * (item.quantity || 1)).toLocaleString("en-IN")}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center rounded-lg bg-slate-100 border border-slate-200 px-1.5 py-0.5">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                          className="p-0.5 text-slate-600 hover:text-slate-900"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-900 min-w-[20px] text-center">
                          {item.quantity || 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                          className="p-0.5 text-slate-600 hover:text-slate-900"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-16 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
                <h4 className="font-serif-luxury text-base font-bold text-slate-900">Your quote bag is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Click the + button on any goblet, decanter, or bone china set to add it to your wholesale quotation request.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 px-5 py-2 rounded-full bg-amber-600 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Browse Products
                </button>
              </div>
            )}
          </div>

          {/* Footer Totals & Dispatch */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50/80 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Catalog Retail Value:</span>
                  <span className="line-through text-slate-400">₹{totalRetail.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-800 font-bold text-sm">
                  <span>Est. Direct Wholesale:</span>
                  <span className="font-cinzel text-amber-700 text-base">₹{totalWholesale.toLocaleString("en-IN")}</span>
                </div>
                <p className="text-[10px] text-slate-500">
                  * Final pricing confirmed based on master carton volumes and delivery location.
                </p>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleSendWhatsAppQuote}
                  className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Quote via WhatsApp (+91-9899460840)</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleSendEmailQuote}
                    className="flex-1 py-2.5 px-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-600" />
                    <span>Email Quote</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClearCart}
                    className="py-2.5 px-4 rounded-full bg-white hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200 text-xs font-semibold transition-colors shadow-xs"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
