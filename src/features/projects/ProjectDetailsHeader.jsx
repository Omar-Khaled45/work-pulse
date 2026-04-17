import { Separator } from "@/components/ui/separator";
import StyledBadge from "@/components/common/StyledBadge";

import { PROJECT_STATUS, TASK_STATUS } from "@/constants/constants";

import { capitalize } from "@/utils/capitalize";
import { Button } from "@/components/ui/button";

import { Spinner } from "@/components/ui/spinner";

import { useUpdateProjectStatus } from "@/features/projects/useUpdateProjectStatus";

const ProjectDetailsHeader = ({ project }) => {
  const { updateProjectStatus, isUpdatingStatus } = useUpdateProjectStatus();
  const { tasks } = project;

  const completedTasks = tasks.filter(
    (task) => task.status === TASK_STATUS.DONE,
  );

  const isCompleted =
    tasks.length > 0 &&
    completedTasks.length === tasks.length &&
    project.status !== PROJECT_STATUS.COMPLETED;

  const isNotCompleted =
    (tasks.length > 0 &&
      completedTasks.length !== tasks.length &&
      project.status === PROJECT_STATUS.COMPLETED) ||
    (tasks.length === 0 && project.status === PROJECT_STATUS.COMPLETED);

  const handleStatusChange = (value) => {
    updateProjectStatus({ projectId: project.id, status: value });
  };

  return (
    <div className="mb-8 space-y-2">
      <h2 className="flex items-center gap-4 text-3xl font-bold capitalize">
        {project.title}
        <StyledBadge style={project.status} />
      </h2>
      <p className="text-muted-foreground">
        {capitalize(project.description.trim(), "full-stop")}
      </p>
      {isCompleted && (
        <div className="flex items-center gap-4">
          <div className="bg-completed text-completed-foreground border-completed-border rounded-md p-1 text-base">
            All tasks are completed 🎉 —{" "}
            <Button
              variant="ghost"
              className="hover:text-completed-foreground p-0 underline hover:bg-transparent hover:font-semibold"
              onClick={() => handleStatusChange("completed")}
            >
              Mark project as completed?
            </Button>
          </div>
          {isUpdatingStatus && <Spinner />}
        </div>
      )}

      {isNotCompleted && (
        <div className="flex items-center gap-4">
          <div className="bg-active text-active-foreground border-active-border rounded-md p-1 text-base">
            The project status is completed although there are active tasks —{" "}
            <Button
              variant="ghost"
              className="hover:text-active-foreground p-0 underline hover:bg-transparent hover:font-semibold"
              onClick={() => handleStatusChange("active")}
            >
              Change status to active?
            </Button>
          </div>
          {isUpdatingStatus && <Spinner />}
        </div>
      )}
      <Separator className="mt-5" />
    </div>
  );
};

export default ProjectDetailsHeader;
