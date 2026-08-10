import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { logout as logoutAPI } from "@/services/apiAuth";

export const useLogout = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate: logout, isPending } = useMutation({
		mutationFn: logoutAPI,

		onSuccess: () => {
			queryClient.clear();

			navigate("/login", { replace: true });
		},

		onError: (err) => {
			console.log("Error: ", err);
		},
	});

	return { logout, isPending };
};
