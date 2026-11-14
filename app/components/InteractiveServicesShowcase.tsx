"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldCheck,
  X,
  Info,
  AlertTriangle,
  TrendingUp,
  Activity,
  Layers,
  Workflow,
  GitMerge,
  Crown,
  Crosshair,
  Gauge,
  SlidersHorizontal,
  Combine,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "../context/ModalContext";

export interface ServiceDetail {
  id: string;
  name: string;
  category: "Classic Trades" | "Massive Trades" | "Prime Index Trades";
  badge: string;
  icon: LucideIcon;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  riskNote: string;
}

export const ALL_SERVICES: ServiceDetail[] = [
  // Category 1: Classic Trades
  {
    id: "classic-cash",
    name: "Classic Cash Trade",
    category: "Classic Trades",
    badge: "Cash Equities",
    icon: TrendingUp,
    shortDesc: "In-depth research on liquid NSE/BSE listed equities for short-term and swing market participants.",
    fullDesc:
      "Classic Cash Trade delivers structured research recommendations in the equity cash segment. Recommendations are evaluated through rigorous multi-timeframe price action, sector rotation trends, and balance sheet fundamentals to identify balanced risk-reward setups.",
    features: [
      "Well-evaluated stock recommendations in liquid NSE/BSE counters",
      "Comprehensive research rationale behind each trade update",
      "Disciplined entry, target, and stop-loss guidelines",
      "Regular tracking and market hours assistance from dedicated desk",
    ],
    riskNote: "Equity trading involves market price fluctuations. Stop-loss discipline is strictly recommended.",
  },
  {
    id: "classic-future",
    name: "Classic Future Trade",
    category: "Classic Trades",
    badge: "Derivatives / Futures",
    icon: Activity,
    shortDesc: "Directional research on liquid stock and index futures supported by open-interest analysis.",
    fullDesc:
      "Designed for traders participating in derivative contracts. This service provides actionable technical viewpoints by tracking open interest (OI) changes, volume buildups, and breakout confirmation across active future contracts.",
    features: [
      "Rigorous technical breakout and momentum screening",
      "Real-time open interest and contract rollover evaluation",
      "Defined stop-loss boundaries to systematically control risk",
      "Prompt alert dispatches through WhatsApp & phone updates",
    ],
    riskNote: "Futures contracts carry leverage risk. Market volatility can magnify both profits and losses.",
  },
  {
    id: "classic-option",
    name: "Classic Option Trade",
    category: "Classic Trades",
    badge: "Index & Stock Options",
    icon: Layers,
    shortDesc: "Calculated option research driven by option Greeks, implied volatility (IV), and strike selection.",
    fullDesc:
      "Classic Option Trade caters to option traders seeking data-driven strikes in benchmark indices and liquid stock options. Setups are curated using implied volatility analysis, PCR ratios, and immediate support/resistance zones.",
    features: [
      "Carefully chosen strike prices based on liquidity and Greeks",
      "Focused intraday and positional option ideas",
      "Pre-determined risk parameters and target levels",
      "Direct analyst guidance to address execution queries",
    ],
    riskNote: "Option contracts are subject to time decay (theta decay). Capital allocation discipline is essential.",
  },

  // Category 2: Massive Trades
  {
    id: "massive-plus-cash-future",
    name: "Massive Plus Cash Future Trade",
    category: "Massive Trades",
    badge: "Cash & Futures Combo",
    icon: Workflow,
    shortDesc: "Dual-segment research synchronizing cash market momentum with strategic futures exposure.",
    fullDesc:
      "Massive Plus Cash Future Trade is designed for active traders who operate simultaneously across cash equities and derivative futures. It provides correlated trade perspectives to capitalize on institutional volume surges while balancing positional risk.",
    features: [
      "Cross-market momentum correlation across Cash and Futures",
      "Higher focus on institutional order flow and volume breakouts",
      "Specific hedging and position sizing guidelines",
      "Active updates on trailing stop-losses during market sessions",
    ],
    riskNote: "Dual-segment trading requires active market monitoring and familiarity with derivative leverage.",
  },
  {
    id: "massive-plus-option-future",
    name: "Massive Plus Option Future Trade",
    category: "Massive Trades",
    badge: "Options & Futures Combo",
    icon: GitMerge,
    shortDesc: "Comprehensive derivative strategy blending directional future trends with option positioning.",
    fullDesc:
      "Formulated for sophisticated derivative traders. This service combines directional futures momentum with strategic option hedging or directional option buys to navigate trending and high-volatility market phases.",
    features: [
      "Integrated technical analysis of both futures charts and option chains",
      "Strategic setups designed for trending and breakout market conditions",
      "Strict risk-to-reward profiling before recommendation dissemination",
      "Prompt notifications via relationship manager support desk",
    ],
    riskNote: "Derivatives are high-risk financial instruments. Trade only with risk capital suited for derivative volatility.",
  },
  {
    id: "massive-pro-cash-future-option",
    name: "Massive Pro Cash Future Option Trade",
    category: "Massive Trades",
    badge: "All-Segment Suite",
    icon: Crown,
    shortDesc: "All-inclusive research coverage encompassing Cash, Futures, and Options for complete market exposure.",
    fullDesc:
      "Massive Pro Cash Future Option Trade is Stock Emphasis's most expansive multi-segment research package. It provides complete tactical coverage across cash equities, stock/index futures, and options strategies, empowering traders to capitalize on diverse market scenarios.",
    features: [
      "Full coverage across Cash, Futures, and Options markets",
      "Adaptive strategy selection based on overall market trend and volatility",
      "Priority research updates and direct relationship manager coordination",
      "Regular portfolio rebalancing guidance and post-trade reviews",
    ],
    riskNote: "Multi-segment strategies require disciplined allocation and adherence to predefined risk limits.",
  },

  // Category 3: Prime Index Trades
  {
    id: "prime-index-option",
    name: "Prime Index Option Trade",
    category: "Prime Index Trades",
    badge: "Index Options",
    icon: Crosshair,
    shortDesc: "Specialized research focused exclusively on high-liquidity benchmark index options (Nifty & Bank Nifty).",
    fullDesc:
      "Prime Index Option Trade concentrates strictly on major Indian benchmark indices such as Nifty 50 and Bank Nifty. Recommendations are derived from index weightage movements, global cues, open interest distribution, and technical volatility bands.",
    features: [
      "Dedicated focus on Nifty 50 and Bank Nifty index options",
      "Analysis of option chain open interest buildups and PCR data",
      "High liquidity contracts ensuring smooth trade execution",
      "Timely alert dispatches during volatile trading hours",
    ],
    riskNote: "Index options experience rapid premium swings during economic events and expiry days.",
  },
  {
    id: "prime-index-future",
    name: "Prime Index Future Trade",
    category: "Prime Index Trades",
    badge: "Index Futures",
    icon: Gauge,
    shortDesc: "Strategic directional research on benchmark index futures based on trend and institutional flow.",
    fullDesc:
      "Aimed at index traders seeking structured technical calls in Nifty and Bank Nifty future contracts. Analysis incorporates market breadth, banking sector strength, and macroeconomic trigger points.",
    features: [
      "Clear directional research on benchmark index futures",
      "Intraday and positional trend-following frameworks",
      "Clearly articulated stop-loss and profit target bands",
      "Continual market-hours monitoring by the research desk",
    ],
    riskNote: "Index futures involve substantial contract sizes and require strict adherence to stop-loss levels.",
  },
  {
    id: "prime-combo-index-option-index-future",
    name: "Prime Combo Index Option Index Future Trade",
    category: "Prime Index Trades",
    badge: "Index Combo",
    icon: SlidersHorizontal,
    shortDesc: "Dual index strategy aligning index futures direction with index option strike positioning.",
    fullDesc:
      "This synchronized index package analyzes the broader benchmark trend via index futures while utilizing index options to structure calculated directional or hedged index trades.",
    features: [
      "Simultaneous evaluation of index futures momentum and option implied volatility",
      "Balanced approach designed to mitigate directional index swings",
      "Disciplined trade sizing and risk containment parameters",
      "Instantaneous trade notification via WhatsApp & call support",
    ],
    riskNote: "Combined index derivative positions require active management during fast market moves.",
  },
  {
    id: "prime-combo-option",
    name: "Prime Combo Option",
    category: "Prime Index Trades",
    badge: "Advanced Options",
    icon: Combine,
    shortDesc: "Multi-leg option setups structured to leverage volatility shifts and index momentum.",
    fullDesc:
      "Prime Combo Option provides advanced option research setups. It evaluates option volatility skews, gamma moves, and key event horizons to suggest calculated option trade structures across liquid indices.",
    features: [
      "Advanced strike and expiry combination research",
      "Volatility-modeled setups designed for dynamic market environments",
      "Well-defined entry, exit, and risk management criteria",
      "Proactive trade tracking and analyst guidance",
    ],
    riskNote: "Complex option setups carry specific market and liquidity risks. Thorough risk awareness is advised.",
  },
];

