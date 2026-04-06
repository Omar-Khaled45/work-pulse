import { Separator } from "@/components/ui/separator";
import StyledBadge from "@/components/common/StyledBadge";

import { capitalize } from "@/utils/capitalize";
import { Badge } from "@/components/ui/badge";

const ProjectDetailsHeader = ({ project }) => {
  const { tasks } = project;

  const completedTasks = tasks.filter((task) => task.status === "done");

  const isCompleted =
    tasks.length > 0 &&
    completedTasks.length === tasks.length &&
    project.status !== "completed";

  return (
    <div className="mb-8 space-y-2">
      <h2 className="flex items-center gap-4 text-3xl font-bold capitalize">
        {project.title}
        <StyledBadge style={project.status} />
      </h2>
      <p className="text-muted-foreground">
        {capitalize(project.description, "full-stop")}
      </p>
      {isCompleted && (
        <Badge variant="completed" className="py-4 text-base">
          All tasks are completed 🎉 — Mark project as completed?
        </Badge>
      )}
      <Separator className="mt-5" />
    </div>
  );
};

export default ProjectDetailsHeader;
