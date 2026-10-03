import { supabase } from "./supabase";
import type { Archive, Category, Submission } from "./types";

type ArchiveRow = {
  archive_number: number;
  name: string | null;
  image: string;
  category: string | null;
  location: string | null;
  personality: string | null;
  model: string | null;
  submitted_by: string | null;
  ai_says: string | null;
  human_says: string | null;
  extra_details: string | null;
};

export async function getArchive(): Promise<Archive> {
  const { data, error } = await supabase
    .from("archive_entries")
    .select(
      "archive_number, name, image, category, location, personality, model, submitted_by, ai_says, human_says, extra_details"
    )
    .order("archive_number", { ascending: false });

  if (error) {
    throw new Error(`Failed to load Vibefacing archive: ${error.message}`);
  }

  const items: Submission[] = (data as ArchiveRow[]).map((row) => ({
    id: String(row.archive_number).padStart(4, "0"),
    ...(row.name ? { name: row.name } : {}),
    category: (row.category ?? "OTHER") as Category,
    ...(row.location ? { location: row.location } : {}),
    ...(row.personality ? { personality: row.personality } : {}),
    ...(row.model ? { model: row.model } : {}),
    ...(row.submitted_by ? { submittedBy: row.submitted_by } : {}),
    ...(row.ai_says ? { quote: row.ai_says } : {}),
    ...(row.human_says ? { humanSays: row.human_says } : {}),
    ...(row.extra_details ? { extraDetails: row.extra_details } : {}),
    image: row.image,
  }));

  return { items };
}