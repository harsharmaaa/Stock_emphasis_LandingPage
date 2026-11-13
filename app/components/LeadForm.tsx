"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, ShieldCheck, ArrowRight } from "lucide-react";

export const OFFICIAL_SERVICES = [
  "Classic Cash Trade",
  "Classic Future Trade",
  "Classic Option Trade",
  "Massive Plus Cash Future Trade",
  "Massive Plus Option Future Trade",
  "Massive Pro Cash Future Option Trade",
  "Prime Index Option Trade",
  "Prime Index Future Trade",
  "Prime Combo Index Option Index Future Trade",
  "Prime Combo Option",
];

export const TRADING_CAPITALS = [
  "Below ₹1 Lakh",
  "₹1–5 Lakh",
  "₹5–10 Lakh",
  "₹10–25 Lakh",
  "Above ₹25 Lakh",
  "Prefer Not to Say",
];

interface LeadFormProps {
  buttonText?: string;
  source?: "hero" | "modal";
  presetService?: string;
  onSuccess?: () => void;
  formIdPrefix?: string;
}

export default function LeadForm({
  buttonText = "Submit Enquiry",
  source = "hero",
  presetService = "",
  onSuccess,
  formIdPrefix = "hero",
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState(presetService);
  const [capital, setCapital] = useState("");

  const [touched, setTouched] = useState({
    name: false,
    mobile: false,
    service: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const cleanMobile = mobile.replace(/\D/g, "");
    if (!cleanMobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (cleanMobile.length !== 10) {
      newErrors.mobile = "Please enter an exact 10-digit mobile number";
    }

    if (!service) {
      newErrors.service = "Please select an interested service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(digitsOnly);
    if (touched.mobile) {
      if (digitsOnly.length === 10) {
        setErrors((prev) => ({ ...prev, mobile: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          mobile: "Please enter an exact 10-digit mobile number",
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    setTouched({
      name: true,
      mobile: true,
      service: true,
    });

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          mobile: mobile.replace(/\D/g, ""),
          service,
          capital: capital || "Prefer Not to Say",
          source,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setServerError(
          data.message || "Failed to submit enquiry. Please try again or check connection."
        );
      }
    } catch {
      setServerError(
        "Network connection error. Please verify your internet connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="py-8 px-6 text-center rounded-2xl bg-white border border-emerald-100 shadow-sm animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-50 text-[#00B86B] flex items-center justify-center border-2 border-emerald-200 shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0B2240] mb-2 tracking-tight">
          Enquiry Submitted Successfully!
        </h3>
        <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed max-w-sm mx-auto font-medium">
          Thank you for your enquiry! Our team will contact you shortly on{" "}
          <span className="font-semibold text-slate-800">+91 {mobile}</span>.
        </p>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 flex items-center justify-center gap-2 mb-6">
          <ShieldCheck className="w-4 h-4 text-[#00B86B] shrink-0" />
          <span>SEBI Regd. Research Analyst • INH000020022</span>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitSuccess(false);
            setName("");
            setMobile("");
            setService(presetService || "");
            setCapital("");
            setTouched({
              name: false,
              mobile: false,
              service: false,
            });
          }}
          className="text-xs font-semibold text-slate-500 hover:text-[#0B2240] underline underline-offset-4 cursor-pointer transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {serverError && (
        <div
          role="alert"
          className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs md:text-sm flex items-start gap-2.5"
        >
          <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
          <div className="leading-snug">
            <span className="font-semibold">Submission Error: </span>
            {serverError}
          </div>
        </div>
      )}

      {/* 1. Full Name */}
      <div>
        <label
          htmlFor={`${formIdPrefix}-name`}
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id={`${formIdPrefix}-name`}
          type="text"
          value={name}
          disabled={isLoading}
          onChange={(e) => {
            setName(e.target.value);
            if (touched.name && e.target.value.trim().length >= 2) {
              setErrors((prev) => ({ ...prev, name: "" }));
            }
          }}
          onBlur={() => {
            setTouched((prev) => ({ ...prev, name: true }));
            if (!name.trim()) {
              setErrors((prev) => ({ ...prev, name: "Full Name is required" }));
            } else if (name.trim().length < 2) {
              setErrors((prev) => ({
                ...prev,
                name: "Name must be at least 2 characters",
              }));
            }
          }}
          placeholder="e.g. Rahul Sharma"
          autoComplete="name"
          className={`w-full px-3.5 py-2.5 md:py-3 rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none transition-all ${
            touched.name && errors.name
              ? "border-red-400 focus:ring-2 focus:ring-red-100"
              : "border-slate-300 focus:border-[#0B2240] focus:ring-2 focus:ring-[#0B2240]/10"
          }`}
        />
        {touched.name && errors.name && (
          <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
        )}
      </div>

      {/* 2. Mobile Number */}
      <div>
        <label
          htmlFor={`${formIdPrefix}-mobile`}
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <div className="relative flex rounded-xl shadow-xs">
          <div className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 text-slate-600 font-medium text-sm select-none">
            <span className="text-xs text-slate-400 mr-1.5">🇮🇳</span> +91
          </div>
          <input
            id={`${formIdPrefix}-mobile`}
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={10}
            value={mobile}
            disabled={isLoading}
            onChange={handleMobileChange}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, mobile: true }));
              if (mobile.length !== 10) {
                setErrors((prev) => ({
                  ...prev,
                  mobile: "Please enter an exact 10-digit mobile number",
                }));
              }
            }}
            placeholder="10-digit mobile number"
            autoComplete="tel"
            className={`w-full px-3.5 py-2.5 md:py-3 rounded-r-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none transition-all ${
              touched.mobile && errors.mobile
                ? "border-red-400 focus:ring-2 focus:ring-red-100"
                : "border-slate-300 focus:border-[#0B2240] focus:ring-2 focus:ring-[#0B2240]/10"
            }`}
          />
        </div>
        {touched.mobile && errors.mobile && (
          <p className="mt-1 text-xs text-red-500 font-medium">{errors.mobile}</p>
        )}
      </div>

      {/* 3. Interested Service */}
      <div>
        <label
          htmlFor={`${formIdPrefix}-service`}
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Interested Service <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id={`${formIdPrefix}-service`}
            value={service}
            disabled={isLoading}
            onChange={(e) => {
              setService(e.target.value);
              if (touched.service && e.target.value) {
                setErrors((prev) => ({ ...prev, service: "" }));
              }
            }}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, service: true }));
              if (!service) {
                setErrors((prev) => ({
                  ...prev,
                  service: "Please select an interested service",
                }));
              }
            }}
            className={`w-full px-3.5 py-2.5 md:py-3 rounded-xl border text-sm bg-white focus:outline-none transition-all appearance-none cursor-pointer ${
              !service ? "text-slate-400" : "text-slate-900"
            } ${
              touched.service && errors.service
                ? "border-red-400 focus:ring-2 focus:ring-red-100"
                : "border-slate-300 focus:border-[#0B2240] focus:ring-2 focus:ring-[#0B2240]/10"
            }`}
          >
            <option value="" disabled>
              Select an official service
            </option>
            {OFFICIAL_SERVICES.map((s) => (
              <option key={s} value={s} className="text-slate-900">
                {s}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {touched.service && errors.service && (
          <p className="mt-1 text-xs text-red-500 font-medium">{errors.service}</p>
        )}
      </div>

      {/* 4. Trading Capital (Optional) */}
      <div>
        <label
          htmlFor={`${formIdPrefix}-capital`}
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Trading Capital <span className="text-slate-400 text-[10px] font-normal lowercase">(optional)</span>
        </label>
        <div className="relative">
          <select
            id={`${formIdPrefix}-capital`}
            value={capital}
            disabled={isLoading}
            onChange={(e) => setCapital(e.target.value)}
            className={`w-full px-3.5 py-2.5 md:py-3 rounded-xl border border-slate-300 text-sm bg-white focus:border-[#0B2240] focus:ring-2 focus:ring-[#0B2240]/10 focus:outline-none transition-all appearance-none cursor-pointer ${
              !capital ? "text-slate-400" : "text-slate-900"
            }`}
          >
            <option value="">Select Trading Capital (Optional)</option>
            {TRADING_CAPITALS.map((c) => (
              <option key={c} value={c} className="text-slate-900">
                {c}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full relative group overflow-hidden py-3.5 px-6 rounded-xl font-bold text-white text-base bg-[#00B86B] hover:bg-[#00A35E] active:scale-[0.99] transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
        >
          {/* Subtle Sheen Sweep */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin relative z-10" />
              <span className="relative z-10">Processing...</span>
            </>
          ) : (
            <>
              <span className="relative z-10">{buttonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
            </>
          )}
        </button>
      </div>

      {/* Privacy guarantee note */}
      <p className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-[#00B86B] shrink-0" />
        <span>Confidential enquiry • Handled by SEBI Registered Desk</span>
      </p>
    </form>
  );
}
