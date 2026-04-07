import Link from "next/link";

export const metadata = {
  title: "Visio Research Labs — Papers | Visio Lead Gen",
  description:
    "Twelve grounded market intelligence papers covering South Africa's most lead-hungry verticals: bond originators, short-term insurance, solar, debt review, medical aid, cosmetic, immigration, private schools, commercial property, residential real estate, e-commerce, and coaches. All sourced. Nothing fabricated.",
};

/**
 * Visio Research Labs — Paper Gallery
 *
 * The /papers index surfaces two paper series:
 *
 *   1. Visio Lead Gen (VRL-LEADGEN-001 to 012) — the 12-vertical stack that
 *      underpins the Visio Lead Gen parent brand.
 *   2. Visio Auto (VRL-AUTO-*) — the original 7-paper series underlying the
 *      Visio Auto sibling product, kept in the repo as reference for template
 *      depth and cross-product signal sharing.
 *
 * Every paper is backed by a matching research MD in /research/ and every
 * figure is flagged against the Visio Honesty Protocol.
 */

interface Paper {
  number: string;
  slug: string;
  category: string;
  title: string;
  hook: string;
  arr?: string;
  accent: string;
  series: "leadgen" | "auto";
}

const papers: Paper[] = [
  // --- Visio Lead Gen series (VRL-LEADGEN-001 to 012) ---
  {
    number: "VRL-LEADGEN-001",
    slug: "visio-bond",
    category: "Visio Bond",
    title: "A neutral cross-bank home-loan signal layer for South Africa.",
    hook: "Two-Pot R57bn + SARB 150bps cut + first-time buyer share at a 10-year high. The fattest origination window since 2021.",
    arr: "R72M Y5",
    accent: "#3b82f6",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-002",
    slug: "visio-shield",
    category: "Visio Shield",
    title: "A neutral multi-underwriter short-term insurance signal layer for South Africa.",
    hook: "629 FSCA-registered brokers in Gauteng alone — the densest short-term insurance broker population on the continent.",
    arr: "R45M Y5",
    accent: "#8b5cf6",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-003",
    slug: "visio-solar",
    category: "Visio Solar",
    title: "A neutral C&I + residential solar intent signal layer for South Africa.",
    hook: "SAPVIA September 2025: C&I SSEG is the strongest-performing segment. Section 12B + Eskom tariff hikes drive the payback story.",
    arr: "R60M Y5",
    accent: "#eab308",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-004",
    slug: "visio-debt",
    category: "Visio Debt",
    title: "A neutral debt review signal layer for South Africa's over-indebted households.",
    hook: "R57bn Two-Pot withdrawn, 79% repeat-withdrawal intent, 40% of credit-active SA in default. The debt conversation is open.",
    arr: "R50M Y5",
    accent: "#ef4444",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-005",
    slug: "visio-med",
    category: "Visio Med",
    title: "A neutral medical scheme + gap cover signal layer for South Africa.",
    hook: "Discovery 9.3% 2025 + 7.9% delayed to April 2026 = the first permanently open switching window in a decade.",
    arr: "R55M Y5",
    accent: "#06b6d4",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-006",
    slug: "visio-aesthetic",
    category: "Visio Aesthetic",
    title: "A cash-pay aesthetic procedure intent signal layer for South Africa.",
    hook: "50+ clinics in Sandton alone, R2k–R250k ticket spectrum, frictionless cash-pay economics, and a calendar-driven demand curve.",
    arr: "R45M Y5",
    accent: "#ec4899",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-007",
    slug: "visio-visa",
    category: "Visio Visa",
    title: "A neutral dual-flow immigration intent signal layer for South Africa.",
    hook: "Outbound emigration + inbound critical skills + the DHA eVisa digital rollout + the 2025/2026 Critical Skills list refresh.",
    arr: "R50M Y5",
    accent: "#f97316",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-008",
    slug: "visio-schools",
    category: "Visio Schools",
    title: "A neutral private-school enrolment signal layer for South Africa.",
    hook: "ADvTECH + Curro + SPARK + Reddam intake funnels, four distinct fee bands, January intake cycle with 4–8 month lead time.",
    arr: "R40M Y5",
    accent: "#14b8a6",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-009",
    slug: "visio-estate",
    category: "Visio Estate",
    title: "A neutral commercial property tenant + investor signal layer for South Africa.",
    hook: "Office return + Ekurhuleni warehousing + REIT capital recycling. A Bloomberg-style intelligence layer, not a mass-market lead engine.",
    arr: "R30M Y5",
    accent: "#64748b",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-010",
    slug: "visio-realty",
    category: "Visio Realty",
    title: "A neutral residential real estate signal layer for South Africa.",
    hook: "Pam Golding + Seeff + RE/MAX + Chas Everitt. Two-Pot deposit detection closes the loop with Visio Bond.",
    arr: "R55M Y5",
    accent: "#10b981",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-011",
    slug: "visio-commerce",
    category: "Visio Commerce",
    title: "A neutral e-commerce buying-intent signal layer for South Africa.",
    hook: "Amazon SA launched May 2024 + Takealot dominance + Checkers Sixty60 + Shopify Plus long tail. No single platform owns the buyer any more.",
    arr: "R50M Y5",
    accent: "#f59e0b",
    series: "leadgen",
  },
  {
    number: "VRL-LEADGEN-012",
    slug: "visio-coach",
    category: "Visio Coach",
    title: "A neutral discovery layer for South Africa's coaches, trainers, and online experts.",
    hook: "COMENSA + ICF + REPSSA — a thin, under-documented market with a genuine discovery problem. Deliberately modest target, deliberately safety-routed.",
    arr: "R28M Y5",
    accent: "#a855f7",
    series: "leadgen",
  },

  // --- Visio Auto series (reference / sibling product) ---
  {
    number: "VRL-AUTO-001",
    slug: "suite-overview",
    category: "Suite Overview",
    title: "The Visio Auto Suite: a six-product operating system for SA dealerships.",
    hook: "The original sibling product. Six-product operating system, R237M ARR steady-state target. Reference depth for the Lead Gen series.",
    accent: "#22c55e",
    series: "auto",
  },
  {
    number: "VRL-AUTO-002",
    slug: "intelligence-vol-1",
    category: "Visio Intelligence",
    title: "Q1 2026 SA automotive market intelligence, volume 1.",
    hook: "The benchmark intelligence volume — 596,818 units, 15.7% YoY, Toyota Hilux 13 straight.",
    accent: "#22c55e",
    series: "auto",
  },
  {
    number: "VRL-AUTO-003",
    slug: "african-luxury-mobility",
    category: "African Luxury",
    title: "UHNW African luxury mobility — Lagos to Abidjan.",
    hook: "7-city concierge thesis, bonded escrow, RoRo logistics, seven-language broker network.",
    accent: "#22c55e",
    series: "auto",
  },
  {
    number: "VRL-AUTO-004",
    slug: "visio-approve",
    category: "Visio Approve",
    title: "A neutral multi-bank vehicle finance pre-approval layer for South Africa.",
    hook: "90-second Green/Amber/Red affordability in the NCA §40 + FAIS §1 legal gap. R54M ARR.",
    accent: "#22c55e",
    series: "auto",
  },
  {
    number: "VRL-AUTO-005",
    slug: "visio-inspect",
    category: "Visio Inspect",
    title: "Smartphone-grade AI vehicle inspection.",
    hook: "Computer-vision paint, panel, and tyre scoring at smartphone capture quality.",
    accent: "#22c55e",
    series: "auto",
  },
  {
    number: "VRL-AUTO-006",
    slug: "visio-bdc",
    category: "Visio BDC",
    title: "A WhatsApp-native business development centre for SA dealers.",
    hook: "The first WhatsApp-first dealership BDC in SA, inbound and outbound.",
    accent: "#22c55e",
    series: "auto",
  },
  {
    number: "VRL-AUTO-007",
    slug: "visio-intent",
    category: "Visio Intent",
    title: "K-anonymity-protected buying intent signals.",
    hook: "Privacy-preserving buyer intent inference. POPIA-native, bank-grade.",
    accent: "#22c55e",
    series: "auto",
  },
  {
    number: "VRL-AUTO-008",
    slug: "visio-open-finance",
    category: "Visio Open Finance",
    title: "Bank-statement-driven vehicle finance affordability.",
    hook: "Truid / Stitch-powered open finance affordability without a bureau pull.",
    accent: "#22c55e",
    series: "auto",
  },
  {
    number: "VRL-AUTO-009",
    slug: "visio-trust",
    category: "Visio Trust",
    title: "An asset-light stock velocity operating system for SA dealerships.",
    hook: "Stock velocity as the dealer KPI, not gross profit per unit.",
    accent: "#22c55e",
    series: "auto",
  },
  {
    number: "VRL-AUTO-010",
    slug: "security",
    category: "VRL Security",
    title: "Security architecture and threat model for the Visio Auto suite.",
    hook: "The full security posture underlying the Visio Auto production stack.",
    accent: "#22c55e",
    series: "auto",
  },
];

