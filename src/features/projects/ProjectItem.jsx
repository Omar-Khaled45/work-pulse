import { useState } from "react";
import { Link } from "react-router";
import { Calendar, EllipsisVertical, Pencil, Trash2 } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
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
import CreateEditProjectForm from "@/features/projects/CreateEditProjectForm";

import { TASK_STATUS } from "@/constants/constants";

import { formatDate } from "@/utils/formatDate";

import { useDeleteProject } from "@/features/projects/useDeleteProject";

const ProjectItem = ({ project }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { deleteProject, isDeleting } = useDeleteProject();

  const { tasks, ...projectToEdit } = project;

  const calcProgress =
    tasks.length > 0
      ? Math.round(
          (tasks.filter((task) => task.status === TASK_STATUS.DONE).length /
            tasks.length) *
            100,
        )
      : 0;

  const handleDeleteProject = () => {
    deleteProject(project.id, {
      onSuccess: () => setIsAlertOpen(false),
    });
  };

  return (
    <>
      <Card
        className={
          "border-border group transition-300 h-full justify-between px-5 shadow-lg"
        }
      >
        <div className="flex justify-between gap-2">
          <Link to={project.id}>
            <CardTitle
              className={
                "group-hover:text-primary transition-300 cursor-pointer text-xl font-semibold capitalize hover:underline"
              }
            >
              {project.title}
            </CardTitle>
          </Link>
          <div className="flex items-center gap-1">
            <StyledBadge style={project.status} />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setIsFormOpen(true)}>
                  <Pencil /> Edit
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
          </div>
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

      {isFormOpen && (
        <CreateEditProjectForm
          isFormOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
          projectToEdit={projectToEdit}
        />
      )}

      <AlertConfirmDelete
        alertTitle={"Delete project?"}
        alertDescription={
          "The selected project will be deleted permanently, including its tasks. This action cannot be undone."
        }
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
        isDeleting={isDeleting}
        handleDelete={handleDeleteProject}
      />
    </>
  );
};

export default ProjectItem;
