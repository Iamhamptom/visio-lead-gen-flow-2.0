"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Radar, Target, Users, MessageCircle } from "lucide-react";

/**
 * How It Works — 3 steps + the delivery channel.
 *
 * Replaces the old HowItWorks, AgentPlatform, SignalDepth clutter.
 * One clean 4-step horizontal flow. No rounded cards. No gradients.
 */

const STEPS = [
  {
    icon: Radar,
    step: "01",
    title: "Signal Detected",
    description:
      "We monitor 84+ intent signals across twelve verticals — Two-Pot withdrawals, Eskom tariff complaints, medical aid hikes, bond approvals, cart abandonments, lease expiries, CIPC registrations, and more.",
  },
  {
    icon: Target,
    step: "02",
    title: "AI Qualified",
    description:
      "Every prospect scored 0–100 for intent, budget, timeline, and consent. Heat-mapped Green / Amber / Red against your specific vertical&apos;s conversion profile. Only ready-to-buy leads reach you.",
  },
  {
    icon: Users,
    step: "03",
    title: "Panel Matched",
    description:
      "Leads routed to the right member of your accredited panel — by sub-vertical, price band, geography, and buyer profile. The right lead to the right broker, installer, clinic, agent, or coach.",
  },
  {
    icon: MessageCircle,
    step: "04",
    title: "Enriched & Delivered",
    description:
      "Enriched, qualified leads land on your panel with full buyer context, vertical-specific qualification data, source provenance, and AI-written talking points tailored to your mode. Quality over speed — every lead is researched.",
  },
];

export default function HomeHowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="how-it-works" className="relative py-32 bg-[#020c07]">
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
            How it works
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extralight tracking-tight text-white max-w-3xl leading-[1.1]">
            Most businesses guess.
            <br />
            <span className="text-blue-400">The best ones know.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/50 max-w-xl">
            R57bn has flowed out of Two-Pot. Discovery hiked twice in 18 months. Amazon SA
            launched. Eskom tariffs climbed 12.7%. Every vertical has a story. Visio Lead Gen
            reads the signals, qualifies the intent, and delivers the conversation.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-16 grid gap-px md:grid-cols-4 bg-white/[0.04] border border-white/[0.06]"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.step}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
                },
              }}
              className="bg-[#020c07] p-8 hover:bg-white/[0.02] transition-colors group"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-500/40">
                Step {step.step}
              </span>
              <step.icon className="mt-5 h-6 w-6 text-blue-500/50 group-hover:text-blue-400 transition-colors" />
              <h3 className="mt-5 text-[15px] font-medium text-white/85">{step.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/40">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 border-l-[2px] border-l-blue-500/40 pl-5 max-w-2xl"
        >
          <p className="text-[13px] italic text-white/50 leading-relaxed">
            &ldquo;Twelve verticals, one platform. Every Visio Lead Gen mode is backed by a full
            Visio Research Labs paper with honest ramp assumptions and government-tier cross-
            references. R580M combined Year-5 steady-state ARR across the stack.&rdquo;
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400/50">
            Visio Research Labs — VRL-LEADGEN-001 to 012, 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
