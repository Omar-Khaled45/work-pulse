import StyledBadge from "@/components/common/StyledBadge";
import { Card } from "@/components/ui/card";

import { capitalize } from "@/utils/capitalize";
import { formatDate } from "@/utils/formatDate";

const TaskItem = ({ task }) => {
  const {
    title,
    created_at,
    description,
    status,
    priority,
    project: { title: projectTitle },
  } = task;

  return (
    <Card
      className={
        "border-border cursor-pointer justify-between gap-2 px-5 text-base shadow-lg"
      }
    >
      <div className="text-muted-foreground flex items-center gap-2 text-sm">
        <span className="font-bold capitalize">{projectTitle}</span>
        <span className="text-base font-bold">•</span>
        <span>Created {formatDate(created_at)}</span>
      </div>

      <div className="flex justify-between font-semibold">
        {capitalize(title)}
        <div className="flex gap-2">
          <StyledBadge style={priority} />
          <StyledBadge style={status} />
        </div>
      </div>

      <div className="text-muted-foreground font">
        {capitalize(description, "full-stop")}
      </div>
    </Card>
  );
};

export default TaskItem;
