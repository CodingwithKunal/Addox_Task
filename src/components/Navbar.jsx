import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  Menu, 
  X, 
  Search, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Sparkles, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Lock
} from "lucide-react";
import { COMPANY_DETAILS, CATEGORIES } from "../data/productsData";

export const Navbar = ({ 
  quoteCount = 0, 
  onOpenQuoteDrawer, 
  onOpenSearch, 
  onSelectCategory,
  onOpenAdmin
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);

  // GSAP scroll effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for mobile menu open/close
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
      gsap.fromTo(
        mobileLinksRef.current,
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, stagger: 0.05, duration: 0.3, ease: "power2.out", delay: 0.1 }
      );
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Collections", href: "#collections", hasDropdown: true },
    { name: "Craft & Material", href: "#craftsmanship" },
    { name: "Brand Story", href: "#about" },
    { name: "Wholesale & B2B", href: "#wholesale" },
    { name: "Karol Bagh Showroom", href: "#showroom" },
  ];

  const handleNavClick = (href, categoryId = null) => {
    setMobileMenuOpen(false);
    setCategoryDropdownOpen(false);
    if (categoryId && onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top micro bar for showroom contact & wholesale notice */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sam International — Heritage Tableware Since 2000</span>
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Karol Bagh, Delhi Flagship Showroom</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_DETAILS.phone}`} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="font-semibold text-white">{COMPANY_DETAILS.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <span className="hidden sm:flex items-center gap-1 text-amber-300 font-medium">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>Wholesale & Hospitality Importer</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar with Light Theme */}
      <header
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)] py-3" 
            : "bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="relative">
                <img
                  src="/assets/logo.png"
                  alt="Addox - An Exotic Home Maker"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  style={{ display: 'none' }}
                  className="h-10 px-3 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg items-center justify-center font-cinzel font-bold text-white text-lg tracking-wider"
                >
                  ADDOX
                </div>
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="text-xs uppercase tracking-widest text-slate-800 font-bold font-cinzel">
                  An Exotic Home Maker
                </span>
                <span className="text-[10px] text-amber-700 font-semibold tracking-wider">
                  By Sam International (Est. 2000)
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 shadow-xs">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.name} 
                      className="relative"
                      onMouseEnter={() => setCategoryDropdownOpen(true)}
                      onMouseLeave={() => setCategoryDropdownOpen(false)}
                    >
                      <button
                        onClick={() => handleNavClick("#collections")}
                        className="flex items-center gap-1 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-amber-700 rounded-full hover:bg-white hover:shadow-xs transition-all cursor-pointer"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${categoryDropdownOpen ? "rotate-180 text-amber-600" : ""}`} />
                      </button>

                      {/* Dropdown Menu */}
                      {categoryDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl shadow-slate-900/10 p-2.5 border border-slate-200 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="px-3 py-2 text-[11px] uppercase font-bold text-amber-700 tracking-wider border-b border-slate-100">
                            Glass & Crockery Suites
                          </div>
                          <div className="mt-1 flex flex-col gap-0.5">
                            {CATEGORIES.filter(c => c.id !== "all").map((cat) => (
                              <button
                                key={cat.id}
                                onClick={() => handleNavClick("#collections", cat.id)}
                                className="flex items-center justify-between px-3 py-2.5 text-xs font-medium text-slate-700 hover:text-amber-800 hover:bg-amber-50 rounded-xl transition-colors text-left w-full group"
                              >
                                <span className="group-hover:translate-x-1 transition-transform">
                                  {cat.label}
                                </span>
                                {cat.stockist && (
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 group-hover:bg-amber-100 text-slate-600 group-hover:text-amber-800 font-mono">
                                    {cat.stockist}
                                  </span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-amber-700 rounded-full hover:bg-white hover:shadow-xs transition-all cursor-pointer"
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons (Search, Quote Bag, Wholesale CTA) */}
            <div className="flex items-center gap-2.5">
              {/* Search Button */}
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search tableware and glass"
                className="p-2.5 rounded-full text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 border border-slate-200 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Quote Bag Drawer Trigger */}
              <button
                type="button"
                onClick={onOpenQuoteDrawer}
                aria-label="View quote request bag"
                className="relative p-2.5 rounded-full text-slate-700 hover:text-amber-700 hover:bg-amber-50/80 border border-slate-200 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                {quoteCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-[10px] flex items-center justify-center shadow-md shadow-amber-500/40 animate-pulse">
                    {quoteCount}
                  </span>
                )}
              </button>

              {/* Wholesale Inquiry CTA Button */}
              <a
                href="#wholesale"
                onClick={(e) => { e.preventDefault(); handleNavClick("#wholesale"); }}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-semibold text-xs tracking-wide uppercase hover:brightness-105 shadow-md shadow-amber-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Admin Access Button */}
              <button
                type="button"
                onClick={onOpenAdmin}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
                title="Admin Authentication Portal"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Admin</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                aria-label="Toggle mobile menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-amber-700 bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed inset-0 top-[88px] z-40 bg-white/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-slate-200"
        >
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-bold uppercase tracking-widest text-amber-700 pb-2 border-b border-slate-200">
              Navigation
            </div>
            {navLinks.map((link, idx) => (
              <button
                key={link.name}
                ref={(el) => (mobileLinksRef.current[idx] = el)}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between py-3 text-left text-lg font-serif-luxury font-medium text-slate-900 hover:text-amber-700 border-b border-slate-100 transition-colors"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}

            <div className="pt-4">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 pb-2">
                Tableware Categories
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {CATEGORIES.filter(c => c.id !== "all").map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleNavClick("#collections", cat.id)}
                    className="p-3 text-left rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 hover:border-amber-400 hover:bg-amber-50 transition-all"
                  >
                    <div className="font-semibold text-slate-900">{cat.label}</div>
                    <div className="text-[10px] text-amber-700 mt-0.5">{cat.stockist}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>4/63, Krishna Plaza, Karol Bagh, Delhi</span>
            </div>
            
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-center text-xs uppercase tracking-wider shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Portal</span>
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-center text-sm tracking-wide shadow-md shadow-amber-600/25 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Showroom ({COMPANY_DETAILS.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
