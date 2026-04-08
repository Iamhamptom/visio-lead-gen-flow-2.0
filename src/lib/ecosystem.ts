/**
 * VisioCorp parent ecosystem — the sibling product registry.
 *
 * Visio Lead Gen Flow 2.0 sits alongside the other VisioCorp platforms:
 *   - Visio Auto (the original, the template, the sibling)
 *   - Visio HealthOps / HealthOS (Netcare-client healthcare OS)
 *   - Patient Flow AI (standalone health product, FlowBot agent)
 *   - Doctor OS (AI clinical copilot)
 *   - VisioCode (AI clinical coding)
 *   - VisioPitch (AI pitch builder)
 *   - VisioCalls (self-hosted AI call centre)
 *   - Visio Workspace (the chairman's cockpit — orchestration layer)
 *
 * This file is the single source of truth for the ecosystem. Referenced by:
 *   - Footer "The Ecosystem" column
 *   - Home "Sibling Products" section
 *   - Jess agent (cross-product routing)
 *
 * All URLs verified against the Visio Workspace memory (April 2026).
 */

export type EcosystemKey =
  | "lead-gen"
  | "auto"
  | "healthos"
  | "patient-flow"
  | "doctor-os"
  | "visiocode"
  | "pitch"
  | "calls"
  | "workspace";

export interface EcosystemProduct {
  key: EcosystemKey;
  name: string;
  shortName: string;
  tagline: string;
  domain: string; // vertical domain (lead-gen / auto / health / sales / ops)
  liveUrl: string;
  status: "live" | "preview" | "internal";
  // How this Lead Gen Flow 2.0 vertical set intersects with the sibling product
  integrationNote?: string;
}

export const ECOSYSTEM: readonly EcosystemProduct[] = [
  {
    key: "lead-gen",
    name: "Visio Lead Gen Flow 2.0",
    shortName: "Lead Gen Flow",
    tagline: "Twelve verticals. One AI lead engine.",
    domain: "lead-gen",
    liveUrl: "https://visio-lead-gen-v2.vercel.app",
    status: "live",
    integrationNote:
      "The multi-vertical parent brand. Twelve modes, twelve VRL papers, one platform.",
  },
  {
    key: "auto",
    name: "Visio Auto",
    shortName: "Visio Auto",
    tagline: "Six-product OS for SA car dealerships.",
    domain: "auto",
    liveUrl: "https://visio-auto.vercel.app",
    status: "live",
    integrationNote:
      "The sibling product. Visio Lead Gen Flow 2.0 was cloned from Visio Auto's design system, component library, and Jess agent SDK. Cross-reference: VRL-AUTO-001 to 010 and VRL-LEADGEN-001 to 012 share a common honesty protocol.",
  },
  {
    key: "healthos",
    name: "Visio HealthOps",
    shortName: "HealthOS",
    tagline: "Enterprise AI healthcare operating system.",
    domain: "health",
    liveUrl: "https://healthos.visiocorp.co",
    status: "live",
    integrationNote:
      "Healthcare sibling. Visio Med (VRL-LEADGEN-005) and Visio Aesthetic (VRL-LEADGEN-006) route qualified leads into HealthOS booking workflows via FHIR-compliant integration. Netcare is the flagship deployment.",
  },
  {
    key: "patient-flow",
    name: "Patient Flow AI",
    shortName: "Patient Flow",
    tagline: "No-show prediction + WhatsApp booking for SA clinics.",
    domain: "health",
    liveUrl: "https://patient-flow-ai.vercel.app",
    status: "live",
    integrationNote:
      "The Flow module ancestor. Visio Lead Gen Flow 2.0 inherits the Patient Flow WhatsApp booking pattern and no-show prediction model for its health-adjacent verticals (Med, Aesthetic).",
  },
  {
    key: "doctor-os",
    name: "Doctor OS",
    shortName: "Doctor OS",
    tagline: "AI clinical copilot with 38 tools.",
    domain: "health",
    liveUrl: "https://doctor-os.vercel.app",
    status: "live",
    integrationNote:
      "Clinical-side sibling. Visio Med and Visio Aesthetic lead signals can be routed to Doctor OS-using practitioners when the vertical warrants clinical engagement.",
  },
  {
    key: "visiocode",
    name: "VisioCode",
    shortName: "VisioCode",
    tagline: "AI clinical coding on 61K ICD-10 records.",
    domain: "health",
    liveUrl: "https://visiocode.vercel.app",
    status: "live",
    integrationNote:
      "Billing-side sibling. Connects to the medical scheme broker ecosystem referenced in Visio Med.",
  },
  {
    key: "pitch",
    name: "VisioPitch",
    shortName: "VisioPitch",
    tagline: "AI pitch builder for proposals and investor decks.",
    domain: "sales",
    liveUrl: "https://visiopitch-standalone.vercel.app",
    status: "live",
    integrationNote:
      "Sales enablement sibling. Every Visio Lead Gen Flow 2.0 panel customer can generate client-specific proposals via VisioPitch, pulling from the VRL paper set.",
  },
  {
    key: "calls",
    name: "VisioCalls",
    shortName: "VisioCalls",
    tagline: "Self-hosted AI call centre at R1.22/min.",
    domain: "sales",
    liveUrl: "https://visiocalls.visiocorp.co",
    status: "preview",
    integrationNote:
      "Voice-side sibling. Leads from Visio Lead Gen Flow 2.0 can be handed to VisioCalls for outbound voice qualification at 77–80% margins.",
  },
  {
    key: "workspace",
    name: "Visio Workspace",
    shortName: "Workspace",
    tagline: "The chairman's operating system. Orchestrates the ecosystem.",
    domain: "ops",
    liveUrl: "https://visioworkspace-corpo1.vercel.app",
    status: "live",
    integrationNote:
      "The parent cockpit. All sibling products (including Visio Lead Gen Flow 2.0) report to Visio Workspace via gateway API. Steinberg — the chairman's agent — has cross-product visibility across the entire ecosystem.",
  },
] as const;

