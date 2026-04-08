import Heading from "@/components/common/Heading";
import ProjectItemsContainer from "@/features/projects/ProjectItemsContainer";
import ProjectsOperations from "@/features/projects/ProjectsOperations";
import CreateProjectForm from "@/features/projects/CreateProjectForm";

const Projects = () => {
  return (
    <>
      <div className="flex justify-between space-y-3 @max-md:mb-3 @max-md:flex-col @md:items-center">
        <Heading title={"Projects"}>
          Manage all your team's ongoing initiatives.
        </Heading>

        <CreateProjectForm />
      </div>

      <ProjectsOperations />

      <ProjectItemsContainer />
    </>
  );
};

export default Projects;
