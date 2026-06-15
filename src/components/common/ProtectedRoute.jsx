import { Navigate } from "react-router";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

import FullscreenLoader from "@/components/common/FullscreenLoader";

const ProtectedRoute = ({ children }) => {
  const { user, isPending } = useCurrentUser();

  if (isPending) return <FullscreenLoader />;

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
