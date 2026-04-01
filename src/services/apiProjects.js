import { supabase } from "./supabase";

export const getProjects = async () => {
  const { data: projects, error } = await supabase
    .from("projects")
    .select(`*, tasks(*)`);

  if (error) throw new Error("Projects could not be loaded.");

  return projects;
};
