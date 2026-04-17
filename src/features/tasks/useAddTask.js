import { addEditTask } from "@/services/apiTasks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddTask = () => {
  const queryClient = useQueryClient();

  const { mutate: addTask, isPending: isAdding } = useMutation({
    mutationFn: addEditTask,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-details"] });
    },
  });

  return { addTask, isAdding };
};
