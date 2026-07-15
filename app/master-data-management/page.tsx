export default function MasterDataManagement() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Asset Information • Data Governance • Data Quality
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Master Data Management
          </h1>

          <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
            Enterprise Planning Industrial provides specialist master data
            management services for asset-intensive industries. We help
            organisations develop, maintain, cleanse and govern critical
            asset, maintenance and materials data that supports reliability,
            effective maintenance execution and long-term asset performance.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-slate-900">
          Our Master Data Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-xl p-8 border">
            <h2 className="text-2xl font-bold mb-4 text-cyan-600">
              Asset Data Services
            </h2>

            <ul className="space-y-2 text-slate-700">
              <li>• Asset Register Development</li>
              <li>• Functional Location Structures</li>
              <li>• Equipment Master Data</li>
              <li>• Bills of Materials (BOMs)</li>
              <li>• Maintenance Plans</li>
              <li>• Task Lists</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border">
            <h2 className="text-2xl font-bold mb-4 text-cyan-600">
              Data Quality Services
            </h2>

            <ul className="space-y-2 text-slate-700">
              <li>• Data Cleansing</li>
              <li>• Data Standardisation</li>
              <li>• Material Master Reviews</li>
              <li>• Data Audits</li>
              <li>• Governance Frameworks</li>
              <li>• Migration Readiness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY MASTER DATA MATTERS */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-cyan-400 mb-8">
            Why Master Data Matters
          </h2>

          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            Accurate and well-governed master data is the foundation of
            effective asset management, maintenance planning and reliability
            improvement. Every maintenance strategy, work order, asset
            hierarchy, bill of materials, maintenance plan and reporting
            process relies on the quality of the underlying master data.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            Poor-quality data can lead to incorrect maintenance decisions,
            inefficient planning, duplicated materials, procurement delays,
            inaccurate reporting and increased operational risk. As
            organisations invest in reliability improvement, digital
            transformation and enterprise asset management systems, the
            importance of trusted asset information becomes even greater.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            High-quality master data enables maintenance teams to plan
            effectively, reliability engineers to make informed decisions,
            stores personnel to manage inventory accurately and operational
            teams to maintain confidence in their asset information.
          </p>

          <p className="text-lg text-slate-200 leading-relaxed">
            At Enterprise Planning Industrial, we help organisations develop,
            maintain, cleanse and govern master data that supports safer
            operations, improved reliability, better decision-making and the
            long-term performance of critical assets.
          </p>

        </div>
      </section>

    </main>
  );
}