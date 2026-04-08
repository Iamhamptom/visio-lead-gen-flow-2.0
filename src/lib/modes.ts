/**
 * Visio Lead Gen — Vertical Modes
 *
 * One codebase. Ten verticals. Each mode swaps hero copy, signal taxonomy,
 * target companies, pricing anchors, and the Jess persona.
 *
 * Mode is selected via the /modes page, stored in a cookie, and read by
 * every page via getActiveMode(). Falls back to "auto" (the flagship).
 *
 * Data grounding: all numbers/firms were researched 2026-04-07 from
 * StatsSA, Moonstone, Moneyweb, TechCentral, SAPVIA, NCR, WordStream,
 * Statista. Nothing fabricated — see /research/gauteng-master.md.
 */

export type VerticalMode =
  | "auto"
  | "bond"
  | "insurance"
  | "solar"
  | "debt"
  | "medical"
  | "cosmetic"
  | "immigration"
  | "schools"
  | "realty"
  | "commercial"
  | "commerce"
  | "coach";

export interface ModeConfig {
  id: VerticalMode;
  name: string;          // "Bond & Home Loans"
  tagline: string;       // "Warm home-loan applicants, delivered."
  hero: string;          // one-sentence pitch
  subhero: string;       // supporting line
  color: string;         // accent hex
  emoji: string;         // nav icon fallback
  signalTypes: string[]; // vertical-specific intent signals
  targetBuyers: string[]; // who buys the leads
  leadPrice: { low: number; high: number }; // per-lead ZAR
  minOrder: number;
  cpcRange: string;      // Google Ads CPC proxy
  marketSize: string;    // TAM one-liner
  trigger: string;       // the 2025/2026 "why now" hook
  topFirms: string[];    // real named targets for outbound
}

