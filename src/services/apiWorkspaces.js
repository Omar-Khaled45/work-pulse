import { supabase } from "./supabase";

export const getWorkspaces = async () => {
	const { data: workspaces, error } = await supabase
		.from("workspaces")
		.select(`*`);

	if (error)
		throw new Error("Workspaces could not be loaded. Please try again.");

	return workspaces;
};

export const createWorkspace = async (newWorkspace) => {
	const {
		data: { user },
	} = await supabase.auth.getUser();

	// Create the workspace
	const { data: workspace, error } = await supabase
		.from("workspaces")
		.insert({ ...newWorkspace, created_by: user.id })
		.select()
		.single();

	if (error)
		throw new Error("Workspaces could not be created. Please try again.");

	// 2. Add creator to workspace_members
	const { error: memberError } = await supabase
		.from("workspace_members")
		.insert({
			workspace_id: workspace.id,
			user_id: user.id,
			role: "admin",
		});

	if (memberError) throw new Error(memberError);

	return workspace;
};

export const getUserRole = async ({ workspaceId }) => {
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data: memberData } = await supabase
		.from("workspace_members")
		.select("role")
		.eq("user_id", user.id)
		.eq("workspace_id", workspaceId)
		.single();

	return memberData;
};
