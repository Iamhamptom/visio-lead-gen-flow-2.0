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
  title: "Visio Lead Gen — The Multi-Vertical AI Lead Engine for South Africa",
  description:
    "Warm, intent-scored leads across 10 verticals: bond, insurance, solar, medical aid, debt review, cosmetic, immigration, schools, commercial property, and auto. Signals → qualify → book → deliver. Patient Flow booking, WhatsApp auto-confirm, and Bloomberg-grade industry intel in one platform.",
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
