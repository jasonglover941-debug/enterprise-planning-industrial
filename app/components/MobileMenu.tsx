"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<div className="md:hidden">
<button
        onClick={() => setOpen(!open)}
        className="text-white text-2xl"
      >
        ☰
      </button>


      {open && (
        <div className="absolute top-16 right-4 bg-slate-900 p-4 rounded-lg shadow-lg flex flex-col gap-3">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/master-data-management" onClick={() => setOpen(false)}>Master Data</Link>
          <Link href="/operational-readiness" onClick={() => setOpen(false)}>Operational Readiness</Link>
          <Link href="/data-cleansing-governance" onClick={() => setOpen(false)}>Data Governance</Link>
          <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
          <Link href="/project-experience" onClick={() => setOpen(false)}>Project Experience</Link>
          <Link href="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}
