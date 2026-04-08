"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * World-class hero.
 *
 * One headline. Twelve named verticals as pills. Two CTAs.
 * Four verified stats. No imagery. No "any vertical" hand-waving.
 */

const STATS = [
  { value: "12", label: "Verticals" },
  { value: "84+", label: "Intent Signals" },
  { value: "<30s", label: "WhatsApp Delivery" },
  { value: "POPIA", label: "Compliant" },
];

// The twelve verticals — short labels for the hero pill row.
// Each pill links to its own VRL paper.
const VERTICAL_PILLS = [
  { label: "Bond", emoji: "🏠", href: "/papers/visio-bond", color: "#3b82f6" },
  { label: "Insurance", emoji: "🛡️", href: "/papers/visio-shield", color: "#8b5cf6" },
  { label: "Solar", emoji: "☀️", href: "/papers/visio-solar", color: "#eab308" },
  { label: "Debt", emoji: "⚖️", href: "/papers/visio-debt", color: "#ef4444" },
  { label: "Medical", emoji: "🏥", href: "/papers/visio-med", color: "#06b6d4" },
  { label: "Aesthetic", emoji: "💎", href: "/papers/visio-aesthetic", color: "#ec4899" },
  { label: "Visa", emoji: "🛂", href: "/papers/visio-visa", color: "#f97316" },
  { label: "Schools", emoji: "🎓", href: "/papers/visio-schools", color: "#14b8a6" },
  { label: "Commercial", emoji: "🏢", href: "/papers/visio-estate", color: "#64748b" },
  { label: "Realty", emoji: "🏡", href: "/papers/visio-realty", color: "#10b981" },
  { label: "Commerce", emoji: "🛒", href: "/papers/visio-commerce", color: "#f59e0b" },
  { label: "Coach", emoji: "🎯", href: "/papers/visio-coach", color: "#a855f7" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function HomeHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#03091a] flex items-center">
      {/* Background — pure gradient + grid, no imagery */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_right,rgba(59,130,246,0.10)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,rgba(59,130,246,0.06)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03091a] via-transparent to-transparent" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08)_0%,transparent_60%)] z-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 w-full">
        {/* Eyebrow */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-blue-400/70 border border-blue-500/25 bg-blue-500/[0.04] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            Visio Lead Gen Flow 2.0 · Twelve Verticals · South Africa
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-extralight leading-[1.02] tracking-[-0.02em] text-white max-w-5xl"
        >
          Warm leads.
          <br />
          Twelve verticals.
          <br />
          <span className="text-blue-400">Delivered.</span>
        </motion.h1>

        {/* The twelve verticals — explicit pills, not "any vertical" hand-waving */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap gap-2 max-w-3xl"
        >
          {VERTICAL_PILLS.map((v) => (
            <Link
              key={v.label}
              href={v.href}
              className="group inline-flex items-center gap-1.5 border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 transition-colors hover:bg-white/[0.06]"
              style={{
                borderColor: `${v.color}33`,
              }}
            >
              <span className="text-[13px]" aria-hidden="true">
                {v.emoji}
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.18em] transition-colors"
                style={{ color: v.color }}
              >
                {v.label}
              </span>
            </Link>
          ))}
        </motion.div>

        {/* Subheadline */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-[17px] md:text-[18px] leading-relaxed text-white/55 max-w-2xl"
        >
          The multi-vertical AI lead engine for South Africa. Pick a mode and Visio Lead Gen
          reskins around you &mdash; signals → qualify → book → deliver, backed by twelve full
          Visio Research Labs papers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
        >
          <Link
            href="/modes"
            className="inline-flex items-center gap-2.5 bg-blue-500 hover:bg-blue-400 px-8 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-[#03091a] font-medium transition-colors"
          >
            Pick a Mode
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/papers"
            className="inline-flex items-center gap-2.5 border border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.06] px-8 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors"
          >
            Read the Research
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-2 md:grid-cols-4 border border-white/[0.06] divide-x divide-y md:divide-y-0 divide-white/[0.06] max-w-3xl"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white/[0.02] px-5 py-5 text-center">
              <div className="font-mono text-2xl md:text-3xl font-extralight text-blue-400">
                {stat.value}
              </div>
              <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/40 mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Small print */}
        <motion.p
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/25"
        >
          No credit card · Twelve verticals · POPIA compliant · Backed by 12 VRL papers
        </motion.p>
      </div>
    </section>
  );
}
