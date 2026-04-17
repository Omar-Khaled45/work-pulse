import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { getProjectDetails } from "@/services/apiProjects";

export const useGetProjectDetails = () => {
  const { projectId } = useParams();

  const {
    isPending: isFetchingProjectDetails,
    isError,
    data: project,
    error,
  } = useQuery({
    queryKey: ["project-details", projectId],
    queryFn: () => getProjectDetails(projectId),
  });

  return { isFetchingProjectDetails, isError, project, error };
};
