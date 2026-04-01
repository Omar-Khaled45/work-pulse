import { Calendar } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import StyledBadge from "@/components/common/StyledBadge";

import { formatDate } from "@/utils/formatDate";

const ProjectItem = ({ project }) => {
  const calcProgress =
    Math.round(
      (project.tasks.filter((task) => task.status === "completed").length /
        project.tasks.length) *
        100,
    ) || 0;

  return (
    <Card
      className={
        "border-border group transition-300 cursor-pointer justify-between px-5 shadow-lg hover:-translate-y-2"
      }
    >
      <div className="flex justify-between">
        <CardTitle
          className={
            "group-hover:text-primary transition-300 text-xl font-semibold capitalize"
          }
        >
          {project.title}
        </CardTitle>
        <StyledBadge style={project.status} />
      </div>
      <CardContent className={"text-muted-foreground space-y-5 px-0"}>
        <div className="text-muted-foreground flex items-center gap-2 text-xs font-semibold">
          <Calendar size={16} />
          <span>{formatDate(project.due_date)}</span>
        </div>

        <Field className="w-full">
          <FieldLabel htmlFor="progress-upload">
            <span>Progress</span>
            <span className="ml-auto">{calcProgress}%</span>
          </FieldLabel>
          <Progress
            value={calcProgress}
            id="progress-upload"
            className={"bg-primary/20"}
          />
        </Field>
      </CardContent>
    </Card>
  );
};

export default ProjectItem;
