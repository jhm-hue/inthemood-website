import { supabase } from "@/lib/supabase";
import type { News } from "@/lib/database.types";

export async function getPublishedNews(): Promise<News[]> {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}
