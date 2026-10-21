import { useState } from "react";
import { 
  Building2, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Percent 
} from "lucide-react";
import { COMPANY_DETAILS, CATEGORIES } from "../data/productsData";

export const WholesaleCustom = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    category: "goblets",
    quantity: "50-100",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Addox / Sam International Team,\n\n*Wholesale / B2B Inquiry*\n• Business / Hotel: ${formData.businessName || "Not specified"}\n• Contact Person: ${formData.contactPerson || "Not specified"}\n• Phone: ${formData.phone || "Not specified"}\n• Email: ${formData.email || "Not specified"}\n• Category of Interest: ${formData.category}\n• Estimated Quantity: ${formData.quantity} sets\n• Notes: ${formData.message || "Please provide catalog & price quote"}`
    );
    window.open(`https://wa.me/919899460840?text=${text}`, "_blank");
  };

  return (
    <section id="wholesale" className="py-20 lg:py-28 relative bg-gradient-to-br from-amber-50/30 via-white to-stone-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: B2B Benefits & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5 text-amber-600" />
              <span>B2B & Hospitality Division</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
              Direct Wholesale Supply & <span className="gold-gradient-text italic">Custom Branding</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Equip your hotel rooms, restaurant dining floor, banquet halls, or corporate gifting projects 
              with premium glassware and crockery straight from the national importer in Karol Bagh, Delhi.
            </p>

            {/* B2B Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <Percent className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Direct Master Margins</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Save up to 45% off retail rates on master cartons & full pallet container shipments.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Custom Logo Imprinting</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Laser etched crests, 24K gold decals, and custom presentation gift box packaging.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Breakage Guarantee</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Reinforced master-pack crates with insurance-backed transit across India.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">48-Hour Dispatch</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Ready stock in Karol Bagh central warehouses for seasonal catering deadlines.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-600 flex items-center gap-2">
              <span>Showroom Direct:</span>
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-amber-700 font-bold hover:underline">
                {COMPANY_DETAILS.phoneDisplay}
              </a>
              <span>•</span>
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-700 font-semibold hover:underline">
                {COMPANY_DETAILS.email}
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-slate-900">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you! Our wholesale sales desk at Karol Bagh will review your requirements and share the formal master price list within 4 business hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={sendViaWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Connect Instantly on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-serif-luxury text-xl font-bold text-slate-900">
                      Request Wholesale Catalog & Rates
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Enter your project requirements to receive a customized B2B quotation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Business / Hotel Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Radisson Blu / Leela Catering"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="e.g. Deepak Sethi"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9899 460 840"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="purchasing@hotelgroup.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Category of Interest
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 cursor-pointer"
                      >
                        {CATEGORIES.filter(c => c.id !== "all").map(c => (
                          <option key={c.id} value={c.id}>{c.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Estimated Order Quantity
                      </label>
                      <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 cursor-pointer"
                      >
                        <option value="20-50">20 - 50 Sets</option>
                        <option value="50-100">50 - 100 Sets (Master Carton)</option>
                        <option value="100-500">100 - 500 Sets (Hotel Banquet)</option>
                        <option value="500+">500+ Sets (Full Pallet / Institutional)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project Notes / Custom Branding Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify requirements, custom logo printing, target delivery deadline, etc."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md shadow-amber-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={sendViaWhatsApp}
                      className="py-3 px-5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Directly</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
