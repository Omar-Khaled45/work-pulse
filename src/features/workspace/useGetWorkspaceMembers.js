import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import { getWorkspaceMembers } from "@/services/apiWorkspaces";

export const useGetWorkspaceMembers = () => {
	const { workspaceId } = useParams();

	const {
		isPending: isGettingMembers,
		isError,
		data: members,
		error,
	} = useQuery({
		queryKey: ["workspace-members", workspaceId],
		queryFn: () => getWorkspaceMembers({ workspaceId }),
	});

	return { isGettingMembers, isError, members, error };
};
