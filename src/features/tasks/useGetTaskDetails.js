import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { getTaskDetails } from "@/services/apiTasks";

export const useGetTaskDetails = () => {
  const { taskId } = useParams();

  const {
    isPending: isFetchingTaskDetails,
    isError,
    data: task,
    error,
  } = useQuery({
    queryKey: ["task-details", taskId],
    queryFn: () => getTaskDetails(taskId),
  });

  return { isFetchingTaskDetails, isError, task, error };
};
