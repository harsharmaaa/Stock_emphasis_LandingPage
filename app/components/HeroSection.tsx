"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Target, Filter, Sparkles } from "lucide-react";
import LeadForm from "./LeadForm";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F1F5F9] via-[#F8FAFC] to-white text-[#0B2240] py-12 md:py-20 lg:py-24 border-b border-[#E2E8F0]">
      {/* Subtle light geometric background grid */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start lg:items-stretch">
          {/* Left Column — Company Introduction & Desktop Research Desk Image */}
          <div className="lg:col-span-7 flex flex-col justify-between lg:pr-4 h-full">
            <div className="space-y-6">
              {/* SEBI Compliance Badge with Active Breathing Pulse */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs sm:text-sm font-semibold text-[#0B2240] shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B86B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B86B]" />
                </span>
                <span>SEBI Regd. Research Analyst • Reg. No. INH000020022</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight leading-[1.15] text-[#0B2240]">
                Intraday Research for  {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2240] via-[#103E70] to-[#00B86B]">
                  Active Market Participants
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg font-bold text-[#0B2240] tracking-wide">
                Structured Intraday Research for Nifty | Bank Nifty | Sensex | Liquid Stocks
              </p>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Get research-backed intraday setups across Cash, Futures &amp; Options with clearly defined Entry, Stop Loss, and Target levels.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 max-w-2xl items-stretch">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] text-[#00B86B] flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                      Regulated
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-[#0B2240] leading-tight">
                      SEBI Registered Desk • INH000020022
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] text-[#0B2240] flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                    <Target className="w-5 h-5 text-[#00B86B]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                      Discipline
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-[#0B2240] leading-tight">
                      Defined Entry, Target &amp; Stop Loss
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] text-[#00B86B] flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                    <Filter className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                      Quality
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-[#0B2240] leading-tight">
                      Opportunity-Based Research Alerts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Research Desk Image — flex-grow to align exactly with form card bottom edge */}
            <div className="hidden lg:flex relative flex-1 min-h-[220px] w-full rounded-2xl md:rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden mt-6 bg-[#F8FAFC]">
              <Image
                src="/images/hero-research-desk.jpg"
                alt="Dual-monitor trading desk displaying technical analysis charts and market setups"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />

              {/* Caption badge: bottom-right corner, 12px from edges */}
              <div className="absolute bottom-[12px] right-[12px] z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0B2240] text-xs font-semibold shadow-sm border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#00B86B]" />
                <span>Research &amp; Analytics Desk</span>
              </div>
            </div>
          </div>

          {/* Right Column — Enquiry Form Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-xl border border-[#E2E8F0] text-slate-900 relative">
              {/* Form Card Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#00B86B] text-[11px] font-bold uppercase tracking-wider mb-2.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Enquiry Desk</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B2240] tracking-tight">
                  Enquire for Research Guidance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Connect with our research team to learn more about our official services.
                </p>
              </div>

              {/* The Functional Lead Form */}
              <LeadForm
                buttonText="Submit Enquiry"
                source="hero"
                formIdPrefix="hero-card"
              />
            </div>

            {/* Mobile Research Desk Image — shown below the form on screens < lg */}
            <div className="mt-8 lg:hidden relative w-full h-[180px] sm:h-[220px] rounded-2xl md:rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden bg-[#F8FAFC]">
              <Image
                src="/images/hero-research-desk.jpg"
                alt="Dual-monitor trading desk displaying technical analysis charts and market setups"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* Caption badge: bottom-right corner, 12px from edges */}
              <div className="absolute bottom-[12px] right-[12px] z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0B2240] text-xs font-semibold shadow-sm border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#00B86B]" />
                <span>Research &amp; Analytics Desk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
