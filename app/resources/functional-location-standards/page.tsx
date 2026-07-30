import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Functional Location Standards | Enterprise Planning Industrial",
  description:
    "Best practices for functional location structures, asset hierarchies and maintenance information management within asset-intensive industries.",
};

export default function FunctionalLocationStandards() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}

      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Resources • Asset Information • SAP PM
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Functional Location Standards
          </h1>

          <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
            Functional locations provide the foundation for asset
            hierarchies, maintenance planning, reporting and asset
            information management. Well-designed structures support
            consistent maintenance practices and long-term asset
            lifecycle management.
          </p>

        </div>
      </section>

      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          What Is a Functional Location?
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          A functional location represents the physical or logical
          position where an asset performs its operational function.
          Functional locations provide the framework upon which
          equipment records, maintenance plans, inspection activities
          and asset history are managed.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Within SAP Plant Maintenance and many Enterprise Asset
          Management systems, functional locations are a critical
          component of the asset hierarchy and information structure.
        </p>

      </section>

      {/* WHY THEY MATTER */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Why Functional Locations Matter
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Asset Hierarchy Structure",
              "Maintenance Planning",
              "Work Order Management",
              "Asset History Tracking",
              "Performance Reporting",
              "Reliability Analysis",
              "Operational Readiness",
              "Asset Information Quality",
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

      {/* DESIGN PRINCIPLES */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          Design Principles
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Effective functional location structures should be easy to
          understand, scalable and aligned with operational needs.
          They should support maintenance execution, reporting,
          reliability activities and future system growth.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Overly complex structures can create confusion,
          inconsistent data entry and difficulties with
          maintenance planning and reporting.
        </p>

      </section>

      {/* EXAMPLE */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Functional Location Structure Example
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Functional locations are commonly structured from the
            highest level of an asset hierarchy down to individual
            operating systems and equipment locations.
          </p>

          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <pre className="text-slate-700 whitespace-pre-wrap">
{`Plant
 └─ Area
     └─ System
         └─ Sub-System
             └─ Equipment Location`}
            </pre>
          </div>

        </div>

      </section>

      {/* COMMON CHALLENGES */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Common Functional Location Issues
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Inconsistent Hierarchy Structures",
              "Duplicate Locations",
              "Poor Naming Standards",
              "Missing Parent Relationships",
              "Lack Of Governance",
              "Inconsistent Asset Allocation",
            ].map((issue) => (
              <div
                key={issue}
                className="bg-white rounded-xl p-6 border shadow-sm"
              >
                {issue}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* GOVERNANCE */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Governance & Standards
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Functional location standards should be supported by
            governance processes that define how structures are
            created, modified and maintained.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed">
            Governance helps ensure consistency across projects,
            operations and maintenance teams while preserving the
            integrity of enterprise asset information.
          </p>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Benefits of Well-Structured Functional Locations
          </h2>

          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            Consistent functional location structures improve
            maintenance planning, reporting, reliability analysis
            and operational decision-making. They also provide a
            stronger foundation for master data management and
            operational readiness initiatives.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed">
            Organisations that establish clear hierarchy standards
            are better positioned to manage asset information,
            support future projects and maintain long-term data
            quality across enterprise systems.
          </p>

        </div>

      </section>

    </main>
  );
}