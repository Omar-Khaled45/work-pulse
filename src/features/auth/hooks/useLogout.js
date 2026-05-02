import { logout as logoutAPI } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutAPI,

    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries("current-user");
    },

    onError: (err) => {
      console.log("Error: ", err);
    },
  });

  return { logout, isPending };
};
