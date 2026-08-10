import { Navigate, Outlet } from "react-router";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

import FullscreenLoader from "@/components/common/FullscreenLoader";

const ProtectedRoute = () => {
	const { user, isPending } = useCurrentUser();

	if (isPending) return <FullscreenLoader />;

	if (!user) return <Navigate to="/login" replace />;

	return <Outlet />;
};

export default ProtectedRoute;
