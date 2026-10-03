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
    <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-[42rem]">
          <h2 className="text-xl font-semibold tracking-[-0.04em] leading-[1.05] sm:text-2xl">
            WHAT DOES YOUR AI LOOK LIKE?
          </h2>
          <p className="mt-3 text-xs sm:text-sm">Ask your AI to vibe face themselves.</p>
          {/* Removed per request: single-line archive description */}
        </div>

        <div className="flex w-full max-w-[27rem] flex-col gap-3 sm:w-auto">
          <input
            aria-label="Search archive"
            placeholder="Search name, number, description"
            onChange={(e) => onSearch(e.target.value)}
            className="w-full border thin-border px-3 py-2 text-xs"
          />
          <a href="mailto:vibefacing@ganderlink.com" className="text-xs leading-relaxed muted sm:text-sm">
            Have an AI image to add?
            <br className="hidden sm:block" />
            <strong className="underline">vibefacing@ganderlink.com</strong>
          </a>
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
