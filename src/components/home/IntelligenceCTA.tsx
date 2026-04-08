"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Intelligence CTA — the OEM + bank audience callout.
 *
 * A dedicated section that speaks to the second audience: OEM marketing
 * teams and bank credit-ops who want world-class industrial intelligence.
 * Not trying to convert dealer-principals here — this is a branching
 * entry point to /intelligence for the other buyer persona.
 */

export default function HomeIntelligenceCTA() {
  return (
    <section className="relative py-32 bg-[#020c07] overflow-hidden">
      {/* Infographic background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/generated/infographic-network.png"
          alt=""
          fill
          className="object-cover mix-blend-screen pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020c07] via-transparent to-[#020c07]" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-15 z-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left — copy */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-blue-400/70">
              For Enterprises, Investors and Operators
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extralight tracking-tight text-white leading-[1.1]">
              Running a multi-vertical
              <br />
              business or investment fund?
              <br />
              <span className="text-blue-400">We have your data.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/50">
              Bloomberg sells equities data. Lightstone sells residential. TransUnion sells
              credit. Nobody sells forward-looking, cross-vertical, ground-truth buying intent
              for South Africa &mdash; until now. Subscribe to Visio Intelligence to see what
              is about to happen across twelve SA verticals, not just what already did.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-start gap-2.5 text-[14px] text-white/60">
                <span className="font-mono text-blue-400/70 shrink-0">→</span>
                <span>
                  <strong className="text-white/80">For corporates:</strong> reallocate
                  marketing spend toward higher-intent regions and verticals. Cross-vertical
                  signal arbitrage that no single-vertical player can see.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] text-white/60">
                <span className="font-mono text-blue-400/70 shrink-0">→</span>
                <span>
                  <strong className="text-white/80">For investors:</strong> twelve verticals,
                  twelve VRL papers, twelve forward-looking signal feeds. Spot demand
                  formation 30&ndash;90 days before it shows up in published indices.
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] text-white/60">
                <span className="font-mono text-blue-400/70 shrink-0">→</span>
                <span>
                  <strong className="text-white/80">For everyone:</strong> published
                  methodology, k-anonymity protected, POPIA compliant. Every figure flagged.
                </span>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/papers"
                className="inline-flex items-center gap-2 border border-blue-500/40 bg-blue-500/[0.08] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-400 hover:bg-blue-500/[0.15] transition-colors"
              >
                See the Twelve Papers
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/modes"
                className="inline-flex items-center gap-2 border border-white/[0.1] bg-white/[0.02] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 hover:bg-white/[0.06] hover:text-white transition-colors"
              >
                Pick a Mode
              </Link>
            </div>
          </div>

          {/* Right — key stats card */}
          <div className="border border-white/[0.08] bg-white/[0.02] p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-400/60">
              The SA economy, right now
            </span>
            <h3 className="mt-2 text-[16px] font-medium text-white/85">
              Twelve verticals at a glance
            </h3>

            <div className="mt-6 space-y-5">
              <Stat
                headline="R57bn"
                subline="Two-Pot Retirement withdrawals by June 2025 — fueling bond, debt, and home buyer leads"
              />
              <Stat
                headline="9.3% + 7.9%"
                subline="Discovery medical aid hikes 2025 + April 2026 — switching window for medical brokers"
              />
              <Stat
                headline="629 brokers"
                subline="FSCA-registered short-term insurance brokers in Gauteng alone"
              />
              <Stat
                headline="R580M"
                subline="Combined Year-5 ARR thesis across all twelve VRL papers"
              />
            </div>

            <p className="mt-8 font-mono text-[10px] text-white/25 leading-relaxed">
              Sources: Moonstone Information Refinery · SARS Two-Pot statistics · Rentech
              Digital broker registry · Visio Research Labs Forward-Looking Assumptions
              addendum.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ headline, subline }: { headline: string; subline: string }) {
  return (
    <div className="border-l-[2px] border-l-blue-500/30 pl-4">
      <div className="font-mono text-xl font-extralight text-blue-400">{headline}</div>
      <p className="text-[12px] text-white/45 mt-0.5 leading-snug">{subline}</p>
    </div>
  );
}