export const MODES: Record<string, ModeConfig> = {
  auto: {
    id: "auto",
    name: "Auto & Dealerships",
    tagline: "Enriched, intent-scored car buyers — researched and consent-gated.",
    hero: "Autonomous AI sales agent for car dealerships.",
    subhero: "23 predictive signals, personalised outreach, calendar booking, WhatsApp delivery.",
    color: "#22c55e",
    emoji: "",
    signalTypes: ["insurance_renewal", "lease_end", "trade_in_ready", "finance_approved", "showroom_visit"],
    targetBuyers: ["Dealer Principals", "F&I Managers", "Used Car Managers", "Group GMs"],
    leadPrice: { low: 150, high: 600 },
    minOrder: 25,
    cpcRange: "R15–R50",
    marketSize: "329+ dealerships, R200bn+ new vehicle market",
    trigger: "Interest rate cuts + stock glut = dealers fighting for every lead",
    topFirms: ["Motus", "Super Group", "Halfway Group", "CMH", "WeBuyCars", "Imperial Auto"],
  },
  bond: {
    id: "bond",
    name: "Bond Originators & Home Loans",
    tagline: "Pre-qualified home buyers, ready to apply.",
    hero: "Warm home-loan applicants for South Africa's top originators.",
    subhero: "Rate-cut cycle + first-time buyer surge = the fattest origination window since 2021.",
    color: "#3b82f6",
    emoji: "",
    signalTypes: ["rate_drop_intent", "first_time_buyer", "pre_approval_ready", "bond_switch_intent", "property_viewing"],
    targetBuyers: ["Bond Originators", "Franchise Owners", "Home Loan Consultants", "Private Banks"],
    leadPrice: { low: 300, high: 1500 },
    minOrder: 10,
    cpcRange: "R40–R120",
    marketSize: "R1.3tn SA residential bond book, ~R200bn new originations/yr",
    trigger: "SARB rate cut cycle + first-time buyer demand + 2-pot deposit funding",
    topFirms: ["ooba Home Loans", "BetterBond", "MultiNET", "EVO Home Loans", "MortgageMax", "GetGo Home Loans", "Roost"],
  },
  insurance: {
    id: "insurance",
    name: "Short-Term Insurance Brokers",
    tagline: "Renewal-window buyers, ready to switch.",
    hero: "Warm personal & commercial lines leads for FSCA-registered brokers.",
    subhero: "Gauteng has 629 insurance brokers — the densest broker market in SA. We feed the hungry ones.",
    color: "#8b5cf6",
    emoji: "",
    signalTypes: ["renewal_window", "premium_hike_complaint", "claim_denied", "new_vehicle", "new_home", "business_start"],
    targetBuyers: ["Principal Brokers", "FSPs", "MGA Operators", "Underwriter BDMs"],
    leadPrice: { low: 150, high: 800 },
    minOrder: 25,
    cpcRange: "R30–R200 (highest CPC sector in SA)",
    marketSize: "R140bn+ SA short-term premium market, 629 brokers in Gauteng",
    trigger: "Annual premium hikes 10–18% across Santam/OUTsurance = switching fever",
    topFirms: ["AIB (Associated Insurance Brokers)", "Option Brokers", "L&S Insurance", "King Price", "Naked Insurance", "Pineapple", "Miway", "Indwe Risk"],
  },
  solar: {
    id: "solar",
    name: "Solar Installers (C&I + Residential)",
    tagline: "High-ticket solar buyers, heat-scored by job size.",
    hero: "R80k–R2m solar project leads for SAPVIA installers.",
    subhero: "C&I is the strongest-performing solar segment in SA. Businesses want 15-year PPA leases, not CapEx.",
    color: "#eab308",
    emoji: "",
    signalTypes: ["eskom_tariff_complaint", "loadshedding_stage_4", "ppa_inquiry", "backup_power_fail", "new_property", "generator_replacement"],
    targetBuyers: ["Installer Owners", "Sales Directors", "EPC Project Managers", "Renewables Finance"],
    leadPrice: { low: 400, high: 2500 },
    minOrder: 10,
    cpcRange: "R40–R80",
    marketSize: "6GW+ installed SSEG, R40bn+ annual C&I pipeline",
    trigger: "Eskom 12.7% tariff hike + C&I tax incentive Section 12B = payback <4yr",
    topFirms: ["SolarAdvice", "Hohm Energy", "Versofy Solar", "Rubicon", "Sustainable.co.za", "Full Solar Systems", "Approved Solar", "SunArc Africa"],
  },
  debt: {
    id: "debt",
    name: "Debt Review & Two-Pot",
    tagline: "Over-indebted households, in the moment of panic.",
    hero: "Warm debt review applicants for NCR-registered counsellors.",
    subhero: "R57bn withdrawn from two-pot by June 2025. 79% of debt-driven withdrawers are already planning repeat withdrawals. The debt conversation is open.",
    color: "#ef4444",
    emoji: "",
    signalTypes: ["two_pot_withdrawal", "garnishee_order", "judgment_received", "credit_decline", "missed_bond", "multiple_accounts_over"],
    targetBuyers: ["Debt Counsellors", "NCR-Registered Firms", "Credit Life Brokers"],
    leadPrice: { low: 150, high: 500 },
    minOrder: 50,
    cpcRange: "R50–R150",
    marketSize: "40% of credit-active SA in default, R12bn overdue balance surge Q4 2025",
    trigger: "Two-pot R57bn out, 62% on 3rd withdrawal = over-indebtedness is now a data stream",
    topFirms: ["DebtBusters", "National Debt Counsellors", "NDRC", "Meerkat", "Consumer Debt Help", "DebtSafe"],
  },
  medical: {
    id: "medical",
    name: "Medical Aid & Gap Cover",
    tagline: "Switching-window members, rate-shock motivated.",
    hero: "Warm medical scheme + gap cover leads for FSCA brokers.",
    subhero: "Discovery hiked 9.3% in 2025 and pushed another 7.9% into April 2026. The switching window is permanently open.",
    color: "#06b6d4",
    emoji: "",
    signalTypes: ["scheme_hike_complaint", "gap_denial", "hospital_plan_shock", "new_employer", "chronic_registration"],
    targetBuyers: ["Medical Aid Brokers", "FSPs", "Gap Cover Specialists", "Employee Benefits Consultants"],
    leadPrice: { low: 250, high: 1200 },
    minOrder: 25,
    cpcRange: "R30–R100",
    marketSize: "9.1m medical scheme members, R250bn+ industry, R20bn+ gap cover",
    trigger: "Discovery 9.3% + 7.9% back-to-back = switching fatigue → broker opportunity",
    topFirms: ["Stratum Benefits", "Sirago", "IFC Brokers", "OPTIVEST", "NMG Benefits", "Alexforbes Health"],
  },
  cosmetic: {
    id: "cosmetic",
    name: "Cosmetic & Aesthetic Clinics",
    tagline: "Cash-pay aesthetic buyers, no medical aid friction.",
    hero: "High-intent aesthetic treatment leads for Sandton/Rosebank/Centurion clinics.",
    subhero: "Pure cash pay. R20k–R150k tickets. Jess books the consult.",
    color: "#ec4899",
    emoji: "",
    signalTypes: ["procedure_search", "before_after_engagement", "consult_booking_abandon", "competitor_review", "wedding_date"],
    targetBuyers: ["Clinic Owners", "Practice Managers", "Plastic Surgeons", "Aesthetic Doctors"],
    leadPrice: { low: 500, high: 2000 },
    minOrder: 10,
    cpcRange: "R30–R80",
    marketSize: "50+ clinics in Sandton alone, R3bn+ SA aesthetics market",
    trigger: "Cash-pay, no insurance friction, Instagram-driven demand",
    topFirms: ["Vivari Aesthetics", "Skin Reform", "Luna-C Aesthetics", "Sandton Beauty Clinic", "Centre of Wellness", "Skin Renewal", "Dr. Dee Aesthetics"],
  },
  immigration: {
    id: "immigration",
    name: "Immigration Lawyers & Visa",
    tagline: "Emigrators + inbound expats, case-ready.",
    hero: "Warm immigration leads for SA's top visa specialists.",
    subhero: "UK/Aus/NZ emigration + inbound SADC professional intake. The busiest year for Home Affairs since 2019.",
    color: "#f97316",
    emoji: "",
    signalTypes: ["skilled_visa_intent", "critical_skills_search", "spousal_visa", "business_visa", "appeal_ready", "emigration_planning"],
    targetBuyers: ["Immigration Lawyers", "Visa Consultants", "Corporate Mobility Firms"],
    leadPrice: { low: 800, high: 3000 },
    minOrder: 10,
    cpcRange: "R50–R180",
    marketSize: "~100k SA emigrants/yr + ~200k inbound work visa applicants",
    trigger: "2025 Home Affairs digital visa rollout + critical skills list refresh",
    topFirms: ["Xpatweb", "Intergate Immigration", "IBN Immigration Solutions", "Eisenberg & Associates", "Craig Smith & Associates", "Cliffe Dekker Hofmeyr", "Sable International"],
  },
  schools: {
    id: "schools",
    name: "Private Schools (Intake Funnels)",
    tagline: "Term-intake ready parents, pre-qualified by fee budget.",
    hero: "Enrollment leads for Curro, ADvTECH, SPARK & Reddam.",
    subhero: "The ADvTECH empire is R21bn. Curro has 30 campuses. Every January and July, they fight for the same parents.",
    color: "#14b8a6",
    emoji: "",
    signalTypes: ["relocation_family", "school_search", "sibling_intake", "public_school_exit", "mid_year_transfer"],
    targetBuyers: ["Heads of Admissions", "Marketing Directors", "Regional Managers"],
    leadPrice: { low: 300, high: 1000 },
    minOrder: 25,
    cpcRange: "R20–R60",
    marketSize: "R40bn+ SA private school market, booming 8%+ CAGR",
    trigger: "Public school dissatisfaction + relocation surge = permanent pipeline",
    topFirms: ["Curro Holdings", "ADvTECH (Crawford, Trinity House, Pinnacle)", "SPARK Schools", "Reddam House", "Maragon Schools", "Abbots College"],
  },
  realty: {
    id: "realty",
    name: "Residential Real Estate Agents",
    tagline: "Pre-qualified home buyers and sellers, delivered to the agent.",
    hero: "Warm residential property leads for SA's top estate agents.",
    subhero: "Rate cuts + Two-Pot deposit funding + first-time buyer surge = the strongest residential cycle since 2021.",
    color: "#10b981",
    emoji: "",
    signalTypes: ["listing_view_intent", "showhouse_attendance", "valuation_request", "two_pot_deposit", "relocation_family", "investor_buy_to_let"],
    targetBuyers: ["Principal Agents", "Branch Managers", "Franchise Owners", "Listing Agents"],
    leadPrice: { low: 250, high: 1200 },
    minOrder: 25,
    cpcRange: "R20–R80",
    marketSize: "~250k annual residential transfers, R350bn+ in property value moved per year",
    trigger: "SARB 150bps cut + Two-Pot R57bn + first-time buyer share at 10-year high",
    topFirms: ["Pam Golding Properties", "Seeff Property Group", "RE/MAX SA", "Chas Everitt International", "Harcourts SA", "Rawson Properties", "Engel & Völkers SA", "ERA SA", "Just Property", "Sotheby's International Realty SA"],
  },
  commercial: {
    id: "commercial",
    name: "Commercial Property Brokers",
    tagline: "Office, industrial, warehousing intent — heat-scored.",
    hero: "Tenant & investor leads for JLL, Broll, Galetti-tier brokers.",
    subhero: "Office return + Ekurhuleni warehousing boom = the first positive CRE cycle since 2019.",
    color: "#64748b",
    emoji: "",
    signalTypes: ["lease_expiry", "expansion_plan", "funding_round", "headcount_surge", "warehouse_search", "relocation_rfp"],
    targetBuyers: ["Principal Brokers", "Leasing Agents", "Investment Sales", "Tenant Reps"],
    leadPrice: { low: 1000, high: 5000 },
    minOrder: 5,
    cpcRange: "R40–R150",
    marketSize: "R400bn+ SA commercial property stock, ~R60bn annual transactions",
    trigger: "Office return + logistics corridor demand in Ekurhuleni/East Rand",
    topFirms: ["JLL", "Broll Property Group", "CBRE", "Cushman & Wakefield Excellerate", "Knight Frank SA", "Galetti Corporate Real Estate", "API Property Group"],
  },
};

