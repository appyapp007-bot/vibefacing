import Link from "next/link";
import React from "react";

export default function SiteFooter() {
  return (
    <footer className="w-full mt-12 py-6">
      <div className="max-w-6xl mx-auto px-4 text-[11px] muted sm:px-6 sm:text-sm">
        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 leading-relaxed text-center">
          <span>© 2027 Vibefacing</span>
          <span>·</span>
          <span>Powered by</span>
          <Link href="https://ganderlink.com">Ganderlink</Link>
        </div>
      </div>
    </footer>
  );
}
