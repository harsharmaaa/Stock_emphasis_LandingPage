"use client";

import React from "react";
import { Sliders, ShieldCheck, Zap, UserCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CORE_REASONS = [
  {
    icon: Sliders,
    title: "Portfolio-Fit Setups",
    subtitle: "Segment Alignment",
    description: "Tailored recommendations for active market segments.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Risk Management",
    subtitle: "Capital Protection",
    description: "Pre-defined Stop Loss on every single call.",
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    subtitle: "Real-Time Alerts",
    description: "Fast alerts via WhatsApp & SMS during live market hours.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Support",
    subtitle: "Subscriber Care",
    description: "Professional assistance for active subscribers.",
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
    <section id="why-us" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-[#0B2240] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Research Advantage</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight">
            Why Subscribe to Stock Emphasis?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Disciplined research methodology engineered for active intraday market participants.
          </p>
        </div>

        {/* 4 Core Minimalist Cards in 4-Column Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CORE_REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#00B86B]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xs"
              >
                {/* Top micro accent line */}
                <div className="h-1 w-full bg-slate-200 group-hover:bg-[#00B86B] rounded-full transition-colors mb-5" />

                <div>
                  {/* Top Row: Icon Container and Index Number */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center shrink-0 group-hover:border-[#00B86B]/40 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#00B86B]/10 rounded-bl-lg transition-colors group-hover:bg-[#00B86B]/20" />
                      <Icon className="w-5 h-5 text-[#0B2240] group-hover:text-[#00B86B] transition-colors stroke-[1.8]" />
                    </div>

                    <span className="font-mono text-xs font-black text-slate-300 group-hover:text-[#00B86B] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#00B86B] uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B2240] tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  <span>Advantage 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#00B86B] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Regulatory disclaimer notice */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto shadow-2xs">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-700">SEBI Regd. Research Analyst (INH000020022):</span> All recommendations are backed by objective technical and quantitative models with no guaranteed return claims.
          </p>
        </div>
      </div>
    </section>
  );
}
