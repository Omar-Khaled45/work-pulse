import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import { getUserRole } from "@/services/apiWorkspaces";

export const useGetWorkspaceRoles = () => {
	const { workspaceId } = useParams();

	const { data, isPending: isGettingRoles } = useQuery({
		queryKey: ["workspace-role", workspaceId],
		queryFn: () => getUserRole({ workspaceId }),
	});

	return { data, isGettingRoles };
};
