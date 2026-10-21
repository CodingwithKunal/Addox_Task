import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Award, 
  Truck, 
  CheckCircle2, 
  Phone,
  ArrowRight
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/productsData";

gsap.registerPlugin(ScrollTrigger);

export const BrandStory = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        x: -30,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
      });

      gsap.from(mediaRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        x: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about"
      ref={containerRef}
      className="py-20 lg:py-28 relative overflow-hidden bg-white/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story Copy */}
          <div ref={textRef} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Sam International Heritage • Established 2000</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
              A Quarter Century of <span className="gold-gradient-text italic">Culinary Distinction</span>
            </h2>

            <div className="text-slate-600 space-y-4 text-sm sm:text-base font-normal leading-relaxed">
              <p>
                Founded in 2000, <strong>Sam International</strong>—the parent company of <strong>Addox</strong>—has 
                pioneered the development, importing, and nationwide distribution of Bone China crockery, European crystalware, 
                borosilicate tumblers, and stainless steel collections across India.
              </p>
              <p>
                From five-star hotel dining rooms and corporate headquarters to high-turnover banquet halls and luxury residences, 
                our entire tableware suite is engineered to make everyday dining exotic. Supported by expansive central warehousing 
                in Delhi, we fulfill master carton bulk dispatches promptly with shatter-safe packaging.
              </p>
            </div>

            {/* Customization & Value Prop Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Bespoke Customization</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Custom logo imprinting, 24K gold decal crests, and presentation gift boxes for corporate gifting and hotels.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <Truck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Direct National Importer</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Spacious central warehouses delivering master cartons directly across all Indian states with transit insurance.
                  </div>
                </div>
              </div>
            </div>

            {/* Showroom CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#showroom"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md shadow-amber-600/25 transition-all flex items-center gap-2"
              >
                <span>Visit Karol Bagh Showroom</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider border border-slate-300 transition-colors flex items-center gap-2 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Showroom Desk: {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div ref={mediaRef} className="lg:col-span-5">
            <div className="relative rounded-3xl p-3 bg-white border border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden">
              
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src="/assets/products/images (13).jpg"
                  alt="Addox Luxury Tableware Showroom"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Heritage Badge */}
                <div className="absolute bottom-6 inset-x-6 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-amber-800 uppercase font-bold">
                      Flagship Display
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold">Delhi - 110005</span>
                  </div>
                  <div className="font-serif-luxury text-lg text-slate-900 font-bold mt-1">
                    Krishna Plaza Showroom
                  </div>
                  <p className="text-xs text-slate-600 mt-1 font-normal">
                    4/63, Krishna Plaza, Basement, W.E.A., Padam Singh Road, Near Tip Top Market, Karol Bagh.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
