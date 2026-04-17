import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/services/apiProjects";

export const useGetProjects = ({ filter, search }) => {
  const {
    isPending: isFetchingProjects,
    isError,
    data: projects,
    error,
  } = useQuery({
    queryKey: ["projects", filter, search],
    queryFn: () => getProjects({ filter, search }),
  });

  return { isFetchingProjects, isError, projects, error };
};