export const ECOSYSTEM_BY_KEY: Record<EcosystemKey, EcosystemProduct> = ECOSYSTEM.reduce(
  (acc, p) => ({ ...acc, [p.key]: p }),
  {} as Record<EcosystemKey, EcosystemProduct>
);

export const ECOSYSTEM_META = {
  parent: "VisioCorp (Pty) Ltd",
  totalProducts: ECOSYSTEM.length,
  leadGenSelf: "lead-gen",
  firstSibling: "auto",
  designSource:
    "Visio Lead Gen Flow 2.0 was cloned from Visio Auto's design system and rebranded from emerald-green to blue. It shares the Jess chat widget SDK, the PaperLayout component, the modes-based architecture pattern, and the Visio Honesty Protocol.",
  honestyProtocol:
    "Every VisioCorp product follows the same honesty protocol: no fabricated metrics, no made-up firm names, every unverifiable figure is flagged explicitly.",
} as const;

/**
 * Cross-vertical routing — when a Lead Gen Flow 2.0 signal matches a sibling
 * product's strength, Jess can recommend routing the lead there.
 */
export function recommendSibling(
  vertical: string
): { product: EcosystemProduct; reason: string } | null {
  const v = vertical.toLowerCase();

  if (v === "medical" || v === "cosmetic" || v === "med" || v === "aesthetic") {
    return {
      product: ECOSYSTEM_BY_KEY["healthos"],
      reason:
        "Medical and aesthetic leads route into HealthOS booking workflows with FHIR-compliant handoff.",
    };
  }

  if (v === "auto") {
    return {
      product: ECOSYSTEM_BY_KEY["auto"],
      reason:
        "Automotive leads are served by the Visio Auto sibling product — the original 6-product suite for SA dealerships.",
    };
  }

  if (v === "flow" || v === "booking" || v === "whatsapp") {
    return {
      product: ECOSYSTEM_BY_KEY["patient-flow"],
      reason:
        "The Patient Flow AI booking + WhatsApp pattern is the foundation of Lead Gen Flow 2.0's Flow module.",
    };
  }

  if (v === "pitch" || v === "proposal") {
    return {
      product: ECOSYSTEM_BY_KEY["pitch"],
      reason:
        "Client-specific proposals for any Lead Gen Flow 2.0 panel customer can be generated via VisioPitch.",
    };
  }

  if (v === "voice" || v === "call" || v === "outbound") {
    return {
      product: ECOSYSTEM_BY_KEY["calls"],
      reason:
        "Outbound voice qualification at R1.22/min can be handled by VisioCalls.",
    };
  }

  return null;
}
