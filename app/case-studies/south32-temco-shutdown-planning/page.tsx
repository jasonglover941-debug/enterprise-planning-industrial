import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "South32 TEMCO Shutdown Planning & Maintenance Readiness | Enterprise Planning Industrial",
  description:
    "Shutdown planning, maintenance planning and scheduling services supporting electrical, instrumentation, high voltage and extra high voltage systems within a major ferroalloy production environment.",
};

export default function South32TemcoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-10">

          <p className="text-cyan-400 font-semibold uppercase tracking-wide mb-6">
            Case Study • Shutdown Planning • Maintenance Planning
          </p>

          <h1 className="text-5xl font-bold mb-6">
            South32 TEMCO
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            Shutdown planning, maintenance planning and scheduling
            services supporting electrical, instrumentation, high voltage
            and extra high voltage systems within a major ferroalloy
            production environment.
          </p>

        </div>
      </section>

      {/* OVERVIEW */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Project Overview
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Enterprise Planning Industrial provided shutdown planning,
          maintenance planning and scheduling support within the
          South32 TEMCO operation.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Activities focused on major shutdown preparation, work package
          development, maintenance readiness and coordination of
          maintenance activities supporting critical production assets.
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
                Major Shutdown Planning
              </h3>

              <p className="text-slate-600">
                Supported planning and coordination for multiple major
                shutdown events including scope development, work package
                preparation, resource planning and execution readiness.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Maintenance Planning & Scheduling
              </h3>

              <p className="text-slate-600">
                Delivered maintenance planning and scheduling activities
                supporting efficient maintenance execution and long-term
                asset performance.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                Electrical & Instrumentation Systems
              </h3>

              <p className="text-slate-600">
                Planned maintenance activities associated with electrical
                and instrumentation assets supporting operational
                reliability and safe maintenance execution.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <h3 className="text-2xl font-bold mb-3">
                High Voltage & EHV Infrastructure
              </h3>

              <p className="text-slate-600">
                Supported maintenance planning for high voltage and
                extra high voltage infrastructure, ensuring work scopes
                were appropriately planned and prepared.
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
              "Major Shutdown Planning",
              "Maintenance Planning",
              "Maintenance Scheduling",
              "Electrical Systems Planning",
              "Instrumentation Planning",
              "HV Planning",
              "EHV Planning",
              "Work Package Development",
              "Resource Coordination",
              "Contractor Coordination",
              "Execution Readiness",
              "Maintenance Readiness",
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