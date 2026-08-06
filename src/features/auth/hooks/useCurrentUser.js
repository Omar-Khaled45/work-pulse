import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "@/services/apiAuth";

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
	};
};
