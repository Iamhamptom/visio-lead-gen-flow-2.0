import Link from "next/link";
import { MODE_LIST, type ModeConfig } from "@/lib/modes";

export const metadata = {
  title: "Pick a Mode — Visio Lead Gen",
  description:
    "Ten verticals, one platform. Pick your industry and Visio Lead Gen reskins around you — signals, leads, pricing, and the Jess agent all adapt.",
};

/**
 * /modes — the mode selector.
 *
 * Visio Lead Gen is the multi-vertical parent brand. Every feature, signal,
 * and paper is scoped to a vertical "mode". The user picks once, the platform
 * remembers. The mode is stored as a cookie by the ModePicker client form
 * and read by every downstream page.
 *
 * This page is the entry point for a new visitor: it shows all ten verticals,
 * their hero copy, the current per-lead price band, and the underlying VRL
 * paper number so they know the research is real.
 */
export default function ModesPage() {
  return (
    <div className="min-h-screen bg-[#030f0a] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
          Visio Lead Gen · The Multi-Vertical AI Lead Engine
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extralight tracking-tight">
          Ten verticals. <span className="text-white/50">One platform.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-extralight text-white/70 leading-relaxed">
          Pick a mode and Visio Lead Gen reskins around you. The signal engine,
          the lead marketplace, the pricing, the Jess agent — all adapt to your
          industry. Every mode is backed by a full Visio Research Labs paper.
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODE_LIST.map((mode) => (
            <ModeCard key={mode.id} mode={mode} />
          ))}
        </div>
      </section>

      {/* Footer legal */}
      <section className="mx-auto max-w-6xl px-6 pb-16 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30">
          POPIA compliant · FSCA / NCR / CMS / HPCSA / DHA aware · Visio Honesty Protocol
        </p>
      </section>
    </div>
  );
}

function ModeCard({ mode }: { mode: ModeConfig }) {
  const paperNumber = paperNumberFor(mode.id);
  return (
    <Link
      href={`/modes/${mode.id}`}
      className="group relative flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/25 hover:bg-white/[0.04]"
    >
      <div
        className="absolute left-0 top-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: mode.color }}
      />

      <div className="flex items-start justify-between">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: mode.color }}
        >
          {paperNumber}
        </span>
        <span className="text-2xl opacity-70 group-hover:opacity-100">{mode.emoji}</span>
      </div>

      <h3 className="mt-6 text-xl font-extralight tracking-tight text-white">
        {mode.name}
      </h3>
      <p className="mt-2 text-sm font-extralight text-white/60 leading-relaxed">
        {mode.tagline}
      </p>

      <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
            Per lead
          </p>
          <p className="mt-1 text-sm text-white/80">
            R{mode.leadPrice.low}–R{mode.leadPrice.high.toLocaleString()}
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
            Min order
          </p>
          <p className="mt-1 text-sm text-white/80">{mode.minOrder}</p>
        </div>
      </div>
    </Link>
  );
}

function paperNumberFor(id: string): string {
  const map: Record<string, string> = {
    auto: "VRL-AUTO-001",
    bond: "VRL-LEADGEN-001",
    insurance: "VRL-LEADGEN-002",
    solar: "VRL-LEADGEN-003",
    debt: "VRL-LEADGEN-004",
    medical: "VRL-LEADGEN-005",
    cosmetic: "VRL-LEADGEN-006",
    immigration: "VRL-LEADGEN-007",
    schools: "VRL-LEADGEN-008",
    commercial: "VRL-LEADGEN-009",
  };
  return map[id] ?? "VRL-LEADGEN-???";
}
