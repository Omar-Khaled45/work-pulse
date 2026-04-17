import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProjectStatus as updateProjectStatusAPI } from "@/services/apiProjects";

export const useUpdateProjectStatus = () => {
  const queryClient = useQueryClient();

  const { mutate: updateProjectStatus, isPending: isUpdatingStatus } =
    useMutation({
      mutationFn: updateProjectStatusAPI,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["project-details"],
        });
      },
    });

  return { updateProjectStatus, isUpdatingStatus };
};
