import React from "react";
import { ShieldCheck, LineChart, Headphones } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "SEBI Registered",
    subtitle: "Research Analyst",
    description: "Operates in accordance with SEBI (Research Analysts) Regulations, 2014 • INH000020022",
  },
  {
    icon: LineChart,
    title: "Research-Driven",
    subtitle: "Analytical Approach",
    description: "Structured technical & fundamental screening across liquid capital market segments",
  },
  {
    icon: Headphones,
    title: "Dedicated",
    subtitle: "Client Support",
    description: "Direct assistance from relationship managers to clarify research updates & reporting",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative z-20 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-md border border-slate-200 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-start gap-4 ${
                  index > 0 ? "pt-5 md:pt-0 md:pl-8" : ""
                } group`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-emerald-50 text-[#0B2240] group-hover:text-[#00B86B] flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-emerald-200 transition-all duration-300 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0B2240] tracking-tight leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
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
