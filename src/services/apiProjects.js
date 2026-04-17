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

export const createEditProject = async ({ newProject, id }) => {
  let query = supabase.from("projects");

  // Create Project
  if (!id) query = query.insert({ ...newProject });

  // Edit Project
  const { tasks, ...matchedData } = newProject;

  if (id) query = query.update({ ...matchedData }).eq("id", id);

  const { data: project, error } = await query.select();

  if (error)
    throw new Error(
      "Can not create the project right now. Please try again later.",
    );

  return project;
};

export const updateProjectStatus = async ({ projectId, status }) => {
  const { data: project, error } = await supabase
    .from("projects")
    .update({ status: status })
    .eq("id", projectId)
    .select();

  if (error)
    throw new Error(
      "Can not change the status of the project right now. Please try again later.",
    );

  return project;
};

export const deleteProject = async (projectId) => {
  const { data: deletedProject, error } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);

  if (error)
    throw new Error(
      "Can not delete the project right now. Please try again later.",
    );

  return deletedProject;
};
