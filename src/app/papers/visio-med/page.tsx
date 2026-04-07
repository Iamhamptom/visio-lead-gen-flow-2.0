import PaperLayout from "@/components/papers/PaperLayout";

export const metadata = {
  title: "Visio Med — VRL-LEADGEN-005 | Visio Research Labs",
  description:
    "A neutral medical scheme + gap cover signal layer for South Africa. Discovery's back-to-back 9.3% and 7.9% hikes have produced the first permanently open switching window in a decade. R55M ARR opportunity across CMS-accredited brokers.",
};

export default function VisioMedPaperPage() {
  return (
    <PaperLayout
      paperNumber="VRL-LEADGEN-005"
      category="Visio Med"
      title="A neutral medical scheme + gap cover signal layer for South Africa."
      subtitle="Discovery 9.3% in 2025 + 7.9% delayed to April 2026. The first permanently open switching window in a decade. Visio Med detects hike-triggered intent and routes it to CMS-accredited brokers. R55M ARR opportunity."
      publishDate="April 2026"
      authors="Dr. David Hampton, VRL"
    >
      <div className="callout">
        <span className="callout-label">Abstract</span>
        <p className="text-[15px] leading-relaxed text-white/65 italic m-0">
          The South African medical aid market is dominated by Discovery Health Medical Scheme,
          whose pricing decisions set the anchor for the entire open-scheme segment. Discovery
          hiked by a weighted average of <strong>9.3% in 2025</strong> and announced an unusual{" "}
          <strong>7.9% 2026 hike delayed to 1 April 2026</strong> &mdash; the first mid-benefit-year
          re-pricing in recent memory. The industry as a whole raised contributions by 9.4% to
          12.75% in 2025. This paper introduces <strong>Visio Med</strong>, a signal layer that
          detects medical scheme switching intent, compares schemes on a waiting-period-aware
          basis, and routes warm leads to a panel of CMS-accredited brokers. Visio Med operates
          as a POPIA-compliant lead aggregator without requiring CMS broker accreditation itself,
          because a referral layer is not advising on scheme selection. Steady-state target:{" "}
          <strong>R55M ARR</strong>.
        </p>
      </div>

      <h2>1. The problem</h2>

      <p>
        The South African medical aid market is paradoxically both price-pressured and
        switching-inactive. Members are hit with 9–13% contribution hikes annually, watch their
        benefits thin via tariff-shortfall exposure, and yet rarely switch schemes because the
        friction cost &mdash; waiting periods, specialist network disruption, accumulated limit
        losses &mdash; is high and opaque. Brokers, for their part, see the demand for advice
        spike after every hike announcement, but cannot distinguish a curious member from a
        genuinely mobile one.
      </p>

      <p>The data on this friction is severe:</p>

      <ul>
        <li><strong>Discovery 2025 weighted average hike: 9.3%</strong>, with Core and Priority plans rising ~10% (Moonstone, Moneyweb).</li>
        <li><strong>Discovery 2026 hike: 7.9% weighted average, delayed to 1 April 2026</strong> &mdash; an unusual mid-year re-pricing that creates a second switching window in the same benefit year.</li>
        <li>Industry 2025 increases across the five largest open schemes ranged <strong>9.4% to 12.75%</strong>.</li>
        <li>Despite these hikes, inter-scheme transfer rates remain in the low single-digit percent of total membership (per CMS).</li>
      </ul>

      <p>
        The result is a market in which the signal of demand (hike letters, social complaints,
        broker search traffic) is loud, but the conversion of that signal into actual scheme
        switches is quiet. The gap between signal and conversion is the opportunity.
      </p>

      <h2>2. The legal opening</h2>

      <p>
        Medical scheme advice in South Africa sits at the unusual intersection of two regulatory
        regimes, and this intersection is where Visio Med operates without conflict.
      </p>

      <ul>
        <li><strong>Medical Schemes Act 131 of 1998</strong> regulates schemes themselves, administrators, and the brokers who <em>advise on scheme selection</em>. Broker accreditation requires a CMS-issued accreditation number.</li>
        <li><strong>FAIS Act Section 1</strong> explicitly <em>excludes medical scheme membership from the definition of a financial product</em>, but <strong>includes gap cover</strong> (which is a short-term insurance product under the Short-Term Insurance Act). A broker advising on both must be FSCA Category I FSP-licensed in addition to CMS-accredited.</li>
        <li>A <strong>referral layer that publishes scheme comparisons and routes interested members to CMS-accredited brokers</strong> is not itself advising on scheme selection. It is a distribution channel, structurally analogous to Hippo-era comparison websites, without the broker-of-record function.</li>
        <li><strong>POPIA</strong> governs the processing of any personal health-related or financial information. Visio Med handles this with explicit consent gates, a Special Personal Information (SPI) classification for any health data, and strict separation between raw signal data and enriched handoffs to brokers.</li>
      </ul>

      <p>
        Inside this gap, Visio Med operates as a <strong>comparison + triage + referral
        layer</strong>, CMS-aware, FAIS-compliant, and POPIA-certified.
      </p>

      <h2>3. The signal engine</h2>

      <p>Visio Med runs on five families of medical scheme intent signals:</p>

      <ol>
        <li><strong>Scheme hike complaint.</strong> Search patterns, social signals, and forum activity triggered by the annual contribution announcement and the first post-hike month&apos;s debit. Discovery&apos;s delayed 2026 hike produces an unusual second peak mid-year.</li>
        <li><strong>Gap denial.</strong> Members whose gap cover claim has been denied, or who have been hit with a specialist shortfall greater than their gap cover limit, have the highest-intent moment in the medical aid customer lifecycle.</li>
        <li><strong>Hospital plan shock.</strong> Members who have just experienced a hospital admission on a hospital-plan-only option and received a bill for non-covered items (specialists, anaesthetist, radiologist) are at the inflection point where they will either upgrade, buy gap cover, or switch entirely.</li>
        <li><strong>New employer.</strong> A job change is one of the very few windows in which waiting periods can be avoided (if the member was continuously covered on a previous scheme). A new-employer signal is a high-confidence switching trigger.</li>
        <li><strong>Chronic registration.</strong> Members registering a new chronic condition on their existing scheme often discover their plan does not cover the medication, treatment protocol, or specialist they need &mdash; a definitive moment of scheme dissatisfaction.</li>
      </ol>

      <p>
        Each signal is scored on a <strong>0&ndash;100 heat scale</strong>, time-decayed over 28
        days (medical aid research cycles are slower than insurance or debt), and mapped to a{" "}
        <strong>Green / Amber / Red</strong> grade. Green leads are routed to a CMS-accredited
        broker panel within 4 hours; Amber leads enter an educational nurture sequence
        explaining waiting periods, benefit limits, and network implications; Red leads are held
        for re-evaluation at the next hike cycle.
      </p>

      <h2>4. Why this matters for the member</h2>

      <p>
        A member using Visio Med learns three things in 90 seconds that they would otherwise need
        a broker consultation to discover:
      </p>

      <ol>
        <li>Whether their current plan is materially mispriced for their actual utilisation &mdash; calibrated against the published contribution tables of all open schemes and the actual claims history the member has (where they choose to upload it).</li>
        <li>What waiting periods they would face on each alternative scheme &mdash; because a waiting-period-aware comparison is the single most important piece of information for a member contemplating a switch, and almost no existing comparison tool surfaces it clearly.</li>
        <li>How their specialist network would change &mdash; which of their current doctors, hospitals, and pathology labs would be in or out of network on each alternative plan. This is the single biggest reason members don&apos;t switch, and the single biggest information gap in the current market.</li>
      </ol>

      <p>
        All scheme contribution figures and plan details shown to members are{" "}
        <strong>sourced from the schemes&apos; own published rate cards</strong>, timestamped with
        a <code>verifiedAt</code> date, and refreshed monthly. The comparison is explicit about
        which numbers are current and which are from the prior year.
      </p>

      <h2>5. Why this matters for the CMS broker</h2>

      <p>
        The broker&apos;s central problem is <strong>low signal-to-noise at the top of funnel</strong>.
        A broker website receives hundreds of enquiries per month after a hike announcement, of
        which only a small fraction are willing to actually change schemes once they understand
        the waiting-period and network implications. The broker desk&apos;s time is consumed
        answering educational questions from members who will never switch.
      </p>

      <p>
        Visio Med filters this. By the time a lead arrives at a broker, the member has already
        seen the waiting-period implications, the network overlap, and the actual rand-saving
        after accounting for waiting-period medical spend. The broker&apos;s job is no longer
        &ldquo;educate the member&rdquo; but &ldquo;execute the switch&rdquo; &mdash; a 10×
        shorter sales cycle, with a proportionally higher conversion rate and a much higher
        lifetime value per broker desk hour.
      </p>

      <h2>6. Revenue model</h2>

      <ol>
        <li><strong>Broker lead-fees.</strong> R250&ndash;R1,200 per qualified lead, scaled by primary-vs-secondary breadwinner status, declared income band, and plan band (entry / mid / premium). At 7,000 monthly Green+Amber leads × average R550 = <strong>~R46M ARR</strong>.</li>
        <li><strong>Broker panel subscription.</strong> R2,500/month for panel inclusion, the waiting-period comparison engine, and hike-window alerts. At ~300 brokers on the panel = <strong>~R9M ARR</strong>.</li>
      </ol>

      <p>Combined steady-state: <strong>~R55M ARR</strong>, 87%+ gross margin.</p>

      <h2>7. Limitations and ethical considerations</h2>

      <p>
        Visio Med is a comparison and referral layer, not a broker of record. Every screen
        carries: <em>&ldquo;This is an educational comparison. It is not scheme-specific advice,
        not an application, and does not bind any medical scheme. Scheme enrolment is subject to
        a full broker consultation with a CMS-accredited practitioner and to the underwriting
        rules of the chosen scheme.&rdquo;</em>
      </p>

      <p>
        Waiting-period logic is treated as the most sensitive calculation in the engine.
        Under-stating a waiting period risks financial harm to a member with a chronic condition;
        over-stating one risks discouraging a legitimate switch. The engine is biased toward
        <strong> conservative waiting-period estimates</strong> and surfaces the uncertainty
        transparently. When scheme-specific data is stale, the engine routes the user to a
        broker consultation rather than guessing.
      </p>

      <p>
        Health data is treated as Special Personal Information under POPIA. Any chronic
        condition, claims history, or provider network data is stored under explicit revocable
        consent, segregated from general profile data, and retained only for the duration of
        the active advice window.
      </p>

      <h2>8. Conclusion</h2>

      <p>
        Visio Med is a precise legal positioning wrapped around the largest healthcare
        price-pressure event in a decade. By detecting hike-triggered intent, gap-denial moments,
        and chronic-registration inflection points at the top of the funnel, and routing heat-
        scored leads to a CMS-accredited broker panel with waiting-period-aware comparisons, it
        converts the <strong>permanently open switching window</strong> created by Discovery&apos;s
        back-to-back 2025 and April 2026 hikes into a distribution channel for the broker market.
        It does this without becoming a CMS-accredited broker, without offering FAIS-regulated
        advice, and without any of the regulatory burden that has prevented anyone else from
        building a serious medical aid aggregation layer since the pre-Hippo era.
      </p>

      <p>
        The R55M ARR opportunity is not the most interesting thing. The most interesting thing is
        that Visio Med converts <strong>Discovery&apos;s own pricing decisions</strong>, the most
        watched event in the SA private healthcare calendar, into a distribution moment for the
        broker pool that serves the rest of the open-scheme market. VisioCorp becomes the layer
        between the schemes and the members that the regulator always implied should exist.
      </p>

      <hr />

      <p className="footnote">
        <strong>References:</strong> Medical Schemes Act 131 of 1998 (Section 29A waiting
        periods, Section 67 brokers); FAIS Act 37 of 2002 Section 1 (exclusion of medical scheme
        membership, inclusion of gap cover); Short-Term Insurance Act 53 of 1998 + demarcation
        regulations; POPIA Act 4 of 2013 (Special Personal Information); Council for Medical
        Schemes Industry Report; Moonstone &mdash; Discovery 2025 and 2026 contribution increases;
        Moneyweb &mdash; Discovery top plan hikes; Research and Markets &mdash; SA Medical Aid
        Funding Industry Report 2025. Repository:{" "}
        <a href="https://github.com/Iamhamptom/visio-lead-gen">github.com/Iamhamptom/visio-lead-gen</a>.
      </p>

      <p className="footnote">
        <strong>Forward-looking assumptions:</strong> The ARR target in this paper is a Year-5
        steady-state projection, not a Year-1 run-rate. See the VRL Forward-Looking Assumptions
        and Cross-References Addendum (<code>research/_VRL-FORWARD-LOOKING-ASSUMPTIONS-AND-SOURCES.md</code>)
        for the full ramp schedule and the consolidated government, banking, and consultancy
        cross-reference source list &mdash; Council for Medical Schemes Annual Report, Discovery
        Health Integrated Annual Report, Momentum Metropolitan Investor Results, Board of
        Healthcare Funders (BHF), FSCA, Moonstone, Moneyweb, PwC Healthcare, Deloitte SA
        Insurance Outlook, KPMG Medical Schemes Benchmarking, Alexforbes Health, and
        Research and Markets SA Medical Aid Funding Industry Report.
      </p>

      <p className="footnote">
        Cite as: Hampton, D. (2026). &ldquo;Visio Med: A Neutral Medical Scheme + Gap Cover
        Signal Layer for South Africa&rdquo;. Visio Research Labs, VRL-LEADGEN-005.
      </p>
    </PaperLayout>
  );
}
