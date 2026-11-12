"use client";

import React from "react";
import { TrendingUp, Activity, Layers, ArrowRight, ShieldCheck } from "lucide-react";
import { useModal } from "../context/ModalContext";

interface ServiceCardData {
  id: string;
  name: string;
  badge: string;
  segment: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  features: string[];
}

const SERVICES: ServiceCardData[] = [
  {
    id: "cash-trade",
    name: "Classic Cash Trade",
    badge: "Equity Delivery & Momentum",
    segment: "Equity Cash",
    icon: TrendingUp,
    tagline: "High-conviction research in NSE/BSE listed cash equities",
    description:
      "Formulated for investors and swing traders seeking disciplined stock recommendations backed by in-depth technical chart patterns and fundamental balance sheet health.",
    features: [
      "Well-defined entry point, target levels & stop-loss",
      "Comprehensive rationale behind each research call",
      "Timely rebalancing & profit booking alerts",
      "Ongoing market hours tracking by analyst desk",
    ],
  },
  {
    id: "future-trade",
    name: "Classic Future Trade",
    badge: "Derivatives / Futures",
    segment: "Futures & Options",
    icon: Activity,
    tagline: "Strategic directional research on high-liquidity stock & index futures",
    description:
      "Engineered for active market participants seeking leveraged exposure with strict risk mitigation frameworks, open-interest (OI) tracking, and price-volume breakout confirmation.",
    features: [
      "Rigorous technical breakout & momentum confirmation",
      "Real-time rollover analysis & open-interest monitoring",
      "Pre-defined stop-loss discipline to manage risk",
      "Immediate alert notifications via WhatsApp & Phone",
    ],
  },
  {
    id: "option-trade",
    name: "Classic Option Trade",
    badge: "Index & Stock Options",
    segment: "Index Options",
    icon: Layers,
    tagline: "Calculated option research driven by Greeks & volatility models",
    description:
      "Designed for traders navigating Nifty, Bank Nifty, and select liquid stock options, utilizing data-backed option chain analysis, implied volatility (IV), and directional momentum.",
    features: [
      "Optimized strike price selection based on Greeks & IV",
      "Dynamic intraday and positional setups",
      "Clear risk containment with defined exit guidelines",
      "Direct analyst support for trade clarity",
    ],
  },
];

export default function CoreServices() {
  const { openModal } = useModal();

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0B2240] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>Specialized Research Desks</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight">
            Which Stock Emphasis Service Suits You Best?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Select the segment that aligns with your trading style. Each service is powered by rigorous research methodology and disciplined risk controls.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="relative flex flex-col bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 hover:border-[#0B2240]/40 transition-all duration-300 shadow-sm hover:shadow-xl group overflow-hidden"
              >
                {/* Top subtle highlight bar */}
                <div className="h-1.5 w-full bg-slate-100 group-hover:bg-[#00C853] transition-colors" />

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-[#0B2240] flex items-center justify-center group-hover:bg-[#0B2240] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-800 text-[11px] font-bold tracking-wide transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B2240] tracking-tight mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature checklist */}
                  <div className="space-y-2.5 mb-8 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </p>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <ShieldCheck className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Register CTA */}
                  <button
                    type="button"
                    onClick={() => openModal(service.segment)}
                    className="w-full py-3 px-5 rounded-xl font-bold text-sm text-[#0B2240] bg-slate-100 hover:bg-[#00C853] hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Note below services */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200/80 text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-xs text-slate-600 leading-relaxed">
            <span className="font-bold text-[#0B2240]">Compliance Transparency:</span>{" "}
            All recommendations are provided by our SEBI-registered Research Analyst desk. Research calls strictly incorporate entry, target, and stop-loss levels. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
}
