export default function MookaCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            BHP WAIO Rail Workshop
          </p>

          <h1 className="text-5xl font-bold mt-4 mb-6">
            Mooka Ore Car Repair Shop
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed">
            Supporting asset information development, BOM creation,
            reliability improvement and long-term maintenance support
            for a mature automated workshop environment.
          </p>

        </div>
      </section>
{/* CHALLENGE */}
<section className="max-w-5xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold mb-6">
    Challenge
  </h2>

  <p className="text-lg text-slate-600 leading-relaxed mb-6">
    The Mooka Ore Car Repair Shop had been operating for approximately
    12 years (in 2026) and had reached a stage where equipment reliability was
    becoming increasingly dependent on the availability of accurate
    maintenance information, spare parts data and asset master data.
  </p>

  <p className="text-lg text-slate-600 leading-relaxed mb-6">
    Despite being a highly automated facility, many critical assets
    did not have complete Bills of Materials (BOMs) established
    within SAP. As equipment matured, component failures were
    becoming more frequent and maintenance teams faced increasing
    challenges identifying spare parts requirements, managing
    component obsolescence and addressing manufacturer part
    number changes.
  </p>

  <p className="text-lg text-slate-600 leading-relaxed">
    The absence of structured BOMs within SAP increased the risk
    of extended downtime, delayed repairs, inefficient spare parts
    management and reduced confidence in long-term asset support
    strategies.
  </p>
</section>
{/* APPROACH */}
<section className="bg-slate-50 py-16">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-6">
      Approach
    </h2>

    <ul className="space-y-3 text-slate-600 text-lg list-disc pl-6">
      <li>SAP PM Bill of Materials (BOM) development</li>
      <li>Detailed review of vendor manuals and technical documentation</li>
      <li>Engineering drawing analysis and asset verification</li>
      <li>Field verification of installed equipment</li>
      <li>Asset information validation and structuring</li>
      <li>Material identification and cataloguing</li>
      <li>Repairable item master data improvement</li>
      <li>Component identification and mapping</li>
      <li>Obsolescence review and management support</li>
      <li>Manufacturer part number reconciliation</li>
      <li>Master data quality improvement</li>
      <li>Maintenance planning support</li>
    </ul>

    <p className="text-lg text-slate-600 leading-relaxed mt-8">
      BOM structures were developed through the review of vendor
      documentation, engineering drawings and field verification
      activities to ensure maintenance and materials information
      accurately reflected installed equipment.
    </p>

    <p className="text-lg text-slate-600 leading-relaxed mt-4">
      Repairable item master data was also reviewed and updated to
      improve asset traceability, repair management and long-term
      maintenance support strategies.
    </p>

  </div>
</section>

{/* OUTCOME */}
<section className="max-w-5xl mx-auto px-6 py-16">

  <h2 className="text-3xl font-bold mb-6">
    Outcome
  </h2>

  <ul className="space-y-3 text-slate-600 text-lg list-disc pl-6">
    <li>Developed structured Bills of Materials within SAP</li>
    <li>Improved visibility of critical asset components and spare parts requirements</li>
    <li>Enhanced maintenance planning capability</li>
    <li>Improved material identification and procurement support</li>
    <li>Improved repairable item master data quality and traceability</li>
    <li>Improved management of component obsolescence</li>
    <li>Improved management of manufacturer part number changes</li>
    <li>Reduced asset information risk associated with aging equipment</li>
    <li>Strengthened long-term asset support capability</li>
  </ul>

</section>
{/* KEY CAPABILITIES */}
<section className="bg-slate-50 py-16">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-6">
      Key Capabilities Demonstrated
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

      {[
        "SAP PM Master Data Development",
        "Bill of Materials (BOM) Development",
        "Asset Information Management",
        "Materials Management",
        "Repairable Item Master Data",
        "Maintenance Planning Support",
        "Component Obsolescence Management",
        "Part Number Rationalisation",
        "Reliability Improvement",
      ].map((item) => (
        <div
          key={item}
          className="bg-white border rounded-lg p-4"
        >
          {item}
        </div>
      ))}

    </div>

    <p className="mt-10 text-sm text-slate-500 italic">
      Project delivery undertaken in collaboration with M1 Solutions.
    </p>

  </div>
</section>
    </main>
  );
}