const CATEGORIES = ["Classic Trades", "Massive Trades", "Prime Index Trades"] as const;
type CategoryType = (typeof CATEGORIES)[number];

export default function InteractiveServicesShowcase() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState<CategoryType>("Classic Trades");
  const [detailModalService, setDetailModalService] = useState<ServiceDetail | null>(null);

  // Keyboard escape for detail modal
  useEffect(() => {
    if (detailModalService) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setDetailModalService(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [detailModalService]);

  const filteredServices = ALL_SERVICES.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-[#0B2240] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Official Research Offerings</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight">
            {/* Explore All 10 Official Research Services */}
            Structured Research Across Stocks, Futures & Options
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {/* Browse our complete spectrum of research services across Cash, Futures, and Options markets. Select a category below to explore individual service details. */}
            Explore our 10 official research categories covering Nifty, Bank Nifty, Sensex options, and liquid NSE/BSE equities—each backed by clear Entry, Stop Loss, and Target levels.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-xs max-w-full overflow-x-auto relative">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`relative px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap z-10 ${isActive
                      ? "text-white"
                      : "text-slate-600 hover:text-[#0B2240]"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#0B2240] rounded-xl shadow-sm -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid with Subtle Cross-Fade */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col bg-[#F8FAFC] rounded-2xl md:rounded-3xl border border-slate-200 hover:border-[#0B2240]/40 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200 shadow-xs group overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="h-1.5 w-full bg-slate-200 group-hover:bg-[#00B86B] transition-colors" />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Top Row: Service Icon & Badges */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    {/* Consistent line-style icon with navy & emerald accents */}
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center shrink-0 group-hover:border-[#00B86B]/40 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#00B86B]/10 rounded-bl-lg transition-colors group-hover:bg-[#00B86B]/20" />
                      <service.icon className="w-5 h-5 text-[#0B2240] group-hover:text-[#00B86B] transition-colors stroke-[1.8]" />
                    </div>

                    <div className="flex flex-col items-end gap-1 text-right">
                      <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-wide shadow-2xs">
                        {service.badge}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0B2240] tracking-tight mb-2 group-hover:text-[#0B2240]">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Verified features list */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <ShieldCheck className="w-4 h-4 text-[#00B86B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dual Action Buttons */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setDetailModalService(service)}
                    className="w-full sm:w-1/2 py-2.5 px-3.5 rounded-xl font-bold text-xs text-[#0B2240] bg-white border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Explore Service</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => openModal(service.name)}
                    className="w-full sm:w-1/2 py-2.5 px-3.5 rounded-xl font-bold text-xs text-white bg-[#00B86B] hover:bg-[#00A35E] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Regulatory note */}
        <div className="mt-12 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center max-w-3xl mx-auto shadow-2xs">
          <p className="text-xs text-slate-600 leading-relaxed">
            <span className="font-bold text-[#0B2240]">Important Regulatory Disclosure:</span>{" "}
            All research services strictly adhere to SEBI (Research Analysts) Regulations, 2014. No assured returns, risk-free trades, or profit-sharing arrangements are offered.
          </p>
        </div>
      </div>

      {/* Explore Service Detail Modal */}
      {detailModalService && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setDetailModalService(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#0B2240]/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Top Accent Strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#0B2240] via-[#00B86B] to-[#0B2240]" />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setDetailModalService(null)}
              aria-label="Close details"
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs flex items-center justify-center shrink-0 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-4 h-4 bg-[#00B86B]/15 rounded-bl-xl" />
                  <detailModalService.icon className="w-7 h-7 text-[#0B2240] stroke-[1.8]" />
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#00B86B] border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                    {detailModalService.category} • {detailModalService.badge}
                  </span>
                  <h3 className="text-2xl font-black text-[#0B2240] tracking-tight">
                    {detailModalService.name}
                  </h3>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Service Description
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {detailModalService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Verified Key Features
                </h4>
                <div className="space-y-2.5">
                  {detailModalService.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#00B86B] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Information */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Risk Disclosure:</strong> {detailModalService.riskNote}
                </p>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  SEBI Regd. Research Desk • INH000020022
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const svcName = detailModalService.name;
                    setDetailModalService(null);
                    openModal(svcName);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#00B86B] hover:bg-[#00A35E] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Register for {detailModalService.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
