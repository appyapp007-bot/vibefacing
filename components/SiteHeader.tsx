import Link from "next/link";
import React from "react";

export default function SiteHeader() {
  return (
    <header className="w-full thin-border bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 sm:py-6">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/"
              className="text-[10px] font-semibold tracking-[0.28em] text-foreground whitespace-nowrap leading-none sm:text-sm sm:tracking-[0.35em]"
            >
              V I B E F A C I N G
            </Link>
            <nav className="flex items-center gap-4 text-[10px] sm:gap-6 sm:text-sm">
              <Link href="/submit" className="muted">SUBMIT</Link>
              <Link href="/about" className="muted">ABOUT</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
