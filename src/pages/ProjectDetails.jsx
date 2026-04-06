import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";
import ProjectDetailsTasksTable from "@/features/projects/ProjectDetailsTasksTable";
import ProjectDetailsHeader from "@/features/projects/ProjectDetailsHeader";
import ProjectStats from "@/features/projects/ProjectStats";

import { getProjects } from "@/services/apiProjects";

const ProjectDetails = () => {
  const { id } = useParams();

  const {
    isPending,
    isError,
    data: project,
    error,
  } = useQuery({
    queryKey: ["project-details", id],
    queryFn: () => getProjects({ id }),
  });

  if (isPending) return <Loader />;

  if (isError) {
    return <Error error={error.message} />;
  }

  return (
    <>
      <ProjectDetailsHeader project={project} />

      <div className="flex flex-col gap-6 @5xl:flex-row">
        <ProjectDetailsTasksTable project={project} />

        <ProjectStats project={project} />
      </div>
    </>
  );
};

export default ProjectDetails;
