import { useState } from "react";
import { FilePlus, Plus } from "lucide-react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Empty from "@/components/common/Empty";
import AddEditTaskForm from "@/features/tasks/AddEditTaskForm";
import TaskRow from "@/features/tasks/TaskRow";
import { Button } from "@/components/ui/button";

const ProjectDetailsTasksTable = ({ project }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { tasks } = project;

  return (
    <>
      <div className="flex-1 space-y-3">
        <div className="flex justify-between">
          <h5 className="text-lg font-semibold">Project Tasks</h5>

          <Button size="lg" onClick={() => setIsFormOpen((prev) => !prev)}>
            <Plus /> Add Task
          </Button>
        </div>

        {tasks.length === 0 ? (
          <Empty
            icon={<FilePlus />}
            title="No tasks yet"
            message="Start adding tasks."
          />
        ) : (
          <div className="bg-card overflow-auto rounded-xl shadow-lg">
            <Table className="[&_th]:text-muted-foreground [&_th]:px-6 [&_th]:py-3 [&_th]:font-bold">
              <TableHeader className="bg-muted font-bold">
                <TableRow>
                  <TableHead>Tasks</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="[&_td]:px-6 [&_td]:py-3 [&_td]:font-semibold">
                {tasks.map((task) => (
                  <TaskRow key={task.id} task={task} />
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      {isFormOpen && <AddEditTaskForm setIsFormOpen={setIsFormOpen} />}
    </>
  );
};

export default ProjectDetailsTasksTable;
