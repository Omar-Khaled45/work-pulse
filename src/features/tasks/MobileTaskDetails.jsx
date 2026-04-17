import { CalendarDays, Clock } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import StyledBadge from "@/components/common/StyledBadge";

import { capitalize } from "@/utils/capitalize";
import { formatDate } from "@/utils/formatDate";

const MobileTaskDetails = ({ task, handleClose }) => {
  return (
    <Drawer open onOpenChange={handleClose}>
      <DrawerContent className="max-h-[90vh]">
        {/* HEADER */}
        <DrawerHeader className="space-y-3 text-left">
          <DrawerTitle className="text-3xl leading-tight">
            {capitalize(task.title)}
          </DrawerTitle>

          {/* Status + Epic */}
          <div className="flex gap-4">
            <div className="bg-muted/50 flex-1 space-y-1 rounded-lg p-3">
              <p className="text-muted-foreground text-base font-semibold">
                Status
              </p>

              <StyledBadge style={task.status} />
            </div>
            <div className="bg-muted/50 flex-1 space-y-1 rounded-lg p-3">
              <p className="text-muted-foreground text-base font-semibold">
                Priority
              </p>

              <StyledBadge style={task.priority} />
            </div>
          </div>
        </DrawerHeader>

        {/* CONTENT (SCROLLABLE) */}
        <div className="overflow-y-auto px-4 pb-6">
          {/* INFO GRID */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="bg-muted/50 space-y-1 rounded-lg p-3">
              <p className="text-muted-foreground text-xs">Assignee</p>

              <div className="flex items-center gap-2 text-sm font-medium">
                <span>{task.assigned_to}</span>
              </div>
            </div>

            <div className="bg-muted/50 space-y-1 rounded-lg p-3">
              <p className="text-muted-foreground text-xs">Due Date</p>

              <div className="flex items-center gap-2 text-sm font-medium">
                <CalendarDays className="h-4 w-4" />
                <span>{formatDate(task.due_date)}</span>
              </div>
            </div>

            <div className="bg-muted/50 space-y-1 rounded-lg p-3">
              <p className="text-muted-foreground text-xs">Created By</p>

              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4" />
                <span>{task.created_by}</span>
              </div>
            </div>

            <div className="bg-muted/50 space-y-1 rounded-lg p-3">
              <p className="text-muted-foreground text-xs">Created At</p>

              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4" />
                <span>{formatDate(task.created_at)}</span>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <p className="text-muted-foreground mb-2 text-sm font-medium">
              Description
            </p>

            <div className="bg-muted/50 rounded-lg p-4 text-sm leading-relaxed">
              {task.description}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileTaskDetails;
