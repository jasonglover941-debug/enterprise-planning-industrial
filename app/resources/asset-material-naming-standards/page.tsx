import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Asset & Material Naming Standards | Enterprise Planning Industrial",
  description:
    "Best practices for asset naming conventions, material descriptions, standardisation, data governance and master data quality within asset-intensive industries.",
};

export default function AssetMaterialNamingStandards() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}

      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Resources • Master Data • Data Quality
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Asset & Material Naming Standards
          </h1>

          <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
            Consistent naming conventions provide the foundation for
            high-quality master data, effective maintenance planning,
            reliable reporting and efficient procurement processes.
          </p>

        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          Why Naming Standards Matter
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Asset-intensive organisations rely upon thousands of
          equipment records, functional locations, material masters,
          bills of materials and maintenance documents. Without
          consistent naming standards, information becomes difficult
          to locate, duplicate records increase and confidence in
          enterprise systems begins to decline.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Effective naming conventions help maintenance, reliability,
          operations, procurement and project teams work with trusted
          information while improving reporting, searchability and
          long-term data quality.
        </p>

      </section>

      {/* COMMON PROBLEMS */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Common Naming Challenges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Duplicate Material Records",
              "Inconsistent Abbreviations",
              "Poor Equipment Descriptions",
              "Non-Standard Asset Naming",
              "Duplicate Equipment Records",
              "Inconsistent Manufacturer Names",
              "Multiple Description Formats",
              "Low Confidence In Data",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-4 border"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ASSET NAMING */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          Asset Naming Standards
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Equipment and functional location descriptions should be
          structured, consistent and meaningful to the people using
          them. Standard naming conventions help organisations
          maintain asset hierarchies, support maintenance planning
          and improve the quality of reporting and analytics.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Consistency is generally more important than complexity.
          A naming standard should be easy to understand, easy to
          govern and suitable for long-term use across the asset
          lifecycle.
        </p>

      </section>

      {/* MATERIAL NAMING */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Material Master Standardisation
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Material master records are often one of the most
            challenging areas of enterprise data management.
            Inconsistent naming conventions, duplicate records,
            poor descriptions and non-standard abbreviations can
            create inventory, procurement and maintenance issues.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed">
            Establishing clear description standards, approved
            abbreviations and classification rules helps improve
            material searchability, inventory visibility and
            procurement efficiency.
          </p>

        </div>

      </section>

      {/* GOVERNANCE */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          Naming Standards & Data Governance
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Naming standards should not exist in isolation. They
          form part of a broader data governance framework that
          includes ownership, stewardship, approval workflows,
          quality controls and ongoing compliance monitoring.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Governance helps ensure naming conventions remain
          effective over time and prevents data quality issues
          from being reintroduced through uncontrolled data creation.
        </p>

      </section>

      {/* UNSPSC */}

      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Classification Standards
          </h2>

          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            Naming standards are often strengthened through the use
            of formal classification systems. Classification helps
            organise information consistently across asset registers,
            maintenance systems, inventory catalogues and procurement
            processes.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed">
            Standards such as UNSPSC can support material
            categorisation, purchasing activities and improved
            reporting while reducing ambiguity in material master
            records.
          </p>

        </div>

      </section>

    </main>
  );
}