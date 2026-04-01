import { supabase } from "./supabase";

export const getTasks = async () => {
  const { data: projects, error } = await supabase
    .from("tasks")
    .select(`*, project: projects(id, title)`);

  if (error) throw new Error("Tasks could not be loaded.");

  return projects;
};
