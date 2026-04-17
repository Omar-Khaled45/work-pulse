import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addEditTask } from "@/services/apiTasks";

export const useDuplicateTask = () => {
  const queryClient = useQueryClient();

  // Duplicating task
  const { mutate: duplicateTask, isDuplicating } = useMutation({
    mutationFn: addEditTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["project-details"],
      });
    },
  });

  return { duplicateTask, isDuplicating };
};
