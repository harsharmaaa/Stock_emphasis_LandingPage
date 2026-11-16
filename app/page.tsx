import Script from "next/script";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustStrip from "./components/TrustStrip";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import { ModalProvider } from "./context/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00B86B] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* 4 Concise Core Sections */}
        <main className="flex-1">
          {/* Section 1: Hero Section (Above the Fold) with Embedded Quick Lead Form */}
          <HeroSection />

          {/* Section 2: Trust & Highlights Strip (4 Clean Badges) */}
          <TrustStrip />

          {/* Section 3: Why Subscribe to Stock Emphasis? (4 Core Minimalist Cards) */}
          <WhyChooseUs />
        </main>

        {/* Section 4: Mandatory SEBI Disclaimers & Professional Corporate Footer */}
        <Footer />

        {/* Dynamic Enquiry Popup Modal */}
        <LeadModal />

        {/* Google Ads Tag Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17963625672"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17963625672');
          `}
        </Script>
      </div>
    </ModalProvider>
  );
}
