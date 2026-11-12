import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stock Emphasis | Stock Market Research Services",
  description:
    "Explore Stock Emphasis research services, market insights and research-driven strategies. Connect with our team to learn more about our services.",
  keywords: [
    "Stock Emphasis",
    "SEBI Registered Research Analyst",
    "INH000020022",
    "Stock Market Research",
    "Equity Cash Trade",
    "Futures & Options",
    "Index Options",
    "Indian Stock Market Advisory",
    "Research Analyst Indore",
  ],
  authors: [{ name: "Stock Emphasis" }],
  openGraph: {
    title: "Stock Emphasis | Stock Market Research Services",
    description:
      "Explore Stock Emphasis research services, market insights and research-driven strategies. Connect with our team to learn more about our services.",
    url: "https://stockemphasis.com",
    siteName: "Stock Emphasis",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/stock-emphasis-icon.png", type: "image/png" },
    ],
    apple: "/images/stock-emphasis-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B2240",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
