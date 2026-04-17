import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/common/Heading";
import ProjectItemsContainer from "@/features/projects/ProjectItemsContainer";
import ProjectsOperations from "@/features/projects/ProjectsOperations";
import CreateEditProjectForm from "@/features/projects/CreateEditProjectForm";

const Projects = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between space-y-3 @max-md:mb-3 @max-md:flex-col @md:items-center">
        <Heading title={"Projects"}>
          Manage all your team's ongoing initiatives.
        </Heading>

        <Button
          size="lg"
          className="@max-md:w-full"
          onClick={() => setIsFormOpen((prev) => !prev)}
        >
          <Plus /> Create Project
        </Button>

        {isFormOpen && (
          <CreateEditProjectForm
            isFormOpen={isFormOpen}
            setIsFormOpen={setIsFormOpen}
          />
        )}
      </div>

      <ProjectsOperations />

      <ProjectItemsContainer />
    </>
  );
};

export default Projects;
