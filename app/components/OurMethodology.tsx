"use client";

import React from "react";
import {
  FileSearch,
  Activity,
  Compass,
  Target,
  Send,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const METHODOLOGY_STEPS = [
  {
    step: "01",
    name: "Requirement",
    icon: FileSearch,
    title: "Client Requirement Understanding",
    description:
      "Scanning liquid NSE/BSE equities and index derivatives to filter out noise and shortlist high-momentum intraday candidates.",
  },
  {
    step: "02",
    name: "Selection",
    icon: Activity,
    // title: "Service Selection & Alignment",
    title: "Market Screening",
    // description:
    // "Aligning the client with the most suitable official research service category based on trading horizon and market experience.",
    description:
      "Evaluating volume patterns, open interest (OI), implied volatility (IV), and sector strength within a defined analytical framework."
  },
  {
    step: "03",
    name: "Planning",
    icon: Compass,
    // title: "Research Strategy & Planning",
    title: "Setup Evaluation",
    // description:
    //   "Our research analyst desk prepares data-backed setups using technical screeners, open interest analysis, and calculated risk boundaries.",
    description:
      "Validating technical breakouts and market setups against prevailing broader market conditions before finalizing a view."
  },
  {
    step: "04",
    name: "Execution",
    icon: Target,
    // title: "Disciplined Trade Execution",
    title: "Risk & Level Definition",
    // description:
    //   "Disseminating timely research calls with clear entry range, predefined targets, and mandatory stop-loss parameters via WhatsApp and phone alerts.",
    description:
      "Setting clear Entry ranges, calculated Target levels, and mandatory Stop-Loss boundaries to manage downside exposure."
  },
  {
    step: "05",
    name: "Satisfaction",
    icon: Send,
    // title: "Ongoing Support & Review",
    title: "Timely Research Delivery",
    // description:
    //   "Providing dedicated relationship manager assistance, regular trade updates, rebalancing guidance, and long-term research engagement.",
    description:
      "Disseminating actionable intraday insights via WhatsApp and phone alerts only when a valid trading opportunity is identified."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function OurMethodology() {
  return (
    <section id="methodology" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0B2240] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Workflow className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Official 5-Step Process</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight">
            Our Research Methodology
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Stock Emphasis follows a structured five-step workflow designed to deliver disciplined, objective, and transparent research guidance.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line (through center of nodes) */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-slate-200 via-[#00B86B]/40 to-slate-200 z-0" />

          {/* Mobile Vertical Connecting Line (through center of nodes) */}
          <div className="lg:hidden absolute left-7 top-7 bottom-7 w-[2px] bg-gradient-to-b from-slate-200 via-[#00B86B]/40 to-slate-200 z-0" />

          {/* Animated Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4 xl:gap-5 relative z-10"
          >
            {METHODOLOGY_STEPS.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === METHODOLOGY_STEPS.length - 1;

              return (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  className="relative flex flex-row items-start gap-4 lg:flex-col lg:items-center group h-full"
                >
                  {/* Step Node with Icon & Number Badge */}
                  <div className="relative shrink-0 lg:mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 shadow-xs flex items-center justify-center group-hover:border-[#00B86B] group-hover:shadow-md transition-all duration-300 relative z-10">
                      <Icon className="w-6 h-6 text-[#0B2240] group-hover:text-[#00B86B] transition-colors stroke-[1.8]" />
                    </div>

                    {/* Step Number Badge */}
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#00B86B] text-white text-[11px] font-black font-mono flex items-center justify-center shadow-xs border-2 border-white z-20">
                      {item.step}
                    </span>

                    {/* Desktop Step Directional Connector Pill between items */}
                    {!isLast && (
                      <div className="hidden lg:flex absolute -right-3 xl:-right-3.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-2xs group-hover:border-[#00B86B]/40 group-hover:text-[#00B86B] transition-colors">
                        <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                    )}
                  </div>

                  {/* Step Card Content */}
                  <div className="flex-1 w-full bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#00B86B]/40 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      {/* Top micro accent bar */}
                      <div className="h-1 w-full bg-slate-100 group-hover:bg-[#00B86B] rounded-full transition-colors mb-3.5" />

                      <span className="text-[11px] font-bold text-[#00B86B] uppercase tracking-wider block mb-1">
                        Step {item.step} • {item.name}
                      </span>

                      <h3 className="text-base font-bold text-[#0B2240] mb-2 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      <span>Phase {index + 1} of 5</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B86B]/60" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
