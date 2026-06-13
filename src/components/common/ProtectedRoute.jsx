import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import FullscreenLoader from "./FullscreenLoader";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user, isPending } = useCurrentUser();

  if (isPending) return <FullscreenLoader />;

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
