import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Plus, SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import CreateWorkspaceForm from "./CreateWorkspaceForm";
import { useState } from "react";

const WorkspacesOperations = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="mt-10 flex justify-between">
      <Field orientation="horizontal" className="max-w-xs">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <Button>Search</Button>
      </Field>

      <Button onClick={() => setIsFormOpen(true)}>
        <Plus /> Create Workspace
      </Button>

      <CreateWorkspaceForm
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
      />
    </div>
  );
};

export default WorkspacesOperations;
