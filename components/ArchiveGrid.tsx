"use client";
import React, { useState } from "react";
import type { Submission } from "../lib/types";
import Image from "next/image";

interface Props {
  items: Submission[];
}

export default function ArchiveGrid({ items }: Props) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setOpenIds((s) => ({ ...s, [id]: !s[id] }));
  }

  function displayNumber(id: string) {
    const n = Number(id || 0);
    return String(n).padStart(2, "0");
  }

  function isSvg(src?: string) {
    return typeof src === "string" && src.toLowerCase().endsWith(".svg");
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {items.map((it) => (
          <article key={it.id} className="group">
            <div className="aspect-[4/5] w-full overflow-hidden thin-border">
              {isSvg(it.image) ? (
                <img src={it.image} alt={`Vibeface ${it.name ?? "entry"}`} className="object-cover w-full h-full" />
              ) : (
                <Image src={it.image} alt={`Vibeface ${it.name ?? "entry"}`} width={800} height={1000} className="object-cover w-full h-full" />
              )}
            </div>

            <div className="mt-3 text-xs flex items-center justify-between">
              <div className="text-[11px] muted">{displayNumber(it.id)}</div>
              <button
                aria-expanded={!!openIds[it.id]}
                onClick={() => toggle(it.id)}
                className="text-xs thin-border px-2 py-1 muted hover:text-black"
              >
                {openIds[it.id] ? "CLOSE" : "READ MORE"}
              </button>
            </div>

            {openIds[it.id] && (
              <div className="mt-3 thin-border p-3 text-xs" role="region" aria-label={`Details for ${it.name ?? 'entry'}`}>
                {it.name && (
                  <div className="text-xs">
                    <span className="font-semibold">Name:</span>
                    <span className="ml-2 font-medium">{it.name}</span>
                  </div>
                )}

                {it.location && (
                  <div className="mt-2 text-xs muted">
                    <span className="font-semibold">Location:</span>
                    <span className="ml-2">{it.location}</span>
                  </div>
                )}

                {it.submittedBy && (
                  <div className="mt-2 text-xs muted">
                    <span className="font-semibold">Submitted by:</span>
                    <span className="ml-2">{it.submittedBy}</span>
                  </div>
                )}

                {it.personality && (
                  <div className="mt-2 text-xs muted">
                    <span className="font-semibold">Personality:</span>
                    <span className="ml-2">{it.personality}</span>
                  </div>
                )}

                {it.model && (
                  <div className="mt-2 text-xs muted">
                    <span className="font-semibold">Model:</span>
                    <span className="ml-2">{it.model}</span>
                  </div>
                )}

                {/* Date removed from items per request */}

                {it.extraDetails && (
                  <div className="mt-2 text-xs muted">
                    <span className="font-semibold">Extra details:</span>
                    <span className="ml-2">
                      {(() => {
                        const txt = it.extraDetails || "";
                        const parts = txt.split("Ganderlink");
                        if (parts.length === 1) return <>{txt}</>;
                        return (
                          <>
                            {parts[0]}
                            <a href="https://ganderlink.com" target="_blank" rel="noreferrer" className="underline">
                              Ganderlink
                            </a>
                            {parts.slice(1).join("Ganderlink")}
                          </>
                        );
                      })()}
                    </span>
                  </div>
                )}

                {it.humanSays && (
                  <div className="mt-4 border-t pt-3">
                    <h4 className="text-xs font-semibold">THE HUMAN SAYS...</h4>
                    <blockquote className="mt-2 italic">{it.humanSays}</blockquote>
                  </div>
                )}

                {it.quote && (
                  <div className="mt-4 border-t pt-3">
                    <h4 className="text-xs font-semibold">THE AI SAYS...</h4>
                    <blockquote className="mt-2 italic">{it.quote}</blockquote>
                  </div>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
