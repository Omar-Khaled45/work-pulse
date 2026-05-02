import { getCurrentUser } from "@/services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const {
    data: user,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
  });

  return {
    user,
    isPending,
    isError,
    isAuthenticated: !!user && user?.role !== "guest",
  };
};
