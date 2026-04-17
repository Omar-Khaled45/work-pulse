import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProject } from "@/services/apiProjects";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  const { mutate: createProject, isPending: isCreating } = useMutation({
    mutationFn: createEditProject,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return { createProject, isCreating };
};
