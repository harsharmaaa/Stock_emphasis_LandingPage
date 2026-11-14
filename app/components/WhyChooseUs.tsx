"use client";

import React from "react";
import {
  ShieldCheck,
  Target,
  Award,
  Microscope,
  Timer,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const WHY_CHOOSE_ITEMS = [
  {
    icon: ShieldCheck,
    title: "SEBI Registered Desk",
    subtitle: "Regulatory Governance",
    description:
      "Operates under SEBI Reg. No. INH000020022 with strict compliance and zero guaranteed-return claims.",
  },
  {
    icon: Target,
    title: "Defined Risk Levels",
    subtitle: "Capital Protection",
    description:
      "Every intraday setup includes a clear Entry range, Target, and mandatory Stop-Loss.",
  },
  {
    icon: Award,
    title: "Quality Over Quantity",
    subtitle: "Selective Screening",
    description:
      "No forced daily quotas—alerts shared only when high-probability market setups emerge.",
  },
  {
    icon: Microscope,
    title: "In-House Research",
    subtitle: "Analytical Rigor",
    description:
      "Technical, volume, and Open Interest (OI) analysis done internally by qualified analysts.",
  },
  {
    icon: Timer,
    title: "Timely WhatsApp Alerts",
    subtitle: "Rapid Dispatches",
    description:
      "Fast, actionable dispatches across Nifty, Bank Nifty, Sensex & liquid stocks.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Desk Support",
    subtitle: "Personal Relationship Desk",
    description:
      "Personal relationship manager assistance with 100% execution in your own demat account.",
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
            Six foundational pillars guiding our regulated research, risk management, and client dispatches.
          </p>
        </div>

        {/* 6 Feature Boxes in Responsive 3x2 Grid with Scroll Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
                  <span>Pillar 0{index + 1} of 06</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#00B86B] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Regulatory disclaimer notice */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto shadow-2xs">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            * <span className="font-semibold text-slate-700">Notice on Regulatory Compliance:</span> Stock Emphasis operates under SEBI Reg. No. INH000020022. All securities investments involve market risks. Past performance and analytical frameworks do not assure returns or eliminate risk of loss.
          </p>
        </div>
      </div>
    </section>
  );
}
