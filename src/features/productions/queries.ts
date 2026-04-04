import { supabase } from "@/lib/supabase";
import type { Production } from "@/lib/database.types";

export async function getProductions(): Promise<Production[]> {
  const { data, error } = await supabase
    .from("productions")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getFeaturedProduction(): Promise<Production | null> {
  const { data, error } = await supabase
    .from("productions")
    .select("*")
    .eq("featured", true)
    .limit(1)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data ?? null;
}
