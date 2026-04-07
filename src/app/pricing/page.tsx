import Link from "next/link";
import { MODE_LIST, type ModeConfig } from "@/lib/modes";

export const metadata = {
  title: "Pricing — Visio Lead Gen",
  description:
    "Twelve verticals, twelve pricing bands. Bond originators, insurance brokers, solar installers, debt counsellors, medical aid brokers, cosmetic clinics, immigration lawyers, schools, commercial property brokers, residential estate agents, e-commerce merchants, and coaches. Price per lead, panel subscription, minimum order — all transparent.",
};

/**
 * Pricing page — Visio Lead Gen
 *
 * One pricing sheet per vertical. Data sourced from src/lib/modes.ts so the
 * pricing page stays in sync with the mode system automatically. Never
 * hardcode lead prices here — always pull from the modes config.
 *
 * Every row links to its own paper (/papers/visio-{slug}) so that a prospective
 * buyer can audit the underlying research before committing to a pricing
 * conversation.
 */

const LEADGEN_MODES = MODE_LIST.filter((m) => m.id !== "auto");

// Minimum honest Y5 ARR projection per vertical, pulled from the VRL papers.
// These are the Year-5 steady-state targets after the Estate/Shield correction.
const ARR_Y5: Record<string, string> = {
  bond: "R72M",
  insurance: "R45M",
  solar: "R60M",
  debt: "R50M",
  medical: "R55M",
  cosmetic: "R45M",
  immigration: "R50M",
  schools: "R40M",
  realty: "R55M",
  commercial: "R30M",
  commerce: "R50M",
  coach: "R28M",
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
  realty: "VRL-LEADGEN-010",
  commercial: "VRL-LEADGEN-009",
  commerce: "VRL-LEADGEN-011",
  coach: "VRL-LEADGEN-012",
};

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

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#030f0a] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
          Visio Lead Gen · Pricing · April 2026
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extralight tracking-tight">
          Twelve verticals. <span className="text-white/50">Twelve pricing bands.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-extralight text-white/70 leading-relaxed">
          Every vertical has its own unit economics. Bond leads are worth more than
          fitness-coaching leads; commercial-property leads are rarer than e-commerce leads.
          This page shows the honest per-lead band, panel subscription, and minimum order
          for each of the twelve verticals — pulled directly from the Visio Research Labs
          paper set. No hidden fees, no variable platform cut, no surprise tiers.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/modes"
            className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-extralight text-white/80 hover:border-white/40 hover:bg-white/10"
          >
            Pick a mode →
          </Link>
          <Link
            href="/papers"
            className="rounded-md border border-white/10 px-4 py-2 text-sm font-extralight text-white/60 hover:border-white/25 hover:text-white/80"
          >
            Read the research →
          </Link>
        </div>
      </section>

      {/* Honest pricing philosophy */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PhilosophyCard
            label="Per-lead pricing"
            body="Pay only for qualified, heat-scored, consent-gated leads. Green grade delivered in real time; Amber enters nurture; Red held for the next window."
          />
          <PhilosophyCard
            label="Panel subscription"
            body="Monthly flat fee for panel inclusion, intent dashboard, signal alerts, and category-level analytics. Predictable base cost on top of variable lead fees."
          />
          <PhilosophyCard
            label="Minimum order"
            body="Every vertical has a minimum first order to ensure you see enough volume to evaluate quality. No lock-in; cancel any time after the first batch."
          />
        </div>
      </section>

      {/* Vertical pricing table */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              The twelve-vertical sheet
            </p>
            <h2 className="mt-2 text-2xl font-extralight tracking-tight">
              Every vertical, every price, every minimum
            </h2>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30">
            R580M combined Y5 thesis
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {LEADGEN_MODES.map((mode) => (
            <VerticalPricingRow key={mode.id} mode={mode} />
          ))}
        </div>
      </section>

      {/* Forward-Looking Assumptions callout */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
            Visio Honesty Protocol · Forward-Looking Assumptions
          </p>
          <h3 className="mt-3 text-xl font-extralight tracking-tight text-white">
            The ARR numbers are Year-5 steady-state projections, not Year-1 run-rates.
          </h3>
          <p className="mt-4 max-w-3xl text-sm font-extralight text-white/60 leading-relaxed">
            Every vertical&apos;s combined ARR figure represents a 3–5 year ramp from launch.
            Year 1 realistic is approximately 10–15% of the Year-5 steady-state (~R70M combined
            across all twelve verticals). Year 3 is approximately 50% (~R290M combined). Year 5
            steady-state is ~R580M. The full ramp schedule, sanity-check math, and the
            independent government, banking, and consultancy cross-references underlying every
            number are in the Visio Research Labs Forward-Looking Assumptions addendum.
          </p>
          <div className="mt-6">
            <Link
              href="/papers"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-extralight text-white/70 hover:border-white/30 hover:text-white"
            >
              Read the addendum → research/_VRL-FORWARD-LOOKING-ASSUMPTIONS-AND-SOURCES.md
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400/70">
            Ready to start
          </p>
          <h3 className="mt-3 text-2xl font-extralight tracking-tight text-white">
            Every vertical is a conversation. Let&apos;s have yours.
          </h3>
          <p className="mt-4 max-w-2xl text-sm font-extralight text-white/60 leading-relaxed">
            The per-lead prices above are the published starting bands. Actual pricing
            depends on your vertical, expected volume, category focus, and whether you want
            exclusivity in your sub-market. Book a call and we&apos;ll price your exact
            configuration.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/get-started"
              className="rounded-md bg-emerald-500 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[#030f0a] hover:bg-emerald-400"
            >
              Start a conversation →
            </Link>
            <Link
              href="/modes"
              className="rounded-md border border-white/15 bg-white/[0.03] px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-white/70 hover:border-white/30 hover:text-white"
            >
              Pick your mode first
            </Link>
          </div>
        </div>
      </section>

      {/* Footer legal */}
      <section className="mx-auto max-w-6xl px-6 pb-16 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30">
          POPIA compliant · FSCA / NCR / CMS / HPCSA / DHA / EAAB aware · Visio Honesty Protocol
        </p>
      </section>
    </div>
  );
}

function PhilosophyCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</p>
      <p className="mt-3 text-sm font-extralight text-white/70 leading-relaxed">{body}</p>
    </div>
  );
}

