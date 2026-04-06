import { supabase } from "./supabase";

export const getProjects = async ({ filter, search, id = null }) => {
  let query = supabase.from("projects").select(`*, tasks(*)`);

  // FILTER
  if (filter) query = query.eq("status", filter.value);

  // SEARCH
  if (search)
    query = query.or(
      `title.ilike.%${search.value}%,description.ilike.%${search.value}%`,
    );

  // Get Single Project Details
  if (id) query = query.eq("id", id).single();

  const { data: projects, error } = await query;

  if (error) throw new Error("Projects could not be loaded. Please try again.");

  return projects;
};
