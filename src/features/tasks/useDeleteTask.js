import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteTask as deleteTaskAPI } from "@/services/apiTasks";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  // Deleting task
  const { mutate: deleteTask, isPending: isDeleting } = useMutation({
    mutationFn: deleteTaskAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["project-details"],
      });
    },
  });

  return { deleteTask, isDeleting };
};
