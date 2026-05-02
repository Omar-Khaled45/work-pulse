import { Navigate } from "react-router";

import FullscreenLoader from "@/components/common/FullscreenLoader";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

const ProtectedRoute = ({ children }) => {
  const { user, isPending, isAuthenticated } = useCurrentUser();

  if (isPending && !user) return <FullscreenLoader />;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
