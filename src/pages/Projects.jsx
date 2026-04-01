import { Funnel, Plus, SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

import Heading from "@/components/common/Heading";
import ProjectItemsContainer from "@/features/projects/ProjectItemsContainer";

const Projects = () => {
  return (
    <>
      <div className="flex justify-between space-y-3 @max-md:mb-3 @max-md:flex-col @md:items-center">
        <Heading title={"Projects"}>
          Manage all your team's ongoing initiatives.
        </Heading>
        <Button size="lg" className="@max-md:w-full">
          <Plus /> Create Project
        </Button>
      </div>

      <div className="mb-5 flex max-w-sm gap-3">
        <InputGroup className={"bg-white"}>
          <InputGroupInput id="inline-start-input" placeholder="Search..." />
          <InputGroupAddon align="inline-start">
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
        <Button variant="outline">
          <Funnel />
        </Button>
      </div>

      <ProjectItemsContainer />
    </>
  );
};

export default Projects;
