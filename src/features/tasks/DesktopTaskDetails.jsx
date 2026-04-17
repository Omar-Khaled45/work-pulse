import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StyledBadge from "@/components/common/StyledBadge";

import { capitalize } from "@/utils/capitalize";
import { formatDate } from "@/utils/formatDate";

import { useUpdateTaskStatus } from "@/features/tasks/useUpdateTaskStatus";

const DesktopTaskDetails = ({ task, handleClose }) => {
  const { updateTaskStatus, isUpdatingStatus } = useUpdateTaskStatus();

  const handleStatusChange = (value) => {
    updateTaskStatus({ taskId: task.id, status: value });
  };

  return (
    <Dialog open onOpenChange={handleClose}>
      <DialogContent className="bg-sidebar w-4xl overflow-y-auto p-0">
        <div className="grid grid-cols-3">
          {/* LEFT SIDE */}
          <div className="col-span-2 p-6">
            <DialogHeader>
              <DialogTitle className="mb-4 flex items-center gap-4 text-4xl font-bold">
                <span>{capitalize(task.title)}</span>
                <StyledBadge style={task.priority} />
              </DialogTitle>
            </DialogHeader>

            {/* Description */}
            <div>
              <p className="text-muted-foreground mb-2 text-base font-semibold">
                Description
              </p>
              <p className="text-base leading-relaxed">{task.description}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-accent/30 col-span-1 p-6">
            {/* Status */}
            <div className="mb-5">
              <p className="text-muted-foreground mb-1 text-sm font-semibold">
                Status
              </p>
              <Select
                defaultValue={task.status}
                onValueChange={handleStatusChange}
                disabled={isUpdatingStatus}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="todo"
                    className="bg-secondary text-secondary-foreground"
                  >
                    To Do
                  </SelectItem>
                  <SelectItem
                    value="in-progress"
                    className="bg-active text-active-foreground"
                  >
                    In Progress
                  </SelectItem>
                  <SelectItem
                    value="done"
                    className="bg-completed text-completed-foreground"
                  >
                    Done
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Priority */}
            <div className="mb-5">
              <p className="text-muted-foreground mb-1 text-sm font-semibold">
                Priority
              </p>
              <Select defaultValue={task.priority}>
                <SelectTrigger className={`w-full`}>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="low"
                    className="bg-low text-low-foreground"
                  >
                    Low
                  </SelectItem>
                  <SelectItem
                    value="medium"
                    className="bg-medium text-medium-foreground border-border border-t border-b"
                  >
                    Medium
                  </SelectItem>
                  <SelectItem
                    value="high"
                    className="bg-high text-high-foreground"
                  >
                    High
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Assignee */}
            <div className="mb-4">
              <p className="text-muted-foreground text-sm font-semibold">
                Assignee
              </p>
              <p className="text-base font-medium">{task.assigned_to}</p>
            </div>
            {/* Reporter */}
            <div className="mb-4">
              <p className="text-muted-foreground text-sm font-semibold">
                Created By
              </p>
              <p className="text-base font-medium">{task.created_by}</p>
            </div>
            {/* Dates */}
            <div className="mb-4">
              <p className="text-muted-foreground text-sm font-semibold">
                Due Date
              </p>
              <p className="text-base font-medium">
                {formatDate(task.due_date)}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-muted-foreground text-sm font-semibold">
                Created At
              </p>
              <p className="text-base font-medium">
                {formatDate(task.created_at)}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DesktopTaskDetails;
