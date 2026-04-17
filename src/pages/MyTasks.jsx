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
      <div className="mb-3">
        <Heading title={"My Tasks"}>
          Track and manage individual action items.
        </Heading>
      </div>

      <MyTasksOperations setSearchQuery={setSearchQuery} />

      <TaskItemsContainer searchQuery={searchQuery} />
    </>
  );
};

export default MyTasks;
