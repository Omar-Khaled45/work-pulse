import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  Calendar,
  CopyPlus,
  MoreHorizontalIcon,
  Pencil,
  Trash2,
} from "lucide-react";

import { TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import StyledBadge from "@/components/common/StyledBadge";
import AlertConfirmDelete from "@/components/common/AlertConfirmDelete";
import AddEditTaskForm from "@/features/tasks/AddEditTaskForm";

import { formatDate } from "@/utils/formatDate";

import { useDeleteTask } from "@/features/tasks/useDeleteTask";
import { useDuplicateTask } from "@/features/tasks/useDuplicateTask";

const TaskRow = ({ task }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { deleteTask, isDeleting } = useDeleteTask();
  const { duplicateTask } = useDuplicateTask();

  const navigate = useNavigate();
  const location = useLocation();

  const {
    id,
    title,
    description,
    status,
    priority,
    due_date,
    assigned_to,
    created_by,
    project_id,
  } = task;

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  const handleDuplicateTask = () => {
    const duplicatedTask = {
      title: `${task.title} - COPIED`,
      description,
      status,
      priority,
      due_date,
      assigned_to,
      created_by,
      project_id,
    };

    duplicateTask({ newTask: duplicatedTask });
  };

  const handleOpenTask = () => {
    navigate(`/task/${id}`, {
      state: { backgroundLocation: location },
    });
  };

  return (
    <>
      <TableRow key={id} className="hover:bg-muted cursor-pointer">
        <TableCell
          className="hover:text-primary transition-300"
          onClick={handleOpenTask}
        >
          {title}
        </TableCell>
        <TableCell className="hover:text-primary transition-300">
          {assigned_to}
        </TableCell>
        <TableCell>
          <StyledBadge style={status} />
        </TableCell>
        <TableCell>
          <StyledBadge style={priority} />
        </TableCell>
        <TableCell className="text-muted-foreground flex items-center gap-2">
          <Calendar size={16} />
          {formatDate(due_date)}
        </TableCell>
        <TableCell className="text-right">
          <DropdownMenu disabled>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-8 hover:bg-black/10 dark:hover:bg-white/10!"
              >
                <MoreHorizontalIcon />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setIsFormOpen(true)}>
                <Pencil /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={handleDuplicateTask}>
                <CopyPlus />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                onSelect={() => setIsAlertOpen(true)}
              >
                <Trash2 /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>

      {isFormOpen && (
        <AddEditTaskForm setIsFormOpen={setIsFormOpen} taskToEdit={task} />
      )}

      <AlertConfirmDelete
        alertTitle={"Delete task?"}
        alertDescription={
          "The selected task will be deleted permanently. This action cannot be undone."
        }
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
        isPending={isDeleting}
        handleDelete={handleDeleteTask}
      />
    </>
  );
};

export default TaskRow;
