import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const CategoryBento = ({ onSelectCategory }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 35,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const bentoItems = [
    {
      id: "goblets",
      title: "Pougine Gold-Stemmed Goblets",
      subtitle: "European lead-free crystal with floating golden crystals inside the stem",
      image: "/assets/products/Luxury-Glassware-Burgundy-Wine-Glass-Concave-Cup-Glass-Cup.avif",
      badge: "Pougine Paris",
      gridClass: "md:col-span-8 md:row-span-2 min-h-[380px]",
      tag: "24K Crystal Filled Stem"
    },
    {
      id: "bone-china",
      title: "Royal Bone China Dinnerware",
      subtitle: "24K gold accented 32-piece banquet service formulated with 45% fine bone ash",
      image: "/assets/products/images (11).jpg",
      badge: "Sam International",
      gridClass: "md:col-span-4 min-h-[220px]",
      tag: "45% Bone Ash"
    },
    {
      id: "crystal",
      title: "Glacier Decanters & Rocks",
      subtitle: "Sculpted ice-facet decanter sets with heavy-base tumblers",
      image: "/assets/products/images (10).jpg",
      badge: "Green Apple",
      gridClass: "md:col-span-4 min-h-[220px]",
      tag: "Diamond Facet Cut"
    },
    {
      id: "platters",
      title: "Candy Pots & Beaded Platters",
      subtitle: "Compass faceted crystal bonbonnières & ornate lidded pedestal urns",
      image: "/assets/products/61KIvxJ8SDL._AC_UF1000,1000_QL80_.jpg",
      badge: "Compass Series",
      gridClass: "md:col-span-6 min-h-[260px]",
      tag: "Hobnail Beaded"
    },
    {
      id: "borosilicate",
      title: "Blink Max Fluted Borosilicate",
      subtitle: "Thermal shock proof glass canisters with natural wood & crystal knob lids",
      image: "/assets/products/images (1).jpg",
      badge: "Blink Max",
      gridClass: "md:col-span-6 min-h-[260px]",
      tag: "-20°C to +150°C"
    }
  ];

  return (
    <section 
      id="collections"
      ref={containerRef}
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>Curated Collections</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
              Crafted for Hospitality & <span className="gold-gradient-text italic">Haute Living</span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            From the Karol Bagh showroom floor to five-star banquet tables nationwide, discover flagship tableware categories forged from European crystal, vitrified bone china, and laboratory borosilicate.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {bentoItems.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              onClick={() => onSelectCategory && onSelectCategory(item.id)}
              className={`group relative rounded-3xl overflow-hidden p-6 flex flex-col justify-between cursor-pointer border border-slate-200/90 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 bg-white ${item.gridClass}`}
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
              </div>

              {/* Top Badge & Corner Arrow */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-bold text-slate-800 uppercase tracking-wider shadow-xs">
                  {item.badge}
                </span>

                <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 group-hover:text-amber-700 group-hover:bg-white flex items-center justify-center transition-all group-hover:scale-110 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Info */}
              <div className="relative z-10 pt-16">
                <div className="inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/90 backdrop-blur-md text-amber-900 font-bold mb-2 shadow-xs">
                  {item.tag}
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white group-hover:text-amber-200 transition-colors drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-200 line-clamp-2 font-light">
                  {item.subtitle}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-amber-300 font-bold tracking-wider uppercase group-hover:underline">
                  <span>Explore Series</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
