import PaperLayout from "@/components/papers/PaperLayout";

export const metadata = {
  title: "Visio Schools — VRL-LEADGEN-008 | Visio Research Labs",
  description:
    "A neutral private-school enrolment signal layer for South Africa. ADvTECH + Curro + SPARK + Reddam intake funnel detection, fee-band-aware routing, and January/July intake cycle targeting. R40M ARR opportunity across the JSE-listed duopoly and elite indie tiers.",
};

export default function VisioSchoolsPaperPage() {
  return (
    <PaperLayout
      paperNumber="VRL-LEADGEN-008"
      category="Visio Schools"
      title="A neutral private-school enrolment signal layer for South Africa."
      subtitle="ADvTECH and Curro lead a four-tier private school market structured around the January intake window. Visio Schools detects parent research intent 4–8 months before the enrolment decision and routes pre-qualified leads to the right fee band. R40M ARR opportunity."
      publishDate="April 2026"
      authors="Dr. David Hampton, VRL"
    >
      <div className="callout">
        <span className="callout-label">Abstract</span>
        <p className="text-[15px] leading-relaxed text-white/65 italic m-0">
          South Africa&apos;s private school market is structured around two JSE-listed operators
          (ADvTECH and Curro) and a long tail of elite indie, religious-network, and franchise
          schools across four distinct fee bands (affordable R15k-R45k, mid-fee R40k-R90k,
          premium R80k-R150k, elite R120k-R300k). The dominant enrolment window is the{" "}
          <strong>January primary intake</strong>, with parent research beginning 4&ndash;8 months
          in advance. Curro reported{" "}
          <strong>95.49% NSC pass rate, 99.5% IEB pass rate across 1,525 learners and 30 campuses</strong>{" "}
          in 2024, and ADvTECH operates Crawford International, Trinity House, Abbotts College,
          Maragon, Junior College and Pinnacle College across the full fee spectrum. This paper
          introduces <strong>Visio Schools</strong>, a signal layer that detects parent
          enrolment intent, fee-band-matches it to the right school tier, and routes warm leads
          to Heads of Admissions during the pre-intake research window. Visio Schools operates
          as a POPIA-compliant lead aggregator with elevated consent protocols for child data,
          without itself being a registered education provider. Steady-state target:{" "}
          <strong>R40M ARR</strong>.
        </p>
      </div>

      <h2>1. The problem</h2>

      <p>
        The South African private school market is paradoxical: parents make the single largest
        multi-year discretionary spending decision of their adult lives (R15k-R300k per child
        per year, for 12+ years), yet the discovery layer between them and the right school is
        essentially absent. Parents research by word of mouth, Facebook groups, open-day visits,
        and the haphazard recommendations of friends. Schools, for their part, spend heavily on
        open days, print advertising, billboards and SEO while receiving enquiries from parents
        whose fee-band expectation is wildly mismatched to the school&apos;s positioning.
      </p>

      <p>The data on this friction is severe:</p>

      <ul>
        <li>Curro operates <strong>~30 campuses with 95.49% NSC and 99.5% IEB pass rates (2024)</strong> but has to acquire most new enrolments via its own marketing funnel because no neutral aggregator surfaces the school-by-school performance data in a comparable form.</li>
        <li>ADvTECH operates <strong>six distinct brands across four fee bands</strong> &mdash; Crawford, Trinity House, Abbotts, Maragon, Junior College, Pinnacle &mdash; and relies on parents navigating this complexity on their own.</li>
        <li>SPARK Schools operates <strong>18 schools, 16 primary and 2 high schools</strong>, concentrated in Gauteng, with a tech-enabled delivery model that few parents outside its direct catchment areas know exists.</li>
        <li>The <strong>January intake window</strong> accounts for the majority of new enrolments, with research starting as early as the preceding March-April &mdash; an 8&ndash;10 month decision cycle that is entirely invisible to schools until the parent contacts the admissions office directly.</li>
      </ul>

      <p>
        The result is a market in which parents make a decision of enormous consequence with
        bad information, and schools spend heavily to acquire leads that are not matched to
        their fee band or academic positioning.
      </p>

      <h2>2. The legal opening</h2>

      <p>
        A common assumption is that any tool referring parents to private schools must be
        registered with the Department of Education or hold some form of education-provider
        accreditation. This is incorrect for a pure signal aggregator.
      </p>

      <ul>
        <li><strong>South African Schools Act 84 of 1996</strong> regulates schools themselves and the governance of public schools. Private schools are registered with the provincial Department of Education under the Independent Schools Act framework but the registration attaches to the school, not to any upstream referral layer.</li>
        <li><strong>Independent Examinations Board (IEB) accreditation</strong> is voluntary and applies to the school&apos;s examination pathway. It is not a regulator of lead-gen or marketing activity.</li>
        <li><strong>FAIS Act</strong> is irrelevant: private school enrolment is not a financial product.</li>
        <li><strong>POPIA</strong> applies with <strong>elevated protections for child data</strong>. Any processing of personal information relating to a learner under 18 requires parental consent, and any sharing with a school panel must be scoped to the specific enrolment enquiry.</li>
        <li><strong>ASA / ARB Code of Advertising Practice</strong> governs advertising claims, with particular restrictions on claims about education quality and exam outcomes.</li>
      </ul>

      <p>
        Inside this gap, Visio Schools operates as a <strong>discovery + fee-band matching +
        referral layer</strong>, structurally analogous to the way UCAS operates in the UK for
        university applications &mdash; but private-school-specific, fee-band-aware, and
        commercially sustainable through school panel subscriptions and lead fees.
      </p>

      <h2>3. The signal engine</h2>

      <p>Visio Schools runs on five families of parent enrolment intent signals:</p>

      <ol>
        <li><strong>Relocation family.</strong> Family relocation within SA (Gauteng-to-coastal semigration, town-to-metro internal migration, international return) triggers immediate enrolment urgency because arriving families must place children in schools within weeks, not months. This is the highest-conversion signal in the vertical.</li>
        <li><strong>School search.</strong> Active research intent &mdash; search queries (&ldquo;best private school sandton&rdquo;, &ldquo;Crawford International fees&rdquo;, &ldquo;Curro vs Reddam&rdquo;), comparison-article engagement, open-day registrations on multiple school sites.</li>
        <li><strong>Sibling intake.</strong> Families with an existing child at a private school researching alternative schools for a younger sibling are high-confidence leads &mdash; they have already passed the affordability threshold and are simply choosing which school for which child.</li>
        <li><strong>Public school exit.</strong> Parents researching private alternatives in response to specific incidents at their current public school (safety, academic underperformance, management instability). These are urgent, high-intent leads with a decision window often measured in days.</li>
        <li><strong>Mid-year transfer.</strong> Parents searching for school alternatives during the academic year, outside the normal January/July intake cycles. Smaller volume but the highest lead-to-enrolment conversion rate because the decision is already made &mdash; only the school remains to be chosen.</li>
      </ol>

      <p>
        Each signal is scored on a <strong>0&ndash;100 heat scale</strong>, time-decayed on a
        calendar-aware schedule (signals in May-August have a longer useful life because the
        January intake cycle is still months away; signals in November-January have a very short
        decay because the decision window closes fast), and mapped to a{" "}
        <strong>Green / Amber / Red</strong> grade. Green leads are routed to school Heads of
        Admissions within 4 hours; Amber leads enter a fee-band-specific nurture sequence; Red
        leads are held for re-evaluation at the next intake window.
      </p>

      <h2>4. Why this matters for the parent</h2>

      <p>
        A parent using Visio Schools learns three things in under two minutes that would
        otherwise take weeks of confused open-day visits and coffee-with-friends
        recommendations:
      </p>

      <ol>
        <li>Which schools actually match their fee-band expectation &mdash; cleanly segmented into the four tiers, with honest disclosure of the total cost of attendance (tuition + boarding + extras) rather than the sticker-price tuition alone.</li>
        <li>Published academic performance (NSC and IEB pass rates) for each school, with an explicit note on the selection-effect caveat &mdash; so parents understand that a 99% IEB pass rate partly reflects who the school admits, not purely how it teaches.</li>
        <li>Commute distance, boarding option, sporting and arts programme strength, and religious affiliation &mdash; filtered on the criteria that actually matter for the parent&apos;s specific child, not the criteria that the school&apos;s marketing department chose to emphasise.</li>
      </ol>

      <p>
        Crucially, the platform <strong>does not publish individual child data</strong> and{" "}
        <strong>never asks for it during initial research</strong>. Child-level information is
        only collected at the point of a specific school enquiry, under explicit parental
        consent, with a 90-day retention cap and automatic deletion after the enrolment
        decision is made.
      </p>

      <h2>5. Why this matters for the school Head of Admissions</h2>

      <p>
        The Head of Admissions&apos; central problem is <strong>fee-band mismatch in the enquiry
        pipeline</strong>. A premium-tier school receives enquiries from affordable-tier parents
        who cannot meet the fee band; an affordable-tier school receives enquiries from
        premium-tier parents who think the lower fee implies lower quality. Both sides waste
        admissions-desk hours on unproductive conversations.
      </p>

      <p>
        Visio Schools filters this at the top of funnel. By the time a lead arrives at a school,
        the parent has self-declared an affordability band and geographic preference, the
        child&apos;s year group and start-date expectation, and the specific decision drivers
        (academics / sport / religion / commute / boarding). The admissions desk receives only
        leads that match the school&apos;s actual positioning &mdash; producing a 3&ndash;5x
        improvement in admissions-appointment conversion relative to undifferentiated enquiries.
      </p>

      <h2>6. Revenue model</h2>

      <ol>
        <li><strong>School lead-fees.</strong> R300&ndash;R1,000 per qualified lead, scaled by fee band (affordable R300, mid-fee R500, premium R800, elite R1,000). At 5,500 monthly Green+Amber leads × average R500 = <strong>~R33M ARR</strong>.</li>
        <li><strong>School panel subscription.</strong> R2,000/month for panel inclusion, admissions dashboard, and pre-intake window alerts. At ~300 schools on the panel = <strong>~R7M ARR</strong>.</li>
      </ol>

      <p>Combined steady-state: <strong>~R40M ARR</strong>, 88%+ gross margin.</p>

      <h2>7. Limitations and ethical considerations</h2>

      <p>
        Visio Schools is a discovery and matching layer, not an education provider. Every screen
        carries: <em>&ldquo;This is a discovery and comparison tool. It is not an admissions
        application, not academic advice, and not a guarantee of a school place. All enrolments
        are subject to the individual school&apos;s admissions process, entry requirements, and
        availability.&rdquo;</em>
      </p>

      <p>
        Child data is treated as Special Personal Information under POPIA with the most
        stringent consent gates in the entire Visio Lead Gen platform:
      </p>

      <ul>
        <li>No child information is collected during the initial browse and comparison phase.</li>
        <li>Child data (name, year group, special needs) is only collected at the point of a specific school enquiry, under explicit parental consent.</li>
        <li>The data is scoped to the specific school and the specific enquiry; it is not retained for cross-marketing or forwarded to other schools without a separate explicit consent gate.</li>
        <li>Automatic deletion 90 days after the enrolment decision, unless the parent explicitly elects to retain the profile for follow-up enquiries.</li>
        <li>No under-16 users are permitted on the platform directly; all interactions are parent-gated.</li>
      </ul>

      <p>
        Pass-rate data is presented with the explicit selection-effect caveat &mdash; IEB pass
        rates of 99%+ partly reflect who the school admits, not purely how it teaches. The
        platform will not publish rankings or league tables that reduce complex school quality
        to a single number, because doing so would drive unhealthy parental behaviour and
        misrepresent the underlying educational reality.
      </p>

      <h2>8. Conclusion</h2>

      <p>
        Visio Schools is a precise legal positioning wrapped around the most consequential
        multi-year consumer decision in South African family life. By detecting parent research
        intent 4&ndash;8 months before the January intake decision, matching it to the
        appropriate fee band, and routing warm leads to school Heads of Admissions in real time,
        it converts a fragmented and opaque discovery process into a clean matching layer. It
        does this without itself becoming an education provider, without publishing child data,
        and without crossing the elevated POPIA protections that govern learner information
        &mdash; which is to say, without any of the ethical or regulatory burden that has
        prevented anyone else from building a serious private school aggregation layer in SA to
        date.
      </p>

      <p>
        The R40M ARR opportunity is not the most interesting thing. The most interesting thing
        is that Visio Schools converts the structural public-to-private drift &mdash; the single
        largest demographic shift in SA education &mdash; into a distribution channel for the
        schools that exist to absorb it. VisioCorp becomes the layer between the demand and the
        capacity that the market has structurally needed for a decade.
      </p>

      <hr />

      <p className="footnote">
        <strong>References:</strong> South African Schools Act 84 of 1996; Independent Schools
        Act framework; FAIS Act 37 of 2002; POPIA Act 4 of 2013 (Special Personal Information
        for child data, Section 34 child consent); ASA / ARB Code of Advertising Practice; Curro
        Holdings FY2024 Results (JSE: COH); ADvTECH Group Results (JSE: ADH); IEB Matric Results
        Publications; Department of Basic Education NSC Results; News24 and Daily Investor
        private education coverage. Repository:{" "}
        <a href="https://github.com/Iamhamptom/visio-lead-gen">github.com/Iamhamptom/visio-lead-gen</a>.
      </p>

      <p className="footnote">
        <strong>Forward-looking assumptions:</strong> The ARR target in this paper is a Year-5
        steady-state projection, not a Year-1 run-rate. See the VRL Forward-Looking Assumptions
        and Cross-References Addendum (<code>research/_VRL-FORWARD-LOOKING-ASSUMPTIONS-AND-SOURCES.md</code>)
        for the full ramp schedule and the consolidated government, banking, and consultancy
        cross-reference source list &mdash; Department of Basic Education NSC Results, IEB
        Matric Results, Umalusi, National Treasury Budget Review (Education allocation),
        StatsSA General Household Survey (Education section), Curro Holdings (JSE: COH)
        Integrated Annual Report, ADvTECH Group (JSE: ADH) Integrated Annual Report, Standard
        Bank Research, PwC, and Deloitte Private Education reports.
      </p>

      <p className="footnote">
        Cite as: Hampton, D. (2026). &ldquo;Visio Schools: A Neutral Private-School Enrolment
        Signal Layer for South Africa&rdquo;. Visio Research Labs, VRL-LEADGEN-008.
      </p>
    </PaperLayout>
  );
}
