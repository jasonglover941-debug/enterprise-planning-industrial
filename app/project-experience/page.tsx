
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Experience | Enterprise Planning Industrial",
  description:
    "Project experience across mining, manufacturing, utilities, energy, infrastructure and major capital projects throughout Australia.",
};

export default function ProjectExperience() {
  const projects = [


    {
    client: "BHP",
    focus: "Electrical Reliability Engineering, Master Data Management & Asset Information Systems",
    description:
        "Delivered services across multiple BHP operations including WAIO, WAIO Rail, Mining Area C (MAC), Nickel West, BMA and Mt Arthur Coal. Engagements included electrical reliability engineering, master data development, SAP PM load sheet creation, and material cataloguing through SparesFinder and MDO environments supporting asset information quality and operational readiness.",
    },

    {
    client: "Whitehaven Coal",
    focus: "Operational Readiness, SAP PM / SAP MM & Master Data Management",
    description:
        "Supported the Daunia operation as a Master Data Specialist, delivering operational readiness activities within SAP PM and SAP MM environments. Responsibilities included asset information management, master data development and material cataloguing activities supporting load sheet preparation and operational system readiness.",
    },

    {
    client: "South32 TEMCO",
    focus: "Project Management, Shutdown Planning, Maintenance Planning & Scheduling",
    description:
        "Provided project management, major shutdown planning, maintenance planning and scheduling services at South32 TEMCO. Supported maintenance execution, outage coordination, workforce planning and operational readiness activities within a major ferroalloy production environment.",
    },
   
    {
    client: "Liberty Bell Bay",
    focus: "SAP PM & SAP MM, Master Data Management, Maintenance Planning & Scheduling",
    description:
        "Delivered maintenance planning and scheduling services together with site-wide SAP PM and SAP MM master data management activities. Supported system restructuring, asset information improvement, maintenance system optimisation and enterprise asset management processes within a major industrial processing environment.",
    },

    {
    client: "Hydro Tasmania",
    focus: "Master Data Management & Maintenance Information Improvement",
    description:
        "Supported maintenance information improvement initiatives focused on SAP maintenance plans, task lists, structured work instructions, document control and metadata management. Contributed to the development of approaches for integrating maintenance information with SharePoint-based document management environments.",
    },

    {
    client: "Simplot Australia",
    focus: "Operational Readiness & MEX Enterprise Asset Management",
    description:
        "Supported operational readiness initiatives using the MEX Enterprise Planning platform within a major Australian manufacturing environment. Activities included maintenance system readiness, asset information management and the development of maintenance information supporting long-term operational performance.",
    },

  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold mb-6">
            Project Experience
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            Delivering practical outcomes across mining, manufacturing,
            utilities, energy, infrastructure and major capital projects
            throughout Australia.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Selected Engagements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <div
              key={project.client}
              className="border rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-2">
                {project.client}
              </h3>

              <p className="font-semibold text-cyan-600 mb-4">
                {project.focus}
              </p>

              <p className="text-slate-600">
                {project.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Capabilities Delivered
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {[
            "Master Data Management",
            "Operational Readiness",
            "Data Governance",
            "Asset Information Management",
            "Maintenance Planning",
            "Shutdown Planning",
            "SAP PM",
            "SAP MM",
            "SAP Trainer & Coach",
            "Reliability Engineering",
            "Stores & Materials Management",
            "Purchasing & Procurement",
            ].map((capability) => (

              <div
                key={capability}
                className="bg-white p-4 rounded-lg border"
              >
                {capability}
              </div>
            ))}
          </div>

        </div>
      </section>


{/* INDUSTRY EXPERIENCE */}
<section className="py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-8">
      Industry Experience
    </h2>

<p className="text-lg text-slate-600 leading-relaxed mb-8">
  Enterprise Planning Industrial draws upon more than 35 years of
  experience across mining, manufacturing, energy, rail and industrial
  processing environments. Prior to consulting engagements, experience
  included leadership, operational, planning, reliability, maintenance,
  stores, purchasing, project management and asset management roles
  supporting organisations including Nyrstar, Cadbury Schweppes, Kraft Foods
  and Mondelēz International.
</p>


    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        "35+ Years Industry Experience",
        "Maintenance Planning",
        "Reliability Engineering",
        "SAP Trainer & Coach",
        "Stores & Materials Management",
        "SAP Purchasing & Procurement",
        "SAP PM (Plant Maintenance)",
        "SAP MM (Materials Management)",
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



      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Looking For Similar Support?
          </h2>

          <p className="text-slate-600 mb-8">
            Contact Enterprise Planning Industrial to discuss your
            Master Data Management, Operational Readiness, Asset
            Information or Maintenance Planning requirements.
          </p>

          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}