const leadgenPapers = papers.filter((p) => p.series === "leadgen");
const autoPapers = papers.filter((p) => p.series === "auto");

export default function PapersIndexPage() {
  return (
    <div className="min-h-screen bg-[#030f0a] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
          Visio Research Labs · Grounded Market Intelligence
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extralight tracking-tight">
          Twelve papers. <span className="text-white/50">Twelve verticals.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-extralight text-white/70 leading-relaxed">
          Every Visio Lead Gen vertical is backed by a full Visio Research Labs paper. Every
          figure is sourced. Every unverifiable number is flagged. The combined steady-state
          thesis across the twelve papers is <strong className="text-white">R580M ARR at
          Year 5</strong> &mdash; and we tell you exactly how that number is built in the
          Forward-Looking Assumptions addendum.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/modes"
            className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-extralight text-white/80 hover:border-white/40 hover:bg-white/10"
          >
            Pick a mode →
          </Link>
          <Link
            href="/research"
            className="rounded-md border border-white/10 px-4 py-2 text-sm font-extralight text-white/60 hover:border-white/25 hover:text-white/80"
          >
            Forward-Looking Assumptions addendum →
          </Link>
        </div>
      </section>

      {/* Lead Gen series */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              Series 1 · Visio Lead Gen
            </p>
            <h2 className="mt-2 text-2xl font-extralight tracking-tight">
              The 12-vertical signal stack
            </h2>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30">
            R580M combined Y5 target
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadgenPapers.map((p) => (
            <PaperCard key={p.number} paper={p} />
          ))}
        </div>
      </section>

      {/* Auto series (reference) */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              Series 2 · Visio Auto (sibling product, reference)
            </p>
            <h2 className="mt-2 text-2xl font-extralight tracking-tight">
              The Visio Auto paper stack
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {autoPapers.map((p) => (
            <PaperCard key={p.number} paper={p} />
          ))}
        </div>
      </section>

      {/* Honesty footer */}
      <section className="mx-auto max-w-6xl px-6 pb-16 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30">
          Visio Honesty Protocol · All sources public · No figures fabricated · Verification gaps flagged explicitly
        </p>
      </section>
    </div>
  );
}

function PaperCard({ paper }: { paper: Paper }) {
  return (
    <Link
      href={`/papers/${paper.slug}`}
      className="group relative flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/25 hover:bg-white/[0.04]"
    >
      <div
        className="absolute left-0 top-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: paper.accent }}
      />

      <div className="flex items-start justify-between gap-4">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: paper.accent }}
        >
          {paper.number}
        </span>
        {paper.arr && (
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
            {paper.arr}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-sm font-mono uppercase tracking-[0.15em] text-white/50">
        {paper.category}
      </h3>
      <p className="mt-3 text-lg font-extralight leading-snug tracking-tight text-white">
        {paper.title}
      </p>
      <p className="mt-3 text-sm font-extralight text-white/60 leading-relaxed flex-1">
        {paper.hook}
      </p>

      <div className="mt-5 border-t border-white/10 pt-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 group-hover:text-white/70">
          Read paper →
        </span>
      </div>
    </Link>
  );
}
