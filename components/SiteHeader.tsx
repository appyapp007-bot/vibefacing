import Link from "next/link";
import React from "react";

export default function SiteHeader() {
  return (
    <header className="w-full thin-border bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm tracking-[0.35em] font-semibold">
            V I B E F A C I N G
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/submit" className="muted">SUBMIT</Link>
            <Link href="/about" className="muted">ABOUT</Link>
          </nav>
        </div>
        <nav className="md:hidden text-sm muted">
          <Link href="/submit" className="muted">SUBMIT</Link>
          <Link href="/about" className="muted">ABOUT</Link>
        </nav>
      </div>
    </header>
  );
}
