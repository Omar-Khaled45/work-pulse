import { FilePlus } from "lucide-react";

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

const ProjectDetailsTasksTable = ({ project }) => {
  const { tasks } = project;

  return (
    <>
      <div className="flex-1 space-y-3">
        <div className="flex justify-between">
          <h5 className="text-lg font-semibold">Project Tasks</h5>
          <AddEditTaskForm />
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
    </>
  );
};

export default ProjectDetailsTasksTable;
