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
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-[#0B2240]/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[96vh] sm:max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0B2240] via-[#00B86B] to-[#0B2240]" />

        {/* Close Button (X) */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close dialogue"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B2240]"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-5 md:p-6 overflow-y-auto">
          {/* Header */}
          <div className="pr-7 sm:pr-8 mb-2.5 sm:mb-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00B86B] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-[#00B86B]" />
              <span>Research Guidance Desk</span>
            </div>

            <h2
              id="modal-headline"
              className="text-base sm:text-lg md:text-xl font-black text-[#0B2240] tracking-tight leading-snug"
            >
              Enquire for Intraday Research
            </h2>

            <p className="text-slate-600 text-[11px] sm:text-xs mt-0.5 leading-snug">
              Connect with our SEBI-registered desk for structured market setups.
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
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500">
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
