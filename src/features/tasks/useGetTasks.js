import { useQuery } from "@tanstack/react-query";
import { getTasks } from "@/services/apiTasks";

export const useGetTasks = ({ filter, search }) => {
  const {
    isPending: isFetchingTasks,
    isError,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["tasks", filter, search],
    queryFn: () => getTasks({ filter, search }),
  });

  return { isFetchingTasks, isError, tasks, error };
};
