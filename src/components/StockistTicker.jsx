import { useRef, useEffect } from "react";
import gsap from "gsap";
import { STOCKIST_BRANDS } from "../data/productsData";
import { Sparkles } from "lucide-react";

export const StockistTicker = ({ onSelectStockist }) => {
  const tickerTrackRef = useRef(null);

  useEffect(() => {
    const track = tickerTrackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 26,
      repeat: -1,
    });

    const handleMouseEnter = () => tween.pause();
    const handleMouseLeave = () => tween.play();

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const tickerList = [...STOCKIST_BRANDS, ...STOCKIST_BRANDS];

  return (
    <div className="relative py-8 bg-white/70 backdrop-blur-md border-y border-slate-200/80 overflow-hidden shadow-xs">
      {/* Side gradient fade masks */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#fafaf9] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#fafaf9] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span className="uppercase tracking-widest font-bold text-slate-800 font-cinzel">
            Official Importers & National Stockists
          </span>
        </div>
        <span className="hidden sm:inline-block text-[11px] text-slate-500">
          Direct partnership since 2000 • Authentic hallmarked stock
        </span>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing">
        <div 
          ref={tickerTrackRef}
          className="flex items-center gap-6 w-max py-2 select-none"
        >
          {tickerList.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              onClick={() => onSelectStockist && onSelectStockist(brand.name)}
              className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-amber-400 hover:shadow-md hover:shadow-amber-500/10 transition-all cursor-pointer group shrink-0"
            >
              <div className="w-24 h-10 flex items-center justify-center p-1 bg-slate-50/80 rounded-lg group-hover:scale-105 transition-transform border border-slate-100">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-8 max-w-full object-contain filter contrast-125"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span 
                  style={{ display: 'none' }} 
                  className="text-xs font-bold text-slate-900 font-cinzel"
                >
                  {brand.name}
                </span>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-500">
                  {brand.specialty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
