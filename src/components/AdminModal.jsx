import { useState, useEffect } from "react";
import { 
  X, 
  ShieldAlert, 
  User, 
  Phone, 
  AlertTriangle, 
  ArrowRight,
  Lock,
  RefreshCw
} from "lucide-react";

export const AdminModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tokenAlert, setTokenAlert] = useState(null); // { message: string }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTokenAlert(null);
    } else {
      document.body.style.overflow = "auto";
      setName("");
      setMobileNumber("");
      setIsLoading(false);
      setTokenAlert(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !mobileNumber.trim()) return;

    setIsLoading(true);

    // Simulate verification check and display the requested token alert message
    setTimeout(() => {
      setIsLoading(false);
      setTokenAlert({
        title: "Authentication Error",
        message: "Your token is no more or empty.",
        hint: "Your administrative session has expired or no valid token was found for this number."
      });
    }, 600);
  };

  const handleReset = () => {
    setTokenAlert(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Small Popup Modal Container */}
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center">
              <Lock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg font-bold text-slate-900">
                Admin Verification
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Authorized Personnel Only
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {tokenAlert ? (
            /* Popup Message Alert after submit */
            <div className="text-center py-4 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 mx-auto flex items-center justify-center shadow-xs">
                <AlertTriangle className="w-7 h-7" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 px-2.5 py-0.5 rounded-full bg-rose-100 border border-rose-200">
                  {tokenAlert.title}
                </span>
                
                {/* User's exact requested message */}
                <h4 className="font-serif-luxury text-xl font-bold text-slate-900 pt-1">
                  {tokenAlert.message}
                </h4>

                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed pt-1">
                  {tokenAlert.hint}
                </p>
              </div>

              {/* Submitted Details Review Box */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>Submitted Name:</span>
                  <span className="font-semibold text-slate-800">{name}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Mobile:</span>
                  <span className="font-mono text-slate-800">{mobileNumber}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Input Form asking for Name and Mobile Number */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs text-amber-800 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Please enter your registered administrator credentials to authenticate your session token.
                </span>
              </div>

              {/* Name Field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Administrator Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 font-medium transition-colors"
                  />
                </div>
              </div>

              {/* Mobile Number Field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="e.g. +91 9899 460 840"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 font-medium transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button in bottom side */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md shadow-amber-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Verifying Token...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
