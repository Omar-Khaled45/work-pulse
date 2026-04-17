import { addEditTask } from "@/services/apiTasks";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask, isPending: isEditing } = useMutation({
    mutationFn: addEditTask,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-details"] });
    },
  });

  return { editTask, isEditing };
};
