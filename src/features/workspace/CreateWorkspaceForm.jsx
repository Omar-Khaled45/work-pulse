import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { CircleAlert } from "lucide-react";

import { useCreateWorkspace } from "./useCreateWorkspace";

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

const CreateWorkspaceForm = ({ isFormOpen, setIsFormOpen }) => {
  const { isCreating, createWorkspace } = useCreateWorkspace();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const handleOpenForm = (open) => {
    setIsFormOpen(open);
    if (!open) reset();
  };

  const onSubmit = (data) => {
    createWorkspace(data, {
      onSuccess: (data) => {
        setIsFormOpen(false);
        queryClient.invalidateQueries({ queryKey: ["workspaces"] });
        navigate(`/workspace/${data.id}`, { replace: true });
      },
    });
  };

  return (
    <Dialog open={isFormOpen} onOpenChange={handleOpenForm}>
      <DialogContent className="w-150 p-5">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="gap-1">
            <DialogTitle className="text-2xl font-bold">
              Create Workspace
            </DialogTitle>
            <DialogDescription className="text-base">
              Give your new workspace a name.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="gap-4 [&_input]:py-5 [&_input]:text-base [&_label]:text-base [&_textarea]:pb-5 [&_textarea]:text-base">
            <Field className="space-y-1">
              <Label htmlFor="title">
                Workspace Name<span className="text-destructive">*</span>
              </Label>
              <Input
                aria-invalid={Boolean(errors.title)}
                id="name"
                {...register("name", {
                  required:
                    "Workspace name is required. (Minimum 3 characters)",
                  minLength: { value: 3, message: "Minimum 3 characters." },
                })}
                placeholder="Enter the name..."
              />
              {errors.name && (
                <p className="text-destructive flex items-center gap-2">
                  <CircleAlert size={18} /> {errors.name.message}
                </p>
              )}
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
              className="p-5 md:min-w-30"
              disabled={isCreating}
            >
              {isCreating ? "Creating..." : "Create Workspace"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkspaceForm;
