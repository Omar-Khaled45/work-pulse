import { useQuery } from "@tanstack/react-query";
import WorkspaceItem from "./WorkspaceItem";
import { getWorkspaces } from "@/services/apiWorkspaces";
import Loader from "@/components/common/Loader";
import { FolderPlus } from "lucide-react";
import Empty from "@/components/common/Empty";

const WorkspacesContainer = () => {
  const { data: workspaces, isPending } = useQuery({
    queryKey: ["workspaces"],
    queryFn: getWorkspaces,
  });

  if (isPending) return <Loader />;

  if (workspaces.length === 0)
    return (
      <Empty
        icon={<FolderPlus />}
        title="No Workspaces yet"
        message="Let's create your first workspace."
      />
    );
  return (
    <div className="mt-3 grid grid-cols-3 gap-4">
      {workspaces.map((workspace) => (
        <WorkspaceItem key={workspace.id} workspace={workspace} />
      ))}
    </div>
  );
};

export default WorkspacesContainer;
