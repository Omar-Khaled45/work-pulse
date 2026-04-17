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

export const getTaskDetails = async (taskId) => {
  const { data: task, error } = await supabase
    .from("tasks")
    .select(`*, projects(id)`)
    .eq("id", taskId)
    .single();

  if (error) throw new Error("Task details could not be loaded.");

  return task;
};

export const addEditTask = async ({ newTask, id }) => {
  let query = supabase.from("tasks");

  // Create Project
  if (!id) query = query.insert({ ...newTask });

  // Edit Project
  if (id) query = query.update({ ...newTask }).eq("id", id);

  const { data: task, error } = await query.select();

  if (error)
    throw new Error(
      "Can not create the task right now. Please try again later.",
    );

  return task;
};

export const updateTaskStatus = async ({ taskId, status }) => {
  const { data: task, error } = await supabase
    .from("tasks")
    .update({ status: status })
    .eq("id", taskId)
    .select();

  if (error)
    throw new Error(
      "Can not change the status of the task right now. Please try again later.",
    );

  return task;
};

export const deleteTask = async (taskId) => {
  const { data: deletedTask, error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId);

  if (error)
    throw new Error(
      "Can not delete the task right now. Please try again later.",
    );

  return deletedTask;
};
