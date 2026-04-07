import PaperLayout from "@/components/papers/PaperLayout";

export const metadata = {
  title: "Visio Realty — VRL-LEADGEN-010 | Visio Research Labs",
  description:
    "A neutral residential real estate signal layer for South Africa. Listing-view intent, two-pot deposit detection, show-house attendance, and seller-side valuation routing for PPRA-registered estate agents. R55M ARR opportunity in the strongest residential cycle since 2021.",
};

export default function VisioRealtyPaperPage() {
  return (
    <PaperLayout
      paperNumber="VRL-LEADGEN-010"
      category="Visio Realty"
      title="A neutral residential real estate signal layer for South Africa."
      subtitle="SARB 150bps cut + Two-Pot R57bn deposit funding + first-time buyer share at a 10-year high. Visio Realty detects buyer and seller intent and routes warm leads to PPRA-registered estate agents in real time. R55M ARR opportunity."
      publishDate="April 2026"
      authors="Dr. David Hampton, VRL"
    >
      <div className="callout">
        <span className="callout-label">Abstract</span>
        <p className="text-[15px] leading-relaxed text-white/65 italic m-0">
          South Africa&apos;s residential real estate market has just entered its strongest cycle
          since 2021, driven by three converging catalysts: a cumulative{" "}
          <strong>150 basis point SARB rate cut</strong> from September 2024, a first-time buyer
          share of <strong>~48% at the market leader (ooba Oobarometer Q4 2025)</strong> &mdash;
          the highest in over a decade &mdash; and the quiet <strong>R57 billion deposit stream</strong>{" "}
          flowing out of the Two-Pot Retirement System into household balance sheets. The agent
          market is structured around ten dominant franchise networks regulated by the Property
          Practitioners Regulatory Authority (PPRA), with Property24 and Private Property as the
          dominant listing portals. This paper introduces <strong>Visio Realty</strong>, a signal
          layer that detects residential buyer and seller intent &mdash; listing-view dwell,
          show-house attendance, valuation requests, two-pot deposit funding &mdash; and delivers
          warm leads to PPRA-registered estate agents in real time. Visio Realty operates as a
          POPIA-compliant lead aggregator without itself being an estate agent, and is therefore
          not subject to PPRA Fidelity Fund Certificate requirements. Steady-state target:{" "}
          <strong>R55M ARR</strong>.
        </p>
      </div>

      <h2>1. The problem</h2>

      <p>
        The South African residential real estate market is one of the deepest, most data-rich
        consumer markets on the continent &mdash; and yet the matching layer between buyers and
        agents is broken. Buyers spend weeks scrolling Property24 listings without ever calling
        an agent. Sellers fall back on the agent who happens to door-knock first, regardless of
        that agent&apos;s actual track record in their suburb and price band. Agents pay heavily
        for portal placement and door-to-door marketing while having no visibility into which
        prospects are actively shopping versus passively browsing.
      </p>

      <p>The data on this friction is severe:</p>

      <ul>
        <li><strong>ooba Oobarometer Q4 2025 reports a first-time buyer share of ~48%</strong>, the highest in a decade &mdash; but no agent receives a structured "this buyer is now ready to view" alert.</li>
        <li><strong>R57 billion has flowed out of Two-Pot</strong> by June 2025, much of it functioning as first-time-buyer deposit funding &mdash; entirely invisible to the agent until the offer is on the table.</li>
        <li><strong>SARB cut 150bps cumulatively</strong> from September 2024, restoring approximately R1,500/month of household disposable income on a R1.5M bond, but agents have no way to identify newly qualifying buyers.</li>
        <li>The <strong>standard commission rate of 5–7.5% plus VAT</strong> means a single converted seller mandate on a R2M property is worth R60k–R100k of agent gross income &mdash; yet leads remain priced at R250–R1,200 because no aggregator distinguishes intent from noise.</li>
      </ul>

      <p>
        The result is a market in which the demand is at a decade-high, the supply (agents) is
        ready and motivated, the data infrastructure (Lightstone, Deeds Office, ooba/BetterBond
        upstream) is unusually rich, and the matching layer is the only thing that has not been
        built.
      </p>

      <h2>2. The legal opening</h2>

      <p>
        A common assumption is that any tool referring buyers and sellers to estate agents must
        itself be PPRA-registered as an estate agency. This is incorrect for a pure signal layer
        that does not perform agency functions.
      </p>

      <ul>
        <li><strong>Property Practitioners Act 22 of 2019</strong> defines a "property practitioner" by the act of <em>marketing, selling, leasing, or managing immovable property on behalf of another</em>. A signal layer that does not market specific properties, does not act as principal or agent in any transaction, and does not handle trust money is not a property practitioner under the Act.</li>
        <li><strong>PPRA Fidelity Fund Certificate (FFC)</strong> is required for any party performing property practitioner functions. A signal aggregator referring leads to FFC-holding agents is not itself required to hold an FFC.</li>
        <li><strong>FAIS Act</strong> is irrelevant: residential real estate transactions are not financial products under FAIS Section 1.</li>
        <li><strong>FICA</strong> imposes anti-money-laundering obligations on property practitioners, including buyer source-of-funds verification at the offer stage. A signal layer that does not handle funds is not an accountable institution under FICA.</li>
        <li><strong>POPIA</strong> applies to all personal information processed, with explicit consent required for any data shared with the estate agent panel.</li>
      </ul>

      <p>
        Inside this gap, Visio Realty operates as a <strong>discovery + intent scoring + referral
        layer</strong>, structurally analogous to the way Property24 itself operates as a listing
        portal without being an estate agency, but with intent scoring and warm-lead routing
        rather than passive listing display.
      </p>

      <h2>3. The signal engine</h2>

      <p>Visio Realty runs on six families of residential real estate intent signals:</p>

      <ol>
        <li><strong>Listing view intent.</strong> Property24 and Private Property listing dwell time, repeat-view patterns, saved-search behaviour, and directional engagement (multiple views of the same suburb at the same price band).</li>
        <li><strong>Show-house attendance.</strong> Confirmed visits to specific show-houses captured via agent-app integration, geofenced check-in, or self-reported visit logs. The single highest-conversion intent signal in the entire residential funnel.</li>
        <li><strong>Valuation request.</strong> Seller-side intent &mdash; users requesting an automated valuation, comparing their suburb&apos;s recent transactions, or engaging with "what is my house worth" content. The highest-margin lead category because seller mandates are worth materially more than buyer-side leads.</li>
        <li><strong>Two-pot deposit funding.</strong> Detection of a recent or pending two-pot withdrawal in the R80k–R150k band &mdash; the structural deposit signature for an R800k–R1.5M first-time-buyer purchase 30–90 days ahead.</li>
        <li><strong>Relocation family.</strong> Family-relocation intent signals &mdash; school enrolment changes, new-employer events, semigration patterns from Gauteng to KZN North Coast or Cape Town &mdash; that drive both selling and buying activity at the same time.</li>
        <li><strong>Investor buy-to-let.</strong> Yield-driven investment intent &mdash; rental-yield search patterns, second-property research, student-accommodation enquiries in university suburbs.</li>
      </ol>

      <p>
        Each signal is scored on a <strong>0&ndash;100 heat scale</strong>, time-decayed over 28
        days (residential decisions are slower than insurance or debt but faster than commercial
        property), and mapped to a <strong>Green / Amber / Red</strong> grade. Green leads are
        routed to agent partners within 2 hours; Amber leads enter an educational nurture
        sequence (transfer cost calculator, bond affordability cross-link to Visio Bond, suburb
        comparison tools); Red leads are held for re-evaluation against the next show-house
        weekend.
      </p>

      <h2>4. Why this matters for the buyer or seller</h2>

      <p>
        A consumer using Visio Realty learns three things in under two minutes that would
        otherwise take weeks of confused Property24 scrolling and three door-knock visits to
        discover:
      </p>

      <ol>
        <li>An honest comparison of agents who actually have a track record in their specific suburb and price band &mdash; not just the agent who happens to be listed at the top of Property24, and not just the agent whose flyer arrived in the postbox first.</li>
        <li>For sellers, an objective valuation calibrated against Lightstone-equivalent suburb data &mdash; with explicit disclosure of the data sources and the date range of comparable transactions &mdash; not the inflated guesstimate produced by the first agent through the door.</li>
        <li>For first-time buyers, a clear bond affordability picture (cross-linked to Visio Bond) and a clear two-pot-deposit-funded purchase plan, with realistic transfer and bond registration costs added to the headline purchase price.</li>
      </ol>

      <p>
        Crucially, the platform does <strong>not list specific properties</strong> &mdash; that
        is the role of Property24 and Private Property. It is a discovery and matching layer
        that sits upstream of those portals, focused on <em>matching the right consumer with the
        right agent</em>, not on displaying inventory.
      </p>

      <h2>5. Why this matters for the PPRA-registered agent</h2>

      <p>
        The agent&apos;s central problem is <strong>portal-driven anonymity</strong>. Buyers
        scroll Property24 for weeks without ever identifying themselves; agents see traffic
        statistics but no signals about who is actually shopping. By the time a buyer makes a
        viewing enquiry, the lead has already been seen by every agent at every listing
        impression and the conversion has been heavily discounted by the time of arrival.
      </p>

      <p>
        Visio Realty inverts this. The agent receives a heat-scored alert when a high-intent
        consumer in their declared suburb and price band reaches a threshold &mdash; before the
        consumer has even contacted a competing agent through a portal listing. The agent can
        proactively reach out with a relevant valuation, a tailored show-house invitation, or a
        first-time-buyer guide, capturing the relationship at the research stage rather than at
        the offer stage. The lead-to-mandate conversion uplift on a heat-scored seller lead is
        materially higher than on a cold listing-portal enquiry.
      </p>

      <h2>6. Revenue model</h2>

      <ol>
        <li><strong>Agent lead-fees.</strong> R250&ndash;R1,200 per qualified lead, scaled by buyer/seller side, by price band, and by lead grade. Seller-side leads (valuation requests, sole-mandate intent) command the top of the range. At 6,000 monthly Green+Amber leads × average R600 = <strong>~R43M ARR</strong>.</li>
        <li><strong>Agent panel subscription.</strong> R2,000/month for panel inclusion, intent dashboard, suburb-level signal alerts, and competitor-monitoring. At ~500 agents on the panel = <strong>~R12M ARR</strong>.</li>
      </ol>

      <p>Combined steady-state: <strong>~R55M ARR</strong>, 87%+ gross margin.</p>

      <h2>7. Limitations and ethical considerations</h2>

      <p>
        Visio Realty is a discovery and matching layer, not an estate agency. Every screen
        carries: <em>&ldquo;This is a discovery and comparison tool. It is not a property
        marketing platform, not a valuation, and not an estate-agency service. All transactions
        are subject to a full mandate and consultation with a PPRA-registered property
        practitioner holding a valid Fidelity Fund Certificate.&rdquo;</em>
      </p>

      <p>
        Agent panel listings include the practitioner&apos;s PPRA registration number, FFC
        validity status, and any public CPD compliance markers, refreshed monthly against the
        PPRA register. Any agent whose FFC lapses or whose registration is suspended is
        automatically removed from the panel until verified.
      </p>

      <p>
        Valuation outputs &mdash; where they appear &mdash; are calibrated against
        publicly-available Deeds Office and Lightstone-equivalent data with explicit confidence
        intervals and a 90-day staleness cap. Visio Realty never presents an inflated guesstimate
        valuation in order to generate a lead, because doing so would harm both the consumer
        (false hope on sale price) and the agent (a mandate signed at an unsustainable price).
      </p>

      <p>
        POPIA consent is treated as absolute. No data is sold or shared cross-vertical without
        a separate explicit consent gate, and the cross-link to Visio Bond is offered as an
        opt-in service rather than as a pre-checked box.
      </p>

      <h2>8. Conclusion</h2>

      <p>
        Visio Realty is a precise legal positioning wrapped around the strongest residential
        cycle in South Africa since 2021. By detecting listing-view intent, show-house
        attendance, valuation requests, two-pot deposit funding, relocation patterns, and
        investor buy-to-let intent at the top of the funnel, and routing heat-scored leads to a
        PPRA-registered agent panel in real time, it converts the unusually rich residential
        data infrastructure into a distribution channel for the agent market for the first
        time. It does this without becoming a property practitioner itself, without holding a
        Fidelity Fund Certificate, and without crossing into FICA accountable-institution
        obligations &mdash; which is to say, without any of the regulatory burden that has
        prevented anyone else from building a credible residential aggregation layer to date.
      </p>

      <p>
        The R55M ARR opportunity is not the most interesting thing. The most interesting thing
        is that Visio Realty closes the loop with Visio Bond: every two-pot first-time buyer
        detected on the bond side becomes an agent-side lead on the realty side, and every
        valuation-request seller becomes a bond switch candidate on the originator side. The two
        verticals together convert the household balance sheet event of the decade &mdash; the
        Two-Pot withdrawal &mdash; into a closed-loop distribution channel that VisioCorp owns
        end-to-end.
      </p>

      <hr />

      <p className="footnote">
        <strong>References:</strong> Property Practitioners Act 22 of 2019; Property Practitioners
        Regulatory Authority Code of Conduct; Financial Intelligence Centre Act 38 of 2001 (FICA);
        FAIS Act 37 of 2002 (Section 1, exclusion of property transactions); POPIA Act 4 of 2013;
        Pension Funds Act (Two-Pot Retirement System amendment); ooba Oobarometer Q4 2025;
        BetterBond Property Market Report Q4 2025; SARB MPC Statements Sep 2024 &ndash; Jan 2026;
        Lightstone Property Annual Reports; Deeds Office Public Registry. Repository:{" "}
        <a href="https://github.com/Iamhamptom/visio-lead-gen">github.com/Iamhamptom/visio-lead-gen</a>.
      </p>

      <p className="footnote">
        <strong>Forward-looking assumptions:</strong> The ARR target in this paper is a Year-5
        steady-state projection, not a Year-1 run-rate. See the VRL Forward-Looking Assumptions
        and Cross-References Addendum (<code>research/_VRL-FORWARD-LOOKING-ASSUMPTIONS-AND-SOURCES.md</code>)
        for the full ramp schedule and the consolidated government, banking, and consultancy
        cross-reference source list &mdash; SARB Monetary Policy Statements, Deeds Office
        public registry, PPRA public register, Lightstone Property Market Reports, FNB
        Property Barometer, ABSA Homeowner Sentiment Index, ABSA House Price Index, Standard
        Bank Home Buyers Report, Nedbank Property Economics, ooba Oobarometer, BetterBond
        Property Market Report, TPN Credit Bureau Residential Rental Monitor, PwC Real Estate
        Insights, and Deloitte SA Real Estate.
      </p>

      <p className="footnote">
        Cite as: Hampton, D. (2026). &ldquo;Visio Realty: A Neutral Residential Real Estate
        Signal Layer for South Africa&rdquo;. Visio Research Labs, VRL-LEADGEN-010.
      </p>
    </PaperLayout>
  );
}
