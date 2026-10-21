import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  Flame, 
  Wine, 
  ChevronRight, 
  ChevronLeft
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/productsData";

const HERO_SLIDES = [
  {
    title: "Pougine Gold-Stemmed Goblets",
    tag: "Haute European Glassware",
    subtitle: "Handblown crystal flutes filled with shimmering golden crystal beads for royal toasts.",
    image: "/assets/products/Luxury-Glassware-Burgundy-Wine-Glass-Concave-Cup-Glass-Cup.avif",
    specs: ["24K Gold Crystal Filled", "0.8mm Cold-Cut Lip", "Lead-Free Barium Crystal"]
  },
  {
    title: "European Grand Cru Stemware Suite",
    tag: "Sommelier Banquet Series",
    subtitle: "Complete banquet suite including gold-rimmed flutes, martini & crystal rocks glasses.",
    image: "/assets/products/empty-crystal-glasses-with-marble-background_23-2148722488.avif",
    specs: ["24K Gilded Greek Key", "Pulled Monobloc Stem", "2,000 Cycle Tested"]
  },
  {
    title: "Royal Botanical 32-Piece Bone China",
    tag: "Sam International Heritage",
    subtitle: "45% bone ash translucent vitrified dinnerware with hand-painted gold rings since 2000.",
    image: "/assets/products/images (11).jpg",
    specs: ["45% Calcined Bone Ash", "Translucent Resonance", "Curry Stain Proof"]
  },
  {
    title: "Glacier Facet Crystal Decanter",
    tag: "Diamonds & Green Apple",
    subtitle: "Heavy sculpted ice-facet crystal decanter with 4 matching rock glasses on marble.",
    image: "/assets/products/images (10).jpg",
    specs: ["Hermetic Stopper", "450g Weighted Base", "Diamond Facet Cut"]
  }
];

export const Hero = ({ onExploreClick, onRequestCatalogClick }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const ctaRef = useRef(null);
  const card3dRef = useRef(null);
  const statsRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);

  // Initial Entrance Animation with GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2 }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.5"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      )
      .fromTo(
        card3dRef.current,
        { opacity: 0, scale: 0.92, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 1.1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        statsRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Slide autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // 3D Tilt Interaction on Mouse Move
  const handleMouseMove = (e) => {
    if (!card3dRef.current) return;
    const rect = card3dRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card3dRef.current, {
      rotationY: x * 0.035,
      rotationX: -y * 0.035,
      transformPerspective: 1000,
      ease: "power1.out",
      duration: 0.4
    });
  };

  const handleMouseLeave = () => {
    if (!card3dRef.current) return;
    gsap.to(card3dRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: "power2.out",
      duration: 0.6
    });
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-8 pb-16 lg:py-20 light-hero-mesh"
    >
      {/* Light Mixed Gradient Atmospheric Orbs */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-amber-200/35 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-orange-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-5 left-1/3 w-[600px] h-[400px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Heritage Badge */}
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-amber-300/60 text-amber-800 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm shadow-amber-900/5 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>Sam International • Since 2000</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-slate-600 font-medium">Karol Bagh Flagship Showroom</span>
            </div>

            {/* Main Headline */}
            <h1 
              ref={titleRef}
              className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl xl:text-6xl font-medium tracking-tight text-slate-900 leading-[1.14]"
            >
              Exquisite Glassware &{" "}
              <span className="gold-gradient-text italic font-normal">Fine Crockery</span>{" "}
              for Extraordinary Living.
            </h1>

            {/* Subtitle */}
            <p 
              ref={subtitleRef}
              className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
            >
              India’s premier importer and national stockist of European crystal goblets, high-borosilicate glass jars, 
              45% bone ash vitrified dinnerware, and luxury banquet accessories. Supplying five-star hotels, luxury catering, 
              and discerning residences across India.
            </p>

            {/* CTAs */}
            <div 
              ref={ctaRef}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-lg shadow-amber-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Master Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onRequestCatalogClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs tracking-wider uppercase border border-slate-300 shadow-xs hover:border-amber-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>Wholesale Price List</span>
              </button>
            </div>

            {/* Quality Seals Row */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>150°C Thermal Shock Resistant</span>
              </div>
              <div className="flex items-center gap-2">
                <Wine className="w-4 h-4 text-amber-600" />
                <span>Lead-Free Barium Optical Crystal</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Commercial Dishwasher Tested</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive 3D Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              ref={card3dRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-lg aspect-[4/5] sm:aspect-square rounded-3xl p-3 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-slate-900/10 group cursor-pointer overflow-hidden transition-shadow"
            >
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-amber-300/30 via-orange-300/20 to-sky-200/30 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Slide Images */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center scale-102 group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient overlay for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                  </div>
                ))}

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 text-[11px] font-bold text-amber-800 uppercase tracking-wider shadow-sm">
                    {HERO_SLIDES[activeSlide].tag}
                  </span>
                </div>

                {/* Slide Arrows */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    aria-label="Previous slide"
                    className="p-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-800 hover:text-amber-600 hover:bg-white border border-slate-200 shadow-sm transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    aria-label="Next slide"
                    className="p-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-800 hover:text-amber-600 hover:bg-white border border-slate-200 shadow-sm transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Slide Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-20">
                  <div className="text-xl sm:text-2xl font-serif-luxury text-white font-medium drop-shadow-sm">
                    {HERO_SLIDES[activeSlide].title}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-200 line-clamp-2 font-light">
                    {HERO_SLIDES[activeSlide].subtitle}
                  </p>

                  {/* Micro Specs Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {HERO_SLIDES[activeSlide].specs.map((spec) => (
                      <span 
                        key={spec}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-slate-900 font-mono font-medium shadow-xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Slide Indicators */}
                  <div className="mt-4 flex items-center gap-1.5">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setActiveSlide(idx); }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === activeSlide ? "w-8 bg-amber-400" : "w-2.5 bg-white/50 hover:bg-white"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Stats Ticker Bar */}
        <div 
          ref={statsRef}
          className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 bg-white/70 backdrop-blur-md p-6 rounded-3xl border shadow-xs"
        >
          <div className="flex flex-col">
            <span className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold gold-gradient-text">
              25+ Years
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-800 font-bold mt-1">
              Heritage Since 2000
            </span>
            <span className="text-[11px] text-slate-500">Founded by Sam International</span>
          </div>

          <div className="flex flex-col">
            <span className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold gold-gradient-text">
              500+ SKUs
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-800 font-bold mt-1">
              Tableware & Crockery
            </span>
            <span className="text-[11px] text-slate-500">Borosilicate, Crystal & China</span>
          </div>

          <div className="flex flex-col">
            <span className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold gold-gradient-text">
              8 Global Brands
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-800 font-bold mt-1">
              Direct Importer & Stockist
            </span>
            <span className="text-[11px] text-slate-500">Blink Max, Pougine, Yujing, etc.</span>
          </div>

          <div className="flex flex-col">
            <span className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold gold-gradient-text">
              Delhi Showroom
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-800 font-bold mt-1">
              Karol Bagh Flagship
            </span>
            <span className="text-[11px] text-slate-500">Live tactile sampling center</span>
          </div>
        </div>

      </div>
    </section>
  );
};
