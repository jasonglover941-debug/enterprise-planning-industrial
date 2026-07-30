import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Data Governance Best Practices | Enterprise Planning Industrial",
  description:
    "Practical data governance best practices for asset-intensive industries covering ownership, stewardship, standards, quality controls and sustainable data management.",
};

export default function DataGovernanceBestPractices() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}

      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Resources • Data Governance • Data Quality
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Data Governance Best Practices
          </h1>

          <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
            Sustainable data quality requires more than data cleansing.
            Effective governance establishes ownership, accountability,
            standards and controls that maintain trusted information
            throughout the asset lifecycle.
          </p>

        </div>
      </section>

      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          What Is Data Governance?
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Data governance is the framework of policies,
          responsibilities, standards and controls that guide
          how information is created, maintained and managed.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Within asset-intensive organisations, governance helps
          ensure asset, maintenance and material data remains
          accurate, consistent and trusted.
        </p>

      </section>

      {/* PILLARS */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Key Governance Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Ownership",
              "Stewardship",
              "Standards",
              "Quality Controls",
              "Accountability",
              "Compliance",
              "Approval Workflows",
              "Continuous Improvement",
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

      {/* OWNERSHIP */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          Data Ownership & Stewardship
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          One of the most common causes of poor data quality is a
          lack of clearly defined ownership. Governance frameworks
          should identify who owns the data, who maintains the data
          and who is responsible for quality outcomes.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Effective stewardship ensures standards are followed
          and quality issues are identified before they impact
          operations.
        </p>

      </section>

      {/* CONTROLS */}

      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Governance Supports Long-Term Quality
          </h2>

          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            Data cleansing can improve information quality in the
            short term, however governance provides the controls
            required to prevent the same issues from returning.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed">
            Sustainable data quality depends upon standards,
            ownership, stewardship and ongoing monitoring.
          </p>

        </div>

      </section>

    </main>
  );
}
