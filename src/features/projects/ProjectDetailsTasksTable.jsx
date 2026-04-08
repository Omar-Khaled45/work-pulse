import { Calendar, FilePlus } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import StyledBadge from "@/components/common/StyledBadge";
import Empty from "@/components/common/Empty";

import { formatDate } from "@/utils/formatDate";

const ProjectDetailsTasksTable = ({ project }) => {
  const { tasks } = project;

  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <h5 className="text-lg font-semibold">Project Tasks</h5>
        <Button size="lg">Add Task</Button>
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
              </TableRow>
            </TableHeader>
            <TableBody className="[&_td]:px-6 [&_td]:py-3 [&_td]:font-semibold">
              {tasks.map((task) => (
                <TableRow
                  key={task.id}
                  className="hover:bg-muted cursor-pointer"
                >
                  <TableCell className="hover:text-primary transition-300">
                    {task.title}
                  </TableCell>
                  <TableCell className="hover:text-primary transition-300">
                    {task.assigned_to}
                  </TableCell>
                  <TableCell>
                    <StyledBadge style={task.status} />
                  </TableCell>
                  <TableCell>
                    <StyledBadge style={task.priority} />
                  </TableCell>
                  <TableCell className="text-muted-foreground flex items-center gap-2">
                    <Calendar size={16} />
                    {formatDate(task.due_date)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsTasksTable;
