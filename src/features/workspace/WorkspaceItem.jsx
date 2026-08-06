import { Link } from "react-router";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const WorkspaceItem = ({ workspace }) => {
	return (
		<Link to={`/workspace/${workspace.id}`}>
			<Card className="cursor-pointer shadow-md">
				<CardHeader>
					<CardTitle>{workspace.name}</CardTitle>
					{/* <CardDescription>
            {workspace.projects.length} Projects
          </CardDescription> */}
				</CardHeader>
			</Card>
		</Link>
	);
};

export default WorkspaceItem;
