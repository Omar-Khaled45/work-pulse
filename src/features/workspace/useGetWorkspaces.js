import { useQuery } from "@tanstack/react-query";

import { getWorkspaces } from "@/services/apiWorkspaces";

export const useGetWorkspaces = () => {
	const { data: workspaces, isPending } = useQuery({
		queryKey: ["workspaces"],
		queryFn: getWorkspaces,
	});

	return { workspaces, isPending };
};
