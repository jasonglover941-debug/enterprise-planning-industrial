import MobileMenu from "./components/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enterprise Planning Industrial",
  description:
    "Master Data Management, Operational Readiness and Data Governance Specialists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

<body className="min-h-full flex flex-col">

  <header className="bg-slate-900 text-white p-4">
    <div className="max-w-6xl mx-auto flex items-center justify-between">

      <Link href="/" className="font-bold text-xl">
        <Image src="/logo.svg" alt="EPI" width={40} height={42} />
      </Link>

      <nav className="hidden md:flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/master-data-management">Master Data Management</Link>
        <Link href="/operational-readiness">Operational Readiness</Link>
        <Link href="/data-cleansing-governance">Data Governance</Link>
        <Link href="/industries">Industries</Link>
        <Link href="/project-experience">Project Experience</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <MobileMenu />

    </div>
  </header>

  {children}
<footer className="bg-slate-900 text-white mt-auto">
  <div className="max-w-6xl mx-auto px-6 py-10">

    <div className="mb-4">
      <h3 className="text-xl font-bold">
        Enterprise Planning Industrial
      </h3>

      <p className="text-slate-300 mt-2">
        Master Data Management • Operational Readiness • Data Governance
      </p>
    </div>

    <div className="border-t border-slate-700 pt-4">
      <p className="text-slate-400 text-sm">
        © 2025 Enterprise Planning Industrial. All rights reserved.
      </p>
    </div>

  </div>
</footer>
</body>

    </html>
  );
}