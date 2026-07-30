import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Liberty Bell Bay SAP PM & Master Data Management | Enterprise Planning Industrial",
  description:
    "SAP PM, SAP MM, master data management and maintenance planning support at Liberty Bell Bay.",
};

export default function LibertyBellBayPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-10">

          <p className="text-cyan-400 font-semibold uppercase tracking-wide mb-6">
            Case Study • SAP PM • Master Data Management
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Liberty Bell Bay
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            Supporting SAP PM, SAP MM, master data management,
            maintenance planning and asset information improvement
            initiatives within a major industrial processing operation.
          </p>

        </div>
      </section>

      {/* OVERVIEW */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Project Overview
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Enterprise Planning Industrial delivered maintenance planning,
          SAP PM, SAP MM and master data management services supporting
          maintenance system improvement and asset information quality
          initiatives at Liberty Bell Bay.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Activities focused on improving maintenance information,
          supporting enterprise asset management processes and
          enhancing the quality and reliability of asset data used
          across maintenance and operational functions.
        </p>

      </section>

      {/* KEY RESPONSIBILITIES */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Key Responsibilities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-3">
                SAP PM Support
              </h3>

              <p className="text-slate-600">
                Supported SAP Plant Maintenance processes,
                asset structures, maintenance information and
                planning activities.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-3">
                SAP MM Support
              </h3>

              <p className="text-slate-600">
                Supported materials management activities,
                material master improvements and maintenance
                supply chain information requirements.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-3">
                Master Data Management
              </h3>

              <p className="text-slate-600">
                Developed and maintained master data standards,
                supporting accuracy, consistency and usability
                of maintenance-related information.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-3">
                Maintenance Planning
              </h3>

              <p className="text-slate-600">
                Supported maintenance planning and scheduling
                activities to improve work readiness and asset
                management performance.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ACTIVITIES */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Activities Delivered
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {[
              "SAP Plant Maintenance",
              "SAP Materials Management",
              "Master Data Management",
              "Material Master Data",
              "Asset Information Management",
              "Maintenance Planning",
              "Maintenance Scheduling",
              "Maintenance System Optimisation",
              "Data Quality Improvement",
              "Asset Hierarchy Development",
              "Enterprise Asset Management",
              "Maintenance Process Improvement",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-50 p-4 rounded-lg border"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}