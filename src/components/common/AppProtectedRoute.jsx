import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

const AppProtectedRoute = ({ children }) => {
  const { user, isPending } = useCurrentUser();

  return children;
};

export default AppProtectedRoute;
