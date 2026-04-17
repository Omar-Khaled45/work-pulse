import { useSearchParams } from "react-router";
import { FolderPlus } from "lucide-react";

import Loader from "@/components/common/Loader";
import Empty from "@/components/common/Empty";
import ProjectItem from "./ProjectItem";
import Error from "@/components/common/Error";

import { useGetProjects } from "@/features/projects/useGetProjects";

const ProjectItemsContainer = () => {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status") || "all";
  const searchValue = searchParams.get("q") || "";

  // Filtering projects: API-Side Filtering
  const filter =
    filterValue && filterValue !== "all"
      ? { field: "status", value: filterValue }
      : null;

  const search =
    searchValue && searchValue !== ""
      ? { field: "q", value: searchValue }
      : null;

  const { projects, isFetchingProjects, isError, error } = useGetProjects({
    filter,
    search,
  });

  if (isFetchingProjects) return <Loader />;

  if (isError) {
    console.log(error);
    return <Error error={error.message} />;
  }

  if (!projects.length && !filter && !search)
    return (
      <Empty
        icon={<FolderPlus />}
        title="No Projects yet"
        message="Get started by creating a new project."
      />
    );

  if (!projects.length && (filter || search))
    return (
      <Empty
        icon={<FolderPlus />}
        title="No Projects found"
        message="Try adjusting your filters."
      />
    );

  return (
    <div className="grid gap-4 @xl:grid-cols-2 @2xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectItemsContainer;
