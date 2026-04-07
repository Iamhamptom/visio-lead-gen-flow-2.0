# Visio Lead Gen — Agent Briefing (Research + Papers Wave 1)

**Purpose**: Single shared brief for all research-writer agents producing VRL papers and market intelligence reports across the 10 verticals of Visio Lead Gen. Read this file first, then read your assigned vertical's template references, then write your two files.

---

## The Visio Research Labs standard (non-negotiable)

Every file you write must match the tone, structure, and HONESTY PROTOCOL of these reference files (READ THEM FIRST):

- `/Users/hga/visio-auto/research/sa-automotive-market-2025-2026.md` (211 lines) — the canonical research MD template
- `/Users/hga/visio-auto/src/app/papers/visio-approve/page.tsx` (227 lines) — the canonical paper page template
- `/Users/hga/visio-lead-gen/research/sa-bond-originators-2025-2026.md` (~230 lines) — the exemplar for a Lead Gen vertical research MD
- `/Users/hga/visio-lead-gen/src/app/papers/visio-bond/page.tsx` (~220 lines) — the exemplar for a Lead Gen vertical paper page

### Structural requirements for research MD

- 8 numbered sections, exactly following the Auto research rhythm: market structure → business model → macro catalyst → segmentation → adjacent catalyst → geographic concentration → recent moves → "What We Could Verify vs. What We Could Not"
- Real, clickable sources under each section — use official sites (statssa.gov.za, sars.gov.za, sapvia.co.za, ncr.org.za, discovery.co.za, moneyweb.co.za, moonstone.co.za, techcentral.co.za, businesstech.co.za, dailyinvestor.com, iol.co.za, cms.gov.za, fsca.co.za, gov.za, ooba.co.za, betterbond.co.za, naamsa.net, lightstoneproperty.co.za, autotrader.co.za, etc.)
- Honesty protocol block at the end: "Verified", "Not independently verified in this pass", "Honest caveats for publication"
- ~200-260 lines total
- Footer: "*Compiled by Visio Research Labs, April 2026. All sources are public. No figures have been generated or estimated. Verification gaps are flagged explicitly per the Visio Honesty Protocol.*"

### Structural requirements for paper TSX page

- Uses `PaperLayout` component (import from `@/components/papers/PaperLayout`) — do NOT invent new components
- `metadata` export with title and description
- `paperNumber`, `category`, `title`, `subtitle`, `publishDate`, `authors` props on PaperLayout
- Abstract callout block as the first content child (see bond paper)
- 8 numbered sections matching: problem → legal opening → signal/engine → buyer value → buyer/seller value → revenue model → limitations/ethics → conclusion
- "References" footnote at the end with real acts (NCA, FAIS, POPIA, Medical Schemes Act, NCR, FSCA etc.) + real firm references from modes.ts
- "Cite as" footnote line
- ~200-240 lines total

### Honesty protocol (ABSOLUTE)

- **Never fabricate** CPC numbers, firm revenues, market sizes, or commission rates beyond what is explicitly stated in this briefing, `/Users/hga/visio-lead-gen/src/lib/modes.ts`, or the referenced templates.
- Any figure you are unsure about must be framed as "VRL estimate", "informed estimate", or flagged in the "Not independently verified" section.
- Use the phrase **"Not independently verified in this pass — pull before publication"** to mark any figure that is a working estimate.
- The Visio brand stakes its credibility on honesty. Making up a firm or a stat will be considered a critical failure.

---

## Vertical-specific data pack

Each agent reads the `modes.ts` entry for their assigned vertical and uses the data below to supplement. Anything beyond what is listed here must be flagged as an estimate.

### INSURANCE (Short-Term) — `insurance`
- Gauteng has **629 FSCA-registered insurance brokers** (the densest broker market in SA; KZN has 236, WC has 229)
- Insurance is the **highest-CPC sector** in SA Google Ads per Statista (May 2023 benchmark, USD 2.21 avg)
- Real firms: AIB (Associated Insurance Brokers, est 1983, FSP No 19819), Option Brokers (FSP 8265), L&S Insurance (FSP 16838), King Price, Naked, Pineapple, MiWay, Indwe Risk
- FSCA is the regulator (formerly FSB); FSP licences are the authoritative broker register
- Personal lines vs commercial lines — brokers typically run both, with commercial being the higher-margin book
- Annual premium hike cycle (10–18% across majors) is the structural switching trigger
- Reference: South Africa Short-Term Insurance industry sits within the R140bn+ gross written premium pool (estimate, not verified to 2025)

