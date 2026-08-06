import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addEditTask } from "@/services/apiTasks";

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
