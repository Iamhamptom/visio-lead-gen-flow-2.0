import PaperLayout from "@/components/papers/PaperLayout";

export const metadata = {
  title: "Visio Bond — VRL-LEADGEN-001 | Visio Research Labs",
  description:
    "A neutral cross-bank home-loan origination signal layer for South Africa. Two-pot deposit detection, first-time buyer qualification, panel rate comparison. R72M ARR opportunity across the four-originator oligopoly.",
};

export default function VisioBondPaperPage() {
  return (
    <PaperLayout
      paperNumber="VRL-LEADGEN-001"
      category="Visio Bond"
      title="A neutral cross-bank home-loan signal layer for South Africa."
      subtitle="First-time buyer pre-qualification, two-pot deposit detection, and panel rate comparison — delivered to bond originators in real time. R72M ARR opportunity from origination lead-fees and originator subscriptions."
      publishDate="April 2026"
      authors="Dr. David Hampton, VRL"
    >
      <div className="callout">
        <span className="callout-label">Abstract</span>
        <p className="text-[15px] leading-relaxed text-white/65 italic m-0">
          The South African residential mortgage market is intermediated by four dominant bond
          origination firms (ooba, BetterBond, MultiNET, EVO) and has just entered its largest
          structural tailwind since 2021: a 150 basis point cumulative SARB rate cut, a first-time
          buyer share of ~48% at the market leader, and a quiet R57 billion deposit stream flowing
          out of the Two-Pot Retirement System. This paper introduces{" "}
          <strong>Visio Bond</strong>, a signal layer that detects home-loan intent — two-pot
          withdrawals, property-portal dwell time, first-time-buyer search patterns, pre-approval
          abandonment — and delivers scored, qualified leads to the origination panel in real time.
          Visio Bond operates as a POPIA-compliant lead aggregator under the same regulatory
          positioning as ClearScore SA and JustMoney, without crossing into FAIS-regulated advice
          or NCR-regulated credit provision. Steady-state target: <strong>R72M ARR</strong>.
        </p>
      </div>

      <h2>1. The problem</h2>

      <p>
        The South African residential mortgage funnel is structurally leaky on both sides. Buyers
        begin the search on Property24 or Private Property, visit a property, fall in love, and
        only then discover &mdash; weeks later, at the dealer of bond applications, the F&amp;I
        equivalent in real estate &mdash; whether they can actually afford the bond. Originators,
        for their part, receive leads that arrive unqualified: no income data, no debt profile, no
        deposit source, and in many cases no credit awareness.
      </p>

      <p>The data on this friction is severe:</p>

      <ul>
        <li>ooba Oobarometer Q4 2025 reports a <strong>first-time buyer share of ~48%</strong>, the highest in a decade &mdash; but an <strong>18% application decline rate</strong>.</li>
        <li>BetterBond Q4 2025 Property Market Report notes rising sub-R1.5M application volume in Gauteng East Rand and Vaal Triangle corridors.</li>
        <li>R57 billion has flowed out of the Two-Pot Retirement System by June 2025, with <strong>79% of debt-settlement withdrawers</strong> planning repeat withdrawals &mdash; a structural deposit engine that is entirely undetected by bank origination desks.</li>
        <li>Median Gauteng bond size in 2025: <strong>~R1.35M</strong>, with the highest-velocity segment at R800k&ndash;R1.5M.</li>
      </ul>

      <p>
        The result: a market in which the buyer is flying blind, the bank is receiving thin
        applications, and the originator is paying property-portal advertising rates to attract
        leads that reveal their unaffordability only at submission.
      </p>

      <h2>2. The legal opening</h2>

      <p>
        A common assumption in the South African fintech community is that any tool offering an
        opinion on home-loan qualification must be registered as either a credit provider (under
        the NCA) or a financial services provider (under the FAIS Act). This is incorrect.
      </p>

      <ul>
        <li><strong>NCA Section 40(1)</strong> defines a credit provider by the <em>act of extending credit</em>. A signal layer that does not extend credit is not a credit provider and does not require NCR registration.</li>
        <li><strong>NCA Section 70</strong> defines a credit bureau by the <em>act of holding consumer credit information</em>. A signal layer that uses only self-reported data and public intent signals is not a credit bureau.</li>
        <li><strong>FAIS Act Section 1</strong> defines &ldquo;financial product&rdquo; as investments, insurance, deposits, and similar instruments. <strong>Credit agreements are explicitly excluded.</strong> A home-loan qualification estimator is therefore not regulated by FAIS.</li>
      </ul>

      <p>
        What remains is <strong>POPIA</strong>, which governs the storage and processing of any
        user-supplied data. Visio Bond handles this with explicit consent gates, Information
        Officer registration, a 90-day retention rule, and a clear separation between raw signal
        data and enriched leads shipped to buyers.
      </p>

      <p>
        Inside this gap, Visio Bond operates as a{" "}
        <strong>lead aggregator + comparison layer</strong>, structurally identical to ClearScore
        SA and JustMoney &mdash; but bond-specific and originator-native.
      </p>

      <h2>3. The signal engine</h2>

      <p>Visio Bond runs on five families of bond-intent signals:</p>

      <ol>
        <li><strong>Two-pot withdrawal intent.</strong> Search patterns (&ldquo;two pot withdraw&rdquo;, &ldquo;how to claim two pot&rdquo;, &ldquo;two pot deposit home loan&rdquo;), social signals, and retirement-fund portal referrals. A detected two-pot intent is a <em>30&ndash;90 day lead indicator</em> for a first-time buyer application.</li>
        <li><strong>First-time buyer profile.</strong> Property-portal dwell time (Property24, Private Property), median price-band clustering (R800k&ndash;R1.5M), and search terms (&ldquo;bond affordability calculator&rdquo;, &ldquo;first time buyer&rdquo;, &ldquo;transfer costs&rdquo;).</li>
        <li><strong>Pre-approval ready.</strong> Completion of a self-assessment affordability form, income band declaration, and explicit consent to be contacted by an originator.</li>
        <li><strong>Bond switch intent.</strong> Existing bondholders searching for &ldquo;bond switching costs&rdquo;, &ldquo;rate comparison&rdquo;, or &ldquo;home loan rates 2026&rdquo; &mdash; a distinct refinance lead category with higher LTV and shorter conversion cycles.</li>
        <li><strong>Property viewing signals.</strong> Confirmed viewings via agent apps, saved searches above a price threshold, and repeat-visit patterns to specific listings.</li>
      </ol>

      <p>
        Each signal is scored on a <strong>0&ndash;100 heat scale</strong>, time-decayed over 14
        days, and mapped to a <strong>Green / Amber / Red</strong> lead grade. Green leads are
        delivered in real time to panel originators; Amber leads are routed to a deposit-coaching
        nurture sequence; Red leads are offered to debt-review and insurance cross-sell partners.
      </p>

      <h2>4. Why this matters for the buyer</h2>

      <p>
        A buyer using Visio Bond learns three things in 90 seconds that would otherwise require
        three weeks and multiple bank branch visits to discover:
      </p>

      <ol>
        <li>Whether their income band, declared obligations, and proposed deposit clear the conservative affordability threshold used by the four major banks.</li>
        <li>What four banks would charge them at their self-reported credit band &mdash; and which is the cheapest bidder for their specific risk profile.</li>
        <li>How much additional deposit would flip an Amber estimate to Green &mdash; and whether a Two-Pot withdrawal is a legitimate deposit source for their target price band.</li>
      </ol>

      <p>
        Crucially, the rates returned to the consumer are <strong>not invented</strong>. They are
        pulled from a <code>lib/banks/mortgage-rates.ts</code> constant containing the actual
        published rate cards of Absa, Standard Bank, FNB and Nedbank home-loan divisions, indexed
        against SARB prime (10.25% as of January 2026). Each entry is timestamped with a{" "}
        <code>verifiedAt</code> date and a public source URL &mdash; no fabricated numbers.
      </p>

      <h2>5. Why this matters for the bond originator</h2>

      <p>
        The bond originator&apos;s central problem is <strong>lead quality, not lead volume</strong>.
        Every unqualified lead costs roughly 25 minutes of a consultant&apos;s time, plus the
        opportunity cost of a higher-intent lead that never received a call. At an 18% decline
        rate and a further ~20% drop-off at the documents-gathering stage, an originator working
        50 leads per week is wasting roughly 10 hours per week on applications that will never
        register.
      </p>

      <p>
        Visio Bond filters this at the entry point. By the time a lead arrives at the originator
        desk, they have self-disclosed income, obligations and deposit source, seen four panel
        rates side-by-side, and been heat-scored against the originator&apos;s historical
        conversion profile. Originators can prioritise Green leads, reroute Amber leads to a
        deposit-coaching workflow, and decline Red leads with a gentle &ldquo;let&apos;s revisit
        when your DTI improves&rdquo; &mdash; without burning a credit pull on either side.
      </p>

      <h2>6. Revenue model</h2>

      <ol>
        <li><strong>Originator lead-fees.</strong> Each panel originator pays R300&ndash;R1,500 per qualified, pre-approval-ready lead. At 8,000 monthly Green+Amber leads × average R650 = <strong>~R62M ARR</strong>.</li>
        <li><strong>Originator subscription.</strong> R2,500/month for the integration, signal dashboard, and Two-Pot pipeline visibility. At 350 originator branches = <strong>~R10M ARR</strong>.</li>
      </ol>

      <p>Combined steady-state: <strong>R72M ARR</strong>, 88%+ gross margin.</p>

      <h2>7. Limitations and ethical considerations</h2>

      <p>
        Visio Bond is an intent aggregator, not a credit decision. Every screen carries:{" "}
        <em>&ldquo;This is an educational estimate. It is not a home loan application, not
        financial advice, and does not guarantee approval. Final approval is subject to a full
        credit assessment by the lender.&rdquo;</em>
      </p>

      <p>
        We deliberately use a conservative buffer (65% of discretionary income vs. the 80% that
        the banks themselves accept) to bias toward false negatives rather than false positives. A
        buyer told Amber who is then approved is delighted; a buyer told Green who is then
        declined is angry and loses trust. The asymmetry is reflected in the engine.
      </p>

      <p>
        We do not store bureau data. We do not query a credit bureau API. The user&apos;s
        self-reported credit band is treated as a hint, not a fact, and the engine surfaces the
        uncertainty: an Amber result is honest about <em>why</em> it is Amber.
      </p>

      <h2>8. Conclusion</h2>

      <p>
        Visio Bond is a precise legal positioning wrapped around a large and under-served market.
        By detecting first-time buyer intent and Two-Pot deposit flow at the top of the funnel,
        exposing the four major banks&apos; published rate cards, and delivering heat-scored leads
        to the origination panel in real time, it restores information symmetry to the South
        African home-loan market. It does this without becoming a credit provider, without
        becoming a credit bureau, and without crossing into FAIS-regulated advice &mdash; which is
        to say, without any of the regulatory burden that has prevented anyone else from building
        it at scale.
      </p>

      <p>
        The R72M ARR opportunity is not the most interesting thing. The most interesting thing is
        that Visio Bond converts the <strong>single largest household event of 2024&ndash;2026
        &mdash; the Two-Pot withdrawal &mdash; into a distribution channel</strong> for the four
        major mortgage lenders, and positions VisioCorp as the layer that sits between them and
        the next wave of first-time buyers.
      </p>

      <hr />

      <p className="footnote">
        <strong>References:</strong> National Credit Act 34 of 2005 (Sections 40, 70, 81);
        Affordability Assessment Regulations 2015 (Reg 23A); FAIS Act 37 of 2002 Section 1; POPIA
        Act 4 of 2013; ooba Oobarometer Q4 2025; BetterBond Property Market Report Q4 2025; SARB
        MPC Statements Sep 2024 &ndash; Jan 2026; Moonstone &mdash; Two-Pot Withdrawal Surge
        (2025); SARS Two-Pot Retirement System Guidance; Absa, Standard Bank, FNB and Nedbank
        published home-loan rate cards (verified 2026-01-01). Repository:{" "}
        <a href="https://github.com/Iamhamptom/visio-lead-gen">github.com/Iamhamptom/visio-lead-gen</a>.
      </p>

      <p className="footnote">
        <strong>Forward-looking assumptions:</strong> The ARR target in this paper is a Year-5
        steady-state projection, not a Year-1 run-rate. See the VRL Forward-Looking Assumptions
        and Cross-References Addendum (<code>research/_VRL-FORWARD-LOOKING-ASSUMPTIONS-AND-SOURCES.md</code>)
        for the full ramp schedule (Y1 ~10&ndash;15% of Y5, Y3 ~50%) and the consolidated
        government, banking, and consultancy cross-reference source list &mdash; SARB, StatsSA,
        National Treasury, NCR, FSCA, CMS, SAPOA, SAPVIA, FNB Property Barometer, ABSA, Standard
        Bank, Nedbank Economic Unit, Investec Focus, PwC, Deloitte, KPMG, and industry bodies
        (BASA, ASISA, SAIA, BHF, SA REIT).
      </p>

      <p className="footnote">
        Cite as: Hampton, D. (2026). &ldquo;Visio Bond: A Neutral Cross-Bank Home-Loan Signal
        Layer for South Africa&rdquo;. Visio Research Labs, VRL-LEADGEN-001.
      </p>
    </PaperLayout>
  );
}