### SOLAR — `solar`
- SAPVIA (South African Photovoltaic Industry Association) is the industry body; SAPVIA-accredited installers are the quality tier
- C&I (Commercial & Industrial) is the **strongest-performing segment** in the SA market per SAPVIA trends report Sep 2025
- SAPVIA data portal tracks installed capacity by segment: residential, C&I SSEG, C&I large-scale, utility-scale
- Section 12B tax incentive drives C&I payback economics
- Real firms: SolarAdvice, Hohm Energy, Versofy Solar, Rubicon, Sustainable.co.za, Full Solar Systems, Approved Solar, SunArc Africa
- Eskom tariff hike 2025: ~12.7% (verify before publication)
- PV GreenCard is the installation quality certification programme
- Residential solar panel prices R1,200–R3,500/panel retail

### DEBT REVIEW — `debt`
- NCR (National Credit Regulator) maintains the **official register of debt counsellors** at ncr.org.za
- NCR regulates credit providers, credit bureaus, and debt counsellors under the National Credit Act 34 of 2005
- **R57 billion** withdrawn from Two-Pot by June 2025 (SAnews, Moonstone)
- **2.4 million** valid two-pot withdrawal tax directives approved by end-January 2025
- **79% of debt-settlement withdrawers** plan repeat withdrawals (Moonstone)
- **62% of March 2026 claims are 3rd withdrawals**, 33% second, 5% first-time
- **40% of credit-active SA in default** on one or more loans (Eighty20 Q4 2025)
- **R12 billion increase in overdue balances** Q4 2025
- Real firms: DebtBusters, National Debt Counsellors (NDC), NDRC, Meerkat, Consumer Debt Help, DebtSafe
- SARS recovered R1bn in tax debt via two-pot stop orders

### MEDICAL AID + GAP COVER — `medical`
- Discovery Health Medical Scheme: weighted average contribution increase **9.3% for 2025**
- Discovery **2026 hike delayed to April 2026, 7.9%** weighted average
- Core and Priority plans: 9.9–10% increase; Saver plans: 8.4%; Smart plans: 7.4%
- CMS (Council for Medical Schemes) is the regulator; CMS-accredited brokers required
- Other majors: Momentum Health, Profmed, Bonitas, Bestmed, Fedhealth, Medscheme, GEMS (gov employees)
- Gap cover is separate product — R20bn+ adjacent market (estimate)
- ~9.1m medical scheme members nationally (estimate, verify)
- Real broker/firm names: Stratum Benefits, Sirago, IFC Brokers, OPTIVEST, NMG Benefits, Alexforbes Health

### COSMETIC / AESTHETIC — `cosmetic`
- Real Sandton clinics: Vivari Aesthetics (at Vivari Hotel, Dr Anushka Reddy), Skin Reform (135 Daisy St, Sandown), Luna-C Aesthetics (Studio 113, 11th St, Parkmore), Centre of Wellness (Dr Mel Lambrechts + Dr Chantelle Barnard + Dr Xen Ludick + Dr Bianca Busch), Sandton Beauty Clinic, Dr. Dee Aesthetics (39 Achter Rd, Paulshof), Skin Renewal (Greenstone)
- Fresha lists 50+ aesthetic clinics in Sandton alone
- Cash-pay, no medical aid friction
- Regulation: HPCSA for practitioners (doctors/nurses), SAAHSP for therapists
- Ticket sizes: fillers R3k–R15k, botox R2k–R8k, CO2 laser R5k–R30k, surgery R40k–R250k (informed estimates, flag for verification)

### IMMIGRATION — `immigration`
- Real firms: Xpatweb, Intergate Immigration, IBN Immigration Solutions, Eisenberg & Associates (est 1997), Craig Smith & Associates, Cliffe Dekker Hofmeyr (CDH Immigration practice), Sable International
- Critical Skills Visa list refresh (2025) is the inbound driver
- Home Affairs digital visa rollout (2025) is modernising the process
- UK/Aus/NZ emigration + SADC professional inbound are the twin flows
- Regulation: Immigration Act, practitioners must register with Department of Home Affairs; attorneys governed by LPC
- Typical consultation fee R2k–R5k; full visa package R15k–R80k

