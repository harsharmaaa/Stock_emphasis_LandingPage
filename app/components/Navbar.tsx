"use client";

import React from "react";
import Image from "next/image";
import { Shield, ArrowUpRight } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function Navbar() {
  const { openModal } = useModal();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Regulatory Micro-bar (Light corporate styling) */}
      <div className="bg-[#F8FAFC] text-slate-700 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#0B2240]">
              <Shield className="w-3.5 h-3.5 text-[#00B86B]" />
              <span className="relative flex h-2 w-2 mr-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B86B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B86B]" />
              </span>
              SEBI Registered Research Analyst:
            </span>
            <span className="font-mono tracking-wider font-semibold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-300">
              INH000020022
            </span>
          </div>

          <div className="text-slate-500 font-medium hidden sm:block">
            Registered Address: 25 FA, Scheme No. 94, Sector F, Lakeview 1, Indore, M.P.
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Official Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="Stock Emphasis Homepage">
          <div className="relative h-10 sm:h-12 flex items-center">
            <Image
              src="/images/stock-emphasis-logo.webp"
              alt="Stock Emphasis official logo"
              width={164}
              height={50}
              priority
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </div>
        </a>

        {/* Action Group */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openModal()}
            className="relative overflow-hidden group px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#00B86B] hover:bg-[#00A35E] active:scale-95 transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5"
          >
            {/* Subtle Sheen Sweep */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            <span className="relative z-10">Enquire Now</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
          </button>
        </div>
      </div>
    </header>
  );
}
