import React, { useState } from "react";
import { PRICING_PLANS } from "../constants";
import { Check, X, Sparkles, CheckCircle } from "lucide-react";
import { PricingPlan } from "../types";

const Pricing: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", requirements: "" });

  const handleStart = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsSubmitted(false);
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setIsSubmitted(false);
      setFormData({ name: "", email: "", requirements: "" });
    }, 2500);
  };

  return (
    <section id="pricing" className="py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-16 text-white font-heading uppercase tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          Flexible Plans
        </h2>

        {/* Pricing Cards - Only 3 Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {PRICING_PLANS.slice(0, 3).map((plan, i) => (
            <div
              key={i}
              className={`
                relative flex flex-col p-10 rounded-[2.5rem] border-2
                transition-all duration-500 hover:-translate-y-3 group
                ${plan.recommended
                  ? "bg-blue-50/80 border-blue-500 shadow-xl shadow-blue-500/10"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-200/50"}
              `}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.title}</h3>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">{plan.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                </div>
              </div>

              <ul className="flex-grow space-y-5 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-4 text-slate-600 group-hover:text-slate-900 transition-colors">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full">
                      <Check size={14} className="text-blue-600" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleStart(plan.title)}
                className={`
                  w-full py-5 rounded-2xl font-black text-lg transition-all
                  ${plan.recommended
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl"
                    : "bg-slate-900 text-white hover:bg-slate-800 shadow-md"}
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* CUSTOM PROJECT HORIZONTAL CONTAINER */}
        <div className="max-w-5xl mx-auto mt-12 group relative">
          <div className="relative bg-white px-6 py-6 md:px-8 md:py-7 border border-slate-200 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden shadow-lg shadow-slate-200/50">
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 border border-blue-200 shrink-0 transform group-hover:scale-105 transition-transform duration-300">
                <Sparkles size={20} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 uppercase font-heading tracking-tight leading-snug">
                  Customized Solutions
                </h3>
                <p className="text-slate-600 max-w-lg text-sm font-medium leading-relaxed">
                  Have a unique project in mind? We build <span className="text-slate-900 font-semibold">fully custom websites</span> and advanced web applications.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/918247392437"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn whitespace-nowrap px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              Contact Team
              <div className="bg-white/20 p-1 rounded-md">
                <X size={16} className="rotate-45" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* REQUIREMENT FORM MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          />

          <div className="relative bg-white border border-slate-200 w-full max-w-2xl rounded-3xl p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase font-heading">Project Inquiry</h3>
                  <p className="text-slate-600">Tell us about your requirements for the <span className="text-blue-600 font-bold">{selectedPlan}</span>. We'll build something extraordinary together.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Describe your Requirements</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us what you want to build (e.g., E-commerce site with specific features...)"
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:border-blue-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all"
                  >
                    Send Requirements
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 border border-green-200">
                  <CheckCircle size={36} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Requirement Submitted!</h4>
                <p className="text-slate-600">Thank you! Our technical team will get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
