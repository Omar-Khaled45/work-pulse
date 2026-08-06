import WorkspacesContainer from "@/features/workspace/WorkspacesContainer";
import WorkspacesHeader from "@/features/workspace/WorkspacesHeader";
import WorkspacesOperations from "@/features/workspace/WorkspacesOperations";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";

const Workspaces = () => {
	return (
		<>
			<WorkspacesHeader />

			<div className="bg-background h-[calc(100vh-65px)]">
				<Container className="pt-20">
					<Heading title={"Your Workspaces"} />

					<WorkspacesOperations />

					<WorkspacesContainer />
				</Container>
			</div>
		</>
	);
};

export default Workspaces;
