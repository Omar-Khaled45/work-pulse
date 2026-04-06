import { supabase } from "./supabase";

export const getTasks = async ({ filter, search }) => {
  let query = supabase.from("tasks").select(`*, project: projects(id, title)`);

  // FILTER
  if (filter) query = query.eq("status", filter.value);

  // SEARCH
  if (search)
    query = query.or(
      `title.ilike.%${search.value}%,description.ilike.%${search.value}%`,
    );

  const { data: tasks, error } = await query;

  if (error) throw new Error("Tasks could not be loaded. Please try again.");

  return tasks;
};
