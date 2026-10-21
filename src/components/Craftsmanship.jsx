import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  Feather, 
  Gem
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Craftsmanship = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const innovations = [
    {
      icon: Flame,
      title: "Laboratory Borosilicate 3.3",
      brand: "Blink Max Series",
      temp: "-30°C to +150°C",
      description: "Low thermal expansion glass with zero micro-fracturing. Pour boiling coffee or piping soup directly over ice cubes without cracking.",
      tag: "Thermal Shock Proof"
    },
    {
      icon: Feather,
      title: "45% Fine Bone Ash Vitrification",
      brand: "Sam International Heritage",
      temp: "Kiln Fired at 1,280°C",
      description: "Formulated with 45% fine bone ash. Translucent under candlelight, featherlight tactile weight, and double the chip resistance of standard ceramic.",
      tag: "24K Gold Embellished"
    },
    {
      icon: Gem,
      title: "Lead-Free Barium Optical Crystal",
      brand: "Pougine & Green Apple",
      temp: "Laser Cold-Cut Rim (0.8mm)",
      description: "Formulated without toxic lead oxides using pure barium crystal. Delivers diamond-like light refraction and an acoustic bell chime upon clinking.",
      tag: "Sommelier Certified"
    },
    {
      icon: ShieldCheck,
      title: "PVD Titanium Molecular Coating",
      brand: "Addox Royale Cutlery",
      temp: "18/10 Marine Stainless",
      description: "Physical Vapor Deposition ion-bonds titanium to surgical stainless steel in high vacuum. Preserves mirror luster without flaking or discoloration.",
      tag: "Permanent Luster"
    }
  ];

  return (
    <section 
      id="craftsmanship"
      ref={sectionRef}
      className="py-20 lg:py-28 relative bg-gradient-to-b from-stone-50/80 via-amber-50/30 to-slate-50/80 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Material Science & Craftsmanship</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
            The Physics of <span className="gold-gradient-text italic">Uncompromising Quality</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Every piece imported and distributed by Addox undergoes thermodynamic shock, 
            food contact safety certification, and commercial dishwashing tests.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-400 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Brand */}
                  <h3 className="font-serif-luxury text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-amber-700 font-bold mt-1">
                    {item.brand}
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium">Benchmark:</span>
                  <span className="font-mono text-amber-800 font-bold">{item.temp}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
