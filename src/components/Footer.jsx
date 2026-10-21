import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Send, 
  MessageSquare, 
  CheckCircle2
} from "lucide-react";
import { COMPANY_DETAILS, CATEGORIES } from "../data/productsData";

export const Footer = ({ onSelectCategory }) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail("");
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-12 overflow-hidden border-t border-slate-800">
      
      {/* Background ambient warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Parent Company Story */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <img
                src="/assets/logo.png"
                alt="Addox Logo"
                className="h-11 w-auto object-contain brightness-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span 
                style={{ display: 'none' }} 
                className="font-cinzel text-xl font-bold gold-gradient-text"
              >
                ADDOX
              </span>
            </a>

            <p className="text-xs text-slate-400 font-normal leading-relaxed">
              <strong>Sam International</strong>, the parent company of Addox, has pioneered the invention, 
              importing, and national distribution of Bone China crockery, European crystalware, 
              borosilicate tumblers, and fine kitchenware since 2000.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_DETAILS.showroom.addressLine1}, {COMPANY_DETAILS.showroom.addressLine2}, {COMPANY_DETAILS.showroom.city} - {COMPANY_DETAILS.showroom.pin}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_DETAILS.phoneDisplay} / {COMPANY_DETAILS.landline}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-amber-400 transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Glass & Tableware Suites */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
              Tableware Collections
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.filter(c => c.id !== "all").map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                    className="hover:text-amber-400 transition-colors text-left text-slate-400 hover:translate-x-1 duration-200 inline-block cursor-pointer font-medium"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
              <li>
                <a href="#wholesale" className="text-amber-300 font-semibold hover:underline inline-block mt-1">
                  Hospitality & Banquet Suites →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us (Sam Intl)</a></li>
              <li><a href="#craftsmanship" className="hover:text-amber-400 transition-colors">Material Science</a></li>
              <li><a href="#wholesale" className="hover:text-amber-400 transition-colors">Wholesale & B2B</a></li>
              <li><a href="#showroom" className="hover:text-amber-400 transition-colors">Karol Bagh Showroom</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Direct Connect */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-cinzel">
              Wholesale Updates
            </h4>
            <p className="text-xs text-slate-400 font-normal">
              Subscribe to receive new container arrival notices, seasonal catalog releases, and wholesale margin updates.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! You are subscribed to Addox updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-3.5 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 font-medium"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Social channels */}
            <div className="pt-2">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-2 font-bold">
                Official Connect Channels
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={COMPANY_DETAILS.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors"
                  aria-label="Facebook Page"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href={COMPANY_DETAILS.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                  aria-label="WhatsApp Showroom"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors"
                  aria-label="Email Us"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            Copyright © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Addox Tableware</span> (Sam International). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Wholesale Terms</span>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-amber-400 transition-all flex items-center gap-1.5 cursor-pointer ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
