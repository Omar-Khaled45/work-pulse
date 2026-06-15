import WorkspaceItem from "./WorkspaceItem";
import Loader from "@/components/common/Loader";
import { FolderPlus } from "lucide-react";
import Empty from "@/components/common/Empty";
import { useGetWorkspaces } from "./useGetWorkspaces";

const WorkspacesContainer = () => {
  const { workspaces, isPending } = useGetWorkspaces();

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
