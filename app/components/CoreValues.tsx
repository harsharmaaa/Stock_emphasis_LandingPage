"use client";

import React from "react";
import {
  Shield,
  LineChart,
  Award,
  Microscope,
  Eye,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";

const CORE_VALUES = [
  {
    icon: Shield,
    title: "Risk-First Mindset",
    description:
      "Prioritizing capital protection with predefined Stop-Loss levels on every trade setup.",
  },
  {
    icon: LineChart,
    title: "Data-Backed Precision",
    description:
      "Adapting technical and open-interest screeners to evolving intraday market cycles.",
  },
  {
    icon: Award,
    title: "Quality Over Quantity",
    description:
      "Delivering high-conviction setups rather than unnecessary daily market noise.",
  },
  {
    icon: Microscope,
    title: "In-House Research",
    description:
      "All market analysis and trade levels generated internally by qualified analysts.",
  },
  {
    icon: Eye,
    title: "SEBI Transparency",
    description:
      "Complete regulatory disclosure with zero guaranteed-return or risk-free claims.",
  },
  {
    icon: Compass,
    title: "Informed Execution",
    description:
      "Empowering traders with clear Entry, Target, and SL levels for disciplined decisions.",
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

export default function CoreValues() {
  return (
    <section id="values" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0B2240] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Guiding Principles</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight">
            Our Core Values
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Six guiding principles behind our research culture, client transparency, and disciplined execution.
          </p>
        </div>

        {/* 6 Core Values Grid with Scroll-Reveal Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {CORE_VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#00B86B]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Top micro accent bar */}
                <div className="h-1 w-full bg-slate-100 group-hover:bg-[#00B86B] rounded-full transition-colors mb-5" />

                <div>
                  {/* Top Row: Icon Container and Value Number */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs flex items-center justify-center shrink-0 group-hover:border-[#00B86B]/40 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#00B86B]/10 rounded-bl-lg transition-colors group-hover:bg-[#00B86B]/20" />
                      <Icon className="w-5 h-5 text-[#0B2240] group-hover:text-[#00B86B] transition-colors stroke-[1.8]" />
                    </div>

                    <span className="font-mono text-xs font-black text-slate-300 group-hover:text-[#00B86B] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#00B86B] uppercase tracking-wider block mb-1.5">
                    Principle 0{idx + 1}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B2240] tracking-tight mb-2 leading-snug">
                    {val.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  <span>Core Value 0{idx + 1} of 06</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#00B86B] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
