import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import { getProjects } from "@/services/apiProjects";

export const useGetProjects = ({ filter, search }) => {
	const { workspaceId } = useParams();

	const {
		isPending: isFetchingProjects,
		isError,
		data: projects,
		error,
	} = useQuery({
		queryKey: ["projects", filter, search, workspaceId],
		queryFn: () => getProjects({ filter, search, workspaceId }),
	});

	return { isFetchingProjects, isError, projects, error };
};
