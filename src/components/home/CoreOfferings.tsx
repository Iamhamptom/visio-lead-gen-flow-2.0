"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Core Offerings — the three things Visio Lead Gen actually sells.
 *
 * 1. Qualified Leads  → /pricing + /get-started
 * 2. Sales Intelligence → /intelligence + /research
 * 3. The Full Suite     → /#suite + /pricing
 *
 * This is the section that answers the Chairman's brief:
 *   "our main offering is selling qualified leads to customers,
 *    sales up, selling world-class industrial intelligence."
 */

const OFFERINGS = [
  {
    eyebrow: "Qualified Leads",
    title: "Intent-scored leads, delivered to your panel.",
    description:
      "Stop bidding on Google Ads against your direct competitors. Visio Lead Gen watches the signals that predict a purchase across twelve verticals, enriches every prospect with full provenance, and routes the qualified, consent-gated leads to your team on WhatsApp.",
    href: "/pricing",
    ctaLabel: "See the Pricing Sheet",
    image: "/generated/infographic-flow.png",
    imageAlt: "Lead flow visualisation representing warm-lead delivery",
  },
  {
    eyebrow: "Market Intelligence",
    title: "Bloomberg-grade data for twelve SA verticals.",
    description:
      "Forward-looking intent across bond, insurance, solar, debt, medical, cosmetic, immigration, schools, commercial, residential, e-commerce, and coaching. Backed by twelve full Visio Research Labs papers with honest ramp assumptions.",
    href: "/papers",
    ctaLabel: "Read the Research",
    image: "/generated/dashboard.png",
    imageAlt: "Cinematic data dashboard with ambient blue lighting",
  },
  {
    eyebrow: "The Twelve-Vertical Platform",
    title: "One platform. Twelve modes. Pick yours.",
    description:
      "The mode selector reskins Visio Lead Gen around your industry: bond originators, insurance brokers, solar installers, debt counsellors, medical aid brokers, cosmetic clinics, immigration lawyers, schools, commercial property brokers, estate agents, e-commerce merchants, and coaches.",
    href: "/modes",
    ctaLabel: "Pick your Mode",
    image: "/generated/infographic-network.png",
    imageAlt: "Twelve-vertical platform network visualisation",
  },
];

export default function HomeCoreOfferings() {
  return (
    <section id="product" className="relative py-32 bg-[#03091a]">
      <div className="absolute inset-0 bg-dots opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.04)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-blue-400/70">
            What you get
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extralight tracking-tight text-white max-w-3xl leading-[1.1]">
            Three offerings.
            <br />
            <span className="text-blue-400">One platform.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/50 max-w-xl">
            The core of Visio Lead Gen is simple: we sell qualified intent-scored leads to
            businesses in twelve verticals, and Bloomberg-grade market intelligence to the
            operators and investors who fund them. Every vertical is backed by a full Visio
            Research Labs paper.
          </p>
        </motion.div>

        {/* Offerings */}
        <div className="mt-16 space-y-8">
          {OFFERINGS.map((offer, i) => (
            <motion.div
              key={offer.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="group"
            >
              <Link
                href={offer.href}
                className={`grid lg:grid-cols-[1fr_1fr] gap-0 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={offer.image}
                    alt={offer.imageAlt}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#03091a]/80 via-transparent to-[#03091a]/40" />
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-400/70">
                    {offer.eyebrow}
                  </span>
                  <h3 className="mt-4 text-2xl md:text-3xl font-extralight tracking-tight text-white leading-snug">
                    {offer.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-white/50">
                    {offer.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-400/80 group-hover:text-blue-400 transition-colors">
                    {offer.ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
