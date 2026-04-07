import PaperLayout from "@/components/papers/PaperLayout";

export const metadata = {
  title: "Visio Solar — VRL-LEADGEN-003 | Visio Research Labs",
  description:
    "A neutral C&I + residential solar intent signal layer for South Africa. SAPVIA-aligned installer panel, Section 12B-aware economics, Eskom tariff-trigger detection. R60M ARR opportunity in the strongest-performing solar segment on the continent.",
};

export default function VisioSolarPaperPage() {
  return (
    <PaperLayout
      paperNumber="VRL-LEADGEN-003"
      category="Visio Solar"
      title="A neutral C&I + residential solar intent signal layer for South Africa."
      subtitle="R80k–R2m system intent detection across SAPVIA-accredited installers, driven by Eskom tariff triggers and the Section 12B tax window. R60M ARR opportunity in the strongest-performing segment of the SA distributed-generation market."
      publishDate="April 2026"
      authors="Dr. David Hampton, VRL"
    >
      <div className="callout">
        <span className="callout-label">Abstract</span>
        <p className="text-[15px] leading-relaxed text-white/65 italic m-0">
          Per the SAPVIA September 2025 distributed generation trends report, Commercial &amp;
          Industrial (C&amp;I) SSEG is the strongest-performing segment of the South African
          solar market. It is driven by three converging catalysts: Eskom tariff hikes of{" "}
          <strong>~12.7% in April 2025</strong>, the sunset of the expanded{" "}
          <strong>Section 12B</strong> accelerated-depreciation regime on 28 February 2025, and a
          large installed base of diesel-generator and UPS backup solutions accumulated during
          the load-shedding years. This paper introduces <strong>Visio Solar</strong>, a signal
          layer that detects residential and C&amp;I solar intent across a SAPVIA-aligned
          installer panel, delivered in real time with pre-scored payback estimates and
          heat-graded leads. Visio Solar operates as a POPIA-compliant lead aggregator with no
          NERSA registration requirement and no FSP licence exposure. Steady-state target:{" "}
          <strong>R60M ARR</strong>.
        </p>
      </div>

      <h2>1. The problem</h2>

      <p>
        South African solar buyers approach the installer market with no neutral way to compare
        quotes. Residential customers receive three or four quotes from local installers and have
        no way to know whether the hardware is fairly specified, whether the inverter is sized
        for future battery expansion, or whether the quoted system will actually meet their
        declared consumption profile. C&amp;I buyers are in a worse position: their payback
        calculation depends on financing structure (CapEx vs PPA vs lease), tax treatment
        (Section 12B), and host creditworthiness &mdash; variables that most buyers cannot model
        on their own.
      </p>

      <p>The data on this friction is severe:</p>

      <ul>
        <li>The <strong>Section 12B expanded regime expired on 28 February 2025</strong>, tightening the C&amp;I payback story from Q2 2025 onwards and creating urgency around pre-deadline installations.</li>
        <li>The <strong>Eskom 2025 tariff increase of approximately 12.7%</strong> (widely reported; verify against final NERSA MYPD determination) added yet another step-change in the payback narrative.</li>
        <li>SAPVIA&apos;s own trends report flagged C&amp;I SSEG as the <strong>strongest-performing segment</strong> of the distributed-generation market in September 2025.</li>
        <li>The residential installer market has <strong>thousands of operators</strong> across a wide quality spectrum, with SAPVIA membership + PV GreenCard representing the voluntary quality tier.</li>
      </ul>

      <p>
        The result is a market in which the buyer cannot judge installer quality, the installer
        cannot forecast lead quality, and the financing counterparty (bank, PPA provider, lease
        operator) is flying blind on both.
      </p>

      <h2>2. The legal opening</h2>

      <p>
        A common assumption in the SA renewables sector is that any customer-facing solar tool
        must be registered with NERSA, SAPVIA, or the FSCA. This is incorrect for a pure lead
        signal layer.
      </p>

      <ul>
        <li><strong>NERSA Electricity Regulation Act</strong> requires registration or licensing only above specific installation thresholds (≤100 kWp generally exempt for residential, with SSEG registration required but not a licence). A signal layer that does not install, generate, or trade in electricity is not regulated by NERSA.</li>
        <li><strong>SAPVIA accreditation is voluntary</strong> &mdash; it is a quality mark, not a legal requirement. Visio Solar aligns its panel to SAPVIA members by choice, not by statute.</li>
        <li><strong>FAIS Act Section 1</strong> defines financial services in terms of advice on financial products. A solar signal layer that estimates payback and refers buyers to installers is not a financial services provider under the Act.</li>
        <li><strong>National Credit Act</strong> applies only if Visio Solar extends credit, which it does not; financing handoffs go to NCR-registered credit providers on the installer panel.</li>
      </ul>

      <p>
        What remains is <strong>POPIA</strong>, which governs the processing of personal
        information, and the <strong>Consumer Protection Act</strong>, which governs advertising
        and disclosure to consumers. Both are handled via explicit consent gates, transparent
        handoff disclosures, and a clear installer-panel audit trail.
      </p>

      <h2>3. The signal engine</h2>

      <p>Visio Solar runs on six families of solar intent signals:</p>

      <ol>
        <li><strong>Eskom tariff complaint.</strong> Search patterns and social signals triggered by the annual NERSA tariff determination announcement and the first post-increase monthly bill cycle.</li>
        <li><strong>Load-shedding / Stage 4+ recurrence.</strong> Backup power failure events, including unplanned grid outages, load-reduction stages, and local fault patterns detectable via NRS-048 and user-reported signals.</li>
        <li><strong>PPA / lease inquiry.</strong> C&amp;I buyer-side research patterns &mdash; search queries around &ldquo;solar PPA cost&rdquo;, &ldquo;solar lease commercial&rdquo;, &ldquo;rooftop solar rent&rdquo;, &ldquo;Section 12B solar&rdquo;.</li>
        <li><strong>Backup power failure.</strong> Generator service calls, UPS replacement intent, and portable-battery failure signals indicating a primary-system upgrade moment.</li>
        <li><strong>New property.</strong> Bond registration events in target price bands (R1.5M+ residential, R5M+ commercial) paired with declared ownership intent for solar.</li>
        <li><strong>Generator replacement.</strong> Diesel-cost-driven intent in the existing installed base of generator owners &mdash; a large, structurally defined pool of addressable upgrade demand.</li>
      </ol>

      <p>
        Each signal is scored on a <strong>0&ndash;100 heat scale</strong>, time-decayed over 21
        days (solar intent has longer decay than insurance or debt because purchase cycles are
        longer), and mapped to a <strong>Green / Amber / Red</strong> grade. Green leads are
        routed to installer partners within 4 hours; Amber leads enter a payback-education nurture
        sequence; Red leads are held for re-evaluation against the next tariff announcement.
      </p>

      <h2>4. Why this matters for the buyer</h2>

      <p>
        A buyer using Visio Solar learns three things in under two minutes that would otherwise
        require four installer site visits to discover:
      </p>

      <ol>
        <li>An honest payback estimate calibrated against their declared monthly Eskom spend, the current Eskom tariff, and the applicable Section 12B / post-12B tax treatment &mdash; with explicit disclosure of whether the payback is before or after Section 12B.</li>
        <li>A SAPVIA-accredited installer panel filtered by province, job-size capability, and historical customer satisfaction &mdash; no more sorting through hundreds of undifferentiated listings.</li>
        <li>A neutral comparison of financing structures &mdash; CapEx vs lease vs PPA &mdash; calibrated against their risk profile and balance-sheet flexibility, without the installer&apos;s sales-side bias.</li>
      </ol>

      <p>
        Crucially, all tariff and tax figures shown to the buyer are <strong>sourced from the
        current NERSA determination and SARS Section 12B guidance</strong>, timestamped with a{" "}
        <code>verifiedAt</code> date, and never fabricated. When a figure is uncertain, the
        engine surfaces the uncertainty rather than hiding it.
      </p>

      <h2>5. Why this matters for the installer</h2>

      <p>
        The installer&apos;s central problem is <strong>wasted site visits</strong>. The median
        residential quote takes 60–90 minutes of installer time on-site plus a further 60
        minutes of desk time to produce &mdash; and converts at roughly 15–25% (VRL
        observation). At scale, an installer dedicating two field technicians full-time to
        residential quoting is burning R150k+ per month on unconverted quotes.
      </p>

      <p>
        Visio Solar filters this. By the time a lead arrives at an installer, it has been
        self-qualified on monthly spend, roof orientation (declared or geocoded), property
        ownership status, and financing preference. Installers can triage their calendar toward
        high-heat leads, batch low-heat leads for virtual quoting, and reclaim the field-visit
        hours that were previously consumed by no-go appointments. Most importantly, they can
        underwrite the lead-fee against a forecastable conversion rate.
      </p>

      <h2>6. Revenue model</h2>

      <ol>
        <li><strong>Installer lead-fees.</strong> R400&ndash;R2,500 per qualified lead, scaled by system size band (residential 5 kWp, residential 10+ kWp, SME C&amp;I, mid-market C&amp;I). At 3,000 monthly Green+Amber leads × average R1,200 = <strong>~R43M ARR</strong>.</li>
        <li><strong>Installer subscription.</strong> R3,000/month for panel inclusion, payback dashboard, and Section 12B calculator. At ~450 panel installers = <strong>~R16M ARR</strong>.</li>
      </ol>

      <p>Combined steady-state: <strong>~R60M ARR</strong>, 85%+ gross margin.</p>

      <h2>7. Limitations and ethical considerations</h2>

      <p>
        Visio Solar is an intent layer, not an installer. Every buyer-facing screen carries:{" "}
        <em>&ldquo;This is an educational estimate. It is not a system quote, not a guarantee of
        performance, and is not financial or tax advice. Final system sizing, pricing, and
        Section 12B eligibility are subject to a full site assessment by an accredited
        installer.&rdquo;</em>
      </p>

      <p>
        We do not install, commission, or service systems. We do not collect referral commissions
        from hardware vendors in ways that bias the comparison; when such referral fees apply,
        they are disclosed to the buyer on the same screen as the comparison. The engine biases
        toward <strong>under-promising</strong> payback periods by using conservative assumptions
        on output degradation (0.6% per year), inverter losses (3%), and soiling factors (2%).
      </p>

      <p>
        POPIA retention is strict: raw signal data retained 90 days, enriched installer-handoff
        data retained 24 months or until the project completes, whichever is shorter.
      </p>

      <h2>8. Conclusion</h2>

      <p>
        Visio Solar is a precise legal positioning wrapped around the strongest-performing
        segment of the South African solar market. By detecting tariff-triggered intent,
        backup-power replacement intent, and C&amp;I PPA research moments, and delivering
        heat-scored leads to a SAPVIA-aligned installer panel in real time, it compresses the
        solar sales cycle and gives installers forecastable lead economics for the first time.
        It does this without becoming a NERSA-regulated energy provider, without offering
        FAIS-regulated advice, and without any of the licensing burden that has prevented solar
        aggregators from scaling cleanly to date.
      </p>

      <p>
        The R60M ARR opportunity is not the most interesting thing. The most interesting thing is
        that Visio Solar converts the <strong>most predictable annual event in the SA energy
        market &mdash; the NERSA tariff determination</strong> &mdash; into a distribution
        channel for SAPVIA-accredited installers, and positions VisioCorp as the layer that sits
        between Eskom&apos;s price pain and the country&apos;s largest structural upgrade
        opportunity.
      </p>

      <hr />

      <p className="footnote">
        <strong>References:</strong> Electricity Regulation Act 4 of 2006; SSEG Registration
        Guidelines (NERSA); Income Tax Act Section 12B (as amended 2023–2025); FAIS Act 37 of
        2002 Section 1; POPIA Act 4 of 2013; SAPVIA Trends and Statistics of Solar PV Distributed
        Generation in South Africa (September 2025); PV GreenCard Programme Documentation;
        NERSA MYPD Determinations; SARS Section 12B guidance. Repository:{" "}
        <a href="https://github.com/Iamhamptom/visio-lead-gen">github.com/Iamhamptom/visio-lead-gen</a>.
      </p>

      <p className="footnote">
        <strong>Forward-looking assumptions:</strong> The ARR target in this paper is a Year-5
        steady-state projection, not a Year-1 run-rate. See the VRL Forward-Looking Assumptions
        and Cross-References Addendum (<code>research/_VRL-FORWARD-LOOKING-ASSUMPTIONS-AND-SOURCES.md</code>)
        for the full ramp schedule (Y1 ~10&ndash;15% of Y5, Y3 ~50%) and the consolidated
        government, banking, and consultancy cross-reference source list &mdash; SARB, StatsSA,
        National Treasury, NERSA, Eskom Integrated Annual Report, SAPVIA, GreenCape, Standard
        Bank Research, Nedbank Economic Unit, Investec Focus, PwC, Deloitte, KPMG, and industry
        bodies (SAPVIA, PV GreenCard, BASA).
      </p>

      <p className="footnote">
        Cite as: Hampton, D. (2026). &ldquo;Visio Solar: A Neutral C&amp;I + Residential Solar
        Intent Signal Layer for South Africa&rdquo;. Visio Research Labs, VRL-LEADGEN-003.
      </p>
    </PaperLayout>
  );
}
