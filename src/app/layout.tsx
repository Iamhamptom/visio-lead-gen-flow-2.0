import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JessChatWidget } from "@/components/jess-chat-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visio Lead Gen Flow 2.0 — Twelve Verticals, One AI Lead Engine",
  description:
    "Visio Lead Gen Flow 2.0 — the multi-vertical AI lead engine for South Africa. Twelve verticals (bond, insurance, solar, debt, medical, cosmetic, immigration, schools, commercial, residential, e-commerce, coaches), one platform, twelve Visio Research Labs papers, and seamless integration with the VisioCorp ecosystem (Visio Auto, HealthOS, Patient Flow, Doctor OS, VisioCode, VisioPitch, VisioCalls, Workspace).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <JessChatWidget />
      </body>
    </html>
  );
}
