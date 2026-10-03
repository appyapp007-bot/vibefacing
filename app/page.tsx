"use client";
import React, { useEffect, useMemo, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import ArchiveControls from "../components/ArchiveControls";
import ArchiveGrid from "../components/ArchiveGrid";
import MOCK_DATA from "../lib/mock-data";
import type { Submission } from "../lib/types";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");
  const router = useRouter();

  const [rawItems, setRawItems] = useState<Submission[]>(MOCK_DATA.items);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Fetch archive entries from Supabase on mount. Keep MOCK_DATA as a fallback.
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setLoadError(null);
      try {
        const { data, error } = await supabase
          .from("archive_entries")
          .select("*")
          .order("archive_number", { ascending: false });

        if (error) throw error;

        if (!mounted) return;

        if (!data) {
          setRawItems(MOCK_DATA.items);
        } else {
          // Map rows to Submission shape and ensure id is zero-padded 4-digit string
          const mapped = data.map((r: any) => {
            const idNum = r.archive_number ?? r.archiveNumber ?? r.id;
            const idStr = String(idNum ?? "").padStart(4, "0");
            const submission: Submission = {
              id: idStr,
              name: r.name ?? undefined,
              category: (r.category ?? "OTHER") as any,
              location: r.location ?? undefined,
              personality: r.personality ?? undefined,
              model: r.model ?? undefined,
              submittedBy: r.submitted_by ?? r.submittedBy ?? undefined,
              quote: r.ai_says ?? undefined,
              humanSays: r.human_says ?? undefined,
              extraDetails: r.extra_details ?? undefined,
              image: r.image ?? "",
            };
            return submission;
          });
          setRawItems(mapped);
        }
      } catch (err: any) {
        // On error, fall back to MOCK_DATA but record the error for diagnostics
        console.error("Failed to load archive from Supabase:", err?.message ?? err);
        setLoadError(String(err?.message ?? err));
        setRawItems(MOCK_DATA.items);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    const digits = q.replace(/[^0-9]/g, "");
    return rawItems.filter((it) => {
      if (filter !== "ALL" && it.category !== filter) return false;
      if (!q) return true;
      // Match archive number queries like "23", "0023", or "#0023"
      if (digits) {
        const n = Number(digits);
        if (!Number.isNaN(n) && Number(it.id) === n) return true;
      }

      return (
        (it.name ?? "").toLowerCase().includes(q) ||
        (it.personality ?? "").toLowerCase().includes(q) ||
        (it.model ?? "").toLowerCase().includes(q) ||
        (it.location ?? "").toLowerCase().includes(q) ||
        (it.extraDetails ?? "").toLowerCase().includes(q) ||
        (it.humanSays ?? "").toLowerCase().includes(q) ||
        (it.quote ?? "").toLowerCase().includes(q) ||
        (it.submittedBy ?? "").toLowerCase().includes(q) ||
        (it.category ?? "").toLowerCase().includes(q)
      );
    });
  }, [query, filter, rawItems]);

  const handleRandom = () => {
    const list = rawItems;
    if (list.length === 0) return;
    const pick = list[Math.floor(Math.random() * list.length)];
    // Navigate to an existing entry id
    router.push(`/v/${pick.id}`);
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <ArchiveControls
          items={rawItems}
          onFilter={(c) => setFilter(c)}
          onSearch={(q) => setQuery(q)}
          onRandom={handleRandom}
          active={filter}
        />
        <ArchiveGrid items={items as Submission[]} />
        {/* Screen-reader-only status for load errors (keeps UI unchanged) */}
        <div aria-live="polite" className="sr-only">
          {loading ? "Loading archive entries" : loadError ? `Archive load error: ${loadError}` : "Archive loaded"}
        </div>
      </main>
      <footer />
    </div>
  );
}
