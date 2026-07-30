import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Simplot Australia Operational Readiness & MEX EAM | Enterprise Planning Industrial",
  description:
    "Operational readiness, maintenance system readiness and asset information support within a major Australian manufacturing environment using the MEX Enterprise Asset Management platform.",
};

export default function SimplotPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-10">

          <p className="text-cyan-400 font-semibold uppercase tracking-wide mb-6">
            Case Study • Operational Readiness • Manufacturing
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Simplot Australia
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            Operational readiness and maintenance information support
            utilising the MEX Enterprise Asset Management platform within
            a major Australian food manufacturing environment.
          </p>

        </div>
      </section>

      {/* OVERVIEW */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Project Overview
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Enterprise Planning Industrial supported operational readiness
          initiatives within a major manufacturing operation using the
          MEX Enterprise Asset Management platform.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Activities focused on maintenance system readiness, asset
          information management and the development of maintenance
          information supporting long-term operational performance.
        </p>

      </section>

      {/* KEY RESPONSIBILITIES */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Key Responsibilities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Operational Readiness
              </h3>

              <p className="text-slate-600">
                Supported readiness activities to help ensure operational
                teams were prepared for ongoing maintenance and asset
                management requirements.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                MEX Enterprise Asset Management
              </h3>

              <p className="text-slate-600">
                Supported asset and maintenance information within the
                MEX EAM platform to improve information quality and
                system usability.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Asset Information
              </h3>

              <p className="text-slate-600">
                Assisted with the development and improvement of asset
                information supporting maintenance and operational
                decision-making.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Maintenance Information
              </h3>

              <p className="text-slate-600">
                Supported maintenance information development and
                readiness activities contributing to sustainable
                operational performance.
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
              "Operational Readiness",
              "Maintenance System Readiness",
              "MEX Enterprise Asset Management",
              "Asset Information Management",
              "Maintenance Information",
              "Asset Register Development",
              "Data Quality Improvement",
              "Maintenance Planning Support",
              "Asset Management Support",
              "Information Management",
              "Maintenance Readiness",
              "Operational Support",
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