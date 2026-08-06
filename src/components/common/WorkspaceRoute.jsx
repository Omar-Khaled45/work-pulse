import { Navigate, useParams } from "react-router";

const WorkspaceRoute = ({ children }) => {
	const { workspaceId } = useParams();

	if (!workspaceId) return <Navigate to="/workspaces" />;

	return children;
};

export default WorkspaceRoute;
