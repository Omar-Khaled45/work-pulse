import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Plus } from "lucide-react";

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

const CreateProjectForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      due_date: data.due_date ? data.due_date.toISOString() : null,
    };

    console.log(formattedData);
  };

  return (
    <>
      <Button
        size="lg"
        className="@max-md:w-full"
        onClick={() => setIsFormOpen((prev) => !prev)}
      >
        <Plus /> Create Project
      </Button>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
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

            <FieldGroup className="[&_input]:py-5 [&_input]:text-base [&_label]:text-base [&_textarea]:pb-5 [&_textarea]:text-base">
              <Field className="space-y-2">
                <Label htmlFor="title">
                  Project Title<span className="text-destructive">*</span>
                </Label>
                <Input
                  aria-invalid={!!errors.title}
                  id="title"
                  {...register("title", {
                    required: "This field is required.",
                  })}
                  placeholder="Enter the project title..."
                />
              </Field>
              <Field className="space-y-2">
                <Label htmlFor="description">
                  Description<span className="text-destructive">*</span>
                </Label>
                <Textarea
                  aria-invalid={!!errors.description}
                  id="description"
                  {...register("description", {
                    required: "This field is required.",
                  })}
                  placeholder="Provide a high-level overview of the project's objectives."
                  className="resize-none"
                />
              </Field>

              <Controller
                control={control}
                name="due_date"
                render={({ field }) => <DatePicker field={field} />}
              />
            </FieldGroup>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" className="p-5 md:w-30">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="p-5 md:w-30">
                Create Task
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateProjectForm;
