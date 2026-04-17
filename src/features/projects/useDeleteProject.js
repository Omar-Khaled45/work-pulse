import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject as deleteProjectAPI } from "@/services/apiProjects";

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteProject, isPending: isDeleting } = useMutation({
    mutationFn: deleteProjectAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return { deleteProject, isDeleting };
};
