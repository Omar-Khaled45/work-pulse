import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProject } from "@/services/apiProjects";

export const useEditProject = () => {
  const queryClient = useQueryClient();

  const { mutate: editProject, isPending: isEditing } = useMutation({
    mutationFn: createEditProject,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return { editProject, isEditing };
};
