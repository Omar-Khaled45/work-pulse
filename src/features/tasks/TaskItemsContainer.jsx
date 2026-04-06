import { FolderPlus } from "lucide-react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { getTasks } from "@/services/apiTasks";

import TaskItem from "./TaskItem";
import Loader from "@/components/common/Loader";
import Empty from "@/components/common/Empty";
import Error from "@/components/common/Error";

const TaskItemsContainer = () => {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status") || "all";
  const searchValue = searchParams.get("q") || "";

  // Filtering tasks: API-Side Filtering
  const filter =
    filterValue && filterValue !== "all"
      ? { field: "status", value: filterValue }
      : null;

  const search =
    searchValue && searchValue !== ""
      ? { field: "q", value: searchValue }
      : null;

  const {
    isPending,
    isError,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["tasks", filter, search],
    queryFn: () => getTasks({ filter, search }),
  });

  if (isPending) return <Loader />;

  if (isError) {
    return <Error error={error.message} />;
  }

  if (!tasks.length && !filter && !search)
    return (
      <Empty
        icon={<FolderPlus />}
        title="No tasks yet"
        message="You currently don't have tasks."
      />
    );

  if (!tasks.length && (filter || search))
    return (
      <Empty
        icon={<FolderPlus />}
        title="No tasks found"
        message="Try adjusting your filters."
      />
    );

  return (
    <div className="space-y-3">
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskItemsContainer;
