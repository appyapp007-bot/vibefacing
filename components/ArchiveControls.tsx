"use client";
import React from "react";
import { CATEGORIES } from "../lib/types";
import type { Submission } from "../lib/types";

interface Props {
  items: Submission[];
  onFilter: (cat: string) => void;
  onSearch: (q: string) => void;
  onRandom: () => void;
  active: string;
}

export default function ArchiveControls({ items, onFilter, onSearch, onRandom, active }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">WHAT DOES YOUR AI LOOK LIKE?</h2>
          <p className="mt-3 text-sm">Ask your AI to vibe face themselves.</p>
          {/* Removed per request: single-line archive description */}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <input
              aria-label="Search archive"
              placeholder="Search name, number, description"
              onChange={(e) => onSearch(e.target.value)}
              className="border thin-border px-3 py-2 text-xs min-w-[calc(34ch+30px)] relative -top-[66px]"
            />
            <a href="mailto:vibefacing@ganderlink.com" className="mt-[78px] text-sm muted">
              Have an AI image to add?
              <br />
              <strong className="underline">vibefacing@ganderlink.com</strong>
            </a>
          </div>
          {/* RANDOM button hidden temporarily per request; handler left intact */}
        </div>
      </div>

      <div className="mt-4 flex gap-3 flex-wrap">
        <button
          className={`text-xs px-3 py-1 thin-border ${active === "ALL" ? "bg-black text-white" : "muted"}`}
          onClick={() => onFilter("ALL")}
        >
          ALL
        </button>
        {CATEGORIES.map((c) => (
          <button key={c} className={`text-xs px-3 py-1 thin-border ${active === c ? "bg-black text-white" : "muted"}`} onClick={() => onFilter(c)}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
