import { login as loginAPI } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),

    onSuccess: (data) => {
      navigate("/home", { replace: true });
      queryClient.setQueryData(["user"], data.user);
    },

    onError: (err) => {
      console.log("Error: ", err);
    },
  });

  return { login, isPending };
};
