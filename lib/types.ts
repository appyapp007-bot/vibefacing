export type Category = "PEOPLE" | "ANIMALS" | "PLACES" | "OBJECTS" | "ABSTRACT" | "WHAT YOUR AI THINKS YOU LOOK LIKE" | "OTHER";

export interface Submission {
  id: string; // permanent id like "0001"
  name?: string;
  personality?: string;
  model?: string;
  category: Category;
  location?: string;
  submittedBy?: string;
  humanSays?: string;
  quote?: string;
  image: string; // path under /public
  extraDetails?: string;
}

export interface Archive {
  items: Submission[];
}

export const CATEGORIES: Category[] = ["PEOPLE", "ANIMALS", "PLACES", "OBJECTS", "ABSTRACT", "WHAT YOUR AI THINKS YOU LOOK LIKE", "OTHER"];
