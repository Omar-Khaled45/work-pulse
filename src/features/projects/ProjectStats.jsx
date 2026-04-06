import { Calendar, CheckSquare } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

import { formatDate } from "@/utils/formatDate";

const ProjectStats = ({ project }) => {
  const { tasks } = project;

  const completedTasks = tasks.filter((task) => task.status === "done");

  const calcProgress =
    Math.round((completedTasks.length / tasks.length) * 100) || 0;

  return (
    tasks.length > 0 && (
      <div className="flex-1">
        <Card className="space-y-3 p-5">
          <h5 className="text-muted-foreground text-base font-semibold">
            Project Stats
          </h5>

          <Field className="w-full">
            <FieldLabel htmlFor="progress-upload">
              <span>Overall Progress</span>
              <span className="ml-auto">{calcProgress}%</span>
            </FieldLabel>
            <Progress
              value={calcProgress}
              id="progress-upload"
              className={"bg-primary/20"}
            />
          </Field>

          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground flex items-center gap-2 font-semibold">
              <Calendar size={15} />
              Deadline
            </div>
            <span className="font-semibold">
              {formatDate(project.due_date)}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground flex items-center gap-2 font-semibold">
              <CheckSquare size={15} />
              Completion
            </div>
            <span className="font-semibold">
              {completedTasks.length}/{tasks.length} Tasks
            </span>
          </div>
        </Card>
      </div>
    )
  );
};

export default ProjectStats;
