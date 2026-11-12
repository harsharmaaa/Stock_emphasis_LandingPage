"use client";

import React from "react";
import {
  Zap,
  Cpu,
  Cable,
  Database,
  ShieldCheck,
  Fingerprint,
  Cctv,
  PhoneOff,
  ServerCog,
} from "lucide-react";
import { motion } from "framer-motion";

const INFRASTRUCTURE_ITEMS = [
  {
    icon: Zap,
    category: "Power Resilience",
    title: "24/7 Power Availability with Power Backup",
    description: "Uninterrupted power systems and generator backups ensuring constant market-hours uptime.",
  },
  {
    icon: Cpu,
    category: "Analytics Engine",
    title: "Cutting-edge Technical Analysis",
    description: "Advanced charting and analytical software setups deployed for quantitative stock screening.",
  },
  {
    icon: Cable,
    category: "Network Backbone",
    title: "Cat6 Double Network Cables",
    description: "High-speed redundant dual-line networking infrastructure for minimal latency and high reliability.",
  },
  {
    icon: Database,
    category: "Data Protection",
    title: "Regular Data Backup",
    description: "Automated, secure data backups safeguarding research repositories and client communication logs.",
  },
  {
    icon: ShieldCheck,
    category: "Cyber Security",
    title: "Antivirus and Firewall System for Safety",
    description: "Enterprise-grade endpoint security, network firewalls, and encryption protocols protecting information assets.",
  },
  {
    icon: Fingerprint,
    category: "Access Control",
    title: "Time Attendance Machines",
    description: "Automated biometric access and attendance systems ensuring strict physical operational discipline.",
  },
  {
    icon: Cctv,
    category: "Physical Security",
    title: "CCTV Surveillance",
    description: "24/7 video monitoring throughout research floors and premises for security and regulatory oversight.",
  },
  {
    icon: PhoneOff,
    category: "Workplace Protocol",
    title: "No Personal Phone Calls / Social Media",
    description: "Strict workplace compliance policies preventing unauthorized communications and client data leaks.",
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

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-[#0B2240] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <ServerCog className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Operational Standards</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight">
            Our Infrastructure
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Published operational facilities and IT safeguards supporting the Stock Emphasis research desk.
          </p>
        </div>

        {/* 8 Infrastructure Items in Responsive Grid with Scroll Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INFRASTRUCTURE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#00B86B]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xs"
              >
                {/* Top micro accent bar */}
                <div className="h-1 w-full bg-slate-200 group-hover:bg-[#00B86B] rounded-full transition-colors mb-5" />

                <div>
                  {/* Top Row: Icon Container and Facility Number */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center shrink-0 group-hover:border-[#00B86B]/40 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#00B86B]/10 rounded-bl-lg transition-colors group-hover:bg-[#00B86B]/20" />
                      <Icon className="w-5 h-5 text-[#0B2240] group-hover:text-[#00B86B] transition-colors stroke-[1.8]" />
                    </div>

                    <span className="font-mono text-xs font-black text-slate-300 group-hover:text-[#00B86B] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#00B86B] uppercase tracking-wider block mb-1.5">
                    {item.category}
                  </span>

                  <h3 className="text-base font-bold text-[#0B2240] tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  <span>Facility 0{idx + 1} of 08</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#00B86B] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Verification note on company-published claims */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto shadow-2xs">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-700">Verification Note:</span> These infrastructure parameters reflect the published operational setup described on the company&apos;s official portal. Subject to company confirmation for current on-premise configurations.
          </p>
        </div>
      </div>
    </section>
  );
}