// Appended in a follow-up pass — e-commerce and online services verticals
MODES.commerce = {
  id: "commerce",
  name: "E-commerce Merchants",
  tagline: "High-intent online buyers, delivered to merchants at the moment of cart readiness.",
  hero: "Buying-intent leads for SA e-commerce merchants, DTC brands, and Shopify stores.",
  subhero: "Amazon SA launch + Takealot/Superbalist/Checkers Sixty60 maturity + ECT Act compliance = the most competitive SA e-commerce market ever.",
  color: "#f59e0b",
  emoji: "",
  signalTypes: ["cart_abandonment", "category_research", "price_comparison", "review_engagement", "delivery_area_check", "repeat_purchase_window"],
  targetBuyers: ["E-commerce Founders", "Head of Growth", "Shopify Plus Merchants", "DTC Brand Operators", "Marketplace Sellers"],
  leadPrice: { low: 100, high: 500 },
  minOrder: 100,
  cpcRange: "R5–R40 (varies massively by category)",
  marketSize: "SA e-commerce ~R71bn+ in 2023 per Worldwide Worx (verify) and rising",
  trigger: "Amazon SA launch + Takealot price war + logistics infrastructure maturation",
  topFirms: ["Takealot (Naspers)", "Amazon SA", "Superbalist", "Bash", "Checkers Sixty60", "Woolworths online", "Makro", "Pick n Pay asap!", "Mr Price online", "Yuppiechef", "Zando", "Bob Shop", "Everyshop"],
};

