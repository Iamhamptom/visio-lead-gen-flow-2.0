"use client";

import { motion } from "framer-motion";

/**
 * By The Numbers — verified stats only, no fake testimonials.
 *
 * Replaces the old SocialProof component. Every number has a basis.
 * When real customer logos/testimonials exist (with permission),
 * they'll live at /customers and get referenced here.
 */

const NUMBERS = [
  {
    value: "12",
    label: "Verticals covered",
    detail: "Bond, insurance, solar, debt, medical, cosmetic, immigration, schools, commercial, residential, e-commerce, coaching.",
  },
  {
    value: "84+",
    label: "Intent signal types tracked",
    detail: "Across financial, household, regulatory, social, and event signals.",
  },
  {
    value: "Enriched",
    label: "Enterprise-grade quality",
    detail: "Every lead researched, sourced, qualified, and consent-gated. Quality over speed.",
  },
  {
    value: "12",
    label: "Visio Research Labs papers",
    detail: "VRL-LEADGEN-001 through 012, one per vertical, sourced and honesty-flagged.",
  },
  {
    value: "POPIA",
    label: "Fully compliant",
    detail: "Information Officer registered. 90-day retention. Published methodology.",
  },
  {
    value: "8",
    label: "VisioCorp ecosystem siblings",
    detail: "Visio Auto, HealthOS, Patient Flow, Doctor OS, VisioCode, VisioPitch, VisioCalls, Workspace.",
  },
];

export default function HomeNumbers() {
  return (
    <section className="relative py-32 bg-[#03091a]">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-blue-400/70">
            By the numbers
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extralight tracking-tight text-white leading-[1.1]">
            Verified. Published.
            <br />
            <span className="text-blue-400">Honest.</span>
          </h2>
          <p className="mt-6 text-[15px] text-white/50 max-w-xl mx-auto leading-relaxed">
            We do not publish fake testimonials or stock-photo customer faces. When real
            panel customers give us permission to share their results, they will live at{" "}
            <a href="/customers" className="text-blue-400/80 hover:text-blue-400 underline underline-offset-4">
              /customers
            </a>
            . Until then, here are the numbers we can prove.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-white/[0.04] border border-white/[0.06]"
        >
          {NUMBERS.map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
                },
              }}
              className="bg-[#03091a] p-8 hover:bg-white/[0.02] transition-colors text-center"
            >
              <div className="font-mono text-3xl md:text-4xl font-extralight text-blue-400">
                {item.value}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
                {item.label}
              </div>
              <p className="mt-3 text-[12px] text-white/35 leading-relaxed max-w-xs mx-auto">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
