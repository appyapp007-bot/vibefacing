"use client";
import React, { useState } from "react";
import type { Submission } from "../lib/types";
import Image from "next/image";

interface Props {
  items: Submission[];
}

export default function ArchiveGrid({ items }: Props) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  function closeLightbox() {
    setSelectedImage(null);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {items.map((it) => (
          <article key={it.id} className="group">
            <div
              className="aspect-[4/5] w-full overflow-hidden thin-border cursor-pointer"
              onClick={() => setSelectedImage(it.image)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedImage(it.image);
                }
              }}
            >
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              aria-label="Close image"
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-black/70 text-lg text-white"
            >
              ×
            </button>
            {isSvg(selectedImage) ? (
              <img src={selectedImage} alt="Vibeface detail" className="max-h-[90vh] max-w-[90vw] object-contain" />
            ) : (
              <Image src={selectedImage} alt="Vibeface detail" width={1200} height={1500} className="max-h-[90vh] max-w-[90vw] object-contain" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
