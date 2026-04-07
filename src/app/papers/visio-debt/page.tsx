import PaperLayout from "@/components/papers/PaperLayout";

export const metadata = {
  title: "Visio Debt — VRL-LEADGEN-004 | Visio Research Labs",
  description:
    "A neutral debt review signal layer for South Africa's over-indebted households. Two-pot withdrawal detection, Section 86 referral routing to NCR-registered counsellors. R50M ARR opportunity at the intersection of R57bn in two-pot flows and 40% of credit-active SA in default.",
};

export default function VisioDebtPaperPage() {
  return (
    <PaperLayout
      paperNumber="VRL-LEADGEN-004"
      category="Visio Debt"
      title="A neutral debt review signal layer for South Africa's over-indebted households."
      subtitle="R57 billion in Two-Pot withdrawals, 79% repeat-withdrawal intent, 40% of credit-active South Africans in default. Visio Debt detects the moment of financial stress and routes it to NCR-registered counsellors. R50M ARR opportunity."
      publishDate="April 2026"
      authors="Dr. David Hampton, VRL"
    >
      <div className="callout">
        <span className="callout-label">Abstract</span>
        <p className="text-[15px] leading-relaxed text-white/65 italic m-0">
          South Africa&apos;s consumer credit stress is now structural. By June 2025,{" "}
          <strong>R57 billion had flowed out of the Two-Pot Retirement System</strong>, with{" "}
          <strong>79% of debt-settlement withdrawers</strong> intending to withdraw again, and as
          of March 2026, <strong>62% of withdrawals were third-time</strong>. Per Eighty20&apos;s
          Q4 2025 Credit Stress Report, <strong>40% of credit-active South Africans are in
          default</strong> on one or more loans, with a R12 billion quarterly increase in overdue
          balances. This paper introduces <strong>Visio Debt</strong>, a signal layer that detects
          financial-stress intent &mdash; second and third two-pot withdrawals, garnishee orders,
          credit declines, missed bond payments &mdash; and routes pre-qualified Section 86
          referrals to an NCR-registered debt counsellor panel. Visio Debt operates as a
          POPIA-compliant lead aggregator without requiring NCR registration itself, because a
          referral layer is not a debt counsellor under the NCA. Steady-state target:{" "}
          <strong>R50M ARR</strong>.
        </p>
      </div>

      <h2>1. The problem</h2>

      <p>
        South Africa&apos;s debt review market is one of the most under-served consumer-finance
        opportunities on the continent. Nearly half of the credit-active population is in default,
        yet the route into Section 86 debt review is fragmented, stigmatised, and poorly
        signposted. Most over-indebted households discover debt review only after a summons, a
        garnishee order, or a vehicle repossession &mdash; at which point the best outcome (a
        voluntary restructuring with frozen interest) is no longer available.
      </p>

      <p>The data on this friction is severe:</p>

      <ul>
        <li><strong>R57 billion</strong> has been withdrawn from the Two-Pot Retirement System by June 2025 &mdash; the single largest cash-flow-into-households event in recent SA history.</li>
        <li><strong>79% of members who withdrew to settle debt</strong> have stated an intention to withdraw again &mdash; a structural repeat-withdrawer population.</li>
        <li><strong>62% of March 2026 withdrawals are third-time</strong>, up from 5% first-time &mdash; meaning the population has stabilised into a core repeat cohort almost certainly already insolvent.</li>
        <li><strong>40% of credit-active South Africans are in default</strong> (Eighty20 Q4 2025), with a R12 billion single-quarter increase in overdue balances.</li>
        <li><strong>SARS recovered R1 billion</strong> in outstanding tax debt via two-pot stop orders &mdash; the largest single enforcement event in recent collection history.</li>
      </ul>

      <p>
        The result is a market in which the demand for debt review is unprecedented, the supply
        (NCR-registered counsellors) is ready, and the distribution layer between them is broken.
      </p>

      <h2>2. The legal opening</h2>

      <p>
        A common assumption is that any tool referring consumers to debt review must itself be
        NCR-registered. This is incorrect for a pure signal layer that does not perform Section
        86 work.
      </p>

      <ul>
        <li><strong>NCA Section 44</strong> requires registration only for parties <em>performing debt counselling services</em> &mdash; assessing over-indebtedness, issuing Form 16 notifications, drafting restructuring proposals. A signal layer that does not perform any of these functions is not a debt counsellor.</li>
        <li><strong>NCA Section 86</strong> (the debt review mechanism) applies only to the NCR-registered counsellor. The upstream referral flow &mdash; matching a stressed consumer to the right counsellor &mdash; is not regulated by Section 86.</li>
        <li><strong>FAIS Act Section 1</strong> excludes credit agreements from the definition of a &ldquo;financial product&rdquo;. A debt review referral tool is therefore not an FSP and does not require FSCA licensing.</li>
        <li><strong>POPIA</strong> governs the processing of all personal information and is the only meaningful regulatory regime for a signal aggregator in this vertical &mdash; handled via explicit consent gates, an Information Officer registration, and a 90-day retention rule.</li>
      </ul>

      <p>
        Inside this gap, Visio Debt operates as a <strong>referral + triage layer</strong>,
        structurally analogous to the way healthcare triage services refer to GPs without
        themselves being medical providers. Visio Debt is a distribution channel for
        NCR-registered counsellors, not a replacement for them.
      </p>

      <h2>3. The signal engine</h2>

      <p>Visio Debt runs on six families of financial-stress intent signals:</p>

      <ol>
        <li><strong>Two-pot withdrawal.</strong> Second and third withdrawals are the highest-confidence signal in the entire SA credit market. A third-draw withdrawer is almost definitionally no longer solvent under their current obligations.</li>
        <li><strong>Garnishee order.</strong> Court orders against earnings are a public-record signal that a consumer has lost control of a debt. The window between the first garnishee order and the feasibility of Section 86 intervention is short but valuable.</li>
        <li><strong>Judgment received.</strong> Default judgments registered against a consumer at the Magistrates&apos; Court are a strong signal of cascade failure across multiple accounts.</li>
        <li><strong>Credit decline.</strong> A recent credit application decline &mdash; vehicle finance, personal loan, retail store card &mdash; combined with an existing obligation stack is a pre-insolvency indicator.</li>
        <li><strong>Missed bond / secured payment.</strong> Missed home loan or vehicle finance instalments are the highest-severity stress signal because they expose the household to asset loss.</li>
        <li><strong>Multiple accounts over.</strong> A consumer with three or more accounts in arrears simultaneously is structurally a debt review candidate &mdash; the economics of restructuring begin to favour Section 86 at this threshold.</li>
      </ol>

      <p>
        Each signal is scored on a <strong>0&ndash;100 heat scale</strong>, time-decayed over 30
        days (debt stress decays slowly; a judgment received 25 days ago is still very live), and
        mapped to a <strong>Green / Amber / Red</strong> grade. Green leads are routed to a
        counsellor panel within 2 hours; Amber leads receive an educational nurture sequence
        explaining what Section 86 is and is not; Red leads are held for re-evaluation.
      </p>

      <h2>4. Why this matters for the buyer</h2>

      <p>
        A consumer using Visio Debt learns three things in 60 seconds that would otherwise take
        weeks of confused Googling and shame to discover:
      </p>

      <ol>
        <li>Whether Section 86 debt review is actually the right fit for their specific debt profile &mdash; or whether a simpler intervention (direct negotiation, budget coaching, retrenchment claim) is more appropriate.</li>
        <li>What it will cost, how long the process takes, what impact it will have on their credit record, and what their consolidated monthly payment would look like &mdash; calibrated against the published NCR fee guidelines.</li>
        <li>Which NCR-registered counsellor is best matched to their province, debt profile, and preferred communication style &mdash; without having to phone seven firms and repeat their humiliation each time.</li>
      </ol>

      <p>
        Crucially, the platform is explicit that debt review is <strong>not a shortcut</strong>.
        Every screen carries the NCR&apos;s own warning language about the credit record impact,
        the duration of the restructuring, and the permanent record of the debt review flag on
        the bureau files until the clearance certificate is issued.
      </p>

      <h2>5. Why this matters for the NCR counsellor</h2>

      <p>
        The counsellor&apos;s central problem is <strong>lead quality at the top of funnel</strong>.
        Conventional acquisition channels &mdash; Google Ads, radio, billboards &mdash; generate
        volume, but also attract consumers who do not qualify under Section 86 or who fall out of
        the process during the Form 16 notification stage. Industry-standard drop-out rates
        between lead and signed application are high.
      </p>

      <p>
        Visio Debt pre-qualifies. By the time a lead arrives at a counsellor, it has been filtered
        against the stress-signal threshold (three or more accounts in arrears, or a detected
        two-pot repeat withdrawal, or a judgment received), and the consumer has already
        self-declared their income, obligations, and household size. Counsellors can work a
        smaller volume of higher-converting leads and re-invest the saved intake-desk time into
        the after-care phase where most of their regulated income is actually earned.
      </p>

      <h2>6. Revenue model</h2>

      <ol>
        <li><strong>Counsellor lead-fees.</strong> R150&ndash;R500 per qualified, Section-86-ready lead. At 8,000 monthly Green+Amber leads × average R300 = <strong>~R29M ARR</strong>.</li>
        <li><strong>Counsellor panel subscription.</strong> R2,000/month for panel inclusion, dashboard access, and two-pot intent alerts. At ~150 counsellor firms on the panel = <strong>~R3.6M ARR</strong>.</li>
        <li><strong>Cross-vertical referral bonuses.</strong> Red leads (non-Section-86 candidates) routed to insurance brokers, debt consolidation lenders, or credit life insurance partners produce secondary lead fees of R100&ndash;R300 per lead. At 3,000 monthly cross-referrals × average R180 = <strong>~R6.5M ARR</strong>.</li>
      </ol>

      <p>Combined steady-state: <strong>~R50M ARR</strong> across the three streams, 86%+ gross margin.</p>

      <h2>7. Limitations and ethical considerations</h2>

      <p>
        Visio Debt is a signal layer, not a debt counsellor. Every screen carries:{" "}
        <em>&ldquo;This is not debt counselling. It is an educational assessment to determine
        whether NCR-registered debt review may be appropriate for your situation. Only an
        NCR-registered debt counsellor can place you under Section 86 debt review. Visio Debt
        does not charge consumers; our counsellor panel pays for qualified referrals under
        POPIA-compliant consent.&rdquo;</em>
      </p>

      <p>
        The ethical risk in this vertical is the opposite of most: not false positives, but
        <strong> false negatives</strong>. Under-triaging a consumer who needs Section 86 and
        sending them back to &ldquo;keep paying&rdquo; accelerates insolvency. The engine is
        biased toward over-triaging into Section 86 rather than under-triaging &mdash; a reverse
        of the Shield and Bond conservative buffers, because the cost of a wrong answer is
        asymmetric in the opposite direction.
      </p>

      <p>
        POPIA consent is absolute in this vertical. Debt data is intensely personal, and Visio
        Debt collects it under an explicit, revocable, and audited consent flow. No data is sold,
        shared, or used for cross-marketing without a separate consent gate.
      </p>

      <h2>8. Conclusion</h2>

      <p>
        Visio Debt is a precise legal positioning wrapped around what is likely the largest
        under-served debt market on the continent. By detecting two-pot repeat withdrawals,
        garnishee events, and multi-account stress signals at the top of the funnel, and routing
        them to an NCR-registered counsellor panel in real time, it restores access to Section 86
        debt review to the consumers who need it most. It does this without becoming a debt
        counsellor itself, without offering FAIS-regulated advice, and without any of the
        regulatory burden that has prevented anyone else from building a credible debt
        aggregation layer since the NCA was passed.
      </p>

      <p>
        The R50M ARR opportunity is not the most interesting thing. The most interesting thing is
        that Visio Debt converts the <strong>largest household stress event in South African
        economic history &mdash; the Two-Pot withdrawal cycle</strong> &mdash; into a distribution
        channel for the very regulated counsellor pool that exists to help these consumers. It is
        the signal layer that the NCA always implied should exist but no one built.
      </p>

      <hr />

      <p className="footnote">
        <strong>References:</strong> National Credit Act 34 of 2005 (Sections 44, 86, 129);
        Affordability Assessment Regulations 2015; FAIS Act 37 of 2002 Section 1 (exclusion of
        credit agreements); POPIA Act 4 of 2013; Pension Funds Act (Two-Pot Retirement System
        amendment); SARS Two-Pot Retirement System Guidance; National Treasury Two-Pot FAQ
        (August 2024); Moonstone Information Refinery &mdash; Two-Pot Withdrawal Surge (2025);
        SAnews &mdash; Two-Pot System Withdrawals Hit R21 Billion; Eighty20 Q4 2025 Credit Stress
        Report; DebtBusters Debt Index; NCR Public Register of Debt Counsellors. Repository:{" "}
        <a href="https://github.com/Iamhamptom/visio-lead-gen">github.com/Iamhamptom/visio-lead-gen</a>.
      </p>

      <p className="footnote">
        <strong>Forward-looking assumptions:</strong> The ARR target in this paper is a Year-5
        steady-state projection, not a Year-1 run-rate. See the VRL Forward-Looking Assumptions
        and Cross-References Addendum (<code>research/_VRL-FORWARD-LOOKING-ASSUMPTIONS-AND-SOURCES.md</code>)
        for the full ramp schedule and the consolidated government, banking, and consultancy
        cross-reference source list &mdash; SARB Financial Stability Review, StatsSA, National
        Treasury, SARS Two-Pot Statistics, NCR Consumer Credit Market Report, NCR Credit Bureau
        Monitor, FSCA, DebtBusters Debt Index, Eighty20 Credit Stress Report, TransUnion
        Consumer Credit Quarterly, Experian Business Debt Index, Moonstone, Nedbank Economic
        Unit, Standard Bank Research, and ASISA retirement fund data.
      </p>

      <p className="footnote">
        Cite as: Hampton, D. (2026). &ldquo;Visio Debt: A Neutral Debt Review Signal Layer for
        South Africa&apos;s Over-Indebted Households&rdquo;. Visio Research Labs, VRL-LEADGEN-004.
      </p>
    </PaperLayout>
  );
}
