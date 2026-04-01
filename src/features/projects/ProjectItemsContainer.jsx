import { useQuery } from "@tanstack/react-query";
import { FolderPlus } from "lucide-react";

import { getProjects } from "@/services/apiProjects";

import Loader from "@/components/common/Loader";
import Empty from "@/components/common/Empty";
import ProjectItem from "./ProjectItem";

const ProjectItemsContainer = () => {
  const {
    isPending,
    isError,
    data: projects,
    error,
  } = useQuery({ queryKey: ["projects"], queryFn: getProjects });

  if (isPending) return <Loader />;

  if (!projects.length)
    return (
      <Empty
        icon={<FolderPlus />}
        title="No Project yet"
        message="Get started by creating a new project."
      />
    );

  if (isError) console.log(error.message);

  return (
    <div className="grid gap-4 @md:grid-cols-2 @lg:grid-cols-3">
      {projects?.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectItemsContainer;
