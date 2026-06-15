import { getUserRole } from "@/services/apiWorkspaces";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const useGetWorkspaceRoles = () => {
  const { workspaceId } = useParams();

  const { data, isPending: isGettingRoles } = useQuery({
    queryKey: ["workspace-role", workspaceId],
    queryFn: () => getUserRole({ workspaceId }),
  });

  return { data, isGettingRoles };
};
