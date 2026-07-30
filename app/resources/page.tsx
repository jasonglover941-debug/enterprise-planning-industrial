import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Enterprise Planning Industrial",
  description:
    "Best practice guidance covering master data management, data governance, operational readiness, asset information management and enterprise asset management.",
};

export default function Resources() {
  const resources = [
    {
      title: "Asset & Material Naming Standards",
      href: "/resources/asset-material-naming-standards",
      description:
        "Best practices for equipment descriptions, material naming conventions, standardisation and controlled vocabularies.",
    },
    {
      title: "Data Governance Best Practices",
      href: "/resources/data-governance-best-practices",
      description:
        "Practical approaches for data ownership, stewardship, governance frameworks and sustainable data quality.",
    },
    {
      title: "Understanding UNSPSC",
      href: "/resources/understanding-unspsc",
      description:
        "An introduction to UNSPSC classification and its role in procurement, inventory and master data management.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}

      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Knowledge Centre • Best Practice • Industry Insights
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Resources
          </h1>

          <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
            Practical insights, best practices and industry guidance
            covering master data management, operational readiness,
            data governance, asset information management and
            enterprise asset management.
          </p>

        </div>
      </section>

      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          Knowledge & Best Practice
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed">
          The Resources section shares practical experience,
          methodologies and industry best practices developed
          through project delivery across mining, manufacturing,
          utilities, infrastructure and major capital projects.
        </p>

      </section>

      {/* RESOURCES */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Featured Resources
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {resources.map((resource) => (
              <Link href={resource.href} key={resource.href} className="block">
                <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition">

                  <h3 className="text-xl font-semibold mb-3">
                    {resource.title}
                  </h3>

                  <p className="text-slate-600">
                    {resource.description}
                  </p>

                </div>
              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* WHY IT MATTERS */}

      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Why Industry Knowledge Matters
          </h2>

          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            Sustainable improvements in asset information quality,
            master data management and operational readiness require
            more than technology alone. Success depends on standards,
            governance, processes and practical implementation.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed">
            Our resources are designed to provide practical guidance
            that organisations can use to improve data quality,
            strengthen governance and support long-term asset
            management outcomes.
          </p>

        </div>

      </section>

    </main>
  );
}