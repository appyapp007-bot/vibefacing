import React from "react";
import SiteHeader from "../../../components/SiteHeader";
import MOCK_DATA from "../../../lib/mock-data";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default function EntryPage({ params }: Props) {
  const id = params.id;
  const items = MOCK_DATA.items;
  const idx = items.findIndex((it) => it.id === id);
  const item = items[idx];
  if (!item) {
    return (
      <div>
        <SiteHeader />
        <main className="max-w-4xl mx-auto px-6 py-20">Not found</main>
      </div>
    );
  }

  const prev = items[(idx - 1 + items.length) % items.length];
  const next = items[(idx + 1) % items.length];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="thin-border bg-white">
              <Image src={item.image} alt={`Vibeface ${item.name}`} width={1200} height={1500} className="w-full h-auto object-contain" />
            </div>
          </div>
          <div>
            <div className="text-xs muted">#{item.id}</div>
            <h1 className="text-3xl font-semibold mt-2">{item.name}</h1>

            <dl className="mt-6 grid grid-cols-1 gap-3 text-sm">
              <div>
                <dt className="font-medium">Personality</dt>
                <dd>{item.personality}</dd>
              </div>
              <div>
                <dt className="font-medium">Model</dt>
                <dd>{item.model}</dd>
              </div>
              <div>
                <dt className="font-medium">Category</dt>
                <dd>{item.category}</dd>
              </div>
              <div>
                <dt className="font-medium">Location</dt>
                <dd>{item.location}</dd>
              </div>
              {/* Date removed from public detail view per request */}
            </dl>

            <section className="mt-8 border-t pt-6">
              <h3 className="text-sm font-semibold">THE AI SAYS...</h3>
              <blockquote className="mt-3 text-base italic">{item.quote}</blockquote>
            </section>

            <div className="mt-8 flex items-center gap-4">
              <Link href={`/v/${prev.id}`} className={`text-sm ${prev.id === item.id ? "opacity-40 pointer-events-none" : ""}`}>
                ← PREVIOUS
              </Link>
              <Link href={`/v/${items[Math.floor(Math.random() * items.length)].id}`} className="text-sm">
                RANDOM
              </Link>
              <Link href={`/v/${next.id}`} className={`ml-auto text-sm ${next.id === item.id ? "opacity-40 pointer-events-none" : ""}`}>
                NEXT →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
