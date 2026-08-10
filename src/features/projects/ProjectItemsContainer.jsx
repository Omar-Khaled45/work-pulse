import { useSearchParams } from "react-router";
import { FolderPlus } from "lucide-react";

import { useGetProjects } from "@/features/projects/useGetProjects";
import { useGetWorkspaceRoles } from "../workspace/useGetWorkspaceRoles";

import Loader from "@/components/common/Loader";
import Empty from "@/components/common/Empty";
import Error from "@/components/common/Error";
import ProjectItem from "@/features/projects/ProjectItem";

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

	const { data, isGettingRoles } = useGetWorkspaceRoles();

	if (isFetchingProjects || isGettingRoles) return <Loader />;

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
				<ProjectItem key={project.id} project={project} role={data.role} />
			))}
		</div>
	);
};

export default ProjectItemsContainer;
