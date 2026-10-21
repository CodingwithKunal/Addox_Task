import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Navigation,
  Compass,
  CheckCircle2
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/productsData";

export const ShowroomExperience = () => {
  const showroomFeatures = [
    "500+ Live product samples on physical display",
    "Hands-on crystal clarity and acoustic resonance tests",
    "Immediate cash-and-carry master carton dispatch",
    "Direct consultation with parent company directors (Sam International)"
  ];

  return (
    <section id="showroom" className="py-20 lg:py-28 relative overflow-hidden bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Showroom details & Timings */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>Delhi Flagship Experience Center</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
              Experience the Touch of <span className="gold-gradient-text italic">Exotic Elegance</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Step into our Karol Bagh flagship showroom to physically inspect our full range of 
              Pougine European goblets, Blink Max borosilicate canisters, and 24K gold-trimmed Bone China dinnerware.
            </p>

            {/* Address Box */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-serif-luxury">
                    Karol Bagh Flagship Showroom
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {COMPANY_DETAILS.showroom.addressLine1},<br />
                    {COMPANY_DETAILS.showroom.addressLine2},<br />
                    {COMPANY_DETAILS.showroom.city} - {COMPANY_DETAILS.showroom.pin} ({COMPANY_DETAILS.showroom.country})
                  </p>
                  <div className="mt-2 text-xs text-amber-800 font-medium">
                    Landmark: Near Tip Top Market, Padam Singh Road
                  </div>
                </div>
              </div>

              {/* Contact & Hours Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Mon – Sat: 10:30 AM – 8:00 PM</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-amber-700 font-bold text-slate-900">
                    {COMPANY_DETAILS.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {showroomFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Directions & Call Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://maps.google.com/?q=Krishna+Plaza+Padam+Singh+Road+Karol+Bagh+Delhi"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md shadow-amber-600/25 transition-all flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider border border-slate-300 transition-colors flex items-center gap-2 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call Before Visiting</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-3 bg-white border border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src="/assets/products/images (6).jpg"
                  alt="Addox Delhi Tableware Showroom"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-lg">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-800 mb-1">
                    <span>Direct Wholesaler & Importer</span>
                    <span>Delhi Central</span>
                  </div>
                  <div className="text-slate-900 text-sm font-bold">
                    Personalized B2B & Retail Sampling Desk
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
