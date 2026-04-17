import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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

import { formatDate } from "@/utils/formatDate";

import {
  addEditTask as addTaskAPI,
  deleteTask as deleteTaskAPI,
} from "@/services/apiTasks";
import { useLocation, useNavigate } from "react-router";

const TaskRow = ({ task }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const queryClient = useQueryClient();

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

  // Deleting task
  const { mutate: deleteTask, isPending: isDeleting } = useMutation({
    mutationFn: deleteTaskAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["project-details"],
      });
      setIsAlertOpen(false);
    },
  });

  // Duplicating task
  const { mutate: duplicateTask } = useMutation({
    mutationFn: addTaskAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["project-details"],
      });
    },
  });

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  const handleDuplicateTask = () => {
    const duplicatedTask = {
      title,
      description,
      status,
      priority,
      due_date,
      assigned_to,
      created_by,
      project_id,
    };

    duplicateTask(duplicatedTask);
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
              <DropdownMenuItem>
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
