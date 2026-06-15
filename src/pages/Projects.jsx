import { useState } from "react";
import { Plus } from "lucide-react";

import { useGetWorkspaceRoles } from "@/features/workspace/useGetWorkspaceRoles";

import { Button } from "@/components/ui/button";
import Heading from "@/components/common/Heading";
import ProjectItemsContainer from "@/features/projects/ProjectItemsContainer";
import ProjectsOperations from "@/features/projects/ProjectsOperations";
import CreateEditProjectForm from "@/features/projects/CreateEditProjectForm";

const Projects = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { data } = useGetWorkspaceRoles();

  return (
    <>
      <div className="mb-3 flex justify-between space-y-3 @max-md:mb-3 @max-md:flex-col @md:items-center">
        <Heading title={"Projects"}>
          Manage all your team's ongoing initiatives.
        </Heading>

        {data?.role === "admin" && (
          <>
            <Button
              size="lg"
              className="@max-md:w-full"
              onClick={() => setIsFormOpen(true)}
            >
              <Plus /> Create Project
            </Button>

            <CreateEditProjectForm
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          </>
        )}
      </div>

      <ProjectsOperations />

      <ProjectItemsContainer />
    </>
  );
};

export default Projects;
