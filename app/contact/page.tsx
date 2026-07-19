import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Enterprise Planning Industrial",
  description:
    "Contact Enterprise Planning Industrial to discuss master data management, operational readiness, data governance and enterprise asset management services.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <p className="text-cyan-400 font-semibold uppercase tracking-wider">
            Contact • Consultation • Support
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Contact
          </h1>

          <p className="text-xl text-slate-200 max-w-4xl leading-relaxed">
            Whether you're developing master data, preparing a
            project for operational handover or improving data
            quality, Enterprise Planning Industrial can help.
          </p>

        </div>

      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-8">
          Request a Consultation
        </h2>

        <form
          action="https://formspree.io/f/xbdnlywr"
          method="POST"
          className="bg-slate-50 rounded-xl p-8 border"
        >

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Company
            </label>

            <input
              type="text"
              name="company"
              className="w-full p-3 border rounded-lg"
            />
          </div>
<div className="mb-4">
  <label className="block mb-2 font-medium">
    Email
  </label>

  <input
    type="email"
    name="email"
    required
    className="w-full p-3 border rounded-lg"
  />
</div>

<div className="mb-4">
  <label className="block mb-2 font-medium">
    Phone
  </label>

  <input
    type="text"
    name="phone"
    className="w-full p-3 border rounded-lg"
  /><div className="mb-4">
  <label className="block mb-2 font-medium">
    Service Required
  </label>

  <select
    name="service"
    className="w-full p-3 border rounded-lg"
  >
    <option>Master Data Management</option>
    <option>Operational Readiness</option>
    <option>Data Cleansing & Governance</option>
    <option>SAP / EAM Support</option>
    <option>Maintenance Planning</option>
    <option>Other</option>
  </select>
</div>

<div className="mb-6">
  <label className="block mb-2 font-medium">
    Project Description
  </label>

  <textarea
    name="message"
    rows={6}
    required
    className="w-full p-3 border rounded-lg"
    placeholder="Tell us about your project, requirements or challenges..."
  />
</div>
</div>
          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Send Enquiry
          </button>

        </form>

      </section>

    </main>
  );
}