### PRIVATE SCHOOLS — `schools`
- **ADvTECH** — listed (JSE: ADH), described as "R21bn private school empire" in 2025 press; brands include Crawford International, Trinity House, Abbots College, Maragon, Junior College, Pinnacle College
- **Curro Holdings** — listed (JSE: COH), 30 campuses in 2024, 95.49% NSC pass rate, 99.5% IEB pass rate (1,525 learners)
- **SPARK Schools** — 18 schools total (16 primary, 2 high) mostly Gauteng
- **Reddam House** — premium group, Gauteng + Cape Town + Durban
- Fees: Curro R30k–R50k/year mid-fee; elite brands R120k–R300k/year
- IEB is the independent examination board, contrasted with DBE (public)
- Intake cycles: main January intake (60%+ of new enrolments) + secondary July intake
- Estimated R40bn+ SA private school market (flag as estimate)

### COMMERCIAL PROPERTY — `commercial`
- Real firms: JLL (SA), Broll Property Group (est 1975, Cushman & Wakefield EMEA partnership), CBRE, Cushman & Wakefield Excellerate, Knight Frank SA, Galetti Corporate Real Estate (Cameron Smith MD, office + industrial consultancy), API Property Group
- SAPOA (South African Property Owners Association) is the industry body
- Office return + logistics corridor demand in Ekurhuleni/East Rand are the twin 2025-2026 catalysts
- Sub-sectors: office leasing, industrial/warehousing, retail leasing, investment sales, valuations, property management
- ~R400bn+ SA commercial property stock, ~R60bn annual transactions (flag as estimate)
- Commercial vacancy rates fell in Sandton/Rosebank through 2025

### AUTO — `auto` (already fully covered in visio-auto, not in Wave 1)

### BOND — `bond` (already shipped as VRL-LEADGEN-001)

---

## File naming convention

- Research MD: `/Users/hga/visio-lead-gen/research/sa-{slug}-2025-2026.md`
- Paper TSX: `/Users/hga/visio-lead-gen/src/app/papers/visio-{slug}/page.tsx`

Slugs per vertical:
- insurance → `short-term-insurance` / `visio-shield`
- solar → `solar-installers` / `visio-solar`
- debt → `debt-review` / `visio-debt`
- medical → `medical-aid` / `visio-med`
- cosmetic → `cosmetic-aesthetics` / `visio-aesthetic`
- immigration → `immigration-visa` / `visio-visa`
- schools → `private-schools` / `visio-schools`
- commercial → `commercial-property` / `visio-estate`

## Paper numbering
- Bond: VRL-LEADGEN-001 (done)
- Insurance: VRL-LEADGEN-002 (Visio Shield)
- Solar: VRL-LEADGEN-003 (Visio Solar)
- Debt: VRL-LEADGEN-004 (Visio Debt)
- Medical: VRL-LEADGEN-005 (Visio Med)
- Cosmetic: VRL-LEADGEN-006 (Visio Aesthetic)
- Immigration: VRL-LEADGEN-007 (Visio Visa)
- Schools: VRL-LEADGEN-008 (Visio Schools)
- Commercial: VRL-LEADGEN-009 (Visio Estate)

## Structural rhythm for every paper

1. **Problem** — the information asymmetry / market friction for this vertical
2. **Legal opening** — POPIA + sector regulator (FSCA / NCR / CMS / HPCSA / DHA / CMS) + which acts/sections explicitly permit operating as a lead aggregator
3. **Signal engine** — 5 named signal types from modes.ts + Green/Amber/Red heat scoring
4. **Buyer-side value** — what the end-consumer learns in under 90 seconds
5. **Seller-side value** — what the paying customer (broker/installer/clinic/firm) receives
6. **Revenue model** — lead fees + subscription, sum to ARR number between R30M and R90M per vertical
7. **Limitations + ethics** — conservative bias, POPIA retention, no bureau pulls, clear disclaimers
8. **Conclusion** — one paragraph thesis + one paragraph on strategic positioning within VisioCorp

---

*End of briefing. Now read your assigned vertical, read the template references, and write your two files. Return a short summary: files created, line counts, any caveats added.*
