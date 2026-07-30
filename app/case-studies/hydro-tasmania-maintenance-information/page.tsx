import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hydro Tasmania Maintenance Information Improvement | Enterprise Planning Industrial",
  description:
    "Maintenance information improvement initiatives supporting maintenance plans, task lists, work instructions, metadata management and document control processes.",
};

export default function HydroTasmaniaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-10">

          <p className="text-cyan-400 font-semibold uppercase tracking-wide mb-6">
            Case Study • Asset Information • Utilities
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Hydro Tasmania
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            Supporting maintenance information improvement through
            maintenance plans, task lists, work instructions,
            metadata management and document control initiatives.
          </p>

        </div>
      </section>

      {/* OVERVIEW */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Project Overview
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Enterprise Planning Industrial supported maintenance
          information improvement initiatives focused on the quality,
          structure and accessibility of maintenance information.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Activities included support for maintenance plans,
          task lists, structured work instructions, metadata
          management and approaches to integrating maintenance
          information within document management environments.
        </p>

      </section>

      {/* KEY RESPONSIBILITIES */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Key Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Maintenance Plans
              </h3>

              <p className="text-slate-600">
                Supported maintenance information development and
                review activities associated with maintenance plans
                and ongoing asset care requirements.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Task Lists & Work Instructions
              </h3>

              <p className="text-slate-600">
                Supported the development and structure of task
                information and maintenance work instructions to
                improve information consistency and usability.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Metadata Management
              </h3>

              <p className="text-slate-600">
                Contributed to metadata improvement activities
                supporting searchability, document control and
                information quality outcomes.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Document Management Integration
              </h3>

              <p className="text-slate-600">
                Supported approaches for integrating maintenance
                information with SharePoint-based document management
                environments.
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
              "Asset Information Management",
              "Maintenance Information Improvement",
              "Maintenance Plans",
              "Task Lists",
              "Work Instructions",
              "Metadata Management",
              "Document Control",
              "SharePoint Integration Support",
              "Information Structure Development",
              "Information Quality Improvement",
              "Information Governance",
              "Maintenance Documentation",
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