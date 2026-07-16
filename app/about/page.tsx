import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Enterprise Planning Industrial",
  description:
    "Learn about Enterprise Planning Industrial and our experience delivering master data management, operational readiness, data governance and enterprise asset management services.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Experience • Asset Management • Project Support
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            About Enterprise Planning Industrial
          </h1>

          <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
            Enterprise Planning Industrial provides specialist
            consulting services in Master Data Management,
            Operational Readiness, Data Governance and Enterprise
            Asset Management for asset-intensive industries.
          </p>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          Practical Industry Experience
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Enterprise Planning Industrial is led by an experienced
          asset management professional with extensive experience
          supporting capital projects, maintenance organisations
          and asset owners across a range of asset-intensive
          industries.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Our focus is on delivering practical solutions that
          improve data quality, maintenance effectiveness,
          operational readiness and long-term asset performance.
          We understand that successful outcomes require more than
          systems and processes — they require trusted information,
          collaboration and sustainable ways of working.
        </p>

      </section>

      {/* CORE EXPERTISE */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Core Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Master Data Management
              </h3>

              <p className="text-slate-600">
                Asset registers, equipment records, material
                masters, maintenance plans, task lists and
                Bills of Materials (BOMs).
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Operational Readiness
              </h3>

              <p className="text-slate-600">
                Supporting projects through delivery, startup,
                handover and transition into sustainable
                operations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                SAP & EAM Systems
              </h3>

              <p className="text-slate-600">
                Practical experience supporting SAP PM, SAP MM
                and enterprise asset management environments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Maintenance Planning
              </h3>

              <p className="text-slate-600">
                Development of maintenance strategies, work
                management processes and maintenance master data.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Data Governance
              </h3>

              <p className="text-slate-600">
                Building sustainable governance frameworks that
                maintain ongoing data quality and integrity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Project Support
              </h3>

              <p className="text-slate-600">
                Working with project, maintenance, reliability
                and operational stakeholders to achieve successful
                project outcomes.
              </p>
            </div>

          </div>

        </div>
      </section>
{/* FLEXIBLE DELIVERY */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Flexible Delivery Capability
          </h2>

          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            Enterprise Planning Industrial operates as an independent
            specialist consultancy, providing direct access to practical
            industry experience and personalised client support.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            This approach allows clients to engage an experienced
            consultant without the overheads often associated with
            large consulting organisations.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed">
            Where projects require additional capability or specialised
            expertise, Enterprise Planning Industrial can leverage a
            network of trusted industry professionals to support larger
            engagements and multidisciplinary project teams.
          </p>

        </div>
      </section>
      
    </main>
  );
}