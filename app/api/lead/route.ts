import { NextResponse } from "next/server";

interface LeadPayload {
  name?: string;
  mobile?: string;
  service?: string;
  segment?: string;
  capital?: string;
  source?: string;
  company_website?: string;
  time_taken?: number;
}

// In-memory cache for recent submissions (mobile -> timestamp)
const recentSubmissions = new Map<string, number>();
const TEN_MINUTES_MS = 10 * 60 * 1000;

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

// Keep legacy segments valid for full backwards compatibility
const ALL_VALID_SERVICES = [
  ...OFFICIAL_SERVICES,
  "Intraday Research",
  "Equity Cash",
  "Futures & Options",
  "Index Options",
  "Commodity",
];

const VALID_CAPITALS = [
  "Below ₹1 Lakh",
  "₹1–5 Lakh",
  "₹1-5 Lakh",
  "₹5–10 Lakh",
  "₹5-10 Lakh",
  "₹10–25 Lakh",
  "₹10-25 Lakh",
  "Above ₹25 Lakh",
  "Above ₹10 Lakh",
  "Prefer Not to Say",
  "",
];

export async function POST(request: Request) {
  try {
    let body: LeadPayload;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    const { name, mobile, service, segment, capital, company_website, time_taken } = body;
    const selectedService = (service || segment || "Intraday Research").trim();

    // 1. Silent Honeypot & Anti-Bot Fast Submit Protection
    // If company_website is filled or form submitted under 2.5 seconds (2500ms),
    // return HTTP 200 silently without forwarding to webhook.
    const isHoneypotFilled = Boolean(company_website && company_website.trim().length > 0);
    const isSubmittedTooFast = typeof time_taken === "number" && time_taken < 2500;

    if (isHoneypotFilled || isSubmittedTooFast) {
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your enquiry! Our team will contact you shortly.",
        },
        { status: 200 }
      );
    }

    // 2. Server-side validation
    const trimmedName = name?.trim();
    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const trimmedMobile = mobile?.trim().replace(/\D/g, "");
    if (!trimmedMobile || trimmedMobile.length !== 10) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!selectedService || !ALL_VALID_SERVICES.includes(selectedService)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a valid interested service from the options.",
        },
        { status: 400 }
      );
    }

    const trimmedCapital = (capital || "Prefer Not to Say").trim();
    if (trimmedCapital && !VALID_CAPITALS.includes(trimmedCapital)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a valid trading capital bracket from the options.",
        },
        { status: 400 }
      );
    }

    // 3. Server-Side Duplicate Cache (10-minute cooldown per mobile number)
    const nowMs = Date.now();
    const lastSubmitted = recentSubmissions.get(trimmedMobile);

    // Prune entries older than 10 minutes periodically
    if (recentSubmissions.size > 1000) {
      for (const [m, t] of recentSubmissions.entries()) {
        if (nowMs - t > TEN_MINUTES_MS) {
          recentSubmissions.delete(m);
        }
      }
    }

    if (lastSubmitted && nowMs - lastSubmitted < TEN_MINUTES_MS) {
      // Within 10 minutes: return HTTP 200 success without forwarding to MAKE_WEBHOOK_URL
      return NextResponse.json(
        {
          success: true,
          message: "Your request was just received! Our team will call you shortly.",
          duplicate: true,
        },
        { status: 200 }
      );
    }

    // Record submission timestamp in server cache
    recentSubmissions.set(trimmedMobile, nowMs);

    // Check environment variable
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl || webhookUrl.trim() === "") {
      recentSubmissions.delete(trimmedMobile);
      return NextResponse.json(
        {
          success: false,
          message:
            "Webhook integration is currently unconfigured (MAKE_WEBHOOK_URL is missing in server environment). Please set MAKE_WEBHOOK_URL in .env.local or contact support.",
        },
        { status: 503 }
      );
    }

    // Generate readable date and time in IST (Indian Standard Time)
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(now);

    // Exact Google Sheets & webhook keys
    const payload = {
      date: formattedDate,
      name: trimmedName,
      mobile: trimmedMobile,
      service: selectedService,
      capital: trimmedCapital,
      // Friendly aliases for Make.com / Google Sheets column matching
      "Date & Time": formattedDate,
      "Full Name": trimmedName,
      "Mobile Number": trimmedMobile,
      "Interested Service": selectedService,
      "Trading Capital": trimmedCapital,
    };

    // Forward to Make.com Webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      recentSubmissions.delete(trimmedMobile);
      const errorText = await webhookResponse.text().catch(() => "Unknown error");
      return NextResponse.json(
        {
          success: false,
          message: `External webhook service responded with status ${webhookResponse.status}: ${errorText}`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your enquiry! Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      {
        success: false,
        message: `An unexpected server error occurred: ${errorMsg}`,
      },
      { status: 500 }
    );
  }
}
