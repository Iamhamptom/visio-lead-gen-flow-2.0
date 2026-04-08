"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";

/**
 * Research Teaser — 3 featured papers + link to /research.
 *
 * The 10 papers don't all belong on the home page. These 3 anchor
 * the thesis: the market, the method, and the Africa story.
 */

const FEATURED = [
  {
    number: "VRL-LEADGEN-001",
    category: "Bond & Home Loans",
    title: "A Neutral Cross-Bank Home-Loan Signal Layer",
    description:
      "Two-Pot R57bn + SARB 150bps cut + first-time buyer share at a 10-year high. The fattest origination window since 2021. R72M Year-5 ARR target.",
    href: "/papers/visio-bond",
  },
  {
    number: "VRL-LEADGEN-004",
    category: "Debt Review & Two-Pot",
    title: "A Neutral Debt Review Signal Layer",
    description:
      "R57bn withdrawn from Two-Pot. 79% repeat-withdrawal intent. 40% of credit-active SA in default. The largest household stress event in SA history is now a distribution channel.",
    href: "/papers/visio-debt",
  },
  {
    number: "VRL-LEADGEN-009",
    category: "Commercial Property",
    title: "A Bloomberg-Style Tenant + Investor Signal Layer",
    description:
      "Office return + Ekurhuleni warehousing + REIT capital recycling. Low-volume, high-value intelligence layer rather than mass-market lead engine. R30M Year-5 ARR target.",
    href: "/papers/visio-estate",
  },
];

export default function HomeResearchTeaser() {
  return (
    <section className="relative py-32 bg-[#020c07]">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-blue-400/70">
            Research
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extralight tracking-tight text-white max-w-3xl leading-[1.1]">
            Published research.
            <br />
            <span className="text-blue-400">Peer-grade.</span> Free for partners.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/50 max-w-2xl">
            Our work is published under Creative Commons Attribution 4.0. Twelve papers
            covering bond origination, insurance, solar, debt review, medical aid, cosmetic,
            immigration, schools, commercial property, residential, e-commerce, and coaches
            &mdash; one per Visio Lead Gen vertical, all sourced, all honesty-flagged.
          </p>
        </motion.div>

        {/* Featured papers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-16 grid gap-px md:grid-cols-3 bg-white/[0.04] border border-white/[0.06]"
        >
          {FEATURED.map((paper) => (
            <motion.div
              key={paper.number}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
                },
              }}
            >
              <Link
                href={paper.href}
                className="block bg-[#020c07] p-8 hover:bg-white/[0.02] transition-colors group h-full flex flex-col"
              >
                <FileText className="h-5 w-5 text-blue-500/50 mb-5" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-500/50">
                  {paper.category}
                </span>
                <h3 className="mt-3 text-xl font-extralight tracking-tight text-white leading-snug">
                  {paper.title}
                </h3>
                <p className="mt-4 text-[13px] leading-relaxed text-white/40 flex-1">
                  {paper.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-blue-400/60 group-hover:text-blue-400 transition-colors">
                  Read Paper
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/papers"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-400/70 hover:text-blue-400 transition-colors border-b border-blue-500/20 pb-1"
          >
            Read all twelve papers
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
