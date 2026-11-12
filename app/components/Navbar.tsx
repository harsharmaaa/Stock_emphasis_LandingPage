"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, Menu, X, ArrowUpRight } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function Navbar() {
  const { openModal } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Regulatory Micro-bar (Light corporate styling) */}
      <div className="bg-[#F8FAFC] text-slate-700 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#0B2240]">
              <Shield className="w-3.5 h-3.5 text-[#00B86B]" />
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

        {/* Desktop Quick Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a
            href="#about"
            className="hover:text-[#0B2240] transition-colors py-1"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-[#0B2240] transition-colors py-1"
          >
            Services
          </a>
          <a
            href="#methodology"
            className="hover:text-[#0B2240] transition-colors py-1"
          >
            Methodology
          </a>
          <a
            href="#why-us"
            className="hover:text-[#0B2240] transition-colors py-1"
          >
            Why Choose Us
          </a>
          <a
            href="#faqs"
            className="hover:text-[#0B2240] transition-colors py-1"
          >
            FAQs
          </a>
        </nav>

        {/* Action Group */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => openModal()}
            className="group px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-[#00B86B] hover:bg-[#00A35E] active:scale-95 transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => openModal()}
            className="px-3 py-1.5 rounded-lg font-bold text-xs text-white bg-[#00B86B] hover:bg-[#00A35E] active:scale-95 transition-all shadow-xs cursor-pointer"
          >
            Enquire Now
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-slate-700 hover:text-[#0B2240] hover:bg-slate-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0B2240]"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0B2240]"
            >
              Services
            </a>
            <a
              href="#methodology"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0B2240]"
            >
              Methodology
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0B2240]"
            >
              Why Choose Us
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0B2240]"
            >
              FAQs
            </a>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-[#00B86B] hover:bg-[#00A35E] shadow-sm text-center"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
