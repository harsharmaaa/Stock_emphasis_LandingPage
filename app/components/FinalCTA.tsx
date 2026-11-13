"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Shield } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function FinalCTA() {
  const { openModal } = useModal();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] border-t border-slate-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden -z-0">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#00B86B]/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#0B2240]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Card Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-white border border-[#E2E8F0] shadow-xl p-8 sm:p-12 md:p-16 overflow-hidden text-center">
          {/* Top Tri-Tone Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B2240] via-[#00B86B] to-[#0B2240]" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-50 border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-[#0B2240] mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Research Advisory Consultation</span>
          </div>

          {/* Approved Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0B2240] tracking-tight leading-tight">
            Ready to Explore Stock Market Research Services?
          </h2>

          {/* Approved Description */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Connect with Stock Emphasis to learn more about our research services and find the information relevant to your requirements.
          </p>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-1.5 bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 rounded-full font-medium shadow-2xs">
              <Shield className="w-4 h-4 text-[#00B86B] shrink-0" />
              <span>SEBI Reg. INH000020022</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 rounded-full font-medium shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#00B86B] shrink-0" />
              <span>Structured 5-Step Methodology</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 rounded-full font-medium shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#00B86B] shrink-0" />
              <span>Dedicated Relationship Desk</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openModal()}
              className="relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#00B86B] hover:bg-[#00A35E] active:scale-95 transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 group"
            >
              {/* Subtle Sheen Sweep */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
              <span className="relative z-10">Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Zero commitment enquiry. Our research support team will contact you promptly.
          </p>
        </div>
      </div>
    </section>
  );
}
