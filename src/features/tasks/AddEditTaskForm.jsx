import { useState } from "react";
import { useParams } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { CircleAlert, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "@/components/common/DatePicker";
import Priority from "@/features/tasks/Priority";
import AssignMember from "@/features/tasks/AssignMember";

import { addEditTask } from "@/services/apiTasks";

const AddEditTaskForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { projectId } = useParams();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({});

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: addEditTask,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-details"] });
      setIsFormOpen(false);
      reset();
    },
  });

  const handleOpenForm = (open) => {
    setIsFormOpen(open);
    if (!open) reset();
  };

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      project_id: projectId,
      due_date: data.due_date ? data.due_date.toISOString() : null,
    };

    mutate(formattedData);
  };

  return (
    <>
      <Button size="lg" onClick={() => setIsFormOpen((prev) => !prev)}>
        <Plus /> Add Task
      </Button>

      <Dialog
        open={isFormOpen}
        onOpenChange={!isPending ? handleOpenForm : undefined}
      >
        <DialogContent className="w-150 p-5">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader className="gap-1">
              <DialogTitle className="text-2xl font-bold">
                Create Task
              </DialogTitle>
              <DialogDescription className="text-base">
                Define the scope and foundational details of your project.
              </DialogDescription>
            </DialogHeader>

            <FieldGroup className="gap-4 [&_input]:py-5 [&_input]:text-base [&_label]:text-base [&_textarea]:pb-5 [&_textarea]:text-base">
              <Field className="space-y-1">
                <Label htmlFor="title">
                  Project Title<span className="text-destructive">*</span>
                </Label>
                <Input
                  aria-invalid={Boolean(errors.title)}
                  id="title"
                  {...register("title", {
                    required:
                      "Project title is required. (Minimum 3 characters)",
                    minLength: { value: 3, message: "Minimum 3 characters." },
                  })}
                  placeholder="Enter the project title..."
                />
                {errors.title && (
                  <p className="text-destructive flex items-center gap-2">
                    <CircleAlert size={18} /> {errors.title.message}
                  </p>
                )}
              </Field>

              <Field className="space-y-1">
                <Label htmlFor="description">
                  Description<span className="text-destructive">*</span>
                </Label>
                <Textarea
                  aria-invalid={Boolean(errors.description)}
                  id="description"
                  {...register("description", {
                    required: "Project description is required.",
                    minLength: { value: 3, message: "Minimum 3 characters." },
                  })}
                  placeholder="Provide a high-level overview of the project's objectives."
                  className="resize-none"
                />
                {errors.description && (
                  <p className="text-destructive flex items-center gap-2">
                    <CircleAlert size={18} /> {errors.description.message}
                  </p>
                )}
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <Controller
                    control={control}
                    name="priority"
                    rules={{ required: "You should select priority level." }}
                    render={({ field }) => (
                      <Priority field={field} error={errors.priority} />
                    )}
                  />
                </Field>

                <Field>
                  <Controller
                    control={control}
                    name="assigned_to"
                    rules={{ required: "You should assign a member." }}
                    render={({ field }) => (
                      <AssignMember field={field} error={errors.assigned_to} />
                    )}
                  />
                </Field>
              </div>

              <Field>
                <Controller
                  control={control}
                  name="due_date"
                  rules={{ required: "You should pick a date." }}
                  render={({ field }) => (
                    <DatePicker field={field} error={errors.due_date} />
                  )}
                />
              </Field>
            </FieldGroup>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" className="p-5 md:w-30">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className="p-5 md:w-30"
                disabled={isPending}
              >
                {isPending ? "Adding..." : "Add Task"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditTaskForm;
