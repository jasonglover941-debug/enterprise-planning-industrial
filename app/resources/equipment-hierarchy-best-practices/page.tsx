import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Equipment Hierarchy Best Practices | Enterprise Planning Industrial",
  description:
    "Best practices for equipment hierarchies, asset structures, maintenance information management and enterprise asset management systems.",
};

export default function EquipmentHierarchyBestPractices() {
  return (
    <main>

    {/* HERO */}

<section className="bg-slate-900 text-white">
  <div className="max-w-6xl mx-auto px-6 py-20">

    <p className="text-cyan-400 font-semibold uppercase tracking-wider">
      Resources • Asset Information • Equipment Hierarchies
    </p>

    <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
      Equipment Hierarchy Best Practices
    </h1>

    <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
      Well-structured equipment hierarchies support maintenance
      planning, reliability analysis, asset lifecycle management
      and effective decision-making throughout an asset's life.
    </p>

  </div>
</section>

      {/* INTRODUCTION */}

      <section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-3xl font-bold mb-6">
    What Is an Equipment Hierarchy?
  </h2>

  <p className="text-lg text-slate-600 leading-relaxed mb-6">
    Equipment hierarchies define the relationship between
    physical assets and the systems in which they operate.
    They provide the structure that supports maintenance
    planning, asset tracking, reliability activities and
    maintenance history management.
  </p>

  <p className="text-lg text-slate-600 leading-relaxed">
    In SAP PM and other Enterprise Asset Management systems,
    equipment records are typically positioned within
    functional locations to create a logical and maintainable
    asset structure.
  </p>

</section>
{/* BENEFITS */}

<section className="bg-slate-50 py-20">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-10">
      Why Equipment Hierarchies Matter
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        "Maintenance Planning",
        "Reliability Analysis",
        "Asset Tracking",
        "Work Management",
        "Performance Reporting",
        "Asset History",
        "Lifecycle Management",
        "Operational Readiness",
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
{/* HIERARCHY EXAMPLE */}

<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-3xl font-bold mb-6">
    Example Equipment Hierarchy
  </h2>

  <p className="text-lg text-slate-600 leading-relaxed mb-6">
    Equipment structures should reflect the operational
    reality of the plant while remaining easy for users
    to understand and maintain.
  </p>

  <div className="bg-slate-50 border rounded-xl p-6">

    <pre className="text-slate-700 whitespace-pre-wrap">
{`Process Plant
 └─ Crushing Circuit
     └─ Primary Crusher
         └─ Lubrication System
             └─ Pump
             └─ Motor
             └─ Tank`}
    </pre>

  </div>

</section>
{/* DESIGN PRINCIPLES */}

<section className="bg-slate-50 py-20">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-6">
      Equipment Hierarchy Design Principles
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      {[
        "Align structures with physical assets",
        "Support maintenance planning activities",
        "Enable asset history tracking",
        "Avoid unnecessary complexity",
        "Use standard naming conventions",
        "Support long-term system growth",
      ].map((principle) => (
        <div
          key={principle}
          className="bg-white rounded-xl p-6 border shadow-sm"
        >
          {principle}
        </div>
      ))}

    </div>

  </div>

</section>
{/* COMMON ISSUES */}

<section className="py-20">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-10">
      Common Equipment Hierarchy Issues
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "Duplicate Equipment Records",
        "Incorrect Parent Relationships",
        "Poor Naming Conventions",
        "Missing Asset History",
        "Inconsistent Hierarchies",
        "Lack Of Governance",
      ].map((issue) => (
        <div
          key={issue}
          className="bg-white rounded-xl p-6 border shadow-sm"
        >
          {issue}
        </div>
      ))}

    </div>

  </div>

</section>
{/* GOVERNANCE */}

<section className="bg-slate-50 py-20">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-6">
      Governance & Lifecycle Management
    </h2>

    <p className="text-lg text-slate-600 leading-relaxed mb-6">
      Equipment hierarchies should be supported by governance,
      change management and asset information standards that
      ensure consistency throughout the asset lifecycle.
    </p>

    <p className="text-lg text-slate-600 leading-relaxed">
      New assets, project handovers and equipment modifications
      should follow approved hierarchy standards to preserve
      information quality and reporting integrity.
    </p>

  </div>

</section>

{/* BUILDING RELIABLE ASSET INFORMATION */}

<section className="bg-slate-900 text-white py-20">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-cyan-400 mb-8">
      Building Reliable Asset Information
    </h2>

    <p className="text-lg text-slate-200 leading-relaxed mb-6">
      Effective equipment hierarchies provide a foundation
      for asset management, maintenance planning, reliability
      engineering and operational readiness activities.
    </p>

    <p className="text-lg text-slate-200 leading-relaxed">
      Organisations that invest in strong hierarchy standards
      are better positioned to manage assets, improve data
      quality and support long-term operational performance.
    </p>

  </div>

</section>

</main>
  );
}