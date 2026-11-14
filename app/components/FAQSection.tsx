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
      "Stock Emphasis is an Indian capital market research firm based in Indore, Madhya Pradesh. It operates as a SEBI-registered Research Analyst providing technical analysis, data-driven market insights, and structured research viewpoints across Indian cash equities, futures, and options.",
  },
  {
    question: "Is Stock Emphasis a SEBI-registered Research Analyst?",
    answer:
      "Yes. Stock Emphasis is registered with the Securities and Exchange Board of India (SEBI) as a Research Analyst under Registration Number INH000020022. The firm strictly complies with SEBI (Research Analysts) Regulations, 2014.",
  },
  {
    // question: "What research services does Stock Emphasis provide?",
    // answer:
    //   "Stock Emphasis provides 10 official research services categorized across three main presentation streams: Classic Trades (Classic Cash, Classic Future, Classic Option), Massive Trades (Massive Plus Cash Future, Massive Plus Option Future, Massive Pro Cash Future Option), and Prime Index Trades (Prime Index Option, Prime Index Future, Prime Combo Index Option Index Future, Prime Combo Option).",
    question: "What segments and indices are covered in intraday research?",
    answer: "Our research covers Nifty, Bank Nifty, and Sensex options, along with selected liquid Stock Options, Futures, and Intraday Cash equities across Classic, Massive, and Prime service categories.",
  },
  {
    // question: "How can I enquire about the services?",
    // answer:
    //   "You can submit your enquiry directly through the enquiry form available on this landing page or click 'Enquire Now' to open the consultation popup. An analyst support representative will reach out to understand your trading requirements and explain the research structure.",
    question: "What details are included in every research call?",
    answer: "Every research communication clearly specifies the Entry level/range, Target price, and a predefined Stop Loss level, along with relevant technical rationale."
  },
  {
    question: "Does Stock Emphasis guarantee returns?",
    answer:
      "No. Investments in the securities market are subject to market risks. In strict compliance with SEBI guidelines, Stock Emphasis does not offer assured, guaranteed, or profit-sharing returns. All trading setups are provided with defined stop-loss and target parameters to help participants maintain risk discipline.",
  },
  {
    // question: "How can I contact Stock Emphasis?",
    // answer:
    //   "You can contact Stock Emphasis via email at support@stockemphasis.com or by telephone at +91 8349046664 during business hours. The registered office is located at 25 FA, Scheme No. 94, Sector F, 201–202, Lakeview 1, Indore, M.P.",
    question: "How is the research delivered and how many calls are shared?",
    answer: "Research alerts are shared strictly when a valid setup is identified by our methodology—focusing on disciplined market opportunities rather than fixed daily quotas."
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
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight">
            Clear Answers, Factual Guidance
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Essential facts regarding Stock Emphasis&apos;s SEBI registration, research practices, and enquiry procedure.
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
