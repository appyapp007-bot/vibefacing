import Link from "next/link";
import React from "react";

export default function SiteFooter() {
  return (
    <footer className="w-full mt-12 py-6">
      <div className="max-w-6xl mx-auto px-6 text-sm muted flex items-center justify-center">
        <span>© 2026 Vibefacing · Powered by&nbsp;</span>
        <Link href="https://ganderlink.com" className="ml-1">Ganderlink</Link>
      </div>
    </footer>
  );
}
