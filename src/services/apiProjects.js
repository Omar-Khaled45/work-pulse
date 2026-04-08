import { supabase } from "./supabase";

export const getProjects = async ({ filter, search }) => {
  let query = supabase.from("projects").select(`*, tasks(*)`);

  // FILTER
  if (filter) query = query.eq("status", filter.value);

  // SEARCH
  if (search) {
    // Remove special characters
    const searchTerm = search.value.replace(/[%(),]/g, "");

    query = query.or(
      `title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`,
    );
  }

  const { data: projects, error } = await query;

  if (error) throw new Error("Projects could not be loaded. Please try again.");

  return projects;
};

export const getProjectDetails = async (projectId) => {
  const { data: project, error } = await supabase
    .from("projects")
    .select(`*, tasks(*)`)
    .eq("id", projectId)
    .single();

  if (error) throw new Error("Project details could not be loaded.");

  return project;
};
