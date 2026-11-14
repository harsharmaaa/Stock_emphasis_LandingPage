import Script from "next/script";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustStrip from "./components/TrustStrip";
import AboutSection from "./components/AboutSection";
import InteractiveServicesShowcase from "./components/InteractiveServicesShowcase";
import OurMethodology from "./components/OurMethodology";
import WhyChooseUs from "./components/WhyChooseUs";
import CoreValues from "./components/CoreValues";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import { ModalProvider } from "./context/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#00B86B] selection:text-white">
        {/* 1. Navbar */}
        <Navbar />

        {/* Main Content Area in Order */}
        <main className="flex-1">
          {/* 2. Hero Section with Enquiry Form */}
          <HeroSection />

          {/* 3. Trust Strip */}
          <TrustStrip />

          {/* 4. About Stock Emphasis */}
          <AboutSection />

          {/* 5. Interactive Services Showcase (All 10 services) */}
          <InteractiveServicesShowcase />

          {/* 6. Our Methodology (Official 5-step process) */}
          <OurMethodology />

          {/* 7. Why Choose Stock Emphasis (All 8 official points) */}
          <WhyChooseUs />

          {/* 8. Our Core Values (All 6 official values) */}
          <CoreValues />

          {/* 9. FAQs (Accordion) */}
          <FAQSection />

          {/* 10. Final Enquiry CTA */}
          <FinalCTA />
        </main>

        {/* 11. Footer and Regulatory Compliance */}
        <Footer />

        {/* Automatic 1.5s Registration Popup */}
        <LeadModal />

        {/* Google Ads Tag */}
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
