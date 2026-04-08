"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { MODE_LIST, type ModeConfig } from "@/lib/modes";

/**
 * Suite Grid — the 12 Visio Lead Gen vertical modes as cards.
 *
 * Replaces the old 6-Auto-product grid. Each card links to the underlying
 * VRL paper. Pulls from src/lib/modes.ts so it stays in sync with the rest
 * of the platform.
 */

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// Lead Gen Flow 2.0 home shows the 12 Lead Gen verticals (auto is the sibling product)
const LEADGEN_MODES = MODE_LIST.filter((m) => m.id !== "auto");

const PAPER_SLUG: Record<string, string> = {
  bond: "visio-bond",
  insurance: "visio-shield",
  solar: "visio-solar",
  debt: "visio-debt",
  medical: "visio-med",
  cosmetic: "visio-aesthetic",
  immigration: "visio-visa",
  schools: "visio-schools",
  realty: "visio-realty",
  commercial: "visio-estate",
  commerce: "visio-commerce",
  coach: "visio-coach",
};

const PAPER_NUMBER: Record<string, string> = {
  bond: "VRL-LEADGEN-001",
  insurance: "VRL-LEADGEN-002",
  solar: "VRL-LEADGEN-003",
  debt: "VRL-LEADGEN-004",
  medical: "VRL-LEADGEN-005",
  cosmetic: "VRL-LEADGEN-006",
  immigration: "VRL-LEADGEN-007",
  schools: "VRL-LEADGEN-008",
  commercial: "VRL-LEADGEN-009",
  realty: "VRL-LEADGEN-010",
  commerce: "VRL-LEADGEN-011",
  coach: "VRL-LEADGEN-012",
};

export default function HomeSuiteGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section id="suite" className="relative py-32 bg-[#020a1a]">
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
            The Twelve Verticals
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extralight tracking-tight text-white max-w-3xl leading-[1.1]">
            Twelve verticals.
            <br />
            <span className="text-blue-400">One platform.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/50 max-w-xl">
            Each vertical solves one piece of the South African lead-gen problem &mdash; from
            bond originators to coaches. Together they cover almost every paying customer
            journey in the SA economy. Backed by twelve full Visio Research Labs papers.
          </p>
        </motion.div>

        {/* Grid — 12 verticals */}
        <div ref={ref} className="mt-16 grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-white/[0.04] border border-white/[0.06]">
          {LEADGEN_MODES.map((mode, i) => (
            <ModeCard key={mode.id} mode={mode} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            href="/papers"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-blue-400 transition-colors"
          >
            Read all twelve Visio Research Labs papers →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ModeCard({
  mode,
  index,
  isInView,
}: {
  mode: ModeConfig;
  index: number;
  isInView: boolean;
}) {
  const slug = PAPER_SLUG[mode.id] ?? "";
  const paperNumber = PAPER_NUMBER[mode.id] ?? "";

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-[#020a1a] p-7 hover:bg-white/[0.02] transition-colors group flex flex-col"
    >
      {/* Top row: paper number + emoji */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: mode.color }}
        >
          {paperNumber}
        </span>
        <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">
          {mode.emoji}
        </span>
      </div>

      {/* Name + tagline */}
      <h3 className="text-[16px] font-medium text-white/90">{mode.name}</h3>
      <p className="mt-2 text-[12px] leading-relaxed text-white/50 flex-1">
        {mode.tagline}
      </p>

      {/* Price strip */}
      <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
            Per lead
          </p>
          <p className="font-mono text-[11px] text-white/70 mt-0.5">
            R{mode.leadPrice.low}–R{mode.leadPrice.high.toLocaleString()}
          </p>
        </div>
        <Link
          href={`/papers/${slug}`}
          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-blue-400/80 hover:text-blue-400 transition-colors"
        >
          Read Paper
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}
