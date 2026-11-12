import React from "react";
import Image from "next/image";
import { Building2, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Company introduction and client benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#0B2240] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-[#00B86B]" />
              <span>About Stock Emphasis</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2240] tracking-tight leading-tight">
              A Regulated Research Desk Founded on Disciplined Market Analysis
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Stock Emphasis</strong> is a SEBI-registered Research Analyst firm (Registration No. <strong>INH000020022</strong>) operating from Indore, Madhya Pradesh. The firm provides data-driven research, technical analysis, and market insights covering Indian equities and derivatives.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our research focuses on providing clients with clear and structured market viewpoints across Cash, Futures, and Options segments. Every analysis is formulated by evaluating market volume patterns, price action dynamics, and sector strength.
            </p>

            {/* Client benefits */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00B86B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Structured Research Viewpoints:</strong> Rigorous evaluation of market conditions before research releases are communicated.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00B86B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Zero Custody of Funds:</strong> Clients trade entirely through their personal demat accounts. Stock Emphasis never handles client capital or demat credentials.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00B86B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  <strong>Indore Research Presence:</strong> Headquartered at Lakeview 1, Scheme No. 94, Indore, upholding SEBI research analyst standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Research Image */}
          <div className="lg:col-span-6 relative">
            {/* Subtle decorative rounded rectangle in #F1F5F9 behind the image, offset ~16px to bottom-right, hidden on mobile */}
            <div className="hidden lg:block absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-[#F1F5F9] border border-[#E2E8F0] -z-10" />

            {/* Image container: rounded-2xl, 1px border #E2E8F0, soft shadow, overflow-hidden, no dark overlay */}
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-[#E2E8F0] shadow-xl overflow-hidden bg-[#F8FAFC]">
              <Image
                src="/images/about-research-team.png"
                alt="Research analysts reviewing market charts and reports in a modern office"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[center_top]"
              />

              {/* Floating badge at the bottom-left of the image */}
              <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0B2240] text-xs font-semibold shadow-sm border border-[#E2E8F0]">
                <span className="w-2 h-2 rounded-full bg-[#00B86B]" />
                <span>Research-Based Approach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
