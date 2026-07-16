import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Industries We Support | Enterprise Planning Industrial",
  description:
    "Supporting mining, manufacturing, utilities, infrastructure, energy and major capital projects with master data management, operational readiness and data governance services.",
};

export default function Industries() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Industry Experience • Asset Management • Project Support
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Industries We Support
          </h1>

          <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
            Enterprise Planning Industrial supports organisations
            across a range of asset-intensive industries with
            master data management, operational readiness,
            data governance and enterprise asset management
            solutions.
          </p>

        </div>
      </section>

<section className="max-w-6xl mx-auto px-6 py-20">

  <div className="space-y-16">

    <div>
      <h2 className="text-3xl font-bold mb-4">
        Mining & Resources
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        Supporting mining and resource organisations with
        master data management, operational readiness,
        maintenance planning and asset information
        development to improve maintenance performance,
        asset reliability and project handover outcomes.
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-bold mb-4">
        Manufacturing
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        Helping manufacturing businesses establish trusted
        asset information, maintenance strategies and
        governance practices that support production
        reliability, maintenance efficiency and long-term
        asset performance.
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-bold mb-4">
        Utilities
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        Supporting utility providers with asset master data,
        maintenance planning, operational readiness and data
        governance solutions that help manage critical
        infrastructure and operational risk.
      </p>
    </div>

<div>
  <h2 className="text-3xl font-bold mb-4">
    Infrastructure
  </h2>

  <p className="text-lg text-slate-600 leading-relaxed">
    Supporting infrastructure owners and project teams with
    asset information management, operational readiness,
    maintenance planning and master data solutions that
    enable efficient handover and long-term asset performance.
  </p>
</div>

<div>
  <h2 className="text-3xl font-bold mb-4">
    Energy
  </h2>

  <p className="text-lg text-slate-600 leading-relaxed">
    Assisting energy organisations with master data
    development, maintenance planning and governance
    frameworks that support safe, reliable and sustainable
    operations throughout the asset lifecycle.
  </p>
</div>

<div>
  <h2 className="text-3xl font-bold mb-4">
    Major Capital Projects
  </h2>

  <p className="text-lg text-slate-600 leading-relaxed">
    Working alongside project engineers, reliability teams,
    maintenance personnel and operational stakeholders to
    deliver operational readiness outcomes, trusted asset
    information and successful project handovers.
  </p>
</div>

  </div>

</section>

    </main>
  );
}
