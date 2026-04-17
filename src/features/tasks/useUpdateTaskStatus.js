import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTaskStatus as updateTaskStatusAPI } from "@/services/apiTasks";

export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient();

  const { mutate: updateTaskStatus, isPending: isUpdatingStatus } = useMutation(
    {
      mutationFn: updateTaskStatusAPI,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["task-details"],
        });

        queryClient.invalidateQueries({
          queryKey: ["project-details"],
        });
      },
    },
  );

  return { updateTaskStatus, isUpdatingStatus };
};
