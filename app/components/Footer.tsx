import React from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Shield,
  AlertTriangle,
} from "lucide-react";

export default function Footer() {
  const complianceDocs = [
    "Investor Charter",
    "Disclosure Document",
    "Grievance Redressal Process",
    "Escalation Matrix",
    "Refund Policy",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <footer id="compliance" className="bg-[#0B2240] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          {/* Column 1: Company Branding & Registration */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start gap-3">
              {/* Official Logo in subtle light container for contrast against dark navy */}
              <div className="inline-flex bg-white px-3.5 py-2 rounded-xl shadow-xs border border-white/20 items-center justify-center">
                <Image
                  src="/images/stock-emphasis-logo.webp"
                  alt="Stock Emphasis official logo"
                  width={150}
                  height={46}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <span className="text-[12px] font-semibold text-slate-300">
                Your Reliable Stock Market Research Partner
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                Insights | Data-Driven Strategies | Disciplined Execution
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Shield className="w-4 h-4 text-[#00B86B]" />
                <span>SEBI Registration Details</span>
              </div>
              <p className="text-slate-200">
                <strong className="text-white">Registration Number:</strong> INH000020022
              </p>
              <p className="text-slate-400">
                <strong className="text-slate-300">Entity:</strong> SEBI-Registered Research Analyst
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-white transition-colors">
                  Core Values
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-white transition-colors">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact Information
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00B86B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  25 FA, Scheme No 94, Sector F, 201-202, Lakeview 1, Indore, M.P.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00B86B] shrink-0" />
                <a href="tel:+918349046664" className="hover:text-white transition-colors">
                  +91 8349046664
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00B86B] shrink-0" />
                <a href="mailto:support@stockemphasis.com" className="hover:text-white transition-colors">
                  support@stockemphasis.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Regulatory & Compliance Disclosures */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Regulatory &amp; Compliance
            </h4>
            <p className="text-[11px] text-slate-400">
              Statutory documents &amp; client charters:
            </p>
            <ul className="space-y-2 text-xs">
              {complianceDocs.map((doc, idx) => (
                <li key={idx} className="flex items-center justify-between gap-2 py-0.5">
                  <span className="text-slate-300 font-medium">{doc}</span>
                  <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded whitespace-nowrap">
                    Confirmation Pending
                  </span>
                </li>
              ))}
            </ul>
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
                &ldquo;Investments in securities market are subject to market risks. Read all related documents carefully before investing. SEBI registration does not guarantee performance or returns. No assured or guaranteed returns are offered.&rdquo;
              </p>
              <p className="text-slate-400">
                Stock Emphasis operates in strict conformity with SEBI (Research Analysts) Regulations, 2014. Stock market trading and derivative instruments carry financial risk. Recommendations provided are solely for educational and research purposes based on technical and fundamental analysis methodologies. Investors are advised to exercise discretion and evaluate their risk appetite before acting on any research reports or alerts.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 Stock Emphasis. All rights reserved.</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>SEBI Reg. No. INH000020022</span>
            <span>•</span>
            <span>Research Desk Indore</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
