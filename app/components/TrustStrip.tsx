import React from "react";
import { ShieldCheck, Cpu, Target, Zap } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "SEBI Regd. Analyst",
    subtitle: "Reg. No. INH000020022",
    description: "Operates under SEBI (Research Analysts) Regulations, 2014.",
  },
  {
    icon: Cpu,
    title: "Algorithm-Backed",
    subtitle: "Data & Price Action Driven",
    description: "Quantitative screening of liquid index derivatives and active equities.",
  },
  {
    icon: Target,
    title: "Rigorous Risk Mgmt",
    subtitle: "Pre-defined Stop Loss Levels",
    description: "Every setup includes explicit Entry, Target, and mandatory Stop Loss.",
  },
  {
    icon: Zap,
    title: "Real-Time Dispatches",
    subtitle: "Instant SMS & WhatsApp Alerts",
    description: "Immediate alert dispatches delivered during active market hours.",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-slate-200/90 p-5 sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-start gap-3.5 ${
                  index > 0 ? "pt-4 sm:pt-0 sm:pl-5 lg:pl-6" : ""
                } group`}
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 group-hover:bg-emerald-50 text-[#0B2240] group-hover:text-[#00B86B] flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-emerald-200 transition-all duration-300 shadow-2xs">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#0B2240] tracking-tight leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#00B86B] mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
