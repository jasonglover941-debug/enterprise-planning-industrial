import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | Enterprise Planning Industrial",
  description:
    "Examples of operational readiness, master data management and enterprise asset management project outcomes.",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Mooka Ore Car Repair Shop",
      href: "/case-studies/mooka-ore-car-repair-shop",
      description:
        "Operational readiness and asset information support for a major rail maintenance facility including asset data development, maintenance readiness and operational support documentation.",
    },
  ];

  return (
    <>
      {/* HERO */}

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-10">
          <p className="text-cyan-400 font-semibold uppercase tracking-wide mb-6">
            Project Experience • Operational Readiness • Asset Information
          </p>

          <h1 className="text-6xl font-bold mb-8">
            Case Studies
          </h1>

          <p className="text-xl max-w-4xl leading-relaxed text-slate-200">
            Enterprise Planning Industrial has supported operational readiness,
            master data management, asset information and maintenance readiness
            initiatives across a range of asset-intensive industries. The
            following case studies demonstrate practical project outcomes and
            experience supporting operational teams, project delivery teams and
            asset owners.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Featured Project Experience
          </h2>

          <p className="text-xl text-slate-700 max-w-5xl leading-relaxed">
            The following case studies demonstrate experience supporting
            operational readiness, maintenance readiness, asset information and
            enterprise asset management initiatives across complex
            asset-intensive environments.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}

      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-5xl font-bold text-slate-900 mb-12">
            Case Studies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.href}
                href={study.href}
                className="block rounded-3xl border border-slate-200 bg-white p-10 transition hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {study.title}
                </h3>

                <p className="text-slate-700 leading-relaxed mb-6">
                  {study.description}
                </p>

                <span className="font-semibold text-slate-900">
                  View Case Study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}