import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";
import ProjectDetailsTasksTable from "@/features/projects/ProjectDetailsTasksTable";
import ProjectDetailsHeader from "@/features/projects/ProjectDetailsHeader";
import ProjectStats from "@/features/projects/ProjectStats";

import { useGetProjectDetails } from "@/features/projects/useGetProjectDetails";

const ProjectDetails = () => {
  const { project, isError, error, isFetchingProjectDetails } =
    useGetProjectDetails();

  if (isFetchingProjectDetails) return <Loader />;

  if (isError) {
    return <Error error={error.message} />;
  }

  return (
    <>
      <ProjectDetailsHeader project={project} />

      <div className="jut flex flex-col gap-6 @5xl:flex-row">
        <ProjectDetailsTasksTable project={project} />

        <ProjectStats project={project} />
      </div>
    </>
  );
};

export default ProjectDetails;
