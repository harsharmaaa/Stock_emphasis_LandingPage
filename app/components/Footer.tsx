import React from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Shield,
  Clock,
  AlertTriangle,
  Building2,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="compliance" className="bg-[#0B2240] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Professional Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-700/60 items-start">
          {/* Column 1: Brand Authority, Mission & SEBI Registration (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col items-start gap-3">
              {/* Official Logo */}
              <div className="inline-flex bg-white px-4 py-2.5 rounded-xl shadow-xs border border-white/20 items-center justify-center">
                <Image
                  src="/images/stock-emphasis-logo.webp"
                  alt="Stock Emphasis official logo"
                  width={160}
                  height={48}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-slate-200 tracking-tight">
                Stock Emphasis — SEBI Registered Research Analyst
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                Stock Emphasis is an independent, SEBI-registered Research Analyst desk operating from Indore, Madhya Pradesh. We deliver structured technical research, volume momentum screeners, and disciplined market setups across Cash, Futures &amp; Options.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Shield className="w-4 h-4 text-[#00B86B]" />
                  <span>SEBI Registration</span>
                </div>
                <p className="text-slate-200">
                  <strong className="text-white">Reg. Number:</strong> INH000020022
                </p>
                <p className="text-slate-400 leading-normal">
                  Registered under SEBI (Research Analysts) Regulations, 2014.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Building2 className="w-4 h-4 text-[#00B86B]" />
                  <span>Exchange &amp; Governance</span>
                </div>
                <p className="text-slate-200">
                  <strong className="text-white">BSE Enlistment:</strong> Enlisted Research Analyst Desk
                </p>
                <p className="text-slate-400 leading-normal">
                  Zero custody of funds. 100% trades executed in clients&apos; own demat accounts.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Official Registered Office & Direct Contact Desk (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 shadow-lg space-y-5">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00B86B]" />
                  <span>Official Registered Office</span>
                </h4>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Indore HQ
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#00B86B]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-0.5">
                      Registered Address
                    </span>
                    <span className="leading-relaxed text-slate-200 font-medium">
                      404, 4th Floor, Shekhar Central, INDORE, MADHYA PRADESH, 452001
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#00B86B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-0.5">
                      Support Desk
                    </span>
                    <a
                      href="tel:+918349046664"
                      className="font-semibold text-white hover:text-[#00B86B] transition-colors"
                    >
                      +91 8349046664
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#00B86B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-0.5">
                      Compliance &amp; Support Email
                    </span>
                    <a
                      href="mailto:support@stockemphasis.com"
                      className="font-semibold text-white hover:text-[#00B86B] transition-colors"
                    >
                      support@stockemphasis.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#00B86B]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-0.5">
                      Trading Desk Hours
                    </span>
                    <span className="text-slate-300">
                      Monday – Friday: 9:00 AM – 5:30 PM IST
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Risk Disclaimer */}
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-white/5 border border-amber-400/30 text-slate-200 shadow-xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs leading-relaxed">
              <h5 className="font-bold text-amber-300 text-xs sm:text-sm">
                Mandatory Regulatory Disclosure &amp; Market Risk Disclaimer
              </h5>
              <p className="text-slate-100 font-semibold text-xs sm:text-sm">
                &ldquo;Investments in securities are subject to market risks. Read all related documents carefully before investing. SEBI registration does not guarantee performance or returns. No assured or guaranteed returns are offered.&rdquo;
              </p>
              <p className="text-slate-400">
                Stock Emphasis operates in strict conformity with SEBI (Research Analysts) Regulations, 2014 (Registration No. INH000020022). Stock market trading and derivative instruments carry significant financial risk. Recommendations provided are solely for research and analytical guidance based on technical frameworks. Active market participants should assess their individual risk tolerance before acting upon any research call.
              </p>
            </div>
          </div>
        </div>

        {/* Official Dispute & Grievance Links Strip */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Shield className="w-4 h-4 text-[#00B86B] shrink-0" />
            <span>Investor Grievance &amp; Redressal Portals:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <a
              href="https://scores.sebi.gov.in/scores-home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
            >
              <span>SEBI SCORES Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://smartodr.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
            >
              <span>SMART ODR Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Copyright & Bottom Metadata */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 border-t border-slate-800">
          <p>Copyright © 2026 Stock Emphasis. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-[11px]">
            <span>SEBI Reg. No. INH000020022</span>
            <span>•</span>
            <span>BSE Enlisted RA</span>
            <span>•</span>
            <span>Shekhar Central, Indore, M.P.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
