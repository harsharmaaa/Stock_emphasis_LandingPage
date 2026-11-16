"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is Stock Emphasis?",
    answer:
      "Stock Emphasis is a SEBI-registered Research Analyst firm (INH000020022) in Indore, delivering disciplined technical research across Indian equities and derivatives.",
  },
  {
    question: "Is Stock Emphasis a SEBI-registered Research Analyst?",
    answer:
      "Yes. Stock Emphasis is registered with SEBI under Registration Number INH000020022, operating in strict compliance with RA regulations.",
  },
  {
    question: "Which segments and indices are covered in intraday research?",
    answer:
      "Our research covers Nifty, Bank Nifty, Sensex options, liquid stock options, futures, and cash equities across 10 specialized service tiers.",
  },
  {
    question: "What details are included in every research call?",
    answer:
      "Every research alert specifies clear Entry levels, Target prices, and a mandatory Stop-Loss boundary alongside the technical rationale.",
  },
  {
    question: "How many calls are shared per day?",
    answer:
      "We share alerts strictly when high-probability setups emerge from our screening criteria, prioritizing research quality over daily quotas.",
  },
  {
    question: "Does SEBI registration or research guarantee returns?",
    answer:
      "No. All investments in securities carry market risks. SEBI registration validates regulatory compliance but does not assure profits or eliminate risk.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0B2240] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Common Queries</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Key facts regarding our SEBI registration, research coverage, and alert delivery.
          </p>
        </div>

        {/* Premium Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const btnId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border bg-white overflow-hidden transition-all duration-200 shadow-xs ${isOpen
                    ? "border-[#00B86B]/40 shadow-md ring-1 ring-[#00B86B]/20"
                    : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
                  }`}
              >
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0B2240] hover:text-[#00B86B] transition-colors cursor-pointer group"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black text-slate-300 group-hover:text-[#00B86B] transition-colors">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>

                  {/* Subtle plus/minus icon pill */}
                  <div
                    className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen
                        ? "bg-emerald-50 border-emerald-300 text-[#00B86B] shadow-2xs"
                        : "bg-slate-50 border-slate-200 text-slate-500 group-hover:border-[#00B86B]/40 group-hover:text-[#00B86B]"
                      }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.2]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.2]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Compliance Note */}
        <div className="mt-12 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-3.5 text-xs sm:text-sm text-emerald-900 shadow-2xs">
          <ShieldCheck className="w-6 h-6 text-[#00B86B] shrink-0" />
          <p>
            SEBI Registration Number: <strong>INH000020022</strong>. All communications are conducted in compliance with regulatory disclosure norms. Investments in the securities market are subject to market risks.
          </p>
        </div>
      </div>
    </section>
  );
}
