import PaperLayout from "@/components/papers/PaperLayout";

export const metadata = {
  title: "Visio Commerce — VRL-LEADGEN-011 | Visio Research Labs",
  description:
    "A neutral e-commerce buying-intent signal layer for South Africa. Cart abandonment detection, cross-merchant category intent, and delivery-area purchase-readiness routing for Takealot-era and Amazon-SA-era merchants. R50M Year-5 steady-state ARR target across the contested SA online retail market.",
};

export default function VisioCommercePaperPage() {
  return (
    <PaperLayout
      paperNumber="VRL-LEADGEN-011"
      category="Visio Commerce"
      title="A neutral e-commerce buying-intent signal layer for South Africa."
      subtitle="The May 2024 launch of Amazon South Africa + Takealot dominance + Checkers Sixty60 on-demand + a long tail of Shopify Plus DTC brands. Visio Commerce detects cart-level and cross-merchant buying intent and routes heat-scored leads to merchant panels under POPIA-compliant consent. R50M Year-5 steady-state ARR target."
      publishDate="April 2026"
      authors="Dr. David Hampton, VRL"
    >
      <div className="callout">
        <span className="callout-label">Abstract</span>
        <p className="text-[15px] leading-relaxed text-white/65 italic m-0">
          South Africa&apos;s e-commerce market has, within 18 months, moved from a single-
          dominant-platform market (Takealot) to a contested two-platform market (Takealot +
          Amazon SA, launched May 2024), with a long tail of DTC brands, specialty retailers,
          grocery-delivery apps, and Shopify Plus operators around them. Total SA online retail
          passed <strong>R71 billion in 2023</strong> per the Worldwide Worx Online Retail
          Report, with double-digit growth continuing through 2024-2025. Merchant customer
          acquisition cost (CAC) is the most sensitive variable in the business; high-performing
          DTC brands operate at CAC in the R150&ndash;R600 range (VRL observation). This paper
          introduces <strong>Visio Commerce</strong>, a signal layer that detects cart
          abandonment, cross-merchant category intent, price-comparison behaviour, and delivery-
          area purchase readiness, and routes heat-scored leads to a merchant panel under
          POPIA-compliant, consent-gated data sharing. Visio Commerce operates under the ECT
          Act, CPA, POPIA, and NCA regulatory envelope without itself being a retailer or
          payment provider. Steady-state target (Year 5): <strong>R50M ARR</strong>. See the
          VRL Forward-Looking Assumptions addendum for the full ramp schedule and cross-
          reference source list.
        </p>
      </div>

      <h2>1. The problem</h2>

      <p>
        The South African e-commerce merchant market has rich first-party intent data and
        almost no infrastructure for sharing that data across merchants in a privacy-compliant
        way. Every serious retailer, DTC brand, and Shopify Plus operator tracks cart
        abandonment, page dwell, category research, and repeat-visit patterns on their own
        site. None of them can see the <em>category-level</em> buying intent that exists across
        the entire market &mdash; the buyer who looked at three competing products on three
        competing sites before pulling the trigger on the fourth.
      </p>

      <p>The data on this friction is severe:</p>

      <ul>
        <li>SA online retail passed <strong>R71 billion in 2023</strong> (Worldwide Worx), with continued double-digit growth through 2024-2025.</li>
        <li>The <strong>May 2024 launch of Amazon SA</strong> has structurally increased competitive pressure on Takealot and on the broader SA retailer ecosystem &mdash; no single platform owns the buyer relationship any more.</li>
        <li><strong>Cart abandonment rates sit in the 65&ndash;75% range</strong> globally (Baymard Institute); SA is widely cited as similar or slightly higher due to payment and delivery friction.</li>
        <li>Merchant <strong>customer acquisition cost (CAC)</strong> is the single most sensitive variable in DTC e-commerce unit economics. At R150&ndash;R600 CAC, a warm lead at R100&ndash;R500 can meaningfully improve merchant margins &mdash; if the lead is intent-scored and not noise.</li>
      </ul>

      <p>
        The result is a market in which every merchant has fragmentary intent data, no merchant
        has category-level intent data, and the category-level view is the single most valuable
        thing an aggregator can build.
      </p>

      <h2>2. The legal opening</h2>

      <p>
        E-commerce in South Africa is regulated by a web of consumer-protection and data-
        protection regimes that define what data can be collected, what consent is required,
        and what sharing is permitted.
      </p>

      <ul>
        <li><strong>Electronic Communications and Transactions Act 25 of 2002 (ECT Act)</strong> establishes the legal framework for e-commerce transactions, cooling-off rights (Section 44), and the validity of electronic contracts. A signal layer is not a seller under the ECT Act; it does not enter into consumer contracts and does not process payments.</li>
        <li><strong>Consumer Protection Act 68 of 2008 (CPA)</strong> governs consumer transactions including advertising, disclosure, and complaint handling via the National Consumer Commission. A signal layer is not a supplier under the CPA unless it markets specific goods and services in its own name.</li>
        <li><strong>Protection of Personal Information Act 4 of 2013 (POPIA)</strong> is the central regulatory concern for any intent-data aggregator. Visio Commerce operates under <strong>explicit, consent-gated, category-level data sharing</strong> &mdash; no PII, no specific SKU tracking, no cross-merchant identity resolution without explicit per-merchant consent. Consent is refreshable, revocable, and audited.</li>
        <li><strong>National Credit Act 34 of 2005 (NCA)</strong> is relevant only where a transaction involves credit (BNPL, layby). Visio Commerce routes BNPL-related intent to NCA-registered credit providers on the merchant panel; it does not extend credit itself.</li>
      </ul>

      <p>
        Inside this gap, Visio Commerce operates as a <strong>POPIA-compliant category-level
        intent aggregator</strong>, structurally analogous to the way affiliate networks
        operate in global e-commerce &mdash; but privacy-first, SA-regulated, and focused on
        intent signals rather than last-click attribution.
      </p>

      <h2>3. The signal engine</h2>

      <p>Visio Commerce runs on six families of e-commerce intent signals:</p>

      <ol>
        <li><strong>Cart abandonment.</strong> The highest-confidence buying intent signal in the entire e-commerce vertical. A detected abandonment event in a specific category &mdash; not tied to a specific SKU or merchant &mdash; is the strongest forward indicator of a 24-72 hour purchase window.</li>
        <li><strong>Category research.</strong> Dwell time, repeat visits, and comparison browsing within a product category across multiple merchants. The signal indicates active research mode and typically precedes purchase by 7-21 days.</li>
        <li><strong>Price comparison.</strong> Movement between Takealot, Amazon SA, Superbalist, and specialty retailers on the same product category. A strong signal that a buyer is in active decision mode.</li>
        <li><strong>Review engagement.</strong> Reading product reviews, sorting by rating, filtering by keywords. A late-stage trust-building signal that typically precedes purchase by 24-72 hours.</li>
        <li><strong>Delivery area check.</strong> The act of checking whether a delivery address is serviced. A near-certain purchase signal with a 24-48 hour decay.</li>
        <li><strong>Repeat-purchase window.</strong> Detected via the average replenishment cycle for consumable categories (beauty, supplements, pet food, household). Highly predictable and merchant-proactive in nature.</li>
      </ol>

      <p>
        Each signal is scored on a <strong>0&ndash;100 heat scale</strong>, time-decayed over 7
        days for fast-moving categories (fashion, general merchandise) and 21 days for
        considered purchases (electronics, home appliances, furniture), and mapped to a{" "}
        <strong>Green / Amber / Red</strong> grade. Green leads are routed to a merchant
        panel within 1 hour (e-commerce requires the fastest routing in the platform); Amber
        leads enter a category-specific nurture sequence; Red leads are held for the next
        purchase window.
      </p>

      <h2>4. Why this matters for the buyer</h2>

      <p>
        A buyer using Visio Commerce gets three things that no individual merchant can provide:
      </p>

      <ol>
        <li>A neutral view of which merchants serve their specific category at the price point they are searching for &mdash; without being trapped in any single marketplace&apos;s recommendation algorithm.</li>
        <li>Honest delivery-time, returns-policy, and customer-rating comparisons across merchants, aggregated into a single view &mdash; so the buyer chooses on information rather than on sponsored placement.</li>
        <li>An honest total-cost-to-deliver calculation (price + shipping + returns risk + payment fees) across the merchant panel &mdash; the numbers that every merchant tries to hide in checkout flow.</li>
      </ol>

      <p>
        Visio Commerce <strong>never sells personal information</strong>, and never reveals to
        merchants which specific consumer abandoned a cart. The platform exposes{" "}
        <em>category-level intent counts</em> to merchants, not individual buyers, unless a
        buyer has explicitly consented to merchant outreach. This is the POPIA boundary that
        distinguishes Visio Commerce from traditional lead-gen affiliate models.
      </p>

      <h2>5. Why this matters for the merchant</h2>

      <p>
        The merchant&apos;s central problem is <strong>CAC volatility</strong>. Meta and Google
        CPMs rise every quarter; the marginal cost of an acquired customer on paid channels
        climbs faster than basket sizes grow. Merchants cannot predict CAC from month to month,
        which breaks marketing budgeting and squeezes already thin DTC margins.
      </p>

      <p>
        Visio Commerce offers a <strong>predictable, pay-per-outcome intent layer</strong>.
        A merchant on the panel pays a fixed per-lead fee for a heat-scored buyer who has
        opted in to hear from merchants in their declared category. The lead economics are
        transparent (no platform takes a variable cut), the quality is heat-scored against a
        measurable standard, and the merchant can reconcile lead spend to conversion on a
        clean cost-per-acquired-customer basis.
      </p>

      <p>
        For high-performing DTC brands, this is a second acquisition channel alongside Meta
        and Google, with different CAC dynamics. For smaller Shopify Plus operators, it is
        the first scalable acquisition channel available at a cost point below their paid-ads
        CAC.
      </p>

      <h2>6. Revenue model</h2>

      <ol>
        <li><strong>Merchant lead-fees.</strong> R100&ndash;R500 per qualified, consent-gated lead, scaled by category, heat grade, and order-value band. At 7,500 monthly Green+Amber leads × average R450 = <strong>~R40M ARR</strong>.</li>
        <li><strong>Merchant panel subscription.</strong> R1,500/month for panel inclusion, category intent dashboard, competitor price alerts, and abandonment analytics. At ~550 merchants on the panel = <strong>~R10M ARR</strong>.</li>
      </ol>

      <p>Combined steady-state target (Year 5): <strong>~R50M ARR</strong>, 85%+ gross margin. Year 1 realistic: approximately <strong>R6M</strong> as the merchant panel activates and category signal infrastructure matures. See the VRL Forward-Looking Assumptions addendum for the full ramp.</p>

      <h2>7. Limitations and ethical considerations</h2>

      <p>
        Visio Commerce is a category-level intent aggregator, not a retailer, payment provider,
        or affiliate network. Every buyer-facing screen carries: <em>&ldquo;This is a neutral
        comparison and routing tool. It is not a point of sale, not a payment processor, and
        not a guarantee of any transaction. All purchases are completed directly with the
        merchant under their own terms and conditions, the CPA cooling-off period, and the
        ECT Act consumer protections.&rdquo;</em>
      </p>

      <p>
        POPIA compliance is absolute. Visio Commerce does not track individual buyers across
        merchants without explicit consent. Cross-merchant category-level intent counts are
        exposed to merchants in aggregate only. Personal information is not shared unless the
        buyer has explicitly opted in to be contacted by a specific merchant, with every
        consent interaction audited and revocable.
      </p>

      <p>
        The ethical risk in e-commerce lead-gen is <strong>manipulation via artificial
        urgency</strong>. Visio Commerce does not run fake countdown timers, does not surface
        artificial stock scarcity messages, and does not produce misleading comparison claims.
        Scoring is calibrated toward honest intent detection; if a buyer is in research mode,
        the signal reflects research mode and the merchant is not misled into treating it as a
        transactional lead.
      </p>

      <h2>8. Conclusion</h2>

      <p>
        Visio Commerce is a precise legal positioning wrapped around the most contested SA
        e-commerce market in a decade. By detecting cart abandonment, cross-merchant category
        intent, price-comparison behaviour, review engagement, delivery-area checks, and
        repeat-purchase windows at the top of the funnel, and routing heat-scored consent-
        gated leads to a merchant panel in real time, it converts the fragmentation of the
        Takealot + Amazon SA era into a distribution channel for the merchants who would
        otherwise be competing on paid-ads CAC alone. It does this without becoming a
        retailer, without processing payments, without selling personal information, and
        without crossing any of the POPIA, CPA, or ECT Act boundaries that define SA
        e-commerce.
      </p>

      <p>
        The R50M steady-state ARR opportunity is not the most interesting thing. The most
        interesting thing is that Visio Commerce converts the structural CAC volatility of SA
        DTC e-commerce into a predictable, outcome-based acquisition channel for merchants
        who otherwise have no leverage against Meta and Google. VisioCorp becomes the
        merchant-side intent layer that the Takealot-Amazon two-platform era has structurally
        needed and that neither platform can build without conflict of interest.
      </p>

      <hr />

      <p className="footnote">
        <strong>References:</strong> Electronic Communications and Transactions Act 25 of 2002
        (ECT Act, Section 44 cooling-off); Consumer Protection Act 68 of 2008 (CPA); Protection
        of Personal Information Act 4 of 2013 (POPIA); National Credit Act 34 of 2005;
        Worldwide Worx Online Retail Report (R71bn 2023 figure); Baymard Institute Cart
        Abandonment benchmarks; Naspers / Prosus investor disclosures (Takealot); Amazon SA
        launch materials (May 2024); Shoprite Holdings Investor Relations (Checkers Sixty60);
        National Consumer Commission publications; Information Regulator POPIA enforcement
        notices. Repository:{" "}
        <a href="https://github.com/Iamhamptom/visio-lead-gen">github.com/Iamhamptom/visio-lead-gen</a>.
      </p>

      <p className="footnote">
        <strong>Forward-looking assumptions:</strong> The R50M Year-5 steady-state ARR target
        in this paper is a projection, not a Year-1 run-rate. See the VRL Forward-Looking
        Assumptions and Cross-References Addendum
        (<code>research/_VRL-FORWARD-LOOKING-ASSUMPTIONS-AND-SOURCES.md</code>) for the full
        ramp schedule (Y1 ~10&ndash;15% of Y5, Y3 ~50%) and the consolidated cross-reference
        source list &mdash; Worldwide Worx Online Retail Report, Baymard Institute, Naspers /
        Prosus investor disclosures, Shoprite Holdings, Amazon SA launch materials, National
        Consumer Commission, Information Regulator enforcement notices, SimilarWeb SA
        e-commerce traffic data, PwC Total Retail SA, Deloitte Global Powers of Retailing,
        and KPMG SA Retail Industry Outlook.
      </p>

      <p className="footnote">
        Cite as: Hampton, D. (2026). &ldquo;Visio Commerce: A Neutral E-commerce Buying-
        Intent Signal Layer for South Africa&rdquo;. Visio Research Labs, VRL-LEADGEN-011.
      </p>
    </PaperLayout>
  );
}
