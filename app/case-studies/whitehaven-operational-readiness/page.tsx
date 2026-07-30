import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitehaven Coal Operational Readiness Support | Enterprise Planning Industrial",
  description:
    "Operational readiness support across Whitehaven Coal projects including dust suppression infrastructure, RELOAD explosives yard expansion and mine dewatering systems.",
};

export default function WhitehavenOperationalReadinessPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-10">

          <p className="text-cyan-400 font-semibold uppercase tracking-wide mb-6">
            Case Study • Operational Readiness • Mining
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Whitehaven Coal Operational Readiness
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            Supporting operational readiness activities across capital and
            sustaining capital projects including dust suppression
            infrastructure, RELOAD explosives yard expansion and mine
            dewatering systems.
          </p>

        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Project Overview
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Enterprise Planning Industrial has supported operational readiness
          activities within the Whitehaven Coal Projects Department,
          contributing to the transition of project assets into operational
          environments.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Activities have included readiness planning, asset information
          support, maintenance readiness considerations, stakeholder
          coordination and preparation for operational handover.
        </p>

      </section>

      {/* PROJECTS SUPPORTED */}
      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Projects Supported
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Dust Suppression Infrastructure
              </h3>

              <p className="text-slate-600">
                Supported operational readiness activities for dust
                suppression infrastructure projects, ensuring asset
                information, maintenance requirements and operational
                support needs were considered prior to handover.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                RELOAD Explosives Yard Expansion
              </h3>

              <p className="text-slate-600">
                Supported the RELOAD explosives yard expansion project
                including generators, compressors and utility
                infrastructure. Activities included operational readiness
                planning, maintenance readiness considerations and
                preparation for asset handover.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Mine Dewatering Systems
              </h3>

              <p className="text-slate-600">
                Supported multiple mine dewatering pump projects,
                including readiness activities associated with
                commissioning, maintenance preparation and transition to
                operational ownership.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CAPABILITIES */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Activities Delivered
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {[
              "Operational Readiness",
              "Maintenance Readiness",
              "Asset Information Management",
              "Project Support",
              "Asset Handover Preparation",
              "Stakeholder Coordination",
              "Commissioning Support",
              "Operational Handover",
              "Readiness Planning",
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