import { useQuery } from "@tanstack/react-query";

import { getTasks } from "@/services/apiTasks";

import TaskItem from "./TaskItem";
import Loader from "@/components/common/Loader";

const TaskItemsContainer = () => {
  const {
    isPending,
    isError,
    data: tasks,
    error,
  } = useQuery({ queryKey: ["tasks"], queryFn: getTasks });

  if (isPending) return <Loader />;

  if (!tasks.length)
    return (
      <Empty
        icon={<FolderPlus />}
        title="No tasks yet"
        message="You currently don't have tasks."
      />
    );

  if (isError) console.log(error.message);

  return (
    <div className="space-y-3">
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskItemsContainer;