MODES.coach = {
  id: "coach",
  name: "Coaches, Trainers & Online Experts",
  tagline: "High-intent learners, delivered to coaches, trainers, and course creators.",
  hero: "Transformation-intent leads for SA coaches, personal trainers, and online experts.",
  subhero: "The SA creator + coaching economy is small but structurally growing, with no neutral discovery layer between serious learners and credible coaches.",
  color: "#a855f7",
  emoji: "",
  signalTypes: ["transformation_intent", "course_research", "accountability_seeking", "weight_loss_event", "career_change_intent", "burnout_signals"],
  targetBuyers: ["Independent Coaches", "Personal Trainers", "Course Creators", "Coaching Collectives", "Membership Operators", "Online Tutors"],
  leadPrice: { low: 80, high: 400 },
  minOrder: 50,
  cpcRange: "R8–R50",
  marketSize: "SA coaching + online learning market, estimated R3–5bn (VRL estimate)",
  trigger: "Post-pandemic remote work + creator economy + demand for 1:1 accountability",
  topFirms: ["TeachMe2", "Discovery Vitality coaches", "COMENSA-accredited coaches", "Local fitness studios (Virgin Active, Planet Fitness PTs)", "indie business coaches"],
};

export const MODE_LIST = Object.values(MODES);

export function getMode(id: string | undefined | null): ModeConfig {
  if (!id || !(id in MODES)) return MODES.auto;
  return MODES[id as VerticalMode];
}
