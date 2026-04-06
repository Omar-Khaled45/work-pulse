import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/common/Heading";
import MyTasksOperations from "@/features/tasks/MyTasksOperations";
import TaskItemsContainer from "@/features/tasks/TaskItemsContainer";

const MyTasks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="flex justify-between space-y-3 @max-md:mb-3 @max-md:flex-col @md:items-center">
        <Heading title={"My Tasks"}>
          Track and manage individual action items.
        </Heading>
        <Button size="lg" className="@max-md:w-full">
          <Plus /> Add Task
        </Button>
      </div>

      <MyTasksOperations setSearchQuery={setSearchQuery} />

      <TaskItemsContainer searchQuery={searchQuery} />
    </>
  );
};

export default MyTasks;