function VerticalPricingRow({ mode }: { mode: ModeConfig }) {
  const arr = ARR_Y5[mode.id] ?? "—";
  const paperNumber = PAPER_NUMBER[mode.id] ?? "—";
  const paperSlug = PAPER_SLUG[mode.id] ?? "";

  return (
    <Link
      href={`/papers/${paperSlug}`}
      className="group relative grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/25 hover:bg-white/[0.04] md:grid-cols-[auto_1fr_auto_auto_auto_auto]"
    >
      <div
        className="absolute left-0 top-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: mode.color }}
      />

      {/* Icon + paper number */}
      <div className="flex items-center gap-3 md:min-w-[180px]">
        <span className="text-2xl">{mode.emoji}</span>
        <div>
          <p
            className="font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ color: mode.color }}
          >
            {paperNumber}
          </p>
          <p className="mt-1 text-sm font-extralight tracking-tight text-white">
            {mode.name}
          </p>
        </div>
      </div>

      {/* Tagline */}
      <div className="hidden md:block md:pl-6">
        <p className="text-xs font-extralight text-white/50 leading-relaxed line-clamp-2">
          {mode.tagline}
        </p>
      </div>

      {/* Per-lead price */}
      <div className="text-left md:text-right md:min-w-[110px]">
        <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
          Per lead
        </p>
        <p className="mt-1 text-sm font-extralight text-white/90">
          R{mode.leadPrice.low}–R{mode.leadPrice.high.toLocaleString()}
        </p>
      </div>

      {/* Minimum order */}
      <div className="text-left md:text-right md:min-w-[90px]">
        <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
          Min order
        </p>
        <p className="mt-1 text-sm font-extralight text-white/90">{mode.minOrder}</p>
      </div>

      {/* CPC range */}
      <div className="text-left md:text-right md:min-w-[110px]">
        <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
          CPC proxy
        </p>
        <p className="mt-1 text-sm font-extralight text-white/70">{mode.cpcRange}</p>
      </div>

      {/* Y5 ARR */}
      <div className="text-left md:text-right md:min-w-[90px]">
        <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
          Y5 ARR
        </p>
        <p className="mt-1 text-sm font-extralight" style={{ color: mode.color }}>
          {arr}
        </p>
      </div>
    </Link>
  );
}
