import React from "react";
import { Search, SlidersHorizontal, Send, RefreshCw } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Market Screening",
    description:
      "We scan thousands of NSE/BSE stocks using proprietary technical screeners, tracking volume bursts, breakout patterns, and liquidity filters.",
  },
  {
    step: "02",
    icon: SlidersHorizontal,
    title: "Level Formulation",
    description:
      "Every trade setup is assigned pre-calculated levels: a clear entry band, multiple profit targets, and a non-negotiable stop-loss threshold.",
  },
  {
    step: "03",
    icon: Send,
    title: "Instant Alert Delivery",
    description:
      "Actionable research alerts are dispatched in real time via WhatsApp and telephonic RM notifications so you can act before prices shift.",
  },
  {
    step: "04",
    icon: RefreshCw,
    title: "Tracking & Rebalancing",
    description:
      "Our research desk continuously monitors open positions throughout market hours, issuing timely profit-booking and trailing stop-loss updates.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 md:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[#0B2240] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Structured Research Protocol</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight">
            How Our Research Desk Operates
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            A transparent, 4-stage analytical workflow engineered to eliminate emotional bias and deliver disciplined trading setups.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={index}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#0B2240]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#0B2240] flex items-center justify-center group-hover:bg-[#0B2240] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xl font-black text-slate-300 group-hover:text-[#00C853] transition-colors">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2240] mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Stage {s.step}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

