"use client";

import React from "react";
import {
  ShieldCheck,
  Layers,
  Timer,
  Filter,
  LineChart,
  Shield,
  UserCheck,
  Sparkles,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const WHY_CHOOSE_ITEMS = [
  {
    icon: ShieldCheck,
    title: "SEBI Registered Research Analyst",
    subtitle: "Regulatory Governance",
    description:
      "Operates under registration number INH000020022 with adherence to ethical research analyst codes of conduct.",
  },
  {
    icon: Layers,
    // title: "Free Counselling",
    title: "Index & Stock Coverage",
    subtitle: "Orientation & Clarification",
    // description:
    //   "Complimentary guidance sessions to help market participants understand service models and disciplined execution.",
    description: "Focused intraday research across Nifty, Bank Nifty, Sensex options, and liquid cash/futures counters."
  },
  {
    icon: Timer,
    title: "Trades on Time",
    subtitle: "Prompt Dispatches",
    description:
      "Swift alert transmissions via WhatsApp and phone alerts to allow timely response in fast-moving market sessions.",
  },
  {
    icon: Filter,
    // title: "Friendly Interactions",
    title: "Opportunity-Based Alerts",
    subtitle: "Courteous Communication",
    // description:
    //   "Professional and transparent client engagement, ensuring every market query is addressed with patience and clarity.",
    description: "No forced daily calls—research updates are shared strictly when market setups meet our analytical criteria."
  },
  {
    icon: LineChart,
    title: "Robust Research Methodology",
    subtitle: "Analytical Rigor",
    description:
      "Systematic integration of technical chart patterns, volume momentum, sector rotation, and balance sheet indicators.",
  },
  {
    icon: Shield,
    // title: "Safe Stock Selection",
    title: "Predefined Risk Parameters",
    subtitle: "Capital Preservation Focus",
    // description:
    //   "Focusing on high-liquidity, stable counters and disciplined stop-loss boundaries to mitigate downside market exposure.*",
    description: "Every trade setup comes with a strict Stop Loss and Target level so you know your risk before entering."
  },
  {
    icon: UserCheck,
    title: "Dedicated Relationship Manager",
    subtitle: "Personal Point of Contact",
    description:
      "Assigned support specialists to coordinate research dispatches, schedule queries, and guide service workflows.",
  },
  {
    icon: Sparkles,
    title: "Unique Services",
    subtitle: "Diverse Market Coverage",
    description:
      "Specialized offerings spanning Classic Cash, Massive derivatives combos, and Prime Index trades to suit varying trader profiles.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-[#0B2240] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Official Strengths</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight">
            Why Choose Stock Emphasis
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Eight foundational pillars published by Stock Emphasis that guide our client relationships and research delivery.
          </p>
        </div>

        {/* 8 Feature Boxes in Responsive Grid with Scroll Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#00B86B]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xs"
              >
                {/* Top micro accent line */}
                <div className="h-1 w-full bg-slate-200 group-hover:bg-[#00B86B] rounded-full transition-colors mb-5" />

                <div>
                  {/* Top Row: Icon Container and Pillar Number */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center shrink-0 group-hover:border-[#00B86B]/40 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#00B86B]/10 rounded-bl-lg transition-colors group-hover:bg-[#00B86B]/20" />
                      <Icon className="w-5 h-5 text-[#0B2240] group-hover:text-[#00B86B] transition-colors stroke-[1.8]" />
                    </div>

                    <span className="font-mono text-xs font-black text-slate-300 group-hover:text-[#00B86B] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#00B86B] uppercase tracking-wider block mb-1.5">
                    {item.subtitle}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B2240] tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  <span>Pillar 0{index + 1} of 08</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#00B86B] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Regulatory disclaimer notice on Safe Stock Selection */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto shadow-2xs">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            * <span className="font-semibold text-slate-700">Notice on &quot;Safe Stock Selection&quot;:</span> Stock Emphasis prioritizes liquid stocks with established risk containment; however, all securities investments are subject to market risks. Past performance and stock selection methodology do not assure profits or eliminate the risk of loss.
          </p>
        </div>
      </div>
    </section>
  );
}
