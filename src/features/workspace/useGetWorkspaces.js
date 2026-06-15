import { getWorkspaces } from "@/services/apiWorkspaces";
import { useQuery } from "@tanstack/react-query";

export const useGetWorkspaces = () => {
  const { data: workspaces, isPending } = useQuery({
    queryKey: ["workspaces"],
    queryFn: getWorkspaces,
  });

  return { workspaces, isPending };
};
