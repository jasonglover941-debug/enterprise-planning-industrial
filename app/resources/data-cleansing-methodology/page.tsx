import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Data Cleansing Methodology | Enterprise Planning Industrial",
  description:
    "A structured approach to improving master data quality through assessment, cleansing, standardisation, validation and governance.",
};

export default function DataCleansingMethodology() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}

      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Resources • Data Quality • Master Data
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Data Cleansing Methodology
          </h1>

          <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
            Effective data cleansing requires more than correcting
            errors. Sustainable improvements are achieved through a
            structured methodology that combines assessment,
            standardisation, validation and governance.
          </p>

        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          Why Data Cleansing Matters
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Poor quality data impacts maintenance planning,
          procurement, inventory management, reporting,
          reliability analysis and operational decision making.
          Many organisations discover that duplicate records,
          incomplete information and inconsistent standards
          undermine confidence in enterprise systems.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Data cleansing improves information quality and creates
          the foundation for effective asset management, master
          data governance and operational readiness.
        </p>

      </section>

      {/* METHODOLOGY */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Seven-Step Data Cleansing Methodology
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "1. Data Assessment",
              "2. Data Profiling",
              "3. Data Cleansing",
              "4. Standardisation",
              "5. Validation",
              "6. Governance",
              "7. Continuous Improvement",
            ].map((step) => (
              <div
                key={step}
                className="bg-white rounded-xl p-6 border shadow-sm"
              >
                {step}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* STEP 1 */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          1. Data Assessment
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed">
          The first step is understanding the current state of the
          data. Assessments identify quality issues, duplication,
          missing information, inconsistent structures and gaps in
          governance processes.
        </p>

      </section>

      {/* STEP 2 */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            2. Data Profiling
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Data profiling examines information patterns, field
            usage, completeness, duplicates and compliance with
            established standards. Profiling provides the evidence
            required to prioritise improvement activities.
          </p>

        </div>

      </section>

      {/* STEP 3-5 */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          3. Cleansing, Standardisation & Validation
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Data cleansing addresses duplicates, incorrect values,
          obsolete records and incomplete information. Standardisation
          establishes consistent naming conventions, classifications,
          abbreviations and description formats.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Validation confirms that corrected information complies
          with business rules, governance requirements and
          operational needs.
        </p>

      </section>

      {/* GOVERNANCE */}

      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Governance Prevents Quality Issues Returning
          </h2>

          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            Many organisations successfully cleanse their data only
            to see quality problems return over time. Sustainable
            improvements require governance, ownership, stewardship,
            standards and ongoing quality monitoring.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed">
            Data cleansing should therefore be viewed as one element
            of a broader data governance strategy rather than a
            one-time project activity.
          </p>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10">
          Typical Benefits
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

          {[
            "Improved Data Quality",
            "Reduced Duplication",
            "Better Planning",
            "Improved Reporting",
            "Greater System Confidence",
            "Improved Procurement Outcomes",
            "Improved Asset Information",
            "Stronger Governance",
          ].map((benefit) => (
            <div
              key={benefit}
              className="bg-slate-50 p-4 rounded-lg border"
            >
              {benefit}
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}