import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Understanding UNSPSC Classification | Enterprise Planning Industrial",
  description:
    "An introduction to UNSPSC classification and its application within procurement, inventory management, master data and enterprise asset management.",
};

export default function UnderstandingUNSPSC() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}

      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Resources • Classification • Master Data
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Understanding UNSPSC
          </h1>

          <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
            A practical introduction to the United Nations Standard
            Products and Services Code (UNSPSC) and its role in
            master data management, procurement and inventory
            classification.
          </p>

        </div>
      </section>

      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          What Is UNSPSC?
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          UNSPSC is a global classification framework used to
          categorise products and services through a structured
          hierarchy.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          It provides a common language for procurement,
          inventory management, reporting and master data
          governance activities.
        </p>

      </section>

      {/* BENEFITS */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Benefits Of Classification
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Improved Searchability",
              "Reduced Duplication",
              "Better Procurement",
              "Inventory Visibility",
              "Spend Analysis",
              "Consistent Reporting",
              "Data Governance",
              "Master Data Quality",
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

      {/* IMPLEMENTATION */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          UNSPSC & Master Data Management
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Classification works most effectively when combined
          with strong naming standards, governance frameworks
          and standardised material descriptions.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          Organisations commonly use UNSPSC alongside material
          master standards, cataloguing processes and enterprise
          asset management systems to improve information quality
          and consistency.
        </p>

      </section>

      {/* CLOSING */}

      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Classification Supports Better Decisions
          </h2>

          <p className="text-lg text-slate-200 leading-relaxed">
            Effective classification improves visibility,
            consistency and control of information, helping
            organisations make better procurement, inventory
            and asset management decisions.
          </p>

        </div>

      </section>

    </main>
  );
}