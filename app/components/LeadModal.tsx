"use client";

import React, { useRef } from "react";
import { X, Sparkles, ShieldCheck } from "lucide-react";
import { useModal } from "../context/ModalContext";
import LeadForm from "./LeadForm";

export default function LeadModal() {
  const { isOpen, closeModal, selectedService } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#0B2240]/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0B2240] via-[#00B86B] to-[#0B2240]" />

        {/* Close Button (X) */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close dialogue"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B2240]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 md:p-8 overflow-y-auto">
          {/* Header */}
          <div className="pr-8 mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00B86B] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary Research Guidance</span>
            </div>

            <h2
              id="modal-headline"
              className="text-xl sm:text-2xl font-black text-[#0B2240] tracking-tight leading-snug"
            >
              Enquire About Our Research Services
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Connect with our SEBI-registered research analyst desk to explore disciplined strategies tailored to your trading requirements.
            </p>
          </div>

          {/* Form */}
          <LeadForm
            key={selectedService || "modal-form"}
            buttonText="Submit Enquiry"
            source="modal"
            presetService={selectedService}
            formIdPrefix="modal"
          />

          {/* Footer badge */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00B86B]" />
              SEBI Reg: INH000020022
            </span>
            <span>Registered Analyst Desk Indore</span>
          </div>
        </div>
      </div>
    </div>
  );
}
