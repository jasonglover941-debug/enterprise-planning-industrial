
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Enterprise Planning Industrial | Master Data & Operational Readiness Specialists",
  description:
    "Master Data Management, Operational Readiness, Data Governance and Enterprise Asset Management services for asset-intensive industries.",
};


export default function Home() {
  const services = [
    {
      title: "Master Data Management",
      description:
        "Development, maintenance and governance of asset, maintenance and material master data.",
    },
    {
      title: "Data Cleansing & Governance",
      description:
        "Improving data quality through validation, standardisation and governance frameworks.",
    },
    {
      title: "Operational Readiness",
      description:
        "Supporting projects through commissioning, handover and transition into operations.",
    },
    {
      title: "SAP / EAM Support",
      description:
        "Practical support for SAP PM, SAP MM and enterprise asset management systems.",
    },
    {
      title: "Maintenance Planning",
      description:
        "Development of effective maintenance programs and work management practices.",
    },
    {
      title: "Shutdown Planning",
      description:
        "Planning and readiness support for outages, shutdowns and major maintenance events.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Master Data • Data Cleansing • Operational Readiness
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Master Data Management &
            <br />
            Operational Readiness Specialists
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            Supporting asset-intensive industries with
            master data management, operational readiness,
            data governance and enterprise asset management
            solutions that improve maintenance performance,
            asset reliability and project handover outcomes.
          </p>

          <p className="mt-6 text-cyan-400 font-semibold text-lg">
            Based in Tasmania • Supporting asset-intensive industries Australia-wide
          </p>  

          <Link
            href="/contact"
            className="mt-8 inline-block bg-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600"
          >
            Request a Consultation
          </Link>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Supporting Projects From Delivery To Operations
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed">
          Enterprise Planning Industrial supports capital projects,
          maintenance organisations and asset owners with master
          data management, operational readiness, data governance
          and enterprise asset management support. We help
          organisations establish trusted asset information that
          supports maintenance, reliability and sustainable
          operations.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (       
            <Link
            key={service.title}
              href={
                service.title === "Master Data Management"
                  ? "/master-data-management"
                  : service.title === "Operational Readiness"
                  ? "/operational-readiness"
                  : service.title === "Data Cleansing & Governance"
                  ? "/data-cleansing-governance"
                  : "/contact"
              }
            >

              <div
                className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600">
                  {service.description}
                </p>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Common Challenges We Solve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Poor Asset Data Quality",
              "Incomplete Asset Registers",
              "Duplicate Material Records",
              "Missing Bills of Materials",
              "SAP Master Data Issues",
              "Operational Readiness Gaps",
              "Project Handover Challenges",
              "Maintenance Data Governance",
            ].map((challenge) => (
              <div
                key={challenge}
                className="bg-slate-100 rounded-lg p-4"
              >
                {challenge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Industries We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Mining",
              "Manufacturing",
              "Utilities",
              "Infrastructure",
              "Energy",
              "Major Projects",
            ].map((industry) => (
              <div
                key={industry}
                className="border border-slate-700 rounded-lg p-6"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>



        {/* AUSTRALIA-WIDE SUPPORT */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">
              Australia-Wide Support
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Enterprise Planning Industrial is based in Tasmania and provides consulting
              services throughout Australia. We support clients remotely and on-site
              across mining, manufacturing, infrastructure, utilities, energy and major
              project environments.
            </p>


            <h3 className="text-xl font-semibold mb-3">
              Service Areas
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Supporting organisations across Tasmania, Victoria, New South Wales,
              Queensland, South Australia, Western Australia and the Northern Territory.
            </p>

          </div>
        </section>


      {/* CONTACT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready To Improve Your Asset Information?
          </h2>

          <p className="text-slate-600 mb-8">
            Whether you're developing master data, supporting a capital project,
            improving data quality or preparing assets for operational handover,
            Enterprise Planning Industrial can help.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block bg-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600"
          >
            Get In Touch
          </Link>

        </div>
      </section>

    </main>
  );
}
