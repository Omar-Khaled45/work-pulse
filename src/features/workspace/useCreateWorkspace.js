import { useMutation } from "@tanstack/react-query";
import { createWorkspace as createWorkspaceAPI } from "@/services/apiWorkspaces";

export const useCreateWorkspace = () => {
  const { mutate: createWorkspace, isPending: isCreating } = useMutation({
    mutationFn: createWorkspaceAPI,
  });

  return { createWorkspace, isCreating };
};
